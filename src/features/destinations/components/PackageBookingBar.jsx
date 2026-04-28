"use client";

import { Send, Phone } from "lucide-react";
import Container from "@/shared/components/ui/Container";

/**
 * PackageBookingBar Component
 * Sticky action bar for high-conversion concierge enquiries.
 */
export default function PackageBookingBar({ pkg }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-2xl border-t border-slate-100 z-50 py-4 pb-safe md:py-6">
      <Container className="flex items-center justify-between gap-6">
        
        {/* Price & Info */}
        <div className="flex flex-col">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">
            Bespoke Journey From
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">
              {pkg.from}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              pp
            </span>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden sm:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => document.getElementById('region-enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 bg-brand-blue text-white px-8 md:px-14 py-4 md:py-5 rounded-full font-black text-[11px] md:text-[13px] uppercase tracking-widest shadow-2xl shadow-brand-blue/30 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <span className="hidden xs:inline">Request</span> Concierge
            <Send size={16} />
          </button>
        </div>

      </Container>
    </div>
  );
}
