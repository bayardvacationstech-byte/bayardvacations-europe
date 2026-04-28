"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, Calendar, Send, CheckCircle, Lock } from "lucide-react";
import Container from "@/shared/components/ui/Container";

/**
 * RegionEnquiry Component
 * PREMIUM REDESIGN: Cinematic background, asymmetric layout, and slim glassmorphic form.
 */
export default function RegionEnquiry({ region }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    month: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit logic
    setSubmitted(true);
  };

  return (
    <section
      id="region-enquiry"
      className="relative py-12 md:py-32 overflow-hidden bg-slate-100"
      aria-labelledby="enquiry-heading"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={region.heroImage || "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070"}
          alt=""
          fill
          unoptimized
          className="object-cover opacity-20 grayscale-[0.5] contrast-[1.1] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F8F5] via-[#F9F8F5]/90 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 1. Left Feature: Concierge Invitation (Expanded/Wider) */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">
                Private Concierge
              </span>
            </div>
            
            <h2
              id="enquiry-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8"
            >
              Start Your <br />
              <span
                className="font-editorial italic font-normal text-brand-gold"
                style={{ color: region.accentHex }}
              >
                {region.title}
              </span>{" "}
              Journey
            </h2>
            
            <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl">
              Allow our curators to architect a bespoke {region.title} experience, 
              tailored strictly to your curiosity. Our experts respond within 24 hours.
            </p>

            {/* Premium Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-slate-200">
              <div className="group">
                <div className="flex items-center gap-3 text-brand-gold mb-2">
                  <Phone size={14} strokeWidth={2.5} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Speak Directly</span>
                </div>
                <a href="tel:+919876543210" className="text-slate-900 text-lg font-bold hover:text-brand-blue transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 text-brand-gold mb-2">
                  <Mail size={14} strokeWidth={2.5} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Private Inquiry</span>
                </div>
                <a href="mailto:europe@bayardvacations.com" className="text-slate-900 text-lg font-bold hover:text-brand-blue transition-colors break-all">
                  europe@bayardvacations.com
                </a>
              </div>
            </div>
          </div>

          {/* 2. Right Feature: Slim Form Card */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 p-6 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden">
               {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 md:py-20 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 border border-brand-gold/20">
                    <CheckCircle className="text-brand-gold" size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received</h3>
                  <p className="text-slate-500 text-sm md:text-base font-medium max-w-xs mx-auto leading-relaxed">
                    A specialist is reviewing your journey specs. Expect a bespoke architecture within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Identity */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all font-medium text-sm md:text-base"
                      />
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all font-medium text-sm md:text-base"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all font-medium text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Journey Details Split */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                     <div className="bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col gap-0.5 md:gap-1 group hover:bg-slate-100 transition-colors">
                        <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest">Party Size</span>
                        <select
                          name="travelers"
                          value={form.travelers}
                          onChange={handleChange}
                          className="bg-transparent text-slate-900 text-xs md:text-sm font-bold outline-none cursor-pointer"
                        >
                          {["1", "2", "3-5", "5-10", "10+"].map(v => (
                            <option key={v} value={v}>{v} {v === "1" ? "Person" : "People"}</option>
                          ))}
                        </select>
                     </div>
                     <div className="bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col gap-0.5 md:gap-1 group hover:bg-slate-100 transition-colors">
                        <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest">Timeline</span>
                        <select
                          name="month"
                          value={form.month}
                          onChange={handleChange}
                          className="bg-transparent text-slate-900 text-xs md:text-sm font-bold outline-none cursor-pointer"
                        >
                          <option value="">Month</option>
                          {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                            <option key={m} value={m}>{m} 2025</option>
                          ))}
                        </select>
                     </div>
                  </div>

                  {/* Message */}
                  <div className="pt-1 md:pt-2">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Special requirements (e.g. Accessibility, Anniversary...)"
                      rows={2}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl p-3 md:p-4 text-xs md:text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue py-4 md:py-5 rounded-xl md:rounded-2xl text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-[11px] shadow-2xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Start Planning</span>
                    <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 md:gap-3 pt-2 md:pt-4">
                    <Lock size={10} className="text-brand-gold" />
                    <span className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mt-0.5">
                      Bespoke Itinerary · Free of Charge
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
