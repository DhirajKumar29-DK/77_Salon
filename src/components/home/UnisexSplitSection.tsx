import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const UnisexSplitSection: React.FC = () => {
  return (
    <section className="bg-[#0a1a3f] text-[#f8fafc] py-14 sm:py-20 relative border-t border-[#d4af37]/20 overflow-hidden">
      {/* Subtle dark radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold">
                Egalitarian Luxury
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <h2 className="font-antic text-4xl sm:text-5xl md:text-6xl font-light text-[#fdfbf5] tracking-tight leading-[1.15] mb-6">
              Tailored Care for<br className="hidden sm:block" /> <span className="text-[#d4af37] italic">Every Client.</span>
            </h2>
            <p className="text-[#cbd5e1] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              77 SALON is curated for modern elegance — offering specialized styling, restorative spas, and meticulous grooming for both women and men.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Split Screen 50/50 Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Panel 1: For Her (Left Card - fades in from left) */}
          <ScrollReveal animation="fade-right" delay={100} className="h-full">
            <div className="relative group overflow-hidden bg-[#060e22] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-colors duration-500 min-h-[450px] sm:min-h-[500px] flex flex-col justify-end p-8 sm:p-12 rounded-lg cursor-pointer">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/brand/home_hero_hair.jpg"
                  alt="For Her treatments at 77 SALON"
                  fill
                  className="object-cover object-center opacity-100 transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#060e22] via-[#060e22]/60 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/40 pb-1.5">
                  Refined Elegance
                </span>
                <h3 className="font-antic text-4xl sm:text-5xl font-light text-[#fdfbf5] tracking-tight">
                  FOR HER
                </h3>
                <p className="text-sm text-[#cbd5e1] font-light leading-relaxed max-w-sm mb-6">
                  From Moroccan Argan Hair Spas and Global Hair Colour to Hydra Facials, Bridal Glow treatments, French gel polish, and sculpted extensions.
                </p>

                <div className="pt-4">
                  <Link
                    href="/services/hair-women"
                    className="inline-flex items-center text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] group/btn hover:text-[#fdfbf5] transition-colors"
                  >
                    Explore Women's Services
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 2: For Him (Right Card - fades in from right) */}
          <ScrollReveal animation="fade-left" delay={200} className="h-full">
            <div className="relative group overflow-hidden bg-[#060e22] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-colors duration-500 min-h-[450px] sm:min-h-[500px] flex flex-col justify-end p-8 sm:p-12 rounded-lg cursor-pointer">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/services/hair-men.jpg"
                  alt="For Him grooming at 77 SALON"
                  fill
                  className="object-cover object-center opacity-100 transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#060e22] via-[#060e22]/60 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/40 pb-1.5">
                  Executive Precision
                </span>
                <h3 className="font-antic text-4xl sm:text-5xl font-light text-[#fdfbf5] tracking-tight">
                  FOR HIM
                </h3>
                <p className="text-sm text-[#cbd5e1] font-light leading-relaxed max-w-sm mb-6">
                  Precision taper and fade haircuts, hot-towel clean shaves, beard contouring & colour, Keratin scalp therapy, and invigorating head oil massages.
                </p>

                <div className="pt-4">
                  <Link
                    href="/services/hair-men"
                    className="inline-flex items-center text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] group/btn hover:text-[#fdfbf5] transition-colors"
                  >
                    Explore Men's Services
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
