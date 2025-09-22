import React from 'react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalCarousel from '@/components/ui/professional-carousel';

const Industries: React.FC = () => {

  const industries = [
    {
      title: "Government & Public Sector",
      description: "Digital transformation for public sector efficiency, citizen services, and transparent governance solutions."
    },
    {
      title: "NGOs & Non-Profits",
      description: "Technology solutions that amplify social impact, streamline operations, and expand community reach."
    },
    {
      title: "SMEs & Startups",
      description: "Scalable solutions that grow with small and medium enterprises, from MVP to enterprise scale."
    },
    {
      title: "Education & EdTech",
      description: "Learning management systems, educational platforms, and technology that transforms learning experiences."
    },
    {
      title: "Fintech & Banking",
      description: "Secure financial technology solutions, payment platforms, and digital banking innovations."
    },
    {
      title: "Healthcare & MedTech",
      description: "Healthcare management systems, telemedicine platforms, and medical technology solutions."
    }
  ];



  return (
    <section id="industries" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        {/* Mild dim overlay for readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true"></div>
        {/* Soft vignette to slightly darken edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.0) 70%)'
          }}
          aria-hidden="true"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        {/* Professional header */}
        <div className="text-center mb-20">

          
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Our adaptive approach and cutting-edge technology deliver exceptional results 
            across diverse industries and markets worldwide.
          </p>
        </div>

        {/* Professional industries carousel */}
        <ProfessionalCarousel 
          itemsPerView={3}
          autoPlay={true}
          autoPlayInterval={7000}
          showDots={true}
          showArrows={true}
        >
          {industries.map((industry, index) => (
            <ProfessionalCard
              key={index}
              variant="glass"
              className="group p-8 h-full"
            >
              <div className="flex flex-col h-full">
                {/* Industry content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-balance">
                    {industry.description}
                  </p>
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </ProfessionalCarousel>

        </div>
      </div>

      {/* Seamless transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" aria-hidden="true"></div>

    </section>
  );
};

export default Industries;