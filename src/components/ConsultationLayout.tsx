import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface ConsultationLayoutProps {
  children: React.ReactNode;
}

const ConsultationLayout: React.FC<ConsultationLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationLayout;
