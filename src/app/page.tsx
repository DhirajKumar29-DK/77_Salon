import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { UnifiedSignatureShowcase } from '@/components/home/UnifiedSignatureShowcase';
import { HairExperienceSection } from '@/components/home/HairExperienceSection';
import { BridalSpotlight } from '@/components/home/BridalSpotlight';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: Editorial Crossfade & Dual CTAs */}
      <HeroSection />

      {/* 2. Atelier Intro: Heritage & 3 Pillars (Style, Beauty, Care) */}
      <IntroSection />

      {/* 3. Unified Signature Showcase: Consolidated Hair, Skin, Nails, Bridal */}
      <UnifiedSignatureShowcase />

      {/* 5. Hair Atelier: Bespoke Hair Health */}
      <HairExperienceSection />

      {/* 6. Bridal Suite: Luminous Perfection */}
      <BridalSpotlight />

      {/* 8. Guest Reflections: Verified Testimonials */}
      <TestimonialsSection />
    </>
  );
}
