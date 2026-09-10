import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Phone, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060e22] text-[#f8fafc] border-t border-[#d4af37]/30 pt-16 pb-10 overflow-hidden">
      {/* Background Salon Image with Low Opacity */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="77 SALON Ambiance Background"
          fill
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e22]/85 via-[#060e22]/70 to-[#060e22]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#d4af37]/20">
          {/* Col 1: Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative w-52 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand-logo.png"
                  alt="77 SALON"
                  fill
                  className="object-contain object-left drop-shadow-[0_2px_15px_rgba(212,175,55,0.3)]"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-light max-w-sm">
              An elevated sanctuary dedicated to beauty, holistic hair health, precision nail architecture, and clinical skin rejuvenation. Every appointment is an individualized ritual.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[#cbd5e1]">
              <a
                href={SITE_CONFIG.socialHandles.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#cbd5e1] hover:text-[#d4af37] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#d4af37]" />
                {SITE_CONFIG.socialHandles.instagram}
              </a>
              <a
                href={SITE_CONFIG.socialHandles.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#cbd5e1] hover:text-[#d4af37] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#d4af37]" />
                {SITE_CONFIG.socialHandles.facebook}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#cbd5e1] font-light">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#d4af37] transition-colors">
                  Pricing Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4af37] transition-colors">
                  Editorial Gallery
                </Link>
              </li>
              <li>
                <Link href="/bridal" className="hover:text-[#d4af37] transition-colors">
                  Bridal Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#cbd5e1] font-light">
              <li>
                <Link href="/services/manicure" className="hover:text-[#d4af37] transition-colors">
                  Manicure (Classic to Luxury)
                </Link>
              </li>
              <li>
                <Link href="/services/pedicure" className="hover:text-[#d4af37] transition-colors">
                  Pedicure & Ice Cream Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/facial" className="hover:text-[#d4af37] transition-colors">
                  Hydra & Bridal Glow Facials
                </Link>
              </li>
              <li>
                <Link href="/services/gel-polish" className="hover:text-[#d4af37] transition-colors">
                  Gel Polish & Chrome Art
                </Link>
              </li>
              <li>
                <Link href="/services/nail-extension" className="hover:text-[#d4af37] transition-colors">
                  Gel & Acrylic Extensions
                </Link>
              </li>
              <li>
                <Link href="/services/hair-women" className="hover:text-[#d4af37] transition-colors">
                  Women Hair Spa & Global Colour
                </Link>
              </li>
              <li>
                <Link href="/services/hair-men" className="hover:text-[#d4af37] transition-colors">
                  Men Haircuts & Beard Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/waxing" className="hover:text-[#d4af37] transition-colors">
                  Waxing & Italian Rica Body Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Appointments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Appointments & Booking
            </h4>
            <div className="space-y-2 text-xs text-[#cbd5e1]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumbers[0]}`}
                    className="block hover:text-[#d4af37] transition-colors font-sans"
                  >
                    {SITE_CONFIG.phoneNumbers[0]}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumbers[1]}`}
                    className="block hover:text-[#d4af37] transition-colors font-sans"
                  >
                    {SITE_CONFIG.phoneNumbers[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-[#94a3b8] font-light">
                  <p>Mon – Sat: 10:00 AM – 8:30 PM</p>
                  <p>Sunday: 10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-between w-full p-3 bg-[#0a1a3f] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#060e22] text-[#d4af37] text-xs uppercase tracking-widest font-semibold transition-all group shadow-md rounded-md"
              >
                <span>Reserve Appointment</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94a3b8] font-light gap-4">
          <p>© {new Date().getFullYear()} 77 SALON. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#cbd5e1]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              Unisex Salon
            </span>
            <span className="text-[#d4af37] font-medium">STYLE • BEAUTY • CARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
