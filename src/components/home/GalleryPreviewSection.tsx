import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GALLERY_ITEMS } from '@/data/gallery';
import { ArrowRight, Eye } from 'lucide-react';

export const GalleryPreviewSection: React.FC = () => {
  // Select first 6 cohesive gallery items for home preview
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#050914] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <SectionHeading
            eyebrow="Visual Portfolio"
            title="The 77 Atmosphere."
            subtitle="Glimpses into our spaces, precision hair artistry, clinical facial rituals, and bespoke nail aesthetics."
            align="left"
            theme="dark"
            className="mb-6 md:mb-0"
          />
          <Button href="/gallery" variant="outline-white" size="sm">
            View Gallery
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <Link
              key={item.id}
              href="/gallery"
              className={`group relative overflow-hidden bg-[#0A1128] border border-white/10 ${
                idx === 0 || idx === 3 ? 'sm:row-span-2 aspect-[3/4]' : 'aspect-square sm:aspect-[4/3]'
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050914] via-[#050914]/60 to-transparent" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.subtitle}
                </p>
              </div>

              {/* Floating Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A1128]/70 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-[#C5A059]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
