import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle, Loader2 } from 'lucide-react';
import { submitCorporateApplication } from '@/lib/supabase';
import { useToast } from "@/components/ui/use-toast";

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
        current_role: formData.currentRole,
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold text-gray-900 hover:opacity-80 transition-opacity">
                ORIVON <span className="text-blue-600">EDGE</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Programs</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
              <a href="#apply" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 pb-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                  LEVEL UP YOUR<br />
                  CORPORATE<br />
                  <span className="text-purple-600">
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
                  className="group inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-600/20"
                >
                  <span>Join Track</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base border border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                >
                  <span>View Programs</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-gray-900 mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">6-8</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-purple-600 transition-colors">Weeks Program</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-gray-900 mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">100%</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-purple-600 transition-colors">Remote Ready</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-gray-900 mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">Global</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-purple-600 transition-colors">Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-[2.5rem] transform -rotate-3 scale-95" />
              <img
                src="/imges/13.jpg"
                alt="Professional working remotely"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out relative z-10"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-black font-bold uppercase tracking-wider">Work From</p>
                    <p className="text-lg font-black text-black">Anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              WHAT YOU'LL LEARN.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training in professional skills, remote work tools, and corporate best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Communication */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-black text-gray-50 select-none group-hover:text-purple-50/50 transition-colors duration-500">
                01
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Professional Communication</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Master business writing, presentations, and cross-cultural communication.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/30 transition-colors">
                    Business Email & Documentation
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/30 transition-colors">
                    Presentation Skills
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/30 transition-colors">
                    Virtual Meeting Etiquette
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/30 transition-colors">
                    Cross-Cultural Communication
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Work Mastery */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-black text-gray-50 select-none group-hover:text-blue-50/50 transition-colors duration-500">
                02
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Remote Work Mastery</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Excel in distributed teams using modern collaboration tools and workflows.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                    Collaboration Tools (Slack, Teams, Notion)
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                    Asynchronous Communication
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                    Time Zone Management
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                    Productivity & Time Management
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-green-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-black text-gray-50 select-none group-hover:text-green-50/50 transition-colors duration-500">
                03
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Project Management</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Lead projects effectively using agile methodologies and PM tools.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-colors">
                    Agile & Scrum Frameworks
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-colors">
                    Project Planning & Execution
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-colors">
                    Stakeholder Management
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/30 transition-colors">
                    Tools: Jira, Trello, Asana
                  </div>
                </div>
              </div>
            </div>

            {/* Career Development */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-black text-gray-50 select-none group-hover:text-orange-50/50 transition-colors duration-500">
                04
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Career Development</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Build your personal brand and land international remote opportunities.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-orange-100 group-hover:bg-orange-50/30 transition-colors">
                    Resume & LinkedIn Optimization
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-orange-100 group-hover:bg-orange-50/30 transition-colors">
                    Job Search Strategies
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-orange-100 group-hover:bg-orange-50/30 transition-colors">
                    Interview Preparation
                  </div>
                  <div className="bg-gray-50 px-5 py-3 rounded-xl text-gray-700 font-medium border border-gray-100 group-hover:border-orange-100 group-hover:bg-orange-50/30 transition-colors">
                    Salary Negotiation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-orivon-blue relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              WHY JOIN US.
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Get the support and resources you need to succeed in corporate and remote roles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                1
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-purple-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  Connect with international employers and remote work opportunities worldwide.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                2
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-blue-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Schedule</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  Evening and weekend classes designed for working professionals.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                3
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-green-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Career Support</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  One-on-one mentorship, job placement assistance, and ongoing career guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            READY TO GO<br />
            GLOBAL?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join our next cohort and start your journey to international opportunities.
          </p>

          <div className="bg-white rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Current Role</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="e.g., Software Developer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What are your career goals?</label>
                <textarea
                  rows={4}
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                  placeholder="Tell us about your professional aspirations..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="text-3xl font-bold">ORIVON <span className="text-blue-600">EDGE</span></Link>
            <p className="text-gray-400 mt-4">© 2025 Orivon Edge Innovation Hub. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateTrack;
