import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Rocket, CheckCircle, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { submitProgramApplication } from '@/lib/appwrite';
import CompanyFooter from "../components/CompanyFooter";
import SiteNav from "../components/SiteNav";

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
      await submitProgramApplication({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        interest: formData.interest,
        experience: formData.experience,
        background: formData.background,
        goals: formData.goals,
        availability: formData.availability,
        howHeard: formData.howHeard,
        program: 'Join Hub'
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Application error:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-16">
        <nav className="bg-white fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link to="/" className="text-[clamp(1.3rem,2.2vw,1.65rem)] font-medium text-gray-900 hover:opacity-80 transition-opacity">
                  ORIVON <span className="text-blue-600">EDGE</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium text-gray-900 mb-6">
              APPLICATION SUBMITTED!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for your interest in joining the Orivon Edge hub. We've received your
              application and our team will review it within 2-3 business days.
            </p>
            <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pb-20 pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4" /> Join The Hub
              </div>
              <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-medium text-gray-900 mb-6 leading-tight">
                Become Part of the<br />
                <span className="text-blue-600">Orivon Edge</span> Hub
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our innovation hub for incubation, mentorship, and access to a global
                network of founders, builders, and investors.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Mentorship & incubation programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Access to training & resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Networking with global innovators</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Apply to Join</h2>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
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
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Area of Interest *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select an area</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Startup Incubation">Startup Incubation</option>
                      <option value="Entrepreneurship">Entrepreneurship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Experience Level *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Background</label>
                  <textarea
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your educational background, current role, or relevant experience..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Goals *</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="What do you hope to achieve by joining Orivon Edge? What are your short-term and long-term goals?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">How did you hear about us?</label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select source</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend/Referral">Friend/Referral</option>
                      <option value="Google">Google</option>
                      <option value="Event">Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
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
                    <>
                      Submit Application <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Orivon Edge. All Rights Reserved
          </p>
          <CompanyFooter />
        </div>
      </footer>
    </div>
  );
};

export default JoinHub;
