import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Stats from './Stats';
import Mission from './Mission';
import ServicesIndustries from './ServicesIndustries';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Process from './Process';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import NewsletterPopup from './ui/newsletter-popup';
import { useNewsletterPopup } from '../hooks/useNewsletterPopup';
import '../styles/animations.css';

const AppLayout: React.FC = () => {
  const { isOpen, closePopup } = useNewsletterPopup();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <Stats />
      <Mission />
      <ServicesIndustries />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

export default AppLayout;
