import React, { useState } from 'react';
import { Calendar, Clock, Check, Users } from '@phosphor-icons/react';
import InnerPageLayout from '@/components/InnerPageLayout';
import { NeonCard } from "@/components/ui/neon-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const BookConsultation: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    challenge: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with backend/email service for auto-email and nurture drip
  };

  if (submitted) {
    return (
      <InnerPageLayout>
        <section className="min-h-screen bg-black relative overflow-hidden py-20">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
            <NeonCard className="text-white p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
                  <Check size={48} weight="duotone" className="text-green-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
                  Thank You for Booking Your Consultation!
                </h2>
                <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
                  Check your email for next steps and a detailed overview of our services.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <NeonCard className="p-6 text-left">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                    <Calendar size={24} className="text-blue-400" />
                    What Happens Next
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Confirmation email within 5 minutes</li>
                    <li>• Calendly link to schedule your call</li>
                    <li>• Pre-call questionnaire</li>
                    <li>• 30-minute consultation call</li>
                  </ul>
                </NeonCard>

                <NeonCard className="p-6 text-left">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                    <Clock size={24} className="text-blue-400" />
                    During Your Call
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Understand your challenges</li>
                    <li>• Explore possible solutions</li>
                    <li>• Discuss budget & timeline</li>
                    <li>• Next steps recommendation</li>
                  </ul>
                </NeonCard>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">While You Wait</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <NeonCard className="p-0">
                    <a href="/portfolio" className="block p-4 rounded-xl hover:bg-white/5 transition-colors">View Our Portfolio</a>
                  </NeonCard>
                  <NeonCard className="p-0">
                    <a href="/services" className="block p-4 rounded-xl hover:bg-white/5 transition-colors">Explore Services</a>
                  </NeonCard>
                </div>
              </div>
            </NeonCard>
          </div>
        </section>
      </InnerPageLayout>
    );
  }

  return (
    <InnerPageLayout>
      <section className="min-h-screen bg-black relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
              Get Expert Advice Before You <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Invest in Tech</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Free 30-minute consultation to discuss your challenges and explore possible solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Form Section */}
            <div className="mb-12">
              <NeonCard className="text-white p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-medium tracking-tight mb-4">Book Your Free Consultation</h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Get expert advice on your tech challenges. No pressure, just valuable insights.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-transparent h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-transparent h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base font-medium">WhatsApp/Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3 md:col-span-2">
                      <Label htmlFor="challenge" className="text-base font-medium">Brief Challenge Description</Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        placeholder="What's your biggest challenge right now?"
                        className="w-full h-40 resize-none bg-transparent text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-12 text-lg font-medium rounded-xl"
                    >
                      Book My Free Consultation
                    </Button>
                  </div>
                </form>
              </NeonCard>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* What You'll Get */}
              <NeonCard className="p-8 text-white">
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                  <Users size={28} className="text-blue-400" />
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Clear advice on your specific challenge</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Roadmap ideas tailored to your goals</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Honest feedback on feasibility & fit</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">No sales pressure, just valuable insights</span>
                  </li>
                </ul>
              </NeonCard>

              {/* Why Choose Us */}
              <NeonCard className="p-8 text-white">
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                  <Check size={24} className="text-blue-400" />
                  Why Choose Our Consultation
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Expert team with 10+ years experience</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Free, no-obligation professional advice</span>
                  </li>
                </ul>
              </NeonCard>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
};

export default BookConsultation;
