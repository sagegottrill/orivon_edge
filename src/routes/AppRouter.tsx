  import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import Index from '../pages/Index';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import AIServices from '../pages/AIServices';
import AISolutions from '../pages/AISolutions';
import { default as Schedule } from '../pages/Schedule';
import StartProject from '../pages/StartProject';
import NotFound from '../pages/NotFound';

// Debug logs
console.log('AppLayout:', AppLayout);
console.log('Index:', Index);
console.log('StartProject:', StartProject);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-services" element={<AIServices />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
  <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
