import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { ServicesDiscovery } from '@/components/services/ServicesDiscovery';

export const metadata = {
  title: 'Services & Treatment Menu',
  description:
    'Browse the complete luxury service menu of 77 SALON including Manicures, Pedicures, Facials, Gel Polish, Nail Extensions, Hair, and Waxing.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="The 77 Atelier"
        title="Complete Services Menu."
        description="Every treatment is formulated with premium active botanicals and carried out by certified specialists. Filter by category or search our complete Price Book."
        breadcrumbCurrent="Services"
        bgImage="/images/services/facial.jpg"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <ServicesDiscovery />
        </Container>
      </section>
    </div>
  );
}
