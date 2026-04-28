"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Star, ShieldCheck, Trophy, Globe } from "lucide-react";
import Container from "@/shared/components/ui/Container";

/* ─── Luxury Traveler Vertical Videos ──────────────────── */
const TESTIMONIALS = [
  { id: 1, name: "Mani R.", words: ["Memorable", "Andaman", "Adventure"], highlightIdx: 2, video: "https://cdn.bayardvacations.com/images/1770431608093-WhatsApp_Video_2026-02-07_at_07.53.19.mp4", highlightColor: "#BF9106" },
  { id: 2, name: "Pawan C.", words: ["Wonderful", "Hassle", "Free"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431558286-WhatsApp_Video_2026-02-07_at_07.53.16.mp4", highlightColor: "#BF9106" },
  { id: 3, name: "Mohammad I.", words: ["Wonderful", "Thailand", "Trip"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431512177-WhatsApp_Video_2026-02-07_at_07.53.12.mp4", highlightColor: "#BF9106" },
  { id: 4, name: "Vishal B.", words: ["Great", "Service", "Quality"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431463081-WhatsApp_Video_2026-02-07_at_07.53.07.mp4", highlightColor: "#BF9106" },
  { id: 5, name: "Darshan D.", words: ["Flexible", "Friendly", "Staff"], highlightIdx: 0, video: "https://cdn.bayardvacations.com/images/1770431392630-WhatsApp_Video_2026-02-07_at_07.52.58.mp4", highlightColor: "#BF9106" },
  { id: 6, name: "Rahul S.", words: ["Expertly", "Curated", "Trips"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431339559-WhatsApp_Video_2026-02-07_at_07.52.51.mp4", highlightColor: "#BF9106" },
  { id: 7, name: "Anita K.", words: ["Breathtaking", "Island", "Vibes"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431291373-WhatsApp_Video_2026-02-07_at_07.52.37.mp4", highlightColor: "#BF9106" },
  { id: 8, name: "Suresh P.", words: ["Seamless", "Airport", "Transfers"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770431059091-WhatsApp_Video_2026-02-07_at_07.52.14.mp4", highlightColor: "#BF9106" },
  { id: 9, name: "Vikram J.", words: ["Perfectly", "Planned", "Itinerary"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770430970236-WhatsApp_Video_2026-02-07_at_07.52.08.mp4", highlightColor: "#BF9106" },
  { id: 10, name: "Emma W.", words: ["Exclusive", "Travel", "Magic"], highlightIdx: 1, video: "https://storage.googleapis.com/bayard-43e94.firebasestorage.app/tech-assets%2Ftesimonial.mp4", highlightColor: "#BF9106" },
  { id: 11, name: "Noah S.", words: ["Cultural", "Immersive", "Tours"], highlightIdx: 1, video: "https://storage.googleapis.com/bayard-43e94.firebasestorage.app/tech-assets%2Ftestmonial_video_0001.mp4", highlightColor: "#BF9106" },
  { id: 12, name: "Olivia P.", words: ["Bespoke", "Experience", "Only"], highlightIdx: 1, video: "https://storage.googleapis.com/bayard-43e94.firebasestorage.app/tech-assets%2Ftestmonial_video_0002.mp4", highlightColor: "#BF9106" },
  { id: 13, name: "Ethan H.", words: ["Elite", "Concierge", "Care"], highlightIdx: 1, video: "https://cdn.bayardvacations.com/images/1770397237699-0206__1__1_.mp4", highlightColor: "#BF9106" },
  { id: 14, name: "Mia L.", words: ["Unforgettable", "Journey", "Home"], highlightIdx: 0, video: "https://cdn.bayardvacations.com/images/1770431608093-WhatsApp_Video_2026-02-07_at_07.53.19.mp4", highlightColor: "#BF9106" },
];

const VideoTestimonials = () => {
  const [rotation, setRotation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const [screenSize, setScreenSize] = useState({ width: 1200, isMobile: false });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        isMobile: window.innerWidth < 768
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const N = TESTIMONIALS.length;
  const radius = screenSize.isMobile ? 320 : 700;
  const step = 360 / N;
  const cardWidth = screenSize.isMobile ? 180 : 260;
  const cardHeight = screenSize.isMobile ? 320 : 440;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const t = setInterval(() => {
      setRotation(prev => prev - 0.15);
    }, 16);
    return () => clearInterval(t);
  }, [isAutoPlaying]);

  return (
    <section
      className="py-10 md:py-16 bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap');
        .ugc-card { 
          transition: transform 0.1s linear, box-shadow 0.3s, opacity 0.3s; 
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: #000;
          border: 1px solid rgba(191, 145, 6, 0.1);
        }
        .ugc-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ugc-card:hover { border-color: rgba(191, 145, 6, 0.4); }
      `}</style>

      <Container>
        {/* ── Luxury Heading ── */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-12 px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-2 block"
          >
            Verified Guest Experiences
          </motion.span>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] text-slate-950 leading-[0.95] tracking-tighter mb-4 uppercase"
          >
            Traveler <br />
            <span className="italic text-brand-gold font-serif lowercase" style={{ fontFamily: "var(--font-great-vibes)", textTransform: 'none' }}>Stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm text-slate-500 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 font-medium"
          >
            Real moments and authentic reviews from our discerning guests who explored the world with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <button className="group flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-gold transition-all active:scale-95 shadow-2xl">
              Plan Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </motion.div>
        </div>

        {/* ── Stage (Expanded 3D Wheel) ── */}
        <motion.div
          className="relative w-full max-w-[1400px] mx-auto h-[400px] md:h-[550px] perspective-[2500px] perspective-origin-[50%_35%] mt-[-20px] md:mt-[-40px] mb-0 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none overflow-visible"
          onPan={(e, info) => {
            setRotation(prev => prev + info.delta.x * (screenSize.isMobile ? 0.25 : 0.15));
            setIsAutoPlaying(false);
          }}
          onPanEnd={() => {
            setTimeout(() => setIsAutoPlaying(true), 3000);
          }}
        >
          {TESTIMONIALS.map((testimonial, i) => {
            const angle = (((i * step + rotation) % 360) + 360) % 360;
            const rad = (angle * Math.PI) / 180;

            const tx = radius * Math.sin(rad);
            const tz = radius * Math.cos(rad) - radius;
            const ry = angle;

            const normalizedAngle = ((angle + 180) % 360) - 180;
            const isVisible = Math.abs(normalizedAngle) < (screenSize.isMobile ? 85 : 105);
            const opacity = isVisible ? Math.max(0, 1 - Math.abs(normalizedAngle) / (screenSize.isMobile ? 75 : 95)) : 0;
            const scale = (screenSize.isMobile ? 0.8 : 0.7) + (opacity * (screenSize.isMobile ? 0.2 : 0.3));
            const zIndex = Math.round(opacity * 100);

            if (!isVisible) return null;

            return (
              <div
                key={testimonial.id}
                className="ugc-card absolute top-1/2 left-1/2 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden md:pointer-events-auto shadow-2xl shadow-slate-950/20"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  marginLeft: -(cardWidth / 2),
                  marginTop: -(cardHeight / 2),
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <div
                  className="relative w-full h-full"
                  onMouseEnter={(e) => {
                    setHoveredId(testimonial.id);
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.muted = false;
                      video.play().catch(() => { });
                    }
                  }}
                  onMouseLeave={(e) => {
                    setHoveredId(null);
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.muted = true;
                    }
                  }}
                >
                  <video
                    key={testimonial.video}
                    src={testimonial.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <p className="font-syne font-extrabold text-white leading-tight tracking-tight text-xl uppercase">
                      {testimonial.words.map((word, idx) => (
                        <span key={idx}>
                          <span style={{ color: idx === testimonial.highlightIdx ? testimonial.highlightColor : "white" }}>
                            {word}
                          </span>
                          {idx < testimonial.words.length - 1 ? " " : ""}
                        </span>
                      ))}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50 mt-3">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Luxury Social Proof ── */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 border-t border-slate-200/60 pt-4 mt-0">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-soft border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-sm group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-slate-950 font-black uppercase tracking-widest text-[11px]">Verified Luxury</p>
              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1 italic">Certified Experiences</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-soft overflow-hidden bg-slate-100 ring-1 ring-slate-200">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="user" className="grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-slate-950 font-black text-xl tracking-tighter">4.9/5</span>
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.15em]">Guest Experience Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-soft border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-sm group-hover:scale-110 transition-transform">
              <Trophy size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-slate-950 font-black uppercase tracking-widest text-[11px]">Expertly Curated</p>
              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1 italic">Handpicked Boutique Stays</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
