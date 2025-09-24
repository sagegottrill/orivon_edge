import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalImage from '@/components/ui/professional-image';
import demoImage from './demo.png';
import farmImage from './farm.png';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'AI/ML', 'SaaS'];

  const projects = [
    {
      title: "Democra-See Platform",
      category: "AI/ML",
      description: "Democra-See is an AI-enabled humanitarian crisis reporting platform that enables individuals and field teams to safely report incidents via web, WhatsApp, SMS/USSD, and an installable Progressive Web App. It supports offline operation, five languages, anonymous submissions, geolocation tracking, and delivers real‑time analytics with prioritized alerts so responders can act quickly and transparently to help save lives.",
      tech: ["React", "TypeScript", "Node.js", "AI/ML"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      image: demoImage
    },
    {
      title: "FarmAfricaa — Smart Farm Intelligence",
      category: "AI/ML",
      description: "FarmAfricaa is an AI-enabled agritech platform that lets smallholder farmers and extension teams report field observations and receive actionable alerts via web, PWA, WhatsApp, SMS/USSD, and an installable Progressive Web App. It supports offline capture, multi-language UX, image uploads, geolocation, on-device disease detection with server fallback, and delivers near‑real‑time analytics and prioritized advisories for timely interventions.",
      tech: ["React", "TypeScript", "Node.js", "AI/ML"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      image: farmImage
    },
    {
      title: "BICTDA Academy",
      category: "SaaS",
      description: "BICTDA Academy is a digital education platform for Borno State schools and communities. It enables teachers and students to access curriculum resources, assignments, and assessments through web, mobile, and offline-first experiences. The system supports multi-language content, secure user management, interactive multimedia lessons with offline access for remote areas, automated grading, real-time analytics, and seamless teacher-student communication.",
      tech: ["React", "TypeScript", "Node.js", "Firebase"],
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-400/10",
      image: "/lms.png"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        {/* Professional header */}
        <div className="text-center mb-20">

          
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance">
            <span className="block gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Explore the innovative solutions we've built for our clients across different 
            industries and technologies.
          </p>
        </div>

        {/* Professional filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white glow-effect'
                  : 'glass-effect text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Professional projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProfessionalCard
              key={index}
              variant="glass"
              className="group overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Professional project image */}
              <div className="relative">
                <ProfessionalImage
                  src={project.image}
                  alt={project.title}
                  aspectRatio="video"
                  overlay
                  className="transition-all duration-500 group-hover:scale-105"
                >
                  {/* Hover overlay with actions */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button 
                      className="p-3 glass-effect text-white rounded-full hover:scale-110 transition-all duration-300 border border-white/20" 
                      title="Live Demo"
                      onClick={() => {
                        if (index === 0) { // Democra-See Platform
                          window.open('https://democrasee.vercel.app/', '_blank');
                        } else if (index === 1) { // FarmAfricaa Platform
                          window.open('https://farm-africaa.vercel.app/', '_blank');
                        } else if (index === 2) { // BORNO LMS
                          window.open('https://dlvakids.com.ng/', '_blank');
                        }
                      }}
                    >
                      <ExternalLink size={20} />
                    </button>
                    <button 
                      className="p-3 glass-effect text-white rounded-full hover:scale-110 transition-all duration-300 border border-white/20" 
                      title="View on GitHub"
                      onClick={() => {
                        if (index === 0) { // Democra-See Platform
                          window.open('https://github.com/sagegottrill/Democrasee', '_blank');
                        } else if (index === 1) { // FarmAfricaa Platform
                          window.open('https://github.com/sagegottrill/farm_africaa', '_blank');
                        } else if (index === 2) { // BORNO LMS
                          window.open('https://github.com/sagegottrill/bicdta_academy', '_blank');
                        }
                      }}
                    >
                      <Github size={20} />
                    </button>
                  </div>
                </ProfessionalImage>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-balance">
                  {project.description}
                </p>



                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 glass-effect text-xs font-medium text-gray-300 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </div>

        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default Portfolio;