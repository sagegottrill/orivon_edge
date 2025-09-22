import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slider3DProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  className?: string;
}

const Slider3D: React.FC<Slider3DProps> = ({
  children,
  autoPlay = true,
  autoPlayInterval = 4000,
  showControls = true,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % children.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    const totalSlides = children.length;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(totalSlides - 1)) return 'right';
    if (diff === -1 || diff === totalSlides - 1) return 'left';
    if (diff > 0) return 'far-right';
    return 'far-left';
  };

  const getSlideStyles = (position: string) => {
    const baseStyles = 'absolute top-0 transition-all duration-600 ease-in-out';
    
    switch (position) {
      case 'center':
        return `${baseStyles} left-1/2 transform -translate-x-1/2 scale-100 z-30 opacity-100`;
      case 'left':
        return `${baseStyles} left-1/4 transform -translate-x-1/2 scale-75 z-20 opacity-70 -rotate-y-45`;
      case 'right':
        return `${baseStyles} right-1/4 transform translate-x-1/2 scale-75 z-20 opacity-70 rotate-y-45`;
      case 'far-left':
        return `${baseStyles} left-0 transform -translate-x-full scale-50 z-10 opacity-0`;
      case 'far-right':
        return `${baseStyles} right-0 transform translate-x-full scale-50 z-10 opacity-0`;
      default:
        return `${baseStyles} opacity-0 scale-50 z-0`;
    }
  };

  return (
    <div className={cn('relative w-full h-96 perspective-1000', className)}>
      {/* 3D Slider Container */}
      <div className="relative w-full h-full preserve-3d">
        {children.map((child, index) => (
          <div
            key={index}
            className={getSlideStyles(getSlidePosition(index))}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider3D;