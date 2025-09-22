import React, { useState, useEffect } from 'react';
import { Menu, X, Home, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {!isHomePage && (
              <button
                onClick={() => navigate('/')}
                className="mr-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              >
                <Home className="w-5 h-5" />
              </button>
            )}
            <h1 
              onClick={() => navigate('/')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent cursor-pointer"
            >
              ORIVON EDGE
            </h1>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {isHomePage && navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
                    ${activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50/50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium
                    ${activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50/50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
