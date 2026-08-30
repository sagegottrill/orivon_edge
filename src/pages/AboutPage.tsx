import React from 'react';
import { Code, Rocket, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation - Matching Homepage */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              ORIVON <span className="text-blue-600">EDGE</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-900 font-semibold">About</Link>
              <a href="/#ai-pathfinding" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">AI Pathfinding</a>
              <a href="/#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Services</a>
              <a href="/#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nigeria's Strategic <span className="text-blue-600">Implementation Partner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              A policy-aligned venture studio delivering AI-driven solutions for government, institutions, and high-growth startups.
            </p>
            
            {/* Policy Badges */}
            <div className="flex justify-center flex-wrap gap-3 mt-8">
              <div className="px-5 py-2.5 bg-green-50 border border-green-200 rounded-full">
                <span className="text-sm text-green-700 font-medium">✓ NAIS Aligned</span>
              </div>
              <div className="px-5 py-2.5 bg-blue-50 border border-blue-200 rounded-full">
                <span className="text-sm text-blue-700 font-medium">✓ SRAP 2.0 Contributor</span>
              </div>
              <div className="px-5 py-2.5 bg-purple-50 border border-purple-200 rounded-full">
                <span className="text-sm text-purple-700 font-medium">✓ NSA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">Who We Are</h2>
          
          <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-sm">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Orivon Edge is a member of Nigeria's growing tech innovation ecosystem, serving as a <strong className="text-gray-900">strategic implementation partner</strong> for federal and state government digital policies. We are a youth-led venture studio that systematically builds, de-risks, and scales AI-driven startups while delivering high-fidelity GovTech and enterprise solutions for governments, NGOs, and private sector clients.
              </p>
              
              <p>
                Our mandate is intrinsically linked to national strategic blueprints. We actively fulfill the policy congruence requirement by mapping our venture studio model to the pillars of <strong className="text-blue-600">NITDA's Strategic Roadmap and Action Plan 2.0 (SRAP 2.0)</strong>, specifically supporting Digital Innovation and Entrepreneurship.
              </p>
              
              <p className="text-lg text-gray-900 font-medium bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                Unlike traditional incubators, we function as a vital implementation partner ensuring Nigerian Startup Act (NSA) compliance, delivering measurable policy outcomes, and bridging the gap between innovation and institutional deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Thesis - Foundational Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Strategic Thesis: <span className="text-blue-600">Foundational Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global digital power isn't defined by AI software—it's constrained by the physical limits of <strong className="text-gray-900">Compute, Power, and Storage</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Compute */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">COMPUTE</h3>
              <p className="text-base text-gray-700 mb-4 font-medium text-center">The Brain: High-Performance Computing & Specialized Talent</p>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Building HPC talent (3MTT, NAIS aligned)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Creating AI solutions, not just consuming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>National digital sovereignty</span>
                </li>
              </ul>
            </div>

            {/* Power */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">POWER</h3>
              <p className="text-base text-gray-700 mb-4 font-medium text-center">The Heartbeat: Energy & Infrastructure</p>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Climate-smart AgriTech (BOSCAP aligned)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Solar-powered solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Reducing $9B economic drain</span>
                </li>
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">STORAGE</h3>
              <p className="text-base text-gray-700 mb-4 font-medium text-center">The Memory: Data Security & Sovereignty</p>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Localized Digital Public Infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>NDPR compliant solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>10K+ learners via Borno LMS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Revenue Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Hybrid Revenue Model
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-400 mb-3">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talent Training</h3>
              <p className="text-gray-600 leading-relaxed">Manufacturing Africa's digital workforce at scale (3MTT, NAIS aligned)</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-400 mb-3">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Services</h3>
              <p className="text-gray-600 leading-relaxed">Stable GovTech & enterprise solutions providing operational revenue</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-400 mb-3">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Venture Equity</h3>
              <p className="text-gray-600 leading-relaxed">NSA-compliant startups ready for government procurement</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-900 font-bold text-lg mb-6 text-center">Our Target:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-900">•</span>
                <span className="text-gray-700 font-medium">179+ jobs created</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900">•</span>
                <span className="text-gray-700 font-medium">50% YoY capital increase</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900">•</span>
                <span className="text-gray-700 font-medium">40% women participation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join Nigeria's premier implementation partner in building the future of digital infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <Link
              to="/"
              className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;