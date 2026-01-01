// AI PATHFINDING SUPABASE API

import { supabase } from './supabase';
import type {
  LearnerProfile,
  SkillAssessment,
  LearningPath,
  PathStep,
  PathProgress,
  StepProgress,
  Course,
  Skill,
  JobRole,
  LearnerMetrics,
  PathRecommendation,
  Assessment,
  AssessmentResult,
  Certificate,
  LearningSession,
  DashboardData,
  PathOverview,
} from '../types/pathfinding';

// ============================================
// LEARNER PROFILE
// ============================================

export const createLearnerProfile = async (
  profile: Partial<LearnerProfile>
): Promise<LearnerProfile | null> => {
  const { data, error } = await supabase
    .from('learner_profiles')
    .insert([profile])
    .select()
    .single();

  if (error) {
    console.error('Error creating learner profile:', error);
    return null;
  }
  return data;
};

export const getLearnerProfile = async (
  userId: string
): Promise<LearnerProfile | null> => {
  const { data, error } = await supabase
    .from('learner_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching learner profile:', error);
    return null;
  }
  return data;
};

export const updateLearnerProfile = async (
  id: string,
  updates: Partial<LearnerProfile>
): Promise<LearnerProfile | null> => {
  const { data, error } = await supabase
    .from('learner_profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating learner profile:', error);
    return null;
  }
  return data;
};

// ============================================
// SKILL ASSESSMENTS
// ============================================

export const createSkillAssessment = async (
  assessment: Partial<SkillAssessment>
): Promise<SkillAssessment | null> => {
  const { data, error } = await supabase
    .from('skill_assessments')
    .insert([assessment])
    .select()
    .single();

  if (error) {
    console.error('Error creating skill assessment:', error);
    return null;
  }
  return data;
};

export const getLatestSkillAssessment = async (
  learnerId: string
): Promise<SkillAssessment | null> => {
  const { data, error } = await supabase
    .from('skill_assessments')
    .select('*')
    .eq('learner_id', learnerId)
    .order('completed_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching skill assessment:', error);
    return null;
  }
  return data;
};

// ============================================
// LEARNING PATHS
// ============================================

// MERN BACKEND URL
// CLIENT-SIDE GEMINI API
import { GoogleGenerativeAI } from '@google/generative-ai';

