import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { NeonCard } from '@/components/ui/neon-card';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "HealthTech Platform — Patient Engagement & Analytics",
      summary: "We built a HIPAA-compliant platform that increased patient portal engagement and enabled data-driven care decisions.",
      client: "MediCore Health",
      date: "2024-11-01",
      impact: "+42% portal engagement · 30% faster triage",
      category: "Healthcare",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "FinanceFlow Mobile — Secure Personal Finance",
      summary: "A cross-platform mobile app delivering secure finance tools and real-time insights to end users, improving retention.",
      client: "FinanceFlow Inc.",
      date: "2024-08-13",
      impact: "+28% monthly retention · 15% conversion to premium",
      category: "Fintech",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Enterprise Dashboard — Real-time Operations",
      summary: "A scalable analytics dashboard aggregated multi-source telemetry to reduce operational MTTR for enterprise organizations.",
      client: "Atlas Logistics",
      date: "2024-05-21",
      impact: "-35% incident resolution time · +12% throughput",
      category: "Enterprise",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
  <section id="projects" className="py-40 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-10">
            Project <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Real project stories showing how we delivered measurable outcomes using design and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {caseStudies.map((post, index) => (
            <NeonCard
              key={index}
              className="rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-300 p-0"
            >
              {/* Featured Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <NeonCard className="inline-block p-0 rounded-full">
                    <span className="px-5 py-2 block text-sm font-medium tracking-wide text-white">{post.category}</span>
                  </NeonCard>
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light flex-1">
                  {post.summary}
                </p>

                <div className="text-base text-gray-400 space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span className="font-light">{post.client}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-light">{new Date(post.date).toLocaleDateString('en-US')}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-light">{post.impact}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="group flex items-center gap-3 text-blue-400 hover:text-blue-300 font-medium tracking-wide transition-colors duration-300">
                    Read Project Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-full text-xl font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;