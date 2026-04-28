"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MoveRight, MapPin, Sparkles, Clock, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { cn } from "@/shared/utils/utils";
import Container from "@/shared/components/ui/Container";

const SearchModal = ({ isOpen, onClose, externalSearchTerm = "", setExternalSearchTerm }) => {
  const [internalSearchTerm, setInternalSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use external search term if provided (Desktop expanding bar), else internal (Mobile modal)
  const searchTerm = externalSearchTerm || internalSearchTerm;
  const setSearchTerm = setExternalSearchTerm || setInternalSearchTerm;
  
  const debouncedSearch = useDebounce(searchTerm, 400);
  const inputRef = useRef(null);

  // Focus input on open (Mobile only, Desktop focused by Header)
  useEffect(() => {
    if (isOpen) {
      if (!externalSearchTerm) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    } else {
      if (!setExternalSearchTerm) {
        setInternalSearchTerm("");
      }
      setSearchResults([]);
    }
  }, [isOpen, externalSearchTerm, setExternalSearchTerm]);

  // Fetch search results
  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearch.trim().length > 1) {
        setIsLoading(true);
        try {
          const response = await axios.get(`/api/search?q=${debouncedSearch}`);
          setSearchResults(response.data.packages || []);
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [debouncedSearch]);

  const TRENDING_SEARCHES = [
    { label: "Swiss Alps", href: "/western-europe" },
    { label: "Northern Lights", href: "/scandinavia" },
    { label: "Prague & Vienna", href: "/central-europe" },
    { label: "London Heritage", href: "/uk-ireland" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Mobile only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[10009] md:hidden"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed z-[10010] overflow-hidden border-none flex flex-col transition-all duration-300",
              // Mobile styles
              "inset-0 h-full w-full bg-white md:bg-white/95 md:backdrop-blur-xl",
              // Desktop styles (Compact Dropdown)
              "md:absolute md:inset-auto md:top-[70px] md:right-4 md:w-[450px] md:h-auto md:max-h-[600px] md:rounded-3xl md:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] md:border md:border-slate-100"
            )}
          >
            {/* Mobile Header / Search Input Area (Hidden on Desktop because it's in the Header) */}
            <div className={cn(
              "relative p-4 md:p-8 border-b border-slate-50 shrink-0",
              setExternalSearchTerm ? "md:hidden" : ""
            )}>
              <div className="flex items-center gap-4">
                <div className="relative group flex-1">
                  <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Where in Europe?"
                    className="w-full pl-12 md:pl-16 pr-12 md:pr-16 h-14 md:h-20 bg-slate-50/50 rounded-2xl md:rounded-[1.5rem] text-base md:text-xl font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:bg-white transition-all border border-transparent focus:border-slate-100"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-1.5 bg-slate-200/50 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <button 
                  onClick={onClose}
                  className="md:hidden p-3 bg-slate-100 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Results / Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pt-6 pb-20 md:pb-8 md:px-0">
              <div className="px-6 md:px-8">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Searching European Journeys...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Compass size={12} className="text-brand-blue" />
                      Destinations Found ({searchResults.length})
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {searchResults.map((pkg, idx) => (
                        <Link
                          key={pkg.id || idx}
                          href={`/package/${pkg.slug || pkg.id}`}
                          onClick={onClose}
                          className="group flex items-center justify-between p-3 md:p-3 bg-slate-50/50 hover:bg-white rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-200 overflow-hidden shrink-0 shadow-inner">
                              {pkg.bannerImage ? (
                                <Image
                                  src={pkg.bannerImage}
                                  alt={pkg.title}
                                  width={60}
                                  height={60}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                  <MapPin size={20} />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[13px] md:text-sm font-black text-slate-900 group-hover:text-brand-blue transition-colors truncate">
                                {pkg.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                  <MapPin size={9} className="text-brand-blue/60" />
                                  {pkg.region?.replace(/-/g, " ")}
                                </span>
                                {pkg.basePrice > 0 && (
                                  <span className="text-[9px] md:text-[10px] font-black text-brand-blue">
                                    ₹{pkg.basePrice.toLocaleString("en-IN")}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <MoveRight className="w-3 h-3 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : searchTerm.length > 1 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                      <Search size={24} className="text-slate-200" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">No European destinations found</h3>
                    <p className="text-slate-400 text-xs font-medium">Try searching for "Paris", "Swiss", or "London"</p>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {/* Suggestions when empty */}
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Trending Journeys</p>
                      <div className="grid grid-cols-1 gap-2">
                        {TRENDING_SEARCHES.map((search) => (
                          <Link
                            key={search.label}
                            href={search.href}
                            onClick={onClose}
                            className="px-5 py-3 bg-slate-50/80 hover:bg-brand-blue hover:text-white rounded-xl text-[10px] font-black text-slate-700 uppercase tracking-wider transition-all border border-slate-100/50 hover:border-brand-blue hover:shadow-lg active:scale-[0.98] flex items-center justify-between group"
                          >
                            {search.label}
                            <MoveRight size={12} className="text-slate-300 group-hover:text-white transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Explore by Theme */}
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Popular Themes</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { icon: <Sparkles size={14}/>, label: "Luxury", color: "text-amber-600", bg: "bg-amber-50" },
                          { icon: <Clock size={14}/>, label: "Honeymoon", color: "text-rose-600", bg: "bg-rose-50" },
                          { icon: <Clock size={14}/>, label: "Adventure", color: "text-emerald-600", bg: "bg-emerald-50" },
                          { icon: <Clock size={14}/>, label: "Culture", color: "text-blue-600", bg: "bg-blue-50" },
                        ].map((theme) => (
                          <button
                            key={theme.label}
                            className="flex items-center gap-3 p-3 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all group"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform", theme.bg, theme.color)}>
                              {theme.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase text-slate-900 tracking-tight">{theme.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Footer / Shortcut Help */}
            <div className="hidden md:flex p-4 bg-slate-50/50 items-center justify-between border-t border-slate-100 shrink-0">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-500">ESC</span> to close
              </p>
              <button 
                onClick={onClose}
                className="text-[9px] font-black text-brand-blue uppercase tracking-widest hover:underline"
              >
                Close Search
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
