"use client";

import DynamicIcon from "@/shared/components/ui/DynamicIcon";
import Container from "@/shared/components/ui/Container";
import { motion } from "framer-motion";

/**
 * RegionHighlights Component - Redesigned
 * Removes the "card" feel in favor of an integrated, editorial experience strip.
 * Uses DynamicIcon for professional Lucide icons.
 */
export default function RegionHighlights({ region }) {
  return (
    <section
      id="region-highlights"
      className="relative z-10 pt-12 md:pt-20 pb-6 md:pb-16 bg-[#F9F8F5]"
      aria-labelledby="highlights-heading"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="md:max-w-2xl">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
              Regional Specialities
            </span>
            <h2
              id="highlights-heading"
              className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
            >
              Signature {region.title} <span className="text-brand-gold">Experiences</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base font-medium md:max-w-sm leading-relaxed mb-1">
            Curated highlights that define the essence of this regional journey.
          </p>
        </div>

        {/* Highlights: Horizontal Carousel on mobile, Grid on desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 pb-4 md:pb-0">
          {region.highlights.map((h, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-[280px] md:w-auto group relative flex flex-col gap-5 md:gap-6 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 md:hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] md:hover:-translate-y-2 md:hover:border-brand-gold/20"
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 md:group-hover:scale-110 md:group-hover:shadow-lg"
                style={{
                  backgroundColor: `${region.accentHex}10`,
                  color: region.accentHex
                }}
              >
                <DynamicIcon name={h.icon} size={24} strokeWidth={1.5} />
              </div>

              <div className="space-y-2">
                <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight md:group-hover:text-brand-gold transition-colors">
                  {h.label}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                  {h.detail}
                </p>
              </div>

              {/* Decorative accent: Desktop only */}
              <div
                className="absolute top-8 right-8 w-1 h-1 rounded-full opacity-0 md:group-hover:opacity-100 transition-all duration-500 scale-0 md:group-hover:scale-100"
                style={{ backgroundColor: region.accentHex }}
              />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
