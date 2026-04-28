import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

/**
 * PackageInclusions Component
 * Premium side-by-side card for What's Included and What's Excluded.
 */
export default function PackageInclusions({ inclusions, excludes }) {
  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-black/[0.03]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Inclusions */}
        <div>
          <h3 className="text-xl font-black text-slate-900 mb-10 uppercase tracking-[0.15em]">
            What's <span className="text-brand-gold italic">Included</span>
          </h3>
          <div className="space-y-6">
            {inclusions.map((inc, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-50 transition-all flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-slate-600 text-sm md:text-base font-bold tracking-tight pt-2">
                   {inc.label || inc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions */}
        <div>
          <h3 className="text-xl font-black text-slate-900 mb-10 uppercase tracking-[0.15em]">
            What's <span className="text-rose-500 italic">Excluded</span>
          </h3>
          <div className="space-y-6">
            {(excludes || []).length > 0 ? (
              excludes.map((exc, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-50 transition-all flex-shrink-0">
                    <XCircle size={18} />
                  </div>
                  <span className="text-slate-500 text-sm md:text-base font-bold tracking-tight pt-2 italic">
                     {exc}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-sm font-medium italic pt-2">
                No specific exclusions listed. Standard travel conditions apply.
              </p>
            )}
          </div>
        </div>

      </div>
      
      {/* Policy Note Footer */}
      <div className="mt-12 pt-8 border-t border-slate-50 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
          Flights booked separately based on current market rates. <br />
          Concierge services subject to regional availability.
        </p>
      </div>
    </div>
  );
}
