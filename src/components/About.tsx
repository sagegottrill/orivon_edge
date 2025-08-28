import React from 'react';
import { Target, Eye, Heart, Globe, Lightning, Users } from '@phosphor-icons/react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} weight="duotone" />,
      title: "Adaptive Solutions",
      description: "We build technology that adapts to your unique context and challenges."
    },
    {
      icon: <Lightning size={32} weight="duotone" />,
      title: "Scalable Architecture",
      description: "Our solutions grow with your business, from startup to enterprise."
    },
    {
      icon: <Globe size={32} weight="duotone" />,
      title: "Global Perspective",
      description: "African-born, globally focused. We understand diverse markets."
    },
    {
      icon: <Users size={32} weight="duotone" />,
      title: "Human-Centered",
      description: "Technology that serves people, not the other way around."
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10 py-16">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 sm:mb-8">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">ORIVON EDGE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We're a private tech solutions agency that believes in building technology 
            that matters. Our approach is simple: understand the problem, design the solution, 
            and deliver excellence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                <Eye size={32} weight="duotone" className="text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white tracking-tight">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              To be the leading force in contextual digital transformation, 
              creating technology solutions that bridge the gap between innovation 
              and real-world impact.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                <Heart size={32} weight="duotone" className="text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white tracking-tight">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              To deliver scalable, adaptive technology solutions that solve real problems 
              for businesses and organizations worldwide, with a deep understanding of 
              diverse markets and contexts.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-medium text-center text-white tracking-tight mb-8 sm:mb-12 px-4 sm:px-0">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 group-hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{value.title}</h4>
                  <p className="text-base text-gray-300 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;