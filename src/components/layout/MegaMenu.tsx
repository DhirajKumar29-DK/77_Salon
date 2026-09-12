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
      className="absolute top-full left-0 w-full border-t-2 border-b-[3px] border-[#d4af37]/50 shadow-[0_25px_50px_rgba(6,14,34,0.5)] z-50 text-[#f8fafc] overflow-hidden"
      style={{ animation: 'megaMenuIn 0.2s ease-out forwards' }}
    >
      {/* Premium Salon Interior Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/services/bridal-facial.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#060e22]/85" style={{ zIndex: 1 }} />

      <style>{`
        @keyframes megaMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 py-10" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* ── Left: Service List (8 cols) ── */}
          <div className="col-span-8">

            {/* Header row */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#d4af37]/40">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">
                The Treatment Menu
              </span>

            </div>

            {/* 2-column service grid — plain text links, exactly like screenshot */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-5">
              {SITE_CONFIG.serviceSubmenu?.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={onClose}
                  className="group flex flex-col py-1.5 px-3 -mx-3 rounded-lg hover:bg-[#060e22]/60 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-[#e2e8f0] group-hover:text-[#d4af37] transition-colors">
                      {service.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <span className="text-xs text-[#7d8fa3] mt-0.5 font-light leading-relaxed group-hover:text-[#94a3b8] transition-colors">
                    {service.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: Featured Spotlight (4 cols) ── */}
          <div className="col-span-4 border-l-2 border-[#d4af37]/40 pl-8">

            {/* Featured image */}
            <div className="relative h-44 w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="77 SALON Luxury Ambience"
                fill
                className="object-cover brightness-75"
                sizes="350px"
              />
              {/* Badges on image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold bg-[#060e22]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#d4af37]/40">
                  <Sparkles className="w-2.5 h-2.5" />
                  Signature Ritual
                </span>
                <span className="text-[#f8fafc] text-sm font-bold bg-[#060e22]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#d4af37]/30">
                  ₹4,500
                </span>
              </div>
            </div>

            {/* Title & description */}
            <h3 className="font-antic text-lg font-semibold text-[#f8fafc] leading-snug">
              Hydra Facial — Skin Glowing
            </h3>
            <p className="text-xs text-[#7d8fa3] mt-2 leading-relaxed font-light">
              Deep dermal vacuum cleansing, oxygenation, and nutrient infusion for an immediate luminous finish.
            </p>

            {/* CTA row */}
            <div className="mt-5 pt-4 border-t-2 border-[#d4af37]/40 flex items-center justify-between">
              <Link
                href="/contact"
                onClick={onClose}
                className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] hover:text-[#f0cc6b] font-bold flex items-center gap-1.5 transition-colors"
              >
                Reserve Treatment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
