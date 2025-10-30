import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Cloud, Shield, CheckCircle, Users, Calendar, Award } from 'lucide-react';

const CoreSkillsTrack: React.FC = () => {
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
              <a href="#apply" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply Now
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
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                🎓 Core Skills Track
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                BUILD THE SKILLS<br />
                COMPANIES<br />
                <span className="text-blue-600">ACTUALLY NEED.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Hands-on training with real project experience in AI, Cloud Computing, 
                Data Science, and Cybersecurity. Learn by building, not just watching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#apply"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <span>View Curriculum</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
                  <p className="text-sm text-gray-600">Weeks Intensive</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                  <p className="text-sm text-gray-600">Core Tracks</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Hands-On</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/imges/12.jpg" 
                alt="Students learning coding"
                className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
              />
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
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Build intelligent systems using machine learning, neural networks, and natural language processing.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Machine Learning Fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deep Learning & Neural Networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Natural Language Processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Computer Vision</span>
                </li>
              </ul>
            </div>

            {/* Cloud Computing Track */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Cloud Computing</h3>
              <p className="text-gray-600 mb-6">
                Master cloud infrastructure, DevOps practices, and scalable application deployment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AWS, Azure & GCP Fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Docker & Kubernetes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CI/CD Pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Infrastructure as Code</span>
                </li>
              </ul>
            </div>

            {/* Data Science Track */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600 mb-6">
                Turn data into insights using statistical analysis, visualization, and predictive modeling.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Python for Data Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Statistical Analysis & Modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Data Visualization (Tableau, PowerBI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Big Data Technologies</span>
                </li>
              </ul>
            </div>

            {/* Cybersecurity Track */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Protect systems and data with ethical hacking, security analysis, and threat detection.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Network Security Fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ethical Hacking & Penetration Testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Threat Detection & Response</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Security Compliance & Auditing</span>
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
              WHY CHOOSE US.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just training—we prepare you for real-world tech careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Project Experience</h3>
              <p className="text-gray-600">
                Work on actual client projects and build a portfolio that impresses employers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose between full-time intensive or part-time weekend schedules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Certification</h3>
              <p className="text-gray-600">
                Earn recognized certifications that boost your resume and career prospects.
              </p>
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Select Track</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option>Artificial Intelligence</option>
                    <option>Cloud Computing</option>
                    <option>Data Science</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Why do you want to join this program?</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your goals and motivation..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Application
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
