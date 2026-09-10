import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { PricingMenu } from '@/components/pricing/PricingMenu';

export const metadata = {
  title: 'Official Price Book & Treatment Menu',
  description:
    'Browse transparent, official pricing for 77 SALON across hair, skin, facial, manicure, pedicure, waxing, and nail extension rituals.',
};

export default function PricingPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Official Price Book"
        title="Transparent Treatment Pricing."
        description="Every treatment at 77 SALON is delivered with transparent, published rates. Filter by category, search specific services, or prepare your appointment itinerary."
        breadcrumbCurrent="Pricing"
        bgImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <PricingMenu />
        </Container>
      </section>
    </div>
  );
}
