'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { Sparkles, ArrowRight, Diamond, ShieldCheck, Heart, Leaf, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/* ─── Category config ───────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'manicure',
    label: 'Manicure',
    subtitle: 'Hand Care Treatments',
    desc: 'Indulge in expert nail care designed to keep your hands healthy, beautiful and always ready for what\'s next.',
    tagline: 'Beautiful hands. Every day.',
    script: 'Care\nin every\ndetail',
    image: '/images/services/manicure.jpg',
    thumb: '/images/services/manicure.jpg',
    filter: (c: string) => c === 'manicure',
  },
  {
    id: 'pedicure',
    label: 'Pedicure',
    subtitle: 'Foot Care Rituals',
    desc: 'Revive tired feet with our restorative pedicure rituals — from classic care to luxurious paraffin treatments.',
    tagline: 'Happy feet. Always.',
    script: 'Step into\nluxury',
    image: '/images/services/pedicure.jpg',
    thumb: '/images/services/pedicure.jpg',
    filter: (c: string) => c === 'pedicure',
  },
  {
    id: 'facial',
    label: 'Facial & Skin',
    subtitle: 'Skin Renewal Treatments',
    desc: 'Radiant, luminous skin starts here. Our expert facials restore, hydrate, and illuminate your natural glow.',
    tagline: 'Glow from within.',
    script: 'Radiant\nskin awaits',
    image: '/images/services/facial.jpg',
    thumb: '/images/services/facial.jpg',
    filter: (c: string) => c === 'facial',
  },
  {
    id: 'gel-polish',
    label: 'Gel Polish',
    subtitle: 'Long-Lasting Colour',
    desc: 'High-shine gel colours with chip-free finish. Hands, feet & custom nail art — built to last.',
    tagline: 'Colour that lasts.',
    script: 'Bold\ncolour,\nbold you',
    image: '/images/services/gel-polish.jpg',
    thumb: '/images/services/gel-polish.jpg',
    filter: (c: string) => c === 'gel-polish',
  },
  {
    id: 'nail-extension',
    label: 'Nail Extension',
    subtitle: 'Sculpted Nail Artistry',
    desc: 'Acrylic, gel overlays and chrome art — precision sculpting for your dream nails.',
    tagline: 'Your nails, perfected.',
    script: 'Art on\nyour tips',
    image: '/images/services/nail-extension.jpg',
    thumb: '/images/services/nail-extension.jpg',
    filter: (c: string) => c === 'nail-extension',
  },
  {
    id: 'hair-women',
    label: 'Hair – Women',
    subtitle: 'Women\'s Hair Services',
    desc: 'Moroccan Argan spas, French balayage, precision cuts & blowouts — bespoke hair for every woman.',
    tagline: 'Your best hair day.',
    script: 'Styled\nwith care',
    image: '/images/services/bridal-facial.jpg',
    thumb: '/images/services/bridal-facial.jpg',
    filter: (c: string) => c === 'hair-women-spa' || c === 'hair-women-styling',
  },
  {
    id: 'hair-men',
    label: 'Hair & Grooming – Men',
    subtitle: 'Men\'s Grooming Services',
    desc: 'Precision haircuts, beard contouring, scalp therapy & Moroccan hair spas for the modern man.',
    tagline: 'Sharp. Confident. You.',
    script: 'Precision\ngrooming',
    image: '/images/services/hair-men.jpg',
    thumb: '/images/services/hair-men.jpg',
    filter: (c: string) => c === 'hair-men-spa' || c === 'hair-men-grooming',
  },
  {
    id: 'waxing',
    label: 'Waxing & Body Care',
    subtitle: 'Body Hair & Polishing',
    desc: 'Rica wax rituals, honey wax, threading & full-body polishing for smooth, radiant skin.',
    tagline: 'Smooth, always.',
    script: 'Silky\nsmooth skin',
    image: '/images/services/waxing.jpg',
    thumb: '/images/services/waxing.jpg',
    filter: (c: string) => c === 'waxing',
  },
];



/* ─── Component ─────────────────────────────────────────────────── */
interface PricingMenuProps {
  initialCategory?: string;
}

