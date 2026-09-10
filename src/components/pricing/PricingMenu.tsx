'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { Search, Sparkles, Clock, ArrowRight, Printer } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FilterTab {
  id: string;
  label: string;
}

const TABS: FilterTab[] = [
  { id: 'all', label: 'All Services' },
  { id: 'nails', label: 'Nails (Mani, Pedi, Extensions)' },
  { id: 'facial', label: 'Facial & Skin' },
  { id: 'hair-women', label: 'Hair – Women' },
  { id: 'hair-men', label: 'Hair & Grooming – Men' },
  { id: 'waxing', label: 'Waxing & Body Care' },
];

const getCategoryBanner = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes('manicure')) return 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('pedicure')) return 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('facial') || n.includes('clean-up')) return 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('gel polish')) return 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('nail extension') || n.includes('extension')) return 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('women') || n.includes('bridal')) return 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('men') || n.includes('grooming') || n.includes('beard') || n.includes('shav')) return 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80';
  if (n.includes('wax') || n.includes('thread') || n.includes('polish')) return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80';
  return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80';
};

export const PricingMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((svc) => {
      // Tab filter
      if (activeTab === 'nails') {
        if (
          svc.category !== 'manicure' &&
          svc.category !== 'pedicure' &&
          svc.category !== 'gel-polish' &&
          svc.category !== 'nail-extension'
        ) {
          return false;
        }
      } else if (activeTab === 'facial') {
        if (svc.category !== 'facial') return false;
      } else if (activeTab === 'hair-women') {
        if (svc.category !== 'hair-women-spa' && svc.category !== 'hair-women-styling') {
          return false;
        }
      } else if (activeTab === 'hair-men') {
        if (svc.category !== 'hair-men-spa' && svc.category !== 'hair-men-grooming') {
          return false;
        }
      } else if (activeTab === 'waxing') {
        if (svc.category !== 'waxing') return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          svc.name.toLowerCase().includes(q) ||
          svc.description.toLowerCase().includes(q) ||
          svc.categoryName.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Group filtered services by Category for elegant editorial menu display
  const groupedServices = useMemo(() => {
    const groups: { [key: string]: typeof ALL_SERVICES } = {};
    filteredServices.forEach((svc) => {
      if (!groups[svc.categoryName]) {
        groups[svc.categoryName] = [];
      }
      groups[svc.categoryName].push(svc);
    });
    return groups;
  }, [filteredServices]);

  return (
    <div className="space-y-12">
      {/* Search & Navigation Bar */}
      <div className="bg-[#060e22] text-[#f8fafc] p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search price menu (e.g. Hydra, Moroccon, Gel, Honey)..."
              className="w-full bg-[#0a1a3f] border border-[#d4af37]/30 pl-11 pr-4 py-3 text-xs sm:text-sm text-[#f8fafc] placeholder-[#94a3b8] focus:outline-none focus:border-[#d4af37] transition-colors rounded-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#cbd5e1] hover:text-[#d4af37]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs uppercase tracking-wider text-[#cbd5e1] border border-[#d4af37]/40 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors rounded-md"
            >
              <Printer className="w-3.5 h-3.5 text-[#d4af37]" />
              Print Menu
            </button>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="mt-6 pt-6 border-t border-[#d4af37]/20 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 rounded-md ${
                activeTab === tab.id
                  ? 'bg-[#d4af37] text-[#060e22] font-semibold shadow-md'
                  : 'bg-[#0a1a3f] text-[#cbd5e1] hover:bg-[#0f2352] hover:text-[#f8fafc] border border-[#d4af37]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Sections */}
      {Object.keys(groupedServices).length === 0 ? (
        <div className="p-16 bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 text-center space-y-3 shadow-xl">
          <p className="font-sans text-2xl text-[#f8fafc]">No services found matching &ldquo;{searchQuery}&rdquo;</p>
          <p className="text-xs text-[#cbd5e1]">Please try a different search keyword or reset filters.</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {Object.entries(groupedServices).map(([categoryName, services]) => {
            const bannerImg = getCategoryBanner(categoryName);
            return (
              <div
                key={categoryName}
                className="bg-[#0a1a3f]/85 backdrop-blur border border-[#d4af37]/30 shadow-xl rounded-lg overflow-hidden"
              >
                {/* Category Image Banner */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#060e22]">
                  <Image
                    src={bannerImg}
                    alt={categoryName}
                    fill
                    className="object-cover opacity-100"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a1a3f] to-transparent" />
                  <div className="absolute bottom-4 left-6 sm:left-10 right-6 sm:right-10 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block drop-shadow">
                        Price Book Chapter
                      </span>
                      <h3 className="font-sans text-3xl sm:text-4xl font-light text-[#f8fafc] mt-1 drop-shadow">
                        {categoryName}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#cbd5e1] font-sans bg-[#060e22]/80 px-3 py-1 rounded border border-[#d4af37]/30">
                      {services.length} Item{services.length === 1 ? '' : 's'}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-10">

              {/* Editorial Menu List */}
              <div className="space-y-6">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 py-3 border-b border-dashed border-[#d4af37]/20 hover:border-[#d4af37] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xl sm:text-2xl text-[#f8fafc] group-hover:text-[#d4af37] transition-colors">
                          {svc.name}
                        </span>
                        {svc.isSignature && (
                          <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#d4af37]/20 text-[#e5c568] font-semibold rounded-full border border-[#d4af37]/30">
                            <Sparkles className="w-2.5 h-2.5" />
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#cbd5e1] font-light mt-1 max-w-xl">
                        {svc.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
                      <span className="font-sans text-2xl sm:text-3xl text-[#d4af37] font-semibold">
                        {svc.formattedPrice}
                      </span>
                      <Link
                        href={`/book?service=${svc.id}`}
                        className="px-3.5 py-1.5 bg-[#d4af37] text-[#060e22] hover:bg-[#e5c568] hover:shadow-[0_2px_15px_rgba(212,175,55,0.3)] text-[10px] uppercase tracking-widest font-semibold transition-all rounded-md"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
        </div>
      )}
    </div>
  );
};
