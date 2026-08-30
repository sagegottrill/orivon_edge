import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '@/lib/firebase';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Firebase Auth Listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 supports-[backdrop-filter]:bg-black/50' : 'bg-transparent'
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
                ORIVON <span className="text-orivon-blue font-extrabold">EDGE</span>
              </span>
            </Link>
          </div>

          {/* Auth Buttons Removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;