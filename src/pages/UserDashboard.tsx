import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Briefcase,
    Settings,
    LogOut,
    User,
    Bell,
    ChevronRight,
    Search,
    Menu,
    X,
    CreditCard,
    FileText,
    Shield,
    Sun,
    Moon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, getUserApplications } from '@/lib/supabase';
import { useToast } from "@/components/ui/use-toast";

const UserDashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [activeTab, setActiveTab] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    // Default to Light Mode (false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check active session
        const checkSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    navigate('/auth');
                    return;
                }

                setUser({
                    name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || "User",
                    email: session.user.email,
                    avatar: session.user.user_metadata.avatar_url || "https://github.com/shadcn.png",
                    role: "Student", // Default role
                    plan: "Free Tier"
                });

                // Fetch real applications
                if (session.user.email) {
                    const apps = await getUserApplications(session.user.email);
                    setApplications(apps || []);
                }

            } catch (error) {
                console.error("Error loading dashboard data:", error);
                toast({
                    variant: "destructive",
                    title: "Error loading data",
                    description: "Could not fetch your dashboard information."
                });
            } finally {
                setLoading(false);
            }
        };

        checkSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate('/auth');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate, toast]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/auth');
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const SidebarItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
        <button
            onClick={() => {
                setActiveTab(id);
                setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === id
                ? 'bg-orivon-blue text-white shadow-lg shadow-blue-500/20'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white'
                }`}
        >
            <Icon className={`w-5 h-5 ${activeTab === id ? 'text-white' : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white'}`} />
            <span className="font-medium">{label}</span>
            {activeTab === id && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-orivon-blue rounded-r-full"
                />
            )}
        </button>
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orivon-blue"></div>
            </div>
        );
    }

    return (
        // IMPORTANT: We wrap everything in a div that conditionally applies 'dark' class
        // This makes the dark: modifiers work within this component
        <div className={isDarkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0a0a0a] dark:text-white flex overflow-hidden transition-colors duration-300">
                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                        />
                    )}
                </AnimatePresence>

                {/* Sidebar */}
                <aside className={`
                    fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 dark:bg-[#0f0f0f] dark:border-white/5 p-6 flex flex-col transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}>
                    <div className="mb-10 flex items-center gap-3 px-2">
                        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                            <span className="text-lg font-bold font-montserrat tracking-tight text-gray-900 dark:text-white">
                                ORIVON <span className="text-orivon-blue">EDGE</span>
                            </span>
                        </Link>
                    </div>

                    <div className="space-y-2 flex-1">
                        <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white group">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                            <span className="font-medium">Home</span>
                        </Link>
                        <SidebarItem id="overview" icon={LayoutDashboard} label="Overview" />
                        <SidebarItem id="applications" icon={Briefcase} label="My Applications" />
                        <SidebarItem id="settings" icon={Settings} label="Settings" />
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/5">
                        {/* Theme Toggle in Sidebar */}
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center gap-3 px-4 py-3 mb-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white rounded-xl transition-colors"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            <span className="font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>

                        {user && (
                            <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-gray-100 dark:bg-white/5 rounded-xl transition-colors">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300 rounded-xl transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
                    {/* Header */}
                    <header className="h-20 border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-6 lg:px-10 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md z-30 transition-colors">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 rounded-lg"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                                {activeTab === 'overview' && 'Dashboard Overview'}
                                {activeTab === 'applications' && 'My Applications'}
                                {activeTab === 'settings' && 'Account Settings'}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-gray-100 border border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-orivon-blue/50 w-64 transition-colors"
                                />
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-white/5 rounded-full relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0a0a0a]"></span>
                            </button>
                        </div>
                    </header>

                    {/* Content Scroll Area */}
                    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                        <div className="max-w-6xl mx-auto">

                            {/* OVERVIEW TAB */}
                            {activeTab === 'overview' && user && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-8"
                                >
                                    {/* Welcome Banner - Always dark/colored */}
                                    <div className="bg-gradient-to-r from-orivon-blue to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-900/10">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Welcome back, {user.name.split(' ')[0]}! 👋</h2>
                                            <p className="text-blue-100 text-lg max-w-2xl">
                                                You're making great progress. Continue your learning journey or explore new opportunities in the Venture Studio.
                                            </p>
                                            <div className="mt-8 flex gap-4">
                                                <Link to="/core-skills-track" className="px-6 py-3 bg-white text-orivon-blue font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                                                    Browse Courses
                                                </Link>
                                                <Link to="/venture-studio" className="px-6 py-3 bg-black/20 text-white font-bold rounded-xl hover:bg-black/30 backdrop-blur-sm transition-colors border border-white/10">
                                                    Venture Studio
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl p-6 transition-all">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-gray-500 dark:text-gray-400 font-medium">Active Applications</h3>
                                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                                    <FileText className="w-5 h-5 text-blue-500" />
                                                </div>
                                            </div>
                                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{applications.length}</p>
                                            <p className="text-sm text-green-500 dark:text-green-400 mt-2 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full"></span>
                                                In Progress
                                            </p>
                                        </div>
                                        <div className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl p-6 transition-all">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-gray-500 dark:text-gray-400 font-medium">Certificates</h3>
                                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                                    <Shield className="w-5 h-5 text-purple-500" />
                                                </div>
                                            </div>
                                            <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                                            <p className="text-sm text-gray-500 mt-2">Complete courses to earn</p>
                                        </div>

                                    </div>

                                    {/* Recent Activity */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Applications</h3>
                                        <div className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl overflow-hidden transition-all">
                                            {applications.length === 0 ? (
                                                <div className="p-8 text-center text-gray-500">
                                                    No applications found. <Link to="/core-skills-track" className="text-orivon-blue hover:underline">Start a program today!</Link>
                                                </div>
                                            ) : (
                                                applications.slice(0, 5).map((app, index) => (
                                                    <div key={app.id || index} className={`p-6 flex items-center justify-between ${index !== applications.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.program === 'Core Skills Track' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500' : 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-500'}`}>
                                                                <Briefcase className="w-6 h-6" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-gray-900 dark:text-white">{app.program}</h4>
                                                                <p className="text-sm text-gray-500 dark:text-gray-400">{app.track || app.status}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 ${app.status === 'New' || app.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'
                                                                }`}>
                                                                {app.status}
                                                            </span>
                                                            <p className="text-xs text-gray-500">{new Date(app.created_at).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* APPLICATIONS TAB */}
                            {activeTab === 'applications' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="grid gap-6">
                                        {applications.length === 0 ? (
                                            <div className="col-span-1 p-8 text-center text-gray-500 bg-white dark:bg-white/5 rounded-2xl">
                                                No applications found. <br />
                                                <Link to="/core-skills-track" className="inline-block mt-4 text-orivon-blue hover:underline">Browse Core Skills</Link> or{' '}
                                                <Link to="/corporate-track" className="text-orivon-blue hover:underline">Corporate Track</Link>
                                            </div>
                                        ) : (
                                            applications.map((app, index) => (
                                                <div key={app.id || index} className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl p-6 hover:border-orivon-blue/30 transition-colors group">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                        <div className="flex items-start gap-4">
                                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${app.program === 'Core Skills Track' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500' : 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-500'}`}>
                                                                <Briefcase className="w-8 h-8" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orivon-blue transition-colors">{app.program}</h3>
                                                                <p className="text-gray-500 dark:text-gray-400 mb-3">{app.track || 'General'}</p>
                                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                                    <FileText className="w-4 h-4" />
                                                                    <span>Applied on {new Date(app.created_at).toLocaleDateString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-end gap-4 min-w-[200px]">
                                                            <div className="w-full">
                                                                <div className="flex justify-between text-sm mb-2">
                                                                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                                                                    <span className="text-gray-900 dark:text-white font-bold">{app.status}</span>
                                                                </div>
                                                            </div>
                                                            <button className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg hover:opacity-80 transition-colors w-full md:w-auto">
                                                                View Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* SETTINGS TAB */}
                            {activeTab === 'settings' && user && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="max-w-2xl"
                                >
                                    <div className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl p-8 space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-6 mb-6">
                                                    <img src={user.avatar} alt="Profile" className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-white/10" />
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                                                        <input type="text" defaultValue={user.name} disabled className="w-full bg-gray-50 border border-gray-200 text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-gray-500 rounded-xl px-4 py-3 cursor-not-allowed" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm text-gray-500 dark:text-gray-400">Email Address</label>
                                                        <input type="email" defaultValue={user.email} disabled className="w-full bg-gray-50 border border-gray-200 text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-gray-500 rounded-xl px-4 py-3 cursor-not-allowed" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;
