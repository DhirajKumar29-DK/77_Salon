import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { SignatureServices } from '@/components/home/SignatureServices';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { UnisexSplitSection } from '@/components/home/UnisexSplitSection';
import { HairExperienceSection } from '@/components/home/HairExperienceSection';
import { SkinFacialSection } from '@/components/home/SkinFacialSection';
import { NailArtistrySection } from '@/components/home/NailArtistrySection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { BridalSpotlight } from '@/components/home/BridalSpotlight';
import { PricingPreviewSection } from '@/components/home/PricingPreviewSection';
import { ExperiencePhilosophy } from '@/components/home/ExperiencePhilosophy';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Brand Intro */}
      <IntroSection />

      {/* Section 3: Signature Services */}
      <SignatureServices />

      {/* Section 4: Service Categories */}
      <CategoryGrid />

      {/* Section 5: Women / Men Split */}
      <UnisexSplitSection />

      {/* Section 6: Hair Experience */}
      <HairExperienceSection />

      {/* Section 7: Beauty / Skin */}
      <SkinFacialSection />

      {/* Section 8: Nails */}
      <NailArtistrySection />

      {/* Section 9: Gallery Preview */}
      <GalleryPreviewSection />

      {/* Section 10: Bridal */}
      <BridalSpotlight />

      {/* Section 11: Pricing Preview */}
      <PricingPreviewSection />

      {/* Section 12: Experience / Philosophy */}
      <ExperiencePhilosophy />

      {/* Section 13: Testimonials */}
      <TestimonialsSection />

      {/* Section 14: Final CTA (Removed per user request) */}
      {/* <FinalCTA /> */}
    </>
  );
}
