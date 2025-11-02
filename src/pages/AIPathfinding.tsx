import React, { useState } from 'react';
import { Brain, Target, TrendingUp, Clock, Award, Users, CheckCircle, ArrowRight, Zap, BarChart3, GraduationCap } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const AIPathfinding: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState('jrs');

  const metrics = {
    jrs: {
      title: 'Job Readiness Score',
      value: '87%',
      description: 'Real-time assessment of deployment readiness',
      icon: Target,
      color: 'blue'
    },
    sav: {
      title: 'Skill Acquisition Velocity',
      value: '3.2x',
      description: 'Average learning speed vs traditional methods',
      icon: TrendingUp,
      color: 'green'
    },
    pcr: {
      title: 'Path Completion Rate',
      value: '78%',
      description: 'Students completing personalized learning paths',
      icon: CheckCircle,
      color: 'purple'
    }
  };

  const pathExample = [
    { stage: 'Assessment', status: 'completed', duration: '2 days' },
    { stage: 'Foundation Skills', status: 'completed', duration: '3 weeks' },
    { stage: 'Specialized Track', status: 'in-progress', duration: '6 weeks' },
    { stage: 'Portfolio Projects', status: 'locked', duration: '4 weeks' },
    { stage: 'Job Placement', status: 'locked', duration: '2 weeks' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Intrinsic Data Collection',
      description: 'Tracks behavioral data: content consumption duration, engagement patterns, and preference weighting ("what you like, what you love") to assess intrinsic motivation.',
      badge: 'Proprietary IP'
    },
    {
      icon: Zap,
      title: 'Real-Time Synthesis Engine',
      description: 'Constantly ingests industry data, job descriptions, and framework updates. Automatically deprecates obsolete content and elevates high-velocity skills.',
      badge: 'Dynamic Adaptation'
    },
    {
      icon: Target,
      title: 'Systematic Curation',
      description: 'Transforms chaotic online learning into institutional-quality curriculum with structured modules and systematic testing.',
      badge: 'Quality Control'
    },
    {
      icon: BarChart3,
      title: 'Governance Dashboard',
      description: 'Provides policy-ready metrics for DFIs and government stakeholders: SAV, PCR, Gender Parity, Digital Inclusion Scorecard.',
      badge: 'Accountability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 font-semibold">Proprietary Technology Moat</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              AI Pathfinding System
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-balance mb-6">
              The proprietary engine that <span className="text-white font-semibold">"manufactures Africa's digital workforce at scale"</span>
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-balance">
              Our AI-integrated learning ecosystem delivers personalized, real-time learning roadmaps that transition participants from learner to innovator to income earner—aligned with NAIS and 3MTT program objectives.
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <ProfessionalCard variant="glass" className="p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Live Performance Metrics</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {Object.entries(metrics).map(([key, metric]) => {
                const Icon = metric.icon;
                const isActive = activeMetric === key;
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveMetric(key)}
                    className={`p-6 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50' 
                        : 'bg-white/5 border-2 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-8 h-8 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                      <span className={`text-4xl font-bold ${
                        isActive ? 'gradient-text' : 'text-white'
                      }`}>{metric.value}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2 text-left">{metric.title}</h4>
                    <p className="text-gray-400 text-sm text-left">{metric.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
              <p className="text-center text-gray-300">
                <strong className="text-white">3MTT Alignment:</strong> These metrics directly quantify the efficiency of the talent pipeline and guarantee progress against the 3 Million Technical Talent program goals.
              </p>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How the <span className="gradient-text">Technology Moat</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              Four proprietary components that transform generic education into a systematic, defensible talent manufacturing pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <ProfessionalCard key={index} variant="glass" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 font-semibold">
                          {feature.badge}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ProfessionalCard>
              );
            })}
          </div>

          {/* Personalized Path Example */}
          <ProfessionalCard variant="gradient" className="p-10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Example: Personalized Learning Path
            </h3>
            
            <div className="max-w-3xl mx-auto">
              {pathExample.map((stage, index) => {
                const isCompleted = stage.status === 'completed';
                const isInProgress = stage.status === 'in-progress';
                const isLocked = stage.status === 'locked';

                return (
                  <div key={index} className="relative">
                    <div className={`flex items-start gap-4 p-6 rounded-xl mb-4 ${
                      isCompleted ? 'bg-green-500/10 border border-green-500/30' :
                      isInProgress ? 'bg-blue-500/10 border border-blue-500/30' :
                      'bg-white/5 border border-white/10'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isCompleted ? 'bg-green-500/20' :
                        isInProgress ? 'bg-blue-500/20' :
                        'bg-white/10'
                      }`}>
                        {isCompleted && <CheckCircle className="w-6 h-6 text-green-400" />}
                        {isInProgress && <Clock className="w-6 h-6 text-blue-400" />}
                        {isLocked && <span className="text-gray-500 text-sm">🔒</span>}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-bold ${
                            isCompleted ? 'text-green-400' :
                            isInProgress ? 'text-blue-400' :
                            'text-gray-500'
                          }`}>{stage.stage}</h4>
                          <span className="text-gray-400 text-sm">{stage.duration}</span>
                        </div>
                        
                        {isInProgress && (
                          <div className="mt-3">
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-2/3"></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">67% Complete - Est. 2 weeks remaining</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {index < pathExample.length - 1 && (
                      <div className="w-0.5 h-4 bg-white/20 ml-6 mb-4"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">Job Readiness Score:</strong> Updated in real-time based on module completion, project quality, and skill assessments
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">Current JRS: 87% - Ready for Junior Developer Roles</span>
              </div>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Defensibility & Investment Case */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProfessionalCard variant="glass" className="p-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Why This Is <span className="gradient-text">Defensible IP</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Technology Moat</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">Proprietary Data:</strong> Intrinsic motivation tracking and localized assessment data differentiates from global EdTech platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">Real-Time Engine:</strong> Dynamic curriculum adaptation ensures permanent relevance—no obsolete skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">Systematic Quality:</strong> Transforms unstructured content into institutional-quality curriculum with verifiable testing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Investor Value</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">Talent Retention:</strong> Personalized, efficient experience increases student stickiness—mitigates "brain drain" risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">FX Generation:</strong> World-class talent capable of securing international contracts—guaranteed foreign exchange revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong className="text-white">KPI Guarantee:</strong> Core mechanism for achieving 179+ job creation and 50% YoY capital increase benchmarks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-white/10">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-4">
                  NAIS Compliance: Indigenous Intelligence
                </h4>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto text-balance">
                  By utilizing localized assessment data and training on indigenous problem sets, we fulfill NAIS goals of building solutions based on national sovereignty and local context—not just importing foreign frameworks.
                </p>
              </div>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ProfessionalCard variant="gradient" className="p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              See the AI Pathfinding System in Action
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-balance">
              Schedule a demo to see how our proprietary technology systematically manufactures deployment-ready digital talent at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-effect flex items-center justify-center gap-2">
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                Download Technical Brief
              </button>
            </div>
          </ProfessionalCard>
        </div>
      </section>
    </div>
  );
};

export default AIPathfinding;
