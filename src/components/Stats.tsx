import React from 'react';
import AnimatedCounter from './ui/animated-counter';

const Stats: React.FC = () => {
  const stats = [
    {
      value: 50,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful ventures and client solutions'
    },
    {
      value: 100,
      suffix: 'K+',
      label: 'Lives Impacted',
      description: 'Through our digital solutions'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Global presence and impact'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on project reviews'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Content removed */}
      </div>
    </section>
  );
};

export default Stats;