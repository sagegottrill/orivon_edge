import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Check } from '@phosphor-icons/react';

const availableTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM'
];

const BookConsultation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Book Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Schedule a free consultation with our experts to discuss your project and explore solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                <Calendar size={32} weight="duotone" className="text-white" />
              </div>
              <h2 className="text-2xl font-medium text-white">Select Date & Time</h2>
            </div>

            {/* Calendar Component would go here */}
            <div className="bg-white/5 rounded-2xl p-6">
              {/* Placeholder for actual calendar */}
              <div className="h-64 flex items-center justify-center text-gray-400">
                Calendar Component
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
                <Clock size={20} weight="duotone" className="text-blue-400" />
                Available Time Slots
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {time}
                    {selectedTime === time && <Check size={16} weight="bold" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-medium text-white mb-8">Your Information</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-white font-medium">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project and what you'd like to discuss..."
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 mt-8">
              Schedule Consultation
              <ArrowRight size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
