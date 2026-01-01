import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { UploadSimple, MagicWand, PaperPlaneRight, ChartBar, TrendUp, Warning, CheckCircle, Lightbulb } from '@phosphor-icons/react';
import { Button } from '../components/ui/button';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { analyzeDeckWithAI } from '../lib/venture-api';

const DecklyLanding = () => {
    const navigate = useNavigate();
    const [pitchText, setPitchText] = useState('');
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
        }, 2000);

        try {
            const data = await analyzeDeckWithAI(user.uid, pitchText, "My Idea");
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
                                        Deckly<span className="text-gray-400">.</span>
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-xl md:text-3xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-16"
                                    >
                                        The AI Investment Committee. <br />
                                        <span className="text-gray-900 font-normal">Validate your pitch before you face the sharks.</span>
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="max-w-4xl mx-auto"
                                    >
                                        <div className="bg-white rounded-[2rem] p-3 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 hover:ring-gray-200 transition-all">
                                            <div className="bg-gray-50/50 rounded-[1.5rem] p-6 md:p-10">
                                                <textarea
                                                    value={pitchText}
                                                    onChange={(e) => setPitchText(e.target.value)}
                                                    className="w-full h-64 bg-transparent border-0 text-lg md:text-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 resize-none font-medium leading-relaxed"
                                                    placeholder="Paste your executive summary, problem statement, or full pitch here..."
                                                />

                                                <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200 gap-6">
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <button className="flex items-center gap-2 hover:text-black transition-colors px-4 py-2 rounded-lg hover:bg-white/50">
                                                            <UploadSimple size={18} />
                                                            <span className="font-medium">Upload PDF Deck</span>
                                                        </button>
                                                    </div>

                                                    <Button
                                                        onClick={handleAnalyze}
                                                        disabled={isAnalyzing || !pitchText.trim()}
                                                        className="w-full md:w-auto bg-black text-white hover:bg-gray-800 px-10 py-6 rounded-xl text-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span>Analyze Pitch</span>
                                                            <PaperPlaneRight weight="bold" />
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
                                        <div className="absolute inset-0 border-t-4 border-black rounded-full animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <ChartBar className="w-12 h-12 text-black animate-pulse" />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6 text-black tracking-tight">Investment Committee Session</h2>
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
                                                        "Reading Executive Summary...",
                                                        "Analyzing Market Size & TAM...",
                                                        "Stress-Testing Revenue Assumptions...",
                                                        "Identifying Critical Risks...",
                                                        "Formulating Investment Memo..."
                                                    ][analysisStage] || "Finalizing Report..."
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
                                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-black">Investment Memo</h2>
                                    <p className="text-gray-500 text-lg">Confidential Analysis</p>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setResult(null)}
                                    className="border-gray-200 text-gray-900 hover:bg-gray-50 px-6 h-12 rounded-xl border-2 font-semibold"
                                >
                                    New Analysis
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-12 gap-8 mb-8">
                                {/* Score Card */}
                                <div className="md:col-span-4 bg-white border border-gray-100 p-10 rounded-[2.5rem] text-center shadow-xl shadow-gray-100/50 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900 to-gray-600" />
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Fundability Score</div>
                                    <div className="text-8xl font-bold text-black mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 ease-out">{result.score}</div>
                                    <div className="text-sm font-medium text-gray-400">OUT OF 100</div>
                                </div>

                                {/* Strengths */}
                                <div className="md:col-span-8 bg-black text-white p-10 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden">
                                    {/* Subtle Grid on Black */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                                        <div className="p-2 bg-white/10 rounded-lg">
                                            <CheckCircle className="w-6 h-6 text-white" weight="fill" />
                                        </div>
                                        Core Strengths
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                                        {result.strengths?.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Risks */}
                                <div className="bg-red-50/50 border border-red-100 p-10 rounded-[2.5rem]">
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-900">
                                        <div className="p-2 bg-red-100 rounded-lg">
                                            <Warning className="w-6 h-6 text-red-600" weight="fill" />
                                        </div>
                                        Critical Risks
                                    </h3>
                                    <ul className="space-y-4">
                                        {result.weaknesses?.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-4 text-red-800/80 bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm">
                                                <span className="font-mono text-red-300 text-sm mt-0.5">0{i + 1}</span>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-8">
                                    {/* Questions */}
                                    <div className="bg-blue-50/50 border border-blue-100 p-10 rounded-[2.5rem]">
                                        <h3 className="text-xl font-bold mb-6 text-blue-900 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                            Investor Questions
                                        </h3>
                                        <ul className="space-y-4">
                                            {result.investor_questions?.map((item: string, i: number) => (
                                                <li key={i} className="text-blue-800 font-medium italic leading-relaxed">
                                                    "{item}"
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Improvements */}
                                    <div className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem]">
                                        <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                                            <Lightbulb className="w-6 h-6 text-yellow-500" weight="fill" />
                                            Quick Wins
                                        </h3>
                                        <ul className="space-y-3">
                                            {result.improvement_tips?.map((item: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 font-medium text-sm">
                                                    <div className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
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

export default DecklyLanding;
