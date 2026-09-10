'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ALL_SERVICES } from '@/data/services';
import { ServiceItem } from '@/types';
import { Button } from '@/components/ui/Button';
import { Sparkles, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteConfig';

const getServiceImage = (category?: string, name?: string): string => {
  const cat = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();
  if (n.includes('bridal') || cat.includes('bridal')) return '/images/services/bridal-facial.jpg';
  if (cat.includes('manicure')) return '/images/services/manicure.jpg';
  if (cat.includes('pedicure')) return '/images/services/pedicure.jpg';
  if (cat.includes('facial') || cat.includes('clean-up')) return '/images/services/facial.jpg';
  if (cat.includes('gel-polish')) return '/images/services/gel-polish.jpg';
  if (cat.includes('nail-extension') || cat.includes('extension')) return '/images/services/nail-extension.jpg';
  if (cat.includes('hair-women')) return '/images/services/bridal-facial.jpg';
  if (cat.includes('hair-men')) return '/images/services/hair-men.jpg';
  if (cat.includes('waxing') || n.includes('wax') || n.includes('threading')) return '/images/services/waxing.jpg';
  return '/images/services/facial.jpg';
};

function BookingFormContent() {
  const searchParams = useSearchParams();
  const preSelectedServiceId = searchParams.get('service');

  const [serviceId, setServiceId] = useState<string>(preSelectedServiceId || 'facial-hydra');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setServiceId(preSelectedServiceId);
    }
  }, [preSelectedServiceId]);

  const selectedService = useMemo(() => {
    return ALL_SERVICES.find((s) => s.id === serviceId) || ALL_SERVICES[0];
  }, [serviceId]);

  const timeSlots = [
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '01:00 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#0A1128] text-white p-8 sm:p-14 border border-[#C5A059]/40 shadow-2xl max-w-2xl mx-auto text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium block">
          Appointment Request Received
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
          Thank you, {name || 'Guest'}.
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
          Your reservation request for <strong>{selectedService?.name}</strong> has been logged. Our reception concierge will contact you via {phone || 'phone'} to confirm your time slot.
        </p>

        {/* Appointment Itinerary Card */}
        <div className="p-6 bg-[#060A19] border border-white/10 text-left space-y-3 text-xs">
          <div className="flex justify-between pb-2 border-b border-white/10">
            <span className="text-slate-400">Treatment:</span>
            <span className="text-white font-medium">{selectedService?.name}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-white/10">
            <span className="text-slate-400">Price (From Price Book):</span>
            <span className="text-[#C5A059] font-semibold font-serif text-base">
              {selectedService?.formattedPrice}
            </span>
          </div>
          <div className="flex justify-between pb-2 border-b border-white/10">
            <span className="text-slate-400">Requested Date & Time:</span>
            <span className="text-white">{date || 'Upcoming'} at {timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Guest Contact:</span>
            <span className="text-white">{phone}</span>
          </div>
        </div>

        <div className="pt-2 text-[11px] text-amber-300/80 font-mono bg-white/[0.03] p-3 border border-amber-300/20">
          Note: This is a frontend demo confirmation. Backend database integration will be attached in the subsequent phase.
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="primary"
            size="md"
          >
            Submit Another Request
          </Button>
          <Button href="/" variant="outline-white" size="md">
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
      {/* Left: Interactive Form (7 cols) - Silver White Luxury Finish */}
      <div className="lg:col-span-7 bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#eef2f6] border-2 border-[#d4af37] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-xl text-[#0a1a3f]">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.28em] text-[#0a1a3f] bg-[#d4af37]/20 border border-[#d4af37] px-3 py-1 font-semibold inline-block rounded mb-3">
            Reserve Your Ritual
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0a1a3f]">
            Appointment Request
          </h2>
          <p className="text-xs text-slate-600 font-light mt-1">
            Please select your desired treatment and preferred calendar timing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          {/* Service Dropdown */}
          <div className="relative">
            <select
              id="book-service"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              required
              className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] font-medium focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
            >
              {ALL_SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-white text-[#0a1a3f]">
                  {s.categoryName}: {s.name} — {s.formattedPrice}
                </option>
              ))}
            </select>
            <label
              htmlFor="book-service"
              className="absolute left-3.5 -top-2.5 bg-white px-1.5 text-[11px] font-semibold text-[#b57c2b] pointer-events-none"
            >
              Select Treatment *
            </label>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="book-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
              />
              <label
                htmlFor="book-date"
                className="absolute left-3.5 -top-2.5 bg-white px-1.5 text-[11px] font-semibold text-[#b57c2b] pointer-events-none flex items-center gap-1"
              >
                <Calendar className="w-3 h-3 text-[#b57c2b]" />
                Preferred Date *
              </label>
            </div>

            <div className="relative">
              <select
                id="book-time"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm cursor-pointer"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-white text-[#0a1a3f]">
                    {slot}
                  </option>
                ))}
              </select>
              <label
                htmlFor="book-time"
                className="absolute left-3.5 -top-2.5 bg-white px-1.5 text-[11px] font-semibold text-[#b57c2b] pointer-events-none flex items-center gap-1"
              >
                <Clock className="w-3 h-3 text-[#b57c2b]" />
                Preferred Time Slot *
              </label>
            </div>
          </div>

          {/* Guest Information */}
          <div className="pt-4 border-t border-slate-200 space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-[#b57c2b] font-semibold">
              Guest Information
            </h4>

            <div className="relative">
              <input
                id="book-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
              />
              <label
                htmlFor="book-name"
                className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                  name
                    ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                    : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                }`}
              >
                Full Name *
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  id="book-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
                />
                <label
                  htmlFor="book-phone"
                  className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                    phone
                      ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                      : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                  }`}
                >
                  Phone Number *
                </label>
              </div>

              <div className="relative">
                <input
                  id="book-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
                />
                <label
                  htmlFor="book-email"
                  className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                    email
                      ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                      : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                  }`}
                >
                  Email Address (Optional)
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="book-notes"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" "
                className="peer w-full bg-white border border-slate-300 px-4 pt-5 pb-3 text-xs sm:text-sm text-[#0a1a3f] placeholder-slate-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all resize-none rounded-md shadow-sm"
              />
              <label
                htmlFor="book-notes"
                className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                  message
                    ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                    : 'top-5 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                }`}
              >
                Notes / Special Requests (Optional)
              </label>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center font-bold text-base shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
          >
            Confirm Appointment Request
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>

      {/* Right: Live Summary Receipt Card (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#060e22] text-[#f8fafc] border border-[#d4af37]/40 shadow-2xl rounded-lg overflow-hidden">
          {/* Selected Service Photo Banner */}
          <div className="relative h-44 w-full overflow-hidden bg-[#0a1a3f]">
            <Image
              src={getServiceImage(selectedService?.category, selectedService?.name)}
              alt={selectedService?.name || 'Selected Treatment'}
              fill
              className="object-cover opacity-100"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060e22] to-transparent" />
            <div className="absolute top-3 left-3 bg-[#060e22]/90 border border-[#d4af37]/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold rounded">
              {selectedService?.categoryName}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
              Selected Summary
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#f8fafc]">
              {selectedService?.name}
            </h3>

          <div className="my-4 flex items-baseline gap-2 pb-4 border-b border-[#d4af37]/20">
            <span className="font-sans text-3xl sm:text-4xl text-[#d4af37] font-semibold">
              {selectedService?.formattedPrice}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#cbd5e1]">
              Official Price
            </span>
          </div>

          <div className="space-y-2 text-xs text-[#cbd5e1] font-light">
            <p><strong className="text-[#f8fafc]">Category:</strong> {selectedService?.categoryName}</p>
            <p><strong className="text-[#f8fafc]">Description:</strong> {selectedService?.description}</p>
            {selectedService?.duration && (
              <p><strong className="text-[#f8fafc]">Estimated Duration:</strong> {selectedService.duration}</p>
            )}
            <p><strong className="text-[#f8fafc]">Target Audience:</strong> Unisex Sanctuary</p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#d4af37]/20 text-xs text-[#cbd5e1] space-y-1">
            <p className="text-[#d4af37] font-medium uppercase tracking-wider">Sanctuary Guarantee</p>
            <p>100% Medical-grade sterilization of all tools.</p>
            <p>Zero hidden charges. Exact PDF rates respected.</p>
          </div>
        </div>
      </div>

        {/* Need Help Box */}
        <div className="p-6 bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 shadow-xl text-xs space-y-2">
          <h4 className="font-semibold text-[#d4af37] uppercase tracking-wider">Prefer to speak with us?</h4>
          <p className="text-[#cbd5e1] font-light">
            Our front desk is happy to arrange your itinerary over the phone or WhatsApp:
          </p>
          <div className="pt-2 flex flex-col gap-1 font-medium text-[#f8fafc]">
            <a href={`tel:${SITE_CONFIG.phoneNumbers[0]}`} className="hover:text-[#d4af37]">{SITE_CONFIG.phoneNumbers[0]}</a>
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">
              Instant WhatsApp Inquiry →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const BookingInterface: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading booking interface...</div>}>
      <BookingFormContent />
    </Suspense>
  );
};