export const PricingMenu: React.FC<PricingMenuProps> = ({ initialCategory }) => {
  const [activeId, setActiveId] = useState(
    initialCategory && CATEGORIES.find((c) => c.id === initialCategory)
      ? initialCategory
      : 'manicure'
  );

  const activeCat = CATEGORIES.find((c) => c.id === activeId)!;

  const services = useMemo(
    () => ALL_SERVICES.filter((s) => activeCat.filter(s.category)),
    [activeCat]
  );

  return (
    <div className="min-h-screen bg-[#060e22]">

      {/* ── Clean PageHero-style header ──────────────────────────── */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#060e22] text-[#f8fafc] overflow-hidden border-b border-[#d4af37]/30">
        {/* Fixed background image — clean salon ambience */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=85"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-[#060e22]/50 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060e22]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-6">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[10px] text-[#cbd5e1] mb-5 uppercase tracking-wider">
            <Link href="/">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#d4af37]">Pricing</span>
            <span className="text-white/40">/</span>
            <span className="text-[#d4af37]">{activeCat.label}</span>
          </nav>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-3">Price Book</span>
          <h1 className="font-antic font-light text-4xl sm:text-5xl md:text-6xl text-[#f8fafc] leading-[1.1] drop-shadow-lg mb-4">
            Transparent Treatment Pricing.
          </h1>
          <p className="text-[#cbd5e1] text-base font-light max-w-2xl">
            Every treatment at 77 SALON is delivered with transparent, published rates. Select a category to explore.
          </p>
        </div>
      </section>


      {/* ── Main Content: Sidebar + Price Table ─────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8 items-start">

          {/* ── Left Sidebar ──────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col w-56 shrink-0 sticky top-24 gap-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4">
              Our Services
            </h3>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                  activeId === cat.id
                    ? 'bg-[#d4af37]/10 border-l-2 border-[#d4af37] text-[#d4af37]'
                    : 'border-l-2 border-transparent text-[#94a3b8] hover:text-[#e2e8f0] hover:border-[#d4af37]/40'
                }`}
              >
                <span className="text-sm font-semibold">{cat.label}</span>
              </button>
            ))}

            {/* Bottom CTA Card */}
            <div className="mt-6 relative overflow-hidden rounded-xl border border-[#d4af37]/30">
              <div className="relative h-32">
                <Image
                  src="/images/services/manicure.jpg"
                  alt="Book Appointment"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-[#060e22]/70" />
              </div>
              <div className="p-4 bg-[#0a1a3f]">
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold mb-1">Self Care</p>
                <p className="text-sm font-bold text-white leading-tight mb-3">LOOKS GOOD ON YOU</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider bg-[#d4af37] text-[#060e22] px-3 py-2 font-bold hover:bg-[#e5c568] transition-colors w-full justify-center"
                >
                  Book Appointment
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* ── Right: Price Table ────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10 pb-6 border-b border-[#d4af37]/20">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-2">
                  {activeCat.label}
                </span>
                <h2 className="font-antic text-4xl sm:text-5xl font-light text-white leading-tight">
                  {activeCat.subtitle}
                </h2>
              </div>
              <p className="text-sm text-[#7d8fa3] font-light leading-relaxed max-w-xs sm:text-right">
                {activeCat.desc}
              </p>
            </div>

            {/* Numbered Service List */}
            <div className="space-y-0">
              {services.map((svc, idx) => (
                <ScrollReveal key={svc.id} animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'} delay={(idx % 2) * 150}>
                <div
                  className="group flex items-center gap-5 py-5 border-b border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-200"
                >
                  {/* Number */}
                  <span className="text-2xl font-light text-[#d4af37]/30 w-8 shrink-0 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Name + Desc */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-lg sm:text-xl font-semibold text-[#e2e8f0] group-hover:text-[#d4af37] transition-colors">
                        {svc.name}
                      </span>
                      {svc.isSignature && (
                        <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#d4af37]/15 text-[#d4af37] font-bold rounded border border-[#d4af37]/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          Signature
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#7d8fa3] font-light mt-0.5 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Price */}
                  <span className="font-serif text-2xl text-[#d4af37] font-semibold shrink-0">
                    {svc.formattedPrice}
                  </span>

                  {/* Book Button */}
                  <Link
                    href="/contact"
                    className="px-4 py-1.5 bg-[#d4af37] text-[#060e22] text-[10px] uppercase tracking-widest font-bold hover:bg-[#e5c568] transition-colors rounded whitespace-nowrap shrink-0"
                  >
                    Book
                  </Link>
                </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Package Promo Banner */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 p-5 bg-[#0a1a3f] border border-[#d4af37]/30 rounded-xl">
              <Diamond className="w-8 h-8 text-[#d4af37] shrink-0" />
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-base font-semibold text-white">Complete {activeCat.label} Experience</h4>
                <p className="text-xs text-[#7d8fa3] mt-0.5">
                  Pair with a complementary service and get a special package price.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-[#d4af37] text-[#d4af37] text-xs uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-[#060e22] transition-all rounded"
              >
                View Packages
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Trust Bar ─────────────────────────────────────── */}
      <div className="border-t border-[#d4af37]/20 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Leaf className="w-7 h-7 text-[#d4af37]" />, title: 'Premium Products', desc: 'Trusted brands for lasting care' },
              { icon: <ShieldCheck className="w-7 h-7 text-[#d4af37]" />, title: 'Hygienic Care', desc: 'Clean, safe and comfortable environment' },
              { icon: <Heart className="w-7 h-7 text-[#d4af37]" />, title: 'Expert Attention', desc: 'Personalized care for every client' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#0a1a3f]">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-xs text-[#7d8fa3] font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
