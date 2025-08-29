import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { NeonCard } from '@/components/ui/neon-card';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
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
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/orgs/ORIVON-EDGE/repositories', name: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:support@orivonedge.com', name: 'Email' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-blue-950/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,112,243,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 pt-24 pb-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-[32px] font-medium text-white tracking-tight mb-6">
              ORIVON <span className="text-blue-400">EDGE</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Scalable tech solutions for real problems. We build adaptive, 
              context-driven digital solutions that scale globally.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <NeonCard key={index} className="p-0 w-auto inline-block">
                  <a href={social.href} aria-label={social.name} className="p-4 block rounded-2xl">
                    {React.cloneElement(social.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </a>
                </NeonCard>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto">
            <NeonCard className="p-12">
              <div className="text-center">
                <h4 className="text-3xl font-medium text-white mb-6 tracking-tight">Stay Updated</h4>
                <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">Get the latest insights on technology trends and digital transformation.</p>
                <div className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto">
                  <NeonCard className="flex-1 rounded-2xl p-0 backdrop-blur-xl bg-white/5 border border-white/10 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-opacity-30 transition-all duration-300">
                    <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 text-white placeholder-gray-400 bg-transparent text-lg font-light" />
                  </NeonCard>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-10 py-4 rounded-2xl text-lg font-medium tracking-wide transition-all duration-300 shadow-lg">Subscribe</button>
                </div>
              </div>
            </NeonCard>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-lg text-gray-300 font-light">
              © {currentYear} ORIVON EDGE. All rights reserved.
            </p>
            <div className="flex gap-10">
              <a href="#privacy" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="#terms" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light">
                Terms of Service
              </a>
              <a href="#cookies" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 font-light">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;