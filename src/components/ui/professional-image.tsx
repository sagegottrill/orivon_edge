import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  overlay?: boolean;
  children?: React.ReactNode;
}

const ProfessionalImage: React.FC<ProfessionalImageProps> = ({
  src,
  alt,
  className,
  fallback,
  aspectRatio = 'landscape',
  overlay = false,
  children
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  const defaultFallback = (
    <div className={cn(
      'w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center',
      aspectRatioClasses[aspectRatio]
    )}>
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Professional Content</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            High-quality visuals coming soon to enhance your experience
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      {src && !imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-all duration-700',
              aspectRatioClasses[aspectRatio],
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className={cn(
              'absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse',
              aspectRatioClasses[aspectRatio]
            )} />
          )}
        </>
      ) : (
        fallback || defaultFallback
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      )}
      
      {children && (
        <div className="absolute inset-0 flex items-end p-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProfessionalImage;