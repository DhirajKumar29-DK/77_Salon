import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbCurrent: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = '77 SALON',
  title,
  description,
  breadcrumbCurrent,
  bgImage = '/images/brand/pdf_cover.png',
}) => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#060e22] text-[#f8fafc] overflow-hidden border-b border-[#d4af37]/30">
      {/* Background Image with Crisp Luxury Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-100 scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#cbd5e1] mb-6">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]/60" />
          <span className="text-[#d4af37] uppercase tracking-wider">{breadcrumbCurrent}</span>
        </nav>

        {eyebrow && (
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-medium block mb-3">
            {eyebrow}
          </span>
        )}

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-light text-[#f8fafc] tracking-tight leading-[1.15] max-w-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#cbd5e1] font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
