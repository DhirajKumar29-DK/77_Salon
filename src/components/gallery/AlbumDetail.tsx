'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Eye } from 'lucide-react';
import { GalleryItem, GalleryAlbum } from '@/data/gallery';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Lightbox } from './Lightbox';

interface AlbumDetailProps {
  album: GalleryAlbum;
  items: GalleryItem[];
}

export const AlbumDetail: React.FC<AlbumDetailProps> = ({ album, items }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getAlbumDescription = (category: string) => {
    switch (category) {
      case 'SALON ATMOSPHERE':
        return 'Experience the luxurious and calming environment designed exclusively for your comfort.';
      case 'HAIR & STYLING':
        return 'Precision cuts, vibrant colors, and expert styling tailored to your unique personality.';
      case 'NAIL ART & EXTENSIONS':
        return 'Detailed and elegant nail artistry crafted with premium products.';
      case 'FACIAL & SKIN':
        return 'Rejuvenating skin treatments that reveal your natural, healthy glow.';
      case 'BRIDAL BEAUTY':
        return 'Exquisite styling and care for the most important day of your life.';
      default:
        return 'A curated collection of our finest work.';
    }
  };

  return (
    <div className="bg-[#060e22] text-[#f8fafc] min-h-screen pt-[100px] pb-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-up" className="mb-8">
          <nav className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#cbd5e1]">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#d4af37]" />
            <Link href="/gallery" className="hover:text-[#d4af37] transition-colors">Gallery</Link>
            <ChevronRight className="w-3 h-3 text-[#d4af37]" />
            <span className="text-[#d4af37]">{album.title}</span>
          </nav>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100} className="mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold block mb-3">
            THE COLLECTION
          </span>
          <h1 className="font-antic text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4">
            {album.title}
          </h1>
          <p className="text-sm sm:text-base text-[#cbd5e1] font-light max-w-2xl leading-relaxed">
            {getAlbumDescription(album.category)}
          </p>
        </ScrollReveal>

        {/* Uniform Photo Grid (4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const hasMore = items.length > 8 && isLast; // Example logic for "+X More Photos" if we ever paginate

            return (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={(index % 4) * 100}
                className="col-span-1"
              >
                <button
                  onClick={() => setLightboxIndex(index)}
                  className="group relative w-full aspect-square block overflow-hidden rounded-lg bg-[#0a1a3f] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 focus:outline-none"
                  aria-label={`View photo ${item.title}`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#060e22]/10 group-hover:bg-[#060e22]/40 transition-colors duration-300" />
                  
                  {/* Hover Eye Icon (Only if not 'more' overlay) */}
                  {!hasMore && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#060e22]/80 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  {/* +X More Photos Overlay Example */}
                  {hasMore && (
                    <div className="absolute inset-0 bg-[#060e22]/80 flex flex-col items-center justify-center text-white">
                      <span className="text-xl sm:text-2xl font-light">+{items.length - 8}</span>
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#d4af37] mt-1">MORE PHOTOS</span>
                    </div>
                  )}
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Back to Gallery */}
        <div className="mt-16 flex justify-start">
          <Link 
            href="/gallery" 
            className="flex items-center gap-2 text-sm text-[#cbd5e1] hover:text-[#d4af37] transition-colors"
          >
            <span>&larr;</span>
            <span className="font-semibold">Back to Gallery</span>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          initialIndex={lightboxIndex}
          albumTitle={album.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};
