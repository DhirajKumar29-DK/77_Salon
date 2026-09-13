'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { Phone, MessageSquare, Clock, MapPin, Send, CheckCircle2, ArrowRight, Lock, Headphones, Diamond, Heart, Loader2, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/data/siteConfig';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a brief loading period then show success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Trigger staggered success animation
      setTimeout(() => setShowSuccess(true), 50);
    }, 1500);
  };

  return (
    <div className="bg-[#060e22] text-[#f8fafc] min-h-screen">

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="CONNECT WITH US"
        title={`Your Beauty Journey\nStarts Here.`}
        description="Reach out to schedule your personalized session. Our dedicated team is here to ensure every detail of your experience is flawlessly arranged."
        breadcrumbCurrent="Contact"
        bgImage="/images/hero/hair.jpg"
        heightClass="min-h-[45vh] sm:min-h-[62vh]"
        contentClassName="ml-0 lg:-ml-16 xl:-ml-28 mb-0 sm:mb-8"
      />

      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#060e22]">

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative mt-8 lg:mt-12">

            {/* ════════════════════════════════════════════════════════════
                LEFT COLUMN: Contact Information
            ════════════════════════════════════════════════════════════ */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-8 h-full flex flex-col justify-center">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block mb-4">
                  CONTACT INFORMATION
                </span>
                <h2 className="font-antic text-4xl sm:text-5xl text-white font-light leading-[1.1] mb-5">
                  Direct Channels
                </h2>
                <p className="text-sm text-[#cbd5e1] font-light leading-relaxed max-w-sm">
                  Our team is here to help you with personalized care and support through any of our direct channels.
                </p>
              </div>

              {/* Contact Method Cards */}
              <div className="space-y-4">

                {/* Telephone */}
                <div className="border-2 border-[#d4af37]/20 rounded-xl p-5 flex items-center gap-5 hover:border-[#d4af37]/50 bg-[#0a1a3f]/40 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 bg-[#060e22] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1.5">TELEPHONE INQUIRIES</span>
                    <p className="text-sm text-white font-medium">{SITE_CONFIG.phoneNumbers[0]}</p>
                    <p className="text-sm text-white font-medium">{SITE_CONFIG.phoneNumbers[1]}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="border-2 border-[#d4af37]/20 rounded-xl p-5 flex items-center gap-5 hover:border-[#d4af37]/50 bg-[#0a1a3f]/40 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 bg-[#060e22] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1.5">WHATSAPP CONCIERGE</span>
                    <p className="text-[11px] text-[#cbd5e1] font-light leading-snug mb-2 pr-4">
                      Quick instant messaging for appointment availability and custom service inquiries.
                    </p>
                    <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors flex items-center gap-1">
                      CHAT ON WHATSAPP <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="border-2 border-[#d4af37]/20 rounded-xl p-5 flex items-center gap-5 hover:border-[#d4af37]/50 bg-[#0a1a3f]/40 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 bg-[#060e22] group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1.5">SOCIAL CHANNELS</span>
                    <a href={SITE_CONFIG.socialHandles.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-white font-medium block hover:text-[#d4af37] transition-colors">
                      Instagram: {SITE_CONFIG.socialHandles.instagram}
                    </a>
                    <a href={SITE_CONFIG.socialHandles.facebookUrl} target="_blank" rel="noreferrer" className="text-sm text-white font-medium block hover:text-[#d4af37] transition-colors">
                      Facebook: {SITE_CONFIG.socialHandles.facebook}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="border-2 border-[#d4af37]/20 rounded-xl p-5 flex items-center gap-5 hover:border-[#d4af37]/50 bg-[#0a1a3f]/40 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 bg-[#060e22] group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1.5">SALON HOURS</span>
                    <p className="text-xs text-[#cbd5e1] font-light mb-1">Monday – Saturday: 10:00 AM – 8:30 PM</p>
                    <p className="text-xs text-[#cbd5e1] font-light">Sunday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>


                {/* Location */}
                <div className="border-2 border-[#d4af37]/20 rounded-xl p-5 flex items-center gap-5 hover:border-[#d4af37]/50 bg-[#0a1a3f]/40 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 bg-[#060e22] group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1.5">SALON LOCATION</span>
                    <p className="text-sm text-white font-medium">77 SALON Luxury Space</p>
                    <p className="text-xs text-[#cbd5e1] font-light mt-1">123 Fashion Street, South Ext.</p>
                    <p className="text-xs text-[#cbd5e1] font-light">New Delhi, 110049</p>
                  </div>
                </div>

              </div>



            </ScrollReveal>

            {/* ════════════════════════════════════════════════════════════
                RIGHT COLUMN: Form (White Card)
            ════════════════════════════════════════════════════════════ */}
            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 h-full flex flex-col justify-center">
              <div className="bg-white rounded-xl p-8 sm:p-12 text-[#060e22] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[3px] border-[#d4af37]/80 relative">

                {submitted ? (
                  <div className={`py-16 text-center flex flex-col items-center transition-all duration-700 ${showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Animated Gold Ring */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-full border-4 border-[#d4af37] flex items-center justify-center animate-[ping_1s_ease-out_1] bg-[#d4af37]/10">
                        <CheckCircle2 className="w-12 h-12 text-[#d4af37]" />
                      </div>
                      {/* Sparkles */}
                      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#d4af37] animate-bounce" />
                      <Sparkles className="absolute -bottom-1 -left-2 w-4 h-4 text-[#d4af37]/60 animate-pulse" />
                    </div>

                    <div className={`transition-all duration-700 delay-200 ${showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      <h3 className="font-antic text-4xl text-[#060e22] mb-3">Message Sent!</h3>
                      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
                      <p className="text-sm text-[#4a5568] font-light max-w-xs mx-auto mb-2 leading-relaxed">
                        Thank you for reaching out to <strong className="text-[#060e22]">77 SALON</strong>.
                      </p>
                      <p className="text-xs text-[#718096] font-light mb-8">
                        Our concierge team will respond to you shortly.
                      </p>
                    </div>

                    <div className={`transition-all duration-700 delay-500 ${showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <button
                        onClick={() => { setSubmitted(false); setShowSuccess(false); setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                        className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37] border-b-2 border-[#d4af37]/40 pb-1 hover:border-[#d4af37] transition-colors"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold flex items-center gap-3 mb-4">
                      <span className="w-6 h-[1px] bg-[#d4af37]" />
                      SEND A MESSAGE
                    </span>
                    <h2 className="font-antic text-4xl text-[#060e22] mb-3">
                      Direct Inquiry Form
                    </h2>
                    <p className="text-sm text-[#4a5568] font-light mb-8">
                      Fill in your details and our team will get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="relative w-full group mt-2">
                          <input
                            type="text"
                            id="floating_name"
                            required
                            className="block py-3.5 px-4 w-full text-sm text-[#060e22] bg-white border-2 border-slate-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer transition-all"
                            placeholder=" "
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                          <label htmlFor="floating_name" className="absolute pointer-events-none text-sm text-slate-500 bg-white px-1 duration-300 transform -translate-y-1/2 top-0 left-3 scale-75 origin-[0] z-10 peer-placeholder-shown:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:bg-white peer-focus:top-0 peer-focus:scale-75 peer-focus:text-[#d4af37]">Full Name *</label>
                        </div>
                        <div className="relative w-full group mt-2">
                          <input
                            type="tel"
                            id="floating_phone"
                            required
                            className="block py-3.5 px-4 w-full text-sm text-[#060e22] bg-white border-2 border-slate-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer transition-all"
                            placeholder=" "
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          />
                          <label htmlFor="floating_phone" className="absolute pointer-events-none text-sm text-slate-500 bg-white px-1 duration-300 transform -translate-y-1/2 top-0 left-3 scale-75 origin-[0] z-10 peer-placeholder-shown:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:bg-white peer-focus:top-0 peer-focus:scale-75 peer-focus:text-[#d4af37]">Phone Number *</label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="relative w-full group mt-2">
                          <input
                            type="email"
                            id="floating_email"
                            className="block py-3.5 px-4 w-full text-sm text-[#060e22] bg-white border-2 border-slate-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer transition-all"
                            placeholder=" "
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                          <label htmlFor="floating_email" className="absolute pointer-events-none text-sm text-slate-500 bg-white px-1 duration-300 transform -translate-y-1/2 top-0 left-3 scale-75 origin-[0] z-10 peer-placeholder-shown:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:bg-white peer-focus:top-0 peer-focus:scale-75 peer-focus:text-[#d4af37]">Email Address</label>
                        </div>
                        <div className="relative w-full group mt-2">
                          <select
                            id="floating_subject"
                            className={`block py-3.5 px-4 w-full text-sm bg-white border-2 border-slate-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer transition-all cursor-pointer ${!formData.subject ? 'text-transparent focus:text-[#060e22]' : 'text-[#060e22]'}`}
                            value={formData.subject}
                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          >
                            <option value="" disabled hidden>Select a Department...</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Bridal Consultation">Bridal Consultation</option>
                            <option value="Facial & Dermal Care">Facial & Dermal Care</option>
                            <option value="Hair Services">Hair Services</option>
                            <option value="Nail Art & Extensions">Nail Art & Extensions</option>
                            <option value="Waxing & Body Care">Waxing & Body Care</option>
                          </select>
                          <label htmlFor="floating_subject" className={`absolute pointer-events-none text-sm text-slate-500 px-1 duration-300 transform -translate-y-1/2 left-3 origin-[0] z-10 ${formData.subject ? 'top-0 scale-75 bg-white' : 'top-1/2 scale-100 bg-transparent'} peer-focus:bg-white peer-focus:top-0 peer-focus:scale-75 peer-focus:text-[#d4af37]`}>Subject / Department</label>
                        </div>
                      </div>

                      <div className="relative w-full group mt-2">
                        <textarea
                          id="floating_message"
                          required
                          rows={4}
                          className="block py-4 px-4 w-full text-sm text-[#060e22] bg-white border-2 border-slate-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer transition-all resize-none"
                          placeholder=" "
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                        <label htmlFor="floating_message" className="absolute pointer-events-none text-sm text-slate-500 bg-white px-1 duration-300 transform -translate-y-1/2 top-0 left-3 scale-75 origin-[0] z-10 peer-placeholder-shown:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[28px] peer-focus:bg-white peer-focus:top-0 peer-focus:scale-75 peer-focus:text-[#d4af37]">Your Message *</label>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full mt-2"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            SENDING...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" /> SUBMIT INQUIRY
                          </>
                        )}
                      </Button>

                      <p className="flex justify-center items-center gap-1.5 text-[10px] text-[#718096] pt-3">
                        <Lock className="w-3 h-3" /> Your information is kept private and used only to respond to your inquiry.
                      </p>
                    </form>
                  </>
                )}

                {/* Bottom Icons Divider */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent my-8" />

                {/* 3 Icons Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#e2e8f0]">
                  <div className="px-2">
                    <Headphones className="w-6 h-6 text-[#d4af37] mx-auto mb-3" />
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#060e22] mb-1.5">PROMPT RESPONSE</h4>
                    <p className="text-[10px] text-[#718096] font-light leading-snug">We aim to respond<br />as soon as possible</p>
                  </div>
                  <div className="px-2">
                    <Diamond className="w-6 h-6 text-[#d4af37] mx-auto mb-3" />
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#060e22] mb-1.5">PERSONALIZED SUPPORT</h4>
                    <p className="text-[10px] text-[#718096] font-light leading-snug">Assistance tailored<br />to your needs</p>
                  </div>
                  <div className="px-2">
                    <Heart className="w-6 h-6 text-[#d4af37] mx-auto mb-3" />
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#060e22] mb-1.5">YOUR BEAUTY MATTERS</h4>
                    <p className="text-[10px] text-[#718096] font-light leading-snug">We&apos;re here to help<br />you shine</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MAP SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#060e22] pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-[#d4af37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">FIND US HERE</span>
            </div>
            <h3 className="font-antic text-3xl sm:text-4xl text-white font-light mb-6">Visit 77 SALON</h3>
            <div className="w-full rounded-xl overflow-hidden border-[3px] border-[#d4af37] shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.443!2d77.2090!3d28.5494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z77+SALON!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="77 SALON Location Map"
                className="w-full"
              />
            </div>
            <p className="text-xs text-[#cbd5e1] font-light mt-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              123 Fashion Street, South Ext., New Delhi, 110049 &nbsp;·&nbsp;
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#d4af37] hover:underline font-semibold"
              >
                Get Directions →
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
