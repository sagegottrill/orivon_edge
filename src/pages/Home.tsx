import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
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

const PARTNERS = [
  { src: "/partners/bictda.webp", alt: "BICTDA" },
  { src: "/partners/logo2.webp", alt: "Partner logo" },
  { src: "/partners/aaaa.webp", alt: "Beeloveds House" },
  { src: "/partners/sav-women.webp", alt: "SAV Women Foundation" },
  { src: "/partners/lvvv.webp", alt: "Partner logo" },
  { src: "/partners/lssogo.webp", alt: "Partner logo" },
  { src: "/partners/808.webp", alt: "Partner logo" },
  { src: "/partners/logoaq.webp", alt: "Partner logo" },
  { src: "/partners/bswa.webp", alt: "BSWA" },
  { src: "/partners/nash.webp", alt: "Nash" },
  { src: "/partners/ss.webp", alt: "Partner logo" },
];

const TRACKS = [
  {
    title: "Core Skills Track",
    body: "Hands-on training with real project experience in AI, Cloud Computing, Data Science, and Cybersecurity.",
    cta: "Apply Now",
    to: "/core-skills-track",
  },
  {
    title: "Corporate Track",
    body: "Professional development for corporate roles and international remote work opportunities.",
    cta: "Join Track",
    to: "/corporate-track",
  },
];

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
            <section className="border-y border-gray-200 bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
                        // Trusted By Leading Organizations
                    </p>
                </div>

                {/* One quiet row that drifts. pause-on-hover, and it stops for
                    anyone who asked for less motion. */}
                <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="partner-track flex w-max items-center gap-14 sm:gap-20">
                        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                            <img
                                key={`${partner.src}-${i}`}
                                src={partner.src}
                                alt={i < PARTNERS.length ? partner.alt : ""}
                                aria-hidden={i >= PARTNERS.length || undefined}
                                width={120}
                                height={120}
                                loading="lazy"
                                decoding="async"
                                className="h-10 w-auto shrink-0 object-contain opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="bg-[#0a0a0a] py-20 lg:py-28">
                <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
                    <blockquote className="text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white/90">
                        &ldquo;Innovation drives real change when it creates{" "}
                        <span className="text-white/45">meaningful impact</span> for communities
                        worldwide.&rdquo;
                    </blockquote>

                    <div className="mt-10 flex items-center gap-4">
                        <span className="h-px w-10 bg-white/20" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                            Orivon Edge Team
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section id="programmes" className="scroll-mt-16 bg-[#0a0a0a] py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
                        <div>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                                // Education
                            </span>

                            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">
                                TRAINING
                                <br />
                                <span className="text-white/45">PROGRAMS.</span>
                            </h2>

                            <p className="mt-7 max-w-[28rem] text-[16px] leading-relaxed text-white/60">
                                Industry-standard training that gives you the exact skills companies are
                                looking for.
                            </p>
                        </div>

                        <div className="border-t border-white/10">
                            {TRACKS.map((track, i) => (
                                <div key={track.title} className="border-b border-white/10 py-8">
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-mono text-[10px] tabular-nums text-white/30">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">
                                            {track.title}
                                        </h3>
                                    </div>

                                    <p className="mt-3 max-w-[32rem] text-[15px] leading-relaxed text-white/55">
                                        {track.body}
                                    </p>

                                    <Link
                                        to={track.to}
                                        className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
                                    >
                                        {track.cta}
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0a0a] transition-transform duration-200 ease-out group-hover:-rotate-45">
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </span>
                                    </Link>
                                </div>
                            ))}
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
            <section id="contact" className="relative overflow-hidden bg-[#0a0a0a]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-45"
                >
                    <source src="/rok.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.97)_0%,rgba(10,10,10,0.9)_55%,rgba(10,10,10,0.75)_100%)]" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                                // Contact
                            </span>

                            <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                                Get Started
                                <br />
                                <span className="text-white/45">Today.</span>
                            </h2>

                            <p className="mt-6 max-w-[28rem] text-[16px] leading-relaxed text-white/60">
                                Ready to join our innovation hub? Reach out for training, incubation, or
                                partnerships.
                            </p>

                            <div className="mt-10 max-w-[30rem] border-t border-white/10">
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="group flex items-center justify-between gap-4 border-b border-white/10 py-4"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        Email
                                    </span>
                                    <span className="flex items-center gap-2 text-[15px] text-white/85 group-hover:text-white">
                                        {COMPANY.email}
                                        <ArrowUpRight className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
                                    </span>
                                </a>

                                <a
                                    href={`tel:${COMPANY.phoneHref}`}
                                    className="group flex items-center justify-between gap-4 border-b border-white/10 py-4"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        Phone
                                    </span>
                                    <span className="flex items-center gap-2 text-[15px] text-white/85 group-hover:text-white">
                                        {COMPANY.phone}
                                        <ArrowUpRight className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
                                    </span>
                                </a>

                                <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        Office
                                    </span>
                                    <span className="text-[15px] text-white/85">Borno State, Nigeria</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-6">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="text-white/40 transition-colors hover:text-white"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="text-white/40 transition-colors hover:text-white"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-white/10 lg:pt-2">
                            <Link
                                to="/core-skills-track"
                                className="group flex items-center justify-between gap-6 border-b border-white/10 py-6"
                            >
                                <span>
                                    <span className="block text-[19px] font-medium tracking-[-0.01em] text-white">
                                        Join Training
                                    </span>
                                    <span className="mt-1 block text-[14px] text-white/50">
                                        Professional development programs
                                    </span>
                                </span>
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-200 ease-out group-hover:-rotate-45">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>

                            <Link
                                to="/join-hub"
                                className="group flex items-center justify-between gap-6 border-b border-white/10 py-6"
                            >
                                <span>
                                    <span className="block text-[19px] font-medium tracking-[-0.01em] text-white">
                                        Startup Incubation
                                    </span>
                                    <span className="mt-1 block text-[14px] text-white/50">
                                        Mentorship &amp; incubation
                                    </span>
                                </span>
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-200 ease-out group-hover:-rotate-45">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
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
