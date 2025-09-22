import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Footer from '../components/Footer';
import NewsletterPopup from '../components/ui/newsletter-popup';
import { useNewsletterPopup } from '../hooks/useNewsletterPopup';

const AboutPage: React.FC = () => {
  const { isOpen, closePopup } = useNewsletterPopup();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <About />
      <Footer />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

export default AboutPage;