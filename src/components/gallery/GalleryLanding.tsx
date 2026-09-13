'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAlbums, GalleryAlbum } from '@/data/gallery';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const GalleryLanding: React.FC = () => {
  const albums = getAlbums();

  return (
    <div className="bg-[#060e22] text-[#f8fafc] min-h-screen pt-[68px]">
      <div className="relative">
        <PageHero
          eyebrow="THE PORTFOLIO"
          title="The Art of Timeless Elegance & Beauty."
          description="Step into a visual journey of elegance. Witness the flawless transformations and breathtaking styles meticulously crafted by our master artists."
          breadcrumbCurrent="Gallery"
          bgImage="/images/hero/nails.jpg"
          heightClass="min-h-[45vh] sm:min-h-[62vh]"
          contentClassName="ml-0 lg:-ml-16 xl:-ml-28 mb-0 sm:mb-16"
        />
        {/* Decorative Watermarks Removed */}
      </div>

      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <button className="px-6 py-2.5 bg-[#d4af37] text-[#060e22] text-[10px] uppercase tracking-widest font-bold shadow-md rounded">
              ALL ALBUMS
            </button>
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="px-6 py-2.5 bg-[#0a1a3f] text-[#cbd5e1] border border-[#d4af37]/30 hover:border-[#d4af37]/80 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-all rounded"
              >
                {album.category}
              </Link>
            ))}
          </div>

          {/* Uniform Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {albums.map((album, index) => {
              return (
                <ScrollReveal
                  key={album.slug}
                  animation="fade-up"
                  delay={index * 100}
                  className="col-span-1"
                >
                  <Link href={`/gallery/${album.slug}`} className="block w-full h-full group">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 bg-[#0a1a3f]">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-[#060e22]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                        <div className="flex items-end justify-between gap-4 w-full">
                          <div className="flex flex-col items-start text-left">
                            <h3 className="font-antic text-2xl sm:text-3xl lg:text-[28px] text-white font-light mb-1 line-clamp-2">
                              {album.title}
                            </h3>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                              {album.imageCount} PHOTOS
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] transition-all duration-300 text-[#d4af37] group-hover:text-[#060e22]">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
