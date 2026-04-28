"use client";

import { Calendar, Plane, ShieldCheck, Map, Bed } from "lucide-react";
import Container from "@/shared/components/ui/Container";

/**
 * PackageStats Component
 * High-end horizontal bar showing key journey specifications.
 */
export default function PackageStats({ pkg }) {
  const specs = [
    { icon: <Calendar size={24} />, label: "Journey", value: pkg.duration || "N/A" },
    { icon: <Bed size={24} />, label: "Stays", value: pkg.baseCategory === "fivestar" ? "5★ LUXURY" : "4★ BOUTIQUE" },
    { icon: <Plane size={24} />, label: "Visa", value: (pkg.visaType || "Schengen").toUpperCase() },
    { icon: <Map size={24} />, label: "Transport", value: (pkg.travelStyle?.includes('rail') ? "SCENIC RAIL" : "PRIVATE CAR") },
    { icon: <ShieldCheck size={24} />, label: "Service", value: "24/7 CONCIERGE" },
  ];

  return (
    <div className="bg-white border-y border-slate-100 relative z-30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-100">
          {specs.map((spec, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 text-center px-4">
              <div className="text-brand-gold mb-3">
                {spec.icon}
              </div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 leading-none">
                {spec.label}
              </span>
              <span className="text-slate-900 text-[11px] md:text-xs font-black tracking-tight leading-none">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
