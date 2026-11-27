import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
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
      <section className="border-b border-gray-200 bg-white pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-20">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
                // Join the hub
              </span>
              <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em] text-gray-900">
                Become Part of the
                <br />
                <span className="text-gray-400">Orivon Edge Hub</span>
              </h1>
              <p className="mt-8 max-w-[32rem] text-[16px] leading-relaxed text-gray-600">
                Join our innovation hub for incubation, mentorship, and access to a global
                network of founders, builders, and investors.
              </p>
              <dl className="mt-9 grid max-w-[32rem] grid-cols-1 gap-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-gray-300">/</span>
                  <dt className="text-[15px] text-gray-700">Mentorship &amp; incubation programs</dt>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-gray-300">/</span>
                  <dt className="text-[15px] text-gray-700">Access to training &amp; resources</dt>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-gray-300">/</span>
                  <dt className="text-[15px] text-gray-700">Networking with global innovators</dt>
                </div>
              </dl>
            </div>

            <div className="lg:border-l lg:border-gray-200 lg:pl-10 xl:pl-14">
              <h2 className="border-b border-gray-200 pb-5 text-[22px] font-medium tracking-[-0.02em] text-gray-900">
                Apply to Join
              </h2>
              {error && (
                <div className="mb-2 border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Area of Interest *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
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
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Experience Level *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    >
                      <option value="">Select level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Background</label>
                  <textarea
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your educational background, current role, or relevant experience..."
                    className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Goals *</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="What do you hope to achieve by joining Orivon Edge? What are your short-term and long-term goals?"
                    className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
                    >
                      <option value="">Select availability</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">How did you hear about us?</label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-[15px] text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 [&>option]:text-gray-900"
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
                  className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#0a0a0a] px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#0a0a0a]/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
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
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            © 2025 Orivon Edge. All Rights Reserved
          </p>
          <CompanyFooter />
        </div>
      </footer>
    </div>
  );
};

export default JoinHub;
