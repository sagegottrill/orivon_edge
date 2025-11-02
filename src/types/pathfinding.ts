// AI PATHFINDING PLATFORM TYPES

// ============================================
// USER & PROFILE TYPES
// ============================================

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic' | 'mixed';
export type LearningTime = 'morning' | 'afternoon' | 'evening' | 'flexible';

export interface LearnerProfile {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  phone?: string;
  location?: string;
  
  // Career Information
  current_role?: string;
  target_role: string;
  experience_level: ExperienceLevel;
  industry_preference: string[];
  
  // Learning Preferences
  learning_style: LearningStyle;
  weekly_hours_available: number;
  preferred_learning_time: LearningTime;
  
  // Background
  education_level?: string;
  previous_skills: string[];
  languages: string[];
  
  // Status
  onboarding_completed: boolean;
  profile_completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface SkillAssessment {
  id: string;
  learner_id: string;
  assessment_type: 'initial' | 'progress' | 'final';
  
  // Technical Skills (0-100)
  programming_fundamentals: number;
  web_development: number;
  data_analysis: number;
  mobile_development: number;
  cloud_computing: number;
  ai_ml: number;
  
  // Soft Skills (0-100)
  problem_solving: number;
  communication: number;
  teamwork: number;
  adaptability: number;
  
  overall_score: number;
  completed_at: string;
}

// ============================================
// SKILLS & COMPETENCIES
// ============================================

export type SkillCategory = 'technical' | 'soft' | 'domain';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  subcategory?: string;
  description?: string;
  
  // Market Data
  demand_score: number; // 0-100
  average_salary_impact?: number;
  
  // Learning Metadata
  difficulty_level: DifficultyLevel;
  estimated_hours?: number;
  prerequisites: string[]; // skill IDs
  
  created_at: string;
  updated_at: string;
}

export interface JobRole {
  id: string;
  title: string;
  description?: string;
  category: string;
  
  // Market Data
  average_salary_min?: number;
  average_salary_max?: number;
  job_openings_count: number;
  growth_rate?: number;
  
  created_at: string;
  updated_at: string;
}

export type SkillImportance = 'required' | 'preferred' | 'nice-to-have';
export type ProficiencyLevel = 'basic' | 'intermediate' | 'advanced' | 'expert';

export interface JobRoleSkill {
  id: string;
  job_role_id: string;
  skill_id: string;
  importance: SkillImportance;
  proficiency_level: ProficiencyLevel;
}

// ============================================
// LEARNING PATHS
// ============================================

export type PathStatus = 'draft' | 'active' | 'paused' | 'completed' | 'abandoned';
export type StepType = 'course' | 'project' | 'assessment' | 'milestone';
export type StepStatus = 'not_started' | 'in_progress' | 'completed' | 'skipped';

export interface LearningPath {
  id: string;
  learner_id: string;
  job_role_id: string;
  
  path_name: string;
  description?: string;
  
  // Path Characteristics
  difficulty_level: DifficultyLevel | 'custom';
  estimated_duration_weeks: number;
  total_estimated_hours: number;
  
  // AI Generation
  generation_algorithm: string;
  personalization_factors?: Record<string, any>;
  
  // Status
  status: PathStatus;
  started_at?: string;
  completed_at?: string;
  last_accessed_at?: string;
  
  created_at: string;
  updated_at: string;
}

// ============================================
// COURSES & CONTENT
// ============================================

export type CoursePlatform = 'coursera' | 'udemy' | 'edx' | 'youtube' | 'custom' | string;
export type ContentType = 'video' | 'text' | 'interactive' | 'project' | 'quiz';

export interface Course {
  id: string;
  title: string;
  description?: string;
  platform: CoursePlatform;
  platform_course_id?: string;
  url?: string;
  
  // Content Details
  instructor?: string;
  duration_hours: number;
  difficulty_level: DifficultyLevel;
  language: string;
  
  // Quality Metrics
  rating?: number;
  reviews_count: number;
  completion_rate?: number;
  
  // Cost
  is_free: boolean;
  cost_usd?: number;
  cost_ngn?: number;
  
  // Content Type
  content_type: ContentType[];
  certificate_available: boolean;
  
  // Status
  is_active: boolean;
  last_updated?: string;
  
  created_at: string;
  updated_at: string;
}

export interface CourseSkill {
  id: string;
  course_id: string;
  skill_id: string;
  proficiency_gain: 'basic' | 'intermediate' | 'advanced';
}

export interface CourseModule {
  id: string;
  course_id: string;
  module_number: number;
  title: string;
  description?: string;
  duration_hours: number;
  content_url?: string;
  resources?: Record<string, any>;
  created_at: string;
}

// ============================================
// PATH STEPS & PROGRESS
// ============================================

export interface PathStep {
  id: string;
  learning_path_id: string;
  
  step_number: number;
  step_type: StepType;
  
  // Content
  course_id?: string;
  title: string;
  description?: string;
  estimated_hours: number;
  
  // Requirements
  prerequisites: string[]; // step IDs
  target_skills: string[]; // skill IDs
  
  // Status
  is_mandatory: boolean;
  is_unlocked: boolean;
  
  created_at: string;
}

