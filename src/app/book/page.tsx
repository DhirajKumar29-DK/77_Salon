import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { BookingInterface } from '@/components/booking/BookingInterface';

export const metadata = {
  title: 'Book Appointment',
  description:
    'Reserve your luxury salon appointment at 77 SALON. Select treatments from our official Price Book.',
};

export default function BookPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Reservation Suite"
        title="Reserve Your Appointment."
        description="Select your desired treatment from our official Price Book, specify your preferred date and time, and our concierge will coordinate your visit."
        breadcrumbCurrent="Book Appointment"
        bgImage="/images/brand/pdf_cover.png"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <BookingInterface />
        </Container>
      </section>
    </div>
  );
}
