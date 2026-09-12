import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const HairExperienceSection: React.FC = () => {
  const womenServices = [
    { name: 'Hair Spa', detail: 'Basic (₹700–₹1500), Premium (₹1000–₹2500), Moroccon & Keratin (₹2000–₹4500)' },
    { name: 'Hair Wash', detail: 'Short (₹400), Medium (₹500), Long (₹700) with conditioning' },
    { name: 'Blow Dry', detail: 'Hair Wash + Blow Dry from ₹650 to ₹1000' },
    { name: 'Hair Cut', detail: 'Basic Hair Cut (₹650) & Advance Hair Cut (₹1000)' },
    { name: 'Hair Colour', detail: 'Per Streak (₹500), Root Touch Up (₹1500), Global Colour (₹3000–₹4500)' },
    { name: 'Hair Styling', detail: 'Ironing or Tongs for curls or straight finish (₹1700)' },
  ];

  const menServices = [
    { name: 'Hair Spa', detail: 'Basic (₹700), Premium (₹1200), Keratin (₹2000), Moroccon (₹2500)' },
    { name: 'Hair Wash', detail: 'Short (₹250), Long (₹350), Wash + Blow Dry (₹450)' },
    { name: 'Hair Cut', detail: 'Basic Hair Cut (₹350) & Advance Hair Cut (₹550)' },
    { name: 'Beard Styling', detail: 'Beard Trimming (₹200) & Sharp Beard Styling (₹300)' },
    { name: 'Shaving', detail: 'Clean Shave with warm towel ritual (₹250)' },
    { name: 'Hair Colour', detail: 'Beard Colour (₹500), Moustache (₹200), Hair Colour (₹1200), Global (₹1500)' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0a1a3f] text-[#f8fafc] border-t border-[#d4af37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <SectionHeading
            eyebrow="The Hair Atelier"
            title={<>Bespoke Hair Health & <span className="text-[#d4af37] italic">Architecture.</span></>}
            subtitle={<>From pure Moroccan repair therapy to precision cuts and dimensional colour, our unisex hair specialists bring mastery to every appointment.</>}
            align="center"
            theme="dark"
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Women's Hair Experience Card */}
          <ScrollReveal animation="fade-right" delay={100} className="h-full">
            <div className="h-full group bg-[#060e22] border-[3px] border-[#d4af37]/30 flex flex-col justify-between shadow-xl hover:border-[#d4af37] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-500 rounded-lg overflow-hidden">
              <div className="relative h-60 w-full overflow-hidden bg-[#060e22]">
                <Image
                  src="/images/services/bridal-facial.jpg"
                  alt="Women's Haircare and Styling at 77 SALON"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#060e22]/90 border border-[#d4af37]/50 px-3 py-1 text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold rounded">
                  For Women
                </div>
                <div className="absolute top-4 right-4 bg-[#060e22]/80 px-2.5 py-1 text-xs text-[#cbd5e1] font-sans rounded">
                  Starting from ₹400
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-antic text-3xl text-[#f8fafc] font-light mb-6">
                    Women’s Haircare & Styling
                  </h3>

                  <div className="space-y-4">
                    {womenServices.map((svc) => (
                      <div key={svc.name} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-[#f8fafc]">{svc.name}</h4>
                          <p className="text-xs text-[#cbd5e1] font-light">{svc.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                  <Button href="/services/hair-women" variant="primary" size="sm" className="w-full font-semibold">
                    View All Women’s Hair Services
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Men's Hair Experience Card */}
          <ScrollReveal animation="fade-left" delay={200} className="h-full">
            <div className="h-full group bg-[#060e22] border-[3px] border-[#d4af37]/30 flex flex-col justify-between shadow-xl hover:border-[#d4af37] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-500 rounded-lg overflow-hidden">
              <div className="relative h-60 w-full overflow-hidden bg-[#060e22]">
                <Image
                  src="/images/services/hair-men.jpg"
                  alt="Men's Hair & Grooming at 77 SALON"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#060e22]/90 border border-[#d4af37]/50 px-3 py-1 text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold rounded">
                  For Men
                </div>
                <div className="absolute top-4 right-4 bg-[#060e22]/80 px-2.5 py-1 text-xs text-[#cbd5e1] font-sans rounded">
                  Starting from ₹200
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-antic text-3xl text-[#f8fafc] font-light mb-6">
                    Men’s Grooming & Precision Cuts
                  </h3>

                  <div className="space-y-4">
                    {menServices.map((svc) => (
                      <div key={svc.name} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-[#f8fafc]">{svc.name}</h4>
                          <p className="text-xs text-[#cbd5e1] font-light">{svc.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                  <Button href="/services/hair-men" variant="primary" size="sm" className="w-full font-semibold">
                    View All Men’s Grooming Services
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
