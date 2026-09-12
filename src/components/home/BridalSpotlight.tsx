import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Sparkles, ArrowRight, Star, Clock } from 'lucide-react';

const bridalServices = [
  { name: 'Bridal Glow Facial', detail: '90-min deep treatment', price: '₹3,500' },
  { name: 'Pre-Bridal Package', detail: 'Skin + Hair + Nails combo', price: 'On Consultation' },
  { name: 'Mehndi Preparation', detail: 'Hand exfoliation + moisture ritual', price: 'On Consultation' },
];

export const BridalSpotlight: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#060e22] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Subtle gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 90% 20%, rgba(212,175,55,0.06) 0%, transparent 55%)',
        }}
      />

      <ScrollReveal animation="fade-up">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              The Bridal Suite
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
            </span>
          </div>

          {/* Main Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden border-[3px] border-[#d4af37]">

            {/* Left: Image Panel */}
            <div className="relative min-h-[480px] lg:min-h-[600px] w-full group overflow-hidden">
              <Image
                src="/images/services/bridal-facial.jpg"
                alt="Bridal Glow at 77 SALON"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

              {/* Badge on image */}
              <div className="absolute top-6 left-6 bg-[#060e22]/90 backdrop-blur-md px-4 py-2 border-l-[3px] border-[#d4af37] shadow-xl flex items-center gap-2 rounded-r-md">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-bold">
                  Ceremony Skin Prep
                </span>
              </div>

              {/* Bottom text on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-white/90 text-xs font-light italic">
                  &ldquo;She looked luminous — like a painting come alive.&rdquo;
                </p>
                <span className="text-[#d4af37] text-[10px] uppercase tracking-wider font-semibold mt-1 block">— Priya S., Bride 2025</span>
              </div>
            </div>

            {/* Right: Content Panel */}
            <div className="bg-[#0a1a3f] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-7 border-l border-[#d4af37]/20">

              <div>
                <h2 className="font-antic text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#f8fafc] leading-[1.2]">
                  Luminous Perfection<br />
                  <span className="italic text-[#d4af37]">for Your Defining Moment.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                  Wedding preparation requires an unhurried, meticulous touch. Our bespoke <strong className="text-[#f8fafc] font-semibold">Bridal Glow Facial</strong> is specifically calibrated to hydrate, polish, and create a mirror-smooth canvas that catches every nuance of ceremonial light.
                </p>
              </div>

              {/* Service Cards */}
              <div className="space-y-3">
                {bridalServices.map((svc) => (
                  <div key={svc.name} className="flex items-center justify-between p-4 bg-[#060e22] border-[3px] border-[#d4af37]/30 hover:border-[#d4af37] rounded-xl transition-all duration-300 group/svc hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)]">
                    <div>
                      <h4 className="text-sm font-semibold text-[#f8fafc] group-hover/svc:text-[#d4af37] transition-colors">{svc.name}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-[#d4af37]/60" />
                        <p className="text-xs text-[#7d8fa3] font-light">{svc.detail}</p>
                      </div>
                    </div>
                    <span className="font-serif text-lg font-semibold text-[#d4af37] shrink-0 ml-4">{svc.price}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button href="/bridal" variant="primary" size="lg" className="w-full sm:w-auto font-bold shadow-[0_6px_20px_rgba(212,175,55,0.25)]">
                  View More Bridal Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-widest text-[#7d8fa3] hover:text-[#d4af37] font-semibold underline underline-offset-4 transition-colors self-center"
                >
                  Direct Facial Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
