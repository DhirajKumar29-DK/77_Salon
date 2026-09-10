'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/data/gallery';
import { GalleryItem } from '@/types';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'All Works' },
  { key: 'salon', label: 'Salon Atmosphere' },
  { key: 'hair', label: 'Hair & Styling' },
  { key: 'nails', label: 'Nail Architecture' },
  { key: 'facial', label: 'Facial & Skin' },
  { key: 'beauty', label: 'Beauty & Bridal' },
];

export const GalleryViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-md ${
              selectedCategory === cat.key
                ? 'bg-[#d4af37] text-[#060e22] font-semibold shadow-md'
                : 'bg-[#0a1a3f] text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-[#0f2352] border border-[#d4af37]/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/5] bg-[#060e22] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#d4af37]/30 hover:border-[#d4af37]"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060e22] via-[#060e22]/50 to-transparent" />

            {/* Hover details */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                {item.category}
              </span>
              <h3 className="font-sans text-2xl text-[#f8fafc] font-light mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#cbd5e1] font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.subtitle}
              </p>
            </div>

            {/* Floating Eye Trigger */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#060e22]/90 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4 text-[#d4af37]" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-[#060e22]/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-2 text-[#cbd5e1] hover:text-[#d4af37] border border-[#d4af37]/30 rounded-full z-10 hover:border-[#d4af37]"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#cbd5e1] hover:text-[#d4af37] border border-[#d4af37]/30 rounded-full z-10 bg-[#0a1a3f]/80"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#cbd5e1] hover:text-[#d4af37] border border-[#d4af37]/30 rounded-full z-10 bg-[#0a1a3f]/80"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] rounded overflow-hidden border border-[#d4af37]/30">
              <Image
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                {filteredItems[activeLightboxIndex].category}
              </span>
              <h4 className="font-sans text-2xl font-light mt-1 text-[#f8fafc]">
                {filteredItems[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-[#cbd5e1] font-light mt-0.5">
                {filteredItems[activeLightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
