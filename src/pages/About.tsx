import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutComponent from '@/components/About';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;