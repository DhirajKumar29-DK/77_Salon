'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';
  delay?: number; // Delay in milliseconds
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '',
  animation = 'fade-up',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Play animation EVERY time the element enters or leaves the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    if (prefersReducedMotion) return 'opacity-100 translate-y-0 scale-100';

    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12';
      case 'fade-down':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-12';
      case 'fade-left':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-12';
      case 'fade-right':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95';
      case 'fade-in':
      default:
        return isVisible 
          ? 'opacity-100' 
          : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

