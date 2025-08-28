import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface InnerPageLayoutProps {
  children: React.ReactNode;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default InnerPageLayout;
