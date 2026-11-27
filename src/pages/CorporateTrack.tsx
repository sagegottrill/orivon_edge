import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle, Loader2 } from 'lucide-react';
import { submitCorporateApplication } from '@/lib/appwrite';
import { useToast } from "@/components/ui/use-toast";
import CompanyFooter from "../components/CompanyFooter";
import SiteNav from "../components/SiteNav";

const CorporateTrack: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitCorporateApplication({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        job_role: formData.currentRole,
        goals: formData.goals
      });
      toast({
        title: "Application Submitted!",
        description: "We'll be in touch with you shortly.",
      });
      setFormData({ fullName: '', email: '', phone: '', currentRole: '', goals: '' });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <SiteNav />

      {/* Hero Section */}
      <section className="flex items-center pb-16 pt-12 lg:pb-20 lg:pt-16 relative overflow-hidden border-b border-gray-200 bg-white">
        {/* Subtle decorative elements */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] font-medium text-gray-900 leading-[0.98] tracking-[-0.03em]">
                  LEVEL UP YOUR<br />
                  CORPORATE<br />
                  <span className="text-gray-400">
                    CAREER.
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  Professional development for corporate roles and international remote work opportunities. Master the skills that top employers demand.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="group inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium text-base hover:bg-gray-900 transition-all duration-300 shadow-purple-600/20"
                >
                  <span>Join Track</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-base border border-gray-200 hover:border-gray-900 hover:text-gray-400 transition-all duration-300"
                >
                  <span>View Programs</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-gray-900 mb-1 tracking-[-0.03em] transition-transform duration-300">6-8</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">Weeks Program</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-gray-900 mb-1 tracking-[-0.03em] transition-transform duration-300">100%</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">Remote Ready</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium text-gray-900 mb-1 tracking-[-0.03em] transition-transform duration-300">Global</div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <img
                src="/imges/hero-1-1280.webp"
                alt="Professional working remotely"
                className="w-full h-full object-cover rounded-[28px] transform transition-transform duration-700 ease-out relative z-10"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-5 right-5 z-20 rounded-3xl bg-white/90 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-black font-medium uppercase tracking-wider">Work From</p>
                    <p className="text-lg font-medium text-black">Anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Tracks Section */}
      <section id="programs" className="scroll-mt-16 bg-[#0a0a0a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                // Curriculum
              </span>

              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-white">
                WHAT YOU'LL
                <br />
                <span className="text-white/45">LEARN.</span>
              </h2>

              <p className="mt-7 max-w-[26rem] text-[16px] leading-relaxed text-white/60">
                Comprehensive training in professional skills, remote work tools, and corporate best practices.
              </p>
            </div>

            <div className="border-t border-white/10">
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-white/30">01</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Professional Communication</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Master business writing, presentations, and cross-cultural communication.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Business Email & Documentation" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Business Email & Documentation</li>
                    <li key="Presentation Skills" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Presentation Skills</li>
                    <li key="Virtual Meeting Etiquette" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Virtual Meeting Etiquette</li>
                    <li key="Cross-Cultural Communication" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Cross-Cultural Communication</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-white/30">02</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Remote Work Mastery</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Excel in distributed teams using modern collaboration tools and workflows.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Collaboration Tools (Slack, Teams, Notion)" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Collaboration Tools (Slack, Teams, Notion)</li>
                    <li key="Asynchronous Communication" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Asynchronous Communication</li>
                    <li key="Time Zone Management" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Time Zone Management</li>
                    <li key="Productivity & Time Management" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Productivity & Time Management</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-white/30">03</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Project Management</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Lead projects effectively using agile methodologies and PM tools.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Agile & Scrum Frameworks" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Agile & Scrum Frameworks</li>
                    <li key="Project Planning & Execution" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Project Planning & Execution</li>
                    <li key="Stakeholder Management" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Stakeholder Management</li>
                    <li key="Tools: Jira, Trello, Asana" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Tools: Jira, Trello, Asana</li>
                </ul>
              </div>
              <div className="border-b border-white/10 py-8 lg:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tabular-nums text-white/30">04</span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">Career Development</h3>
                </div>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-white/55">
                  Build your personal brand and land international remote opportunities.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <li key="Resume & LinkedIn Optimization" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Resume & LinkedIn Optimization</li>
                    <li key="Job Search Strategies" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Job Search Strategies</li>
                    <li key="Interview Preparation" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Interview Preparation</li>
                    <li key="Salary Negotiation" className="border-l border-white/15 pl-3 font-mono text-[11px] tracking-[0.02em] text-white/45">Salary Negotiation</li>
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
              WHY JOIN US<span className="text-gray-300">.</span>
            </h2>

            <p className="mt-7 text-[16px] leading-relaxed text-gray-500">
              Get the support and resources you need to succeed in corporate and remote roles.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">01</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Global Network</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                Connect with international employers and remote work opportunities worldwide.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">02</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Flexible Schedule</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                Evening and weekend classes designed for working professionals.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-7">
              <span className="font-mono text-[10px] tabular-nums text-gray-400">03</span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-gray-900">Career Support</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                One-on-one mentorship, job placement assistance, and ongoing career guidance.
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
                READY TO GO
                <br />
                <span className="text-white/45">GLOBAL?</span>
              </h2>
          <p className="mt-7 max-w-[30rem] text-[16px] leading-relaxed text-white/55">
              Join our next cohort and start your journey to international opportunities.
            </p>
          </div>

            <div className="border-t border-white/10 pt-10 lg:border-t-0 lg:pt-0">

          
            <h3 className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Enrollment Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Email</label>
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
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Phone Number</label>
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
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Current Role</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    placeholder="e.g., Software Developer"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">What are your career goals?</label>
                <textarea
                  rows={4}
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/25 focus:border-white focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                  placeholder="Tell us about your professional aspirations..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-[#0a0a0a] transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit Enrollment'}
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

export default CorporateTrack;
