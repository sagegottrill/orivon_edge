import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Rocket, CheckCircle, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const JoinHub: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    experience: '',
    background: '',
    goals: '',
    availability: '',
    howHeard: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with Supabase
    console.log('Application submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSubmitted) {
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
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center py-20">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              APPLICATION RECEIVED!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for applying to join Orivon Edge Innovation Hub. We've received your application 
              and our team will review it carefully.
            </p>
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What happens next?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Our team will review your application within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You'll receive an email with next steps or interview invitation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Check your spam folder if you don't hear from us</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Back to Home</span>
              </Link>
              <a
                href="mailto:info@orivonedge.dev"
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
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
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Programs</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                BECOME PART OF<br />
                THE <span className="text-blue-600">FUTURE.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Join Africa's fastest-growing innovation hub. Access world-class training, 
                mentorship, and opportunities to build the next generation of technology solutions.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">info@orivonedge.dev</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">+234 8143084473</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <span className="text-lg text-gray-700">Borno State, Nigeria</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/imges/14.jpg" 
                alt="Innovation hub community"
                className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              WHAT WE OFFER.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the path that fits your goals and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-6">
                Professional development in tech skills, AI, cloud computing, and more.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Core Skills Track</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Corporate Track</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry Certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Startup Incubation</h3>
              <p className="text-gray-600 mb-6">
                Transform your ideas into successful ventures with our support.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mentorship Programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Funding Opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Network Access</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Community Membership</h3>
              <p className="text-gray-600 mb-6">
                Join a vibrant community of innovators and entrepreneurs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Networking Events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Co-working Space</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Resource Library</span>
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
              Experience the benefits of being part of a thriving innovation ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">Learn from industry professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-gray-600">Work on actual client projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Connect with opportunities worldwide</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Support</h3>
              <p className="text-gray-600">Job placement and career guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              READY TO<br />
              START YOUR<br />
              JOURNEY?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fill out the application below and take the first step towards your future.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Personal Information</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
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
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Location *</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>

              {/* Program Interest */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Program Interest</h4>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">What are you interested in? *</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select an option</option>
                    <option value="training-core">Training Programs - Core Skills Track</option>
                    <option value="training-corporate">Training Programs - Corporate Track</option>
                    <option value="incubation">Startup Incubation</option>
                    <option value="membership">Community Membership</option>
                    <option value="partnership">Partnership/Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Current Experience Level *</label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner - Just starting out</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced professional</option>
                    <option value="expert">Expert - Industry veteran</option>
                  </select>
                </div>
              </div>

              {/* Background & Goals */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Tell Us About Yourself</h4>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Educational/Professional Background *</label>
                  <textarea 
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="Tell us about your educational background, current role, or relevant experience..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">What are your goals? *</label>
                  <textarea 
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="What do you hope to achieve by joining Orivon Edge? What are your short-term and long-term goals?"
                  ></textarea>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Additional Details</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Availability *</label>
                    <select 
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select availability</option>
                      <option value="fulltime">Full-time (40+ hours/week)</option>
                      <option value="parttime">Part-time (20-39 hours/week)</option>
                      <option value="evening">Evenings/Weekends only</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">How did you hear about us? *</label>
                    <select 
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select an option</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Colleague</option>
                      <option value="event">Event/Workshop</option>
                      <option value="search">Google Search</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
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

export default JoinHub;
