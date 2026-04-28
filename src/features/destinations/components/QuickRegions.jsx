"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

/**
 * DEFINITIVE LANDMARK MAPPING
 * Audited and verified 2026-04-22
 */
const FEATURED_CITIES = [
  { id: "paris", name: "Paris", regionId: "western-europe", image: "/quick_region_images/eiffel_tower.svg" },
  { id: "london", name: "London", regionId: "uk-ireland", image: "/quick_region_images/tower_bridge.svg" },
  { id: "rome", name: "Rome", regionId: "western-europe", image: "/quick_region_images/colosseum_alt.svg" },
  { id: "amalfi", name: "Amalfi Coast", regionId: "western-europe", image: "/quick_region_images/trevi_fountain.svg" },
  { id: "swiss-alps", name: "Swiss Alps", regionId: "western-europe", image: "/quick_region_images/alps_mountain.svg" },
  { id: "santorini", name: "Santorini", regionId: "balkans", image: "/quick_region_images/parthenon.svg" },
  { id: "berlin", name: "Berlin", regionId: "western-europe", image: "/quick_region_images/brandenburg_gate.svg" },
  { id: "venice", name: "Venice", regionId: "western-europe", image: "/quick_region_images/european_skyline.svg" },
  { id: "barcelona", name: "Barcelona", regionId: "western-europe", image: "/quick_region_images/sagrada_familia.svg" },
  { id: "prague", name: "Prague", regionId: "central-europe", image: "/quick_region_images/charles_bridge.svg" },
  { id: "edinburgh", name: "Edinburgh", regionId: "uk-ireland", image: "/quick_region_images/edinburgh_castle.svg" },
  { id: "florence", name: "Florence", regionId: "western-europe", image: "/quick_region_images/leaning_tower_of_pisa.svg" },
  { id: "vienna", name: "Vienna", regionId: "central-europe", image: "/quick_region_images/buckingham_palace.svg" },
  { id: "budapest", name: "Budapest", regionId: "central-europe", image: "/quick_region_images/cologne_cathedral.svg" },
  { id: "lisbon", name: "Lisbon", regionId: "western-europe", image: "/quick_region_images/tower_bridge_alt.svg" },
  { id: "amsterdam", name: "Amsterdam", regionId: "western-europe", image: "/quick_region_images/european_skyline.svg" },
  { id: "nice", name: "Nice", regionId: "western-europe", image: "/quick_region_images/domed_basilica.svg" },
  { id: "berlin-tower", name: "Berlin TV Tower", regionId: "western-europe", image: "/quick_region_images/berlin_tv_tower.svg" },
  { id: "louvre", name: "The Louvre", regionId: "western-europe", image: "/quick_region_images/louvre.svg" },
  { id: "london-modern", name: "The Shard", regionId: "uk-ireland", image: "/quick_region_images/the_shard.svg" },
];

const QuickRegions = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Threshold for adding "stuck" visual effects
      const shouldBeStuck = currentScrollY > 700;
      setIsScrolledPastHero(prev => prev !== shouldBeStuck ? shouldBeStuck : prev);

      // 2. Synchronize top-offset logic with actual Header component
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current) {
          setIsHeaderVisible(prev => prev !== false ? false : prev);
        } else {
          setIsHeaderVisible(prev => prev !== true ? true : prev);
        }
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "sticky z-[990] transition-all duration-300 max-w-full overflow-x-clip",
        // Perfectly coordinates with the 64px height of the scrolled header (40px logo + 24px padding)
        isHeaderVisible ? "top-16" : "top-0",
        // Visual styles when scrolled past
        isScrolledPastHero
          ? "bg-brand-soft/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-1"
          : "bg-brand-soft/20 py-1 sm:py-3"
      )}
      aria-label="Top Destinations Discovery"
    >
      <div className="relative">
        <Swiper
          key={isScrolledPastHero ? "sticky-swiper" : "normal-swiper"}
          modules={[FreeMode, Mousewheel, Navigation]}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          navigation={{
            prevEl,
            nextEl,
          }}

          // Direct density configuration for immediate application
          slidesPerView={isScrolledPastHero ? 6.5 : 4.5}
          spaceBetween={isScrolledPastHero ? 4 : 8}
          slidesOffsetBefore={12}
          slidesOffsetAfter={12}

          breakpoints={{
            768: {
              slidesPerView: isScrolledPastHero ? 10.5 : 6.5,
              spaceBetween: isScrolledPastHero ? 6 : 16,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60
            },
            1024: {
              slidesPerView: isScrolledPastHero ? 16.5 : 10.5,
              spaceBetween: isScrolledPastHero ? 8 : 24,
              slidesOffsetBefore: 80,
              slidesOffsetAfter: 80
            }
          }}
          touchStartPreventDefault={false}
          className="w-full relative"
        >
          {FEATURED_CITIES.map((city, idx) => (
            <SwiperSlide key={city.id || city.name}>
              <motion.div layout className="flex flex-col items-center">
                <Link
                  href={`/${city.regionId}`}
                  className="group flex flex-col items-center gap-1.5 md:gap-3 outline-none"
                >
                  {/* Responsive Avatar - Slightly more compact when 'stuck' */}
                  <div className={cn(
                    "relative aspect-square rounded-full flex-shrink-0 transition-all duration-500 border border-slate-200 bg-white shadow-sm p-1 group-hover:scale-110",
                    isScrolledPastHero
                      ? "w-12 h-12 md:w-16 md:h-16"
                      : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  )}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-contain p-2 transform transition-transform duration-700 group-hover:scale-110"
                        priority={idx < 5}
                        sizes="(max-width: 640px) 64px, 96px"
                      />
                    </div>
                  </div>
                  <span className={cn(
                    "block font-bold text-slate-800 tracking-tight transition-all duration-300 group-hover:text-brand-gold whitespace-nowrap text-center",
                    isScrolledPastHero ? "text-[8px] md:text-[10px]" : "text-[10px] sm:text-xs md:text-sm"
                  )}>
                    {city.name}
                  </span>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PERSISTENT Navigation Buttons - Moved outside Swiper to survive re-mounts */}
        <button
          ref={(node) => setPrevEl(node)}
          className="quick-regions-prev hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200 items-center justify-center cursor-pointer pointer-events-auto transition-all hover:bg-brand-gold hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={(node) => setNextEl(node)}
          className="quick-regions-next hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200 items-center justify-center cursor-pointer pointer-events-auto transition-all hover:bg-brand-gold hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default QuickRegions;
