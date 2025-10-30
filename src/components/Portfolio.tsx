import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalImage from '@/components/ui/professional-image';
import { projects } from '@/data/projects';
import demoImage from './demo.png';
import farmImage from './farm.png';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'Orivon Ventures', 'Client Solutions', 'AI/ML', 'SaaS', 'Civic Tech'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : filter === 'Orivon Ventures'
    ? projects.filter(p => p.category === 'orivon-venture')
    : filter === 'Client Solutions'
    ? projects.filter(p => p.category === 'client-solution')
    : projects.filter(p => p.subcategory === filter);

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
              key={project.id}
              variant="glass"
              className="group overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Professional project image */}
              <Link to={`/project/${project.slug}`} className="block relative">
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
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-white text-lg font-semibold">View Details</div>
                      <ArrowRight size={24} className="text-white" />
                    </div>
                  </div>
                </ProfessionalImage>

                {/* Category badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${
                    project.category === 'orivon-venture' ? 'from-purple-600 to-purple-700' : 'from-blue-600 to-blue-700'
                  } text-white`}>
                    {project.category === 'orivon-venture' ? '🚀 Orivon Venture' : '💼 Client Project'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white">
                    {project.subcategory}
                  </span>
                </div>
              </Link>

              {/* Project content */}
              <div className="p-8">
                <Link to={`/project/${project.slug}`}>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 mb-4">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-gray-300 leading-relaxed mb-6 text-balance line-clamp-3">
                  {project.tagline}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 glass-effect text-xs font-medium text-gray-300 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 glass-effect text-xs font-medium text-gray-400 rounded-full border border-white/10">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <Link
                  to={`/project/${project.slug}`}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    project.category === 'orivon-venture' ? 'text-purple-400 hover:text-purple-300' : 'text-blue-400 hover:text-blue-300'
                  } transition-colors`}
                >
                  {project.category === 'orivon-venture' ? 'View Venture Details' : 'Read Case Study'}
                  <ArrowRight size={16} />
                </Link>
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