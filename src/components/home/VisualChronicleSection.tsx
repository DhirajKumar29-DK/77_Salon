import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Calendar, Sparkles, Eye } from 'lucide-react';

const CHRONICLE_ITEMS = [
  {
    id: 'chronicle-hair',
    title: 'Precision Styling & Hair Architecture',
    subtitle: 'Moroccan Argan Spas & French Balayage',
    category: 'Hair Atelier',
    imageUrl: '/images/services/hair-men.jpg',
    link: '/services/hair-men',
  },
  {
    id: 'chronicle-skin',
    title: 'Hydra Facial & Skin Renewal',
    subtitle: 'Cellular Hydration & Luminescent Glow',
    category: 'Facial & Skin',
    imageUrl: '/images/services/facial.jpg',
    link: '/services/facial',
  },
  {
    id: 'chronicle-nails',
    title: 'Couture Hand & Ice Cream Paraffin Care',
    subtitle: 'Sculpted Gel Extensions & Chrome Artistry',
    category: 'Nail Studio',
    imageUrl: '/images/services/nail-extension.jpg',
    link: '/services/nail-extension',
  },
  {
    id: 'chronicle-bridal',
    title: 'Bridal Glow & Ceremonial Preparation',
    subtitle: 'Dedicated 90-Minute Bridal Glow Facial',
    category: 'Bridal Care',
    imageUrl: '/images/services/bridal-facial.jpg',
    link: '/bridal',
  },
];

export const VisualChronicleSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative border-t border-[#d4af37]/20 overflow-hidden">
      {/* Subtle dark glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.04) 0%, transparent 60%)',
        }}
      />

      <ScrollReveal animation="fade-in">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-5 border-b border-[#d4af37]/20">
            <div className="mb-4 md:mb-0">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-3">
                <span className="w-6 h-[1px] bg-[#d4af37]" />
                Visual Chronicle
                <span className="w-6 h-[1px] bg-[#d4af37]" />
              </span>
              <h2 className="font-antic text-4xl sm:text-5xl font-light text-[#f8fafc] leading-[1.1]">
                Atmosphere &amp; Craftsmanship.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed max-w-xl">
                Glimpses into our spaces, precision hair artistry, skin treatments, and bespoke nail artistry.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center text-xs uppercase tracking-widest text-[#cbd5e1] hover:text-[#d4af37] font-semibold transition-colors shrink-0"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#d4af37]" />
            </Link>
          </div>

          {/* 4 Gallery Vignettes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHRONICLE_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group relative overflow-hidden bg-[#060e22] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 rounded-lg flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/85 via-[#060e22]/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 bg-[#0a1a3f]/95 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold text-[#d4af37] border border-[#d4af37]/30">
                    {item.category}
                  </div>
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 border border-[#d4af37]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 bg-[#060e22]">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#f8fafc] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#cbd5e1] font-light mt-1.5 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Booking Banner */}
          <div className="mt-12 bg-[#060e22] border border-[#d4af37]/40 rounded-xl p-6 sm:p-10 relative overflow-hidden text-center flex flex-col items-center shadow-lg">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)' }}
            />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#d4af37]/40 bg-[#0a1a3f] rounded-full mb-4 relative z-10">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Reserve Your Sanctuary
              </span>
            </div>

            <h2 className="font-antic text-2xl sm:text-3xl lg:text-4xl font-light text-[#f8fafc] leading-tight max-w-xl relative z-10">
              Make time for yourself at 77 SALON.
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#cbd5e1] font-light max-w-lg leading-relaxed relative z-10">
              Step away from the rush. Experience precision hair sculpting, restorative botanical facials, and couture nail artistry at our published price book rates.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10">
              <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto font-semibold shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Button href="/services/manicure" variant="outline" size="md" className="w-full sm:w-auto font-semibold">
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#d4af37]" />
              </Button>
            </div>

            <div className="mt-8 pt-5 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#cbd5e1] font-light relative z-10">
              <span className="text-[#f8fafc] font-medium">Unisex Salon Sanctuary</span>
              <span className="text-[#d4af37]">•</span>
              <span className="text-[#f8fafc] font-medium">Transparent Published Pricing</span>
              <span className="text-[#d4af37]">•</span>
              <span className="text-[#f8fafc] font-medium">Bridal Glow Services</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
