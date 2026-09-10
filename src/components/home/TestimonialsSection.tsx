import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PLACEHOLDER_TESTIMONIALS } from '@/data/testimonials';
import { Star, ShieldCheck } from 'lucide-react';

const TESTIMONIAL_IMAGES: Record<string, string> = {
  'rev-1': '/images/services/facial.jpg',
  'rev-2': '/images/services/hair-men.jpg',
  'rev-3': '/images/services/bridal-facial.jpg',
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060e22] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/30">
      {/* Background Ambience with Vivid Warmth */}
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <Image
          src="/images/services/manicure.jpg"
          alt="Salon ambience"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22] via-[#060e22]/60 to-[#060e22]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Reflections"
          title="Words of Appreciation."
          subtitle="Real client perspectives celebrating the precision, ambience, and transformative care experienced at 77 SALON."
          align="center"
          theme="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0a1a3f]/85 backdrop-blur border border-[#d4af37]/30 p-8 flex flex-col justify-between relative group hover:border-[#d4af37] transition-all duration-300 shadow-xl rounded-lg overflow-hidden"
            >
              <div>
                {/* 5-Star Indicator & Service Visual */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>

                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/50 shrink-0">
                    <Image
                      src={TESTIMONIAL_IMAGES[t.id] || '/images/services/facial.jpg'}
                      alt={t.serviceName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="font-sans italic text-base sm:text-lg text-[#f8fafc] font-light leading-relaxed mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#d4af37]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#f8fafc] tracking-wide">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-[#cbd5e1] font-light mt-0.5">
                    {t.serviceName}
                  </p>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#d4af37]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
