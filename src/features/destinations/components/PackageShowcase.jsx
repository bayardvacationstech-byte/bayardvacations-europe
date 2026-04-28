"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Star, MapPin, ArrowRight } from "lucide-react";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";

// Helper to get fallback packages from static regions data
const getFallbackPackages = (theme) => {
  const allDestinations = EUROPE_REGIONS.flatMap(r => 
    (r.destinations || []).map(d => ({ ...d, region: r.title }))
  );
  
  if (theme === "elite") {
    return allDestinations.filter(d => d.tag === "LUXURY" || d.tag === "LUXURY/FAMILY").slice(0, 8);
  }
  if (theme === "cultural") {
    return allDestinations.filter(d => d.tag === "CULTURAL" || d.tag === "HERITAGE/FAMILY").slice(0, 8);
  }
  if (theme === "value") {
    return allDestinations.filter(d => d.tag === "OFFBEAT" || d.tag === "NATURE" || d.tag === "SCENIC").slice(0, 8);
  }
  return allDestinations.slice(0, 8);
};

const TRENDING_DESTINATIONS = [
  {
    id: "trend-1",
    title: "Amalfi Coast, Italy",
    subtitle: "Coastal Glamour",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1000&auto=format&fit=crop",
    regionId: "western-europe"
  },
  {
    id: "trend-2",
    title: "Interlaken, Switzerland",
    subtitle: "Alpine Heart",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop",
    regionId: "western-europe"
  },
  {
    id: "trend-3",
    title: "Santorini, Greece",
    subtitle: "Aegean Sunset",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
    regionId: "southern-europe"
  },
  {
    id: "trend-4",
    title: "Reykjavik, Iceland",
    subtitle: "Arctic Wonder",
    image: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=1000&auto=format&fit=crop",
    regionId: "scandinavia"
  },
  {
    id: "trend-5",
    title: "Prague, Czechia",
    subtitle: "Medieval Soul",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop",
    regionId: "central-europe"
  },
  {
    id: "trend-6",
    title: "Paris, France",
    subtitle: "City of Light",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
    regionId: "western-europe"
  },
  {
    id: "trend-7",
    title: "Dubrovnik, Croatia",
    subtitle: "Pearl of Adriatic",
    image: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=1000&auto=format&fit=crop",
    regionId: "balkans"
  },
  {
    id: "trend-8",
    title: "London, UK",
    subtitle: "Heritage Capital",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
    regionId: "uk-ireland"
  }
];

/**
 * ElitePackageCard
 * High-end Luxury aesthetic: Portrait (2/3), Full Image.
 */
