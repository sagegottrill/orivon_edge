import React from 'react';
import { Building, GraduationCap, DollarSign, Heart, Briefcase, TrendingUp } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalCarousel from '@/components/ui/professional-carousel';

const Industries: React.FC = () => {

  const industries = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government & Public Sector",
      description: "Digital transformation for public sector efficiency, citizen services, and transparent governance solutions.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "NGOs & Non-Profits",
      description: "Technology solutions that amplify social impact, streamline operations, and expand community reach.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "SMEs & Startups",
      description: "Scalable solutions that grow with small and medium enterprises, from MVP to enterprise scale.",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & EdTech",
      description: "Learning management systems, educational platforms, and technology that transforms learning experiences.",
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-700/10"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Fintech & Banking",
      description: "Secure financial technology solutions, payment platforms, and digital banking innovations.",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Healthcare & MedTech",
      description: "Healthcare management systems, telemedicine platforms, and medical technology solutions.",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-600/10"
    }
  ];



  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Professional header */}
        <div className="text-center mb-20">

          
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
            Industries We
            <span className="block gradient-text">Transform</span>
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
                {/* Industry header */}
                <div className="mb-6">
                  <div className={`p-4 rounded-2xl ${industry.bgColor} group-hover:scale-110 transition-all duration-300 inline-flex`}>
                    <div className={`text-transparent bg-gradient-to-r ${industry.color} bg-clip-text`}>
                      {industry.icon}
                    </div>
                  </div>
                </div>

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
    </section>
  );
};

export default Industries;