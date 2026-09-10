import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES, ServiceCategoryGroup } from '@/data/categories';
import { ALL_SERVICES } from '@/data/services';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Sparkles, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return { title: 'Category Not Found' };

  return {
    title: `${cat.name} Treatments`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  // Filter services belonging to this category
  const services = ALL_SERVICES.filter((svc) => {
    return cat.serviceCategoryKeys.includes(svc.category);
  });

  // Featured signature service for this category
  const featuredService = services.find((s) => s.isSignature) || services[0];

  // Related categories
  const relatedCategories = CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Category Sanctuary"
        title={cat.name}
        description={cat.tagline}
        breadcrumbCurrent={cat.name}
        bgImage={cat.heroImage}
      />

      {/* Category Overview & Featured Treatment */}
      <section className="py-20 sm:py-28 border-b border-[#d4af37]/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Category Manifesto (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                  {cat.badge}
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light text-[#f8fafc] leading-[1.2]">
                Artisanal rituals calibrated for supreme comfort.
              </h2>

              <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
                {cat.description}
              </p>

              <div className="flex items-center gap-8 text-xs text-[#cbd5e1] pt-2">
                <div>
                  <span className="block font-sans text-2xl text-[#d4af37] font-semibold">
                    {services.length}
                  </span>
                  <span className="uppercase tracking-wider">Treatments</span>
                </div>
                <div className="w-[1px] h-8 bg-[#d4af37]/30" />
                <div>
                  <span className="block font-sans text-2xl text-[#d4af37] font-semibold">
                    ₹{cat.startingPrice}
                  </span>
                  <span className="uppercase tracking-wider">Starting From</span>
                </div>
                <div className="w-[1px] h-8 bg-[#d4af37]/30" />
                <div>
                  <span className="block font-sans text-2xl text-[#f8fafc] font-medium">
                    Unisex
                  </span>
                  <span className="uppercase tracking-wider">Positioning</span>
                </div>
              </div>
            </div>

            {/* Right: Featured Signature Spotlight Box (6 cols) */}
            {featuredService && (
              <div className="lg:col-span-6">
                <div className="bg-[#060e22] text-[#f8fafc] p-8 sm:p-10 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-4 bg-[#0a1a3f] px-3 py-1 border border-[#d4af37]/30">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    Featured Signature Treatment
                  </div>

                  <h3 className="font-sans text-3xl sm:text-4xl font-light text-[#f8fafc] mb-2">
                    {featuredService.name}
                  </h3>

                  <div className="flex items-baseline gap-3 my-4">
                    <span className="font-sans text-3xl sm:text-4xl text-[#d4af37] font-semibold">
                      {featuredService.formattedPrice}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#cbd5e1]">
                      Exact PDF Price
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
                    {featuredService.description}
                  </p>

                  <div className="pt-6 border-t border-[#d4af37]/20 flex items-center justify-between">
                    <span className="text-xs text-[#cbd5e1]">
                      Duration: {featuredService.duration || 'Bespoke'}
                    </span>
                    <Button
                      href={`/book?service=${featuredService.id}`}
                      variant="primary"
                      size="sm"
                    >
                      Book This Ritual
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Complete Category Service List */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#d4af37]/20">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
                The Complete Menu
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#f8fafc]">
                {cat.name} Treatments & Pricing
              </h2>
            </div>
            <Link
              href="/pricing"
              className="mt-4 sm:mt-0 text-xs uppercase tracking-widest text-[#d4af37] hover:text-[#e5c568] font-semibold flex items-center gap-1.5 transition-colors"
            >
              Full Salon Price Book →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group bg-[#0a1a3f]/85 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-sans text-2xl text-[#f8fafc] group-hover:text-[#d4af37] transition-colors">
                      {svc.name}
                    </h3>
                    <span className="font-sans text-2xl text-[#d4af37] shrink-0 font-semibold">
                      {svc.formattedPrice}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mt-2">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#cbd5e1]">
                    {svc.duration && (
                      <>
                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{svc.duration}</span>
                      </>
                    )}
                  </div>

                  <Link
                    href={`/book?service=${svc.id}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[#d4af37] hover:text-[#e5c568] font-semibold text-xs group-hover:translate-x-1 transition-all"
                  >
                    <span>Reserve Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-[#060e22] text-[#f8fafc] border-y border-[#d4af37]/30">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block mb-2">
              Explore More
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#f8fafc]">
              Complementary Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                    {rel.badge}
                  </span>
                  <h3 className="font-sans text-xl text-[#f8fafc] group-hover:text-[#d4af37] transition-colors mt-1">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-[#cbd5e1] font-light mt-2 line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-[#cbd5e1] group-hover:text-[#d4af37]">
                  <span>Starting ₹{rel.startingPrice}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Booking CTA Strip */}
      <section className="py-16 bg-[#0a1a3f] border-t border-[#d4af37]/30 text-center">
        <Container>
          <h3 className="font-sans text-3xl text-[#f8fafc] font-light">
            Ready to experience {cat.name}?
          </h3>
          <p className="text-xs sm:text-sm text-[#cbd5e1] mt-2 max-w-md mx-auto font-light">
            Appointments can be reserved directly online or via WhatsApp concierge.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book" variant="primary" size="lg">
              Book Appointment
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Inquire via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
