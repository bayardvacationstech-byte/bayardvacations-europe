"use client";

import Image from "next/image";
import { ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/shared/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

/**
 * PackageHero Component
 * Full-bleed cinematic intro for individual tours.
 */
export default function PackageHero({ pkg }) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = pkg.bannerImages?.length > 0 ? pkg.bannerImages : [pkg.heroImage];

  return (
    <section className="relative h-[85vh] min-h-[650px] overflow-hidden group">
      {/* Background Media Slider */}
      <div className="absolute inset-0">
        {!mounted ? (
          <Image
            src={pkg.heroImage || "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070"}
            alt={pkg.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        ) : (
          <>
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              loop={true}
              onSwiper={setSwiper}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              className="h-full w-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="relative h-full w-full">
                  <Image
                    src={img || "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070"}
                    alt={`${pkg.name} - ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    unoptimized
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Cinematic Vertical Thumbnail List */}
            <div className="absolute hidden md:flex right-10 top-[15%] bottom-[15%] w-24 z-50 flex-col items-center">
              <div className="w-full h-full overflow-y-auto space-y-4 scrollbar-hide py-4 px-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => swiper?.slideToLoop(idx)}
                    className={`relative w-full aspect-[3/4] rounded-xl overflow-hidden transition-all duration-500 border-2 shadow-xl flex-shrink-0 ${activeIndex === idx
                      ? "border-brand-gold scale-110"
                      : "border-white/40 opacity-80 hover:opacity-100 hover:scale-110"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Lightened overlay for inactive thumbs */}
                    {activeIndex !== idx && <div className="absolute inset-0 bg-black/20" />}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden md:block z-10" />

      {/* Local Header Actions removed in favor of Global Header integration */}

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full pb-12 md:pb-20 pt-32 z-20">
        <Container className="relative">
          {/* Subtle Back Button for Context */}
          <Link
            href={`/${pkg.region.id}`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group/back"
          >
            <ArrowLeft size={16} className="transition-transform group-hover/back:-translate-x-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to {pkg.region.title}</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className={`px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] bg-white text-black shadow-2xl`}>
                {pkg.tag}
              </span>
              {pkg.travelStyle && pkg.travelStyle !== pkg.tag && (
                <span className="px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-white/20 text-white backdrop-blur-md">
                  {pkg.travelStyle}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              {pkg.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 md:gap-10">
              {/* Mobile: Compact Pills | Desktop: Classic Stacks */}
              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1 px-3 py-1.5 md:p-0 rounded-full bg-white/5 md:bg-transparent border border-white/10 md:border-0 backdrop-blur-md md:backdrop-blur-none">
                <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Region</span>
                <span className="text-white text-[11px] md:text-lg font-bold tracking-tight leading-none">{pkg.region.title}</span>
              </div>

              <div className="hidden md:block w-[1px] h-8 bg-white/10" />

              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1 px-3 py-1.5 md:p-0 rounded-full bg-white/5 md:bg-transparent border border-white/10 md:border-0 backdrop-blur-md md:backdrop-blur-none">
                <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Themes</span>
                <span className="text-white text-[11px] md:text-lg font-bold tracking-tight leading-none">{(pkg.themes || []).slice(0, 1).join(" • ").toUpperCase()}</span>
              </div>

              <div className="hidden md:block w-[1px] h-8 bg-white/10" />

              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1 px-3 py-1.5 md:p-0 rounded-full bg-white/5 md:bg-transparent border border-white/10 md:border-0 backdrop-blur-md md:backdrop-blur-none">
                <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Starts At</span>
                <span className="text-white text-[11px] md:text-lg font-bold tracking-tight leading-none">{pkg.from}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
