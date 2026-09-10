import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/30">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <Image
          src="/images/services/hair-men.jpg"
          alt="Salon background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/85 via-[#0a1a3f]/60 to-[#060e22]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#d4af37]/40 bg-[#060e22]/80 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-medium">
            Your Dedicated Appointment
          </span>
        </div>

        <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-light text-[#f8fafc] leading-tight">
          Make time for yourself.
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] font-light max-w-xl leading-relaxed">
          Step away from the rush. Immerse yourself in restorative hair spas, luminous facials, and meticulous nail artistry designed exclusively around your comfort.
        </p>

        {/* 3 Visual Treatment Vignettes */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#d4af37]/50 shadow-xl group">
            <Image src="/images/services/facial.jpg" alt="Dermal Facial" fill className="object-cover group-hover:scale-110 transition-transform opacity-100" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#060e22] to-transparent" />
            <span className="absolute bottom-1 inset-x-0 text-[10px] text-center text-[#d4af37] font-medium uppercase tracking-wider">Facial</span>
          </div>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#d4af37]/50 shadow-xl group">
            <Image src="/images/services/hair-men.jpg" alt="Hair Atelier" fill className="object-cover group-hover:scale-110 transition-transform opacity-100" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#060e22] to-transparent" />
            <span className="absolute bottom-1 inset-x-0 text-[10px] text-center text-[#d4af37] font-medium uppercase tracking-wider">Hair</span>
          </div>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#d4af37]/50 shadow-xl group">
            <Image src="/images/services/nail-extension.jpg" alt="Nail Artistry" fill className="object-cover group-hover:scale-110 transition-transform opacity-100" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#060e22] to-transparent" />
            <span className="absolute bottom-1 inset-x-0 text-[10px] text-center text-[#d4af37] font-medium uppercase tracking-wider">Nails</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="/book"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-semibold shadow-[0_4px_25px_rgba(212,175,55,0.35)]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-[#d4af37]" />
            Contact Us
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#cbd5e1] font-light">
          <span className="text-[#f8fafc]">Unisex Salon Sanctuary</span>
          <span className="text-[#d4af37]">•</span>
          <span className="text-[#f8fafc]">Official Price Book Adherence</span>
          <span className="text-[#d4af37]">•</span>
          <span className="text-[#f8fafc]">Direct Concierge Booking</span>
        </div>
      </div>
    </section>
  );
};
