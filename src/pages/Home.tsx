import React, { useEffect } from 'react';
import { ArrowRight, Users, CheckCircle, Rocket, Target, Globe, Code, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    // Hero carousel functionality
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const interval = setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    return () => {
      clearInterval(interval);
      dots.forEach(dot => {
        dot.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-carousel {
            position: relative;
            width: 100%;
            height: 100%;
          }
          
          .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }
          
          .hero-slide.active {
            opacity: 1;
          }
          
          .carousel-dot.active {
            background-color: rgba(255, 255, 255, 0.9) !important;
            transform: scale(1.2);
          }
        `
      }} />

      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#home" className="text-3xl font-bold text-gray-900 hover:opacity-80 transition-opacity cursor-pointer">
                ORIVON <span className="text-blue-600">EDGE</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#ventures" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ventures</a>
              <Link to="/venture-studio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Venture Studio</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <Link to="/join-hub" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join Hub
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Hero Carousel */}
        <div className="absolute inset-0">
          <div className="hero-carousel">
            <div className="hero-slide active">
              <img 
                src="/imges/1.jpg" 
                alt="Innovation and technology in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="hero-slide">
              <img 
                src="/imges/2.jpg" 
                alt="Team collaboration and development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="hero-slide">
              <img 
                src="/imges/3.jpg" 
                alt="Tech innovation and progress"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            <button className="carousel-dot active w-4 h-4 rounded-full bg-white/60 hover:bg-white transition-all"></button>
            <button className="carousel-dot w-4 h-4 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
            <button className="carousel-dot w-4 h-4 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.15] mb-8 tracking-tight">
                Nurturing Creativity, Technology,<br className="hidden lg:block" />
                and Entrepreneurship<br className="hidden lg:block" />
                Across Africa
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
                A youth-led innovation hub building the future
              </p>

              <div className="flex justify-center flex-wrap gap-4 sm:gap-6 text-white/80 text-sm sm:text-base font-medium">
                <span>AI Development</span>
                <span className="text-white/40">•</span>
                <span>Startup Incubation</span>
                <span className="text-white/40">•</span>
                <span>Tech Training</span>
                <span className="text-white/40">•</span>
                <span>Digital Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                WHO WE ARE.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Orivon Edge is a member of Nigeria's growing tech innovation ecosystem. 
                Founded in 2019, we have trained and mentored over 200+ developers and 
                entrepreneurs in the technology and startup industry.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Through partnerships and collaborative initiatives with tech companies, 
                startups, and educational institutions, we create lasting impact across Nigeria.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/imges/4.jpg" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-4xl lg:text-5xl font-light text-gray-900 leading-relaxed italic mb-12">
              "Our work drives innovation only if it creates meaningful impact for African communities."
            </blockquote>
            <p className="text-xl text-gray-600">— Orivon Edge Team</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              WHAT WE DO.
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl">
              Four key workstreams that drive innovation and entrepreneurship across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">01 / Development</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  High-impact programs in youth empowerment, digital skills training, 
                  and tech entrepreneurship across Nigeria.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">02 / Innovation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Collaborative space for startups to develop AI, web development, 
                  and digital transformation solutions.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">03 / Creative Enterprise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Supporting the creative economy through digital media training 
                  and creative technology solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">04 / Consulting</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Strategic advisory in digital transformation, business development, 
                  and technology strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                TRAINING<br />
                PROGRAMS.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Industry-standard training that gives you the exact skills companies are looking for.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Skills Track</h3>
                <p className="text-gray-600 mb-6">
                  Hands-on training with real project experience in AI, Cloud Computing, 
                  Data Science, and Cybersecurity.
                </p>
                <Link to="/core-skills-track" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Track</h3>
                <p className="text-gray-600 mb-6">
                  Professional development for corporate roles and international 
                  remote work opportunities.
                </p>
                <Link to="/corporate-track" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Join Track
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* Venture Studio Overview & Link */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                WE DON'T JUST<br />
                BUILD APPS.<br />
                <span className="text-blue-600">WE BUILD COMPANIES.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Beyond client services, Orivon Edge operates as a venture studio—building, 
                launching, and scaling our own AI-driven startups that solve real-world problems 
                across Africa and globally.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Research-Backed Ventures</h3>
                    <p className="text-sm text-gray-600">Deep market research and validation before launch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">AI-First Products</h3>
                    <p className="text-sm text-gray-600">Leveraging cutting-edge AI and machine learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Global Scale, Local Impact</h3>
                    <p className="text-sm text-gray-600">Built in Africa, designed for the world</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/venture-studio"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Explore Our Venture Studio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/imges/5.jpg" 
                alt="Venture Studio Innovation"
                className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Showcase */}
      <section id="ventures" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              OUR VENTURES.
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Real solutions addressing critical challenges for Nigeria and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Democrasee */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-80 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center text-white">
                  <Target className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Democrasee</h3>
                  <p className="text-blue-100">Civic Tech</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Crisis Reporting</h4>
                <p className="text-gray-600">
                  Crisis reporting platform for transparent humanitarian response. 
                  Report incidents via web, WhatsApp, SMS, or PWA—works offline.
                </p>
              </div>
            </div>

            {/* FarmAfricaa */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 h-80 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center text-white">
                  <Code className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">FarmAfricaa</h3>
                  <p className="text-green-100">AgriTech</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Smart Farm Intelligence</h4>
                <p className="text-gray-600">
                  AI disease detection for smallholder farmers. Snap a photo, get instant diagnosis 
                  and treatment advice—works offline.
                </p>
              </div>
            </div>

            {/* ARIE */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-80 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center text-white">
                  <Rocket className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">ARIE</h3>
                  <p className="text-purple-100">FinTech</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Autonomous Banking Intelligence</h4>
                <p className="text-gray-600">
                  Agentic AI for instant KYC, real-time fraud detection, and fair credit scoring 
                  for the unbanked using alternative data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-12 leading-tight">
                WHAT THEY<br />
                SAY ABOUT US.
              </h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-900 font-light italic mb-6">
                    "Definitely worth the investment. I couldn't have asked for more than this."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Nasir Jaafar"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Nasir Jaafar</p>
                      <p className="text-gray-500">Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic mb-6">
                  "The STEM-Shuttle program delivers exceptional results with measurable improvements."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="/imges/10.jpg" 
                    alt="Abbas A Baba"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Abbas A Baba</p>
                    <p className="text-sm text-gray-500">Parent & CEO</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic mb-6">
                  "Comprehensive training and business development that exceeds expectations."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="/imges/11.jpg" 
                    alt="Shamsudeen Omacy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Shamsudeen Omacy</p>
                    <p className="text-sm text-gray-500">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training in Action */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              TRAINING IN ACTION.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="h-80 relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/imges/6.jpg" 
                  alt="Kids coding sessions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kids Coding Sessions</h3>
              <p className="text-gray-600">
                Young minds building their first mobile apps through hands-on coding.
              </p>
            </div>

            <div className="group">
              <div className="h-80 relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/imges/7.jpg" 
                  alt="Professional training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Training</h3>
              <p className="text-gray-600">
                Professionals mastering AI and machine learning for global opportunities.
              </p>
            </div>

            <div className="group">
              <div className="h-80 relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/imges/8.jpg" 
                  alt="Startup team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Startup Incubation</h3>
              <p className="text-gray-600">
                Entrepreneurs developing technology solutions for local and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                GET STARTED<br />
                TODAY.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready to join our innovation hub? Whether you're looking for training, 
                incubation, or partnership opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-xl">info@orivonedge.dev</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span className="text-xl">+234 8143084473</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-xl">Borno State, Nigeria</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Join Training</h3>
                <p className="text-gray-300 mb-6">Professional development programs</p>
                <Link to="/core-skills-track" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll Now
                </Link>
              </div>

              <div className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Startup Incubation</h3>
                <p className="text-gray-300 mb-6">Mentorship and incubation programs</p>
                <Link to="/join-hub" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6">ORIVON <span className="text-blue-600">EDGE</span></h3>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                A youth-led innovation hub dedicated to nurturing creativity, 
                technology, and entrepreneurship across Africa.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#ventures" className="hover:text-white transition-colors">Ventures</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Tech Training</li>
                <li>Startup Incubation</li>
                <li>Custom Development</li>
                <li>Digital Consulting</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Orivon Edge Innovation Hub. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;