"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";

/**
 * DiscoveryMenu
 * A slim, high-end dropdown for exploring European regions.
 * Replaces the old RegionalDiscovery to bypass corrupted HMR cache.
 */
const DiscoveryMenu = ({ isOpen, onClose }) => {
  const [activeRegion, setActiveRegion] = useState(EUROPE_REGIONS[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-0 w-[680px] bg-white rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-100 z-[100] overflow-hidden flex h-[480px] mt-4"
          onMouseLeave={onClose}
        >
          {/* Left Pane: Simple Region List */}
          <div className="w-[200px] bg-slate-50/50 border-r border-slate-100 flex flex-col p-4 space-y-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Regions</p>
            {EUROPE_REGIONS.map((region) => (
              <button
                key={region.id}
                onMouseEnter={() => setActiveRegion(region)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  activeRegion.id === region.id 
                    ? "bg-white shadow-sm border border-slate-100 text-brand-blue" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span className="text-sm">{region.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-tight">{region.title}</span>
              </button>
            ))}
          </div>

          {/* Right Pane: Compact Destination Feed */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            <div className="p-6 border-b border-slate-50">
              <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest">
                {activeRegion.title} Highlights
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              <motion.div 
                key={activeRegion.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 gap-4"
              >
                {activeRegion.destinations?.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/package/${dest.id}`}
                    className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-4 hover:border-brand-blue/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                       <span className="bg-brand-blue text-white text-[7px] px-1.5 py-0.5 rounded-sm font-black uppercase tracking-tighter">
                          {dest.tag}
                       </span>
                       <span className={`text-[7px] font-black uppercase ${
                          dest.status === 'HOT' ? 'text-rose-500' : 'text-slate-400'
                        }`}>
                          {dest.status}
                       </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue truncate">
                      {dest.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium truncate mt-1">
                      {dest.duration} • {dest.details}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </div>

            <div className="p-4 bg-slate-50/50 border-t border-slate-50 text-center">
               <button className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] hover:text-brand-blue transition-colors">
                 View All {activeRegion.title} Trips
               </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscoveryMenu;
