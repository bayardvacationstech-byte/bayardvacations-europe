"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";

// HARD-CODED CORE REGIONS
const CORE_REGIONS = [
  {
    id: "scandinavia",
    title: "Scandinavia",
    heroImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
    from: "₹1,89,000",
    badge: "Limited Availability",
    badgeColor: "bg-rose-500 text-white"
  },
  {
    id: "uk-ireland",
    title: "UK & Ireland",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    from: "₹1,95,000",
    badge: "Member Exclusive"
  },
  {
    id: "western-europe",
    title: "Western Europe",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    from: "₹1,99,000",
    badge: "Summer 2026",
    badgeColor: "bg-brand-gold text-slate-900"
  },
  {
    id: "eastern",
    title: "Eastern Europe",
    heroImage: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=2070&auto=format&fit=crop",
    from: "₹99,000",
    badge: "Trending Now"
  },
  {
    id: "balkans",
    title: "Balkans",
    heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=2071&auto=format&fit=crop",
    from: "₹1,49,000",
    badge: "Save 20% Today"
  }
];

const RegionGallery = () => {
  const Card = ({ region, className, tall = false }) => {
    if (!region) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl shadow-black/5 hover:shadow-black/20 transition-all duration-700",
          tall 
            ? "h-[400px] sm:h-[500px] md:h-full md:min-h-[580px]" 
            : "h-[200px] md:h-[280px]",
          className
        )}
      >
        <Link href={`/${region.id}`} className="block h-full relative">
          <Image
            src={`${region.heroImage}&w=1000`}
            alt={region.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
            {region.badge && (
              <div className="absolute top-6 left-6 animate-fade-in">
                <span className={cn(
                  "px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md",
                  region.badgeColor || "bg-white text-slate-900"
                )}>
                  {region.badge}
                </span>
              </div>
            )}
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-1 tracking-tight">
                {region.title}
              </h3>
              <p className="text-white/70 text-[10px] font-black tracking-widest uppercase">
                From {region.from}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] z-30 pointer-events-none group-hover:border-white/30 transition-colors" />
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="py-10 md:py-16 bg-white" aria-labelledby="showcase-heading">
      <Container>
        <div className="text-center mb-6 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
              Global Gateways
            </span>
            <h2 
              id="showcase-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Our <span className="text-brand-blue">Destinations</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-gold mt-6 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Hero Card */}
          <Card 
            region={CORE_REGIONS[0]} // Scandinavia
            tall={true} 
            className="col-span-2 md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-1"
          />
          
          {/* Secondary Cards */}
          <Card 
            region={CORE_REGIONS[1]} // UK & Ireland
            className="col-span-1 md:col-start-1 md:row-start-1"
          />
          <Card 
            region={CORE_REGIONS[3]} // Eastern Europe
            className="col-span-1 md:col-start-1 md:row-start-2"
          />
          <Card 
            region={CORE_REGIONS[2]} // Western Europe
            className="col-span-1 md:col-start-3 md:row-start-1"
          />
          <Card 
            region={CORE_REGIONS[4]} // Balkans
            className="col-span-1 md:col-start-3 md:row-start-2"
          />
        </div>
      </Container>
    </section>
  );
};

export default RegionGallery;
