import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import VenturePerformance from './VenturePerformance';
import ServicesIndustries from './ServicesIndustries';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import VentureInvestmentCTA from './VentureInvestmentCTA';
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
      <VenturePerformance />
      <ServicesIndustries />
      <Portfolio />
      <Testimonials />
      <VentureInvestmentCTA />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

export default AppLayout;
