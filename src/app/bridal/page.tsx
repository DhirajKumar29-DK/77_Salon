import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, Flower2, Hand, Clock } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Bridal Beauty | 77 SALON',
  description: 'Your Bridal Glow, Beautifully Prepared. Thoughtful beauty care for the moments leading up to your celebration.',
};

export default function BridalPage() {
  return (
    <div className="bg-[#060e22] text-[#f8fafc] min-h-screen overflow-x-hidden pt-[68px]">

      {/* ════════════════════════════════════════════════════════════
          1. HERO SECTION (Compact PageHero style)
      ════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="BRIDAL BEAUTY"
        title={`Your Bridal Glow,\nBeautifully Prepared.`}
        description="Thoughtful beauty care for the moments leading up to your celebration."
        bgImage="/images/hero/bride.jpg"
        heightClass="min-h-[45vh] sm:min-h-[62vh]"
        contentClassName="ml-0 sm:-ml-16 lg:-ml-28 xl:-ml-32 mb-4 sm:mb-8"
      >
        <div className="flex items-center gap-4 text-[11px] text-[#cbd5e1] font-light tracking-wider mt-2">
          <span>Skin</span>
          <span className="w-px h-3 bg-[#d4af37]/40" />
          <span>Hair</span>
          <span className="w-px h-3 bg-[#d4af37]/40" />
          <span>Nails</span>
          <span className="w-px h-3 bg-[#d4af37]/40" />
          <span>Pedicure</span>
          <span className="w-px h-3 bg-[#d4af37]/40" />
          <span>Bridal Care</span>
        </div>
      </PageHero>

      {/* ════════════════════════════════════════════════════════════
          2. ABOUT / EXPERIENCE SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#0a1a3f]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left Image */}
            <ScrollReveal animation="fade-right" className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] w-full rounded-xl overflow-hidden border-[3px] border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 shadow-xl">
              <Image
                src="/images/services/bride-hands.jpg"
                alt="Bridal Preparation"
                fill
                className="object-cover"
              />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal animation="fade-left" delay={150}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-3">
                THE BRIDAL EXPERIENCE
              </span>
              <h2 className="font-antic text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-5">
                Before the Celebration Begins.
              </h2>
              <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-10">
                From skin and hair care to polished hands and feet, our bridal services help you feel beautifully prepared for the celebrations ahead. Choose the treatments that suit your style and schedule, with expert care at every step.
              </p>

              {/* 4 Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { icon: <Sparkles className="w-6 h-6" />, label: 'SKIN', desc: 'A considered\nfacial ritual' },
                  { icon: <Flower2 className="w-6 h-6" />, label: 'HAIR', desc: 'Thoughtful\nhair care' },
                  { icon: <Hand className="w-6 h-6" />, label: 'HANDS & FEET', desc: 'Polished\nfinishing details' },
                  { icon: <Clock className="w-6 h-6" />, label: 'TIME', desc: 'Plan your\nappointments ahead' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/60 flex items-center justify-center text-[#e5c568] drop-shadow-[0_0_8px_rgba(229,197,104,0.6)] mb-3 bg-[#060e22]">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-1">
                      {item.label}
                    </span>
                    <p className="text-[10px] text-[#94a3b8] font-light leading-snug whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. MENU CARDS SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#060e22] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-2">
                BRIDAL BEAUTY MENU
              </span>
              <h2 className="font-antic text-3xl sm:text-4xl text-white font-light">
                Choose Your Bridal Rituals
              </h2>
              <p className="text-xs text-[#94a3b8] font-light mt-2">
                Select the treatments that fit your preparation and personal style.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '/images/services/bride-makeup.jpg', cat: 'SKIN', title: 'Bridal Glow Facial', price: '₹3,500', desc: 'An extended, intensive facial treatment for the bride.' },
              { img: '/images/services/bride-feet.jpg', cat: 'PEDICURE', title: 'Ice Cream Pedicure', price: '₹2,500', desc: 'A relaxing pedicure with premium treatment.' },
              { img: '/images/services/bride-hands.jpg', cat: 'NAILS', title: 'French Gel Polish', price: '₹800', desc: 'A classic and elegant French finish.' },
              { img: '/images/services/bride-hair.jpg', cat: 'HAIR', title: 'Moroccan Hair Spa', price: '₹1,500', desc: 'Nourishing hair spa for soft, healthy and manageable hair.' },
            ].map((card, i) => {
              const anim = i === 0 ? 'fade-right' : i === 3 ? 'fade-left' : 'fade-up';
              return (
                <ScrollReveal key={i} animation={anim} delay={i * 100} className="h-full">
                  <div className="flex flex-col bg-[#0a1a3f] rounded-xl overflow-hidden border-[3px] border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 h-full">
                    <div className="relative h-48 w-full">
                      <Image src={card.img} alt={card.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[9px] text-[#d4af37] font-bold uppercase tracking-widest mb-2">
                        {card.cat}
                      </span>
                      <h3 className="font-antic text-xl text-white mb-1">{card.title}</h3>
                      <p className="text-[#d4af37] font-serif text-lg font-semibold mb-2">{card.price}</p>
                      <p className="text-xs text-[#94a3b8] font-light leading-relaxed flex-1 mb-6">
                        {card.desc}
                      </p>
                      <Button href="/contact" variant="primary" className="w-full">
                        BOOK
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. PROCESS TIMELINE SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#0a1a3f] border-y border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-2">
                THE PRE-WEDDING RITUAL
              </span>
              <h2 className="font-antic text-3xl sm:text-4xl text-white font-light">
                A Little Preparation. A Beautiful Difference.
              </h2>
            </div>
            <span className="text-sm text-[#cbd5e1] font-light">
              Your Journey to the Big Day
            </span>
          </div>

          <div className="relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-7 left-[5%] right-[22%] h-[2px] bg-[#d4af37]/50" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {[
                { num: '01', title: 'PLAN', desc: 'Choose the treatments that fit your celebration and personal preferences.' },
                { num: '02', title: 'CARE', desc: 'Enjoy your selected beauty treatments with expert attention.' },
                { num: '03', title: 'DETAIL', desc: 'Complete the finishing touches with hair, nails, skin or pedicure services where applicable.' },
                { num: '04', title: 'READY', desc: 'Step into your celebration feeling beautifully prepared.' },
              ].map((step, i) => {
                const anim = i === 0 ? 'fade-right' : i === 3 ? 'fade-left' : 'fade-up';
                return (
                  <ScrollReveal key={i} animation={anim} delay={i * 100}>
                    <div className="flex flex-row md:flex-col items-start gap-5">
                      <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[#d4af37] bg-[#0a1a3f] flex items-center justify-center text-white font-serif text-lg">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-2 mt-1">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-[#cbd5e1] font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. MOMENTS / BENTO GALLERY SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#060e22]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-2">
                BRIDAL MOMENTS
              </span>
              <h2 className="font-antic text-3xl sm:text-4xl text-white font-light">
                Details Worth Remembering.
              </h2>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
              BEAUTY LIVES IN THE DETAILS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[450px]">
            {/* Col 1: Large portrait */}
            <ScrollReveal animation="fade-right" className="md:col-span-1 h-[300px] md:h-full relative rounded-xl overflow-hidden group border-[3px] border-transparent hover:border-[#d4af37] transition-all duration-300">
              <Image src="/images/services/indian-bride-hero.jpg" alt="Bridal Styling" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-[10px] text-white/70 font-semibold mb-0.5">Bridal Styling</p>
                <p className="text-xs text-white font-light">Elegance in Every Detail</p>
              </div>
            </ScrollReveal>

            {/* Col 2: Stacked */}
            <ScrollReveal animation="fade-up" delay={100} className="md:col-span-1 flex flex-col gap-4 h-[500px] md:h-full">
              <div className="relative flex-1 rounded-xl overflow-hidden group border-[3px] border-transparent hover:border-[#d4af37] transition-all duration-300">
                <Image src="/images/services/bride-hands.jpg" alt="Finishing Touches" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-xs text-white font-light">Perfect Finishing Touches</p>
                </div>
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden group border-[3px] border-transparent hover:border-[#d4af37] transition-all duration-300">
                <Image src="/images/services/bride-makeup.jpg" alt="Bridal Beauty" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-xs text-white font-light">Bridal Beauty</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Col 3: Medium Portrait */}
            <ScrollReveal animation="fade-up" delay={200} className="md:col-span-1 h-[300px] md:h-full relative rounded-xl overflow-hidden group border-[3px] border-transparent hover:border-[#d4af37] transition-all duration-300">
              <Image src="/images/services/bride-hair.jpg" alt="Hair for Special Day" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-xs text-white font-light">Hair for Your Special Day</p>
              </div>
            </ScrollReveal>

            {/* Col 4: Medium Portrait */}
            <ScrollReveal animation="fade-left" delay={300} className="md:col-span-1 h-[300px] md:h-full relative rounded-xl overflow-hidden group border-[3px] border-transparent hover:border-[#d4af37] transition-all duration-300">
              <Image src="/images/menu-bg.jpg" alt="A Calm Space" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e22]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-xs text-white font-light">A Calm Space for You</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. CTA SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 relative overflow-hidden border-t border-[#d4af37]/20">
        <div className="absolute inset-0">
          <Image
            src="/images/services/bridal-facial.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e22] via-[#060e22]/95 to-[#060e22]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-4">
              YOUR BRIDAL PREPARATION
            </span>
            <h2 className="font-antic text-4xl sm:text-5xl text-white font-light mb-4">
              Make Time for the Details.
            </h2>
            <p className="text-sm text-[#cbd5e1] font-light mb-8">
              Plan your beauty appointments around the moments that matter.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="font-semibold tracking-[0.2em]"
              >
                Book Appointment
              </Button>

            </div>
          </div>

          <div className="hidden md:block text-right pr-10">
            <p className="font-serif text-5xl italic text-[#d4af37]/40 leading-snug whitespace-pre-line rotate-[-5deg]">
              Your Day{"\n"}Your Details{"\n"}Our Care
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
