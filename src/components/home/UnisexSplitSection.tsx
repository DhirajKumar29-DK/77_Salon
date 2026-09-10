import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const UnisexSplitSection: React.FC = () => {
  return (
    <section className="bg-[#060e22] text-[#f8fafc] py-16 lg:py-20 relative border-t border-b border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block mb-2">
          Egalitarian Luxury
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
          Tailored Care for Every Client.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#cbd5e1] font-light max-w-xl mx-auto">
          77 SALON is curated for modern elegance — offering specialized styling, restorative spas, and meticulous grooming for both women and men.
        </p>
      </div>

      {/* Split Screen 50/50 Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel 1: For Her */}
          <div className="relative group overflow-hidden bg-[#0a1a3f] border border-[#d4af37]/40 min-h-[520px] flex flex-col justify-end p-8 sm:p-12 shadow-2xl rounded-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/services/bridal-facial.jpg"
                alt="For Her treatments at 77 SALON"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/50 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-medium border-b border-[#d4af37]/40 pb-1">
                Refined Elegance
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-wide">
                FOR HER
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-md">
                From Moroccan Argan Hair Spas and Global Hair Colour to Hydra Facials, Bridal Glow treatments, French gel polish, and sculpted extensions.
              </p>

              <div className="pt-2">
                <Button
                  href="/services/hair-women"
                  variant="primary"
                  size="md"
                  className="font-semibold shadow-lg"
                >
                  Explore Women’s Services
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Panel 2: For Him */}
          <div className="relative group overflow-hidden bg-[#0a1a3f] border border-[#d4af37]/40 min-h-[520px] flex flex-col justify-end p-8 sm:p-12 shadow-2xl rounded-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/services/hair-men.jpg"
                alt="For Him grooming at 77 SALON"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/50 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-medium border-b border-[#d4af37]/40 pb-1">
                Executive Precision
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-wide">
                FOR HIM
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-md">
                Precision taper and fade haircuts, hot-towel clean shaves, beard contouring & colour, Keratin scalp therapy, and invigorating head oil massages.
              </p>

              <div className="pt-2">
                <Button
                  href="/services/hair-men"
                  variant="primary"
                  size="md"
                  className="font-semibold shadow-lg"
                >
                  Explore Men’s Services
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
