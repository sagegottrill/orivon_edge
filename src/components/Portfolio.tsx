import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'SaaS', 'Mobile', 'AI/ML', 'Enterprise', 'Fintech'];

  const projects = [
    {
      title: "HealthTech Platform",
      category: "SaaS",
      description: "Comprehensive healthcare management system with patient portals and analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "FinanceFlow Mobile",
      category: "Mobile",
      description: "Cross-platform mobile app for personal finance management and budgeting.",
      tech: ["React Native", "Firebase", "Stripe", "Chart.js"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI Content Generator",
      category: "AI/ML",
      description: "Machine learning platform for automated content creation and optimization.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Enterprise Dashboard",
      category: "Enterprise",
      description: "Real-time analytics dashboard for large-scale business operations.",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Payment Gateway",
      category: "Fintech",
      description: "Secure payment processing system with multi-currency support.",
      tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "EduPlatform SaaS",
      category: "SaaS",
      description: "Learning management system with video streaming and progress tracking.",
      tech: ["Next.js", "Prisma", "WebRTC", "Tailwind"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_right,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-[100px] font-medium tracking-tighter">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center gap-6 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white/10 backdrop-blur-xl text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300">
                    <Eye className="w-6 h-6" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-xl text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-xl text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium tracking-wide bg-gradient-to-r ${project.color} text-white shadow-lg shadow-blue-500/25`}>
                    {project.category}
                  </span>
                </div>

                <p className="text-base text-gray-300 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium tracking-wide rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${project.color} text-white text-base font-medium tracking-wide hover:shadow-lg shadow-blue-500/25 transition-all duration-300`}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-16">
            <h3 className="text-4xl font-medium text-white mb-6 tracking-tight">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Let's discuss how we can bring your vision to life with cutting-edge technology solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-full text-xl font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;