import React from 'react';
import { Brain, Cpu, Database, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;
