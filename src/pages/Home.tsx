import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Rocket, Target, Globe, Code, Mail, Phone, MapPin, Brain, TrendingUp, Zap, BarChart3, Compass, Briefcase, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyFooter from "../components/CompanyFooter";
import SiteNav from "../components/SiteNav";
import Hero from "../components/Hero";
import { COMPANY } from "../lib/company";


const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">

            <SiteNav variant="hero" />

            <Hero />

            {/* Who We Are */}
            <section id="about" className="scroll-mt-16 bg-white py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                        <div>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
                                // About us
                            </span>

                            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-gray-900">
                                We are global
                                <br />
                                <span className="text-gray-400">innovators.</span>
                            </h2>

                            <div className="mt-7 max-w-[34rem] space-y-5 text-[16px] leading-relaxed text-gray-600">
                                <p>
                                    Orivon Edge is a global venture studio and digital agency that builds AI-driven
                                    startups and delivers powerful technology solutions for businesses worldwide.
                                </p>
                                <p>
                                    We systematically build, de-risk, and scale innovative startups while delivering
                                    high-fidelity enterprise solutions for organizations, NGOs, and businesses across
                                    all sectors.
                                </p>
                                <p>
                                    Unlike traditional incubators, we function as a vital implementation partner
                                    ensuring compliance, delivering measurable policy outcomes, and bridging the gap
                                    between innovation and institutional deployment.
                                </p>
                            </div>

                            <dl className="mt-9 grid max-w-[34rem] grid-cols-1 gap-x-8 gap-y-3 border-t border-gray-200 pt-6 sm:grid-cols-2">
                                {["Development", "Innovation", "Creative Enterprise", "Consulting"].map((item) => (
                                    <div key={item} className="flex items-baseline gap-3">
                                        <span className="font-mono text-[10px] text-gray-300">/</span>
                                        <dt className="text-[15px] text-gray-700">{item}</dt>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <figure className="relative overflow-hidden rounded-[28px] bg-gray-100">
                            <img
                                src="/ORI/1.jpg"
                                alt="An Orivon Edge team working together"
                                width={1200}
                                height={1320}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/4.4] w-full object-cover"
                            />
                        </figure>
                    </div>
                </div>
            </section>

            {/* Trust Metrics */}
            <section className="bg-[#0a0a0a] py-16 text-white lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-5 md:gap-6">
                        <div>
                            <div className="text-[clamp(2.5rem,4.6vw,3.75rem)] font-light leading-none tracking-[-0.03em] text-white tabular-nums">
                                <CountUp end={150} suffix="+" />
                            </div>
                            <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-white/45">Students Trained</p>
                        </div>
                        <div>
                            <div className="text-[clamp(2.5rem,4.6vw,3.75rem)] font-light leading-none tracking-[-0.03em] text-white tabular-nums">
                                <CountUp end={5} suffix="+" />
                            </div>
                            <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-white/45">Startups Incubated</p>
                        </div>
                        <div>
                            <div className="text-[clamp(2.5rem,4.6vw,3.75rem)] font-light leading-none tracking-[-0.03em] text-white tabular-nums">
                                <CountUp end={5000} suffix="+" />
                            </div>
                            <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-white/45">Youth Empowered Across Ventures</p>
                        </div>
                        <div>
                            <div className="text-[clamp(2.5rem,4.6vw,3.75rem)] font-light leading-none tracking-[-0.03em] text-white tabular-nums">
                                <CountUp end={20000} suffix="+" />
                            </div>
                            <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-white/45">Users Across Platforms</p>
                        </div>
                        <div>
                            <div className="text-[clamp(2.5rem,4.6vw,3.75rem)] font-light leading-none tracking-[-0.03em] text-white tabular-nums">
                                <CountUp end={10} suffix="+" />
                            </div>
                            <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-[1.5] tracking-[0.2em] text-white/45">Global Partners</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-20 bg-white border-y border-gray-200">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                            Trusted By Leading Organizations
                        </p>
                    </div>

                    {/* Partners Carousel */}
                    <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div className="partners-carousel flex gap-12 items-center animate-scroll w-max">
                            {/* First set of partners */}
                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/bictda.png"
                                    alt="BICTDA"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/logo2.png"
                                    alt="Partner Logo"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/aaaa.png"
                                    alt="Beeloveds House"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/SAV WOMEN.pdf.png"
                                    alt="SAV Women Foundation"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/lvvv.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/lssogo.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/808.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/logoaq.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/bswa.png"
                                    alt="BSWA"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/Nash.png"
                                    alt="Nash"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/ss.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/bictda.png"
                                    alt="BICTDA"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/logo2.png"
                                    alt="Partner Logo"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/aaaa.png"
                                    alt="Beeloveds House"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/SAV WOMEN.pdf.png"
                                    alt="SAV Women Foundation"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/lvvv.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/lssogo.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/808.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/logoaq.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/bswa.png"
                                    alt="BSWA"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/Nash.png"
                                    alt="Nash"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="flex flex-col items-center min-w-[250px]">
                                <img
                                    src="/ss.png"
                                    alt="Partner"
                                    className="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-32 bg-orivon-blue relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-10 flex justify-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>
                        </div>
                        <blockquote className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-12 tracking-tight">
                            "Innovation drives real change when it creates <span className="text-blue-400">meaningful impact</span> for communities worldwide."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-white/30"></div>
                            <p className="text-xl text-blue-200 font-medium tracking-wide uppercase">Orivon Edge Team</p>
                            <div className="h-px w-12 bg-white/30"></div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Training Programs */}
            {/* Training Programs */}
            {/* Training Programs */}
            {/* Training Programs */}
            <section id="programmes" className="scroll-mt-16 py-24 bg-[#0C0A09]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1917] border border-[#292524] text-[#D68F55] text-sm font-semibold tracking-wide uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#D68F55]" />
                                Education
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-[#E7E5E4] mb-6 leading-tight">
                                TRAINING<br />
                                <span className="text-[#D68F55]">PROGRAMS.</span>
                            </h2>
                            <p className="text-xl text-[#A8A29E] leading-relaxed max-w-lg">
                                Industry-standard training that gives you the exact skills companies are looking for.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Core Skills Track */}
                            <div className="bg-[#1C1917] rounded-2xl p-8 shadow-xl border border-[#292524] hover:border-[#D68F55]/30 transition-all group">
                                <div className="w-14 h-14 bg-[#292524] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D68F55] transition-colors">
                                    <Code className="w-7 h-7 text-[#D68F55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#E7E5E4] mb-3">Core Skills Track</h3>
                                <p className="text-[#A8A29E] mb-8 text-sm leading-relaxed">
                                    Hands-on training with real project experience in AI, Cloud Computing,
                                    Data Science, and Cybersecurity.
                                </p>
                                <Link to="/core-skills-track" className="flex items-center justify-between w-full px-6 py-4 bg-[#292524] rounded-xl text-[#E7E5E4] font-bold hover:bg-[#D68F55] hover:text-white transition-all group-hover:shadow-md">
                                    <span>Apply Now</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Corporate Track */}
                            <div className="bg-[#1C1917] rounded-2xl p-8 shadow-xl border border-[#292524] hover:border-[#D68F55]/30 transition-all group">
                                <div className="w-14 h-14 bg-[#292524] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D68F55] transition-colors">
                                    <Briefcase className="w-7 h-7 text-[#D68F55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#E7E5E4] mb-3">Corporate Track</h3>
                                <p className="text-[#A8A29E] mb-8 text-sm leading-relaxed">
                                    Professional development for corporate roles and international
                                    remote work opportunities.
                                </p>
                                <Link to="/corporate-track" className="flex items-center justify-between w-full px-6 py-4 bg-[#292524] rounded-xl text-[#E7E5E4] font-bold hover:bg-[#D68F55] hover:text-white transition-all group-hover:shadow-md">
                                    <span>Join Track</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Orivon Toolkit products (North, Deckly, Deep Reveal) were removed on 27 November 2026. */}

