"use client";

import { Globe2, AlertTriangle, Info } from "lucide-react";
import Container from "@/shared/components/ui/Container";

export default function RegionVisaInfo({ region }) {
  const visa = region.visaInfo;

  return (
    <section
      className="bg-slate-950 py-20"
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — Why Choose */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-3">
              Why {region.title}
            </span>
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              The{" "}
              <span
                className="font-great-vibes font-normal normal-case text-4xl md:text-5xl"
                style={{ color: region.accentHex }}
              >
                Bayard Difference
              </span>
            </h2>

            {/* Horizontal rule accent */}
            <div
              className="w-12 h-0.5 rounded-full mb-6"
              style={{ backgroundColor: region.accentHex }}
            />

            <p className="text-white/60 text-base leading-relaxed">
              {region.whyChoose}
            </p>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "12+", label: "Years of Europe expertise" },
                { value: "5000+", label: "Happy travelers" },
                { value: "100%", label: "Custom, tailor-made" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: region.accentHex }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visa Info card */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-3">
              Visa Requirements
            </span>
            <h3 className="text-2xl font-bold text-white mb-6">
              Travel Documentation
            </h3>

            {/* Visa type badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 ${visa.isSpecial
                  ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                  : "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
                }`}
            >
              <Globe2 size={15} />
              {visa.type}
              {visa.isSpecial && <AlertTriangle size={13} className="ml-1" />}
            </div>

            {/* Visa detail card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex gap-3">
                <Info
                  size={18}
                  className="text-white/30 shrink-0 mt-0.5"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  {visa.note}
                </p>
              </div>
            </div>

            {/* Included services */}
            <div className="mt-6 space-y-3">
              {[
                "Complete visa documentation assistance",
                "Embassy appointment scheduling",
                "Travel insurance guidance",
                "Currency & pre-departure briefing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: region.accentHex }}
                  />
                  <p className="text-white/50 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
