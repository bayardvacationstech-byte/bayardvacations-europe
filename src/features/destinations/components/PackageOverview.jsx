"use client";

import React from "react";

export default function PackageOverview({ details }) {
  if (!details) return null;

  return (
    <div className="space-y-8 mb-16">
      <div className="flex items-center gap-4">
        <div className="w-12 h-[1px] bg-slate-200" />
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
          The Journey Overview
        </h2>
      </div>

      <div className="prose prose-slate prose-lg max-w-none">
        <div className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed tracking-tight first-letter:text-5xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
          {details}
        </div>
      </div>
    </div>
  );
}
