import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Target, Clock, Zap, Award, ArrowRight, CheckCircle, BookOpen, Activity } from 'lucide-react';
import { getDashboardData } from '../lib/pathfinding-api';
import type { DashboardData } from '../types/pathfinding';

const PathfindingDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // TODO: Get actual user ID from auth context
      const userId = 'demo-user-id';
      const data = await getDashboardData(userId);
      setDashboardData(data);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to AI Pathfinding</h2>
          <p className="text-gray-600 mb-6">Let's create your personalized learning path</p>
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

  const { profile, currentPath, metrics, progress, recentActivity, recommendations, upcomingSteps } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {profile.full_name.split(' ')[0]}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {currentPath
                  ? `On track to become a ${profile.target_role}`
                  : 'Ready to start your learning journey?'}
              </p>
            </div>
            <Link
              to="/pathfinding/path"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Full Path <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics - JRS, SAV, PCR */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Job Readiness Score */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">JRS</span>
            </div>
            <div className="mb-2">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {metrics.job_readiness_score}%
              </div>
              <p className="text-sm text-gray-600">Job Readiness Score</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${metrics.job_readiness_score}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {metrics.job_readiness_score >= 80
                ? '🎉 Ready to apply for jobs!'
                : metrics.job_readiness_score >= 50
                ? '💪 Making great progress!'
                : '🚀 Keep learning!'}
            </p>
          </div>

          {/* Skill Acquisition Velocity */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">SAV</span>
            </div>
            <div className="mb-2">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {metrics.skill_acquisition_velocity.toFixed(1)}
              </div>
              <p className="text-sm text-gray-600">Skills per Week</p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Zap className="w-4 h-4 text-green-600" />
              <p className="text-xs text-gray-500">
                {metrics.skill_acquisition_velocity >= 2
                  ? 'Exceptional learning speed!'
                  : metrics.skill_acquisition_velocity >= 1
                  ? 'Great velocity!'
                  : 'Building momentum...'}
              </p>
            </div>
          </div>

          {/* Path Completion Rate */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">PCR</span>
            </div>
            <div className="mb-2">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {progress.progress_percentage.toFixed(0)}%
              </div>
              <p className="text-sm text-gray-600">Path Completion</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress.progress_percentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {progress.steps_completed} of {progress.steps_total} steps completed
            </p>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{progress.hours_spent.toFixed(0)}h</p>
                <p className="text-sm text-gray-600">Time Invested</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{progress.current_streak_days}</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{progress.avg_hours_per_week.toFixed(1)}h</p>
                <p className="text-sm text-gray-600">Per Week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{metrics.engagement_score || 0}</p>
                <p className="text-sm text-gray-600">Engagement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Next Steps */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
            {upcomingSteps.length > 0 ? (
              <div className="space-y-3">
                {upcomingSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.estimated_hours}h
                        </span>
                        <span className="px-2 py-1 bg-white rounded text-xs font-medium">
                          {step.step_type}
                        </span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">No upcoming steps yet</p>
                <Link
                  to="/pathfinding/path"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 inline-block"
                >
                  View your learning path →
                </Link>
              </div>
            )}
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">AI Recommendations</h3>
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            {recommendations.length > 0 ? (
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      rec.priority === 'critical'
                        ? 'bg-red-50 border-red-500'
                        : rec.priority === 'high'
                        ? 'bg-orange-50 border-orange-500'
                        : rec.priority === 'medium'
                        ? 'bg-yellow-50 border-yellow-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                    {rec.reasoning && (
                      <p className="text-xs text-gray-500 mb-3 italic">💡 {rec.reasoning}</p>
                    )}
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Accept
                      </button>
                      <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                        Dismiss
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Brain className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">No recommendations at the moment</p>
                <p className="text-sm text-gray-500 mt-1">Keep learning to unlock AI insights!</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        {recentActivity.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-2">
              {recentActivity.map((session) => (
                <div key={session.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">
                      Learning session
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{session.duration_minutes} minutes</span>
                    <span>{new Date(session.session_start).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link
            to="/pathfinding/path"
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">View Learning Path</h4>
            <p className="text-sm text-gray-600">See your complete personalized roadmap</p>
          </Link>

          <Link
            to="/pathfinding/courses"
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <Brain className="w-10 h-10 text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Browse Courses</h4>
            <p className="text-sm text-gray-600">Explore recommended learning resources</p>
          </Link>

          <Link
            to="/pathfinding/assessments"
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <Award className="w-10 h-10 text-green-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Take Assessment</h4>
            <p className="text-sm text-gray-600">Test your skills and track progress</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PathfindingDashboard;
