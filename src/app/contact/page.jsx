"use client";

import React from "react";
import Image from "next/image";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/contact_hero.png"
          alt="Luxury European terrace overlooking a misty lake at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        <Container className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-serif text-2xl md:text-3xl mb-4 italic drop-shadow-md"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Connect with us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-xl"
          >
            Your Journey <br /> <span className="text-brand-gold">Starts Here</span>
          </motion.h1>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left Column: Info & Concierge */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
                  Bespoke <br /> Assistance
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                  Whether you're dreaming of a private villa in Tuscany or a high-altitude adventure in the Alps, our specialists are here to curate every detail.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Phone, title: "Call Us", value: "+1 (800) BAYARD-V", sub: "Mon-Fri, 9am - 6pm EST" },
                  { icon: Mail, title: "Email", value: "concierge@bayard.com", sub: "Response within 12 hours" },
                  { icon: MessageSquare, title: "Live Chat", value: "Available 24/7", sub: "Via our mobile app" },
                  { icon: Clock, title: "Global Support", value: "Multi-timezone", sub: "Dedicated travel support" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-black text-slate-900 uppercase tracking-wider text-[10px] mb-1">{item.title}</h3>
                      <p className="font-bold text-slate-800 text-[13px] leading-tight">{item.value}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Expert Headshots */}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Talk to our lead experts</p>
                <div className="flex -space-x-4 mb-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative shadow-lg">
                      <Image
                        src={`https://i.pravatar.cc/150?u=bayard${i}`}
                        alt="Expert"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shadow-lg">
                    +12
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-600">
                  <span className="text-emerald-500 flex items-center gap-1.5 inline-flex mr-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Online Now
                  </span>
                  Average response time: 8 mins
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[1.5rem] p-8 shadow-xl shadow-brand-blue/5 border border-slate-50 relative max-w-lg mx-auto lg:ml-auto"
            >
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-brand-gold rounded-xl flex items-center justify-center text-white rotate-12 shadow-xl z-20">
                <Send size={24} />
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">Request a Proposal</h3>
                <p className="text-[13px] text-slate-500 font-medium">Briefly describe your dream escape.</p>
              </div>

              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Julian Bayard"
                      className="w-full px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-bold text-[13px] text-slate-900 placeholder:text-slate-400/50 placeholder:font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@bayard.com"
                      className="w-full px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-bold text-[13px] text-slate-900 placeholder:text-slate-400/50 placeholder:font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Preferred Destination</label>
                  <div className="relative">
                    <select className="w-full px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-bold text-[13px] text-slate-900 appearance-none cursor-pointer">
                      <option>Select a Region...</option>
                      <option>Scandinavia</option>
                      <option>Western Europe</option>
                      <option>Central Europe</option>
                      <option>UK & Ireland</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Your Vision</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your perfect escape..."
                    className="w-full px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-bold text-[13px] text-slate-900 placeholder:text-slate-400/50 placeholder:font-medium resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[11px] shadow-lg shadow-brand-blue/10 hover:bg-brand-gold hover:shadow-brand-gold/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                    Send Inquiry
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                  <span className="text-brand-blue cursor-pointer hover:text-brand-gold transition-colors">Privacy Terms</span> <span className="mx-2 opacity-30">•</span> Secure Submission
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Offices Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Our Global Presence</h2>
            <p className="text-slate-500 font-medium italic" style={{ fontFamily: "var(--font-great-vibes)", fontSize: '1.5rem' }}>
              Boutique offices in the heart of the continent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "Paris", address: "8 Rue de Rivoli, 75001", icon: "/quick_region_images/eiffel_tower.svg" },
              { city: "London", address: "22 Savile Row, Mayfair", icon: "/quick_region_images/tower_bridge.svg" },
              { city: "Rome", address: "Piazza di Spagna, 00187", icon: "/quick_region_images/colosseum.svg" }
            ].map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-brand-blue/30 transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 relative grayscale group-hover:grayscale-0 transition-all">
                  <Image src={office.icon} alt={office.city} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{office.city}</h3>
                <p className="text-slate-500 text-sm font-medium mb-4">{office.address}</p>
                <div className="flex items-center justify-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-widest cursor-pointer group-hover:text-brand-gold transition-colors">
                  <Globe size={14} />
                  View on Map
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
