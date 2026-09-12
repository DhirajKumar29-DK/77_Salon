'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { Menu, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const showSolidBackground = true;

  return (
    <>
      <header
        onMouseLeave={() => setIsMegaMenuOpen(false)}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-3.5"
      >
        {/* Silky-Smooth Backdrop Layer */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-300 pointer-events-none opacity-100`}
        >
          <div className="absolute inset-0 bg-[#0a1a3f]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(6,14,34,0.7)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Exact Brand Logo from PDF Cover */}
            <Link
              href="/"
              className="group flex items-center focus:outline-none py-0.5"
              onMouseEnter={() => setIsMegaMenuOpen(false)}
            >
              <div className="relative h-12 sm:h-14 w-[150px] min-[360px]:w-52 sm:w-64">
                <Image
                  src="/logo-transparent.png"
                  alt="77 SALON Style Beauty Care Unisex Salon"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                    >
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className={`inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.15em] font-bold py-2 transition-colors duration-300 cursor-pointer focus:outline-none ${
                          isMegaMenuOpen
                            ? 'text-[#d4af37]'
                            : 'text-[#e2e8f0] hover:text-[#d4af37]'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isMegaMenuOpen ? 'rotate-180 text-[#d4af37]' : 'text-[#94a3b8]'
                          }`}
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                    className={`relative text-sm uppercase tracking-[0.15em] font-bold py-2 transition-colors duration-300 ${
                      isActive
                        ? 'text-[#d4af37]'
                        : 'text-[#e2e8f0] hover:text-[#d4af37]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d4af37]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div
              className="hidden lg:flex items-center space-x-4"
              onMouseEnter={() => setIsMegaMenuOpen(false)}
            >
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="font-semibold tracking-[0.2em]"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center space-x-2 min-[360px]:space-x-3 lg:hidden">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="py-2 px-3 text-[10px] tracking-wider"
              >
                Book
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#f8fafc] border border-[#d4af37]/40 rounded-md hover:border-[#d4af37] focus:outline-none bg-[#0a1a3f]/80"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* MegaMenu Component */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
