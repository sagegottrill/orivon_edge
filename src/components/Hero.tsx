import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/1.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto flex flex-col justify-center min-h-screen">
        <div className="animate-fade-in mt-16 sm:mt-20">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-none">
              <span className="block mb-3 sm:mb-4">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent font-medium pb-2">
                Digital Vision
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              We create powerful digital experiences that drive innovation and growth. 
              Building the future of technology, one solution at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-10 w-full px-4 sm:px-0">
            <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg tracking-wide transition-all duration-300 flex items-center gap-3 w-full sm:w-auto sm:min-w-[200px] justify-center shadow-lg shadow-blue-500/25">
              Get Started
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            
            <button className="text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg tracking-wide transition-all duration-300 hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px] backdrop-blur-xl bg-white/5 border border-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-8 sm:h-12 w-0.5 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;