import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden shadow-2xl border-2 border-[#d4af37]/60">
              <Image
                src="/images/services/manicure.jpg"
                alt="77 SALON Hand & Cuticle Sanctuary"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-[#060e22] text-[#f8fafc] p-5 sm:p-6 shadow-2xl border-l-4 border-[#d4af37] border-t border-r border-b border-[#d4af37]/30 max-w-[250px]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] block font-semibold">
                Unisex Philosophy
              </span>
              <p className="font-serif text-lg sm:text-xl font-light mt-1 text-[#f8fafc]">
                Crafted for Discerning Men & Women
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                Welcome to 77 SALON
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#f8fafc] tracking-tight leading-[1.2]">
              Where elevated aesthetics meet intuitive personal care.
            </h2>

            <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
              Founded on the pillars of <strong className="font-semibold text-[#d4af37]">Style, Beauty, and Care</strong>, 77 SALON is an intentional unisex retreat designed to elevate your everyday presence. We bring together certified master stylists, nail artisans, and skin therapists dedicated to meticulous technique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#d4af37]/30">
              <div className="p-4 bg-[#0f2352]/50 border border-[#d4af37]/20 rounded">
                <span className="font-serif text-2xl text-[#d4af37] block">Style</span>
                <p className="text-xs text-[#cbd5e1] mt-1 leading-relaxed">
                  Tailored silhouettes, high-gloss textures, and personalized aesthetics.
                </p>
              </div>
              <div className="p-4 bg-[#0f2352]/50 border border-[#d4af37]/20 rounded">
                <span className="font-serif text-2xl text-[#d4af37] block">Beauty</span>
                <p className="text-xs text-[#cbd5e1] mt-1 leading-relaxed">
                  Luminous skin therapies, nourishing hair botanicals, and hand-finished nail extensions.
                </p>
              </div>
              <div className="p-4 bg-[#0f2352]/50 border border-[#d4af37]/20 rounded">
                <span className="font-serif text-2xl text-[#d4af37] block">Care</span>
                <p className="text-xs text-[#cbd5e1] mt-1 leading-relaxed">
                  Deeply relaxing rituals, unhurried attention, and uncompromising hygienic standards.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Button href="/about" variant="primary" size="md">
                Our Heritage & Philosophy
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Link
                href="/services"
                className="text-xs uppercase tracking-widest text-[#cbd5e1] hover:text-[#d4af37] font-semibold transition-colors"
              >
                Browse Treatments →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
