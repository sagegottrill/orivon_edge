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

// Mock Data
const MOCK_USER = {
    name: "Sage Trill",
    email: "sage@orivonedge.com",
    avatar: "https://github.com/shadcn.png",
    role: "Student",
    plan: "Free Tier"
};

const MOCK_APPLICATIONS = [
    {
        id: 1,
        program: "Core Skills Track",
        track: "Data Science & AI",
        status: "In Progress",
        progress: 35,
        date: "Dec 01, 2025"
    },
    {
        id: 2,
        program: "Corporate Track",
        track: "Remote Work Mastery",
        status: "Pending Review",
        progress: 0,
        date: "Dec 04, 2025"
    }
];

const UserDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(MOCK_USER);
    // Default to Light Mode (false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check auth (mock)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/auth');
        }
        // In a real app, fetch user data here
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setUser(prev => ({ ...prev, email: storedEmail }));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
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

                        <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-gray-100 dark:bg-white/5 rounded-xl transition-colors">
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                            </div>
                        </div>
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
                            {activeTab === 'overview' && (
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
                                            <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
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
                                            {MOCK_APPLICATIONS.map((app, index) => (
                                                <div key={app.id} className={`p-6 flex items-center justify-between ${index !== MOCK_APPLICATIONS.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.program.includes('Core') ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500' : 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-500'}`}>
                                                            <Briefcase className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 dark:text-white">{app.program}</h4>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{app.track}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 ${app.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'
                                                            }`}>
                                                            {app.status}
                                                        </span>
                                                        <p className="text-xs text-gray-500">{app.date}</p>
                                                    </div>
                                                </div>
                                            ))}
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
                                        {MOCK_APPLICATIONS.map((app) => (
                                            <div key={app.id} className="bg-white border border-gray-200 shadow-sm dark:bg-[#151515] dark:border-white/5 dark:shadow-none rounded-2xl p-6 hover:border-orivon-blue/30 transition-colors group">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${app.program.includes('Core') ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500' : 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-500'}`}>
                                                            <Briefcase className="w-8 h-8" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orivon-blue transition-colors">{app.program}</h3>
                                                            <p className="text-gray-500 dark:text-gray-400 mb-3">{app.track}</p>
                                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                                <FileText className="w-4 h-4" />
                                                                <span>Applied on {app.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col items-end gap-4 min-w-[200px]">
                                                        <div className="w-full">
                                                            <div className="flex justify-between text-sm mb-2">
                                                                <span className="text-gray-500 dark:text-gray-400">Application Progress</span>
                                                                <span className="text-gray-900 dark:text-white font-bold">{app.progress}%</span>
                                                            </div>
                                                            <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-orivon-blue rounded-full transition-all duration-500"
                                                                    style={{ width: `${app.progress}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <button className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg hover:opacity-80 transition-colors w-full md:w-auto">
                                                            {app.progress > 0 ? 'Continue' : 'Start Application'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* SETTINGS TAB */}
                            {activeTab === 'settings' && (
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
                                                    <button className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                                                        Change Avatar
                                                    </button>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                                                        <input type="text" defaultValue={user.name} className="w-full bg-gray-50 border border-gray-200 text-gray-900 dark:bg-black/20 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-orivon-blue/50" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm text-gray-500 dark:text-gray-400">Email Address</label>
                                                        <input type="email" defaultValue={user.email} className="w-full bg-gray-50 border border-gray-200 text-gray-900 dark:bg-black/20 dark:border-white/10 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-orivon-blue/50" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-gray-200 dark:border-white/5">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Security</h3>
                                            <div className="space-y-4">
                                                <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 hover:bg-gray-100 dark:bg-black/20 dark:border-white/10 dark:hover:bg-black/30 rounded-xl transition-colors group">
                                                    <span className="text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">Change Password</span>
                                                    <ChevronRight className="w-5 h-5 text-gray-500" />
                                                </button>
                                                <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 hover:bg-gray-100 dark:bg-black/20 dark:border-white/10 dark:hover:bg-black/30 rounded-xl transition-colors group">
                                                    <span className="text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">Two-Factor Authentication</span>
                                                    <ChevronRight className="w-5 h-5 text-gray-500" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-gray-200 dark:border-white/5">
                                            <div className="flex justify-end gap-4">
                                                <button className="px-6 py-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-colors">Cancel</button>
                                                <button className="px-6 py-3 bg-orivon-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">Save Changes</button>
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
