import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.05,
  transitionDuration = 300,
  glareEnable = true,
  glareMaxOpacity = 0.2
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngle;
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngle;

    const transformString = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    setTransform(transformString);

    if (glareEnable) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      const glareOpacity = Math.min(
        Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) / 
        Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2)) * glareMaxOpacity,
        glareMaxOpacity
      );

      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`,
        opacity: 1
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('');
    setGlareStyle({});
  };

  return (
    <div
      ref={ref}
      className={cn('relative transition-transform', className)}
      style={{
        transform,
        transitionDuration: isHovered ? '0ms' : `${transitionDuration}ms`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnable && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={glareStyle}
        />
      )}
    </div>
  );
};

export default TiltCard;