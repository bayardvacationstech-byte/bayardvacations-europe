"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/shared/utils/utils";

export default function MajorHighlights({ highlights = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!highlights || highlights.length === 0) return null;

  const displayHighlights = isExpanded ? highlights : highlights.slice(0, 6);
  const remainingCount = highlights.length - 6;

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-xl shadow-black/[0.02] mb-12">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tighter">
          Major <span className="text-brand-gold">Highlights</span>
        </h2>
        <p className="text-slate-400 font-medium text-sm md:text-base tracking-tight uppercase tracking-[0.1em]">
          Key experiences crafted for your journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {displayHighlights.map((item, idx) => {
          const [label, ...rest] = item.split(':');
          const content = rest.join(':').trim();

          return (
            <div key={idx} className="group">
              <div className="flex-grow">
                {content ? (
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-black text-[10px] md:text-[11px] uppercase tracking-widest block mb-2">
                      {label.trim()}:
                    </span>
                    <span className="text-slate-500 text-base md:text-lg font-medium leading-tight tracking-tight">
                      {content}
                    </span>
                  </div>
                ) : (
                  <p className="text-slate-500 text-base md:text-lg font-medium tracking-tight leading-tight">
                    {label.trim()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {remainingCount > 0 && (
        <div className="mt-10 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-brand-gold font-black text-[11px] uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} strokeWidth={3} />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown size={16} strokeWidth={3} />
                <span>Expand {remainingCount} More Highlights</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
