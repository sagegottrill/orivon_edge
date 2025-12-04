import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Cloud, Shield, CheckCircle, Users, Calendar, Award } from 'lucide-react';
import { submitCoreSkillsApplication } from '@/lib/supabase';

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
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
              <a href="#curriculum" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Curriculum</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
              <a href="#apply" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 pb-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        {/* Subtle decorative elements keeping within color constraints */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                  BUILD THE<br />
                  SKILLS<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
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
                  className="group inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base border border-gray-200 hover:border-black hover:bg-gray-50 transition-all duration-300"
                >
                  <span>View Curriculum</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-8">
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-black mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">12</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">WEEKS</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-black mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">4</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">TRACKS</p>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-4xl font-black text-black mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-300">100%</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">HANDS-ON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-[2.5rem] transform rotate-3 scale-95" />
              <img
                src="/imges/12.jpg"
                alt="Students learning coding"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out relative z-10"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified</p>
                    <p className="text-lg font-black text-gray-900">Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tracks Section */}
      <section id="curriculum" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              CHOOSE YOUR TRACK.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized tracks designed to give you industry-ready skills in high-demand fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Track */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold text-black select-none group-hover:opacity-5 transition-opacity">
                01
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Artificial Intelligence</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Build intelligent systems using machine learning, neural networks, and natural language processing.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning Fundamentals', 'Deep Learning & Neural Networks', 'Natural Language Processing', 'Computer Vision'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Computing Track */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold text-black select-none group-hover:opacity-5 transition-opacity">
                02
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Cloud Computing</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Master cloud infrastructure, DevOps practices, and scalable application deployment.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['AWS, Azure & GCP Fundamentals', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Science Track */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold text-black select-none group-hover:opacity-5 transition-opacity">
                03
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Data Science</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Turn data into insights using statistical analysis, visualization, and predictive modeling.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Python for Data Analysis', 'Statistical Analysis & Modeling', 'Data Visualization (Tableau, PowerBI)', 'Big Data Technologies'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-700 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cybersecurity Track */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold text-black select-none group-hover:opacity-5 transition-opacity">
                04
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Cybersecurity</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Protect systems and data with ethical hacking, security analysis, and threat detection.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Network Security Fundamentals', 'Ethical Hacking & Penetration Testing', 'Threat Detection & Response', 'Security Compliance & Auditing'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-700 transition-all">
                      {skill}
                    </span>
                  ))}
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
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              WHY CHOOSE US.
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              More than just training—we prepare you for real-world tech careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                1
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-blue-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Real Project Experience</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  Work on actual client projects and build a portfolio that impresses employers. Gain hands-on experience that sets you apart.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                2
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-purple-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Learning</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  Choose between full-time intensive or part-time weekend schedules. We adapt to your life so you can focus on learning.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                3
              </div>
              <div className="relative z-10">
                <div className="h-1 w-10 bg-green-500 mb-6 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-white mb-3">Industry Certification</h3>
                <p className="text-blue-100/80 leading-relaxed text-base">
                  Earn recognized certifications that boost your resume and career prospects. Validate your skills with industry standards.
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
            READY TO START<br />
            YOUR JOURNEY?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Applications are open for the next cohort. Limited spots available.
          </p>

          <div className="bg-white rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Select Track *</label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900">
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Why do you want to join this program? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  placeholder="Tell us about your goals and motivation..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
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

export default CoreSkillsTrack;
