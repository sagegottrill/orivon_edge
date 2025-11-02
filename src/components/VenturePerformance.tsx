import React from 'react';
import { TrendingUp, Users, Rocket, Target, Code, Globe } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const VenturePerformance: React.FC = () => {
  return (
    <>
      {/* Why Venture Studio Model */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 text-balance leading-[0.9]">
                Why a Venture <span className="gradient-text">Studio Model?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
                Unlike accelerators or agencies, we build, own, and scale ventures from scratch.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ProfessionalCard variant="glass" className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We Build In-House
                </h3>
                <p className="text-gray-300 leading-relaxed text-balance">
                  Not just advisors—we're co-founders who write code, design products, and execute GTM strategies.
                </p>
              </ProfessionalCard>
              
              <ProfessionalCard variant="glass" className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Skin in the Game
                </h3>
                <p className="text-gray-300 leading-relaxed text-balance">
                  We own equity, share risks, and align success metrics with long-term venture growth.
                </p>
              </ProfessionalCard>
              
              <ProfessionalCard variant="glass" className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Portfolio Approach
                </h3>
                <p className="text-gray-300 leading-relaxed text-balance">
                  Diversified bets across civic tech, agritech, fintech—mitigating risk through proven frameworks.
                </p>
              </ProfessionalCard>
            </div>
          </div>
        </div>

        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>
    </>
  );
};

export default VenturePerformance;
