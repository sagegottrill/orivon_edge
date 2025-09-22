import React from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  hover?: boolean;
  glow?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  glow = false,
  onMouseEnter,
  onMouseLeave
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-500';
  
  const variantClasses = {
    default: 'bg-card border border-border',
    glass: 'glass-effect',
    gradient: 'bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10',
    elevated: 'bg-card border border-border professional-shadow'
  };

  const hoverClasses = hover ? 'hover:scale-[1.02] hover:-translate-y-1' : '';
  const glowClasses = glow ? 'glow-effect' : '';

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ProfessionalCard;