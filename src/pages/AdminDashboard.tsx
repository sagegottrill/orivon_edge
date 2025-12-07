import React, { useEffect, useState } from 'react';
import { Users, BookOpen, TrendingUp, Award, Search, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { auth } from '@/lib/firebase';

interface PlatformStats {
  total_learners: number;
  active_learners: number;
  total_paths: number;
  completed_paths: number;
  avg_jrs: number;
  avg_sav: number;
  avg_pcr: number;
  total_courses: number;
}

interface LearnerSummary {
  id: string;
  full_name: string;
  email: string;
  target_role: string;
  path_name?: string;
  jrs: number;
  sav: number;
  pcr: number;
  status: string;
  last_activity: string;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [learners, setLearners] = useState<LearnerSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // Check authentication
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/auth';
        return;
      }
      loadAdminData();
    });

    return () => unsubscribe();
  }, []);

  const loadAdminData = async () => {
    try {
      // Get platform statistics
      const { data: profilesData } = await supabase
        .from('learner_profiles')
        .select('id, onboarding_completed');

      const { data: pathsData } = await supabase
        .from('learning_paths')
        .select('status');

      const { data: metricsData } = await supabase
        .from('learner_metrics')
        .select('job_readiness_score, skill_acquisition_velocity, path_completion_rate');

      const { data: coursesData } = await supabase
        .from('courses')
        .select('id')
        .eq('is_active', true);

      // Calculate stats
      const totalLearners = profilesData?.length || 0;
      const activeLearners = profilesData?.filter(p => p.onboarding_completed).length || 0;
      const totalPaths = pathsData?.length || 0;
      const completedPaths = pathsData?.filter(p => p.status === 'completed').length || 0;

      const avgJrs = metricsData?.length
        ? metricsData.reduce((sum, m) => sum + m.job_readiness_score, 0) / metricsData.length
        : 0;
      const avgSav = metricsData?.length
        ? metricsData.reduce((sum, m) => sum + m.skill_acquisition_velocity, 0) / metricsData.length
        : 0;
      const avgPcr = metricsData?.length
        ? metricsData.reduce((sum, m) => sum + m.path_completion_rate, 0) / metricsData.length
        : 0;

      setStats({
        total_learners: totalLearners,
        active_learners: activeLearners,
        total_paths: totalPaths,
        completed_paths: completedPaths,
        avg_jrs: avgJrs,
        avg_sav: avgSav,
        avg_pcr: avgPcr,
        total_courses: coursesData?.length || 0,
      });

      // Get learner summaries
      const { data: learnerData } = await supabase
        .from('learner_profiles')
        .select(`
          id,
          full_name,
          email,
          target_role,
          learning_paths (
            path_name,
            status,
            last_accessed_at
          ),
          learner_metrics (
            job_readiness_score,
            skill_acquisition_velocity,
            path_completion_rate
          )
        `)
        .limit(50);

      if (learnerData) {
        const summaries: LearnerSummary[] = learnerData.map((learner: any) => ({
          id: learner.id,
          full_name: learner.full_name,
          email: learner.email,
          target_role: learner.target_role,
          path_name: learner.learning_paths?.[0]?.path_name,
          jrs: learner.learner_metrics?.[0]?.job_readiness_score || 0,
          sav: learner.learner_metrics?.[0]?.skill_acquisition_velocity || 0,
          pcr: learner.learner_metrics?.[0]?.path_completion_rate || 0,
          status: learner.learning_paths?.[0]?.status || 'no_path',
          last_activity: learner.learning_paths?.[0]?.last_accessed_at || '',
        }));

        setLearners(summaries);
      }
    } catch (error) {
      console.error('Error loading admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLearners = learners.filter((learner) => {
    const matchesSearch =
      learner.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      learner.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      learner.target_role.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || learner.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Platform overview and learner management</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-sm text-gray-500">Learners</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats?.total_learners || 0}
            </div>
            <p className="text-sm text-gray-600">
              {stats?.active_learners || 0} active
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-green-600" />
              <span className="text-sm text-gray-500">Paths</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats?.total_paths || 0}
            </div>
            <p className="text-sm text-gray-600">
              {stats?.completed_paths || 0} completed
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-sm text-gray-500">Avg JRS</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats?.avg_jrs.toFixed(0) || 0}%
            </div>
            <p className="text-sm text-gray-600">
              Job Readiness
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-orange-600" />
              <span className="text-sm text-gray-500">Courses</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats?.total_courses || 0}
            </div>
            <p className="text-sm text-gray-600">
              Active courses
            </p>
          </div>
        </div>

        {/* Platform Metrics */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Platform Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Avg Job Readiness (JRS)</span>
                <span className="text-lg font-bold text-blue-600">
                  {stats?.avg_jrs.toFixed(1) || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${stats?.avg_jrs || 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Avg Skill Velocity (SAV)</span>
                <span className="text-lg font-bold text-green-600">
                  {stats?.avg_sav.toFixed(1) || 0}/wk
                </span>
              </div>
              <p className="text-xs text-gray-500">Skills acquired per week</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Avg Completion (PCR)</span>
                <span className="text-lg font-bold text-purple-600">
                  {stats?.avg_pcr.toFixed(1) || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${stats?.avg_pcr || 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Learners List */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learners</h2>

            {/* Search and Filters */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="no_path">No Path</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Learner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    JRS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SAV
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PCR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLearners.map((learner) => (
                  <tr key={learner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {learner.full_name}
                        </div>
                        <div className="text-sm text-gray-500">{learner.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{learner.target_role}</div>
                      {learner.path_name && (
                        <div className="text-xs text-gray-500">{learner.path_name}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {learner.jrs}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {learner.sav.toFixed(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {learner.pcr.toFixed(0)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${learner.status === 'active' ? 'bg-green-100 text-green-800' :
                        learner.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          learner.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                        }`}>
                        {learner.status.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLearners.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No learners found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
