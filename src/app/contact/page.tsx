'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/siteConfig';
import { Phone, MessageSquare, Clock, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/Icons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a1a3f] text-[#f8fafc] min-h-screen">
      <PageHero
        eyebrow="Connect With Us"
        title="Concierge & Inquiries."
        description="Whether reserving an appointment, requesting customized bridal timing, or inquiring about specific treatments, our team is at your disposal."
        breadcrumbCurrent="Contact"
        bgImage="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=85"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Contact Info from PDF (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold block mb-2">
                  Official Channels
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#f8fafc]">
                  Direct Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light mt-3 leading-relaxed">
                  As shown in our official 77 SALON Price Book, our concierge lines and direct WhatsApp messaging channels are monitored daily.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 p-6 shadow-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#060e22] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      Telephone Inquiries
                    </h4>
                    <div className="mt-2 space-y-1 font-sans text-sm text-[#f8fafc]">
                      <a href={`tel:${SITE_CONFIG.phoneNumbers[0]}`} className="block hover:text-[#d4af37] font-medium transition-colors">
                        {SITE_CONFIG.phoneNumbers[0]}
                      </a>
                      <a href={`tel:${SITE_CONFIG.phoneNumbers[1]}`} className="block hover:text-[#d4af37] font-medium transition-colors">
                        {SITE_CONFIG.phoneNumbers[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 p-6 shadow-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#060e22] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      WhatsApp Concierge
                    </h4>
                    <p className="text-xs text-[#cbd5e1] font-light mt-1">
                      Quick instant messaging for appointment availability and custom service inquiries.
                    </p>
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs uppercase tracking-wider text-[#d4af37] hover:text-[#e5c568] font-semibold transition-colors"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 p-6 shadow-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#060e22] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-1">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      Social Channels
                    </h4>
                    <div className="mt-2 space-y-1 text-sm text-[#f8fafc]">
                      <a
                        href={SITE_CONFIG.socialHandles.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-[#d4af37] transition-colors"
                      >
                        Instagram: {SITE_CONFIG.socialHandles.instagram}
                      </a>
                      <a
                        href={SITE_CONFIG.socialHandles.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-[#d4af37] transition-colors"
                      >
                        Facebook: {SITE_CONFIG.socialHandles.facebook}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#0a1a3f]/80 backdrop-blur border border-[#d4af37]/30 p-6 shadow-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#060e22] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      Salon Hours
                    </h4>
                    <div className="mt-2 space-y-1 text-xs text-[#cbd5e1] font-light">
                      <p>Monday – Saturday: 10:00 AM – 8:30 PM</p>
                      <p>Sunday: 10:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Visual Sanctuary Card */}
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-[#d4af37]/40 shadow-xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80"
                    alt="77 SALON Sanctuary"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060e22] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">Visit 77 SALON</span>
                    <p className="font-serif text-lg text-white">Experience Bespoke Luxury in Person</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Inquiry Form (7 cols) - Silver White Luxury Finish */}
            <div className="lg:col-span-7 bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#eef2f6] border-2 border-[#d4af37] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-xl text-[#0a1a3f]">
              <span className="text-xs uppercase tracking-[0.28em] text-[#0a1a3f] bg-[#d4af37]/20 border border-[#d4af37] px-3 py-1 font-semibold inline-block rounded mb-3">
                Send a Message
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl font-light text-[#0a1a3f] mb-6">
                Direct Inquiry Form
              </h3>

              {submitted ? (
                <div className="p-8 bg-white border border-[#d4af37]/50 text-slate-800 text-center space-y-4 rounded-lg shadow-md">
                  <CheckCircle2 className="w-12 h-12 text-[#b57c2b] mx-auto" />
                  <h4 className="font-sans text-2xl text-[#0a1a3f]">Message Received</h4>
                  <p className="text-xs text-slate-600 font-light max-w-md mx-auto">
                    Thank you for reaching out to 77 SALON. Our team will review your inquiry and respond shortly via your provided phone number or email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-widest text-[#b57c2b] hover:text-[#0a1a3f] underline font-semibold pt-2 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name Floating Label */}
                    <div className="relative">
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
                      />
                      <label
                        htmlFor="contact-name"
                        className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                          formData.name
                            ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                            : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                        }`}
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Phone Number Floating Label */}
                    <div className="relative">
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
                      />
                      <label
                        htmlFor="contact-phone"
                        className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                          formData.phone
                            ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                            : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                        }`}
                      >
                        Phone Number *
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address Floating Label */}
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm"
                      />
                      <label
                        htmlFor="contact-email"
                        className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                          formData.email
                            ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                            : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                        }`}
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Subject / Department Floating Label */}
                    <div className="relative">
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="peer w-full bg-white border border-slate-300 px-4 pt-4 pb-2.5 text-xs sm:text-sm text-[#0a1a3f] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all rounded-md shadow-sm cursor-pointer"
                      >
                        <option value="" className="bg-white text-[#0a1a3f]">Select a Department...</option>
                        <option value="General Inquiry" className="bg-white text-[#0a1a3f]">General Inquiry</option>
                        <option value="Bridal Consultation" className="bg-white text-[#0a1a3f]">Bridal Consultation</option>
                        <option value="Facial & Dermal Care" className="bg-white text-[#0a1a3f]">Facial & Dermal Care</option>
                        <option value="Hair Services" className="bg-white text-[#0a1a3f]">Hair Services</option>
                        <option value="Nail Art & Extensions" className="bg-white text-[#0a1a3f]">Nail Art & Extensions</option>
                        <option value="Waxing & Body Care" className="bg-white text-[#0a1a3f]">Waxing & Body Care</option>
                      </select>
                      <label
                        htmlFor="contact-subject"
                        className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                          formData.subject
                            ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                            : 'top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                        }`}
                      >
                        Subject / Department
                      </label>
                    </div>
                  </div>

                  {/* Message Textarea Floating Label */}
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-white border border-slate-300 px-4 pt-5 pb-3 text-xs sm:text-sm text-[#0a1a3f] placeholder-slate-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/25 transition-all resize-none rounded-md shadow-sm"
                    />
                    <label
                      htmlFor="contact-message"
                      className={`absolute left-3.5 bg-white px-1.5 transition-all duration-200 pointer-events-none ${
                        formData.message
                          ? '-top-2.5 text-[11px] font-semibold text-[#b57c2b]'
                          : 'top-5 -translate-y-1/2 text-xs sm:text-sm text-slate-500 peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#b57c2b]'
                      }`}
                    >
                      Your Message *
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center font-bold text-base shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Location / Sanctuary Placeholder Area */}
          <div className="mt-16 bg-[#060e22] border border-[#d4af37]/30 p-8 text-center space-y-3 shadow-xl">
            <MapPin className="w-8 h-8 text-[#d4af37] mx-auto" />
            <h4 className="font-sans text-2xl text-[#f8fafc]">Salon Location & Direction</h4>
            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light max-w-xl mx-auto">
              Please contact our reception desk at {SITE_CONFIG.phoneNumbers[0]} for exact landmark coordinates, parking assistance, and direct directions to 77 SALON.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