export const generateLearningPathWithAI = async (
  learnerId: string,
  jobRole: string,
  experienceLevel: string
): Promise<LearningPath | null> => {
  try {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    if (!API_KEY) {
      console.error('Missing VITE_GEMINI_API_KEY');
      throw new Error('Please set VITE_GEMINI_API_KEY in your .env file');
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Act as an expert technical curriculum designer.
      Create a comprehensive, 24-week learning path for a student wanting to become a "${jobRole}".
      The student's current level is "${experienceLevel}".
      
      Return ONLY valid JSON (no markdown) with this structure:
      {
        "path_name": "Title of the path",
        "description": "Short inspiring description",
        "difficulty_level": "${experienceLevel}",
        "steps": [
          {
            "step_number": 1,
            "title": "Week 1: [Topic]",
            "description": "What they will learn...",
            "step_type": "module"
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    // Cleanup markdown
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    const aiData = JSON.parse(text);

    // Save to Supabase (Database)
    // 1. Create Path
    const pathData = {
      learner_id: learnerId,
      path_name: aiData.path_name,
      description: aiData.description,
      difficulty_level: aiData.difficulty_level,
      status: 'active',
      started_at: new Date().toISOString()
    };

    const { data: newPath, error: pathError } = await supabase
      .from('learning_paths')
      .insert([pathData])
      .select()
      .single();

    if (pathError) throw pathError;

    // 2. Create Steps
    const stepsData = aiData.steps.map((step: any) => ({
      learning_path_id: newPath.id,
      step_number: step.step_number,
      title: step.title,
      description: step.description,
      step_type: step.step_type,
      status: 'pending'
    }));

    const { error: stepsError } = await supabase
      .from('path_steps')
      .insert(stepsData);

    if (stepsError) throw stepsError;

    return newPath;

  } catch (err) {
    console.error('AI Path Generation Failed:', err);
    throw err;
  }
};

export const createLearningPath = async (
  path: Partial<LearningPath>
): Promise<LearningPath | null> => {
  const { data, error } = await supabase
    .from('learning_paths')
    .insert([path])
    .select()
    .single();

  if (error) {
    console.error('Error creating learning path:', error);
    return null;
  }
  return data;
};

export const getActiveLearningPath = async (
  learnerId: string
): Promise<LearningPath | null> => {
  const { data, error } = await supabase
    .from('learning_paths')
    .select('*')
    .eq('learner_id', learnerId)
    .eq('status', 'active')
    .single();

  if (error) {
    console.error('Error fetching active learning path:', error);
    return null;
  }
  return data;
};

export const getAllLearningPaths = async (
  learnerId: string
): Promise<LearningPath[]> => {
  const { data, error } = await supabase
    .from('learning_paths')
    .select('*')
    .eq('learner_id', learnerId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching learning paths:', error);
    return [];
  }
  return data || [];
};

export const updateLearningPathStatus = async (
  id: string,
  status: string
): Promise<LearningPath | null> => {
  const { data, error } = await supabase
    .from('learning_paths')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating learning path status:', error);
    return null;
  }
  return data;
};

// ============================================
// PATH STEPS
// ============================================

export const getPathSteps = async (
  learningPathId: string
): Promise<PathStep[]> => {
  const { data, error } = await supabase
    .from('path_steps')
    .select('*')
    .eq('learning_path_id', learningPathId)
    .order('step_number', { ascending: true });

  if (error) {
    console.error('Error fetching path steps:', error);
    return [];
  }
  return data || [];
};

export const createPathStep = async (
  step: Partial<PathStep>
): Promise<PathStep | null> => {
  const { data, error } = await supabase
    .from('path_steps')
    .insert([step])
    .select()
    .single();

  if (error) {
    console.error('Error creating path step:', error);
    return null;
  }
  return data;
};

// ============================================
// PROGRESS TRACKING
// ============================================

export const getPathProgress = async (
  learnerId: string,
  learningPathId: string
): Promise<PathProgress | null> => {
  const { data, error } = await supabase
    .from('path_progress')
    .select('*')
    .eq('learner_id', learnerId)
    .eq('learning_path_id', learningPathId)
    .single();

  if (error) {
    console.error('Error fetching path progress:', error);
    return null;
  }
  return data;
};

export const updatePathProgress = async (
  id: string,
  updates: Partial<PathProgress>
): Promise<PathProgress | null> => {
  const { data, error } = await supabase
    .from('path_progress')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating path progress:', error);
    return null;
  }
  return data;
};

export const getStepProgress = async (
  learnerId: string,
  pathStepId: string
): Promise<StepProgress | null> => {
  const { data, error } = await supabase
    .from('step_progress')
    .select('*')
    .eq('learner_id', learnerId)
    .eq('path_step_id', pathStepId)
    .single();

  if (error) {
    console.error('Error fetching step progress:', error);
    return null;
  }
  return data;
};

export const getAllStepProgress = async (
  learnerId: string,
  learningPathId: string
): Promise<StepProgress[]> => {
  const { data, error } = await supabase
    .from('step_progress')
    .select(`
      *,
      path_steps!inner(learning_path_id)
    `)
    .eq('learner_id', learnerId)
    .eq('path_steps.learning_path_id', learningPathId);

  if (error) {
    console.error('Error fetching all step progress:', error);
    return [];
  }
  return data || [];
};

export const updateStepProgress = async (
  id: string,
  updates: Partial<StepProgress>
): Promise<StepProgress | null> => {
  const { data, error } = await supabase
    .from('step_progress')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating step progress:', error);
    return null;
  }
  return data;
};

export const createOrUpdateStepProgress = async (
  learnerId: string,
  pathStepId: string,
  updates: Partial<StepProgress>
): Promise<StepProgress | null> => {
  // Try to get existing progress
  const existing = await getStepProgress(learnerId, pathStepId);

  if (existing) {
    return updateStepProgress(existing.id, updates);
  }

  // Create new progress
  const { data, error } = await supabase
    .from('step_progress')
    .insert([{
      learner_id: learnerId,
      path_step_id: pathStepId,
      ...updates,
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating step progress:', error);
    return null;
  }
  return data;
};

// ============================================
// LEARNING SESSIONS
// ============================================

export const startLearningSession = async (
  learnerId: string,
  pathStepId?: string
): Promise<LearningSession | null> => {
  const { data, error } = await supabase
    .from('learning_sessions')
    .insert([{
      learner_id: learnerId,
      path_step_id: pathStepId,
      session_start: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    console.error('Error starting learning session:', error);
    return null;
  }
  return data;
};

export const endLearningSession = async (
  sessionId: string,
  activities?: Record<string, any>
): Promise<LearningSession | null> => {
  const sessionEnd = new Date();

  const { data: session } = await supabase
    .from('learning_sessions')
    .select('session_start')
    .eq('id', sessionId)
    .single();

  if (!session) return null;

  const sessionStart = new Date(session.session_start);
  const durationMinutes = Math.round((sessionEnd.getTime() - sessionStart.getTime()) / 60000);

  const { data, error } = await supabase
    .from('learning_sessions')
    .update({
      session_end: sessionEnd.toISOString(),
      duration_minutes: durationMinutes,
      activities,
    })
    .eq('id', sessionId)
    .select()
    .single();

  if (error) {
    console.error('Error ending learning session:', error);
    return null;
  }
  return data;
};

export const getRecentSessions = async (
  learnerId: string,
  limit: number = 10
): Promise<LearningSession[]> => {
  const { data, error } = await supabase
    .from('learning_sessions')
    .select('*')
    .eq('learner_id', learnerId)
    .order('session_start', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent sessions:', error);
    return [];
  }
  return data || [];
};

// ============================================
// COURSES & SKILLS
// ============================================

export const getCourse = async (courseId: string): Promise<Course | null> => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single();

  if (error) {
    console.error('Error fetching course:', error);
    return null;
  }
  return data;
};

export const searchCourses = async (
  query: string,
  filters?: {
    platform?: string;
    difficulty?: string;
    isFree?: boolean;
  }
): Promise<Course[]> => {
  let queryBuilder = supabase
    .from('courses')
    .select('*')
    .eq('is_active', true)
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

  if (filters?.platform) {
    queryBuilder = queryBuilder.eq('platform', filters.platform);
  }
  if (filters?.difficulty) {
    queryBuilder = queryBuilder.eq('difficulty_level', filters.difficulty);
  }
  if (filters?.isFree !== undefined) {
    queryBuilder = queryBuilder.eq('is_free', filters.isFree);
  }

  const { data, error } = await queryBuilder;

  if (error) {
    console.error('Error searching courses:', error);
    return [];
  }
  return data || [];
};

export const getSkill = async (skillId: string): Promise<Skill | null> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('id', skillId)
    .single();

  if (error) {
    console.error('Error fetching skill:', error);
    return null;
  }
  return data;
};

export const getAllSkills = async (): Promise<Skill[]> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('demand_score', { ascending: false });

  if (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
  return data || [];
};

export const getJobRole = async (jobRoleId: string): Promise<JobRole | null> => {
  const { data, error } = await supabase
    .from('job_roles')
    .select('*')
    .eq('id', jobRoleId)
    .single();

  if (error) {
    console.error('Error fetching job role:', error);
    return null;
  }
  return data;
};

export const getAllJobRoles = async (): Promise<JobRole[]> => {
  const { data, error } = await supabase
    .from('job_roles')
    .select('*')
    .order('title', { ascending: true });

  if (error) {
    console.error('Error fetching job roles:', error);
    return [];
  }
  return data || [];
};

// ============================================
// LEARNER METRICS
// ============================================

export const getLearnerMetrics = async (
  learnerId: string,
  learningPathId?: string
): Promise<LearnerMetrics | null> => {
  let query = supabase
    .from('learner_metrics')
    .select('*')
    .eq('learner_id', learnerId)
    .order('calculated_at', { ascending: false })
    .limit(1);

  if (learningPathId) {
    query = query.eq('learning_path_id', learningPathId);
  }

  const { data, error } = await query.single();

  if (error) {
    console.error('Error fetching learner metrics:', error);
    return null;
  }
  return data;
};

export const triggerMetricsUpdate = async (
  learnerId: string
): Promise<void> => {
  const { error } = await supabase.rpc('update_learner_metrics', {
    p_learner_id: learnerId,
  });

  if (error) {
    console.error('Error updating metrics:', error);
  }
};

// ============================================
// RECOMMENDATIONS
// ============================================

export const getActiveRecommendations = async (
  learnerId: string
): Promise<PathRecommendation[]> => {
  const { data, error } = await supabase
    .from('path_recommendations')
    .select('*')
    .eq('learner_id', learnerId)
    .eq('status', 'pending')
    .order('priority', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
  return data || [];
};

export const updateRecommendationStatus = async (
  id: string,
  status: 'accepted' | 'rejected'
): Promise<PathRecommendation | null> => {
  const { data, error } = await supabase
    .from('path_recommendations')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating recommendation status:', error);
    return null;
  }
  return data;
};

// ============================================
// DASHBOARD DATA
// ============================================

export const getDashboardData = async (
  userId: string
): Promise<DashboardData | null> => {
  try {
    // Get learner profile
    const profile = await getLearnerProfile(userId);
    if (!profile) return null;

    // Get active learning path
    const currentPath = await getActiveLearningPath(profile.id);

    // Get metrics
    const metrics = await getLearnerMetrics(
      profile.id,
      currentPath?.id
    );

    // Get progress
    let progress = null;
    if (currentPath) {
      progress = await getPathProgress(profile.id, currentPath.id);
    }

    // Get recent activity
    const recentActivity = await getRecentSessions(profile.id, 5);

    // Get recommendations
    const recommendations = await getActiveRecommendations(profile.id);

    // Get upcoming steps
    let upcomingSteps: PathStep[] = [];
    if (currentPath) {
      const allSteps = await getPathSteps(currentPath.id);
      const allProgress = await getAllStepProgress(profile.id, currentPath.id);

      // Find next uncompleted steps
      upcomingSteps = allSteps
        .filter((step) => {
          const stepProg = allProgress.find((p) => p.path_step_id === step.id);
          return !stepProg || stepProg.status !== 'completed';
        })
        .slice(0, 3);
    }

    return {
      profile,
      currentPath: currentPath || undefined,
      metrics: metrics || {
        id: '',
        learner_id: profile.id,
        job_readiness_score: 0,
        skill_acquisition_velocity: 0,
        path_completion_rate: 0,
        calculated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      },
      progress: progress || {
        id: '',
        learner_id: profile.id,
        learning_path_id: currentPath?.id || '',
        steps_completed: 0,
        steps_total: 0,
        progress_percentage: 0,
        hours_spent: 0,
        hours_estimated: 0,
        avg_hours_per_week: 0,
        completion_velocity: 0,
        current_streak_days: 0,
        longest_streak_days: 0,
        last_activity_date: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      recentActivity,
      recommendations,
      upcomingSteps,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
};

export const getPathOverview = async (
  learnerId: string,
  learningPathId: string
): Promise<PathOverview | null> => {
  try {
    const [path, steps, progress] = await Promise.all([
      supabase
        .from('learning_paths')
        .select('*')
        .eq('id', learningPathId)
        .single(),
      getPathSteps(learningPathId),
      getPathProgress(learnerId, learningPathId),
    ]);

    if (path.error || !path.data) return null;

    // Get job role separately
    const jobRole = path.data.job_role_id
      ? await getJobRole(path.data.job_role_id)
      : null;

    return {
      path: path.data,
      steps,
      progress: progress || {
        id: '',
        learner_id: learnerId,
        learning_path_id: learningPathId,
        steps_completed: 0,
        steps_total: steps.length,
        progress_percentage: 0,
        hours_spent: 0,
        hours_estimated: 0,
        avg_hours_per_week: 0,
        completion_velocity: 0,
        current_streak_days: 0,
        longest_streak_days: 0,
        last_activity_date: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      jobRole: jobRole || {
        id: '',
        title: 'Unknown Role',
        category: '',
        job_openings_count: 0,
        created_at: '',
        updated_at: '',
      },
    };
  } catch (error) {
    console.error('Error fetching path overview:', error);
    return null;
  }
};
