import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, Lock, Clock, BookOpen, Award, ArrowRight, Play, ChevronLeft, Zap, Star } from 'lucide-react';
import { getPathOverview, getStepProgress, getAllStepProgress, createOrUpdateStepProgress, startLearningSession } from '../lib/pathfinding-api';
import type { PathOverview, StepProgress as StepProgressType } from '../types/pathfinding';

import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LearningPathView: React.FC = () => {
  const navigate = useNavigate();
  const [pathData, setPathData] = useState<PathOverview | null>(null);
  const [stepProgress, setStepProgress] = useState<StepProgressType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        loadPathData(user.uid);
      } else {
        // Redirect or handle unauthorized
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadPathData = async (userId: string) => {
    try {
      // In a real app, you might fetch the Learner Profile first to get the ID, 
      // but for this prototype we assume UserID = LearnerID for simplicity 
      // OR we fetch the profile here.
      // Let's rely on the API finding the profile by UserID if possible, 
      // but the API expects `learnerId`. 
      // We should really fetch the profile.

      // However, for immediate fix, let's pass UserID and ensure API handles it 
      // OR just pass UserID as LearnerID if that's how we set it up.
      // In NorthLanding, we created a profile where user_id = user.uid.
      // And the RLS/API likely queries based on that.

      // Let's assume for this specific view we need the learner profile first
      // But pathfinding-api doesn't export getProfileByUserId easily?
      // Actually it does: `getLearnerProfile(userId)`

      // Simplified: We will just pass userId to these functions 
      // and assume they leverage the RLS or looking up the profile.
      // Wait, `getPathOverview` takes (learnerId, pathId). 
      // `learnerId` IS the UUID of the profile table. `userId` is the Firebase UID (text).
      // They are different.

      // To fix this properly without refactoring API:
      // We fetch the profile first.

      // But we can't import `supabase` here directly easily to do a raw query?
      // No, we can.
      const { supabase } = await import('../lib/supabase');
      const { data: profile } = await supabase.from('learner_profiles').select('id').eq('user_id', userId).single();

      if (!profile) {
        setLoading(false);
        return;
      }

      // We also need the Path ID. 
      // Usually this comes from the URL param. 
      // But currently it's hardcoded "demo-path-id". 
      // We should fetch the "latest path" for this user.
      const { data: latestPath } = await supabase.from('learning_paths').select('id').eq('learner_id', profile.id).order('created_at', { ascending: false }).limit(1).single();

      if (!latestPath) {
        setLoading(false);
        return;
      }

      const [overview, progressData] = await Promise.all([
        getPathOverview(profile.id, latestPath.id),
        getAllStepProgress(profile.id, latestPath.id),
      ]);

      if (overview) {
        setPathData(overview);
        setStepProgress(progressData);
        // Default to first incomplete step
        const firstIncomplete = overview.steps.find(s => {
          const prog = progressData.find(p => p.path_step_id === s.id);
          return !prog || prog.status !== 'completed';
        });
        if (firstIncomplete) setActiveStepId(firstIncomplete.id);
      }
    } catch (error) {
      console.error('Error loading path data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartStep = async (stepId: string, courseUrl?: string) => {
    const learnerId = 'demo-learner-id';
    await startLearningSession(learnerId, stepId);
    await createOrUpdateStepProgress(learnerId, stepId, {
      status: 'in_progress',
      started_at: new Date().toISOString(),
    });
    await loadPathData();
    if (courseUrl) window.open(courseUrl, '_blank');
  };

  const handleCompleteStep = async (stepId: string) => {
    const learnerId = 'demo-learner-id';
    await createOrUpdateStepProgress(learnerId, stepId, {
      status: 'completed',
      progress_percentage: 100,
      completed_at: new Date().toISOString(),
    });
    await loadPathData();
  };

  const getStepStatus = (stepId: string) => {
    return stepProgress.find((p) => p.path_step_id === stepId)?.status || 'not_started';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Loading Flight Plan...</span>
        </div>
      </div>
    )
  }

  if (!pathData) return null;

  const { path, steps, progress, jobRole } = pathData;
  const activeStep = steps.find(s => s.id === activeStepId) || steps[0];
  const activeStatus = getStepStatus(activeStep.id);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-900 overflow-hidden font-sans">

      {/* TOP BAR */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between">
        <Link to="/north/dashboard" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" /> Mission Control
        </Link>
        <div className="text-right">
          <h1 className="text-sm font-bold tracking-tight">{path.path_name}</h1>
          <div className="flex items-center gap-2 justify-end">
            <span className="text-[10px] uppercase text-gray-500 font-mono">Progress</span>
            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white transition-all duration-1000" style={{ width: `${progress.progress_percentage}%` }} />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen grid lg:grid-cols-12">

        {/* LEFT: FLIGHT PATH TIMELINE */}
        <div className="lg:col-span-4 border-r border-white/10 h-[calc(100vh-4rem)] overflow-y-auto hidden lg:block scrollbar-hide">
          <div className="p-8">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-8 ml-9">Sequence</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-white/10" />

              <div className="space-y-8">
                {steps.map((step, idx) => {
                  const status = getStepStatus(step.id);
                  const isActive = activeStepId === step.id;
                  const isLocked = false; // Simplified logic

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`group relative pl-9 cursor-pointer transition-all ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
                      onClick={() => setActiveStepId(step.id)}
                    >
                      {/* Node Dot */}
                      <div className={`absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center bg-black z-10 transition-colors ${isActive ? 'border-white' :
                        status === 'completed' ? 'border-blue-500' : 'border-gray-700'
                        }`}>
                        {status === 'completed' && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                        {isActive && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-gray-500">0{step.step_number}</span>
                        {status === 'completed' && <CheckCircle className="w-3 h-3 text-blue-500" />}
                      </div>
                      <h4 className={`font-bold text-lg leading-tight mb-1 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {step.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                        {step.step_type}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: MISSION DETAIL */}
        <div className="lg:col-span-8 bg-black relative h-[calc(100vh-4rem)] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 lg:p-24 max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 font-mono text-xs tracking-widest mb-8">
                MODULE 0{activeStep.step_number} // {activeStep.step_type.toUpperCase()}
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                {activeStep.title}
              </h2>

              <div className="h-px w-full bg-white/10 mb-12" />

              <div className="grid md:grid-cols-3 gap-12 text-lg text-gray-400 leading-relaxed mb-16">
                <div className="md:col-span-2">
                  <p>{activeStep.description}</p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-center gap-3 text-sm font-mono text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      Primary Directive: Core Competency
                    </li>
                    <li className="flex items-center gap-3 text-sm font-mono text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      Estimated Duration: {activeStep.estimated_hours} Hours
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-1 border-l border-white/10 pl-8 space-y-8">
                  <div>
                    <label className="block text-xs font-mono text-gray-600 uppercase mb-2">Completion Status</label>
                    <div className={`text-2xl font-bold ${activeStatus === 'completed' ? 'text-blue-500' : 'text-white'}`}>
                      {activeStatus === 'completed' ? '100%' : activeStatus === 'in_progress' ? 'ACTIVE' : 'READY'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-600 uppercase mb-2">Resources</label>
                    <div className="flex items-center gap-2 text-white">
                      <BookOpen className="w-5 h-5" />
                      <span>2 Guides</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION AREA */}
              <div className="flex gap-4">
                {activeStatus === 'not_started' && (
                  <button
                    onClick={() => handleStartStep(activeStep.id)}
                    className="group relative px-8 py-5 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-3"
                  >
                    INITIATE SEQUENCE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                {activeStatus === 'in_progress' && (
                  <div className="flex gap-4">
                    <button
                      className="px-8 py-5 border border-white text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
                    >
                      RESUME WORK
                      <Play className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCompleteStep(activeStep.id)}
                      className="px-8 py-5 bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-3"
                    >
                      VERIFY COMPLETION
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {activeStatus === 'completed' && (
                  <div className="px-8 py-5 border border-green-500/30 bg-green-500/10 text-green-400 font-mono text-sm tracking-widest flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    MODULE VERIFIED
                  </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
};

export default LearningPathView;
