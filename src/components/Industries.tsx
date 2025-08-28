import React, { useState, useEffect } from 'react';
import { Building, GraduationCap, DollarSign, Zap, Globe, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Industries: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      icon: <Building className="w-16 h-16" />,
      title: "Government",
      description: "Digital transformation for public sector efficiency and citizen services.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "NGOs",
      description: "Technology solutions that amplify social impact and community reach.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: "SMEs",
      description: "Scalable solutions that grow with small and medium enterprises.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: "Education",
      description: "Learning management systems and educational technology platforms.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      icon: <DollarSign className="w-16 h-16" />,
      title: "Fintech",
      description: "Secure financial technology solutions and payment platforms.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20"
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Energy",
      description: "Smart grid solutions and renewable energy management systems.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(industries.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(industries.length / 3)) % Math.ceil(industries.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIndustries = () => {
    const itemsPerSlide = 3;
    const start = currentSlide * itemsPerSlide;
    return industries.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="industries" className="py-40 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,243,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-10">
            Industries We <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
            Our adaptive approach and cutting-edge technology deliver exceptional results across diverse industries and markets.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(industries.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {industries.slice(slideIndex * 3, (slideIndex + 1) * 3).map((industry, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${industry.color} text-white mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {industry.icon}
                        </div>
                        
                        <h3 className="text-3xl font-medium text-white mb-5 tracking-tight">
                          {industry.title}
                        </h3>
                        
                        <p className="text-lg text-gray-300 leading-relaxed font-light">
                          {industry.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg rounded-full p-4 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg rounded-full p-4 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(industries.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Global Reach Section */}
        <div className="mt-32 text-center">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-16">
            <Globe className="w-20 h-20 text-blue-400 mx-auto mb-8" />
            <h3 className="text-4xl font-medium text-white mb-6 tracking-tight">Global Reach</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              From Africa to the Americas, Europe to Asia - we understand diverse markets and deliver solutions that work everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;