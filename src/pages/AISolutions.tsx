import React from 'react';
import { Bot, Sparkles, Target, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AISolutions: React.FC = () => {
  const solutions = [
    {
      title: "AI Chatbot Platform",
      description: "Enterprise-grade conversational AI platform with natural language understanding.",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      features: ["Multi-language support", "Custom training", "Analytics dashboard"]
    },
    {
      title: "Predictive Analytics Suite",
      description: "Advanced analytics platform powered by machine learning algorithms.",
      icon: <Target className="w-12 h-12 text-teal-500" />,
      features: ["Real-time predictions", "Data visualization", "Automated reporting"]
    },
    {
      title: "Computer Vision System",
      description: "State-of-the-art image and video analysis platform.",
      icon: <Sparkles className="w-12 h-12 text-purple-500" />,
      features: ["Object detection", "Face recognition", "Visual search"]
    },
    {
      title: "AutoML Platform",
      description: "Automated machine learning platform for rapid model development.",
      icon: <Zap className="w-12 h-12 text-indigo-500" />,
      features: ["Model automation", "Feature engineering", "Model deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge AI solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white/10 rounded-full mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
