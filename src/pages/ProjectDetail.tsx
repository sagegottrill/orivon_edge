import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp, CheckCircle, Sparkles, Target, Lightbulb, Rocket } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalImage from '@/components/ui/professional-image';
import { getProjectBySlug, Project } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const isVenture = project.category === 'orivon-venture';
  const accentColor = isVenture ? 'purple' : 'blue';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-1/4 w-96 h-96 bg-${accentColor}-500/10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-0 left-1/4 w-96 h-96 bg-${accentColor}-500/5 rounded-full blur-3xl`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${
                  isVenture ? 'from-purple-600 to-purple-700' : 'from-blue-600 to-blue-700'
                } text-white`}>
                  {isVenture ? '🚀 Orivon Venture' : '💼 Client Project'}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white">
                  {project.subcategory}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                {project.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 bg-gradient-to-r ${
                      isVenture ? 'from-purple-600 to-purple-700' : 'from-blue-600 to-blue-700'
                    } text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                  >
                    <ExternalLink size={20} />
                    {isVenture ? 'Try Live Demo' : 'View Live Site'}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 glass-effect text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/20"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div>
              <ProfessionalImage
                src={project.image}
                alt={project.title}
                aspectRatio="video"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {project.metrics.map((metric, index) => (
              <ProfessionalCard key={index} variant="glass" className="p-6 text-center">
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${
                  isVenture ? 'from-purple-400 to-purple-600' : 'from-blue-400 to-blue-600'
                } bg-clip-text mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </ProfessionalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client Info (for case studies) */}
      {project.client && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ProfessionalCard variant="gradient" className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">The Client</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Organization</div>
                  <div className="text-white font-semibold">{project.client.name}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Industry</div>
                  <div className="text-white font-semibold">{project.client.industry}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Size</div>
                  <div className="text-white font-semibold">{project.client.size}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white font-semibold">{project.client.location}</div>
                </div>
              </div>
            </ProfessionalCard>
          </div>
        </section>
      )}

      {/* The Problem */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Target className={`w-8 h-8 ${isVenture ? 'text-purple-400' : 'text-blue-400'}`} />
            <h2 className="text-4xl font-bold text-white">
              {isVenture ? 'The Problem' : 'The Challenge'}
            </h2>
          </div>
          <div className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
            {project.problem}
          </div>
        </div>
      </section>

      {/* Our Approach (for case studies) */}
      {project.approach && (
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Our Approach</h2>
            </div>
            <div className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
              {project.approach}
            </div>
          </div>
        </section>
      )}

      {/* The Solution */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className={`w-8 h-8 ${isVenture ? 'text-purple-400' : 'text-blue-400'}`} />
            <h2 className="text-4xl font-bold text-white">
              {isVenture ? 'Our Solution' : 'The Solution'}
            </h2>
          </div>
          <div className="text-xl text-gray-300 leading-relaxed whitespace-pre-line mb-12">
            {project.solution}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <ProfessionalCard key={index} variant="glass" className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className={`w-6 h-6 ${isVenture ? 'text-purple-400' : 'text-blue-400'} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </ProfessionalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Impact */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className={`w-8 h-8 ${isVenture ? 'text-purple-400' : 'text-blue-400'}`} />
            <h2 className="text-4xl font-bold text-white">
              {isVenture ? 'Impact & Traction' : 'Results & ROI'}
            </h2>
          </div>
          <ProfessionalCard variant="gradient" className="p-8">
            <div className="grid gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">{result}</p>
                </div>
              ))}
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Timeline (for ventures) */}
      {project.timeline && (
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold text-white">The Journey</h2>
            </div>
            <div className="space-y-6">
              {project.timeline.map((item, index) => (
                <ProfessionalCard key={index} variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <div className="text-purple-400 font-semibold">{item.date}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </ProfessionalCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial (for case studies) */}
      {project.testimonial && (
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ProfessionalCard variant="gradient" className="p-12 text-center">
              <div className="text-6xl mb-6">💬</div>
              <p className="text-2xl text-white italic mb-8 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-blue-400">{project.testimonial.role}</div>
                  <div className="text-gray-400">{project.testimonial.company}</div>
                </div>
              </div>
            </ProfessionalCard>
          </div>
        </section>
      )}

      {/* Future Roadmap (for ventures) */}
      {project.futureRoadmap && (
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold text-white">What's Next</h2>
            </div>
            <ProfessionalCard variant="glass" className="p-8">
              {project.fundingStage && (
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-purple-400 font-semibold mb-2">Funding Stage</div>
                  <div className="text-2xl font-bold text-white">{project.fundingStage}</div>
                </div>
              )}
              <div className="space-y-4">
                {project.futureRoadmap.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </ProfessionalCard>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 glass-effect text-white rounded-full border border-white/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ProfessionalCard variant="gradient" className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {isVenture ? 'Interested in This Venture?' : 'Want Similar Results?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {isVenture 
                ? 'Let\'s discuss partnership, investment, or collaboration opportunities.'
                : 'Let\'s build something amazing for your business too.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className={`px-8 py-4 bg-gradient-to-r ${
                  isVenture ? 'from-purple-600 to-purple-700' : 'from-blue-600 to-blue-700'
                } text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300`}
              >
                {isVenture ? 'Get in Touch' : 'Start Your Project'}
              </Link>
              <Link
                to="/#portfolio"
                className="px-8 py-4 glass-effect text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 border border-white/20"
              >
                View More Projects
              </Link>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
