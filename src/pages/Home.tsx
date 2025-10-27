import React from 'react';
import { ArrowRight, Users, CheckCircle, Rocket, Lightbulb, Target, Globe, Code, Zap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">ORIVON <span className="text-blue-600">EDGE</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#startups" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Startups</a>
              <a href="#training" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Training</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Join Hub
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-green-900/40"></div>
        
        <div className="relative z-10 flex flex-col justify-center min-h-screen pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            


            {/* Trust Badge */}
            <div className="mb-8">
              <p className="text-lg text-white/80 font-medium">
                Approved by 500+ developers, entrepreneurs and innovators
              </p>
            </div>

            {/* Main Heading - Co-Dev Hub Style */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              ORIVON EDGE
            </h1>
            
            {/* Subtitle - Innovation Hub Positioning */}
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium">
              Orivon Edge is a youth-led innovation hub dedicated to nurturing creativity, 
              technology, and entrepreneurship to drive sustainable development across Africa.
            </p>

            {/* Key Features - Co-Dev Hub Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-white font-semibold">AI Development</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">Startup Incubation</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">Tech Training</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">Digital Solutions</div>
              </div>
            </div>



            {/* Impact Stats - Co-Dev Hub Style */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/70 text-sm">Years of Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-white/70 text-sm">Developers Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-white/70 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-white/70 text-sm">Active Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE - Co-Dev Hub Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">WHO WE ARE</h2>
            <h3 className="text-3xl font-bold text-blue-600 mb-8">Innovation Through Technology</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Orivon Edge is a member of Nigeria's growing tech innovation ecosystem. Founded in 2019, 
              Orivon Edge has trained and mentored over 200+ developers and entrepreneurs in the 
              technology, creative, and startup industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                Orivon Edge is committed to driving technological innovation, entrepreneurship, and 
                digital transformation by providing a collaborative ecosystem where developers, 
                creatives, and innovators can build world-class solutions. Through training, 
                incubation, and strategic partnerships, we empower individuals and enterprises 
                to create lasting impact in Nigeria and beyond.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                To be a leading hub for innovation, creativity, and entrepreneurship in Africa, 
                shaping a future where technology, research, and human capital development drive 
                sustainable growth and digital transformation across the continent.
              </p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Experience</h4>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2019, Orivon Edge has trained and mentored over 200+ developers and 
                entrepreneurs in the technology, creative, and startup industry through partnerships 
                and collaborative initiatives with tech companies, startups, and educational institutions.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h4 className="text-3xl font-bold text-gray-900 mb-12">Core Values</h4>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Innovation</h5>
                <p className="text-gray-600 text-sm">
                  We foster continuous learning, problem-solving, and groundbreaking ideas to tackle local and global challenges.
                </p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Collaboration</h5>
                <p className="text-gray-600 text-sm">
                  We believe in partnerships and collective action to create meaningful technological impact.
                </p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Excellence</h5>
                <p className="text-gray-600 text-sm">
                  We uphold the highest standards of professionalism, ethics, and quality in all our solutions.
                </p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Sustainability</h5>
                <p className="text-gray-600 text-sm">
                  We design solutions that are scalable, sustainable, and aligned with long-term development.
                </p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Impact</h5>
                <p className="text-gray-600 text-sm">
                  We focus on creating real-world solutions that drive positive change in communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training in Action - Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our students and professionals in training sessions, building the future of African technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <Code className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Kids Coding Session</p>
                  <p className="text-sm">STEM Shuttle Program</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Children Learning Programming</h3>
                <p className="text-gray-600 text-sm">Young minds building their first mobile apps and games through hands-on coding sessions.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Professional Training</p>
                  <p className="text-sm">Professional Training</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adults Mastering AI & Data Science</h3>
                <p className="text-gray-600 text-sm">Professionals upgrading their skills in artificial intelligence and machine learning for global opportunities.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <Rocket className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Startup Incubation</p>
                  <p className="text-sm">Entrepreneurship Program</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Entrepreneurs Building Solutions</h3>
                <p className="text-gray-600 text-sm">Entrepreneurs developing technology solutions for local and global markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Clean Flat Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Structured Platform for Sustainable Growth that Generates Economic Value and Social Benefit
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a platform for individuals and groups to realise their dreams and develop their talents and skills, 
                and to mentor them for effective performance in a dynamic business environment.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To develop and raise entrepreneurs from current tides of unemployment and poverty through innovative 
                technology solutions and comprehensive training programs.
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Future?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our tech institute and start your journey from idea to successful startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Training
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact & Results */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact & Results</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See the real results from our training programs. We no dey do shakara - these numbers speak for themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-200 mb-4">Job Placement Rate</div>
              <p className="text-blue-100 text-sm">Graduates securing employment within 6 months</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">₦15M</div>
              <div className="text-blue-200 mb-4">Commercial Revenue</div>
              <p className="text-blue-100 text-sm">Generated through corporate partnerships and projects</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-200 mb-4">Remote Work Placements</div>
              <p className="text-blue-100 text-sm">Graduates working for international companies</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Excellence & Global Standards</h3>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our programs maintain international standards while addressing local market needs, 
              ensuring our graduates are competitive in both domestic and global technology markets.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Co-Dev Hub Style */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">WHAT WE DO</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reshaping the narrative of Nigerian technology innovation, especially in Northern Nigeria. 
              Take your business to new heights by investing in our reliable and efficient technology solutions.
            </p>
          </div>

          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Orivon Edge, we operate across four key workstreams that drive innovation, 
              entrepreneurship, and technological impact:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 01 - Development */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mr-4">01 /</div>
                <h3 className="text-2xl font-bold text-gray-900">Development</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We design and implement high-impact programs in youth empowerment, digital skills training, 
                and tech entrepreneurship, collaborating with organizations and institutions to drive 
                sustainable technological development across Nigeria.
              </p>
            </div>

            {/* 02 - Innovation and Technology */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mr-4">02 /</div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation and Technology</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide a collaborative space for startups and tech entrepreneurs to develop and scale 
                solutions in AI, web development, mobile apps, and digital transformation, leveraging 
                cutting-edge tools and expertise.
              </p>
            </div>

            {/* 03 - Creative Enterprise */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mr-4">03 /</div>
                <h3 className="text-2xl font-bold text-gray-900">Creative Enterprise</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We support the creative economy through training and production of digital media, 
                content creation, and creative technology solutions, empowering creatives to build 
                sustainable businesses and amplify their impact.
              </p>
            </div>

            {/* 04 - Consulting and Business */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mr-4">04 /</div>
                <h3 className="text-2xl font-bold text-gray-900">Consulting and Business</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer strategic advisory services in digital transformation, business development, 
                technology strategy, and program design, helping organizations optimize their impact 
                and drive long-term technological success.
              </p>
            </div>

            {/* Technology for Stability (T4S) */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Technology for Stability (T4S)</h3>
              <p className="text-gray-600 text-center mb-6">
                Specialized solutions for conflict mitigation, humanitarian aid optimization, 
                and resilience-building through data visualization and AI applications.
              </p>
            </div>

            {/* Co-Development Projects */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Co-Development Projects</h3>
              <p className="text-gray-600 text-center mb-6">
                Revenue-generating partnerships with development organizations, state MDAs, 
                and international agencies for custom technology implementations.
              </p>
            </div>

            {/* Remote Talent Export */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global Talent Export</h3>
              <p className="text-gray-600 text-center mb-6">
                Training talent for international remote work opportunities, 
                contributing to Nigeria's goal of becoming a net talent exporter.
              </p>
            </div>

            {/* API-Driven Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data Monetization Platform</h3>
              <p className="text-gray-600 text-center mb-6">
                Secure API infrastructure providing corporate partners with measurable training outcomes, 
                competency alignment, and ROI tracking for justified investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Clean Flat Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We INVEST our time, resources, and expertise to achieve our vision through these fundamental principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continually seeking new ways to improve and solve problems through cutting-edge technology and creative thinking.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Constant improvement and change to offer the best services and maintain the highest standards in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Open mind and honesty in all our dealings and partnerships, building trust through transparent communication.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating meaningful change through technology and innovation that benefits individuals, communities, and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide industry-standard training to give you the exact skills companies are looking for. 
              After training, you can work anywhere - Nigeria, abroad, or even start your own business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Core Skills Track */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Core Skills Track</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We no dey do theory only - everything na hands-on. You go work on real projects 
                while learning, so by the time you finish, you don already get experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Cloud Computing & DevOps</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Data Science & Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Cybersecurity & Quality Assurance</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply for Core Track
                </button>
              </div>
            </div>

            {/* Corporate & International Certification */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Corporate & Export-Ready Training</h3>
              </div>
              <p className="text-gray-600 mb-6">
                This one na for people wey wan work for big companies or do remote work. 
                We go teach you both the technical skills and how to communicate well with international clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">UI/UX Design & Product Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Software Development & Game Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Remote Work & Communication Skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">International Certification Prep</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Join Corporate Track
                </button>
              </div>
            </div>
          </div>

          {/* Commercial Performance Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Commercial Performance & ROI</h3>
              <p className="text-xl opacity-90">
                Measurable outcomes demonstrating our co-development model's effectiveness and commercial viability.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-200">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₦15M</div>
                <div className="text-blue-200">Corporate Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-blue-200">Remote Work Placements</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3.2x</div>
                <div className="text-blue-200">Average ROI for Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What They Are Saying About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our trainees, startup founders, and partners about their experience with Orivon Edge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Definitely worth the investment. Capacity Building is worth much more than I paid. 
                  I couldn't have asked for more than this. We were treated like royalty."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">NJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Nasir Jaafar</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The results achieved through Orivon Edge's STEM-Shuttle program are exceptional. 
                  The hands-on approach delivers measurable improvements in learning outcomes."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">AB</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Abbas A Baba</p>
                  <p className="text-sm text-gray-500">Parent & CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "I highly recommend Orivon Edge for comprehensive digital marketing training 
                  and business development. The service quality and results exceed expectations."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SO</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Shamsudeen Omacy</p>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-xl mb-6 opacity-90">
                Orivon Edge is a place for self discovery, where trainees, clients and students are given 
                free space to express their technological talents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ventures */}
      <section id="ventures" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Ventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out the startups we don build from our institute. These are real solutions solving real problems for Nigerians and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Democrasee */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <Target className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold text-lg">Democrasee</p>
                  <p className="text-sm opacity-90">Crisis Reporting Platform</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs font-semibold">Orivon Venture</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Crisis Management</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We built this platform to help communities report emergencies and get help fast. 
                  Over 10,000 people don use am to report incidents.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>• 10,000+ users</span>
                  <span>• 5,000+ incidents</span>
                </div>
                <Link to="/venture-studio" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* FarmAfricaa */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <Code className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold text-lg">FarmAfricaa</p>
                  <p className="text-sm opacity-90">Smart Agriculture Platform</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-semibold">AgriTech Venture</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Farm Intelligence Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  This one dey help farmers detect crop diseases early and increase their harvest. 
                  Over 5,000 farmers across Nigeria dey use our AI technology.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>• 5,000+ farmers</span>
                  <span>• 94% accuracy</span>
                </div>
                <Link to="/venture-studio" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* TechMap */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <Rocket className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold text-lg">TechMap</p>
                  <p className="text-sm opacity-90">Business Intelligence</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs font-semibold">SaaS Platform</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Intelligence Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Small businesses fit use this platform to understand their data better and make 
                  smart decisions. Over 1,000 businesses don join our platform.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>• 1,000+ businesses</span>
                  <span>• 50+ integrations</span>
                </div>
                <Link to="/venture-studio" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/venture-studio"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              See All Our Ventures
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading organizations ensure our graduates have direct pathways 
              to employment and our training remains industry-relevant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Partners</h3>
                <p className="text-gray-600 mb-6">
                  Leading technology companies and multinational corporations that hire our graduates 
                  and sponsor our training programs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Tech Startups (Remote Positions)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Multinational Corporations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Government Agencies (NITDA, BICTDA)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Partners</h3>
                <p className="text-gray-600 mb-6">
                  International development organizations and funding agencies that support our 
                  Technology for Stability (T4S) initiatives.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">USAID Development Programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">European Union Funding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">World Bank Tech Initiatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/venture-studio"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Learn About Our Venture Studio
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our tech institute? Whether you're looking for training, incubation, or partnership opportunities, we're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join Training</h3>
              <p className="text-gray-300 mb-4">Enroll in our STEM education and professional development programs</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Startup Incubation</h3>
              <p className="text-gray-300 mb-4">Apply for our startup incubation and mentorship programs</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Apply Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-300 mb-4">Get custom software development and digital transformation services</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
                Get Quote
              </button>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-300">Reach out to us directly</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">info@orivonedge.dev</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">+234 8143084473</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Lagos Tech Institute, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ORIVON <span className="text-purple-400">EDGE</span></h3>
              <p className="text-gray-400 mb-4">
                A Structured platform for Sustainable Growth that Generates Economic Value and Social Benefit.
              </p>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white mb-1">Open Hours</p>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#startups" className="hover:text-white">Startups</a></li>
                <li><a href="#training" className="hover:text-white">Training</a></li>
                <li><Link to="/venture-studio" className="hover:text-white">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Capacity Building</a></li>
                <li><a href="#services" className="hover:text-white">STEM Education</a></li>
                <li><a href="#services" className="hover:text-white">Software Development</a></li>
                <li><a href="#services" className="hover:text-white">Startup Incubation</a></li>
                <li><a href="#services" className="hover:text-white">Co-Working Space</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="text-white font-semibold">Address:</span><br />
                  Lagos Tech Institute<br />
                  Victoria Island, Lagos, Nigeria
                </li>
                <li>
                  <span className="text-white font-semibold">Phone:</span><br />
                  <a href="tel:+2348143084473" className="hover:text-white">+234 8143084473</a>
                </li>
                <li>
                  <span className="text-white font-semibold">Email:</span><br />
                  <a href="mailto:info@orivonedge.dev" className="hover:text-white">info@orivonedge.dev</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Orivon Edge Innovation Hub. All Rights Reserved</p>
            <p className="text-sm mt-2">Designed by Orivon Edge Development Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;