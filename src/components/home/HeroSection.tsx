'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    tag: 'STYLE • BEAUTY • CARE',
    titleLine1: 'The Art of',
    titleLine2: 'Bespoke Refinement',
    description: 'An elevated salon sanctuary where precision hair architecture, restorative dermal therapies, and couture nail artistry meet uncompromising luxury.',
    image: '/images/pdf/pdf_facial_glow_xref10_2000x1143.jpeg',
    primaryBtnText: 'BOOK APPOINTMENT',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'VIEW PRICE BOOK',
    secondaryBtnLink: '/pricing',
  },
  {
    id: 'slide-2',
    tag: 'PRECISION HAIR ARCHITECTURE',
    titleLine1: 'Master Cuts &',
    titleLine2: 'Bespoke Balayage',
    description: 'Indulgent Moroccan argan oil hair spas, signature French balayage, and master scissor craft tailored to your personal aesthetic silhouette.',
    image: '/images/pdf/pdf_men_hair_spa_xref32_2000x1331.jpeg',
    primaryBtnText: 'RESERVE HAIR SPA',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'VIEW PRICE BOOK',
    secondaryBtnLink: '/pricing',
  },
  {
    id: 'slide-3',
    tag: 'COUTURE NAILS & FOOT WELLNESS',
    titleLine1: 'Luxury Pedicure &',
    titleLine2: 'Sculpted Gel Art',
    description: 'Restorative organic Ice Cream paraffin pedicures and editorial nail extensions sculpted with precision Italian craftsmanship.',
    image: '/images/pdf/pdf_gel_polish_xref18_2000x1334.jpeg',
    primaryBtnText: 'BOOK PEDICURE',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'VIEW PRICE BOOK',
    secondaryBtnLink: '/pricing',
  },
  {
    id: 'slide-4',
    tag: 'BRIDAL & UNISEX SANCTUARY',
    titleLine1: 'Timeless Glow &',
    titleLine2: 'Bridal Excellence',
    description: 'Comprehensive bridal skin luminescence, restorative dermal care, and bespoke unisex grooming rituals for unforgettable moments.',
    image: '/images/pdf/pdf_facial_hydra_xref14_2000x996.jpeg',
    primaryBtnText: 'EXPLORE BRIDAL',
    primaryBtnLink: '/bridal',
    secondaryBtnText: 'CONSULT ARTIST',
    secondaryBtnLink: '/contact',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Faster slide speed (2500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1a3f] text-[#f8fafc]">
      {/* Background Photography Slider with Fast Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={s.image}
              alt={s.titleLine2}
              fill
              priority={true}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Protective gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e22]/80 via-[#060e22]/50 to-[#060e22]/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/40 via-transparent to-[#060e22]/40 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#060e22]/90 via-[#060e22]/50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-end pt-48 pb-16 md:pb-24">
        <div
          key={slide.id}
          className="max-w-[900px] flex flex-col items-start transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <span className="inline-block px-3.5 py-1.5 bg-[#0a1a3f]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-sm text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#d4af37] uppercase shadow-lg">
              {slide.tag}
            </span>
          </div>

          {/* Headline matching other pages */}
          <h1 className="font-antic text-5xl sm:text-6xl lg:text-7xl font-light text-[#fdfbf5] leading-[1.1] tracking-tight mb-4 whitespace-pre-line drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="block">{slide.titleLine1}</span>
            <span className="block">{slide.titleLine2}</span>
          </h1>

          {/* Supporting Description Narrative */}
          <p className="font-sans text-sm sm:text-base text-[#f8fafc] font-normal leading-relaxed max-w-xl mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {slide.description}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href={slide.primaryBtnLink}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#d4af37] hover:bg-[#e5c568] text-[#060e22] text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] transition-all rounded-md w-full sm:w-auto"
            >
              <span>{slide.primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href={slide.secondaryBtnLink}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/50 hover:bg-white/5 text-[#f8fafc] text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] transition-all rounded-md w-full sm:w-auto"
            >
              <span>{slide.secondaryBtnText}</span>
            </Link>
          </div>

          {/* Slide Navigation Controls (Small Dashes) */}
          <div className="flex items-center gap-2 mt-16">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-[1px] ${
                  index === currentSlide 
                    ? 'w-6 h-1 bg-[#d4af37]' 
                    : 'w-4 h-1 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
