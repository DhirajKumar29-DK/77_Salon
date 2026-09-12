import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PLACEHOLDER_TESTIMONIALS } from '@/data/testimonials';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0a1a3f] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Background Image Texture */}
      <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
        <Image 
          src="/images/hero/facial.jpg" 
          alt="Luxury Salon Interior" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e22] via-transparent to-[#060e22]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Reflections"
          title={<><span className="font-antic font-normal tracking-wide text-[#d4af37]">Every Great Event Begins With A Conversation!</span></>}
          subtitle={<>Real client perspectives celebrating the precision, ambience, and transformative care experienced at 77 SALON.</>}
          align="center"
          theme="dark"
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((t, index) => {
            const anim = index % 3 === 0 ? 'fade-right' : index % 3 === 2 ? 'fade-left' : 'fade-up';
            return (
            <ScrollReveal key={t.id} animation={anim} delay={(index % 3) * 150} className="h-full">
              <div className="h-full bg-[#060e22] border-[3px] border-[#d4af37]/30 p-8 flex flex-col relative group transition-colors duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] hover:border-[#d4af37] rounded-xl cursor-default">
                
                {/* Top Row: Stars & Avatar */}
                <div className="flex justify-between items-start mb-6">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>

                  {/* Circular Avatar (Slightly larger as requested) */}
                  <div className="w-16 h-16 rounded-full border-[3px] border-[#d4af37]/40 overflow-hidden relative shrink-0 shadow-lg group-hover:border-[#d4af37] transition-colors duration-500 bg-[#0a1a3f] flex items-center justify-center">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.clientName}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <span className="text-xl font-bold text-[#d4af37] uppercase">
                        {t.clientName.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-[#e2e8f0] font-light leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                {/* Silver Shining Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent opacity-40 mt-6 mb-5" />

                {/* Footer: Name & Verified */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="font-antic text-lg text-[#f8fafc] mb-1">
                      {t.clientName}
                    </h4>
                    <p className="text-[11px] text-[#94a3b8] font-light uppercase tracking-wide">
                      {t.serviceName}
                    </p>
                  </div>
                  
                  {t.verified && (
                    <div className="flex items-center gap-1 text-[#d4af37]">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-wider font-bold">
                        VERIFIED
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )})}
        </div>
      </div>
    </section>
  );
};
