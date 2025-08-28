import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 supports-[backdrop-filter]:bg-black/50' : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <h1 className="text-[28px] font-medium text-white tracking-tight">
              ORIVON <span className="text-blue-400">EDGE</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-[15px] font-medium tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#contact" className="hidden md:block text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-2.5 rounded-full text-[15px] font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25">
              Contact Us
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-white hover:bg-white/10 rounded-full transition-all duration-300 relative z-50"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'
                  }`}></span>
                  <span className={`absolute left-0 block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  } top-2`}></span>
                  <span className={`absolute left-0 block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-2xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`px-8 pt-28 pb-8 space-y-1 transition-all duration-500 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 text-gray-300 hover:text-white text-2xl font-medium tracking-tight transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 text-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl text-xl font-medium tracking-tight transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;