import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, CheckCircle, Rocket, Target, Globe, Code, Mail, Phone, MapPin, Brain, TrendingUp, Zap, BarChart3, Compass, Briefcase, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyFooter from "../components/CompanyFooter";
import SiteNav from "../components/SiteNav";
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Hero carousel functionality
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentSlide = 0;

        const showSlide = (index: number) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const interval = setInterval(nextSlide, 5000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        return () => {
            clearInterval(interval);
            dots.forEach(dot => {
                dot.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <style dangerouslySetInnerHTML={{
                __html: `
          .hero-carousel {
            position: relative;
            width: 100%;
            height: 100%;
          }
          
          .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }
          
          .hero-slide.active {
            opacity: 1;
          }
          
          .carousel-dot.active {
            background-color: rgba(255, 255, 255, 0.9) !important;
            transform: scale(1.2);
          }

          @keyframes scroll-wheel {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(12px); opacity: 0; }
          }
          
          .animate-scroll-wheel {
            animation: scroll-wheel 1.5s infinite;
          }
        `
            }} />

            <SiteNav />

            {/* Hero Section */}
            <section id="home" className="min-h-screen relative overflow-hidden">
                {/* Hero Carousel */}
                <div className="absolute inset-0">
                    <div className="hero-carousel">
                        <div className="hero-slide active">
                            <img
                                src="/imges/1.jpg"
                                alt="Innovation and technology in action"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        <div className="hero-slide">
                            <img
                                src="/imges/2.jpg"
                                alt="Team collaboration and development"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        <div className="hero-slide">
                            <img
                                src="/imges/3.jpg"
                                alt="Tech innovation and progress"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 tracking-tight animate-fade-in-up">
                                Building the Future of Technology and Innovation
                            </h1>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-16 font-light leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                A youth-led innovation hub building the future
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up mt-12" style={{ animationDelay: '0.4s' }}>
                                <Link to="/join-hub" className="bg-orivon-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orivon-blue/90 hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                    <span>Join the Hub</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                        <button className="carousel-dot active w-4 h-4 rounded-full bg-white/60 hover:bg-white transition-all"></button>
                        <button className="carousel-dot w-4 h-4 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                        <button className="carousel-dot w-4 h-4 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="about" className="scroll-mt-16 py-16 bg-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-orivon-blue text-sm font-semibold tracking-wide uppercase">
                                <span className="w-2 h-2 rounded-full bg-orivon-blue animate-pulse" />
                                About Us
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                We Are <span className="text-orivon-blue">Global Innovators</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600">
                                <p className="leading-relaxed">
                                    Orivon Edge is a global venture studio and digital agency that builds AI-driven startups and delivers powerful technology solutions for businesses worldwide.
                                </p>
                                <p className="leading-relaxed">
                                    We systematically build, de-risk, and scale innovative startups while delivering high-fidelity enterprise solutions for organizations, NGOs, and businesses across all sectors.
                                </p>
                                <p className="leading-relaxed">
                                    Unlike traditional incubators, we function as a vital implementation partner ensuring compliance, delivering measurable policy outcomes, and bridging the gap between innovation and institutional deployment.
                                </p>
                                <div className="space-y-4 pt-4">
                                    <h3 className="text-lg font-bold text-gray-900">Our Key Workstreams:</h3>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-orivon-blue flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">Development</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-orivon-blue flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">Innovation</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-orivon-blue flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">Creative Enterprise</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-orivon-blue flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">Consulting</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-20 blur-xl animate-pulse" />
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/ORI/1.jpg"
                                    alt="Strategic partnership collaboration"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <div className="text-3xl font-bold mb-2">Innovation First</div>
                                    <p className="text-white/80">Building the future of technology</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </section>

            {/* Trust Metrics */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                <CountUp end={150} suffix="+" />
                            </div>
                            <p className="text-gray-400">Students Trained</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                <CountUp end={5} suffix="+" />
                            </div>
                            <p className="text-gray-400">Startups Incubated</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                <CountUp end={5000} suffix="+" />
                            </div>
                            <p className="text-gray-400">Youth Empowered Across Ventures</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                <CountUp end={20000} suffix="+" />
                            </div>
                            <p className="text-gray-400">Users Across Platforms</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                <CountUp end={10} suffix="+" />
                            </div>
                            <p className="text-gray-400">Global Partners</p>
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
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
                </div>

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
                                <span className="w-2 h-2 rounded-full bg-[#D68F55] animate-pulse" />
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
