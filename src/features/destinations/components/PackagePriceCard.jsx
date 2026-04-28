"use client";

import React, { useState } from "react";
import { Send, Phone, ShieldCheck, Star } from "lucide-react";

/**
 * PackagePriceCard Component
 * High-utility sticky sidebar with category selection and enquiry form.
 */
export default function PackagePriceCard({ pkg }) {
  const [category, setCategory] = useState("threestar");
  
  // Extract dynamic pricing with robust fallback
  const basePrice = Number(pkg.priceNumeric) || 0;
  
  const hasHotelCharges = pkg.hotelCharges && Object.keys(pkg.hotelCharges).length > 0;
  
  const charges = hasHotelCharges ? pkg.hotelCharges : {
    threestar: { price: basePrice || 35500 },
    fourstar: { price: (basePrice || 35500) * 1.3 },
    fivestar: { price: (basePrice || 35500) * 1.6 }
  };

  const currentPrice = charges[category]?.price || charges.threestar?.price || basePrice;

  return (
    <div className="sticky top-32 space-y-6">
      
      {/* 1. Category & Price Card */}
      <div className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-xl shadow-black/[0.02]">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
          Select Hotel Category
        </h4>
        
        {/* Category Selector */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {["threestar", "fourstar", "fivestar"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex flex-col items-center justify-center py-3 rounded-2xl border transition-all ${
                category === cat 
                ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                : "bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100"
              }`}
            >
              <span className="text-[9px] font-black uppercase tracking-wider mb-1">
                {cat.replace("star", " Star")}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: cat === "threestar" ? 3 : cat === "fourstar" ? 4 : 5 }).map((_, i) => (
                  <Star key={i} size={8} fill={category === cat ? "#fff" : "#cbd5e1"} className="border-none" />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Price */}
        <div className="mb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
            Journey Starts From
          </span>
          <div className="flex items-baseline gap-2">
            {currentPrice > 0 ? (
              <>
                <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
                  ₹{Number(currentPrice).toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Per Person
                </span>
              </>
            ) : (
              <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                Enquire <span className="text-brand-gold">for Price</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Quick Enquiry Form Card */}
      <div className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-xl shadow-black/[0.02]">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
          Quick Enquiry
        </h4>
        
        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-1 focus:ring-brand-gold transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-1 focus:ring-brand-gold transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter your number"
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-1 focus:ring-brand-gold transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Requirements</label>
            <textarea 
              rows={3}
              placeholder="Any specific needs?"
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-1 focus:ring-brand-gold transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg"
          >
            Send Enquiry
            <Send size={14} />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
           <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Secure Enquiry</span>
           </div>
           <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-900 hover:text-brand-gold transition-colors">
              <Phone size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Call Now</span>
           </a>
        </div>
      </div>
    </div>
  );
}
