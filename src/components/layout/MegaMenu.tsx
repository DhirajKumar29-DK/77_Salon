'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#0a1a3f] border-t border-b border-[#d4af37]/35 shadow-[0_25px_50px_-12px_rgba(6,14,34,0.9)] z-50 text-[#f8fafc] transition-all duration-300 animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Services Categories (8 cols) */}
          <div className="col-span-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                The Treatment Menu
              </span>
              <Link
                href="/services"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
              >
                View Full Services Menu
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {SITE_CONFIG.serviceSubmenu.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onClose}
                  className="group flex flex-col p-3 -mx-3 rounded hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-[#C5A059]/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-normal tracking-wide text-white group-hover:text-[#C5A059] transition-colors">
                      {service.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-light">
                    {service.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Editorial Spotlight (4 cols) */}
          <div className="col-span-4 border-l border-white/10 pl-8">
            <div className="relative h-44 w-full mb-4 overflow-hidden rounded border border-[#d4af37]/40">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="77 SALON Luxury Ambience"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 opacity-100"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#C5A059] font-medium">
                  <Sparkles className="w-3 h-3" />
                  Signature Ritual
                </span>
                <span className="text-white font-medium bg-[#0A1128]/80 px-2 py-0.5 border border-[#C5A059]/40">
                  ₹4,500
                </span>
              </div>
            </div>

            <h3 className="font-serif text-xl font-normal text-white">
              Hydra Facial — Skin Glowing
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Deep dermal vacuum cleansing, oxygenation, and nutrient infusion for an immediate luminous finish.
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/book?service=facial-hydra"
                onClick={onClose}
                className="text-xs uppercase tracking-widest text-[#C5A059] hover:text-[#D4AF37] font-medium flex items-center gap-1.5"
              >
                Reserve Treatment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/pricing"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white"
              >
                Price Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
