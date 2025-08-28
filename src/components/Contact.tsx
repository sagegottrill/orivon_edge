import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

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
    <section id="contact" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Ready to transform your business with cutting-edge technology? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-medium text-white mb-8 tracking-tight">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Whether you're a startup looking to build your first product or an enterprise 
                seeking digital transformation, we're here to help you succeed.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                  <a href="mailto:support@orivonedge.com" className="text-lg text-blue-400 hover:text-blue-300 font-light transition-colors duration-300">
                    support@orivonedge.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
                  <a href="tel:+2348143084473" className="text-lg text-blue-400 hover:text-blue-300 font-light transition-colors duration-300">
                    +234 8143084473 / +234 7079696353
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">WhatsApp</h4>
                  <a href="https://wa.me/2348143084473" className="text-lg text-blue-400 hover:text-blue-300 font-light transition-colors duration-300">
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Location</h4>
                  <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Global Remote Team<br />
                    Headquarters: Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
              <h4 className="text-2xl font-medium text-white mb-4 tracking-tight">Quick Response Guarantee</h4>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent matters, 
                reach out via WhatsApp for immediate assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-base font-medium text-white">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-lg font-light"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-base font-medium text-white">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-lg font-light"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-base font-medium text-white">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-lg font-light"
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-base font-medium text-white">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 resize-none text-lg font-light"
                  placeholder="Tell us about your project, timeline, and requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-green-500 disabled:to-green-600 text-white px-10 py-5 rounded-2xl text-xl font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;