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
    titleLine1: 'THE ART OF',
    titleLine2: 'BESPOKE REFINEMENT',
    description: 'An elevated salon sanctuary where precision hair architecture, clinical dermal therapies, and couture nail artistry meet uncompromising luxury.',
    image: '/images/services/facial.jpg',
    primaryBtnText: 'BOOK APPOINTMENT',
    primaryBtnLink: '/book',
    secondaryBtnText: 'EXPLORE SERVICES',
    secondaryBtnLink: '/services',
  },
  {
    id: 'slide-2',
    tag: 'PRECISION HAIR ARCHITECTURE',
    titleLine1: 'MASTER CUTS &',
    titleLine2: 'BESPOKE BALAYAGE',
    description: 'Indulgent Moroccan argan oil hair spas, signature French balayage, and master scissor craft tailored to your personal aesthetic silhouette.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80',
    primaryBtnText: 'RESERVE HAIR SPA',
    primaryBtnLink: '/services/hair-women',
    secondaryBtnText: 'VIEW PRICE BOOK',
    secondaryBtnLink: '/pricing',
  },
  {
    id: 'slide-3',
    tag: 'COUTURE NAILS & FOOT WELLNESS',
    titleLine1: 'LUXURY PEDICURE &',
    titleLine2: 'SCULPTED GEL ART',
    description: 'Restorative organic Ice Cream paraffin pedicures and editorial nail extensions sculpted with precision Italian craftsmanship.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1920&q=80',
    primaryBtnText: 'BOOK PEDICURE',
    primaryBtnLink: '/services/pedicure',
    secondaryBtnText: 'EXPLORE NAIL ART',
    secondaryBtnLink: '/services/nail-extension',
  },
  {
    id: 'slide-4',
    tag: 'BRIDAL & UNISEX SANCTUARY',
    titleLine1: 'TIMELESS GLOW &',
    titleLine2: 'BRIDAL EXCELLENCE',
    description: 'Comprehensive bridal skin luminescence, clinical hydra extractions, and bespoke unisex grooming rituals for unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80',
    primaryBtnText: 'EXPLORE BRIDAL',
    primaryBtnLink: '/bridal',
    secondaryBtnText: 'CONSULT ARTIST',
    secondaryBtnLink: '/contact',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Faster slide speed (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
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
    <section className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center overflow-hidden bg-[#0a1a3f] text-[#f8fafc]">
      {/* Background Photography Slider with Fast Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={s.image}
              alt={s.titleLine2}
              fill
              priority={index === 0}
              className="object-cover object-right md:object-center scale-105 transition-transform duration-700"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Left Vignette for High Text Contrast while keeping the model image clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e22]/95 via-[#060e22]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/80 via-transparent to-black/20 z-10" />
      </div>

      {/* Hero Content (Positioned slightly higher up with translate-y-0/1) */}
      <div className="relative z-20 w-full max-w-[1600px] mr-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 flex flex-col justify-center">
        <div
          key={slide.id}
          className="max-w-xl lg:max-w-2xl text-left translate-y-0 sm:translate-y-1 lg:translate-y-2 transition-all duration-500 ease-out"
        >
          {/* Eyebrow Tag */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-3 sm:mb-4 block">
            {slide.tag}
          </span>

          {/* High-Impact Dual-Tone Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]">
            <span className="text-[#f8fafc] block">{slide.titleLine1}</span>
            <span className="text-[#d4af37] block mt-1">{slide.titleLine2}</span>
          </h1>

          {/* Supporting Description Narrative */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#cbd5e1] font-light leading-relaxed max-w-xl">
            {slide.description}
          </p>

          {/* Action Buttons Matching Reference */}
          <div className="mt-8 sm:mt-9 flex flex-row flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href={slide.primaryBtnLink}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#d4af37] hover:bg-[#e5c568] text-[#060e22] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-[0_4px_25px_rgba(212,175,55,0.35)] group"
            >
              <span>{slide.primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={slide.secondaryBtnLink}
              className="inline-flex items-center px-7 py-4 border border-white/25 hover:border-[#d4af37] bg-black/20 hover:bg-white/5 text-[#f8fafc] hover:text-[#d4af37] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all"
            >
              <span>{slide.secondaryBtnText}</span>
            </Link>
          </div>

          {/* Slide Navigation Controls (Small Dashes) */}
          <div className="flex items-center gap-2 mt-9 sm:mt-11">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-6 h-1 bg-[#d4af37]' 
                    : 'w-3 h-1 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
