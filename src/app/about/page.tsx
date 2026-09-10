import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Sparkles, Shield, Heart, Scissors, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Our Sanctuary',
  description:
    'Learn about 77 SALON, an elevated unisex sanctuary dedicated to Style, Beauty, and Care.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Our Heritage & Philosophy"
        title="Bespoke Care. Elevated Living."
        description="77 SALON was conceived as a harmonious retreat where hair craftsmanship, advanced skin rejuvenation, and meticulous nail architecture converge in an unhurried, unisex setting."
        breadcrumbCurrent="About"
        bgImage="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Brand Introduction */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full shadow-2xl overflow-hidden border border-[#d4af37]/40">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                  alt="77 SALON Craftsmanship"
                  fill
                  className="object-cover opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#060e22] text-[#f8fafc] p-6 shadow-2xl border-l-2 border-[#d4af37] max-w-[240px] hidden sm:block border border-[#d4af37]/30">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] block font-semibold">
                  Unisex Sanctuary
                </span>
                <p className="font-sans text-lg text-[#f8fafc] mt-1">
                  Individualized Rituals for Men & Women
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                  Brand Origins
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#f8fafc] leading-[1.2]">
                A refined perspective on beauty and personal grooming.
              </h2>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                At 77 SALON, we believe that true self-care is deliberate, disciplined, and personalized. We established our salon around a transparent, comprehensive service menu that honors individual style without pretense.
              </p>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                From our medical-grade hygiene and sterilized instruments to our imported Moroccan argan therapies and Italian Rica waxing rituals, every element has been curated to provide peace of mind and visible refinement.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <Button href="/services" variant="primary" size="md">
                  Explore Services
                </Button>
                <Button href="/pricing" variant="outline" size="md">
                  View Price Menu
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The 3 Core Pillars */}
      <section className="py-24 sm:py-32 bg-[#060e22] text-[#f8fafc] border-y border-[#d4af37]/30">
        <Container>
          <SectionHeading
            eyebrow="The Core Pillars"
            title="Style • Beauty • Care"
            subtitle="The foundational ethos embedded in every service, from an express touch-up to our signature 90-minute rituals."
            align="center"
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] transition-all shadow-xl rounded-lg overflow-hidden flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden bg-[#060e22]">
                <Image src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=800&q=80" alt="Style Pillar" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="font-sans text-2xl text-[#f8fafc] font-light">Style</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                  Haircut architecture, customized beard shaping, custom ombre nail gradients, and high-fashion blowouts crafted to elevate your natural presence.
                </p>
              </div>
            </div>

            <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] transition-all shadow-xl rounded-lg overflow-hidden flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden bg-[#060e22]">
                <Image src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80" alt="Beauty Pillar" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="font-sans text-2xl text-[#f8fafc] font-light">Beauty</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                  Clinical oxygen facials, Hydra radiance treatments, rich hair color streaks, and paraffin foot restoration designed to illuminate your skin and hair.
                </p>
              </div>
            </div>

            <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] transition-all shadow-xl rounded-lg overflow-hidden flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden bg-[#060e22]">
                <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Care Pillar" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="font-sans text-2xl text-[#f8fafc] font-light">Care</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                  Deep attentiveness to your comfort, gentle wax formulas for sensitive skin, scalp relaxation massages, and a peaceful atmosphere.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Unisex Salon Experience */}
      <section className="py-24 sm:py-32 bg-[#0a1a3f]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                The Experience
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#f8fafc]">
                Designed for Everyone.
              </h2>
              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                77 SALON operates as a modern unisex salon. We create dedicated care pathways for both men and women with equal precision — eliminating outdated stereotypes in favor of genuine craftsmanship.
              </p>
              <div className="pt-2 flex gap-4">
                <Button href="/book" variant="primary" size="lg">
                  Book Your Visit
                </Button>
                <Button href="/services" variant="outline-white" size="lg">
                  View Treatments
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-xl group">
                <Image src="/images/services/bridal-facial.jpg" alt="For Her" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">For Her</span>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-xl group">
                <Image src="/images/services/hair-men.jpg" alt="For Him" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">For Him</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
