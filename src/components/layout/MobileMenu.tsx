'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/siteConfig';
import { X, ChevronDown, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-[#060e22] text-[#f8fafc] flex flex-col h-screen overflow-y-auto animate-fadeIn">
      {/* Mobile Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4af37]/30 bg-[#0a1a3f]">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-36 h-12">
            <Image
              src="/brand-logo.png"
              alt="77 SALON"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="p-2 text-[#cbd5e1] hover:text-[#d4af37] border border-[#d4af37]/30 rounded hover:border-[#d4af37]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-6 py-8 space-y-6">
        <nav className="space-y-4">
          <Link
            href="/"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            About
          </Link>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors py-1"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${
                  servicesExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="mt-3 pl-4 border-l border-[#d4af37]/40 space-y-3 pt-2">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block text-sm uppercase tracking-widest text-[#d4af37] font-medium"
                >
                  All Services Overview →
                </Link>
                {SITE_CONFIG.serviceSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block text-[#cbd5e1] hover:text-[#d4af37] text-base py-1 font-light"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/gallery"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/bridal"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            Bridal
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block font-sans text-2xl font-light text-[#f8fafc] hover:text-[#d4af37] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="pt-6 border-t border-[#d4af37]/20 space-y-3">
          <Button
            href="/book"
            onClick={onClose}
            variant="primary"
            size="lg"
            className="w-full justify-center"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="flex items-center justify-center gap-2 py-3 px-3 border border-[#d4af37]/30 text-xs uppercase tracking-wider text-[#cbd5e1] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors bg-[#0a1a3f] rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              Call
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 border border-[#d4af37]/30 text-xs uppercase tracking-wider text-[#cbd5e1] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors bg-[#0a1a3f] rounded-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Direct Contact from PDF */}
        <div className="pt-4 text-xs text-[#cbd5e1] space-y-1">
          <p className="uppercase tracking-widest text-[#d4af37] font-semibold">Direct Inquiry</p>
          <p>{SITE_CONFIG.phoneNumbers[0]}</p>
          <p>{SITE_CONFIG.phoneNumbers[1]}</p>
          <p className="pt-1 text-[#94a3b8]">Instagram: {SITE_CONFIG.socialHandles.instagram}</p>
        </div>
      </div>
    </div>
  );
};
