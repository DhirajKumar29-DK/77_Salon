import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbCurrent?: string; // Kept for compatibility but we won't use it in the UI as per new design
  bgImage?: string;
  rightItalicText?: React.ReactNode;
  children?: React.ReactNode;
  hasOverlay?: boolean;
  overlayClasses?: string;
  heightClass?: string;
  contentClassName?: string;
  imagePositionClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = '77 SALON',
  title,
  description,
  breadcrumbCurrent,
  bgImage = '/images/brand/home_hero_hair.jpg',
  rightItalicText,
  children,
  hasOverlay = false,
  overlayClasses,
  heightClass = "min-h-[50vh] sm:min-h-[65vh]",
  contentClassName = "",
  imagePositionClass = "object-center"
}) => {
  return (
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          className={`object-cover ${imagePositionClass}`}
          priority
        />
      </div>
      {overlayClasses ? (
        <div className={overlayClasses} />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e22]/80 via-[#060e22]/50 to-[#060e22]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/40 via-transparent to-[#060e22]/40" />
        </>
      )}

      <div className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-end ${heightClass}`}>

        <div className={`flex flex-col items-start max-w-3xl relative z-20 ${contentClassName}`}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {eyebrow}
            </span>
          )}
          
          <h1 className="font-antic text-5xl sm:text-6xl lg:text-7xl font-light text-[#fdfbf5] leading-[1.1] tracking-tight mb-4 whitespace-pre-line drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
          
          {description && (
            <p className="text-base sm:text-lg text-[#e2e8f0] font-light mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-2xl">
              {description}
            </p>
          )}

          {children && (
            <div className="w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {children}
            </div>
          )}
        </div>
        
        {rightItalicText && (
          <div className="absolute top-10 right-10 hidden lg:block text-right">
            <p className="font-antic text-5xl text-[#d4af37]/80 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {rightItalicText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
