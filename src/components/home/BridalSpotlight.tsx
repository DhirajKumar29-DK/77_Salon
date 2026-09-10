import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BridalSpotlight: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#060e22] text-[#f8fafc] overflow-hidden shadow-2xl border-2 border-[#d4af37]/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[520px] w-full">
              <Image
                src="/images/services/bridal-facial.jpg"
                alt="Bridal Glow at 77 SALON"
                fill
                className="object-cover object-center opacity-100"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#060e22]/90" />
              
              <div className="absolute top-6 left-6 bg-[#0a1a3f]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#d4af37]/50 flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Ceremony Skin Preparation
                </span>
              </div>
            </div>

            {/* Right Editorial Narrative (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                  The Bridal Suite
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                Luminous Perfection for Your Defining Moment.
              </h2>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                Wedding preparation requires an unhurried, meticulous touch. At the center of our bridal skin regimen is the bespoke <strong>Bridal Glow Facial</strong> — specifically calibrated to hydrate, polish, and create a mirror-smooth canvas that catches every nuance of ceremonial light.
              </p>

              {/* Exact Service from PDF */}
              <div className="p-6 bg-[#0a1a3f] border border-[#d4af37]/45 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl rounded-md">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block">
                    Featured Ritual
                  </span>
                  <h3 className="font-serif text-2xl text-white">Bridal Glow Facial</h3>
                  <p className="text-xs text-[#cbd5e1] mt-1 font-light">
                    Extended premium bridal skin treatment (90 minutes)
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-serif text-3xl sm:text-4xl text-[#d4af37] block font-semibold">
                    ₹3,500
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">
                    Exact PDF Price
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/bridal" variant="primary" size="lg" className="w-full sm:w-auto font-bold">
                  Book Bridal Consultation
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
                <Link
                  href="/book?service=facial-bridal-glow"
                  className="text-xs uppercase tracking-widest text-[#cbd5e1] hover:text-[#d4af37] font-medium underline underline-offset-4"
                >
                  Direct Facial Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
