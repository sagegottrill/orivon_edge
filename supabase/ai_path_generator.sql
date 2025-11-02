-- AI PATH GENERATION ALGORITHM (PostgreSQL Function)
-- This generates personalized learning paths based on learner profile and target job role

CREATE OR REPLACE FUNCTION generate_learning_path(
  p_learner_id UUID,
  p_job_role_id UUID,
  p_skill_assessment_id UUID
) RETURNS UUID AS $$
DECLARE
  v_learning_path_id UUID;
  v_path_name TEXT;
  v_target_role TEXT;
  v_experience_level TEXT;
  v_weekly_hours INTEGER;
  v_step_number INTEGER := 1;
  v_total_hours DECIMAL := 0;
  v_skill_record RECORD;
  v_course_record RECORD;
  v_current_proficiency INTEGER;
BEGIN
  -- Get learner profile
  SELECT lp.target_role, lp.experience_level, lp.weekly_hours_available
  INTO v_target_role, v_experience_level, v_weekly_hours
  FROM learner_profiles lp
  WHERE lp.id = p_learner_id;

  -- Create learning path
  v_path_name := v_target_role || ' Learning Path';
  
  INSERT INTO learning_paths (
    learner_id,
    job_role_id,
    path_name,
    description,
    difficulty_level,
    estimated_duration_weeks,
    total_estimated_hours,
    generation_algorithm,
    personalization_factors,
    status,
    started_at
  ) VALUES (
    p_learner_id,
    p_job_role_id,
    v_path_name,
    'AI-generated personalized path to become a ' || v_target_role,
    v_experience_level,
    24, -- Will be recalculated
    240, -- Will be recalculated
    'v1.0_greedy_skill_gap',
    jsonb_build_object(
      'target_role', v_target_role,
      'experience_level', v_experience_level,
      'weekly_hours', v_weekly_hours,
      'generation_date', NOW()
    ),
    'active',
    NOW()
  ) RETURNING id INTO v_learning_path_id;

  -- Get required skills for the job role, prioritized by importance
  FOR v_skill_record IN
    SELECT 
      s.id as skill_id,
      s.name as skill_name,
      s.estimated_hours,
      jrs.importance,
      jrs.proficiency_level,
      CASE jrs.importance
        WHEN 'required' THEN 3
        WHEN 'preferred' THEN 2
        ELSE 1
      END as priority_score
    FROM job_role_skills jrs
    JOIN skills s ON jrs.skill_id = s.id
    WHERE jrs.job_role_id = p_job_role_id
    ORDER BY priority_score DESC, s.demand_score DESC
  LOOP
    -- Check current proficiency (from assessment)
    -- Map skill names to assessment fields (simplified for v1)
    v_current_proficiency := 0;
    
    -- Only add courses if there's a skill gap
    IF v_current_proficiency < 70 THEN
      -- Find best courses for this skill
      FOR v_course_record IN
        SELECT 
          c.id,
          c.title,
          c.duration_hours,
          c.difficulty_level,
          c.rating,
          cs.proficiency_gain
        FROM courses c
        JOIN course_skills cs ON c.id = cs.course_id
        WHERE cs.skill_id = v_skill_record.skill_id
          AND c.is_active = TRUE
          AND c.difficulty_level = v_experience_level
        ORDER BY 
          CASE WHEN c.is_free THEN 0 ELSE 1 END, -- Prioritize free courses
          c.rating DESC,
          c.completion_rate DESC
        LIMIT 1 -- One course per skill for v1
      LOOP
        -- Create path step for this course
        INSERT INTO path_steps (
          learning_path_id,
          step_number,
          step_type,
          course_id,
          title,
          description,
          estimated_hours,
          target_skills,
          is_mandatory,
          is_unlocked
        ) VALUES (
          v_learning_path_id,
          v_step_number,
          'course',
          v_course_record.id,
          v_course_record.title,
          'Master ' || v_skill_record.skill_name,
          v_course_record.duration_hours,
          ARRAY[v_skill_record.skill_id],
          v_skill_record.importance = 'required',
          v_step_number = 1 -- Only first step unlocked initially
        );

        v_total_hours := v_total_hours + v_course_record.duration_hours;
        v_step_number := v_step_number + 1;
      END LOOP;

      -- Add assessment after every 3 courses
      IF v_step_number % 3 = 0 THEN
        INSERT INTO path_steps (
          learning_path_id,
          step_number,
          step_type,
          title,
          description,
          estimated_hours,
          target_skills,
          is_mandatory,
          is_unlocked
        ) VALUES (
          v_learning_path_id,
          v_step_number,
          'assessment',
          v_skill_record.skill_name || ' Assessment',
          'Test your knowledge of ' || v_skill_record.skill_name,
          2,
          ARRAY[v_skill_record.skill_id],
          TRUE,
          FALSE
        );

        v_step_number := v_step_number + 1;
      END IF;
    END IF;
  END LOOP;

  -- Add final capstone project
  INSERT INTO path_steps (
    learning_path_id,
    step_number,
    step_type,
    title,
    description,
    estimated_hours,
    target_skills,
    is_mandatory,
    is_unlocked
  ) VALUES (
    v_learning_path_id,
    v_step_number,
    'project',
    'Capstone Project: ' || v_target_role || ' Portfolio',
    'Build a complete project demonstrating all skills for ' || v_target_role,
    40,
    ARRAY(SELECT skill_id FROM job_role_skills WHERE job_role_id = p_job_role_id AND importance = 'required'),
    TRUE,
    FALSE
  );

  v_total_hours := v_total_hours + 40;

  -- Update learning path with calculated values
  UPDATE learning_paths
  SET 
    total_estimated_hours = CEIL(v_total_hours)::INTEGER,
    estimated_duration_weeks = CEIL(v_total_hours / v_weekly_hours)::INTEGER
  WHERE id = v_learning_path_id;

  -- Initialize path progress
  INSERT INTO path_progress (
    learner_id,
    learning_path_id,
    steps_total,
    hours_estimated
  ) VALUES (
    p_learner_id,
    v_learning_path_id,
    v_step_number,
    CEIL(v_total_hours)::INTEGER
  );

  -- Initialize learner metrics
  INSERT INTO learner_metrics (
    learner_id,
    learning_path_id,
    job_readiness_score,
    skill_acquisition_velocity,
    path_completion_rate
  ) VALUES (
    p_learner_id,
    v_learning_path_id,
    0,
    0,
    0
  );

  RETURN v_learning_path_id;
