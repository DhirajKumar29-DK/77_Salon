import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SignatureItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  duration: string;
  bookingSlug: string;
  categoryLink: string;
  image: string;
}

const SIGNATURE_ITEMS: SignatureItem[] = [
  {
    id: 'facial-hydra',
    name: 'Hydra Facial',
    category: 'Facial & Dermal Health',
    price: '₹4,500',
    description: 'Skin Glowing — Vacuum dermal extraction, intensive hydration & antioxidant infusion.',
    duration: '75 min',
    bookingSlug: 'facial-hydra',
    categoryLink: '/services/facial',
    image: '/images/services/facial.jpg',
  },
  {
    id: 'facial-bridal',
    name: 'Bridal Glow Facial',
    category: 'Bridal & Ceremony Preparation',
    price: '₹3,500',
    description: 'Extended premium bridal skin treatment restoring cellular luminescence.',
    duration: '90 min',
    bookingSlug: 'facial-bridal-glow',
    categoryLink: '/services/facial',
    image: '/images/services/bridal-facial.jpg',
  },
  {
    id: 'pedi-ice-cream',
    name: 'Ice Cream Pedicure',
    category: 'Pedicure & Foot Care',
    price: '₹2,500',
    description: 'Pedicure with warm paraffin therapy, dead skin smoothing & extended massage.',
    duration: '75 min',
    bookingSlug: 'pedi-ice-cream',
    categoryLink: '/services/pedicure',
    image: '/images/services/pedicure.jpg',
  },
  {
    id: 'ext-gel-full',
    name: 'Gel Extensions - Full Set',
    category: 'Nail Architecture (Hand/Feet)',
    price: '₹2,000',
    description: 'Full set — Sculpted builder gel extensions with bespoke shape and length.',
    duration: '90 min',
    bookingSlug: 'ext-gel-full',
    categoryLink: '/services/nail-extension',
    image: '/images/services/nail-extension.jpg',
  },
  {
    id: 'spa-w-moroccon-long',
    name: 'Moroccon / Repair Spa - Long',
    category: 'Women Hair Spa',
    price: '₹4,500',
    description: 'Repair-focused spa enriched with pure Moroccan argan infusion for long hair.',
    duration: '75 min',
    bookingSlug: 'spa-w-moroccon-long',
    categoryLink: '/services/hair-women',
    image: '/images/services/hair-men.jpg',
  },
  {
    id: 'wax-brazilian',
    name: 'Full Bikini / Brazilian',
    category: 'Waxing & Body Care',
    price: '₹2,500',
    description: 'Premium waxing service with hypoallergenic Italian wax for silky smooth perfection.',
    duration: '45 min',
    bookingSlug: 'wax-brazilian',
    categoryLink: '/services/waxing',
    image: '/images/services/waxing.jpg',
  },
];

export const SignatureServices: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060e22] text-[#f8fafc] relative border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#d4af37]/25">
          <SectionHeading
            eyebrow="Signature Portfolio"
            title="Exquisite Signatures."
            subtitle="Curated from our Price Book — hallmark rituals that define the 77 SALON standard of beauty and restorative luxury."
            align="left"
            theme="dark"
            className="mb-6 md:mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:text-[#e5c568] font-semibold transition-colors shrink-0"
          >
            View Complete Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Service Cards in Royal Blue & Gold Frame with Treatment Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SIGNATURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0a1a3f] border border-[#d4af37]/35 hover:border-[#d4af37] flex flex-col justify-between transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] rounded-lg"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#060e22]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3 bg-[#060e22]/90 border border-[#d4af37]/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold rounded">
                  {item.category}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-[#060e22]/80 px-2 py-0.5 text-[10px] text-[#cbd5e1] font-light rounded">
                  {item.duration}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                    {item.name}
                  </h3>

                  <div className="my-3 flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-[#d4af37] font-semibold tracking-wide">
                      {item.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#94a3b8]">
                      Net Price
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={item.categoryLink}
                    className="text-xs text-[#94a3b8] hover:text-[#d4af37] transition-colors"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/book?service=${item.bookingSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#d4af37] font-bold group-hover:translate-x-1 transition-transform"
                  >
                    Book Ritual
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
