import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! All our projects include support periods ranging from 3-12 months depending on the package. We also offer extended support plans for ongoing maintenance and updates."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure), and emerging technologies like AI/ML. We choose the best tech stack for your specific needs."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We have extensive experience integrating with existing systems, databases, and third-party services. We'll assess your current setup and recommend the best integration approach."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes development, testing, deployment, documentation, and initial support. We provide transparent quotes with no hidden fees. Additional features or extended support can be added as needed."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally. We have experience in remote collaboration and accommodate different time zones to ensure smooth communication throughout your project."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 text-balance leading-[0.9]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed text-balance">
            Got questions? We've got answers. Here are the most common questions our clients ask.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ProfessionalCard key={index} variant="glass" className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-blue-400 flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
            Schedule a Free Consultation
          </button>
        </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default FAQ;