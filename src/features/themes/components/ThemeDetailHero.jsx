"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/shared/components/ui/Container";

/**
 * Particle Component
 * Tiny golden dust particles for the blast effect
 */
const Particle = ({ i }) => {
  const angle = (i * 15) * (Math.PI / 180);
  const distance = 100 + Math.random() * 200;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ 
        x, 
        y, 
        opacity: 0, 
        scale: 0 
      }}
      transition={{ 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 
      }}
      className="absolute w-1 h-1 bg-brand-gold rounded-full"
      style={{ filter: "blur(1px)" }}
    />
  );
};

/**
 * LightRay Component
 * Cinematic golden rays expanding from the center
 */
const LightRay = ({ i, total }) => {
  const rotation = (i * (360 / total));
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: [0, 1.2, 1], 
        opacity: [0, 0.15, 0.05] 
      }}
      transition={{ 
        duration: 2, 
        delay: i * 0.05,
        ease: "easeOut"
      }}
      className="absolute w-[400px] h-[1px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/40 to-transparent origin-left"
      style={{ 
        transform: `rotate(${rotation}deg) translateX(20px)`,
        filter: "blur(2px)"
      }}
    />
  );
};

/**
 * ThemeDetailHero Component
 * ELEVATED: Cinematic Heart (SVG Draw) -> Multi-layer Blast -> Coalescing Settle
 */
const THEME_ICONS = {
  "honeymoon": "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  "elite-escape": "M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z",
  "family": "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  "relax-rejuvenate": "M12 3V4M12 20V21M4 12H3M21 12H20M18.36 5.64L19.07 4.93M4.93 19.07L5.64 18.36M4.93 4.93L5.64 5.64M18.36 19.07L19.07 18.36M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z",
  "group-departure": "M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-9 8c0-2 4-3.1 9-3.1s9 1.1 9 3.1v2H3v-2z",
  "solo": "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
};

const ThemeDetailHero = ({ theme }) => {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState("draw"); // stages: draw, burst, coalesce

  useEffect(() => {
    setMounted(true);
    // Stage 1: Draw Icon (0s - 1.8s)
    const drawTimer = setTimeout(() => setStage("burst"), 1800);
    // Stage 3: Words Coalesce (1.9s - ...)
    const coalesceTimer = setTimeout(() => setStage("coalesce"), 2000);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(coalesceTimer);
    };
  }, []);

  if (!theme) return null;

  const isCoalesce = mounted && stage === "coalesce";
  const iconPath = THEME_ICONS[theme.id] || THEME_ICONS["solo"];

  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-24 md:pb-32 overflow-hidden bg-black">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={theme.image}
          alt={theme.title}
          fill
          priority
          unoptimized
          className="object-cover transition-transform duration-[20s] animate-gentle-float scale-110"
        />
        {/* Soft Localized Shadow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />
      </div>

      {/* Animation Layer: Drawing Heart & Particles */}
      <AnimatePresence>
        {mounted && stage === "draw" && (
          <motion.div
            key="drawing-heart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 2, opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-40 flex items-center justify-center"
          >
            {/* Background Light Rays */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              {Array.from({ length: 12 }).map((_, i) => (
                <LightRay key={i} i={i} total={12} />
              ))}
            </div>

            <div className="relative">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                {/* Secondary "Ghost" Stroke for Detail */}
                <motion.path
                  d={iconPath}
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.1 }}
                />
                {/* Primary Stroke */}
                <motion.path
                  d={iconPath}
                  stroke="#D4AF37"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Drawing Cursor / Sparkle */}
                <motion.circle
                  r="0.5"
                  fill="#FFF"
                  style={{ filter: "blur(1px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    offsetDistance: ["0%", "100%"]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    opacity: { duration: 1.5, times: [0, 0.1, 0.9, 1] }
                  }}
                  className="motion-path-intro"
                />
              </svg>

              {/* Internal Glow Pulse */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 1], 
                  opacity: [0, 0.5, 0.2] 
                }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-brand-gold/10 blur-2xl"
              />

              {/* Style for the drawing cursor to follow the path */}
              <style jsx>{`
                .motion-path-intro {
                  offset-path: path('${iconPath}');
                  offset-rotate: auto;
                }
              `}</style>
            </div>
          </motion.div>
        )}

        {mounted && stage === "burst" && (
          <motion.div
            key="ethereal-burst"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            {/* The Flash */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 20, opacity: [0, 1, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-10 h-10 bg-white rounded-full blur-[30px] mix-blend-overlay"
            />
            {/* Golden Halos */}
            {[1, 2, 3, 4].map((v) => (
              <motion.div
                key={v}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 10 + v, opacity: [0, 0.4, 0] }}
                transition={{ duration: 1.2 + v * 0.2, ease: "easeOut", delay: v * 0.05 }}
                className="absolute w-32 h-32 border border-brand-gold/40 rounded-full"
              />
            ))}
            {/* Light Dust Particles */}
            {Array.from({ length: 32 }).map((_, i) => (
              <Particle key={i} i={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container: Coalescing Transitions */}
      <Container className="relative z-20 text-left">
        <motion.div
          initial={false}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, x: 50, y: -50, scale: 0.9, filter: "blur(10px)" }}
            animate={isCoalesce ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl"
          >
            {theme.badge}
          </motion.span>

          {/* Title - Coalescing Words */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
            {theme.title.split(' ').map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, x: 30, y: -30, scale: 1.1, filter: "blur(20px)" }}
                animate={isCoalesce ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ 
                  duration: 1.8, 
                  delay: 0.2 + (i * 0.15), 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className={i === 1 ? "text-brand-gold italic font-editorial block mt-2 lg:mt-3 relative" : "inline-block"}
              >
                {word}{" "}
                {/* Subtle Shimmer for italic Bliss */}
                {i === 1 && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={isCoalesce ? { x: "200%" } : {}}
                    transition={{ duration: 2, delay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                  />
                )}
              </motion.span>
            ))}
          </h1>

          {/* Luxury Divider */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isCoalesce ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
            className="flex items-center gap-4 mb-10 origin-left"
          >
            <div className="h-[1px] w-12 bg-brand-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold blur-[0.5px]" />
          </motion.div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={isCoalesce ? { opacity: 0.9, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-white/90 text-base md:text-xl font-medium tracking-tight max-w-xl leading-relaxed drop-shadow-lg"
          >
            {theme.description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ThemeDetailHero;
