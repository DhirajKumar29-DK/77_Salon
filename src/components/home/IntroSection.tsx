import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="bg-white text-[#060e22] py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Premium Botanical Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'url(/images/white-bg-pattern.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }}
      />
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image — fades in from left */}
          <ScrollReveal animation="fade-right" className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg group shadow-[0_15px_40px_rgba(0,0,0,0.1)] border-[3px] border-[#d4af37]">
              <div className="absolute inset-0 bg-[#d4af37]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <Image
                src="/images/services/manicure.jpg"
                alt="77 SALON Hand & Cuticle Sanctuary"
                fill
                className="object-cover opacity-100 transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <ScrollReveal animation="zoom-in" delay={300} className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 z-20">
              <div className="bg-white/95 backdrop-blur-md text-[#060e22] p-5 sm:p-6 border-[3px] border-[#d4af37] max-w-[260px] rounded-r-lg shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] block font-bold">
                  Unisex Philosophy
                </span>
                <p className="font-sans text-sm sm:text-base font-bold mt-2 text-[#060e22] uppercase tracking-wide">
                  Crafted for Discerning Men & Women
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* Right Column: Text — fades in from right */}
          <ScrollReveal animation="fade-left" delay={100} className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                Welcome to 77 SALON
              </span>
            </div>

            <h2 className="font-antic text-3xl sm:text-4xl lg:text-5xl font-light text-[#060e22] leading-[1.1]">
              Where elevated aesthetics meet intuitive personal care.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Founded on the pillars of <strong className="font-semibold text-[#d4af37]">STYLE, BEAUTY, AND CARE</strong>, 77 SALON is an intentional unisex retreat designed to elevate your everyday presence. We bring together dedicated stylists, nail artisans, and skin care specialists committed to meticulous technique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d4af37]/30">
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="p-5 h-full bg-[#f8fafc] border-[3px] border-[#d4af37]/60 hover:border-[#d4af37] rounded-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] group">
                  <span className="font-sans text-xl font-bold text-[#d4af37] block uppercase tracking-wide group-hover:scale-105 transition-transform duration-300 origin-left">Style</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Tailored silhouettes, high-gloss textures, and personalized aesthetics.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="p-5 h-full bg-[#f8fafc] border-[3px] border-[#d4af37]/60 hover:border-[#d4af37] rounded-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] group">
                  <span className="font-sans text-xl font-bold text-[#d4af37] block uppercase tracking-wide group-hover:scale-105 transition-transform duration-300 origin-left">Beauty</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Luminous skin therapies, nourishing hair botanicals, and hand-finished nail extensions.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={600}>
                <div className="p-5 h-full bg-[#f8fafc] border-[3px] border-[#d4af37]/60 hover:border-[#d4af37] rounded-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] group">
                  <span className="font-sans text-xl font-bold text-[#d4af37] block uppercase tracking-wide group-hover:scale-105 transition-transform duration-300 origin-left">Care</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Deeply relaxing rituals, unhurried attention, and uncompromising hygienic standards.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Button href="/about" variant="primary" size="md">
                Our Heritage & Philosophy
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
