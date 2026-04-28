"use client";

import { Info, ShieldAlert } from "lucide-react";

/**
 * PackageNotes Component
 * Displays critical travel information (Visa, Booking notes) in a refined block.
 */
export default function PackageNotes({ visaInfo }) {
  if (!visaInfo) return null;

  return (
    <div className="mt-16 pt-16 border-t border-slate-100">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-slate-200" />
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
          Essential Travel Notes
        </h2>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group">
        {/* Accent Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-gold/10 transition-colors" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Visa Focus */}
          <div className="md:col-span-5 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <ShieldAlert size={28} />
            </div>
            <div>
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Visa Requirement</h3>
               <p className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {visaInfo.type} <span className="text-brand-gold font-editorial italic font-normal">Process</span>
               </p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7">
             <div className="flex gap-4 items-start pb-8 border-b border-slate-50 mb-8">
                <Info size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                   {visaInfo.note}
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                   <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Team Support</span>
                   <p className="text-xs font-bold text-slate-900">End-to-end documentation assistance included.</p>
                </div>
                <div className="space-y-1">
                   <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Timeline</span>
                   <p className="text-xs font-bold text-slate-900">We recommend starting the process 45 days prior.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
