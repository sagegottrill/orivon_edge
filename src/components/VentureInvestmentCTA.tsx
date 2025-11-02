import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const VentureInvestmentCTA: React.FC = () => {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
          <div className="text-center mb-16">
            <ProfessionalCard variant="gradient" className="p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Invest in Africa's Next Tech Giants
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed text-balance">
                We're seeking strategic partners and investors to scale our ventures 
                and launch new solutions aligned with Nigeria's digital transformation goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 glow-effect"
                >
                  <span>Request Investment Deck</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/join-hub" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <span>Partnership Opportunities</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </ProfessionalCard>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default VentureInvestmentCTA;
