import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Circle, Lock, Clock, BookOpen, Award, ArrowRight, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { getPathOverview, getStepProgress, getAllStepProgress, createOrUpdateStepProgress, startLearningSession } from '../lib/pathfinding-api';
import type { PathOverview, StepProgress as StepProgressType } from '../types/pathfinding';

const LearningPathView: React.FC = () => {
  const navigate = useNavigate();
  const [pathData, setPathData] = useState<PathOverview | null>(null);
  const [stepProgress, setStepProgress] = useState<StepProgressType[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  useEffect(() => {
    loadPathData();
  }, []);

  const loadPathData = async () => {
    try {
      // TODO: Get actual user ID and path ID
      const learnerId = 'demo-learner-id';
      const pathId = 'demo-path-id';

      const [overview, progressData] = await Promise.all([
        getPathOverview(learnerId, pathId),
        getAllStepProgress(learnerId, pathId),
      ]);

      if (overview) {
        setPathData(overview);
        setStepProgress(progressData);
      }
    } catch (error) {
      console.error('Error loading path data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartStep = async (stepId: string, courseUrl?: string) => {
    try {
      const learnerId = 'demo-learner-id';

      // Start learning session
      await startLearningSession(learnerId, stepId);

      // Update step progress to in_progress
      await createOrUpdateStepProgress(learnerId, stepId, {
        status: 'in_progress',
        started_at: new Date().toISOString(),
      });

      // Reload progress
      await loadPathData();

      // Open course if URL provided
      if (courseUrl) {
        window.open(courseUrl, '_blank');
      }
    } catch (error) {
      console.error('Error starting step:', error);
    }
  };

  const handleCompleteStep = async (stepId: string) => {
    try {
      const learnerId = 'demo-learner-id';

      await createOrUpdateStepProgress(learnerId, stepId, {
        status: 'completed',
        progress_percentage: 100,
        completed_at: new Date().toISOString(),
      });

      // Reload progress
      await loadPathData();
    } catch (error) {
      console.error('Error completing step:', error);
    }
  };

  const getStepStatus = (stepId: string) => {
    const progress = stepProgress.find((p) => p.path_step_id === stepId);
    return progress?.status || 'not_started';
  };

  const getStepProgressPercentage = (stepId: string) => {
    const progress = stepProgress.find((p) => p.path_step_id === stepId);
    return progress?.progress_percentage || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your learning path...</p>
        </div>
      </div>
    );
  }

  if (!pathData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No active learning path</h2>
          <p className="text-gray-600 mb-6">Start your journey by completing the onboarding</p>
          <Link
            to="/pathfinding/onboarding"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const { path, steps, progress, jobRole } = pathData;
  const completedSteps = stepProgress.filter((p) => p.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Link
                  to="/pathfinding/dashboard"
                  className="text-gray-600 hover:text-gray-900"
                >
                  ← Dashboard
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {path.path_name}
              </h1>
              <p className="text-gray-600">
                {jobRole.title} • {path.estimated_duration_weeks} weeks • {path.total_estimated_hours} hours
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {completedSteps} of {steps.length} steps completed
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {progress.progress_percentage.toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress.progress_percentage}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Path Steps */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const progressPercent = getStepProgressPercentage(step.id);
            const isExpanded = expandedStep === step.id;
            const isLocked = !step.is_unlocked && status === 'not_started';

            return (
              <div
                key={step.id}
                className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
                  status === 'completed' ? 'border-green-200' :
                  status === 'in_progress' ? 'border-blue-300' :
                  isLocked ? 'border-gray-200 opacity-60' :
                  'border-gray-200 hover:border-blue-200'
                }`}
              >
                {/* Step Header */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {status === 'completed' ? (
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                      ) : status === 'in_progress' ? (
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-blue-600" />
                        </div>
                      ) : isLocked ? (
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Lock className="w-6 h-6 text-gray-400" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Circle className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-gray-500">
                              STEP {step.step_number}
                            </span>
                            <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                              step.step_type === 'course' ? 'bg-blue-100 text-blue-700' :
                              step.step_type === 'project' ? 'bg-purple-100 text-purple-700' :
                              step.step_type === 'assessment' ? 'bg-orange-100 text-orange-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {step.step_type}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-sm text-gray-600 mb-3">
                              {step.description}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.estimated_hours}h
                            </span>
                            {step.is_mandatory && (
                              <span className="text-red-600 font-medium">Required</span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      {/* Progress Bar for In Progress */}
                      {status === 'in_progress' && progressPercent > 0 && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Progress</span>
                            <span className="text-xs font-semibold text-blue-600">
                              {progressPercent.toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      {!isLocked && (
                        <div className="flex gap-3 mt-4">
                          {status === 'not_started' && (
                            <button
                              onClick={() => handleStartStep(step.id, step.course_id ? '#' : undefined)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              Start Learning
                            </button>
                          )}
                          {status === 'in_progress' && (
                            <>
                              <button
                                onClick={() => handleStartStep(step.id, step.course_id ? '#' : undefined)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                              >
                                Continue
                              </button>
                              <button
                                onClick={() => handleCompleteStep(step.id)}
                                className="px-4 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
                              >
                                Mark Complete
                              </button>
                            </>
                          )}
                          {status === 'completed' && (
                            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                              <CheckCircle className="w-4 h-4" />
                              Completed
                            </div>
                          )}
                        </div>
                      )}

                      {isLocked && (
                        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Complete previous steps to unlock
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Master key concepts and fundamentals</li>
                          <li>• Build practical, real-world projects</li>
                          <li>• Gain hands-on experience</li>
                        </ul>
                      </div>
                      {step.course_id && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Course Details</h4>
                          <p className="text-sm text-gray-600">
                            Curated course from top learning platform with certificate upon completion
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Celebration */}
        {completedSteps === steps.length && (
          <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-green-200">
            <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-600 mb-6">
              You've completed your learning path. You're ready to start applying for {jobRole.title} positions!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Download Certificate
              </button>
              <Link
                to="/pathfinding/dashboard"
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPathView;
