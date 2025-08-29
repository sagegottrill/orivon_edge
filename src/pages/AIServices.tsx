import React from 'react';
import { Brain, Cpu, Database, Network } from 'lucide-react';
import { NeonCard } from '@/components/ui/neon-card';

const AIServices: React.FC = () => {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to pattern recognition.",
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP systems for text analysis, chatbots, and automated content generation.",
      icon: <Cpu className="w-8 h-8 text-teal-500" />
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis and visualization powered by AI algorithms.",
      icon: <Database className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Neural Networks",
      description: "Deep learning solutions for complex pattern recognition and decision-making systems.",
      icon: <Network className="w-8 h-8 text-indigo-500" />
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          AI Services & Solutions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <NeonCard key={index} className="p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/6 flex items-center justify-center">{service.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-200 uppercase tracking-wider mb-1">service</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;
