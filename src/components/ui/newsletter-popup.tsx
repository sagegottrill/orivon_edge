import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle, Shield, Zap, Cog, TrendingUp, Mail } from 'lucide-react';
import ProfessionalCard from '@/components/ui/professional-card';
import { cn } from '@/lib/utils';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            Get Your FREE Tech Audit
          </h2>
          
          <p className="text-blue-100 text-sm leading-relaxed max-w-sm mx-auto">
            Download our comprehensive 25-point technology assessment checklist and discover hidden opportunities in your business.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X size={16} />
        </button>

        {!isSubmitted ? (
          <div className="px-6 py-6">
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Shield, text: "Identify security vulnerabilities" },
                { icon: Zap, text: "Optimize performance bottlenecks" },
                { icon: Cog, text: "Discover automation opportunities" },
                { icon: TrendingUp, text: "Get personalized recommendations" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    Get FREE Tech Audit
                  </>
                )}
              </button>
            </form>

            {/* Trust indicators */}
            <div className="text-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                🔒 No spam. Unsubscribe anytime. Used by 500+ businesses.
              </p>
            </div>
          </div>
        ) : (
          /* Success state */
          <div className="px-6 py-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Check Your Email!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Your FREE Tech Audit checklist is on its way. 
              Check your inbox (and spam folder) in the next few minutes.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <p className="text-blue-800 dark:text-blue-300 text-xs">
                💡 Pro tip: Add us to your contacts to never miss our insights!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;