export interface PathProgress {
  id: string;
  learner_id: string;
  learning_path_id: string;
  
  // Progress Metrics
  steps_completed: number;
  steps_total: number;
  progress_percentage: number;
  
  hours_spent: number;
  hours_estimated: number;
  
  // Velocity Metrics
  avg_hours_per_week: number;
  completion_velocity: number; // steps per week
  
  // Engagement
  current_streak_days: number;
  longest_streak_days: number;
  last_activity_date: string;
  
  updated_at: string;
}

export interface StepProgress {
  id: string;
  learner_id: string;
  path_step_id: string;
  
  status: StepStatus;
  progress_percentage: number;
  time_spent_hours: number;
  
  started_at?: string;
  completed_at?: string;
  
  sessions_count: number;
  last_accessed_at?: string;
  
  notes?: string;
  
  created_at: string;
  updated_at: string;
}

export interface LearningSession {
  id: string;
  learner_id: string;
  path_step_id?: string;
  
  session_start: string;
  session_end?: string;
  duration_minutes?: number;
  
  activities?: Record<string, any>;
  created_at: string;
}

// ============================================
// ASSESSMENTS & CERTIFICATIONS
// ============================================

export type AssessmentType = 'quiz' | 'project' | 'coding_challenge' | 'practical';

export interface Assessment {
  id: string;
  title: string;
  description?: string;
  assessment_type: AssessmentType;
  
  skill_id?: string;
  difficulty_level: DifficultyLevel;
  
  time_limit_minutes?: number;
  passing_score: number;
  
  questions?: Record<string, any>;
  is_active: boolean;
  created_at: string;
}

export interface AssessmentResult {
  id: string;
  learner_id: string;
  assessment_id: string;
  path_step_id?: string;
  
  score: number;
  max_score: number;
  percentage: number;
  passed: boolean;
  
  time_taken_minutes: number;
  attempt_number: number;
  
  answers?: Record<string, any>;
  feedback?: Record<string, any>;
  
  completed_at: string;
}

export type CertificateType = 'course' | 'path' | 'skill' | 'platform';

export interface Certificate {
  id: string;
  learner_id: string;
  certificate_type: CertificateType;
  certificate_name: string;
  
  course_id?: string;
  learning_path_id?: string;
  skill_id?: string;
  
  issued_at: string;
  certificate_url?: string;
  verification_code: string;
  
  created_at: string;
}

// ============================================
// AI RECOMMENDATIONS & METRICS
// ============================================

export type RecommendationType = 'add_course' | 'skip_course' | 'adjust_pace' | 'focus_skill' | 'take_break';
export type RecommendationPriority = 'low' | 'medium' | 'high' | 'critical';
export type RecommendationStatus = 'pending' | 'accepted' | 'rejected' | 'expired';

export interface PathRecommendation {
  id: string;
  learner_id: string;
  learning_path_id?: string;
  
  recommendation_type: RecommendationType;
  title: string;
  description?: string;
  reasoning?: string;
  
  suggested_action?: Record<string, any>;
  priority: RecommendationPriority;
  
  status: RecommendationStatus;
  expires_at?: string;
  
  created_at: string;
}

export interface LearnerMetrics {
  id: string;
  learner_id: string;
  learning_path_id?: string;
  
  // Core Metrics
  job_readiness_score: number; // 0-100
  jrs_breakdown?: Record<string, any>;
  
  skill_acquisition_velocity: number; // skills per week
  sav_trend?: Record<string, any>;
  
  path_completion_rate: number; // percentage
  
  // Additional Metrics
  learning_efficiency?: number;
  engagement_score?: number;
  consistency_score?: number;
  
  // Predictions
  predicted_completion_date?: string;
  predicted_job_ready_date?: string;
  
  calculated_at: string;
  created_at: string;
}

// ============================================
// PLATFORM ANALYTICS
// ============================================

export interface PlatformMetrics {
  id: string;
  metric_date: string;
  
  // User Metrics
  total_learners: number;
  active_learners: number;
  new_learners: number;
  
  // Engagement Metrics
  avg_session_duration_minutes: number;
  total_learning_hours: number;
  avg_weekly_hours: number;
  
  // Performance Metrics
  avg_job_readiness_score: number;
  avg_skill_acquisition_velocity: number;
  avg_path_completion_rate: number;
  
  // Outcome Metrics
  paths_completed: number;
  certificates_issued: number;
  skills_acquired: number;
  
  // Demographics
  gender_distribution?: Record<string, any>;
  location_distribution?: Record<string, any>;
  age_distribution?: Record<string, any>;
  
  created_at: string;
}

// ============================================
// DASHBOARD & UI TYPES
// ============================================

export interface DashboardData {
  profile: LearnerProfile;
  currentPath?: LearningPath;
  metrics: LearnerMetrics;
  progress: PathProgress;
  recentActivity: LearningSession[];
  recommendations: PathRecommendation[];
  upcomingSteps: PathStep[];
}

export interface PathOverview {
  path: LearningPath;
  steps: PathStep[];
  progress: PathProgress;
  jobRole: JobRole;
}

export interface SkillGap {
  skill: Skill;
  current_proficiency: number;
  required_proficiency: number;
  gap: number;
  recommended_courses: Course[];
}
