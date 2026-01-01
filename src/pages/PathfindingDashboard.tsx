import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, TrendingUp, Target, Clock, Zap, Award, ArrowRight, CheckCircle, BookOpen, Activity, Play, ChevronRight } from 'lucide-react';
import { getDashboardData } from '../lib/pathfinding-api';
import type { DashboardData } from '../types/pathfinding';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const PathfindingDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        loadDashboardData(user.uid);
      } else {
        // Not logged in
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadDashboardData = async (userId: string) => {
    try {
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">NORTH SYSTEM ADRIFT</h2>
          <Link
            to="/north/onboarding"
            className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-bold tracking-tight hover:bg-gray-900 transition-colors"
          >
            INITIALIZE <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const { profile, currentPath, metrics, progress, upcomingSteps } = dashboardData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

      {/* HEADER / HUD */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-6 py-6 border-b border-black sticky top-0 bg-white/90 backdrop-blur-md z-40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none">NORTH STAR</h1>
              <p className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                {profile.full_name} / {currentPath ? 'ACTIVE' : 'IDLE'}
              </p>
            </div>
          </div>

          <Link to="/north/path" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
            Flight Path <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.header>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-12 lg:py-20"
      >

        {/* HERO TYPOGRAPHY */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-4">
            {profile.target_role?.split(' ')[0] || 'EXPLORER'}
          </h2>
          <div className="h-2 w-full bg-black mb-4 origin-left" />
          <div className="flex justify-between items-end">
            <p className="text-xl md:text-2xl max-w-xl font-light text-gray-500">
              Target Acquisition Locked. <br />
              <span className="text-black font-medium">Trajectory Optimized.</span>
            </p>
            <div className="hidden md:block font-mono text-xs text-right text-gray-400">
              SYS.VER.2.4<br />
              LATENCY: 12ms
            </div>
          </div>
        </motion.div>

        {/* HUD METRICS STRIP */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-black mb-20">
          {[
            { label: 'READINESS INDEX', value: metrics.job_readiness_score + '%', icon: Target },
            { label: 'VELOCITY (S/W)', value: metrics.skill_acquisition_velocity.toFixed(1), icon: Zap },
            { label: 'PATH COMPLETION', value: progress.progress_percentage.toFixed(0) + '%', icon: Activity },
            { label: 'TOTAL HOURS', value: progress.hours_spent.toFixed(0) + 'h', icon: Clock },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white p-8 group hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs tracking-widest opacity-50">{metric.label}</span>
                <metric.icon className="w-4 h-4 opacity-50" />
              </div>
              <div className="text-5xl font-bold tracking-tighter">{metric.value}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* CURRENT MISSION (Next Step) */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <h3 className="font-mono text-sm tracking-widest text-blue-600 uppercase">Current Mission</h3>
              </div>

              {upcomingSteps.length > 0 ? (
                <div className="border-l-2 border-black pl-8 py-2">
                  <span className="text-6xl font-bold text-gray-200 mb-4 block">0{upcomingSteps[0].step_number}</span>
                  <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {upcomingSteps[0].title}
                  </h4>
                  <p className="text-xl text-gray-500 mb-8 max-w-md leading-relaxed">
                    {upcomingSteps[0].description}
                  </p>

                  <div className="flex items-center gap-6">
                    <button className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-blue-600 transition-colors flex items-center gap-3">
                      ENGAGE MODULE <ArrowRight className="w-5 h-5" />
                    </button>
                    <div className="font-mono text-sm text-gray-400">
                      EST. {upcomingSteps[0].estimated_hours}H
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 border border-dashed border-gray-300 rounded-lg text-center">
                  <p className="text-gray-400">ALL MODULES COMPLETE</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* UPCOMING SEQUENCE */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants}>
              <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-8 border-b border-gray-100 pb-2">
                Sequence Queue
              </h3>

              <div className="space-y-4">
                {upcomingSteps.slice(1).map((step, idx) => (
                  <div key={idx} className="group flex items-center gap-6 p-4 border border-transparent hover:border-gray-100 transition-all cursor-default">
                    <span className="font-mono text-sm text-gray-300 group-hover:text-black transition-colors">
                      0{step.step_number}
                    </span>
                    <div>
                      <h5 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h5>
                      <span className="text-xs font-mono text-gray-400 uppercase">
                        {step.step_type} • {step.estimated_hours}h
                      </span>
                    </div>
                  </div>
                ))}

                <Link to="/north/path" className="inline-block mt-8 text-sm font-bold border-b-2 border-black pb-1 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  VIEW FULL SEQUENCE
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </motion.main>
    </div>
  );
};

export default PathfindingDashboard;
