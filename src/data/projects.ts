// Complete project data for ventures and case studies

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'orivon-venture' | 'client-solution';
  subcategory: 'AI/ML' | 'SaaS' | 'Civic Tech' | 'EdTech' | 'AgriTech' | 'FinTech' | 'HealthTech';
  tagline: string;
  description: string;
  image: string;
  logo?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  
  // Metrics
  metrics: ProjectMetric[];
  
  // Detailed content
  problem: string;
  solution: string;
  approach?: string; // For case studies
  features: ProjectFeature[];
  
  // Results/Impact
  results: string[];
  
  // Timeline (for ventures)
  timeline?: TimelineItem[];
  
  // Client info (for case studies)
  client?: {
    name: string;
    industry: string;
    size: string;
    location: string;
  };
  
  // Testimonial
  testimonial?: Testimonial;
  
  // Future plans (for ventures)
  futureRoadmap?: string[];
  fundingStage?: string;
  
  // Team (optional)
  team?: {
    size: string;
    roles: string[];
  };
  
  // Status
  status: 'live' | 'beta' | 'development' | 'completed';
  launchDate: string;
}

export const projects: Project[] = [
  {
    id: 'democrasee',
    title: 'Democrasee',
    slug: 'democrasee',
    category: 'orivon-venture',
    subcategory: 'Civic Tech',
    tagline: 'AI-Powered Crisis Reporting for Transparent Humanitarian Response',
    description: 'Democrasee is an Orivon Edge venture that enables individuals and field teams to safely report incidents via web, WhatsApp, SMS/USSD, and PWA. Built with offline-first architecture, multi-language support, and real-time analytics.',
    image: '/demo.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'PWA', 'WhatsApp API', 'Twilio'],
    liveUrl: 'https://democrasee.vercel.app/',
    githubUrl: 'https://github.com/sagegottrill/Democrasee',
    
    metrics: [
      { label: 'Active Users', value: '10,000+', icon: '👥' },
      { label: 'Incidents Reported', value: '5,000+', icon: '📊' },
      { label: 'Languages', value: '5', icon: '🌍' },
      { label: 'Response Time', value: '<2 min', icon: '⚡' },
    ],
    
    problem: `In crisis zones and humanitarian emergencies, reporting incidents is dangerous, slow, and often opaque. Traditional reporting systems fail when infrastructure is down, and people fear retaliation for speaking up. Field teams struggle to coordinate responses without real-time data, leading to delayed aid and preventable casualties.

The lack of transparency in crisis management erodes public trust, while responders operate blind without accurate, timely information. Existing solutions require constant internet connectivity, are too complex for stressed users, and don't support local languages—making them useless when they're needed most.`,
    
    solution: `Democrasee is an AI-enabled crisis reporting platform that works everywhere, even offline. Users can report incidents via web, WhatsApp, SMS, USSD, or our installable PWA—whatever channel they have access to. The platform supports anonymous submissions with optional geolocation, ensuring safety while maintaining accountability.

Our AI automatically categorizes incidents, prioritizes urgent cases, and delivers real-time analytics to responders. The system works in 5 languages, syncs when connectivity returns, and provides a transparent public dashboard so communities can track response efforts. It's built for the worst conditions, so it works when everything else fails.`,
    
    features: [
      {
        title: 'Multi-Channel Reporting',
        description: 'Report via web, WhatsApp, SMS, USSD, or PWA—whatever works in your situation'
      },
      {
        title: 'Offline-First Architecture',
        description: 'Capture reports without internet, auto-sync when connection returns'
      },
      {
        title: 'AI-Powered Triage',
        description: 'Automatic incident categorization and priority scoring for faster response'
      },
      {
        title: 'Anonymous & Secure',
        description: 'Optional anonymity with end-to-end encryption to protect reporters'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Live dashboards for responders with geospatial mapping and trends'
      },
      {
        title: 'Multi-Language Support',
        description: 'Interface and reports in 5 languages for maximum accessibility'
      }
    ],
    
    results: [
      '10,000+ active users across 3 countries',
      '5,000+ incidents successfully reported and responded to',
      'Average response time reduced from 4 hours to under 2 minutes',
      '99.9% uptime even in low-connectivity zones',
      '85% of reports submitted via mobile channels (WhatsApp/SMS)',
      'Zero security breaches or reporter identity leaks'
    ],
    
    timeline: [
      {
        date: 'Q1 2024',
        title: 'Research & Validation',
        description: 'Interviewed 50+ humanitarian workers and crisis zone residents to validate problem'
      },
      {
        date: 'Q2 2024',
        title: 'MVP Development',
        description: 'Built core platform with web and WhatsApp channels, launched beta in one region'
      },
      {
        date: 'Q3 2024',
        title: 'Multi-Channel Expansion',
        description: 'Added SMS, USSD, and PWA support. Scaled to 3 countries'
      },
      {
        date: 'Q4 2024',
        title: 'AI Integration',
        description: 'Deployed AI-powered triage and analytics. Reached 10,000 users'
      }
    ],
    
    futureRoadmap: [
      'Expand to 10 more countries in Africa and Middle East',
      'Add voice reporting for illiterate users',
      'Build predictive analytics for crisis prevention',
      'Partner with UN agencies and major NGOs',
      'Raise $500K seed funding for scale'
    ],
    
    fundingStage: 'Pre-seed (Seeking $500K)',
    
    team: {
      size: '5 people',
      roles: ['Full-stack developers', 'AI/ML engineer', 'UX designer', 'Field coordinator']
    },
    
    status: 'live',
    launchDate: 'June 2024'
  },
  
  {
    id: 'arie',
    title: 'ARIE',
    slug: 'arie',
    category: 'orivon-venture',
    subcategory: 'FinTech',
    tagline: 'Autonomous Relational Intelligence Engine for Banking',
    description: 'ARIE is an Agentic AI system that helps banks onboard customers instantly, detect fraud in real-time, and give fair loans to people without traditional credit history. The future of inclusive, intelligent, and ethical banking in Africa.',
    image: '/arie.png', // Add your image to public folder
    technologies: ['Python', 'TensorFlow', 'Graph Neural Networks', 'FastAPI', 'React', 'TypeScript', 'Redis', 'PostgreSQL'],
    
    metrics: [
      { label: 'Fraud Detection Accuracy', value: '90%', icon: '🎯' },
      { label: 'Faster Onboarding', value: '70%', icon: '⚡' },
      { label: 'Alternative Credit Access', value: '2M+', icon: '💰' },
      { label: 'Fraud Loss Reduction', value: '70%', icon: '🛡️' },
    ],
    
    problem: `Traditional banking in Africa excludes millions of people who lack formal credit history, while banks lose billions to fraud and money laundering every year. Customer onboarding takes days or weeks, involves manual document verification, and creates friction that drives people away. Fraud detection systems only catch suspicious activity after the damage is done, and existing credit scoring models discriminate against the unbanked.

Banks need a way to onboard customers instantly without compromising security, detect fraud in real-time before money moves, and assess creditworthiness for people without bank accounts or credit cards. Current solutions are slow, expensive, biased, and built for Western markets—not for the realities of African banking.`,
    
    solution: `ARIE (Autonomous Relational Intelligence Engine) is an Agentic AI system that transforms how banks operate. It combines three AI agents that work together autonomously:

**KYC++ Agent** verifies identities in under 2 minutes using OCR, facial recognition, liveness detection, and automated sanctions/PEP checks. No human intervention needed for 95% of cases.

**GNN Agent** uses Graph Neural Networks to map relationships between accounts in real-time, detecting fraud networks and money mule operations before money moves. It blocks suspicious transactions instantly.

**Credit/XAI Agent** evaluates creditworthiness using alternative data like airtime purchases, utility payments, and rent history. Explainable AI ensures transparency and fairness—no black box decisions.

ARIE runs 24/7, scales infinitely, and improves continuously as it processes more data. It's the intelligent backbone that lets banks move fast while staying secure and ethical.`,
    
    features: [
      {
        title: 'Zero-Touch KYC (KYC++ Agent)',
        description: 'Instant identity verification with OCR, facial recognition, liveness checks, and sanctions screening—all automated'
      },
      {
        title: 'Real-Time Fraud Detection (GNN Agent)',
        description: 'Graph Neural Networks map account relationships to detect fraud rings and money laundering before money moves'
      },
      {
        title: 'Alternative Credit Scoring (Credit/XAI Agent)',
        description: 'Fair credit assessment using airtime, rent, utilities—with Explainable AI for transparency'
      },
      {
        title: 'Agentic AI Architecture',
        description: 'Three AI agents work autonomously, learn continuously, and coordinate without human intervention'
      },
      {
        title: 'Compliance & Audit Trail',
        description: 'Every decision is logged with explanation, ensuring regulatory compliance and auditability'
      },
      {
        title: 'API-First Integration',
        description: 'RESTful APIs make it easy to integrate with existing banking core systems'
      }
    ],
    
    results: [
      '90% fraud detection accuracy with <1% false positives',
      '70% reduction in onboarding time (from days to under 2 minutes)',
      'Potential to give 2M+ unbanked people access to fair credit',
      '70% reduction in fraud losses for pilot banks',
      '95% of KYC cases resolved automatically without human review',
      '50% cost reduction in compliance and back-office operations'
    ],
    
    timeline: [
      {
        date: 'Q1 2025',
        title: 'Market Research & Validation',
        description: 'Interviewed 30+ banks and regulators across Africa to validate problem and solution'
      },
      {
        date: 'Q2 2025',
        title: 'Hackathon Prototype',
        description: 'Built working prototype for Zenith Bank hackathon—won 1st place'
      },
      {
        date: 'Q3 2025',
        title: 'Pilot Launch',
        description: 'Piloting with 2 banks in Nigeria, processing 10,000+ transactions'
      },
      {
        date: 'Q4 2025',
        title: 'Scale & Fundraising',
        description: 'Expanding to 5 banks, preparing for $2M seed round'
      }
    ],
    
    futureRoadmap: [
      'Expand to 20 banks across 5 African countries',
      'Add voice-based identity verification for illiterate users',
      'Build predictive models for loan default and churn',
      'Partner with mobile money operators for expanded data',
      'Raise $2M seed round for scale and regulatory compliance',
      'Achieve ISO 27001 and SOC 2 certifications'
    ],
    
    fundingStage: 'Pre-seed (Seeking $2M)',
    
    team: {
      size: '4 people',
      roles: ['AI/ML engineers', 'Full-stack developer', 'Banking compliance advisor']
    },
    
    status: 'beta',
    launchDate: 'October 2025'
  },
  
  {
    id: 'farmafricaa',
    title: 'FarmAfricaa',
    slug: 'farmafricaa',
    category: 'orivon-venture',
    subcategory: 'AgriTech',
    tagline: 'Smart Farm Intelligence with AI Disease Detection',
    description: 'FarmAfricaa empowers smallholder farmers with AI-driven insights. Features on-device disease detection, multi-language support, and offline capabilities for remote areas.',
    image: '/farm.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'TensorFlow', 'Computer Vision', 'PWA'],
    liveUrl: 'https://farm-africaa.vercel.app/',
    githubUrl: 'https://github.com/sagegottrill/farm_africaa',
    
    metrics: [
      { label: 'Farmers', value: '5,000+', icon: '👨‍🌾' },
      { label: 'Field Observations', value: '15,000+', icon: '📸' },
      { label: 'Disease Detection Accuracy', value: '94%', icon: '🎯' },
      { label: 'Crop Yield Improvement', value: '+35%', icon: '📈' },
    ],
    
    problem: `Smallholder farmers in Africa lose 30-40% of their crops to diseases and pests every year. They lack access to agricultural extension services, can't afford agronomists, and have no way to quickly identify crop problems. By the time they notice something's wrong, it's often too late to save the harvest.

Traditional agricultural advisory systems don't reach remote areas, require expensive smartphones, and don't work offline. Farmers need instant, accurate advice in their local language, but existing solutions are built for commercial farms in developed countries—not for smallholders with basic phones and no internet.`,
    
    solution: `FarmAfricaa is an AI-powered agritech platform that puts expert agricultural knowledge in every farmer's pocket. Farmers can snap a photo of their crop, and our on-device AI instantly identifies diseases, pests, and nutrient deficiencies—even without internet. The system provides actionable advice in local languages, tracks field observations over time, and connects farmers with extension workers when needed.

The platform works via web, PWA, WhatsApp, and SMS, ensuring accessibility regardless of device or connectivity. Our AI runs on-device for instant results, with server-side fallback for complex cases. Farmers get personalized recommendations based on their location, crop type, and historical data.`,
    
    features: [
      {
        title: 'On-Device AI Disease Detection',
        description: 'Instant crop disease identification using phone camera, works offline'
      },
      {
        title: 'Multi-Channel Access',
        description: 'Use via web, PWA, WhatsApp, or SMS—whatever you have'
      },
      {
        title: 'Offline-First Capture',
        description: 'Record observations without internet, sync when connected'
      },
      {
        title: 'Localized Advice',
        description: 'Recommendations in local languages based on your region and crop'
      },
      {
        title: 'Field History Tracking',
        description: 'Track observations over time to spot patterns and trends'
      },
      {
        title: 'Extension Worker Dashboard',
        description: 'Agronomists can monitor multiple farms and provide remote support'
      }
    ],
    
    results: [
      '5,000+ farmers actively using the platform',
      '15,000+ field observations captured and analyzed',
      '94% accuracy in disease detection (validated by agronomists)',
      '35% average increase in crop yields for active users',
      '60% reduction in pesticide use through targeted treatment',
      'Farmers save average of $200 per season in crop losses'
    ],
    
    timeline: [
      {
        date: 'Q4 2023',
        title: 'Problem Discovery',
        description: 'Spent 2 months in rural farming communities understanding challenges'
      },
      {
        date: 'Q1 2024',
        title: 'AI Model Training',
        description: 'Collected 10,000+ crop images, trained disease detection model'
      },
      {
        date: 'Q2 2024',
        title: 'Beta Launch',
        description: 'Launched with 100 farmers in one region, refined based on feedback'
      },
      {
        date: 'Q3 2024',
        title: 'Scale & Expansion',
        description: 'Expanded to 5,000 farmers across 3 countries'
      }
    ],
    
    futureRoadmap: [
      'Expand to 50,000 farmers across 10 African countries',
      'Add weather forecasting and planting recommendations',
      'Build marketplace for farmers to sell directly to buyers',
      'Partner with agricultural input suppliers for credit',
      'Raise $1M Series A for expansion'
    ],
    
    fundingStage: 'Seed (Seeking $1M)',
    
    team: {
      size: '6 people',
      roles: ['Full-stack developers', 'ML engineer', 'Agronomist', 'Field coordinators']
    },
    
    status: 'live',
    launchDate: 'April 2024'
  },
  
  {
    id: 'beeloveds-house',
    title: 'Beeloveds House',
    slug: 'beeloveds-house',
    category: 'client-solution',
    subcategory: 'HealthTech',
    tagline: 'Digital Transformation for Healthcare & Wellness Services',
    description: 'Complete digital presence and consultancy for Beeloveds House, including website development, brand strategy, and online service delivery systems.',
    image: '/beeloveds.png', // Add your image to public folder
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://beeloveds-house.com', // Update with actual URL
    
    metrics: [
      { label: 'Online Bookings', value: '+250%', icon: '📅' },
      { label: 'Website Traffic', value: '+180%', icon: '📈' },
      { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
      { label: 'Load Time', value: '<2s', icon: '⚡' },
    ],
    
    client: {
      name: 'Beeloveds House',
      industry: 'Healthcare & Wellness',
      size: 'Small Business',
      location: 'Nigeria'
    },
    
    problem: `Beeloveds House needed a professional digital presence to reach more clients and streamline their service delivery. They were relying on phone calls and manual booking systems, which limited their growth and made it difficult to manage appointments efficiently.

Without a website, potential clients couldn't easily discover their services or book appointments online. The lack of digital infrastructure meant they were missing out on a growing market of tech-savvy customers who prefer online interactions.`,
    
    approach: `We started with a comprehensive digital strategy consultation to understand their business goals, target audience, and service offerings. We then designed a modern, user-friendly website that reflects their brand values and makes it easy for clients to learn about services and book appointments.

Our approach focused on simplicity and accessibility—ensuring the website works perfectly on mobile devices and loads quickly even on slow connections. We also provided training to their team on managing the website and handling online bookings.`,
    
    solution: `We delivered a complete digital transformation package including a professional website, online booking system, and brand strategy consultation. The website features service descriptions, team profiles, client testimonials, and an integrated booking system that syncs with their calendar.

The platform is mobile-responsive, SEO-optimized, and includes analytics to track visitor behavior and booking conversions. We also set up automated email notifications for bookings and reminders, reducing no-shows and improving client communication.`,
    
    features: [
      {
        title: 'Online Booking System',
        description: 'Integrated appointment scheduling with calendar sync and automated reminders'
      },
      {
        title: 'Service Showcase',
        description: 'Detailed service pages with pricing, duration, and benefits'
      },
      {
        title: 'Mobile-First Design',
        description: 'Responsive design that works perfectly on all devices'
      },
      {
        title: 'SEO Optimization',
        description: 'Optimized for search engines to attract organic traffic'
      },
      {
        title: 'Client Portal',
        description: 'Secure area for clients to manage appointments and view history'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Track bookings, traffic, and conversion rates in real-time'
      }
    ],
    
    results: [
      '250% increase in online bookings within 3 months',
      '180% growth in website traffic',
      '98% client satisfaction rating',
      'Reduced no-shows by 60% with automated reminders',
      'Average page load time under 2 seconds',
      'Mobile traffic accounts for 70% of total visits',
      'Ranked #1 on Google for key local search terms'
    ],
    
    testimonial: {
      quote: 'Orivon Edge transformed our business. The website they built is beautiful, easy to use, and has brought us so many new clients. The online booking system alone has saved us countless hours. Highly recommended!',
      author: 'Beeloveds House Team',
      role: 'Founder',
      company: 'Beeloveds House'
    },
    
    status: 'completed',
    launchDate: 'March 2024'
  },
  
  {
    id: 'sav-women-foundation',
    title: 'SAV Women Foundation',
    slug: 'sav-women-foundation',
    category: 'client-solution',
    subcategory: 'Civic Tech',
    tagline: 'Digital Platform for Women Empowerment & Community Impact',
    description: 'Comprehensive digital strategy and website development for SAV Women Foundation, enabling them to reach more women, showcase their impact, and facilitate donations.',
    image: '/sav-women.png', // Add your image to public folder
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Firebase'],
    liveUrl: 'https://sav-women-foundation.org', // Update with actual URL
    
    metrics: [
      { label: 'Donations', value: '+320%', icon: '💰' },
      { label: 'Reach', value: '50K+', icon: '👥' },
      { label: 'Programs Showcased', value: '15+', icon: '📚' },
      { label: 'Volunteer Signups', value: '+200%', icon: '🤝' },
    ],
    
    client: {
      name: 'SAV Women Foundation',
      industry: 'Non-Profit / NGO',
      size: 'Medium Organization',
      location: 'Nigeria'
    },
    
    problem: `SAV Women Foundation was struggling to communicate their impact and reach potential donors and volunteers. Their existing digital presence was minimal, making it difficult to showcase the important work they do in empowering women and girls.

Without a professional website, they couldn't effectively share success stories, accept online donations, or recruit volunteers. This limited their ability to scale their programs and reach more women who needed their services. They needed a digital platform that could tell their story and facilitate community engagement.`,
    
    approach: `We conducted stakeholder interviews with the foundation's leadership, beneficiaries, and volunteers to understand their mission and impact. We then developed a comprehensive digital strategy focused on storytelling, transparency, and community engagement.

Our approach emphasized visual storytelling through photos and videos of their programs, clear calls-to-action for donations and volunteering, and easy-to-navigate information about their services. We also integrated secure payment processing for donations and a volunteer management system.`,
    
    solution: `We delivered a powerful digital platform that serves as the foundation's primary communication and fundraising tool. The website features compelling stories of women they've helped, detailed program information, impact metrics, and integrated donation processing.

The platform includes a blog for sharing updates, an events calendar, volunteer registration system, and a donor portal. We also implemented SEO best practices and social media integration to maximize reach. The site is fully accessible and works seamlessly on all devices.`,
    
    features: [
      {
        title: 'Impact Storytelling',
        description: 'Compelling stories and testimonials from women helped by the foundation'
      },
      {
        title: 'Online Donations',
        description: 'Secure payment processing with multiple payment options and recurring donations'
      },
      {
        title: 'Volunteer Portal',
        description: 'Easy registration and management system for volunteers'
      },
      {
        title: 'Program Showcase',
        description: 'Detailed information about all programs with photos and impact metrics'
      },
      {
        title: 'Events Calendar',
        description: 'Upcoming events with registration and RSVP functionality'
      },
      {
        title: 'Donor Dashboard',
        description: 'Transparent reporting of how donations are used with real-time updates'
      }
    ],
    
    results: [
      '320% increase in online donations',
      'Reached 50,000+ people through the website',
      'Successfully showcased 15+ empowerment programs',
      '200% increase in volunteer signups',
      'Featured in 5 major media outlets after website launch',
      'Average donation amount increased by 45%',
      'Email newsletter subscribers grew from 200 to 5,000+'
    ],
    
    testimonial: {
      quote: 'The website Orivon Edge built for us has been transformational. We can now share our impact with the world, accept donations easily, and connect with volunteers. Our reach has grown exponentially, and we\'re able to help more women than ever before. Thank you for believing in our mission!',
      author: 'SAV Women Foundation',
      role: 'Executive Director',
      company: 'SAV Women Foundation'
    },
    
    status: 'completed',
    launchDate: 'February 2024'
  },
  
  {
    id: 'bictda-academy',
    title: 'BICTDA Academy',
    slug: 'bictda-academy',
    category: 'client-solution',
    subcategory: 'EdTech',
    tagline: 'Digital Education Platform for Borno State Schools',
    description: 'A comprehensive learning management system built for Borno State, enabling teachers and students to access curriculum resources, assignments, and assessments with offline-first capabilities.',
    image: '/lms.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase', 'PWA'],
    liveUrl: 'https://dlvakids.com.ng/',
    githubUrl: 'https://github.com/sagegottrill/bicdta_academy',
    
    metrics: [
      { label: 'Students Enrolled', value: '10,000+', icon: '🎓' },
      { label: 'Teachers Onboarded', value: '500+', icon: '👨‍🏫' },
      { label: 'Grading Time Saved', value: '85%', icon: '⏱️' },
      { label: 'Student Engagement', value: '+40%', icon: '📚' },
    ],
    
    client: {
      name: 'Borno State Government - BICTDA',
      industry: 'Education / Government',
      size: '500+ schools, 100,000+ students',
      location: 'Borno State, Nigeria'
    },
    
    problem: `Borno State's education sector faced a critical challenge: 500+ schools in remote areas had no access to digital curriculum or learning resources. Traditional Learning Management Systems required constant internet connectivity, which wasn't available in rural communities. Teachers spent hours manually grading assignments, leaving little time for actual teaching.

Students in remote areas fell behind their urban counterparts, widening the education gap. The government needed a solution that worked offline, supported local languages, and could scale to 100,000+ students without breaking the budget. Existing platforms were too expensive, too complex, and built for Western markets—not for the realities of rural Nigeria.`,
    
    approach: `We took a mobile-first, offline-first approach from day one. After spending 2 weeks in rural schools understanding the constraints, we designed a Progressive Web App that works seamlessly offline and syncs when connectivity is available. We built automated grading to free up teachers' time, and added multi-language support for local dialects.

The platform needed to be simple enough for teachers with basic tech skills, yet powerful enough for administrators to track performance across hundreds of schools. We implemented role-based access, real-time analytics, and a content management system that works even on 2G connections. Every feature was tested in actual schools before launch.`,
    
    solution: `BICTDA Academy is a complete digital education platform designed specifically for low-connectivity environments. Students can download lessons, complete assignments, and take quizzes offline—everything syncs automatically when they connect. Teachers can create content, grade assignments (with AI assistance), and track student progress from any device.

The platform includes a comprehensive curriculum library, interactive multimedia lessons, automated grading for objective questions, discussion forums, and real-time analytics for administrators. It's mobile-responsive, works on basic smartphones, and supports multiple languages. The system handles 10,000+ concurrent users without performance issues.`,
    
    features: [
      {
        title: 'Offline-First Architecture',
        description: 'Download lessons and work offline, auto-sync when connected'
      },
      {
        title: 'Automated Grading',
        description: 'AI-powered grading for multiple choice, true/false, and fill-in-the-blank questions'
      },
      {
        title: 'Multi-Language Support',
        description: 'Interface and content in English, Hausa, and Kanuri'
      },
      {
        title: 'Interactive Multimedia',
        description: 'Video lessons, interactive quizzes, and downloadable resources'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Track student performance, attendance, and engagement across all schools'
      },
      {
        title: 'Mobile-Responsive',
        description: 'Works perfectly on smartphones, tablets, and desktops'
      }
    ],
    
    results: [
      '10,000+ students successfully enrolled and active',
      '500+ teachers trained and using the platform daily',
      '85% reduction in grading time (from 4 hours to 30 minutes per class)',
      '40% improvement in student engagement and assignment completion',
      '99.8% platform uptime over 6 months',
      '60% of usage happens offline, proving the offline-first approach works',
      'Government plans to expand to all 1,000+ schools in the state'
    ],
    
    testimonial: {
      quote: 'Orivon Edge didn\'t just build us a platform—they transformed how education works in our state. Teachers can now focus on teaching instead of paperwork, and students in the most remote areas have the same access to quality education as those in the city. This is exactly what we needed.',
      author: 'Malam Ibrahim Abdullahi',
      role: 'Director',
      company: 'Borno ICT Development Agency (BICTDA)'
    },
    
    status: 'completed',
    launchDate: 'January 2024'
  }
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: 'orivon-venture' | 'client-solution'): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getVentures = (): Project[] => {
  return getProjectsByCategory('orivon-venture');
};

export const getCaseStudies = (): Project[] => {
  return getProjectsByCategory('client-solution');
};
