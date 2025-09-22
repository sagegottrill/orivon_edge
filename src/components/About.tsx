import React from 'react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalImage from '@/components/ui/professional-image';
import TiltCard from '@/components/ui/tilt-card';

const About: React.FC = () => {
  const values = [
    {
      title: "Precision Engineering",
      description: "Tailored, context-driven builds that solve your specific challenges."
    },
    {
      title: "Scalable Architecture",
      description: "From MVP to enterprise scale - solutions that grow with you."
    },
    {
      title: "Global Perspective",
      description: "African-born, globally-focused expertise across diverse markets."
    },
    {
      title: "Human-Centered Design",
      description: "Technology that works for people, not the other way around."
    }
  ];



  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        {/* Professional header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 text-balance leading-[0.9]">
            Why <span className="gradient-text">Orivon Edge?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Four key differentiators that make us the right choice for your digital transformation.
          </p>
        </div>



        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <ProfessionalCard variant="gradient" className="p-10 group">
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-balance">
              Building the future of digital innovation through technology that creates real impact. 
              We envision a world where every business can harness the power of cutting-edge solutions 
              to transform their operations and drive meaningful growth.
            </p>
          </ProfessionalCard>

          <ProfessionalCard variant="gradient" className="p-10 group">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-balance">
              Delivering scalable, innovative technology solutions that solve real business challenges. 
              We partner with organizations to build adaptive systems that grow with their needs and 
              drive sustainable success in today's digital landscape.
            </p>
          </ProfessionalCard>
        </div>

        {/* Professional values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              The principles that guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <TiltCard key={index} tiltMaxAngle={8} scale={1.03}>
                <ProfessionalCard variant="glass" className="p-8 text-center group h-full">
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-balance">
                    {value.description}
                  </p>
                </ProfessionalCard>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Professional team section */}
        <div className="text-center">
          <ProfessionalCard variant="gradient" className="p-12 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-xl text-gray-300 mb-6 text-balance">
                  Let's discuss how our expertise and values can help transform your business 
                  through innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-effect">
                    Start Conversation
                  </button>

                </div>
              </div>
              
              <div className="relative">
                <ProfessionalImage
                  alt="Our team collaboration"
                  aspectRatio="square"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </ProfessionalCard>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;