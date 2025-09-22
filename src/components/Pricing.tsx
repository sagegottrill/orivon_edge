import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const Pricing: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      price: "5,000",
      period: "project",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Custom website or web app",
        "Mobile responsive design", 
        "Basic SEO optimization",
        "3 months support",
        "Source code included"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "15,000",
      period: "project", 
      description: "Ideal for growing businesses that need advanced features and integrations.",
      features: [
        "Everything in Starter",
        "Advanced web application",
        "Database integration",
        "API development",
        "6 months support",
        "Performance optimization"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Comprehensive solutions for large organizations with complex requirements.",
      features: [
        "Everything in Professional",
        "Custom enterprise software",
        "AI/ML integration",
        "Scalable architecture",
        "12 months support",
        "Dedicated project manager"
      ],
      popular: false,
      cta: "Contact Us"
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
            Simple
            <span className="block gradient-text">Pricing</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Transparent pricing for every stage of your business. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <ProfessionalCard
              key={index}
              variant={pkg.popular ? "gradient" : "glass"}
              className={`p-8 relative ${pkg.popular ? 'scale-105 border-2 border-blue-500' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Zap size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${pkg.price}</span>
                  <span className="text-gray-400 ml-2">/{pkg.period}</span>
                </div>
                <p className="text-gray-300 text-balance">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                pkg.popular 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
              }`}>
                {pkg.cta}
                <ArrowRight size={20} />
              </button>
            </ProfessionalCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need something custom? Let's talk about your specific requirements.</p>
          <button className="px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 border border-white/20">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;