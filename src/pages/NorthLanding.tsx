import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Zap, Target, ArrowRight, Brain, Clock, Award } from 'lucide-react';
import { createLearnerProfile, createSkillAssessment, createLearningPath } from '../lib/pathfinding-api';
import { supabase } from '../lib/supabase';

const NorthLanding: React.FC = () => {
    const navigate = useNavigate();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisStage, setAnalysisStage] = useState(0);
    const [dreamJob, setDreamJob] = useState('');

    const handleStartJourney = async () => {
        if (!dreamJob.trim()) return;

        setIsAnalyzing(true);

        // Simulate AI Analysis Stages
        const stages = [
            "Analyzing global job market trends...",
            "Mapping required skill matrices...",
            "Synthesizing personalized curriculum...",
            "Optimizing learning path velocity...",
            "Finalizing your North..."
        ];

        for (let i = 0; i < stages.length; i++) {
            setAnalysisStage(i);
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        try {
            const userId = 'demo-user-north-' + Date.now(); // Robust demo ID

            // 1. Create Profile
            const profile = await createLearnerProfile({
                user_id: userId,
                full_name: 'North Explorer',
                target_role: dreamJob,
                experience_level: 'beginner',
                onboarding_completed: true,
                profile_completed_at: new Date().toISOString(),
            });

            if (profile) {
                // 2. Create Initial Assessment (Baseline)
                const assessment = await createSkillAssessment({
                    learner_id: profile.id,
                    assessment_type: 'initial',
                    programming_fundamentals: 10, // Pessimistic baseline
                    problem_solving: 50, // Optimistic baseline
                });

                // 3. Generate Learning Path
                // Try to find a role ID first, otherwise fallback
                const { data: jobRoles } = await supabase
                    .from('job_roles')
                    .select('id')
                    .ilike('title', `%${dreamJob}%`)
                    .limit(1)
                    .single();

                await createLearningPath({
                    learner_id: profile.id,
                    job_role_id: jobRoles?.id,
                    path_name: `North: ${dreamJob} Mastery`,
                    description: `AI-optimized path to becoming a world-class ${dreamJob}. Adaptive curriculum.`,
                    difficulty_level: 'custom',
                    estimated_duration_weeks: 24,
                    status: 'active',
                    started_at: new Date().toISOString(),
                });

                navigate('/pathfinding/dashboard');
            }
        } catch (error) {
            console.error("North AI Error:", error);
            alert("North encountered a singularity. Please try again."); // "Unexpected" error message
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-hidden font-sans relative">

            {/* Background Ambience - REMOVED GRADIENTS per user request */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-white" />

            {/* Basic Grid Texture (Optional, kept subtle) */}
            <div className="fixed inset-0 z-[1] opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="relative z-10">

                {/* Navigation */}
                <header className="px-8 py-6 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <Compass className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-black">NORTH</span>
                    </div>
                    <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg">
                        Login
                    </button>
                </header>

                <AnimatePresence mode="wait">
                    {!isAnalyzing ? (
                        <motion.main
                            key="landing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="max-w-7xl mx-auto px-6 pt-24 pb-32"
                        >

                            {/* HERO SECTION */}
                            <div className="max-w-5xl mx-auto text-center mb-32 relative">

                                {/* Decorative floating elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 left-10 hidden md:block"
                                >
                                    <Sparkles className="w-6 h-6 text-blue-500" />
                                </motion.div>


                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                                    className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-gray-900"
                                >
                                    Find Your <br />
                                    <span className="text-blue-600">
                                        True North.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-2xl text-gray-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
                                >
                                    The intelligent GPS for your tech career. <br />
                                    <strong className="text-gray-900 font-medium">Adaptive. Predictive. Personalized.</strong>
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="max-w-lg mx-auto relative group"
                                >
                                    <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 hover:ring-blue-200 transition-all">
                                        <div className="pl-4 text-gray-400">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            value={dreamJob}
                                            onChange={(e) => setDreamJob(e.target.value)}
                                            placeholder="What is your dream role?"
                                            className="w-full px-4 py-4 bg-transparent text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none"
                                            onKeyDown={(e) => e.key === 'Enter' && handleStartJourney()}
                                        />
                                        <button
                                            onClick={handleStartJourney}
                                            disabled={!dreamJob.trim()}
                                            className="px-8 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            Start
                                        </button>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-400">Press Enter or click Start to begin analysis</p>
                                </motion.div>
                            </div>

                            {/* FEATURES - SWISS TYPOGRAPHIC STYLE */}
                            <div className="mb-40 max-w-7xl mx-auto px-6">
                                <div className="border-t border-black">
                                    {[
                                        {
                                            id: "001",
                                            title: "Deep Understanding",
                                            desc: "It doesn't just ask questions. It analyzes your learning velocity, cognitive patterns, and hidden strengths."
                                        },
                                        {
                                            id: "002",
                                            title: "Real-Time Calibration",
                                            desc: "The job market shifts daily. Your curriculum updates nightly. You're never learning yesterday's tech."
                                        },
                                        {
                                            id: "003",
                                            title: "Outcome Guaranteed",
                                            desc: "We don't track completion. We track competency. Every step is verified to ensure job-readiness."
                                        }
                                    ].map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group py-16 border-b border-black grid md:grid-cols-12 gap-8 items-start hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="md:col-span-2">
                                                <span className="font-mono text-sm tracking-widest text-gray-400 group-hover:text-black transition-colors">
                                                    /{feature.id}
                                                </span>
                                            </div>
                                            <div className="md:col-span-5">
                                                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <div className="md:col-span-5">
                                                <p className="text-xl text-gray-500 leading-relaxed group-hover:text-black transition-colors">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* FUTURE VISION SECTION */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="max-w-7xl mx-auto px-6 mb-32"
                            >
                                <div className="bg-black text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden isolate">

                                    {/* NO GRADIENTS - Solid background */}

                                    <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-start">
                                        <div className="lg:col-span-2">

                                            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 tracking-tight">
                                                The Future of<br />
                                                Education is <br />
                                                <span className="text-white">Alive.</span>
                                            </h2>
                                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-8" />
                                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                                "Picture an institution where courses, advising, and research continuously adapt based on real-time feedback loops. Static curriculum is dead."
                                            </p>
                                        </div>

                                        <div className="lg:col-span-3 space-y-6">
                                            {[
                                                {
                                                    id: "01",
                                                    title: "Self-Optimizing Schedules",
                                                    desc: "Timetables that adjust to your peak energy and learning velocity. Never burned out, always challenged.",
                                                    color: "bg-blue-600"
                                                },
                                                {
                                                    id: "02",
                                                    title: "Evolving Reading Lists",
                                                    desc: "Curriculum that rewrites itself nightly as new technologies emerge. You learn what's relevant tomorrow, not last year.",
                                                    color: "bg-purple-600"
                                                },
                                                {
                                                    id: "03",
                                                    title: "Context-Aware Paths",
                                                    desc: "Learning that understands your career goals before you even articulate them. A path that paves itself as you walk.",
                                                    color: "bg-green-600"
                                                }
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.2 }}
                                                    className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] cursor-default overflow-hidden"
                                                >
                                                    <div className={`absolute top-0 left-0 w-1 h-full ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                                    <div className="flex gap-6 items-start">
                                                        <div className="text-4xl font-mono font-bold text-white/10 group-hover:text-white/30 transition-colors">
                                                            {item.id}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{item.title}</h4>
                                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.main>
                    ) : (
                        <motion.div
                            key="analyzing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="h-screen flex flex-col items-center justify-center p-8 text-center bg-white relative overflow-hidden"
                        >
                            {/* Clean Background */}
                            <div className="absolute inset-0 z-0 bg-white" />

                            <div className="relative z-10 w-32 h-32 mb-12">
                                <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                                <div className="absolute inset-0 border-t-4 border-black rounded-full animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Compass className="w-12 h-12 text-black animate-pulse" />
                                </div>
                            </div>

                            <h2 className="relative z-10 text-4xl font-bold mb-6 text-black tracking-tight">Calibrating North Star</h2>

                            <div className="relative z-10 h-8 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={analysisStage}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="text-xl text-gray-500 font-medium"
                                    >
                                        {
                                            ["Analyzing global job market trends...",
                                                "Mapping required skill matrices...",
                                                "Synthesizing personalized curriculum...",
                                                "Optimizing learning path velocity...",
                                                "Finalizing your North..."][analysisStage]
                                        }
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default NorthLanding;
