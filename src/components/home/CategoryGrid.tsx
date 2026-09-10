import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

interface EditorialCategory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  servicesCount: string;
}

const CATEGORY_ITEMS: EditorialCategory[] = [
  {
    title: 'NAILS',
    subtitle: 'Manicure • Pedicure • Gel Polish • Extensions',
    description:
      'From classic nail shaping to 3D chrome cat-eye and sculpted acrylic/gel extensions. Complete cuticle revitalization and paraffin care.',
    image: '/images/services/nail-extension.jpg',
    link: '/services/manicure',
    servicesCount: '24 Services',
  },
  {
    title: 'SKIN',
    subtitle: 'Hydra Facial • O3+ • Anti-Ageing • Bridal Glow',
    description:
      'Targeted dermatological and holistic skin brightening. Deep dermal extraction, fruit enzymes, pure gold leaves, and luminous bridal prep.',
    image: '/images/services/facial.jpg',
    link: '/services/facial',
    servicesCount: '16 Facials',
  },
  {
    title: 'HAIR',
    subtitle: 'Moroccan Spas • Global Colour • Precision Cuts',
    description:
      'Bespoke hair therapy for women and men. Intensive keratin restoration, root touch-ups, beard contouring, and modern scissor styling.',
    image: '/images/services/hair-men.jpg',
    link: '/services/hair-women',
    servicesCount: '39 Hair Treatments',
  },
  {
    title: 'BODY CARE',
    subtitle: 'Italian Rica Wax • Threading • Body Polishing',
    description:
      'Flawless smooth skin with gentle honey and soothing Rica wax, facial threading, full Brazilian care, and whole-body exfoliation rituals.',
    image: '/images/services/waxing.jpg',
    link: '/services/waxing',
    servicesCount: '19 Body Services',
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Treatment Chapters"
          title="The Core Categories."
          subtitle="Explore the four fundamental pillars of self-care at 77 SALON, each curated with clinical precision and luxury botanicals."
          align="center"
          theme="dark"
          className="mb-16"
        />

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORY_ITEMS.map((cat, idx) => (
            <div
              key={cat.title}
              className="group relative bg-[#0f2352]/70 border border-[#d4af37]/35 overflow-hidden flex flex-col shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)] hover:border-[#d4af37] transition-all duration-500 rounded-lg"
            >
              {/* Top Image Container with Editorial Aspect Ratio */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.title} at 77 SALON`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1a3f] to-transparent" />

                {/* Service Count Badge in Gold & Deep Blue */}
                <div className="absolute top-4 right-4 bg-[#060e22]/90 text-[#d4af37] border border-[#d4af37]/50 px-3 py-1 text-[11px] uppercase tracking-widest font-semibold rounded-md">
                  {cat.servicesCount}
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] block font-semibold">
                    0{idx + 1} // Ritual
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body in Deep Royal Blue */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#0f2352]/50">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium block mb-2">
                    {cat.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d4af37]/25 flex items-center justify-between">
                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#f8fafc] font-bold group-hover:text-[#d4af37] transition-colors"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#d4af37] transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[11px] text-[#94a3b8] font-serif italic">
                    Unisex Sanctuary
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