END;
$$ LANGUAGE plpgsql;

-- Function to generate AI recommendations based on progress
CREATE OR REPLACE FUNCTION generate_path_recommendations(
  p_learner_id UUID,
  p_learning_path_id UUID
) RETURNS VOID AS $$
DECLARE
  v_metrics RECORD;
  v_progress RECORD;
  v_recommendation_text TEXT;
  v_recommendation_type TEXT;
  v_priority TEXT;
BEGIN
  -- Get current metrics
  SELECT * INTO v_metrics
  FROM learner_metrics
  WHERE learner_id = p_learner_id 
    AND learning_path_id = p_learning_path_id
  ORDER BY calculated_at DESC
  LIMIT 1;

  -- Get current progress
  SELECT * INTO v_progress
  FROM path_progress
  WHERE learner_id = p_learner_id 
    AND learning_path_id = p_learning_path_id;

  -- Check for low engagement (no activity in 7 days)
  IF v_progress.last_activity_date < (CURRENT_DATE - INTERVAL '7 days') THEN
    INSERT INTO path_recommendations (
      learner_id,
      learning_path_id,
      recommendation_type,
      title,
      description,
      reasoning,
      priority,
      expires_at
    ) VALUES (
      p_learner_id,
      p_learning_path_id,
      'take_break',
      'Come back to learning',
      'You haven''t been active in a week. Even 30 minutes today can help maintain momentum.',
      'Consistent learning leads to better retention and faster completion.',
      'high',
      NOW() + INTERVAL '7 days'
    );
  END IF;

  -- Check for slow progress (PCR < 20% after 4 weeks)
  IF v_progress.progress_percentage < 20 
     AND EXTRACT(WEEK FROM AGE(NOW(), (SELECT started_at FROM learning_paths WHERE id = p_learning_path_id))) > 4 THEN
    INSERT INTO path_recommendations (
      learner_id,
      learning_path_id,
      recommendation_type,
      title,
      description,
      reasoning,
      priority,
      expires_at
    ) VALUES (
      p_learner_id,
      p_learning_path_id,
      'adjust_pace',
      'Adjust your learning schedule',
      'Consider increasing your weekly study hours to stay on track for your goal.',
      'Your current pace suggests you may need more time than estimated to complete this path.',
      'medium',
      NOW() + INTERVAL '14 days'
    );
  END IF;

  -- Check for high velocity (SAV > 3)
  IF v_metrics.skill_acquisition_velocity > 3 THEN
    INSERT INTO path_recommendations (
      learner_id,
      learning_path_id,
      recommendation_type,
      title,
      description,
      reasoning,
      priority,
      expires_at
    ) VALUES (
      p_learner_id,
      p_learning_path_id,
      'add_course',
      'You''re a fast learner!',
      'Consider adding advanced courses to challenge yourself and accelerate your progress.',
      'Your high learning velocity suggests you can handle more advanced content.',
      'low',
      NOW() + INTERVAL '30 days'
    );
  END IF;

  -- Check if job ready (JRS > 80%)
  IF v_metrics.job_readiness_score >= 80 THEN
    INSERT INTO path_recommendations (
      learner_id,
      learning_path_id,
      recommendation_type,
      title,
      description,
      reasoning,
      priority,
      expires_at
    ) VALUES (
      p_learner_id,
      p_learning_path_id,
      'focus_skill',
      '🎉 You''re job ready!',
      'Start applying for positions! Your Job Readiness Score indicates you have the skills employers are looking for.',
      'Companies are actively hiring for roles matching your skill set.',
      'critical',
      NOW() + INTERVAL '60 days'
    );
  END IF;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION generate_learning_path IS 'AI algorithm to generate personalized learning paths based on skill gaps';
COMMENT ON FUNCTION generate_path_recommendations IS 'Generate AI recommendations based on learner progress and engagement';
