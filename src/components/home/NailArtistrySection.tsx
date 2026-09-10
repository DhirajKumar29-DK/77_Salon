import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const NailArtistrySection: React.FC = () => {
  const nailCategories = [
    {
      title: 'Manicure Care',
      startingAt: '₹300',
      services: ['Classic Manicure (₹500)', 'Spa Manicure (₹650)', 'Luxury Manicure (₹1000)', 'Express (₹300)'],
      link: '/services/manicure',
      image: '/images/services/manicure.jpg',
    },
    {
      title: 'Pedicure & Paraffin',
      startingAt: '₹350',
      services: ['Ice Cream Pedicure (₹2500)', 'Spa Pedicure (₹1200)', 'Callus Care (₹1000)', 'Foot Massage (₹600)'],
      link: '/services/pedicure',
      image: '/images/services/pedicure.jpg',
    },
    {
      title: 'Gel Polish & Art',
      startingAt: '₹50 / art',
      services: ['Hands / Feet (₹800)', 'French Gel (₹1500)', 'Cat Eye & Chrome (₹100–₹180)', 'Ombre (₹150)'],
      link: '/services/gel-polish',
      image: '/images/services/gel-polish.jpg',
    },
    {
      title: 'Nail Architecture',
      startingAt: '₹899',
      services: ['Gel Extensions Full Set (₹2000)', 'Acrylic Extensions (₹1500)', 'Overlay Gel (₹1500)', 'Refills (₹899)'],
      link: '/services/nail-extension',
      image: '/images/services/nail-extension.jpg',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative border-t border-[#d4af37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition (6 cols) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:max-w-none overflow-hidden shadow-2xl border-2 border-[#d4af37]/60">
              <Image
                src="/images/services/nail-extension.jpg"
                alt="High-End Nail Artistry at 77 SALON"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Gold Ribbon Box */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-[#060e22] text-white p-6 shadow-2xl border-t-2 border-[#d4af37] border-l border-r border-b border-[#d4af37]/30 max-w-[270px]">
              <Sparkles className="w-5 h-5 text-[#d4af37] mb-2" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                Paraffin & Gel Masters
              </span>
              <p className="font-serif text-lg text-slate-100 mt-1">
                Ice Cream Pedicure & Sculpted Gel Extensions
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
                The Nail Lounge
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2]">
              Sculpted Precision. Lasting Luminosity.
            </h2>

            <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
              Our nail studio delivers elevated hand and foot care — merging medical-grade sterilization with high-fashion artistic expression. Every cuticle is contoured, nourished, and finished to perfection.
            </p>

            {/* 4 Service Blocks with Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {nailCategories.map((cat) => (
                <div key={cat.title} className="group/card bg-[#0f2352]/70 border border-[#d4af37]/30 shadow-md hover:border-[#d4af37] transition-all rounded-md overflow-hidden flex flex-col justify-between">
                  <div className="relative h-28 w-full overflow-hidden bg-[#060e22]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-100"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f2352] to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <h4 className="font-serif text-base text-white font-medium drop-shadow">{cat.title}</h4>
                      <span className="text-xs text-[#d4af37] font-bold bg-[#060e22]/80 px-2 py-0.5 rounded border border-[#d4af37]/40">{cat.startingAt}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <ul className="space-y-1 text-xs text-[#cbd5e1] font-light mb-3">
                      {cat.services.map((s) => (
                        <li key={s} className="truncate">• {s}</li>
                      ))}
                    </ul>
                    <Link
                      href={cat.link}
                      className="text-[11px] uppercase tracking-wider text-[#d4af37] hover:text-[#e5c568] font-bold inline-flex items-center gap-1 pt-2 border-t border-[#d4af37]/20"
                    >
                      View Menu <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/book?service=ext-gel-full" variant="primary" size="md" className="font-bold">
                Book Nail Appointment
              </Button>
              <Button href="/pricing" variant="outline-white" size="md" className="border-[#cbd5e1]/40 text-white hover:border-[#d4af37]">
                Full Price Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
