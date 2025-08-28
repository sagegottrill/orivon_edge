import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { 
  Globe, 
  Database, 
  DeviceMobile, 
  Palette, 
  Lightning, 
  Code,
  CaretRight,
  CheckCircle,
  Clock,
  Money,
  CalendarCheck,
  User
} from '@phosphor-icons/react';
import InnerPageLayout from '@/components/InnerPageLayout';

const budgetRanges = [
  {
    label: '₦500k - ₦2M',
    value: '500k-2m',
    description: 'Ideal for MVPs and small projects'
  },
  {
    label: '₦2M - ₦10M',
    value: '2m-10m',
    description: 'Perfect for medium-sized applications'
  },
  {
    label: '₦10M+',
    value: '10m+',
    description: 'Enterprise-level solutions'
  }
];

const timelines = [
  {
    label: 'ASAP',
    value: 'asap',
    description: 'Urgent implementation needed'
  },
  {
    label: '1-3 months',
    value: '1-3',
    description: 'Standard development cycle'
  },
  {
    label: '6+ months',
    value: '6+',
    description: 'Long-term development plan'
  }
];

const projectTypes = [
  {
    icon: <Globe size={32} weight="duotone" />,
    title: 'Web App',
    description: 'Modern web applications and SaaS platforms'
  },
  {
    icon: <Database size={32} weight="duotone" />,
    title: 'MIS',
    description: 'Management Information Systems'
  },
  {
    icon: <DeviceMobile size={32} weight="duotone" />,
    title: 'Mobile App',
    description: 'Native iOS and Android applications'
  },
  {
    icon: <Palette size={32} weight="duotone" />,
    title: 'Branding',
    description: 'Brand identity and design systems'
  },
  {
    icon: <Lightning size={32} weight="duotone" />,
    title: 'EV Tech',
    description: 'Electric Vehicle Technology Solutions'
  },
  {
    icon: <Code size={32} weight="duotone" />,
    title: 'Other',
    description: 'Custom technology solutions'
  }
];

const StartProject: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: 0,
    timeline: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  if (isSubmitted) {
    return (
      <InnerPageLayout>
        <section className="min-h-screen bg-black relative overflow-hidden py-20">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-950/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
          </div>

          <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
            <Card className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border-white/10 text-white p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle size={48} weight="duotone" className="text-green-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
                  Thank You for Choosing Us!
                </h2>
                <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
                  We've received your project details and our team will contact you within 24 hours to discuss next steps.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6 text-left">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                    <CalendarCheck size={24} className="text-blue-400" />
                    Next Steps
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Review of your requirements</li>
                    <li>• Project scope definition</li>
                    <li>• Initial consultation call</li>
                    <li>• Custom proposal preparation</li>
                  </ul>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6 text-left">
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                    <Clock size={24} className="text-blue-400" />
                    Timeline
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• First contact: Within 24 hours</li>
                    <li>• Initial meeting: Within 48 hours</li>
                    <li>• Proposal delivery: Within 72 hours</li>
                    <li>• Project kickoff: ASAP after approval</li>
                  </ul>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">While You Wait</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="/portfolio" 
                    className="backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 p-4 rounded-xl transition-all duration-300"
                  >
                    View Our Portfolio
                  </a>
                  <a 
                    href="/case-studies" 
                    className="backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 p-4 rounded-xl transition-all duration-300"
                  >
                    Read Case Studies
                  </a>
                </div>
              </div>
            </Card>
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

        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
              Start Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Project</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Let's bring your vision to life with cutting-edge technology
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= stepNumber ? 'bg-blue-500' : 'bg-white/10'
                  } transition-colors duration-300`}>
                    {step > stepNumber ? (
                      <CheckCircle size={24} weight="fill" className="text-white" />
                    ) : (
                      <span className="text-white font-medium">{stepNumber}</span>
                    )}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`h-1 w-16 ${
                      step > stepNumber ? 'bg-blue-500' : 'bg-white/10'
                    } transition-colors duration-300`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Card className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border-white/10 text-white p-8">
            {step === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3">
                  <Code size={28} className="text-blue-400" />
                  What type of project are you looking to build?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, projectType: type.title }));
                        setStep(2);
                      }}
                      className={`p-6 rounded-2xl border ${
                        formData.projectType === type.title
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-white/10 hover:border-blue-400/30 hover:bg-white/5'
                      } text-center transition-all duration-300 group`}
                    >
                      <div className="flex justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-medium mb-2">{type.title}</h3>
                      <p className="text-sm text-gray-300 font-light">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3 mb-6">
                      <Money size={28} className="text-blue-400" />
                      What's your budget range?
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">₦0</span>
                          <span className="text-lg font-medium text-white">
                            ₦{formData.budget > 0 ? formData.budget.toLocaleString() : '0'}
                          </span>
                          <span className="text-sm text-gray-400">₦50M+</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50000000"
                          step="50000"
                          value={formData.budget}
                          onChange={(e) => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(formData.budget / 50000000) * 100}%, rgba(255,255,255,0.1) ${(formData.budget / 50000000) * 100}%, rgba(255,255,255,0.1) 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Minimum budget</span>
                          <span>Maximum budget</span>
                        </div>
                      </div>

                      {/* Budget Range Suggestions */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                        <button
                          onClick={() => setFormData(prev => ({ ...prev, budget: 750000 }))}
                          className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                            formData.budget === 750000
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-white/10 hover:border-blue-400/30 hover:bg-white/5'
                          }`}
                        >
                          <h4 className="text-sm font-medium mb-1">₦500k - ₦1M</h4>
                          <p className="text-xs text-gray-400">MVPs & Small Projects</p>
                        </button>
                        <button
                          onClick={() => setFormData(prev => ({ ...prev, budget: 6000000 }))}
                          className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                            formData.budget === 6000000
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-white/10 hover:border-blue-400/30 hover:bg-white/5'
                          }`}
                        >
                          <h4 className="text-sm font-medium mb-1">₦2M - ₦10M</h4>
                          <p className="text-xs text-gray-400">Medium Applications</p>
                        </button>
                        <button
                          onClick={() => setFormData(prev => ({ ...prev, budget: 25000000 }))}
                          className={`p-4 rounded-xl border text-center transition-all duration-300 ${
                            formData.budget === 25000000
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-white/10 hover:border-blue-400/30 hover:bg-white/5'
                          }`}
                        >
                          <h4 className="text-sm font-medium mb-1">₦10M+</h4>
                          <p className="text-xs text-gray-400">Enterprise Solutions</p>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3 mb-6">
                      <Clock size={28} className="text-blue-400" />
                      What's your expected timeline?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {timelines.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setFormData(prev => ({ ...prev, timeline: time.value }))}
                          className={`p-6 rounded-2xl border ${
                            formData.timeline === time.value
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-white/10 hover:border-blue-400/30 hover:bg-white/5'
                          } text-center transition-all duration-300`}
                        >
                          <h3 className="text-lg font-medium mb-2">{time.label}</h3>
                          <p className="text-sm text-gray-300 font-light">{time.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={formData.budget <= 0 || !formData.timeline}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-2xl font-medium tracking-tight flex items-center gap-3">
                  <User size={28} className="text-blue-400" />
                  Your Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white inline-flex items-center gap-2"
                  >
                    Submit Project Details
                    <CaretRight size={20} weight="bold" />
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>
    </InnerPageLayout>
  );
  }
export default StartProject;
