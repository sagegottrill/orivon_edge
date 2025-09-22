import React from 'react';
import { Star, Quote } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalCarousel from '@/components/ui/professional-carousel';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "TechStart Inc",
  content: "Orivon Edge transformed our entire digital infrastructure and delivered beyond expectations; our productivity increased by 300%.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions", 
      content: "The AI solutions they built for us revolutionized our data processing. ROI was evident within the first month of deployment.",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, EduTech Pro",
      company: "EduTech Pro",
      content: "Professional, reliable, and innovative. They turned our vision into a scalable platform that serves thousands of students daily.",
      rating: 5,
      image: "/testimonial-3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/6.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Mild dim overlay for readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true"></div>
        {/* Soft vignette to slightly darken edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.0) 70%)'
          }}
          aria-hidden="true"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 text-balance leading-[0.9]">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <ProfessionalCarousel 
          itemsPerView={1}
          autoPlay={true}
          autoPlayInterval={8000}
          showDots={true}
          showArrows={true}
        >
          {testimonials.map((testimonial, index) => (
            <ProfessionalCard
              key={index}
              variant="glass"
              className="p-12 text-center max-w-4xl mx-auto"
            >
              <Quote size={48} className="text-blue-400 mx-auto mb-8" />
              
              <p className="text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </ProfessionalCarousel>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default Testimonials;