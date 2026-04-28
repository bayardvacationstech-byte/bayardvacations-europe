"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { MapPin, Compass, ChevronDown } from "lucide-react";
import DynamicIcon from "@/shared/components/ui/DynamicIcon";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";

// Status badge colours
const statusMap = {
  HOT: "bg-rose-500 text-white",
  NEW: "bg-emerald-500 text-white",
  WANT: "bg-violet-500 text-white",
};

export default function RegionHero({ region }) {
  const overlayRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCountry = searchParams.get("country");
  const countryRefs = useRef({});

  // Auto-scroll selected country into view
  useEffect(() => {
    if (activeCountry && countryRefs.current[activeCountry]) {
      // Small delay to ensure layout is ready
      const timer = setTimeout(() => {
        countryRefs.current[activeCountry]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeCountry]);

  // Subtle parallax on scroll
  useEffect(() => {
    const el = overlayRef.current;
    const onScroll = () => {
      if (el) el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContent = () => {
    document
      .getElementById("region-packages")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCountryClick = (country) => {
    const params = new URLSearchParams(searchParams);
    if (country === "Multi Countries") {
      params.delete("country");
    } else {
      params.set("country", country);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section
      className="relative h-[92svh] md:h-[92vh] md:min-h-[650px] flex flex-col justify-end overflow-hidden"
      aria-labelledby="region-hero-title"
    >
      {/* Background image with subtle parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
        style={{
          backgroundImage: `url(${region.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Accent colour wash from region palette */}
      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          background: `radial-gradient(ellipse at bottom left, ${region.accentHex}44 0%, transparent 60%)`,
        }}
      />

      {/* Content: Bottom-weighted for "Mobile App" feel */}
      <Container className="relative z-20 pt-[30vh] md:pt-0 pb-16 md:pb-24 flex flex-col justify-end min-h-full">
        {/* Breadcrumb - Hidden on mobile to maximize image visibility */}
        <nav className="hidden md:flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <span className="hover:text-white transition-colors cursor-default">Explore</span>
          <span className="opacity-30">/</span>
          <span className="text-white/90">{region.title}</span>
        </nav>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
          {region?.tags?.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border backdrop-blur-md ${region.badgeColor || "bg-white/10 text-white border-white/20"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Icon + Title: Responsive Scaling */}
        <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-6 mb-3 md:mb-8">
          <div
            className="w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group"
            style={{ backgroundColor: `${region.accentHex}15` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            <DynamicIcon name={region.icon} size={20} className="text-white md:hidden relative z-10" strokeWidth={1.5} />
            <DynamicIcon name={region.icon} size={40} className="text-white hidden md:block relative z-10" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-white/50 text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase mb-1 md:mb-3 ml-1">
              {region.subtitle}
            </p>
            <h1
              id="region-hero-title"
              className="text-3xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              {region.title}
            </h1>
          </div>
        </div>

        {/* Tagline: Balanced size */}
        <p className="text-white/80 text-[13px] md:text-2xl w-full block break-words md:max-w-2xl mb-6 md:mb-8 leading-snug font-medium tracking-tight">
          {region.tagline}
        </p>

        {/* Countries strip: Horizontal scrolling "Film Strip" on mobile */}
        <div
          ref={scrollContainerRef}
          className="relative z-30 flex items-center gap-3 mb-12 md:mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/20 backdrop-blur-md mr-2">
            <MapPin size={12} className="text-brand-gold" />
            <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none">Destinations</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
            {/* All Countries Chip */}
            <button
              ref={(el) => (countryRefs.current["Multi Countries"] = el)}
              onClick={() => handleCountryClick("Multi Countries")}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                !activeCountry
                  ? "bg-brand-gold text-white shadow-lg"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              Multi Countries
            </button>

            {region?.countries?.map((c) => {
              const countryName = typeof c === 'string' ? c : c.name;
              const isSelected = activeCountry === countryName;

              return (
                <button
                  key={countryName}
                  ref={(el) => (countryRefs.current[countryName] = el)}
                  onClick={() => handleCountryClick(countryName)}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                    isSelected
                      ? "bg-brand-gold text-white shadow-lg"
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {countryName}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTAs: Removed as per user request to simplify mobile view */}
      </Container>

      {/* Scroll cue */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Discover</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
