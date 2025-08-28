import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Modern gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,243,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
      </div>

      {/* Grain effect */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBQYYzvyjAAAAPElEQVQ4y2NYtYoJAjZCwKxVq9YCwapVq1yhYKZSqHBVKVS4CgwDgVVQMKtUqXIVGKyCAliIjgFpEQQAGVgLYIB6zogAAAAASUVORK5CYII=)' }}></div>

      <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-[1600px] mx-auto flex flex-col justify-center min-h-screen">
        <div className="animate-fade-in mt-20">
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-none">
              <span className="block mb-4">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent font-medium pb-2">
                Digital Vision
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              We create powerful digital experiences that drive innovation and growth. 
              Building the future of technology, one solution at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg tracking-wide transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center shadow-lg shadow-blue-500/25">
              Get Started
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </button>
            
            <button className="text-white px-8 py-4 rounded-full font-medium text-lg tracking-wide transition-all duration-300 hover:bg-white/10 min-w-[200px] backdrop-blur-xl bg-white/5 border border-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-12 w-0.5 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;