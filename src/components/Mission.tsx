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
        {/* Main mission statement */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
            We are dedicated to{' '}
            <span className="gradient-text">
              nurturing innovation, building ventures, and scaling impact
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-balance">
            Orivon Edge is a global venture studio and digital agency. We build AI-driven startups 
            and deliver powerful solutions for businesses worldwide.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {/* Mission */}
          <div className="glass-card p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize access to world-class technology and innovation across Africa by building 
              transformative ventures and delivering exceptional solutions that empower businesses and 
              communities to thrive in the digital age.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become Africa's leading venture studio and digital innovation partner, known for 
              launching successful startups and delivering solutions that create lasting impact across 
              industries, borders, and generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;