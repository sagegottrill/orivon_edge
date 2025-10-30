import React from 'react';
import { Star, Quote } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import ProfessionalCarousel from '@/components/ui/professional-carousel';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Malam Ibrahim Abdullahi",
      role: "Director, BICTDA",
      company: "Borno ICT Development Agency",
      content: "Orivon Edge solved what other companies said was impossible. Their offline-first approach brought digital education to 10,000+ students in remote areas. Teachers who spent 4 hours grading now do it in 30 minutes. We've seen a 40% improvement in student engagement, and the government is expanding this to all 1,000+ schools in our state. This platform has truly democratized education access in Borno State.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      name: "Dr. Sarah Adebayo",
      role: "Founder & Lead Wellness Consultant",
      company: "Beeloveds House", 
      content: "Before working with Orivon Edge, we were losing clients because they couldn't book appointments easily. Now, our online booking system handles everything automatically. Our bookings increased by 250% in just 3 months, and we've cut our administrative time in half. The mobile-responsive design means clients can book from anywhere, anytime. This investment paid for itself within the first month.",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      name: "Mrs. Amina Mohammed",
      role: "Executive Director",
      company: "SAV Women Foundation",
      content: "Orivon Edge didn't just build us a website—they gave us a voice. The impact storytelling features helped us share real stories of women we've empowered. Donations increased by 320%, and we grew our email list from 200 to over 5,000 supporters. The volunteer portal streamlined recruitment, and the donor dashboard keeps supporters engaged. We've been featured in 5 major media outlets since launch. Absolutely transformational for our mission.",
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