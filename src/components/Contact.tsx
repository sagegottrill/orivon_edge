import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Clock, Globe, ArrowRight } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/4.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Mild dim overlay for readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true"></div>
        {/* Soft vignette to slightly darken edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.0) 70%)'
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        {/* Professional header */}
        <div className="text-center mb-12">

          
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Ready to transform your business with cutting-edge technology? Let's start the conversation 
            and build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Information & Quick Response */}
          <div className="space-y-6">
            <ProfessionalCard variant="gradient" className="p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed text-balance mb-8">
                Whether you're a startup looking to build your first product or an enterprise 
                seeking digital transformation, we're here to help you succeed.
              </p>
              
              {/* Quick response note removed per request */}
            </ProfessionalCard>

            {/* Contact Methods */}
            <div className="grid gap-4">
              <ProfessionalCard variant="glass" className="p-4 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:info@orivonedge.dev" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      info@orivonedge.dev
                    </a>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </ProfessionalCard>

              <ProfessionalCard variant="glass" className="p-4 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+2348143084473" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                      +234 8143084473 / +234 7079696353
                    </a>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </ProfessionalCard>

              <ProfessionalCard variant="glass" className="p-4 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                    <a href="https://wa.me/2348143084473" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      Chat with us
                    </a>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </ProfessionalCard>

              <ProfessionalCard variant="glass" className="p-4 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20">
                    <Globe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">
                      Global remote collaborators<br />
                      <span className="text-orange-400">Headquarters: Borno, Nigeria</span>
                    </p>
                  </div>
                </div>
              </ProfessionalCard>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ProfessionalCard variant="glass" className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
              <p className="text-gray-300">Tell us about your vision and let's make it reality.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-white">
                    Full Name *
                  </label>
                  <div className="glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white">
                    Email Address *
                  </label>
                  <div className="glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-white">
                  Company/Organization
                </label>
                <div className="glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-white">
                  Project Details *
                </label>
                <div className="glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                    placeholder="Tell us about your project, timeline, and requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-green-500 disabled:to-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 glow-effect hover:scale-105 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ProfessionalCard>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;