"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/shared/components/ui/Container";

const HERO_MEDIA = [
  {
    type: 'video',
    url: "/hero_videos/santorini.mp4",
    thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=2000",
    badge: "Aegean Dream",
    titleLine1: "The Santorini",
    titleLine2: "Iconic Azure",
    titleLine3: "Experience",
    description: "Where the deep blue sea meets the whitewashed cliffs of Oia, witness the most breathtaking sunsets in the Mediterranean."
  },
  {
    type: 'video',
    url: "/hero_videos/rome.mp4",
    thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=2000",
    badge: "Eternal City",
    titleLine1: "The Grandeur",
    titleLine2: "Ancient Roman",
    titleLine3: "Heritage",
    description: "Walk through history where every cobblestone tells a story of emperors, gladiators, and timeless artistic triumphs."
  },
  {
    type: 'video',
    url: "/hero_videos/Eiffel_tower_night_202604201507.mp4",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000",
    badge: "City of Light",
    titleLine1: "Parisian Elegance",
    titleLine2: "Artistic Soul",
    titleLine3: "Unfolding",
    description: "From the glittering Eiffel Tower to the charming bistros of Montmartre, immerse yourself in the world's capital of romance and culture."
  },
  {
    type: 'video',
    url: "/hero_videos/amalfi.mp4",
    thumbnail: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000",
    badge: "Coastal Luxury",
    titleLine1: "The Amalfi Coast",
    titleLine2: "Vertical Village",
    titleLine3: "Villas",
    description: "Discover dramatic cliffs, lemon-scented gardens, and turquoise waters in Italy's most glamorous seaside retreat."
  },
];

export default function CinematicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
    }, 8000); // Increased to 8s for better readability
    return () => clearInterval(timer);
  }, []);

  const activeMedia = HERO_MEDIA[currentIndex];

  return (
    <section
      className="relative h-screen flex items-center overflow-hidden bg-black pt-28 md:pt-20"
      aria-labelledby="hero-title"
    >
      {/* Background Layer with Cross-fade */}
      <div className="absolute inset-0 z-0 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeMedia.url}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {activeMedia.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={activeMedia.thumbnail}
                className="w-full h-full object-cover"
              >
                <source src={activeMedia.url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={activeMedia.url}
                alt="Cinematic Europe"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Container className="relative z-20 h-full flex items-end pb-12 md:pb-20 lg:pb-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          {/* Left Column: Headline & Action */}
          <div className="space-y-4 md:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="cinematic-badge"
              >
                <span className="icon-circle-orange">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </span>
                <span className="text-slate-900 font-bold px-2 uppercase tracking-wider text-[11px] md:text-[12px]">
                  {activeMedia.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentIndex}`}
                id="hero-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[32px] md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.25rem] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-gradient-hero"
              >
                {activeMedia.titleLine1} <br />
                <span className="font-editorial text-white/95 text-[0.95em]">{activeMedia.titleLine2}</span> <br />
                {activeMedia.titleLine3}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Right Column: Discovery Stack */}
          <div className="lg:justify-self-end flex flex-col lg:items-end">
            <div className="space-y-4 md:space-y-6 max-lg:max-w-md max-w-lg flex flex-col items-start lg:items-start">
              {/* Social Proof Stack - Hidden on Mobile */}
              <div className="hidden md:flex items-center gap-4">
                <div className="avatar-stack flex -space-x-4">
                  <img className="h-12 w-12 min-w-[48px] rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Traveler" />
                  <img className="h-12 w-12 min-w-[48px] rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Traveler" />
                  <img className="h-12 w-12 min-w-[48px] rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Traveler" />
                </div>
                <p className="text-white/95 text-[16px] md:text-[17px] font-medium leading-tight lg:text-[15px] xl:text-[17px]">
                  Join a community of travelers <br />
                  discovering Europe's hidden gems
                </p>
              </div>

              {/* Description Text - Hidden on Mobile */}
              <div className="h-auto md:min-h-[80px]"> {/* Reduced min-height to prevent layout shift without excessive gap */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${currentIndex}`}
                    initial={{ opacity: 0, opacity: 0 }}
                    animate={{ opacity: 1, opacity: 1 }}
                    exit={{ opacity: 0, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block text-white/80 text-lg md:text-xl lg:text-lg xl:text-xl font-medium leading-relaxed max-w-md"
                  >
                    {activeMedia.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Thumbnail Gallery Portfolio */}
              <div className="flex items-center gap-2 md:gap-3">
                {HERO_MEDIA.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-20 md:h-24 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 relative border border-white/20 ${currentIndex === i
                      ? 'w-32 sm:w-40 md:w-52 lg:w-40 xl:w-52 z-20 shadow-2xl ring-2 ring-white/30'
                      : 'w-16 sm:w-20 md:w-28 lg:w-20 xl:w-28 z-10 hover:border-white/50 bg-black/40'
                      }`}
                  >
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.url}
                      alt="Scenic destination"
                      className={`w-full h-full object-cover transition-transform duration-700 ${currentIndex === i ? 'scale-110' : 'scale-100 hover:scale-105'}`}
                    />
                    {currentIndex !== i && (
                      <div className="absolute inset-0 bg-black/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
