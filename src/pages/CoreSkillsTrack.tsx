import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Cloud, Shield, CheckCircle, Users, Calendar, Award } from 'lucide-react';
import { submitCoreSkillsApplication } from '@/lib/appwrite';
import CompanyFooter from "../components/CompanyFooter";
import SiteNav from "../components/SiteNav";

const CoreSkillsTrack: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    track: 'Artificial Intelligence' as 'Artificial Intelligence' | 'Cloud Computing' | 'Data Science' | 'Cybersecurity',
    motivation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitCoreSkillsApplication(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit application. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium text-gray-900 mb-6">
            APPLICATION SUBMITTED!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for applying to our Core Skills Track program. We've received your application
            and our admissions team will review it within 2-3 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <SiteNav />

      {/* Hero Section */}
      <section className="flex items-center pb-16 pt-12 lg:pb-20 lg:pt-16 relative overflow-hidden border-b border-gray-200 bg-white">
        {/* Subtle decorative elements keeping within color constraints */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] font-medium text-gray-900 leading-[0.98] tracking-[-0.03em]">
                  BUILD THE<br />
                  SKILLS<br />
                  <span className="text-gray-400">
                    COMPANIES
                  </span><br />
                  NEED.
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  Hands-on training with real project experience in <span className="font-semibold text-gray-900">AI</span>, <span className="font-semibold text-gray-900">Cloud</span>, <span className="font-semibold text-gray-900">Data</span>, and <span className="font-semibold text-gray-900">Cybersecurity</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="group inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium text-base hover:bg-gray-900 transition-all duration-300"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-base border border-gray-200 hover:border-black hover:bg-gray-50 transition-all duration-300"
                >
                  <span>View Curriculum</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-black mb-1 tracking-[-0.03em] transition-transform duration-300">12</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">WEEKS</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-black mb-1 tracking-[-0.03em] transition-transform duration-300">4</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">TRACKS</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-black mb-1 tracking-[-0.03em] transition-transform duration-300">100%</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">HANDS-ON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <img
                src="/ORI/what-we-do-1200.webp"
                alt="Orivon Edge members working at laptops"
                className="w-full h-full object-cover rounded-[28px] transform transition-transform duration-700 ease-out relative z-10"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 rounded-3xl bg-white/90 p-4 backdrop-blur-sm z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Certified</p>
                    <p className="text-lg font-medium text-gray-900">Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Tracks Section */}
      <section id="curriculum" className="scroll-mt-16 bg-[#0a0a0a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                // Curriculum
              </span>

              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">
                CHOOSE YOUR
                <br />
                <span className="text-white/45">TRACK.</span>
              </h2>

              <p className="mt-7 max-w-[26rem] text-[16px] leading-relaxed text-white/60">
                Four specialized tracks designed to give you industry-ready skills in high-demand fields.
              </p>
            </div>

            <div className="border-t border-white/10">
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-blue-400">01</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Artificial Intelligence</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Build intelligent systems using machine learning, neural networks, and natural language processing.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Machine Learning Fundamentals" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Machine Learning Fundamentals</li>
                    <li key="Deep Learning & Neural Networks" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Deep Learning & Neural Networks</li>
                    <li key="Natural Language Processing" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Natural Language Processing</li>
                    <li key="Computer Vision" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Computer Vision</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-blue-400">02</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Cloud Computing</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Master cloud infrastructure, DevOps practices, and scalable application deployment.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="AWS, Azure & GCP Fundamentals" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">AWS, Azure & GCP Fundamentals</li>
                    <li key="Docker & Kubernetes" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Docker & Kubernetes</li>
                    <li key="CI/CD Pipelines" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">CI/CD Pipelines</li>
                    <li key="Infrastructure as Code" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Infrastructure as Code</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-blue-400">03</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Data Science</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Turn data into insights using statistical analysis, visualization, and predictive modeling.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Python for Data Analysis" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Python for Data Analysis</li>
                    <li key="Statistical Analysis & Modeling" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Statistical Analysis & Modeling</li>
                    <li key="Data Visualization (Tableau, PowerBI)" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Data Visualization (Tableau, PowerBI)</li>
                    <li key="Big Data Technologies" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Big Data Technologies</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-blue-400">04</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Cybersecurity</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Protect systems and data with ethical hacking, security analysis, and threat detection.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Network Security Fundamentals" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Network Security Fundamentals</li>
                    <li key="Ethical Hacking & Penetration Testing" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Ethical Hacking & Penetration Testing</li>
                    <li key="Threat Detection & Response" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Threat Detection & Response</li>
                    <li key="Security Compliance & Auditing" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Security Compliance & Auditing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="scroll-mt-16 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
              // Why us
            </span>

            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em] text-gray-900">
              WHY CHOOSE US<span className="text-gray-300">.</span>
            </h2>

            <p className="mt-7 text-[16px] leading-relaxed text-gray-500">
              More than just training—we prepare you for real-world tech careers.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">01</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Real Project Experience</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                Work on actual client projects and build a portfolio that impresses employers. Gain hands-on experience that sets you apart.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">02</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Flexible Learning</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                Choose between full-time intensive or part-time weekend schedules. We adapt to your life so you can focus on learning.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">03</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Industry Certification</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                Earn recognized certifications that boost your resume and career prospects. Validate your skills with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Apply Section */}
      <section id="apply" className="scroll-mt-16 border-t border-white/10 bg-[#0a0a0a] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-20">
            <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                // Apply
              </span>

              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">
                READY TO START
                <br />
                <span className="text-white/45">YOUR JOURNEY?</span>
              </h2>
          <p className="mt-7 max-w-[30rem] text-[16px] leading-relaxed text-white/55">
              Applications are open for the next cohort. Limited spots available.
            </p>
          </div>

            <div className="border-t border-white/10 pt-10 lg:border-t-0 lg:pt-0">

          
            <h3 className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Application Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Select Track *</label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900">
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Why do you want to join this program? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                  placeholder="Tell us about your goals and motivation..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-[#0a0a0a] transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a0a]/25 border-t-[#0a0a0a]"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Link to="/" className="text-[15px] font-medium tracking-[-0.01em]">ORIVON <span className="text-blue-500">EDGE</span></Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">© 2025 Orivon Edge Innovation Hub. All Rights Reserved</p>
          <CompanyFooter />
        </div>
      </footer>
    </div>
  );
};

export default CoreSkillsTrack;
