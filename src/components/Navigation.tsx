import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const pathname = window.location.pathname;
  const isHomePage = pathname === '/';
  
  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: isHomePage ? '#services-industries' : '/#services-industries' },
    { name: 'Industries', href: isHomePage ? '#services-industries' : '/#services-industries' },
    { name: 'Portfolio', href: isHomePage ? '#portfolio' : '/#portfolio' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    // Removed 'Team' and 'Case Studies' nav entries per request
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 supports-[backdrop-filter]:bg-black/50' : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Orivon Edge Logo" 
                className="h-10 w-auto"
              />
              <span className="text-base sm:text-xl md:text-2xl font-montserrat font-bold text-white tracking-tight uppercase">
                ORIVON <span className="gradient-text font-extrabold">EDGE</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-baseline space-x-10">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-[15px] font-medium tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-[15px] font-medium tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {/* Contact Us button removed from nav per request */}
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
            item.href.startsWith('#') ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-gray-300 hover:text-white text-2xl font-medium tracking-tight transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-gray-300 hover:text-white text-2xl font-medium tracking-tight transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="pt-8">
            {/* Mobile Contact CTA removed per request */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;