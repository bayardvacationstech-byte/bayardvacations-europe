"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/shared/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// HARD-CODED CORE EUROPEAN STYLES
const CORE_STYLES = [
  {
    id: "honeymoon",
    themeKey: "honeymoon",
    title: "Honeymoon",
    subtitle: "Romantic Escapes",
    description: "Centuries-old charm meeting modern romance.",
    image: "/theme_images/Honeymoon.png",
    badge: "Most Romantic",
    location: "SANTORINI"
  },
  {
    id: "elite-escape",
    themeKey: "elite-escape",
    title: "Elite Escape",
    subtitle: "The Gold Standard",
    description: "Curated opulence and private access.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
    badge: "Signature",
    location: "PARIS"
  },
  {
    id: "family",
    themeKey: "family",
    title: "Family Funventure",
    subtitle: "Create Memories",
    description: "Engaging adventures for every generation.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200",
    badge: "All Ages",
    location: "LONDON"
  },
  {
    id: "group-departure",
    themeKey: "group-departure",
    title: "Group Departure",
    subtitle: "Journey Together",
    description: "Curated group tours across Europe.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200",
    badge: "Best Value",
    location: "ROME"
  },
  {
    id: "relax-rejuvenate",
    themeKey: "relax-rejuvenate",
    title: "Relax & Rejuvenate",
    subtitle: "Wellness Focus",
    description: "Mediterranean spas and Swiss retreats.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    badge: "Wellness",
    location: "SWISS ALPS"
  },
  {
    id: "solo",
    themeKey: "solo",
    title: "Solo Expedition",
    subtitle: "Find Yourself",
    description: "Bespoke itineraries for the independent.",
    image: "https://images.unsplash.com/photo-1521295121683-b99e693b9183?auto=format&fit=crop&q=80&w=1200",
    badge: "Safe",
    location: "BARCELONA"
  }
];

const StyleStudio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const [themePrices, setThemePrices] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // FETCH DYNAMIC PRICES FOR THEMES
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const themeNames = CORE_STYLES.map(s => s.themeKey);
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query GetThemePrices($themeNames: [String]!) {
                packagesByTheme(themeNames: $themeNames, limit: 100) {
                  priceNumeric
                  themes
                }
              }
            `,
            variables: { themeNames }
          })
        });

        const { data } = await response.json();
        if (data?.packagesByTheme) {
          const prices = {};
          data.packagesByTheme.forEach(pkg => {
            pkg.themes.forEach(theme => {
              const normalizedTheme = theme.toLowerCase().replace(/\s+/g, '-');
              if (CORE_STYLES.some(s => s.themeKey === normalizedTheme)) {
                if (!prices[normalizedTheme] || pkg.priceNumeric < prices[normalizedTheme]) {
                  prices[normalizedTheme] = pkg.priceNumeric;
                }
              }
            });
          });
          setThemePrices(prices);
        }
      } catch (err) {
        console.error("Error fetching theme prices:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden relative z-10" aria-labelledby="style-studio-heading">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-2 md:mb-4 block">
              The Art of Travel
            </span>
            <h2 id="style-studio-heading" className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Your <span className="text-brand-blue">Signature Style</span>
            </h2>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-gold hover:text-brand-gold transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-gold hover:text-brand-gold transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Postcard Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 py-8" ref={emblaRef}>
          <div className="flex gap-6 md:gap-10">
            {CORE_STYLES.map((theme) => {
              const dynamicPrice = themePrices[theme.themeKey];
              const displayPrice = dynamicPrice 
                ? `₹${Number(dynamicPrice).toLocaleString('en-IN')}` 
                : "Enquire";

              return (
                <div key={theme.id} className="flex-none w-[280px] sm:w-[350px] md:w-[380px]">
                  {/* The Postcard Frame */}
                  <Link 
                    href={`/themes/${theme.id}`}
                    className="group block relative bg-white p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] transition-all duration-700 hover:-translate-y-4"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={theme.image}
                        alt={theme.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        unoptimized
                      />
                      

                      {/* Center Text: Magic of... */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
                         <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-lg mb-1">Experience</span>
                         <span className="font-editorial italic text-white text-lg md:text-3xl drop-shadow-xl mb-0.5">the Magic of</span>
                         <h3 className="text-white text-2xl md:text-6xl font-black tracking-tighter leading-none drop-shadow-2xl">
                           {theme.location}
                         </h3>
                      </div>

                      {/* Postcard Stamps & Info (Bottom) */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-30 flex items-end justify-between">
                        
                        {/* Stamp Element */}
                        <div className="bg-white p-1.5 md:p-2 flex flex-col shadow-xl transform -rotate-3 border-t-2 border-dashed border-slate-100 scale-90 md:scale-100 origin-bottom-left">
                          <span className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-0.5 mb-1">{theme.location}</span>
                          <div className="flex items-baseline gap-1">
                             <span className="text-[8px] md:text-[10px] font-bold text-slate-600">Start</span>
                             <span className="text-brand-blue text-sm md:text-xl font-black">{displayPrice}</span>
                          </div>
                          <span className="text-[6px] md:text-[7px] font-bold text-slate-400 uppercase">Per Person</span>
                        </div>

                        {/* Action Button */}
                        <div className="flex flex-col items-end gap-2 md:gap-3">
                          <div className="bg-brand-blue text-white px-3 py-1.5 md:px-4 md:py-2 rounded shadow-lg group-hover:bg-brand-gold transition-colors flex items-center gap-2 scale-90 md:scale-100 origin-bottom-right">
                             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Book Now</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-white/80 drop-shadow-lg scale-75 md:scale-100 origin-right">
                             <Phone size={10} className="fill-white" />
                             <span className="text-[8px] md:text-[9px] font-black">+91 06363 11742</span>
                          </div>
                        </div>

                      </div>

                      {/* Dark Overlay for Text Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    </div>
                  </Link>
                  
                  {/* Theme Title Below Postcard */}
                  <div className="mt-6 flex items-center justify-between px-2">
                    <div className="space-y-1">
                      <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none">{theme.title}</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{theme.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StyleStudio;
