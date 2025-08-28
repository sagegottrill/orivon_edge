import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Industries from './Industries';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/animations.css';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
