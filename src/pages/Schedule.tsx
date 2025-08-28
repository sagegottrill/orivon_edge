import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Clock, Calendar as CalendarIcon, Check, Home } from 'lucide-react';
import { addDays, format } from 'date-fns';

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = React.useState<string>('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    description: '',
  });
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM'
  ];

  const projectTypes = [
    'Digital Transformation',
    'Cloud Migration',
    'AI/ML Implementation',
    'Custom Software Development',
    'Enterprise Integration',
    'Security Assessment',
    'Technical Consultation',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ ...formData, date, timeSlot });
  };

  const goHome = () => navigate('/');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home button */}
        <div className="absolute top-24 left-4 sm:left-8">
          <Button
            variant="ghost"
            onClick={goHome}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule a <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let's discuss how we can help transform your business with technology
          </p>
        </div>

        {submitted ? (
          <Card className="max-w-2xl mx-auto p-8 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
            <div className="rounded-full bg-green-100 dark:bg-green-900 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Consultation Scheduled!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for scheduling a consultation. We'll send you a confirmation email with the meeting details shortly.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Schedule Details:</p>
              <p className="text-gray-600 dark:text-gray-300">
                {date && format(date, 'MMMM d, yyyy')} at {timeSlot}
              </p>
            </div>
            <Button
              onClick={goHome}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
            >
              Return to Homepage
            </Button>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto p-6 sm:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 1 ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
                <div className={`h-1 w-16 ${
                  step > 1 ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 2 ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className={`h-1 w-16 ${
                  step > 2 ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 3 ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Select a Date
                </h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  fromDate={new Date()}
                  toDate={addDays(new Date(), 30)}
                  className="rounded-md border mx-auto"
                />
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!date}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  >
                    Next: Select Time
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Select a Time Slot
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        timeSlot === slot
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!timeSlot}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  >
                    Next: Your Details
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Your Details
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Company Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      placeholder="Please provide a brief description of your project or requirements..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-semibold mb-2">Your selected time:</p>
                    <p>{date && format(date, 'MMMM d, yyyy')} at {timeSlot}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </form>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export { Schedule as default };
