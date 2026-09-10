import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { GalleryViewer } from '@/components/gallery/GalleryViewer';

export const metadata = {
  title: 'Editorial Photo Gallery',
  description:
    'Explore curated visuals of hair transformations, dermal treatments, artisanal nail sculpting, and salon ambience at 77 SALON.',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Visual Chronicle"
        title="The Editorial Gallery."
        description="A visual showcase capturing the quiet luxury, precise craft, and refined transformations realized within the 77 SALON sanctuary."
        breadcrumbCurrent="Gallery"
        bgImage="/images/services/gel-polish.jpg"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <GalleryViewer />
        </Container>
      </section>
    </div>
  );
}
