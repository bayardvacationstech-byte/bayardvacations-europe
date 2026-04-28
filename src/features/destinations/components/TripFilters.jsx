"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, X, Check, 
  Sparkles, Map, IndianRupee, Clock, ShieldCheck 
} from "lucide-react";
import { FILTER_OPTIONS } from "../constants/filters";
import { cn } from "@/shared/utils/utils";

const FILTER_ICONS = {
  themes: <Sparkles size={14} />,
  regions: <Map size={14} />,
  budgets: <IndianRupee size={14} />,
  durations: <Clock size={14} />,
  visas: <ShieldCheck size={14} />,
};

/**
 * RegionDropdown Component
 * A premium, animated dropdown for selecting regions.
 */
/**
 * FilterDropdown Component
 * A premium, animated dropdown for multi-select filters.
 */
const FilterDropdown = ({ options, selected, onToggle, placeholder = "Select Option", categoryIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLabels = options
    .filter(opt => selected.includes(opt.id))
    .map(opt => opt.label);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[12px] font-bold transition-all duration-300 border",
          selected.length > 0
            ? "bg-brand-gold/5 border-brand-gold/20 text-brand-gold shadow-sm"
            : "bg-white border-slate-100 text-slate-500 hover:border-slate-200 shadow-sm"
        )}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="truncate pr-2 tracking-tight">
            {selected.length === 0 
              ? placeholder 
              : selected.length === 1 
                ? selectedLabels[0] 
                : `${selected.length} Selected`}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="shrink-0 text-slate-400"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-[1002]" 
              onClick={() => setIsOpen(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-[1003] mt-2 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden p-2"
            >
              <div className="max-h-[280px] overflow-y-auto custom-scrollbar flex flex-col gap-1">
                {options.map((option) => {
                  const isSelected = selected.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => onToggle(option.id)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-[11px] font-bold transition-all text-left",
                        isSelected
                          ? "bg-brand-gold text-white shadow-lg shadow-brand-gold/10"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <span className="truncate">{option.label}</span>
                      {isSelected && <Check size={14} strokeWidth={3} className="shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * TripFilters Component
 * A premium, icon-driven filtering system with editorial aesthetics.
 */
const TripFilters = ({ activeFilters, onFilterChange, totalCount, excludeCategories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleFilter = (category, value) => {
    const current = activeFilters[category] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange(category, updated);
  };

  const clearAll = () => {
    onFilterChange("all", {});
  };

  const activeCount = Object.values(activeFilters).flat().length;

  return (
    <>
      {/* Desktop Sidebar - Sticky */}
      <div className="hidden lg:block sticky top-32 h-fit">
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col gap-10">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-gold/5 flex items-center justify-center text-brand-gold">
                <Filter size={20} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 leading-none mb-1">Refine</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{totalCount} Signature Matches</p>
              </div>
            </div>
            {activeCount > 0 && (
              <button
                onClick={clearAll}
                className="text-[10px] font-black uppercase tracking-widest text-rose-500 hover:text-rose-600 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Filter Categories */}
          <div className="flex flex-col gap-10">
            {Object.entries(FILTER_OPTIONS)
              .filter(([key]) => !excludeCategories.includes(key))
              .map(([key, options]) => (
              <div key={key}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-brand-gold">
                    {FILTER_ICONS[key]}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900/50">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h4>
                </div>
                
                {key === "budgets" ? (
                  <div className="px-2">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Budget Cap</span>
                      <span className="text-[13px] font-black text-brand-gold">
                        {activeFilters.budgets > 0 
                          ? `Under ₹${(activeFilters.budgets / 100000).toFixed(1)}L` 
                          : "Any Budget"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="50000"
                      value={activeFilters.budgets || 1000000}
                      onChange={(e) => onFilterChange("budgets", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Min</span>
                      <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">₹10L+</span>
                    </div>
                  </div>
                ) : (key === "regions" || key === "themes") ? (
                  <FilterDropdown 
                    options={options} 
                    placeholder={key === "regions" ? "Select Regions" : "Explore Themes"}
                    selected={activeFilters[key] || []} 
                    onToggle={(val) => toggleFilter(key, val)} 
                    categoryIcon={FILTER_ICONS[key]}
                  />
                ) : key === "durations" ? (
                  <div className="flex flex-wrap gap-2">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleFilter(key, option.id)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 border",
                          activeFilters[key]?.includes(option.id)
                            ? "bg-brand-gold border-brand-gold text-white shadow-lg"
                            : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:text-brand-gold"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleFilter(key, option.id)}
                        className={cn(
                          "group flex items-center justify-between px-5 py-3 rounded-2xl text-[12px] font-bold transition-all duration-300 shadow-sm border border-slate-50/50",
                          activeFilters[key]?.includes(option.id)
                            ? "bg-brand-gold text-white shadow-xl shadow-brand-gold/20"
                            : "text-slate-900/70 hover:bg-brand-gold/5 hover:text-brand-gold bg-white"
                        )}
                      >
                        <span className="tracking-tight">{option.label}</span>
                        {activeFilters[key]?.includes(option.id) && <Check size={14} strokeWidth={3} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Floating Button */}
      {/* ... (Mobile floating button remains the same) */}
      <div className="lg:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-8 py-3 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-full text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
        >
          <Filter size={14} className="text-brand-gold" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] pt-0.5">Filter</span>
          {activeCount > 0 && (
            <div className="min-w-[18px] h-[18px] px-1 bg-brand-gold text-slate-900 rounded-full flex items-center justify-center text-[9px] font-black">
              {activeCount}
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-white z-[101] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-brand-soft/30">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Your Journey</h3>
                  <p className="text-xs text-slate-500 font-medium tracking-tight">Refine our collection of signatures</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-10 space-y-12">
                {Object.entries(FILTER_OPTIONS)
                  .filter(([key]) => !excludeCategories.includes(key))
                  .map(([key, options]) => (
                  <div key={key}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-brand-gold">{FILTER_ICONS[key]}</div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900/50">
                        {key.replace(/([A-Z])/g, " $1")}
                      </h4>
                    </div>
                    
                    {key === "budgets" ? (
                      <div className="px-2">
                        <div className="flex justify-between items-end mb-5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900/30">Budget Cap</span>
                          <span className="text-[14px] font-black text-brand-gold">
                             {activeFilters.budgets > 0 
                              ? `Under ₹${(activeFilters.budgets / 100000).toFixed(1)}L` 
                              : "Any Budget"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1000000"
                          step="50000"
                          value={activeFilters.budgets || 1000000}
                          onChange={(e) => onFilterChange("budgets", parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                        />
                        <div className="flex justify-between mt-3 text-[10px] font-black text-slate-700 uppercase tracking-widest">
                          <span>Min</span>
                          <span>₹10L+</span>
                        </div>
                      </div>
                    ) : (key === "regions" || key === "themes") ? (
                      <FilterDropdown 
                        options={options} 
                        placeholder={key === "regions" ? "Select Regions" : "Explore Themes"}
                        selected={activeFilters[key] || []} 
                        onToggle={(val) => toggleFilter(key, val)} 
                      />
                    ) : key === "durations" ? (
                      <div className="flex flex-wrap gap-3">
                        {options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => toggleFilter(key, option.id)}
                            className={cn(
                              "px-6 py-3 rounded-xl text-[12px] font-bold transition-all border",
                              activeFilters[key]?.includes(option.id)
                                ? "bg-brand-gold border-brand-gold text-white shadow-xl"
                                : "bg-white border-slate-100 text-slate-900/60"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => toggleFilter(key, option.id)}
                            className={cn(
                              "px-5 py-4 rounded-2xl text-[12px] font-bold text-left transition-all border",
                              activeFilters[key]?.includes(option.id)
                                ? "bg-brand-gold border-brand-gold text-white shadow-2xl"
                                : "bg-white border-slate-100 text-slate-900/60 shadow-sm"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>


              <div className="p-10 border-t border-slate-50 bg-white">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-6 text-xs font-black uppercase tracking-widest text-white bg-slate-900 rounded-[2rem] shadow-2xl"
                >
                  Confirm Experience ({totalCount})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TripFilters;
