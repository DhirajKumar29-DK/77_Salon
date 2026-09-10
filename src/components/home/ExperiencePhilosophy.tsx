import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles, Scissors, Feather, Heart } from 'lucide-react';

export const ExperiencePhilosophy: React.FC = () => {
  const pillars = [
    {
      title: 'STYLE',
      eyebrow: 'Pillar 01',
      image: '/images/services/hair-men.jpg',
      description:
        'Individualized aesthetics shaped by master technicians who understand facial symmetry, hair texture, and contemporary elegance.',
      detail: 'Precision haircuts, dimensional color, and bespoke nail silhouettes.',
    },
    {
      title: 'BEAUTY',
      eyebrow: 'Pillar 02',
      image: '/images/services/facial.jpg',
      description:
        'Holistic skin radiance and hair vitality cultivated through clinical-grade facials, oxygen infusions, and restorative botanical spas.',
      detail: 'Hydra facials, diamond polish, and pure Moroccan argan therapy.',
    },
    {
      title: 'CARE',
      eyebrow: 'Pillar 03',
      image: '/images/services/pedicure.jpg',
      description:
        'An unhurried sanctuary atmosphere founded on deep attentiveness, hospital-grade sanitation, and genuine hospitality.',
      detail: 'Paraffin foot soaks, warm herbal towels, and relaxing pressure massage.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The 77 Creed"
          title="The Sanctuary Experience."
          subtitle="A harmonious cadence where high-fashion discipline meets deeply restorative personal attention."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#0f2352]/70 backdrop-blur border border-[#d4af37]/30 flex flex-col justify-between shadow-xl relative group hover:border-[#d4af37] transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Pillar Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#060e22]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f2352] to-transparent" />
                <div className="absolute top-4 left-4 bg-[#060e22]/90 border border-[#d4af37]/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold rounded">
                  {pillar.eyebrow}
                </div>
                <div className="absolute bottom-3 left-6">
                  <h3 className="font-sans text-3xl sm:text-4xl font-light text-white tracking-wide drop-shadow">
                    {pillar.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent mb-4" />
                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#d4af37]/20">
                  <p className="text-xs text-[#d4af37]/90 font-sans italic">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