const ElitePackageCard = ({ pkg }) => (
  <div className="flex-none w-[280px] sm:w-[320px] px-3">
    <Link href={`/package/${pkg.slug || pkg.id}`} className="group block bg-white rounded-[2.5rem] p-3 shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
          unoptimized
        />
        {/* Floating Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg border border-white/20">
          <Star size={12} className="text-orange-500 fill-orange-500" />
          <span className="text-slate-900 text-[10px] font-black">4.8 (12)</span>
          <span className="text-[12px]">🤩</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <h3 className="text-slate-900 text-lg font-black tracking-tight mb-2 group-hover:text-brand-blue transition-colors line-clamp-1">
          {pkg.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          <span className="text-orange-500 font-black text-sm">Rs. {pkg.from.replace(/[^0-9]/g, '').toLocaleString() || "28,000"}/-</span>
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Per Person</span>
        </div>

        {/* Footer Meta Info */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-4 px-1">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock size={12} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{pkg.duration || "4 Days"}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <div className="w-3 h-3 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight">15+</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin size={12} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{pkg.region || "Europe"}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

/**
 * TrendingCard
 */
const TrendingCard = ({ trend }) => (
  <div className="flex-none w-[240px] sm:w-[280px] md:w-[320px] px-3">
    <Link href={`/${trend.regionId}`} className="group block relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
      <Image
        src={trend.image}
        alt={trend.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h4 className="text-white text-lg font-black tracking-tight mb-1">{trend.title}</h4>
        <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{trend.subtitle}</p>
      </div>
    </Link>
  </div>
);

/**
 * CulturalPackageCard
 */
const CulturalPackageCard = ({ pkg }) => (
  <div className="flex-none w-[260px] sm:w-[300px] px-3">
    <Link href={`/package/${pkg.slug || pkg.id}`} className="group block relative aspect-square rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl bg-slate-100">
      <Image
        src={pkg.image}
        alt={pkg.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-1000"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="mb-2">
          <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-[8px] mb-1.5 block">
            Bespoke Culture
          </span>
          <h3 className="text-white text-xl font-black tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
            {pkg.name}
          </h3>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/20">
          <span className="text-white/60 text-[9px] font-bold uppercase tracking-widest">{pkg.duration}</span>
          <span className="text-white font-black text-sm">{pkg.from}</span>
        </div>
      </div>
    </Link>
  </div>
);

/**
 * ValuePackageCard
 * REDESIGNED v3: Editorial style with image on top and text below, matching reference.
 */
const ValuePackageCard = ({ pkg }) => (
  <div className="flex-none w-[280px] sm:w-[320px] px-3 group">
    <Link href={`/package/${pkg.slug || pkg.id}`} className="block">
      {/* Image Container with premium rounding */}
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content Below Image */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">
            {pkg.region || "Europe"}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} className="text-brand-gold fill-brand-gold" />
            <span className="text-slate-400 text-[10px] font-bold">4.8/5</span>
          </div>
        </div>

        <h3 className="text-slate-900 text-lg md:text-xl font-black tracking-tight leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
          {pkg.name}
        </h3>

        <div className="pt-4 flex items-center justify-between border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-brand-gold text-lg font-black leading-none mb-1">
              {pkg.from}
            </span>
            <span className="text-slate-300 text-[8px] font-black uppercase tracking-widest">
              Per Person
            </span>
          </div>
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ShowcaseCarousel = ({ title, data, type = "elite" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const isValue = type === "value";

  return (
    <div className="mb-10 md:mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between md:text-left mb-8 md:mb-12 gap-8">
        <div className="space-y-3 max-w-4xl">
          {isValue && (
            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-1">
              Value Collection
            </span>
          )}
          <div className="w-12 h-1 bg-brand-gold rounded-full mb-4" />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            {title}
          </h2>
          {isValue && (
            <p className="text-slate-500 text-sm md:text-lg font-medium mt-4 leading-relaxed max-w-2xl">
              Discover extraordinary value across the continent with our handpicked journeys designed for every type of traveler.
            </p>
          )}
        </div>
        <div className="hidden sm:flex gap-3 md:mt-0 mb-2">
          <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm"><ChevronLeft size={20} /></button>
          <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-3 px-3 py-4" ref={emblaRef}>
        <div className="flex">
          {data.map((item) => {
            if (type === "elite") return <ElitePackageCard key={item.id} pkg={item} />;
            if (type === "trending") return <TrendingCard key={item.id} trend={item} />;
            if (type === "cultural") return <CulturalPackageCard key={item.id} pkg={item} />;
            if (type === "value") return <ValuePackageCard key={item.id} pkg={item} />;
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const PackageShowcase = () => {
  const [collections, setCollections] = React.useState({ elite: [], cultural: [], value: [] });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCollections = async () => {
      setIsLoading(true);
      try {
        const query = `
          query GetCollections($eliteThemes: [String]!, $culturalThemes: [String]!, $valueThemes: [String]!) {
            elite: packagesByTheme(themeNames: $eliteThemes, limit: 8) { id name region price duration tag heroImage slug }
            cultural: packagesByTheme(themeNames: $culturalThemes, limit: 8) { id name region price duration tag heroImage slug }
            value: packagesByTheme(themeNames: $valueThemes, limit: 8) { id name region price duration tag heroImage slug }
          }
        `;
        const response = await fetch("/api/graphql", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query, variables: {
              eliteThemes: ["elite-escape", "Elite Escape", "luxury", "Luxury"],
              culturalThemes: ["exploration-bundle", "Exploration Bundle", "exploration", "Exploration", "educational", "Educational"],
              valueThemes: ["relax-rejuvenate", "Relax & Rejuvenate", "Wellness", "Relax", "Value", "budget"]
            }
          })
        });
        const { data } = await response.json();
        
        // Use dynamic data if available, otherwise use static fallbacks
        setCollections({ 
          elite: (data?.elite && data.elite.length > 0) ? data.elite : getFallbackPackages("elite"), 
          cultural: (data?.cultural && data.cultural.length > 0) ? data.cultural : getFallbackPackages("cultural"), 
          value: (data?.value && data.value.length > 0) ? data.value : getFallbackPackages("value")
        });
      } catch (err) { 
        console.error("Error fetching homepage collections:", err);
        // On error, also use fallbacks
        setCollections({
          elite: getFallbackPackages("elite"),
          cultural: getFallbackPackages("cultural"),
          value: getFallbackPackages("value")
        });
      } finally { setIsLoading(false); }
    };
    fetchCollections();
  }, []);

  const formatPkg = (pkg) => {
    // Default images based on region if possible
    const defaultImages = {
      "Scandinavia": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop",
      "Western Europe": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
      "Central Europe": "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop",
      "UK & Ireland": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      "Balkans": "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=1000&auto=format&fit=crop",
      "Eastern Europe": "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop"
    };

    return {
      ...pkg,
      image: pkg.heroImage || pkg.image || defaultImages[pkg.region] || "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop",
      from: (pkg.from || pkg.price || "Enquire").replace("€", "₹"),
      location: pkg.name
    };
  };

  return (
    <section className="py-10 md:py-16 bg-white relative z-10" aria-label="Explore Collections">
      <Container>
        {isLoading ? (
          <div className="space-y-12 animate-pulse">
            <div className="h-10 w-64 bg-slate-100 rounded-lg mb-8" />
            <div className="flex gap-6 overflow-hidden">
              {[1, 2, 3, 4].map(j => <div key={j} className="w-[300px] aspect-[4/5] bg-slate-50 rounded-[2rem] shrink-0" />)}
            </div>
          </div>
        ) : (
          <>
            {collections.elite.length > 0 && <ShowcaseCarousel title="Elite European Escapes" data={collections.elite.map(formatPkg)} type="elite" />}
            <ShowcaseCarousel title="Top Trending Destinations" data={TRENDING_DESTINATIONS} type="trending" />
            {collections.cultural.length > 0 && <ShowcaseCarousel title="Bespoke Cultural Journeys" data={collections.cultural.map(formatPkg)} type="cultural" />}
            {collections.value.length > 0 && <ShowcaseCarousel title="Europe for Everyone" data={collections.value.map(formatPkg)} type="value" />}
          </>
        )}
      </Container>
    </section>
  );
};

export default PackageShowcase;
