import React, { useState } from 'react';
import { Monitor, Smartphone, Brain, Database, Cloud, Cog } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SaaS Platforms",
      description: "Custom software-as-a-service solutions built for scale and performance.",
      features: ["Multi-tenant architecture", "API-first design", "Real-time analytics", "Enterprise security"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Enterprise Dashboards",
      description: "Data-driven dashboards that turn complex information into actionable insights.",
      features: ["Real-time data visualization", "Custom reporting", "Role-based access", "Mobile responsive"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile & Web Apps",
      description: "Cross-platform applications that deliver exceptional user experiences.",
      features: ["React Native & Flutter", "Progressive Web Apps", "Offline functionality", "Push notifications"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Tools",
      description: "Intelligent automation and machine learning solutions for modern businesses.",
      features: ["Natural language processing", "Predictive analytics", "Computer vision", "Automated workflows"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Solutions",
      description: "Comprehensive data management and analytics platforms.",
      features: ["Data warehousing", "ETL pipelines", "Business intelligence", "Data governance"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation.",
      features: ["Process automation", "Legacy system migration", "Cloud adoption", "Change management"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-40 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-10">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            We offer comprehensive technology solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >              
              <div className="relative">
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25`}>
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-14 h-14" })}
                </div>
                
                <h3 className="text-3xl font-medium text-white mb-5 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features list - shows on hover */}
                <div className={`space-y-3 transition-all duration-500 ${
                  hoveredCard === index ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <h4 className="text-xl font-medium text-white mb-4">Key Features</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-base text-gray-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className={`mt-8 transition-all duration-500 ${
                  hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className={`w-full py-4 px-8 rounded-2xl bg-gradient-to-r ${service.color} text-white text-lg font-medium tracking-wide hover:shadow-lg shadow-blue-500/25 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;