"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";
import Container from "@/shared/components/ui/Container";
import TripFilters from "@/features/destinations/components/TripFilters";
import { FILTER_OPTIONS } from "@/features/destinations/constants/filters";

// 1. Theme Tag Mapping (Bridges URL IDs to Firestore Tags)
const THEME_TAG_MAP = {
  "honeymoon": "romantic-getaways",
  "family": "family-funventure",
  "elite-escape": "elite-escape",
  "exploration-bundle": "exploration-bundle",
  "relax-rejuvenate": "relax-rejuvenate",
  "solo": "solo-expedition",
  "educational": "exploration-bundle",
  "religious-retreat": "religious-retreat"
};

/**
 * ThemePackageList Component
 * Filters and displays curated journeys for a specific theme or across all themes.
 * UPGRADED: Now fetches dynamic packages via GraphQL for live data.
 */
const ThemePackageList = ({ themeId }) => {
  const [dynamicPackages, setDynamicPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9; // 9 is ideal for a 3-column grid

  // 2. Initial State: If themeId is provided, pre-select that theme
  const [activeFilters, setActiveFilters] = useState({
    themes: themeId ? [themeId] : [],
    regions: [],
    budgets: 0,
    durations: []
  });

  // 3. Fetch Dynamic Data (Optimized Theme Query)
  useEffect(() => {
    const fetchThemePackages = async () => {
      setIsLoading(true);
      try {
        // Map current themeId to Firestore Tag
        const themeTag = THEME_TAG_MAP[themeId] || themeId;
        
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query GetThemePackages($themeNames: [String]!) {
                packagesByTheme(themeNames: $themeNames, limit: 100) {
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
                }
              }
            `,
            variables: { themeNames: themeTag ? [themeTag] : [] }
          })
        });

        const { data } = await response.json();
        if (data?.packagesByTheme) {
          setDynamicPackages(data.packagesByTheme);
        }
      } catch (err) {
        console.error("Error fetching theme packages:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThemePackages();
    setCurrentPage(1); // Reset page on theme change
  }, [themeId]);

  // 4. Aggregate and Filter Logic
  const allPackages = useMemo(() => {
    // If we have dynamic packages, use them. Otherwise fallback to static regions.js data.
    if (dynamicPackages.length > 0) {
      return dynamicPackages.map(pkg => ({
        ...pkg,
        // Map region title back to ID for filtering
        regionId: EUROPE_REGIONS.find(r => r.title === pkg.region || r.countries.includes(pkg.region))?.id || "western-europe",
        regionTitle: pkg.region,
        image: pkg.heroImage,
        from: pkg.price
      }));
    }

    return EUROPE_REGIONS.flatMap(region => 
      region.destinations.map(dest => ({
        ...dest,
        regionId: region.id,
        regionTitle: region.title,
        image: region.heroImage
      }))
    );
  }, [dynamicPackages]);

  const filteredPackages = useMemo(() => {
    return allPackages.filter(pkg => {
      // Theme filter (Important for fallback data)
      if (activeFilters.themes.length > 0) {
        // If pkg has themes array, check for intersection. 
        // Fallback data might not have themes, so we check if the themeId matches the metadata if possible
        // But for now, we assume if themes are selected, we filter by them
        if (pkg.themes && !activeFilters.themes.some(t => pkg.themes.includes(t))) {
          // If we are on a specific theme page, we also check the Firestore tag mapping
          const mappedTags = activeFilters.themes.map(t => THEME_TAG_MAP[t] || t);
          if (!activeFilters.themes.some(t => pkg.themes.includes(t)) && !mappedTags.some(tag => pkg.themes.includes(tag))) {
             return false;
          }
        }
      }

      // Region filter
      if (activeFilters.regions.length > 0) {
        if (!activeFilters.regions.includes(pkg.regionId)) return false;
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
  }, [allPackages, activeFilters]);

  // 5. Pagination Logic
  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPackages.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPackages, currentPage]);

  // Scroll to top on page change
  useEffect(() => {
    if (currentPage > 1 || filteredPackages.length > ITEMS_PER_PAGE) {
      const heading = document.getElementById("themes-heading");
      if (heading) {
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentPage]);

  // 6. Handlers
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
    <div className="relative bg-brand-soft/30 pb-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 pt-12">
          
          <div className="flex-grow lg:w-3/4">
            <div id="themes-heading" className="flex items-center gap-4 mb-12">
              <h2 className="text-brand-blue font-black uppercase tracking-[0.25em] text-[13px] whitespace-nowrap">
                {activeFilters.themes.length > 0 ? `${activeFilters.themes.join(" & ")} Collection` : "Signature Collection"}
              </h2>
              <div className="h-[1px] flex-grow bg-slate-200/60" />
              <div className="bg-white px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {isLoading ? "Curating..." : `${filteredPackages.length} Results`}
                </span>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-[2rem] aspect-[4/5] animate-pulse border border-slate-100" />
                  ))}
                </div>
              ) : paginatedPackages.length > 0 ? (
                <>
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {paginatedPackages.map((pkg, idx) => (
                      <motion.div
                        key={pkg.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-brand-blue/10 transition-all duration-700 h-full flex flex-col border border-slate-50"
                      >
                        <Link href={`/package/${pkg.slug || pkg.id}`} className="block h-full flex flex-col">
                          <div className="relative aspect-video lg:aspect-[4/5] overflow-hidden">
                            <Image
                              src={pkg.image || "/placeholder-travel.jpg"}
                              alt={pkg.name}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                            
                            <div className="absolute top-6 left-6">
                              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                                {pkg.regionTitle}
                              </span>
                            </div>

                            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl lg:rounded-2xl px-4 py-2 lg:px-5 lg:py-3">
                                <span className="text-white/60 text-[7px] lg:text-[8px] font-black uppercase tracking-widest block leading-none mb-1 lg:mb-1.5">Starting At</span>
                                <span className="text-white text-lg lg:text-xl font-black">{pkg.from}</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-7 flex-grow flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-1 h-3 bg-brand-gold rounded-full" />
                              <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">
                                {pkg.tag?.split('/')[0] || "Signature"}
                              </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-brand-blue transition-colors leading-tight">
                              {pkg.name}
                            </h3>
                            <p className="text-slate-500 font-medium text-[11px] md:text-xs mb-6 line-clamp-2 leading-relaxed">
                              {pkg.details} · {pkg.duration}
                            </p>

                            <div className="mt-auto flex items-center gap-3 text-brand-blue font-black text-[10px] uppercase tracking-widest pt-6 border-t border-slate-50">
                              Discover More
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
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
                  className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200"
                >
                  <h3 className="text-4xl font-black text-slate-900 mb-4 italic font-editorial">No matching journeys</h3>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium mb-10 text-sm leading-relaxed">
                    Our curators couldn't find a signature matching these criteria. Try adjusting your preferences.
                  </p>
                  <button 
                    onClick={() => handleFilterChange("all", {})}
                    className="px-10 py-4 bg-brand-blue text-white rounded-full text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-brand-blue/20 hover:scale-105 transition-transform"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <aside className="lg:w-1/4">
            <TripFilters 
              activeFilters={activeFilters} 
              onFilterChange={handleFilterChange} 
              totalCount={filteredPackages.length} 
              excludeCategories={["themes"]}
            />
          </aside>

        </div>
      </Container>
    </div>
  );
};

export default ThemePackageList;
