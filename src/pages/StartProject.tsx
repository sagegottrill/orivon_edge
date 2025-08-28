import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle, Code, Brain, Cloud, Database, Smartphone as Mobile, ArrowRight } from 'lucide-react';

const StartProject: React.FC = () => {
  console.log('StartProject component rendering');
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
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
      icon: <Code className="w-8 h-8 mb-4" />,
      title: 'Custom Software',
      description: 'Tailored solutions for your unique business needs'
    },
    {
      icon: <Brain className="w-8 h-8 mb-4" />,
      title: 'AI Integration',
      description: 'Smart automation and intelligent systems'
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration'
    },
    {
      icon: <Database className="w-8 h-8 mb-4" />,
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization'
    },
    {
      icon: <Mobile className="w-8 h-8 mb-4" />,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Start Your <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-xl text-gray-300">
            Let's bring your vision to life with cutting-edge technology
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNumber ? 'bg-blue-500' : 'bg-gray-700'
                } transition-colors duration-300`}>
                  {step > stepNumber ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white font-semibold">{stepNumber}</span>
                  )}
                </div>
                {stepNumber < 3 && (
                  <div className={`h-1 w-16 ${
                    step > stepNumber ? 'bg-blue-500' : 'bg-gray-700'
                  } transition-colors duration-300`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border-none text-white p-8">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Choose Your Project Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectTypes.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, projectType: type.title }));
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 ${
                      formData.projectType === type.title
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-gray-700 hover:border-blue-500/50'
                    } text-center transition-all duration-300`}
                  >
                    <div className="flex justify-center text-blue-400">{type.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-300">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="projectScale">Company Size</Label>
                  <select
                    id="projectScale"
                    name="projectScale"
                    value={formData.projectScale}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-2 border-gray-700 rounded-lg p-3 text-white"
                    required
                  >
                    <option value="">Select company size</option>
                    {projectScales.map((scale) => (
                      <option key={scale} value={scale}>{scale}</option>
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
                    className="w-full bg-white/10 border-2 border-gray-700 rounded-lg p-3 text-white"
                    required
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
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
                    className="w-full bg-white/10 border-2 border-gray-700 rounded-lg p-3 text-white"
                    required
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
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
                    className="w-full bg-white/10 border-2 border-gray-700 rounded-lg p-3 text-white h-32"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!formData.projectScale || !formData.timeline || !formData.budget || !formData.requirements}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-2 border-gray-700"
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
                    className="bg-white/10 border-2 border-gray-700"
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
                    className="bg-white/10 border-2 border-gray-700"
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
                    className="bg-white/10 border-2 border-gray-700"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-white/10"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white inline-flex items-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default StartProject;
