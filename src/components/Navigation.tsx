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

          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/dashboard"
                className="bg-orivon-blue text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm sm:text-base flex items-center gap-2"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm sm:text-base font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;