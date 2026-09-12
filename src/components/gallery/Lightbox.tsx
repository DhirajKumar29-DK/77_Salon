'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

interface LightboxProps {
  items: GalleryItem[];
  initialIndex: number;
  albumTitle: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ items, initialIndex, albumTitle, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextImage(); // Swiped left
    if (diff < -50) prevImage(); // Swiped right

    setTouchStart(null);
  };

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060e22] text-[#f8fafc]">
      {/* Header Area */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#cbd5e1] font-semibold">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-[#cbd5e1] text-xs">&rsaquo;</span>
          <span className="text-sm font-light tracking-wide text-white">{albumTitle}</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-[#cbd5e1] hover:text-[#d4af37] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div 
        className="flex-1 relative flex items-center justify-center overflow-hidden touch-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows (Hidden on Mobile, rely on swipe or thumbs) */}
        <button
          onClick={prevImage}
          className="hidden md:flex absolute left-8 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-[#d4af37]"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextImage}
          className="hidden md:flex absolute right-8 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-[#d4af37]"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full p-4 sm:p-10 flex items-center justify-center select-none">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            className="object-contain pointer-events-none"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="h-24 shrink-0 bg-[#060e22] border-t border-white/5 px-2">
        <div 
          ref={thumbnailContainerRef}
          className="flex h-full items-center gap-2 overflow-x-auto px-4 scrollbar-hide py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-full aspect-[4/3] shrink-0 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                idx === currentIndex ? 'border-[#d4af37] opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              <Image 
                src={item.imageUrl} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                className="object-cover" 
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};
