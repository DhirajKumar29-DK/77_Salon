import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Sparkles, ArrowRight, Scissors, Flower2, HeartHandshake, Gem } from 'lucide-react';

interface ShowcaseCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  startingPrice: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
  bookSlug: string;
}

const COLLECTIONS: ShowcaseCategory[] = [
  {
    id: 'hair-styling',
    eyebrow: 'Hair Architecture',
    title: 'Precision Master Cuts',
    description: 'Expert scissor sculpting, bespoke silhouettes, and premium blow-dry styling tailored to your aesthetic.',
    startingPrice: '₹350',
    image: '/images/brand/home_hero_hair.jpg',
    icon: <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'spa-w-moroccon-long',
  },
  {
    id: 'hair-color',
    eyebrow: 'Color & Texture',
    title: 'Bespoke Balayage & Spas',
    description: 'Hand-painted French balayage, keratin treatments, and deeply restorative Moroccan Argan oil hair spas.',
    startingPrice: '₹999',
    image: '/images/hero/hair.jpg',
    icon: <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'spa-w-moroccon-long',
  },
  {
    id: 'skin-facial',
    eyebrow: 'Dermal Health',
    title: 'Advanced Hydra Facial',
    description: 'Vacuum dermal extraction, deep pore cleansing, and intense hydration infusions for immediate glowing skin.',
    startingPrice: '₹4,500',
    image: '/images/brand/gallery_hero.jpg',
    icon: <Flower2 className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'facial-hydra',
  },
  {
    id: 'skin-bridal',
    eyebrow: 'Ceremonial Care',
    title: 'Bridal Luminescence',
    description: 'Comprehensive pre-wedding skincare, full body polishing, and flawless HD bridal makeup artistry.',
    startingPrice: '₹3,500',
    image: '/images/brand/home_hero_bride.jpg',
    icon: <HeartHandshake className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'facial-bridal-glow',
  },
  {
    id: 'nails-extensions',
    eyebrow: 'Nail Artistry',
    title: 'Sculpted Gel Extensions',
    description: 'Durable acrylic and gel extensions, finished with high-gloss chrome, ombre, or custom French nail art.',
    startingPrice: '₹1,200',
    image: '/images/brand/home_hero_nails.jpg',
    icon: <Gem className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'pedi-ice-cream',
  },
  {
    id: 'nails-pedi',
    eyebrow: 'Hand & Foot Wellness',
    title: 'Ice Cream Pedicure',
    description: 'Organic paraffin foot rituals featuring deep exfoliation, tan removal, and deeply nourishing cuticles.',
    startingPrice: '₹700',
    image: '/images/services/pedicure.jpg',
    icon: <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />,
    highlights: [],
    bookSlug: 'pedi-ice-cream',
  },
];

export const UnifiedSignatureShowcase: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#060e22] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The 77 Signature"
          title={<>The Art of <span className="text-[#d4af37] italic">Hair, Skin & Nails.</span></>}
          subtitle={<>Discover our most sought-after salon rituals. Precision aesthetics crafted for your signature look.</>}
          align="center"
          theme="dark"
          className="mb-12 sm:mb-16 max-w-2xl mx-auto"
        />

        {/* 6 Classic Premium Cards (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((item, index) => {
            const anim = index % 3 === 0 ? 'fade-right' : index % 3 === 2 ? 'fade-left' : 'fade-up';
            return (
              <ScrollReveal key={item.id} animation={anim} delay={(index % 3) * 150} className="h-full">
                <div className="h-full bg-[#0a1a3f] rounded-lg overflow-hidden flex flex-col group border-2 border-[#d4af37]/20 hover:border-[#d4af37] hover:ring-2 hover:ring-[#d4af37]/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] cursor-pointer">

                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Floating Tags */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-[#060e22]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-sm flex items-center gap-1.5 shadow-xl">
                        {item.icon}
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#d4af37]">
                          {item.eyebrow}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col relative z-20 bg-gradient-to-b from-[#0a1a3f] to-[#060e22]">
                    <div className="flex justify-between items-start mb-3 gap-3">
                      <h3 className="font-antic text-xl lg:text-2xl font-light text-[#fdfbf5] group-hover:text-[#d4af37] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-xl font-light text-[#d4af37] font-serif tracking-tight">
                          {item.startingPrice}
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.15em] font-semibold text-[#64748b] mt-0.5">
                          NET PRICE
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    {/* Footer Action Row */}
                    <div className="pt-5 border-t border-[#d4af37]/20 flex items-center justify-between mt-auto">

                      <Link
                        href="/contact"
                        className="text-[#d4af37] font-bold text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] inline-flex items-center gap-1.5 group/btn transition-colors hover:text-[#e5c568] whitespace-nowrap"
                      >
                        BOOK RITUAL
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom Menu Invitation */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-14 text-center pt-8 border-t-2 border-[#d4af37]/50">
            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light">
              Every service adheres strictly to our published price book.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