{/* Section Separator */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>








            {/* Contact Section */}
            <section id="contact" className="py-20 relative overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/rok.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="bg-black/40 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Contact Info */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 text-white">Get Started Today</h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        Ready to join our innovation hub? Reach out for training, incubation, or partnerships.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                            <Mail className="w-4 h-4 text-white" />
                                        </div>
                                        <a href={`mailto:${COMPANY.email}`} className="text-sm font-medium hover:underline">{COMPANY.email}</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                            <Phone className="w-4 h-4 text-white" />
                                        </div>
                                        <a href={`tel:${COMPANY.phoneHref}`} className="text-sm font-medium hover:underline">{COMPANY.phone}</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                            <MapPin className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm font-medium">Borno State, Nigeria</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                                        <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                                        <Linkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Right: Action Cards (Horizontal) */}
                            <div className="space-y-4">
                                {/* Training Card */}
                                <Link to="/core-skills-track" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white">Join Training</h3>
                                        <p className="text-xs text-gray-400">Professional development programs</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </Link>

                                {/* Incubation Card */}
                                <Link to="/join-hub" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-transform">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white">Startup Incubation</h3>
                                        <p className="text-xs text-gray-400">Mentorship & incubation</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div className="md:col-span-2">
                            <h3 className="text-3xl font-bold mb-6">ORIVON <span className="text-blue-600">EDGE</span></h3>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                                A global innovation hub dedicated to nurturing creativity,
                                technology, and entrepreneurship worldwide.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="#ventures" className="hover:text-white transition-colors">Ventures</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-6">Services</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>Tech Training</li>
                                <li>Startup Incubation</li>
                                <li>Custom Development</li>
                                <li>Digital Consulting</li>
                            </ul>
                        </div>
                    </div>

                    <CompanyFooter />

                    <div className="border-t border-gray-800 mt-8 pt-8">
                        <p className="text-gray-400 text-center">
                            © 2025 Orivon Edge. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
