"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Flame, Sparkles, Heart } from "lucide-react";
import TripFilters from "./TripFilters";
import { FILTER_OPTIONS } from "../constants/filters";
import { EUROPE_REGIONS } from "../constants/regions";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";

const statusConfig = {
  HOT: {
    label: "Hot",
    icon: <Flame size={11} />,
    css: "bg-rose-500 text-white",
  },
  NEW: {
    label: "New",
    icon: <Sparkles size={11} />,
    css: "bg-emerald-500 text-white",
  },
  WANT: {
    label: "Popular",
    icon: <Heart size={11} />,
    css: "bg-violet-500 text-white",
  },
};

export default function RegionPackages({ region }) {
  const [dynamicPackages, setDynamicPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const searchParams = useSearchParams();
  const activeCountry = searchParams.get("country");

  // 1. Initial State: Multi-filter state
  const [activeFilters, setActiveFilters] = useState({
    themes: [],
    regions: [region.id], // Pre-select current region
    budgets: 0,
    durations: []
  });

  // Fetch dynamic packages via GraphQL
  useEffect(() => {
    const fetchPackages = async () => {
      if (!region?.id) {
        console.error("❌ RegionPackages: Missing region.id!");
        return;
      }
      setIsLoading(true);
      setCurrentPage(1); // Reset on region change
      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query GetPackages($regionNames: [String]!) {
                packagesByRegion(regionNames: $regionNames) {
                  id
                  name
                  slug
                  region
                  price
                  duration
                  tag
                  status
                  details
                  heroImage
                  daysNumeric
                  priceNumeric
                  themes
                  travelStyle
                  visaType
                }
              }
            `,
            variables: { regionNames: region.countries }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        if (data?.packagesByRegion) {
          setDynamicPackages(data.packagesByRegion);
        }
      } catch (err) {
        console.error("Error fetching regional packages:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, [region.id]);

  // 2. Data Source: Merge dynamic data with region-specific branding
  const allPackages = useMemo(() => {
    const rawData = dynamicPackages.length > 0 
      ? dynamicPackages 
      : region.destinations.map(d => ({ ...d, region: region.title }));

    return rawData.map(pkg => ({
      ...pkg,
      regionId: region.id,
      regionTitle: region.title,
      accentHex: region.accentHex,
      heroImage: pkg.heroImage || region.heroImage,
      from: (pkg.price || pkg.from || "Enquire").replace("€", "₹")
    }));
  }, [dynamicPackages, region]);

  // 3. Filtering Logic
  const filteredPackages = useMemo(() => {
    return allPackages.filter(pkg => {
      // Deep Link Country Filter
      if (activeCountry && activeCountry !== "Multi Countries") {
        if (pkg.region?.toLowerCase() !== activeCountry.toLowerCase()) return false;
      }

      // Region filter
      if (activeFilters.regions.length > 0) {
        if (!activeFilters.regions.includes(pkg.regionId)) return false;
      }

      // Theme filter
      if (activeFilters.themes.length > 0) {
        if (!activeFilters.themes.some(t => pkg.themes?.includes(t))) return false;
      }

      // Budget filter
      if (activeFilters.budgets > 0) {
        if (pkg.priceNumeric > activeFilters.budgets) return false;
      }

      // Duration filter
      if (activeFilters.durations.length > 0) {
        const matchingDurations = FILTER_OPTIONS.durations.filter(d => activeFilters.durations.includes(d.id));
        if (!matchingDurations.some(d => pkg.daysNumeric >= d.min && pkg.daysNumeric <= d.max)) return false;
      }

      return true;
    });
  }, [allPackages, activeFilters, activeCountry]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPackages.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPackages, currentPage]);

  // Scroll to top on page change
  useEffect(() => {
    if (currentPage > 1 || filteredPackages.length > ITEMS_PER_PAGE) {
      const heading = document.getElementById("packages-heading");
      if (heading) {
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentPage]);

  const handleFilterChange = (category, value) => {
    setCurrentPage(1); // Reset page on filter
    if (category === "all") {
      setActiveFilters({
        themes: [],
        regions: [],
        budgets: 0,
        durations: []
      });
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [category]: value
      }));
    }
  };

  return (
    <div className="relative bg-brand-soft/20 pb-10 md:pb-20">
      <Container>
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 pt-4">
          
          {/* 1. Package Grid Area (Left on Desktop) */}
          <div className="flex-grow lg:w-3/4">
            {/* Section heading area */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-6 md:mb-12">
              <div className="flex-grow flex items-center gap-4 md:gap-6">
                <h2
                  id="packages-heading"
                  className="text-2xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
                >
                  {activeFilters.regions.length === 1 && activeFilters.regions[0] === region.id ? region.title : "Curated Europe"}{" "}
                  <span
                    className="font-editorial italic font-normal inline-block ml-1"
                    style={{ color: region.accentHex }}
                  >
                    Collection
                  </span>
                </h2>
                <div className="hidden md:block h-[1px] flex-grow bg-slate-200/50" />
              </div>
              <div className="w-fit bg-white px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-slate-100 shadow-sm flex items-center gap-3">
                <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-0.5">{filteredPackages.length} Matches Found</span>
              </div>
            </div>

            {/* Package cards grid */}
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100/60 overflow-hidden h-full animate-pulse">
                      <div className="aspect-[4/5] bg-slate-100" />
                      <div className="p-8 space-y-4">
                        <div className="h-2 w-20 bg-slate-100 rounded" />
                        <div className="h-6 w-full bg-slate-100 rounded-lg" />
                        <div className="h-10 w-full bg-slate-50 rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : paginatedPackages.length > 0 ? (
                <>
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                  >
                    {paginatedPackages.map((dest, idx) => {
                      const status = statusConfig[dest.status] ?? statusConfig["NEW"];
                      
                      return (
                        <motion.article
                          key={dest.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          className="group relative bg-white rounded-[2.5rem] border border-slate-100/60 overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 flex flex-col h-full"
                          aria-label={dest.name}
                        >
                          {/* Featured Image Area */}
                          <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden">
                            <Image
                              src={dest.heroImage || region.heroImage}
                              alt={dest.name}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                            
                            {/* Accent line top */}
                            <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: dest.accentHex || region.accentHex }} />

                            {/* Status Badge */}
                            <div className="absolute top-6 left-6">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl ${status.css}`}>
                                {status.icon}
                                {status.label}
                              </span>
                            </div>

                            {/* Regional Identity */}
                            <div className="absolute top-6 right-6">
                              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest rounded-xl">
                                {dest.regionTitle}
                              </span>
                            </div>

                            {/* Price Tag */}
                            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 group/price">
                              <div className="bg-slate-950/40 backdrop-blur-3xl border border-white/20 rounded-2xl lg:rounded-[1.5rem] px-5 py-3 lg:px-7 lg:py-4 flex items-center gap-4 transition-all duration-500 group-hover/price:bg-slate-950/60 group-hover/price:scale-105 shadow-2xl">
                                <div className="flex flex-col justify-center">
                                  {dest.price !== "Enquire for Price" && (
                                    <span className="text-white/50 text-[7px] lg:text-[8px] font-black uppercase tracking-[0.3em] block leading-none mb-1.5 lg:mb-2">
                                      Starts From
                                    </span>
                                  )}
                                  <span className={cn(
                                    "text-white font-black tracking-tighter leading-none block",
                                    dest.price === "Enquire for Price" 
                                      ? "text-sm lg:text-base tracking-tight" 
                                      : "text-xl lg:text-2xl"
                                  )}>
                                    {dest.from}
                                  </span>
                                </div>
                                <div className="hidden md:flex w-10 h-10 rounded-xl bg-white/10 items-center justify-center text-white/90 border border-white/10 group-hover/price:bg-brand-gold group-hover/price:text-white transition-all duration-500">
                                  <Sparkles size={16} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="px-6 py-8 md:p-8 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dest.accentHex || region.accentHex }} />
                              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                {dest.tag}
                              </span>
                            </div>

                            <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-3 tracking-tighter group-hover:text-brand-blue transition-colors leading-none pt-1">
                              {dest.name}
                            </h3>
                            <p className="text-[11px] md:text-xs text-slate-500 font-medium mb-8 leading-relaxed line-clamp-2">
                              {dest.details}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                              <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest">
                                 <Clock size={14} className="text-brand-gold" />
                                 <span>{dest.duration}</span>
                              </div>
                              <Link
                                href={`/package/${dest.slug || dest.id}`}
                                className="group/link flex items-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-[0.2em]"
                              >
                                Explore
                                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}
                  </motion.div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-16 flex items-center justify-center gap-4">
                      <button 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm hover:border-brand-blue hover:text-brand-blue transition-all disabled:opacity-30 disabled:pointer-events-none group"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5"><path d="m15 18-6-6 6-6"/></svg>
                      </button>
                      
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => {
                          const page = i + 1;
                          const isActive = currentPage === page;
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`w-10 h-10 rounded-xl text-[11px] font-black transition-all ${
                                isActive 
                                  ? "bg-brand-blue text-white shadow-xl shadow-brand-blue/20 scale-110" 
                                  : "bg-white text-slate-400 border border-slate-100 hover:border-brand-blue/30"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>

                      <button 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm hover:border-brand-blue hover:text-brand-blue transition-all disabled:opacity-30 disabled:pointer-events-none group"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 md:py-32 bg-white rounded-[2rem] md:rounded-[4rem] border border-dashed border-slate-200"
                >
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 font-editorial italic">Refined Solitude</h3>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium mb-10 text-sm leading-relaxed">
                    Our curators haven't found a signature matching these criteria yet. Try exploring another focus.
                  </p>
                  <button 
                    onClick={() => handleFilterChange("all", {})}
                    className="px-10 py-5 bg-brand-blue text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-blue/30 hover:scale-105 transition-transform"
                  >
                    Explore Entire Collection
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mt-10 md:mt-20">
              All signature journeys are 100% bespoke and customizable.
            </p>
          </div>

          {/* 2. Sidebar Area (Right on Desktop) */}
          <aside className="lg:w-1/4">
            <TripFilters 
              activeFilters={activeFilters} 
              onFilterChange={handleFilterChange} 
              totalCount={filteredPackages.length} 
            />
          </aside>

        </div>
      </Container>
    </div>
  );
}
