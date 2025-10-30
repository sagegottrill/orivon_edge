import React from 'react';
import { Rocket, Target, Eye, Zap } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve real-world problems.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'Every solution we build is designed to create measurable, positive change in communities.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and honest partnerships form the foundation of our relationships.'
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description: 'We move fast without compromising on excellence, delivering solutions that last.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Content removed */}
      </div>
    </section>
  );
};

export default Mission;