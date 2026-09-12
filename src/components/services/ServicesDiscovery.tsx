'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ALL_SERVICES } from '@/data/services';
import { ServiceItem, ServiceCategoryKey } from '@/types';
import { Search, Sparkles, Clock, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CategoryTab {
  key: string;
  label: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { key: 'all', label: 'All Treatments' },
  { key: 'manicure', label: 'Manicure' },
  { key: 'pedicure', label: 'Pedicure' },
  { key: 'facial', label: 'Facial & Skin' },
  { key: 'gel-polish', label: 'Gel Polish' },
  { key: 'nail-extension', label: 'Nail Extension' },
  { key: 'hair-women', label: 'Hair – Women' },
  { key: 'hair-men', label: 'Hair & Grooming – Men' },
  { key: 'waxing', label: 'Waxing & Body Care' },
];

function ServicesDiscoveryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'hair-women') {
          if (service.category !== 'hair-women-spa' && service.category !== 'hair-women-styling') {
            return false;
          }
        } else if (selectedCategory === 'hair-men') {
          if (service.category !== 'hair-men-spa' && service.category !== 'hair-men-grooming') {
            return false;
          }
        } else if (service.category !== selectedCategory) {
          return false;
        }
      }

      // Gender filter
      if (selectedGender !== 'all') {
        if (selectedGender === 'women' && service.gender === 'men') return false;
        if (selectedGender === 'men' && service.gender === 'women') return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = service.name.toLowerCase().includes(query);
        const matchesCategory = service.categoryName.toLowerCase().includes(query);
        const matchesDesc = service.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedGender, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="bg-[#060e22] text-[#f8fafc] p-6 sm:p-8 border border-[#d4af37]/40 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments (e.g., Hydra Facial, Ice Cream Pedicure, Gel Extensions)..."
              className="w-full bg-[#0a1a3f] border border-[#d4af37]/30 pl-11 pr-4 py-3 text-xs sm:text-sm text-[#f8fafc] placeholder-slate-400 focus:outline-none focus:border-[#d4af37] transition-colors rounded-md"
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

          {/* Gender Filter Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#cbd5e1] mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
              Audience:
            </span>
            {[
              { id: 'all', label: 'All' },
              { id: 'women', label: 'For Her' },
              { id: 'men', label: 'For Him' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGender(g.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-all rounded-md ${
                  selectedGender === g.id
                    ? 'bg-[#d4af37] text-[#060e22] font-semibold'
                    : 'bg-[#0a1a3f] text-[#cbd5e1] border border-[#d4af37]/30 hover:border-[#d4af37]'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills / Tabs */}
        <div className="mt-6 pt-6 border-t border-[#d4af37]/20 flex flex-wrap gap-2">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 rounded-md ${
                selectedCategory === tab.key
                  ? 'bg-[#d4af37] text-[#060e22] font-semibold'
                  : 'bg-[#0a1a3f] text-[#cbd5e1] hover:bg-[#d4af37]/20 hover:text-[#d4af37] border border-[#d4af37]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Active Status */}
      <div className="flex items-center justify-between text-xs text-[#cbd5e1] pb-2 border-b border-[#d4af37]/20">
        <span>
          Showing <strong className="text-[#d4af37]">{filteredServices.length}</strong> treatment{filteredServices.length === 1 ? '' : 's'}
        </span>
        <span className="font-sans italic text-[#d4af37]/80">
          77 SALON Price Book Menu
        </span>
      </div>

      {/* Treatment Menu List */}
      {filteredServices.length === 0 ? (
        <div className="p-16 bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 text-center space-y-4 rounded-lg">
          <p className="font-sans text-2xl text-[#f8fafc]">No treatments found matching your criteria.</p>
          <p className="text-xs text-[#cbd5e1]">Try adjusting your search keywords or switching filters to view all treatments.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedGender('all');
              setSearchQuery('');
            }}
            className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold underline px-4 py-2 border border-[#d4af37]/30 rounded-md hover:bg-[#d4af37]/10 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service, i) => (
            <ScrollReveal key={service.id} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={(i % 2) * 150}>
            <div
              className="group bg-[#0a1a3f]/85 backdrop-blur border border-[#d4af37]/30 hover:border-[#d4af37] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 rounded-lg h-full"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                        {service.categoryName}
                      </span>
                      {service.isSignature && (
                        <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#d4af37]/20 text-[#e5c568] font-semibold rounded-full border border-[#d4af37]/40">
                          <Sparkles className="w-2.5 h-2.5" />
                          Signature
                        </span>
                      )}
                    </div>
                    <h3 className="font-antic text-2xl text-[#f8fafc] group-hover:text-[#d4af37] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-sans text-2xl sm:text-3xl text-[#d4af37] font-semibold block">
                      {service.formattedPrice}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#cbd5e1] font-sans">
                      INR
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#cbd5e1]">
                  {service.duration && (
                    <>
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{service.duration}</span>
                    </>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[#d4af37] hover:text-[#060e22] hover:bg-[#d4af37] border border-[#d4af37]/40 px-3.5 py-1.5 rounded-md font-semibold text-xs group-hover:shadow-[0_2px_15px_rgba(212,175,55,0.25)] transition-all"
                >
                  <span>Book Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}

export const ServicesDiscovery: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center py-12 text-sm text-[#cbd5e1]">Loading services...</div>}>
      <ServicesDiscoveryContent />
    </Suspense>
  );
};
