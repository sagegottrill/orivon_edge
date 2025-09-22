import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Sparkle } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'SaaS Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'AI Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    resources: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' },
      { name: 'Blog', href: '#blog' }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/orgs/ORIVON-EDGE/repositories', name: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:support@orivonedge.com', name: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-slate-950 to-black text-white relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8 relative z-10">
        {/* Newsletter section */}
        <div className="mb-20">
          <ProfessionalCard variant="gradient" className="p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkle size={20} className="text-blue-400" weight="fill" />
              <span className="text-sm font-medium text-blue-400">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Get the Latest Insights
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
              Get the latest insights on technology trends and digital transformation delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-effect flex items-center gap-2">
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </ProfessionalCard>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white tracking-tight mb-6">
              ORIVON <span className="gradient-text">EDGE</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed text-balance">
              Scalable tech solutions for real problems. We build adaptive, 
              context-driven digital solutions that scale globally.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <ProfessionalCard key={index} variant="glass" className="p-3 hover:scale-110 transition-all duration-300 group">
                  <a href={social.href} aria-label={social.name} className="block text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    {React.cloneElement(social.icon as React.ReactElement, { className: "w-5 h-5" })}
                  </a>
                </ProfessionalCard>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300">
              © {currentYear} ORIVON EDGE. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;