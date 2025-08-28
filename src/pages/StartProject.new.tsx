import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle, Code, Brain, Cloud, Database, DeviceMobile, CaretRight } from '@phosphor-icons/react';
import InnerPageLayout from '@/components/InnerPageLayout';

const StartProject: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectScale: '',
    timeline: '',
    budget: '',
    requirements: '',
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const projectTypes = [
    {
      icon: <Code size={32} weight="duotone" />,
      title: 'Custom Software',
      description: 'Tailored solutions for your unique business needs'
    },
    {
      icon: <Brain size={32} weight="duotone" />,
      title: 'AI Integration',
      description: 'Smart automation and intelligent systems'
    },
    {
      icon: <Cloud size={32} weight="duotone" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration'
    },
    {
      icon: <Database size={32} weight="duotone" />,
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization'
    },
    {
      icon: <DeviceMobile size={32} weight="duotone" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    }
  ];

  const projectScales = [
    'Startup (1-10 employees)',
    'Small Business (11-50 employees)',
    'Medium Business (51-200 employees)',
    'Enterprise (201+ employees)'
  ];

  const timelines = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months'
  ];

  const budgetRanges = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/schedule');
  };

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
                <h2 className="text-2xl font-medium tracking-tight">Choose Your Project Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h2 className="text-2xl font-medium tracking-tight">Project Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="projectScale">Company Size</Label>
                    <select
                      id="projectScale"
                      name="projectScale"
                      value={formData.projectScale}
                      onChange={handleInputChange}
                      className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-white"
                      required
                    >
                      <option value="">Select company size</option>
                      {projectScales.map((scale) => (
                        <option key={scale} value={scale} className="bg-gray-900">{scale}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="timeline">Expected Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-white"
                      required
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time} className="bg-gray-900">{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-white"
                      required
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-gray-900">{range}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <Label htmlFor="requirements">Project Requirements</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project requirements..."
                      className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-white h-32 resize-none"
                      required
                    />
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
                    disabled={!formData.projectScale || !formData.timeline || !formData.budget || !formData.requirements}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-2xl font-medium tracking-tight">Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email">Email Address</Label>
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

                  <div className="space-y-4">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="backdrop-blur-xl bg-white/5 border border-white/10"
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
                    Schedule Consultation
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
};

export default StartProject;
