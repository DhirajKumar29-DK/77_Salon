import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Sparkles, Clock, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Bridal Preparation & Skin Sanctuary',
  description:
    'Prepare for your wedding celebrations with the bespoke Bridal Glow Facial (₹3500) at 77 SALON.',
};

export default function BridalPage() {
  const preparationBenefits = [
    {
      title: 'Dermal Hydration & Luminosity',
      desc: 'Deep multi-layer hydration ensures makeup sits seamlessly and skin reflects radiant warmth under celebratory flash and daylight.',
    },
    {
      title: 'Texture Refinement',
      desc: 'Gentle enzymatic exfoliation removes micro-roughness without redness or irritation, leaving a petal-soft canvas.',
    },
    {
      title: 'Restorative Serenity',
      desc: 'Wedding preparation demands a calm, restorative environment where you can unwind from ceremony coordination.',
    },
  ];

  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="The Bridal Suite"
        title="Ceremonial Radiance."
        description="Every bride deserves an unhurried, luminous glow. At 77 SALON, our bridal preparation is anchored around the bespoke Bridal Glow Facial."
        breadcrumbCurrent="Bridal"
        bgImage="/images/services/bridal-facial.jpg"
      />

      {/* Featured Bridal Glow Facial Highlight */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full shadow-2xl overflow-hidden border border-[#d4af37]/40">
                <Image
                  src="/images/services/bridal-facial.jpg"
                  alt="Bridal Glow Facial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#060e22] text-[#f8fafc] p-6 shadow-2xl border-l-2 border-[#d4af37] max-w-[260px] hidden sm:block border border-[#d4af37]/30">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] block font-semibold">
                  Official PDF Service
                </span>
                <p className="font-sans text-xl text-[#f8fafc] mt-1 font-light">
                  Bridal Glow Facial — <span className="text-[#d4af37] font-semibold">₹3,500</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-medium">
                  The Ceremony Protocol
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#f8fafc] leading-[1.2]">
                Bridal Glow Facial
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="font-sans text-4xl text-[#d4af37] font-semibold">
                  ₹3,500
                </span>
                <span className="text-xs uppercase tracking-wider text-[#cbd5e1] font-sans">
                  90-Minute Comprehensive Ritual
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                The <strong className="text-[#f8fafc] font-semibold">Bridal Glow Facial</strong> is an extended, intensive skin treatment formulated specifically for the bride and wedding party. It unites gentle exfoliation, circulation-boosting acupressure massage, deep hydration masks, and cellular luminosity actives to achieve a natural, enduring radiance.
              </p>

              <div className="p-4 bg-[#060e22] border border-[#d4af37]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  Ideal 2 to 4 days prior to wedding or engagement festivities
                </div>
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  Includes face, neck, and decolletage radiance treatment
                </div>
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  Gentle, redness-free botanicals suitable for all skin types
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/book?service=facial-bridal-glow" variant="primary" size="lg" className="w-full sm:w-auto">
                  Reserve Bridal Glow Facial
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                  Bridal Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Bridal Preparation Matters */}
      <section className="py-20 sm:py-28 bg-[#060e22] text-[#f8fafc] border-y border-[#d4af37]/30">
        <Container>
          <SectionHeading
            eyebrow="The Philosophy"
            title="The Art of Bridal Preparation."
            subtitle="Thoughtful reasons to dedicate quiet time toward your skin and hair before wedding festivities commence."
            align="center"
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationBenefits.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 flex flex-col justify-between shadow-xl hover:border-[#d4af37] transition-all"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] block mb-2 font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="font-sans text-2xl text-[#f8fafc] mb-3 font-light">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bridal Consultation CTA */}
      <section className="py-20 bg-[#0a1a3f] text-center border-t border-[#d4af37]/20">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
              Private Wedding Consultation
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl text-[#f8fafc] font-light">
              Plan your bridal calendar with our specialists.
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
              Coordinate your Bridal Glow Facial, Ice Cream Pedicure, French gel polish, and Moroccan Hair Spa in harmony with your wedding schedule.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/book" variant="primary" size="lg">
                Book Bridal Consultation
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Price Menu
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
