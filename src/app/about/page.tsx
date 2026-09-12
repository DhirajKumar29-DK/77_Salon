import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Sparkles, Shield, Heart, Scissors } from 'lucide-react';

export const metadata = {
  title: 'About Our Sanctuary | 77 SALON',
  description:
    'Learn about 77 SALON, an elevated unisex sanctuary dedicated to Style, Beauty, and Care.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="MEET THE EXPERTS"
        title="The Artists Behind the Elegance."
        description="Our salon is home to a passionate team of master stylists, colorists, and beauty experts. Together, we bring decades of experience and artistry to create your perfect look in a luxurious, welcoming environment."
        breadcrumbCurrent="About"
        bgImage="/images/about/team.jpg"
        heightClass="min-h-[60vh] sm:min-h-[73vh]"
        contentClassName="ml-0 lg:-ml-16 xl:-ml-28 mb-0 sm:mb-12"
        imagePositionClass="object-top sm:object-center"
      />

      {/* Brand Introduction */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Image — fade-right (comes from right side to center) */}
            <ScrollReveal animation="fade-right" className="lg:col-span-6 relative group">
              <div className="relative aspect-square w-full shadow-lg overflow-hidden border-[3px] border-[#d4af37] rounded-lg">
                <Image
                  src="/images/about/owner.jpg"
                  alt="77 SALON Leadership"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#060e22] text-[#f8fafc] p-5 shadow-xl max-w-[240px] hidden sm:block border-[3px] border-[#d4af37] rounded-r-md">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] block font-semibold">
                  Expert Leadership
                </span>
                <p className="font-sans text-base text-[#f8fafc] mt-1 font-light">
                  Decades of industry excellence
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Text — fade-left (comes from left side to center) */}
            <ScrollReveal animation="fade-left" delay={100} className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                  Meet The Owner
                </span>
              </div>

              <h2 className="font-antic text-3xl sm:text-4xl font-light text-[#f8fafc] leading-[1.2]">
                A vision built on passion, expertise, and luxury.
              </h2>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                At 77 SALON, our journey began with a simple yet profound vision: to create a sanctuary where every client feels valued and every service is a masterpiece. Led by industry veterans, our team is dedicated to pushing the boundaries of style and care.
              </p>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                We believe that a salon is more than just a place for grooming—it&apos;s a destination for transformation. Our handpicked team of master stylists and therapists ensures that every visit is a bespoke experience tailored to your unique beauty.
              </p>

              <div className="pt-3 flex items-center gap-4">

                <Button href="/contact" variant="outline" size="md">
                  Book Appointment
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* The 3 Core Pillars */}
      <section className="py-16 sm:py-20 bg-[#060e22] text-[#f8fafc] border-y border-[#d4af37]/30">
        <Container>
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="The Core Pillars"
              title="Style • Beauty • Care"
              subtitle="The foundational ethos embedded in every service, from an express touch-up to our signature rituals."
              align="center"
              theme="dark"
              className="mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Scissors className="w-4 h-4 text-[#d4af37]" />,
                label: 'Style',
                img: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=800&q=80',
                body: 'Haircut architecture, custom beard shaping, high-fashion blowouts, and personalized aesthetics crafted to elevate your natural presence.',
                delay: 0,
              },
              {
                icon: <Sparkles className="w-4 h-4 text-[#d4af37]" />,
                label: 'Beauty',
                img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
                body: 'Luminous skin therapies, nourishing hair botanicals, and hand-finished nail extensions designed to illuminate your skin and hair.',
                delay: 100,
              },
              {
                icon: <Heart className="w-4 h-4 text-[#d4af37]" />,
                label: 'Care',
                img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
                body: 'Deep attentiveness to your comfort, gentle wax formulas for sensitive skin, scalp relaxation massages, and a peaceful atmosphere.',
                delay: 200,
              },
            ].map((pillar, index) => {
              const anim = index === 0 ? 'fade-right' : index === 2 ? 'fade-left' : 'fade-up';
              return (
              <ScrollReveal key={pillar.label} animation={anim} delay={pillar.delay} className="h-full">
                <div className="bg-[#0a1a3f]/90 border-[3px] border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 rounded-lg overflow-hidden flex flex-col group h-full shadow-md hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
                  <div className="relative h-44 w-full overflow-hidden bg-[#060e22] border-b-[3px] border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-colors">
                    <Image src={pillar.img} alt={pillar.label} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-[#0a1a3f]/90 px-3 py-1 rounded border-[2px] border-[#d4af37]/50 group-hover:border-[#d4af37] transition-colors">
                      {pillar.icon}
                      <h3 className="font-antic text-lg text-[#f8fafc] font-light">{pillar.label}</h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1">
                    <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )})}
          </div>
        </Container>
      </section>

      {/* The Unisex Salon Experience */}
      <section className="py-16 sm:py-20 bg-[#0a1a3f]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Text — fade-right */}
            <ScrollReveal animation="fade-right" className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                The Experience
              </span>
              <h2 className="font-antic text-3xl sm:text-4xl font-light text-[#f8fafc]">
                Designed for Everyone.
              </h2>
              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                77 SALON operates as a modern unisex salon. We create dedicated care pathways for both men and women with equal precision — eliminating outdated stereotypes in favor of genuine craftsmanship.
              </p>
              <div className="pt-2 flex gap-4">
                <Button href="/contact" variant="primary" size="md">
                  Book Your Visit
                </Button>

              </div>
            </ScrollReveal>

            {/* Right: Images — fade-left */}
            <ScrollReveal animation="fade-left" delay={100} className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-[3px] border-[#d4af37] group shadow-lg">
                  <Image
                    src="/images/services/bridal-facial.jpg"
                    alt="For Her at 77 SALON"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0a1a3f]/90 px-2.5 py-1 rounded border-[2px] border-[#d4af37]/50 group-hover:border-[#d4af37] transition-colors">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">For Her</span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-[3px] border-[#d4af37] group shadow-lg">
                  <Image
                    src="/images/services/hair-men.jpg"
                    alt="For Him at 77 SALON"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0a1a3f]/90 px-2.5 py-1 rounded border-[2px] border-[#d4af37]/50 group-hover:border-[#d4af37] transition-colors">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">For Him</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
