import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle, Gift, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Popup */}
      <ProfessionalCard 
        variant="gradient" 
        className={cn(
          "relative max-w-md w-full mobile-spacing animate-scale-in",
          "border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-8 h-8 text-blue-400" />
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Your FREE Tech Audit
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Download our comprehensive 25-point technology assessment checklist 
                and discover hidden opportunities in your business.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {[
                "Identify security vulnerabilities",
                "Optimize performance bottlenecks", 
                "Discover automation opportunities",
                "Get personalized recommendations"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="glass-effect rounded-xl border border-white/10 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 glow-effect hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
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
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400">
                🔒 No spam. Unsubscribe anytime. Used by 500+ businesses.
              </p>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">
              Check Your Email!
            </h3>
            
            <p className="text-gray-300 text-sm">
              Your FREE Tech Audit checklist is on its way. 
              Check your inbox (and spam folder) in the next few minutes.
            </p>
            
            <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-blue-400 text-xs">
                💡 Pro tip: Add us to your contacts to never miss our insights!
              </p>
            </div>
          </div>
        )}
      </ProfessionalCard>
    </div>
  );
};

export default NewsletterPopup;