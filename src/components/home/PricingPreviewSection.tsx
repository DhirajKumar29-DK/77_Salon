import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface MenuPreviewCategory {
  categoryName: string;
  image: string;
  items: { name: string; price: string; detail?: string }[];
}

const MENU_PREVIEWS: MenuPreviewCategory[] = [
  {
    categoryName: 'FACIAL & SKIN',
    image: '/images/services/facial.jpg',
    items: [
      { name: 'Hydra Facial', price: '₹4,500', detail: 'Skin Glowing' },
      { name: 'Bridal Glow Facial', price: '₹3,500', detail: 'Extended bridal treatment' },
      { name: 'O3 / Diamond Facial', price: '₹2,500', detail: 'Oxygen-focused' },
      { name: 'Diamond Facial', price: '₹1,250', detail: 'Diamond treatment' },
      { name: 'Gold Facial', price: '₹1,200', detail: 'Gold facial treatment' },
      { name: 'Clean-Up', price: '₹700', detail: 'Basic cleansing & exfoliation' },
    ],
  },
  {
    categoryName: 'HAIR EXPERIENCE',
    image: '/images/services/hair-men.jpg',
    items: [
      { name: 'Moroccon / Repair Spa (Long)', price: '₹4,500', detail: 'Pure argan infusion' },
      { name: 'Global Hair Colour (Long)', price: '₹4,500', detail: 'Full coverage' },
      { name: 'Keratin / Repair Spa (Short - Men)', price: '₹2,000', detail: 'Protein therapy' },
      { name: 'Hair Styling (Ironing/Tongs)', price: '₹1,700', detail: 'Women styling' },
      { name: 'Advance Hair Cut (Women)', price: '₹1,000', detail: 'Wash & blow dry' },
      { name: 'Advance Hair Cut (Men)', price: '₹550', detail: 'Wash & blow dry' },
    ],
  },
  {
    categoryName: 'NAILS & BODY CARE',
    image: '/images/services/pedicure.jpg',
    items: [
      { name: 'Body Polishing', price: '₹4,000', detail: 'Full body glow ritual' },
      { name: 'Full Body Wax (Rica)', price: '₹3,500', detail: 'Excludes face' },
      { name: 'Ice Cream Pedicure', price: '₹2,500', detail: 'Paraffin treatment' },
      { name: 'Gel Extensions (Full Set)', price: '₹2,000', detail: 'Hand / Feet' },
      { name: 'French Gel Polish', price: '₹1,500', detail: 'Hands or feet' },
      { name: 'Eyebrows (Threading)', price: '₹77', detail: 'Precision shaping' },
    ],
  },
];

export const PricingPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060e22] text-[#f8fafc] relative border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#d4af37]/25">
          <SectionHeading
            eyebrow="The Price Book"
            title="Refined Treatment Menu."
            subtitle="Transparent pricing with zero ambiguity. All services honor the official 77 SALON Price Book."
            align="left"
            theme="dark"
            className="mb-6 md:mb-0"
          />
          <Button href="/pricing" variant="outline-white" size="sm" className="border-[#cbd5e1]/40 text-[#f8fafc] hover:border-[#d4af37]">
            View Full Price Menu
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Editorial Menu List Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {MENU_PREVIEWS.map((col) => (
            <div
              key={col.categoryName}
              className="group bg-[#0a1a3f] border border-[#d4af37]/35 flex flex-col justify-between shadow-2xl hover:border-[#d4af37] transition-all rounded-lg overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-[#060e22]">
                <Image
                  src={col.image}
                  alt={col.categoryName}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold drop-shadow">
                    {col.categoryName}
                  </span>
                  <span className="text-[10px] text-[#cbd5e1] uppercase tracking-widest font-mono bg-[#060e22]/80 px-2 py-0.5 rounded border border-[#d4af37]/30">
                    INR (₹)
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                <div className="pb-4 border-b border-[#d4af37]/40 mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
                    {col.categoryName}
                  </span>
                  <span className="text-[10px] text-[#cbd5e1] uppercase tracking-widest font-mono">
                    INR (₹)
                  </span>
                </div>

                <div className="space-y-6">
                  {col.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-serif text-lg text-[#f8fafc] group-hover:text-[#d4af37] transition-colors">
                          {item.name}
                        </span>
                        {/* Dot leader */}
                        <div className="flex-1 border-b border-dotted border-[#d4af37]/30 relative -top-1" />
                        <span className="font-sans text-base font-bold text-[#d4af37] shrink-0">
                          {item.price}
                        </span>
                      </div>
                      {item.detail && (
                        <span className="text-[11px] text-[#cbd5e1] font-light block mt-0.5">
                          {item.detail}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link
                  href="/pricing"
                  className="text-xs uppercase tracking-widest text-[#cbd5e1] hover:text-[#d4af37] font-semibold transition-colors"
                >
                  Explore Category →
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/pricing" variant="primary" size="lg" className="font-bold">
            Explore Full Interactive Price Menu (80+ Services)
          </Button>
        </div>
      </div>
    </section>
  );
};
