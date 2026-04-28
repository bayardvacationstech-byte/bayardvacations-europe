"use client";

import React, { useState } from "react";
import { Star, MapPin, Moon, Bed, ExternalLink } from "lucide-react";

/**
 * PackageHotels Component
 * Displays curated accommodation details for the tour by category.
 */
export default function PackageHotels({ hotelsByCategory, baseCategory = "threestar" }) {
  const [selectedCategory, setSelectedCategory] = useState(baseCategory);

  const categories = Object.keys(hotelsByCategory || {}).sort((a, b) => {
    const order = ['twostar', 'threestar', 'fourstar', 'fivestar'];
    return order.indexOf(a) - order.indexOf(b);
  });

  const categoryLabels = {
    twostar: "2 Star",
    threestar: "3 Star",
    fourstar: "4 Star",
    fivestar: "5 Star"
  };

  const currentHotels = (hotelsByCategory || {})[selectedCategory] || [];

  if (categories.length === 0) return null;

  return (
    <div className="pt-16 border-t border-slate-100">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-[1px] bg-slate-200" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Accommodations
            </h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
            Handpicked <span className="text-brand-gold italic">Stays</span>
          </h3>
        </div>

        {/* Category Selector */}
        <div className="flex p-1 bg-slate-50 rounded-full border border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Hotel Grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentHotels.map((hotel, i) => (
          <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500 flex flex-col h-full">
            {/* Compact Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={hotel.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"} 
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3">
                <div className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
                  {[...Array(parseInt(hotel.stars) || 5)].map((_, sIdx) => (
                    <Star key={sIdx} size={8} className="fill-brand-gold text-brand-gold border-none" />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section - Tightened */}
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-base font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-gold transition-colors line-clamp-1">
                {hotel.name}
              </h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Bed size={14} className="text-slate-300 group-hover:text-brand-gold transition-colors" />
                  <span className="text-[11px] font-bold tracking-tight line-clamp-1">{hotel.roomType || "Premium Room"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500">
                  <MapPin size={14} className="text-slate-300 group-hover:text-brand-gold transition-colors" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate">{hotel.location}</span>
                </div>
              </div>

              {hotel.googleUrl && (
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <a 
                    href={hotel.googleUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-gold transition-all group/btn"
                  >
                    Explore on Map
                    <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
