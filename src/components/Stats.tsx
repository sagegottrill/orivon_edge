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
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm">
            Trusted by Innovators Worldwide
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Impact That Speaks for Itself
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building ventures and solutions that create real-world impact across Africa and beyond
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                {/* Animated counter */}
                <div className="flex items-center justify-center mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    duration={2000}
                    className="text-5xl lg:text-6xl font-bold gradient-text"
                  />
                  <span className="text-5xl lg:text-6xl font-bold gradient-text ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-gray-300 text-lg mb-6">
            Join hundreds of businesses and ventures transforming Africa's digital landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 glow-effect hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect text-white rounded-xl font-semibold border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;