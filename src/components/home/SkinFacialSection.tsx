import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FacialHighlight {
  name: string;
  price: string;
  desc: string;
  badge?: string;
  slug: string;
}

const FEATURED_FACIALS: FacialHighlight[] = [
  {
    name: 'Hydra Facial',
    price: '₹4,500',
    desc: 'Skin Glowing — Advanced multi-stage vortex extraction, hydro-infusion, and antioxidant saturation.',
    badge: 'Flagship Ritual',
    slug: 'facial-hydra',
  },
  {
    name: 'Bridal Glow Facial',
    price: '₹3,500',
    desc: 'Extended premium bridal skin treatment engineered for maximum luminescence under ceremony lighting.',
    badge: 'Ceremony Essential',
    slug: 'facial-bridal-glow',
  },
  {
    name: 'O3 / Diamond Facial',
    price: '₹2,500',
    desc: 'Oxygen-focused micro-polishing facial stimulating immediate collagen renewal and pore refinement.',
    badge: 'Oxygen Infused',
    slug: 'facial-o3-diamond',
  },
  {
    name: 'O3 / Gold Facial',
    price: '₹2,000',
    desc: 'Cellular oxygen booster paired with pure gold botanicals for radiant, revitalized warmth.',
    badge: 'Popular',
    slug: 'facial-o3-gold',
  },
  {
    name: 'Anti-Ageing Facial',
    price: '₹1,500',
    desc: 'Firming and rejuvenating facial restoring structural elasticity and deep hydration.',
    slug: 'facial-anti-ageing',
  },
  {
    name: 'Acne / Clarifying Facial',
    price: '₹1,200',
    desc: 'Clarifying treatment for oily and acne-prone skin, balancing sebum and clearing congested pores.',
    slug: 'facial-acne-clarifying',
  },
];

export const SkinFacialSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060e22] text-[#f8fafc] relative overflow-hidden border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Feature & Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">
                Dermal Sanctuary
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
                Clinical Purity. Unmatched Glow.
              </h2>
              <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
                Whether combating urban pollution with our targeted De-Tan therapies or preparing for celebration with our Hydra Facial, our facial protocols are customized to your skin profile.
              </p>

              <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden shadow-2xl border-2 border-[#d4af37]/40 mt-6">
                <Image
                  src="/images/services/facial.jpg"
                  alt="Facial and Skin Glow at 77 SALON"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3f] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#060e22]/90 p-4 border border-[#d4af37]/40 backdrop-blur-sm rounded-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#d4af37] uppercase tracking-wider font-semibold">16 Dedicated Facials</span>
                    <span className="text-[#cbd5e1]">Clean-Up from ₹700</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/services/facial" variant="primary" size="md" className="w-full sm:w-auto font-bold">
                  View All Facial Services
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Menu List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="pb-4 border-b border-[#d4af37]/30 mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#cbd5e1]">Featured Protocols</span>
              <span className="text-xs text-[#d4af37] font-serif italic">Price Menu from PDF</span>
            </div>

            {FEATURED_FACIALS.map((item) => (
              <div
                key={item.name}
                className="group p-6 bg-[#0a1a3f] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 shadow-xl rounded-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-2xl text-[#d4af37] shrink-0 font-semibold">
                    {item.price}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#94a3b8]">Unisex Skin Therapy</span>
                  <Link
                    href={`/book?service=${item.slug}`}
                    className="text-[#d4af37] hover:text-[#e5c568] uppercase tracking-wider font-bold flex items-center gap-1"
                  >
                    Reserve
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
