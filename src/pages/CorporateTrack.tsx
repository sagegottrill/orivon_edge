import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Globe, TrendingUp, CheckCircle, Users, Award, Clock } from 'lucide-react';

const CorporateTrack: React.FC = () => {
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
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                LEVEL UP YOUR<br />
                CORPORATE<br />
                <span className="text-purple-600">CAREER.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professional development for corporate roles and international remote work opportunities. 
                Master the skills that top employers demand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#apply"
                  className="inline-flex items-center justify-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <span>Join Track</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#programs"
                  className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors"
                >
                  <span>View Programs</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">6-8</div>
                  <p className="text-sm text-gray-600">Weeks Program</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Remote Ready</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">Global</div>
                  <p className="text-sm text-gray-600">Opportunities</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/imges/13.jpg" 
                alt="Professional working remotely"
                className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-white">
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
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Communication</h3>
              <p className="text-gray-600 mb-6">
                Master business writing, presentations, and cross-cultural communication.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Business Email & Documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Presentation Skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Virtual Meeting Etiquette</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cross-Cultural Communication</span>
                </li>
              </ul>
            </div>

            {/* Remote Work Mastery */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Remote Work Mastery</h3>
              <p className="text-gray-600 mb-6">
                Excel in distributed teams using modern collaboration tools and workflows.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Collaboration Tools (Slack, Teams, Notion)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Asynchronous Communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Time Zone Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Productivity & Time Management</span>
                </li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Management</h3>
              <p className="text-gray-600 mb-6">
                Lead projects effectively using agile methodologies and PM tools.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Agile & Scrum Frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Project Planning & Execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stakeholder Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tools: Jira, Trello, Asana</span>
                </li>
              </ul>
            </div>

            {/* Career Development */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Career Development</h3>
              <p className="text-gray-600 mb-6">
                Build your personal brand and land international remote opportunities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Resume & LinkedIn Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Job Search Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Interview Preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Salary Negotiation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              WHY JOIN US.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the support and resources you need to succeed in corporate and remote roles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Globe className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Network</h3>
              <p className="text-gray-600">
                Connect with international employers and remote work opportunities worldwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Clock className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">
                Evening and weekend classes designed for working professionals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Users className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Support</h3>
              <p className="text-gray-600">
                One-on-one mentorship, job placement assistance, and ongoing career guidance.
              </p>
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Current Role</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="e.g., Software Developer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What are your career goals?</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Tell us about your professional aspirations..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Submit Enrollment
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
