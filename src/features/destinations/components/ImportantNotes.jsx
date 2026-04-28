"use client";

import React from "react";
import { AlertCircle, Clock, CreditCard, ShieldCheck } from "lucide-react";

/**
 * ImportantNotes Component
 * Displays essential travel guidelines and package-specific fine print.
 */
export default function ImportantNotes({ pkg }) {
  const notes = pkg.importantNotes && pkg.importantNotes.length > 0 
    ? pkg.importantNotes 
    : [
        "Standard check-in time is usually 14:00 hrs and check-out is 12:00 hrs.",
        "Valid government photo ID is mandatory for all travelers at the time of check-in.",
        "Travel insurance is highly recommended to cover unforeseen circumstances.",
        "Passport validity of at least 6 months is required for international travel."
      ];

  return (
    <div className="mt-16 pt-16 border-t border-slate-100">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-slate-200" />
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
          Important Notes
        </h2>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-black/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {notes.map((note, i) => (
            <div key={i} className="flex gap-5 items-start group">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-[11px] flex-shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(184,142,47,0.4)]" />
              <p className="text-slate-600 text-[15px] md:text-[17px] font-bold leading-relaxed tracking-tight">
                {note}
              </p>
            </div>
          ))}
        </div>

        {/* Hotel Details Highlight */}
        {pkg.hotelDetailsContent && (
          <div className="mt-16 pt-12 border-t border-slate-50">
             <div className="flex gap-5 items-start bg-slate-50/50 p-8 rounded-3xl border border-slate-100/50">
                <Info size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                <p className="text-slate-500 text-base md:text-lg font-bold leading-relaxed italic tracking-tight">
                   {pkg.hotelDetailsContent}
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
