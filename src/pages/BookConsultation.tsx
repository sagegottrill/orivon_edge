import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Check } from '@phosphor-icons/react';

const availableTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM'
];

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
      <section className="min-h-screen bg-black py-20 flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-medium mb-4">Thank you for booking your consultation!</h2>
            <p className="mb-6">Check your email for next steps, including case studies and a 1-pager PDF on our services.</p>
            <a href="/case-studies" className="underline text-blue-400">View Case Studies</a>
            <br />
            <a href="/services.pdf" className="underline text-blue-400">Download Our Services PDF</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black py-20 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
          <h1 className="text-4xl font-medium mb-4">Not sure what you need? Let’s talk.</h1>
          <p className="mb-6 text-lg">Book a free 15–30 min consultation. We’ll help you clarify your biggest challenge and next steps.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded bg-black/20 border border-white/10 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded bg-black/20 border border-white/10 text-white" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded bg-black/20 border border-white/10 text-white" />
            </div>
            <div>
              <label htmlFor="challenge" className="block mb-2">What’s your biggest challenge right now?</label>
              <textarea id="challenge" name="challenge" value={form.challenge} onChange={handleChange} required className="w-full p-2 rounded bg-black/20 border border-white/10 text-white" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-medium">Book Consultation</button>
          </form>
          <div className="mt-10">
            <h2 className="text-xl font-medium mb-2">Pick a time:</h2>
            <iframe src="https://calendly.com/your-calendly-link" width="100%" height="500" frameBorder="0" title="Calendly Booking" className="rounded-xl border-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
