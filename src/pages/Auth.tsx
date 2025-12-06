import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
    const { toast } = useToast();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialMode = searchParams.get('mode');
    const redirectUrl = searchParams.get('redirect') || '/dashboard';
    const [isLogin, setIsLogin] = useState(initialMode !== 'signup');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });

    const toggleMode = () => setIsLogin(!isLogin);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isLogin) {
                // Firebase Login
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                navigate(redirectUrl);
            } else {
                // Firebase Signup
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

                // Update profile with name
                if (formData.name) {
                    await updateProfile(userCredential.user, {
                        displayName: formData.name
                    });
                }

                toast({
                    title: "Account created!",
                    description: "Welcome to Orivon Edge.",
                });

                navigate(redirectUrl);
            }
        } catch (error: any) {
            let errorMessage = "An error occurred during authentication.";
            if (error.code === 'auth/invalid-credential') {
                errorMessage = "Invalid email or password.";
            } else if (error.code === 'auth/email-already-in-use') {
                errorMessage = "Email is already registered.";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "Password should be at least 6 characters.";
            } else if (error.message) {
                errorMessage = error.message;
            }

            toast({
                variant: "destructive",
                title: "Authentication Error",
                description: errorMessage,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen w-full flex bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/authh.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Left Side - Visual & Testimonial (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 relative z-10 flex-col justify-between p-12 bg-white/5 backdrop-blur-sm border-r border-white/10">
                <div>
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Orivon Edge Logo"
                            className="h-10 w-auto"
                        />
                        <span className="text-xl font-montserrat font-bold text-white tracking-tight uppercase">
                            ORIVON <span className="text-orivon-blue font-extrabold">EDGE</span>
                        </span>
                    </Link>
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {isLogin ? "Welcome Back." : "Join the Future."}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                            {isLogin
                                ? "Access your dashboard, track your progress, and continue your journey with Orivon Edge."
                                : "Start your journey with Orivon Edge today. Unlock exclusive resources, tools, and a community of innovators."}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-md">
                    <div className="lg:hidden mb-8 text-center">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Orivon Edge Logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-xl font-montserrat font-bold text-white tracking-tight uppercase">
                                ORIVON <span className="text-orivon-blue font-extrabold">EDGE</span>
                            </span>
                        </Link>
                    </div>

                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {isLogin ? 'Sign in to your account' : 'Create your account'}
                            </h3>
                            <p className="text-gray-400">
                                {isLogin ? 'Enter your details to access your workspace' : 'Get started with your free account today'}
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="mb-8">
                            <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-all duration-200 group">
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white">Continue with GitHub</span>
                            </button>
                        </div>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#0a0a0a] text-gray-500">Or continue with email</span>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.form
                                key={isLogin ? 'login' : 'signup'}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                                onSubmit={handleSubmit}
                            >
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orivon-blue transition-colors" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-orivon-blue/50 focus:ring-1 focus:ring-orivon-blue/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orivon-blue transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-orivon-blue/50 focus:ring-1 focus:ring-orivon-blue/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orivon-blue transition-colors" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-orivon-blue/50 focus:ring-1 focus:ring-orivon-blue/50 transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {isLogin && (
                                    <div className="flex justify-end">
                                        <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Forgot password?</a>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}</span>
                                    {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </motion.form>
                        </AnimatePresence>

                        <div className="mt-8 text-center">
                            <p className="text-white">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                <button
                                    onClick={toggleMode}
                                    className="text-white hover:text-gray-300 font-semibold transition-colors"
                                >
                                    {isLogin ? "Sign up" : "Sign in"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
