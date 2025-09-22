import React from 'react';
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Discovery Call",
      description: "We start with a detailed consultation to understand your goals, challenges, and vision for the project.",
      duration: "1-2 days"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy & Design",
  description: "We create a comprehensive strategy and designs that align with your business objectives.",
      duration: "1-2 weeks"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "We build your solution using cutting-edge technologies, keeping you updated throughout the process.",
      duration: "2-8 weeks"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure everything runs smoothly.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 text-balance leading-[0.9]">
            How We <span className="gradient-text">Work</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-0"></div>
              )}
              
              <ProfessionalCard variant="glass" className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {step.icon}
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-balance">
                  {step.description}
                </p>

                <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  {step.duration}
                </div>
              </ProfessionalCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <ProfessionalCard variant="gradient" className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300">
              Start Your Project Today
            </button>
          </ProfessionalCard>
        </div>
      </div>
    </section>
  );
};

export default Process;