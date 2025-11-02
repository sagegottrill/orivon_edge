import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { createLearnerProfile, createSkillAssessment, createLearningPath } from '../lib/pathfinding-api';
import { supabase } from '../lib/supabase';
import type { LearnerProfile, SkillAssessment } from '../types/pathfinding';

type OnboardingStep = 'welcome' | 'profile' | 'assessment' | 'preferences' | 'generating';

const PathfindingOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [formData, setFormData] = useState({
    // Profile
    full_name: '',
    email: '',
    phone: '',
    location: '',
    current_role: '',
    target_role: '',
    experience_level: 'beginner' as const,
    industry_preference: [] as string[],
    education_level: '',
    previous_skills: [] as string[],
    
    // Assessment
    programming_fundamentals: 0,
    web_development: 0,
    data_analysis: 0,
    mobile_development: 0,
    cloud_computing: 0,
    ai_ml: 0,
    problem_solving: 0,
    communication: 0,
    teamwork: 0,
    adaptability: 0,
    
    // Preferences
    learning_style: 'mixed' as const,
    weekly_hours_available: 10,
    preferred_learning_time: 'flexible' as const,
  });

  const industries = [
    'Fintech', 'E-commerce', 'Healthcare', 'Education', 'Agriculture',
    'Energy', 'Transportation', 'Government', 'Entertainment', 'Other'
  ];

  const targetRoles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile App Developer',
    'Data Analyst',
    'Data Scientist',
    'UI/UX Designer',
    'Product Manager',
    'DevOps Engineer',
    'Cloud Engineer',
    'AI/ML Engineer',
    'Cybersecurity Analyst',
  ];

  const previousSkillsOptions = [
    'HTML/CSS', 'JavaScript', 'Python', 'Java', 'C++',
    'React', 'Node.js', 'SQL', 'Git', 'Excel',
    'Data Analysis', 'Design Tools', 'Project Management'
  ];

  const handleNext = () => {
    if (currentStep === 'welcome') setCurrentStep('profile');
    else if (currentStep === 'profile') setCurrentStep('assessment');
    else if (currentStep === 'assessment') setCurrentStep('preferences');
    else if (currentStep === 'preferences') handleComplete();
  };

  const handleBack = () => {
    if (currentStep === 'profile') setCurrentStep('welcome');
    else if (currentStep === 'assessment') setCurrentStep('profile');
    else if (currentStep === 'preferences') setCurrentStep('assessment');
  };

  const handleComplete = async () => {
    setCurrentStep('generating');
    
    try {
      // TODO: Get actual user ID from auth
      const userId = 'demo-user-id';

      // Create learner profile
      const profile = await createLearnerProfile({
        user_id: userId,
        email: formData.email,
        full_name: formData.full_name,
        phone: formData.phone,
        location: formData.location,
        current_role: formData.current_role || undefined,
        target_role: formData.target_role,
        experience_level: formData.experience_level,
        industry_preference: formData.industry_preference,
        learning_style: formData.learning_style,
        weekly_hours_available: formData.weekly_hours_available,
        preferred_learning_time: formData.preferred_learning_time,
        education_level: formData.education_level,
        previous_skills: formData.previous_skills,
        onboarding_completed: true,
        profile_completed_at: new Date().toISOString(),
      });

      if (profile) {
        // Create skill assessment
        const assessment = await createSkillAssessment({
          learner_id: profile.id,
          assessment_type: 'initial',
          programming_fundamentals: formData.programming_fundamentals,
          web_development: formData.web_development,
          data_analysis: formData.data_analysis,
          mobile_development: formData.mobile_development,
          cloud_computing: formData.cloud_computing,
          ai_ml: formData.ai_ml,
          problem_solving: formData.problem_solving,
          communication: formData.communication,
          teamwork: formData.teamwork,
          adaptability: formData.adaptability,
        });

        if (assessment) {
          // Get job role ID that matches target role
          const { data: jobRoles } = await supabase
            .from('job_roles')
            .select('id')
            .ilike('title', `%${formData.target_role}%`)
            .limit(1)
            .single();

          const jobRoleId = jobRoles?.id || null;

          if (jobRoleId) {
            // Call AI path generation function
            const { data, error } = await supabase.rpc('generate_learning_path', {
              p_learner_id: profile.id,
              p_job_role_id: jobRoleId,
              p_skill_assessment_id: assessment.id
            });

            if (error) {
              console.error('Error generating path:', error);
              // Fallback: create basic path manually
              await createLearningPath({
                learner_id: profile.id,
                job_role_id: jobRoleId,
                path_name: `${formData.target_role} Learning Path`,
                description: `Personalized path to become a ${formData.target_role}`,
                difficulty_level: formData.experience_level,
                estimated_duration_weeks: 24,
                total_estimated_hours: 240,
                generation_algorithm: 'v1.0_manual',
                status: 'active',
                started_at: new Date().toISOString(),
              });
            }
          }
        }

        // Simulate generation delay
        setTimeout(() => {
          navigate('/pathfinding/dashboard');
        }, 3000);
      }
    } catch (error) {
      console.error('Error completing onboarding:', error);
      alert('Error creating your profile. Please try again.');
      setCurrentStep('preferences');
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        {currentStep !== 'welcome' && currentStep !== 'generating' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep === 'profile' ? '1' : currentStep === 'assessment' ? '2' : '3'} of 3
              </span>
              <span className="text-sm text-gray-500">
                {currentStep === 'profile' ? 'Profile' : currentStep === 'assessment' ? 'Assessment' : 'Preferences'}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentStep === 'profile' ? '33%' : currentStep === 'assessment' ? '66%' : '100%'
                }}
              />
            </div>
          </div>
        )}

        {/* Welcome Step */}
        {currentStep === 'welcome' && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to AI Pathfinding
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your personal GPS for tech career success. We'll create a customized learning path 
              based on your goals, skills, and learning style.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tell us about you</h3>
                <p className="text-sm text-gray-600">Share your background and career goals</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-3 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Assess your skills</h3>
                <p className="text-sm text-gray-600">Quick evaluation of your current abilities</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center mb-3 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get your path</h3>
                <p className="text-sm text-gray-600">AI generates your personalized roadmap</p>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Get Started <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {/* Profile Step */}
        {currentStep === 'profile' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell us about yourself</h2>
            <p className="text-gray-600 mb-8">This helps us create the perfect learning path for you</p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Lagos, Nigeria"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Role (if any)
                </label>
                <input
                  type="text"
                  value={formData.current_role}
                  onChange={(e) => setFormData({ ...formData, current_role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Student, Graphic Designer, Sales Rep"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Role *
                </label>
                <select
                  value={formData.target_role}
                  onChange={(e) => setFormData({ ...formData, target_role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your career goal</option>
                  {targetRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setFormData({ ...formData, experience_level: level as any })}
                      className={`p-4 border-2 rounded-lg font-medium transition-all ${
                        formData.experience_level === level
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Interests (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setFormData({
                        ...formData,
                        industry_preference: toggleArrayItem(formData.industry_preference, industry)
                      })}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                        formData.industry_preference.includes(industry)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Skills (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {previousSkillsOptions.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setFormData({
                        ...formData,
                        previous_skills: toggleArrayItem(formData.previous_skills, skill)
                      })}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                        formData.previous_skills.includes(skill)
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="mr-2 w-5 h-5" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.full_name || !formData.email || !formData.target_role}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Assessment Step */}
        {currentStep === 'assessment' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Assess your current skills</h2>
            <p className="text-gray-600 mb-8">Rate yourself honestly - this helps us create the perfect path for you (0 = No experience, 100 = Expert)</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
                {['programming_fundamentals', 'web_development', 'data_analysis', 'mobile_development', 'cloud_computing', 'ai_ml'].map((skill) => (
                  <div key={skill} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        {skill.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </label>
                      <span className="text-sm font-semibold text-blue-600">
                        {formData[skill as keyof typeof formData]}/100
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData[skill as keyof typeof formData] as number}
                      onChange={(e) => setFormData({ ...formData, [skill]: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Soft Skills</h3>
                {['problem_solving', 'communication', 'teamwork', 'adaptability'].map((skill) => (
                  <div key={skill} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        {skill.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </label>
                      <span className="text-sm font-semibold text-green-600">
                        {formData[skill as keyof typeof formData]}/100
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData[skill as keyof typeof formData] as number}
                      onChange={(e) => setFormData({ ...formData, [skill]: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="mr-2 w-5 h-5" /> Back
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Preferences Step */}
        {currentStep === 'preferences' && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning preferences</h2>
            <p className="text-gray-600 mb-8">Help us personalize your learning experience</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How do you learn best?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['visual', 'auditory', 'reading', 'kinesthetic', 'mixed'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setFormData({ ...formData, learning_style: style as any })}
                      className={`p-4 border-2 rounded-lg font-medium transition-all ${
                        formData.learning_style === style
                          ? 'border-purple-600 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {style.charAt(0).toUpperCase() + style.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours available per week: {formData.weekly_hours_available}
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={formData.weekly_hours_available}
                  onChange={(e) => setFormData({ ...formData, weekly_hours_available: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1hr</span>
                  <span>20hrs</span>
                  <span>40hrs</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred learning time
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['morning', 'afternoon', 'evening', 'flexible'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({ ...formData, preferred_learning_time: time as any })}
                      className={`p-4 border-2 rounded-lg font-medium transition-all ${
                        formData.preferred_learning_time === time
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {time.charAt(0).toUpperCase() + time.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="mr-2 w-5 h-5" /> Back
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Generate My Path <CheckCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Generating Step */}
        {currentStep === 'generating' && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Creating your personalized learning path...
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI is analyzing your profile and generating the perfect roadmap
            </p>
            <div className="max-w-md mx-auto space-y-3">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Analyzing your skills and goals</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Matching with job market demands</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                <span className="text-gray-700">Curating the best courses for you...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PathfindingOnboarding;
