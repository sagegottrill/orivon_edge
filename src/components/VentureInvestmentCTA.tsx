import React from 'react';
import { ArrowRight } from 'lucide-react';

const VentureInvestmentCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Invest in Africa's Next Tech Giants
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          We're seeking strategic partners and investors to scale our ventures 
          and launch new solutions aligned with Nigeria's digital transformation goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Request Investment Deck</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/join-hub" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <span>Partnership Opportunities</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VentureInvestmentCTA;
