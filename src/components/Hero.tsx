import React from 'react';
import { ArrowRight, Play, Sparkle } from '@phosphor-icons/react';
import { NeonCard } from '@/components/ui/neon-card';
import ProfessionalImage from '@/components/ui/professional-image';
import AnimatedTextReveal from '@/components/ui/animated-text-reveal';
import TypewriterEffect from '@/components/ui/typewriter-effect';
import MagneticButton from '@/components/ui/magnetic-button';
// Particle background removed per request

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* background video only - decorative overlays removed per request */}
      </div>
        {/* Professional background with hero video, particles and overlays */}
        <div className="absolute inset-0">
          {/* Background video from public folder */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/2.mp4"
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
          />
        </div>

      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto flex flex-col justify-center min-h-screen">
        <div className="animate-fade-in-up mt-16 sm:mt-20">


          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] text-balance">
              <AnimatedTextReveal 
                text="Transform Your Business with" 
                className="block mb-4"
                delay={0.2}
              />
              <span className="block gradient-text font-bold">
                <TypewriterEffect
                  words={[
                    'Reliable Digital Products',
                    'Scalable, Secure Platforms',
                    'Human-centered Experiences',
                    'AI-driven Business Insights',
                    'Cloud-native Architecture',
                    'End-to-end Product Design',
                    'Rapid Prototyping & Validation',
                    'Enterprise Integrations',
                    'Data-driven UX',
                    'ML-powered Automation',
                    'Custom SaaS Solutions',
                    'Infrastructure & DevOps',
                    'Product Strategy & Roadmapping',
                    'Security & Compliance',
                    'Real-time Analytics',
                    'Mobile-first Experiences',
                    'API-first Platforms',
                    'Performance at Scale',
                    'Accessibility-first Design',
                    'Continuous Delivery & Ops'
                  ]}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delayBetweenWords={1800}
                  loop={true}
                />
              </span>
            </h1>
            
            <AnimatedTextReveal 
              text="From startups to enterprises, we design scalable, human-centered technology solutions that deliver real business impact."
              className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-balance"
              delay={1.0}
              stagger={0.02}
            />

            {/* Trust line removed per request */}
          </div>

          {/* Enhanced CTA buttons with magnetic effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 sm:mt-20">
            <MagneticButton 
              strength={0.2}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-all duration-500 flex items-center gap-3 justify-center glow-effect hover:scale-105 min-w-[220px]"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
            
            <MagneticButton 
              strength={0.15}
              className="group glass-effect text-white px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-all duration-500 flex items-center gap-3 justify-center hover:scale-105 border border-white/20 min-w-[220px]"
            >
              <span>Book Free Consultation</span>
            </MagneticButton>
          </div>


        </div>
      </div>


    </section>
  );
};

export default Hero;