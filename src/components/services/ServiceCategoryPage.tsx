'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { SERVICE_CATEGORIES, CategoryMeta } from '@/data/serviceCategories';
import { Button } from '@/components/ui/Button';
import {
  Sparkles, ArrowRight, Clock, ChevronRight,
  Diamond, ShieldCheck, Leaf, Heart, Star,
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
══════════════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Animated wrapper ── */
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const { ref, visible } = useReveal();
  const hiddenMap = {
    up: 'opacity-0 translate-y-16',
    left: 'opacity-0 -translate-x-16',
    right: 'opacity-0 translate-x-16',
    fade: 'opacity-0 scale-95',
  };
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hiddenMap[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};



/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════ */
interface Props { initialCategory: string; }

export const ServiceCategoryPage: React.FC<Props> = ({ initialCategory }) => {
  const cat: CategoryMeta =
    SERVICE_CATEGORIES.find((c) => c.id === initialCategory) ?? SERVICE_CATEGORIES[0];

  const services = ALL_SERVICES.filter((s) => cat.filter(s.category));

  /* ── § 1  HERO ─────────────────────────────────────────────────── */
  return (
    <div className="bg-[#060e22] text-[#f8fafc]">

      {/* ════════════════════════════════════════════════════════════
          §1 HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image
            src={cat.heroImage}
            alt={cat.label}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e22]/80 via-[#060e22]/50 to-[#060e22]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/40 via-transparent to-[#060e22]/40" />

        {/* Italic script decoration */}
        <div
          className="absolute bottom-10 right-10 hidden lg:block text-right"
          style={{ animation: 'fadeUp 0.7s 0.6s both' }}
        >
          <p className="font-serif text-xl italic text-[#d4af37]/30 leading-snug whitespace-pre-line">
            {cat.script}
          </p>
        </div>

        {/* Hero text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-end min-h-[45vh] sm:min-h-[62vh]">
          <div className="flex flex-col items-start max-w-3xl relative z-20 ml-0 lg:-ml-16 xl:-ml-28 mb-12 sm:mb-24 lg:mb-32">
            {/* Breadcrumb */}
            <nav
              className="flex items-center justify-start gap-2 text-[10px] uppercase tracking-widest text-[#94a3b8] mb-5"
              style={{ animation: 'fadeUp 0.5s 0.1s both' }}
            >
              <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#d4af37]">Services</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#d4af37]">{cat.label}</span>
            </nav>

            <div style={{ animation: 'fadeUp 0.5s 0.2s both' }}>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                {cat.eyebrow}
                <span className="w-8 h-[1px] bg-[#d4af37]" />
              </span>
            </div>

            <h1
              className="font-antic font-light text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight mt-3 mb-4 drop-shadow-lg"
              style={{ animation: 'fadeUp 0.7s 0.3s both' }}
            >
              {cat.headline}
            </h1>

            <p
              className="text-base sm:text-lg text-[#cbd5e1] font-light max-w-2xl leading-relaxed"
              style={{ animation: 'fadeUp 0.6s 0.4s both' }}
            >
              {cat.description}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §2 ABOUT — photo grid + benefits
      ════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#f8f6f0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT: Photo grid */}
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-3 h-[420px] sm:h-[500px]">
                {/* Large image */}
                <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden border-[3px] border-[#d4af37] shadow-xl group">
                  <Image src={cat.photoGrid[0]} alt={cat.label} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="40vw" />
                </div>
                {/* Small top */}
                <div className="relative rounded-2xl overflow-hidden border-[3px] border-[#d4af37] shadow-lg group">
                  <Image src={cat.photoGrid[1]} alt={cat.label} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="20vw" />
                </div>
                {/* Small bottom */}
                <div className="relative rounded-2xl overflow-hidden border-[3px] border-[#d4af37] shadow-lg group">
                  <Image src={cat.photoGrid[2]} alt={cat.label} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="20vw" />
                </div>
              </div>
            </Reveal>

            {/* RIGHT: Text + benefits */}
            <Reveal direction="left" delay={150}>
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold block mb-3">
                  The {cat.label.split(' ')[0]} Experience
                </span>
                <h2 className="font-antic text-4xl sm:text-5xl font-light text-[#060e22] leading-[1.15] whitespace-pre-line mb-5">
                  {cat.aboutTitle}
                </h2>
                <p className="text-sm text-[#4a5568] font-light leading-relaxed mb-10">
                  {cat.aboutDesc}
                </p>

                {/* 4 benefit icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {cat.benefits.map((b, i) => (
                    <Reveal key={b.title} delay={i * 80} direction="up">
                      <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white border-[3px] border-[#d4af37]/60 hover:border-[#d4af37] transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(212,175,55,0.2)]">
                        <span className="text-2xl text-[#d4af37] font-serif leading-none">{b.icon}</span>
                        <p className="text-[11px] text-[#060e22] font-semibold uppercase tracking-wide whitespace-pre-line leading-snug">
                          {b.title}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §3 PRICING — "Choose Your Ritual"
      ════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-12 sm:py-16 bg-[#060e22]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          {/* Header */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-[3px] border-[#d4af37]/50">
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold block mb-3">
                  Our {cat.label} Services
                </span>
                <h2 className="font-antic text-4xl sm:text-5xl font-light text-[#f8fafc] leading-tight">
                  {cat.pricingTitle}
                </h2>
              </div>
              <p className="text-sm text-[#e2e8f0] font-light leading-relaxed max-w-xs sm:text-right whitespace-pre-line italic tracking-wide" style={{ textShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
                {cat.pricingTagline}
              </p>
            </div>
          </Reveal>

          {/* Service rows */}
          <div className="space-y-2">
            {services.map((svc, idx) => (
              <Reveal key={svc.id} delay={idx * 60} direction="up">
                <div className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl border-[3px] border-transparent hover:border-[#d4af37] hover:bg-[#0a1a3f] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
                  
                  {/* Top Row on Mobile / Left Side on Desktop */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full sm:flex-1 min-w-0">
                    {/* Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-[3px] border-[#d4af37] shrink-0 group-hover:border-[#d4af37] transition-all duration-300">
                      <Image src={cat.heroImage} alt={svc.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" sizes="64px" />
                    </div>

                    {/* Index */}
                    <span className="text-xs text-[#d4af37]/30 font-light tabular-nums hidden sm:block shrink-0 w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base sm:text-lg font-semibold text-[#e2e8f0] group-hover:text-white transition-colors">
                          {svc.name}
                        </span>
                        {svc.isSignature && (
                          <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider px-2.5 py-0.5 bg-[#d4af37]/15 text-[#d4af37] font-bold rounded-full border border-[#d4af37]/30">
                            <Sparkles className="w-2.5 h-2.5" />
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#7d8fa3] font-light mt-0.5">{svc.description}</p>
                    </div>
                  </div>

                  {/* Bottom Row on Mobile / Right Side on Desktop */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pl-[72px] sm:pl-0 mt-2 sm:mt-0 gap-4">
                    {/* Duration */}
                    {svc.duration && (
                      <span className="hidden md:flex items-center gap-1.5 text-xs text-[#7d8fa3] shrink-0">
                        <Clock className="w-3 h-3 text-[#d4af37]/50" />
                        {svc.duration}
                      </span>
                    )}

                    {/* Price */}
                    <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-semibold shrink-0">
                      {svc.formattedPrice}
                    </span>

                    {/* Book */}
                    <Link
                      href="/contact"
                      className="shrink-0 px-5 py-2 bg-[#d4af37] text-[#060e22] text-[10px] uppercase tracking-widest font-bold hover:bg-[#e5c568] hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)] transition-all duration-200 rounded-lg"
                    >
                      Book
                    </Link>
                  </div>
                </div>
                {idx < services.length - 1 && (
                  <div className="h-[1px] bg-[#d4af37]/8 mx-5" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §4 PROCESS — "A Ritual in Every Step"
      ════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* BG image with heavy overlay */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cat.heroImage} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#060e22]/88" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: italic quote */}
            <Reveal direction="right">
              <div className="space-y-4">
                <p className="font-serif text-4xl sm:text-5xl lg:text-6xl italic text-[#d4af37] leading-tight whitespace-pre-line">
                  {cat.quote}
                </p>
                <span className="text-sm text-[#7d8fa3] font-light tracking-widest">{cat.quoteAuthor}</span>
                <div className="w-12 h-[2px] bg-[#d4af37]" />
              </div>
            </Reveal>

            {/* RIGHT: steps */}
            <Reveal direction="left" delay={100}>
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold block mb-2">
                  Our Process
                </span>
                <h2 className="font-antic text-3xl sm:text-4xl font-light text-[#f8fafc] mb-10 leading-tight">
                  A Ritual in Every Step
                </h2>
                <p className="text-sm text-[#7d8fa3] font-light mb-8 leading-relaxed">
                  Thoughtfully designed for your comfort and care.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {cat.steps.map((step, i) => (
                    <Reveal key={step.num} delay={i * 80} direction="up">
                      <div className="group p-5 bg-[#0a1a3f]/70 backdrop-blur border-[3px] border-[#d4af37]/40 rounded-xl hover:border-[#d4af37] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest block mb-2">
                          {step.num}
                        </span>
                        <h4 className="text-sm font-bold text-[#f8fafc] group-hover:text-[#d4af37] transition-colors mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#7d8fa3] font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §5 GALLERY — horizontal thumbnail strip
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-14 bg-[#0a1a3f]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <Reveal>
            <div className="flex items-end justify-between mb-8 pb-5 border-b border-[#d4af37]/20">
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold block mb-2">
                  Gallery
                </span>
                <h2 className="font-antic text-3xl sm:text-4xl font-light text-[#f8fafc]">
                  {cat.galleryTitle}
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {cat.galleryImages.map((img, i) => (
              <Reveal key={img + i} delay={i * 70} direction="up">
                <Link href="/gallery" className="group block relative aspect-[4/5] rounded-xl overflow-hidden border-[3px] border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-300">
                  <Image src={img} alt={cat.galleryTitle} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" sizes="20vw" />
                  <div className="absolute inset-0 bg-[#060e22]/0 group-hover:bg-[#060e22]/20 transition-all duration-300" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §6 CTA BANNER
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cat.ctaBgImage} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#060e22]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e22]/70 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-14">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-bold block mb-3">
                  Treat Yourself
                </span>
                <h2 className="font-antic text-4xl sm:text-5xl lg:text-6xl font-light text-[#f8fafc] leading-tight mb-3">
                  {cat.ctaTitle}
                </h2>
                <p className="text-sm text-[#cbd5e1] font-light italic">{cat.ctaTagline}</p>
              </div>
              <Button href="/contact" variant="primary" size="lg">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          §7 BOTTOM TRUST BAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-[#060e22] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Diamond className="w-6 h-6 text-[#d4af37]" />, title: 'Premium Products', desc: 'Trusted brands for lasting care' },
              { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Hygienic Care', desc: 'Clean, safe and comfortable environment' },
              { icon: <Star className="w-6 h-6 text-[#d4af37]" />, title: 'Expert Attention', desc: 'Personalized care for every client' },
              { icon: <Heart className="w-6 h-6 text-[#d4af37]" />, title: 'Lasting Beauty', desc: 'Healthy, polished and confident hands' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70} direction="up">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-[3px] border-[#d4af37]/60 hover:border-[#d4af37] transition-all duration-300 flex items-center justify-center bg-[#0a1a3f]">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold text-[#f8fafc] uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-[#7d8fa3] font-light leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to   { transform: scale(1.0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
