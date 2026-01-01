import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CaretRight, MagicWand, Lightning, Target, Users, Globe, Lightbulb } from '@phosphor-icons/react';
import { Button } from '../components/ui/button';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { analyzeProblemWithAI } from '../lib/venture-api';

const DeepRevealLanding = () => {
    const navigate = useNavigate();
    const [problemStatement, setProblemStatement] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [analysisStage, setAnalysisStage] = useState(0);

    const handleAnalyze = async () => {
        const user = auth.currentUser;
        if (!user) {
            navigate('/auth');
            return;
        }
        setIsAnalyzing(true);
        setResult(null);
        setAnalysisStage(0);

        // Start Animation Loop
        const stageInterval = setInterval(() => {
            setAnalysisStage(prev => (prev < 4 ? prev + 1 : prev));
        }, 1500);

        try {
            const data = await analyzeProblemWithAI(user.uid, problemStatement);
            clearInterval(stageInterval);
            setResult(data);
        } catch (error) {
            clearInterval(stageInterval);
            alert("Analysis Failed. Please try again.");
            console.error(error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
            <Navigation />

            {/* Background Texture - Subtle Noise */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <main className="pt-32 pb-20 px-6 relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto">

                    {!result ? (
                        <AnimatePresence mode="wait">
                            {!isAnalyzing ? (
                                <motion.div
                                    key="input-form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter leading-[0.9] text-black"
                                    >
                                        Deep Reveal<span className="text-blue-600">.</span>
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-xl md:text-3xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-16"
                                    >
                                        The First-Principles Engine. <br />
                                        <span className="text-gray-900 font-normal">Validate the pain before you build the product.</span>
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="max-w-4xl mx-auto"
                                    >
                                        <div className="bg-white rounded-[2rem] p-3 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 hover:ring-gray-200 transition-all">
                                            <div className="bg-gray-50/50 rounded-[1.5rem] p-6 md:p-10">
                                                <div className="text-left mb-4 text-sm font-semibold text-gray-400 uppercase tracking-widest pl-2">
                                                    Observation / Problem Statement
                                                </div>
                                                <textarea
                                                    value={problemStatement}
                                                    onChange={(e) => setProblemStatement(e.target.value)}
                                                    className="w-full h-48 bg-transparent border-0 text-xl md:text-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 resize-none font-medium leading-relaxed"
                                                    placeholder="E.g. small businesses struggle to track inventory because existing software is too expensive and complex..."
                                                />

                                                <div className="flex justify-end items-center mt-8 pt-8 border-t border-gray-200">
                                                    <Button
                                                        onClick={handleAnalyze}
                                                        disabled={isAnalyzing || !problemStatement.trim()}
                                                        className="w-full md:w-auto bg-black text-white hover:bg-gray-800 px-10 py-6 rounded-xl text-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span>Reveal Opportunity</span>
                                                            <CaretRight weight="bold" />
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="analyzing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-20"
                                >
                                    <div className="relative w-32 h-32 mb-12">
                                        <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                                        <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Target className="w-12 h-12 text-blue-600 animate-pulse" />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6 text-black tracking-tight">Deconstructing Problem</h2>
                                    <div className="h-8 overflow-hidden relative w-full text-center">
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={analysisStage}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="text-xl text-gray-500 font-medium"
                                            >
                                                {
                                                    [
                                                        "Parsing problem context...",
                                                        "Measuring pain point intensity...",
                                                        "Mapping affected demographics...",
                                                        "Calculating Total Addressable Market...",
                                                        "Synthesizing unique solution angles..."
                                                    ][analysisStage] || "Finalizing Deep Dive..."
                                                }
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="flex items-center justify-between mb-16 border-b border-gray-100 pb-8">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-black">Analysis Report</h2>
                                    <p className="text-gray-500 text-lg">First-Principles Breakdown</p>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setResult(null)}
                                    className="border-gray-200 text-gray-900 hover:bg-gray-50 px-6 h-12 rounded-xl border-2 font-semibold"
                                >
                                    New Search
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                {/* Pain Intensity */}
                                <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-xl shadow-gray-100/50 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500" />
                                    <div className="p-4 bg-red-50 rounded-full mb-6">
                                        <Lightning className="w-8 h-8 text-red-500" weight="fill" />
                                    </div>
                                    <div className="text-6xl font-bold text-black mb-2">{result.pain_point_intensity}</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pain Intensity <br />(1-10)</div>
                                </div>

                                {/* Target Audience */}
                                <div className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] flex flex-col justify-start">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Users className="w-6 h-6 text-blue-600" weight="fill" />
                                        <h3 className="text-xl font-bold text-black">Who Hurts?</h3>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {result.target_audience}
                                    </p>
                                </div>

                                {/* Market Size */}
                                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-start relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Globe className="w-6 h-6 text-white" weight="fill" />
                                            <h3 className="text-xl font-bold">Market Size</h3>
                                        </div>
                                        <p className="text-2xl font-bold leading-tight">
                                            {result.market_size_estimation}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* The Pivot / Solution Angle */}
                            <div className="bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-blue-900/20">
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/20 text-white text-sm font-bold mb-8 backdrop-blur-md">
                                        <Lightbulb size={16} weight="fill" className="text-yellow-300" />
                                        <span className="uppercase tracking-widest">The Opportunity</span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                                        "{result.potential_solution_angle}"
                                    </h3>

                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="w-full h-px bg-white/20 md:hidden" />
                                        <p className="text-blue-100 text-lg md:max-w-xl">
                                            This angle leverages the identified pain points to create a high-value entry wedge into the market.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DeepRevealLanding;
