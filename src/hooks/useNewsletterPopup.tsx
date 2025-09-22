import { useState, useEffect } from 'react';

interface UseNewsletterPopupOptions {
  delayMs?: number;
  showOnExit?: boolean;
  showOnScroll?: boolean;
  scrollPercentage?: number;
}

export const useNewsletterPopup = (options: UseNewsletterPopupOptions = {}) => {
  const {
    delayMs = 15000, // Show after 15 seconds
    showOnExit = true,
    showOnScroll = true,
    scrollPercentage = 70
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Check if user has already seen the popup
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    const lastShown = localStorage.getItem('newsletter-popup-last-shown');
    
    if (hasSeenPopup && lastShown) {
      const daysSinceLastShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
      // Show again after 7 days
      if (daysSinceLastShown < 7) {
        setHasShown(true);
      }
    }
  }, []);

  // Show popup after delay
  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, hasShown]);

  // Show on scroll
  useEffect(() => {
    if (!showOnScroll || hasShown) return;

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrolled >= scrollPercentage && !hasShown) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, scrollPercentage, hasShown]);

  // Show on exit intent
  useEffect(() => {
    if (!showOnExit || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showOnExit, hasShown]);

  const closePopup = () => {
    setIsOpen(false);
    setHasShown(true);
    localStorage.setItem('newsletter-popup-seen', 'true');
    localStorage.setItem('newsletter-popup-last-shown', Date.now().toString());
  };

  const resetPopup = () => {
    localStorage.removeItem('newsletter-popup-seen');
    localStorage.removeItem('newsletter-popup-last-shown');
    setHasShown(false);
  };

  return {
    isOpen,
    closePopup,
    resetPopup,
    hasShown
  };
};