import React from 'react';
import { CheckCircle } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalCarousel from '@/components/ui/professional-carousel';

const ServicesIndustries: React.FC = () => {

  const services = [
    {
      title: "SaaS Platforms",
  description: "Custom software-as-a-service solutions built for scale and performance.",
      features: ["Multi-tenant architecture", "API-first design", "Real-time analytics", "Enterprise security"]
    },
    {
      title: "Enterprise Dashboards",
      description: "Data-driven dashboards that transform complex information into actionable business insights.",
      features: ["Real-time visualization", "Custom reporting", "Role-based access", "Mobile responsive"]
    },
    {
      title: "Mobile & Web Apps",
      description: "Cross-platform applications that deliver exceptional user experiences across all devices.",
      features: ["React Native & Flutter", "Progressive Web Apps", "Offline functionality", "Push notifications"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and machine learning solutions that drive business transformation.",
      features: ["Natural language processing", "Predictive analytics", "Computer vision", "Automated workflows"]
    },
    {
      title: "Data Engineering",
      description: "Comprehensive data management and analytics platforms for enterprise-scale operations.",
      features: ["Data warehousing", "ETL pipelines", "Business intelligence", "Data governance"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation for modern enterprises.",
      features: ["Process automation", "Legacy modernization", "Cloud migration", "Change management"]
    }
  ];

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
    <section id="services-industries" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/1.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Mild dim overlay for readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden="true"></div>
        {/* Soft vignette to slightly darken edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.0) 70%)'
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
          {/* Services Section */}
          <div id="services" className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
                Enterprise-Grade <span className="gradient-text">Solutions</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
                Six core services that power digital transformation for businesses of all sizes.
              </p>
            </div>

            <ProfessionalCarousel
              itemsPerView={3}
              autoPlay={true}
              autoPlayInterval={6000}
              showDots={true}
              showArrows={true}
            >
              {services.map((service, index) => (
                <ProfessionalCard
                  key={index}
                  variant="glass"
                  className="group p-8 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6 text-balance">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ProfessionalCard>
              ))}
            </ProfessionalCarousel>

            <div className="mt-20 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-effect">
                Let's discuss the right solution for you
              </button>
            </div>
          </div>

          {/* Industries Section */}
          <div id="industries">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
                Industries We <span className="gradient-text">Transform</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
                Our adaptive approach and cutting-edge technology deliver exceptional results
                across diverse industries and markets worldwide.
              </p>
            </div>

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
      </div>

      {/* Seamless transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" aria-hidden="true"></div>

    </section>
  );
};

export default ServicesIndustries;