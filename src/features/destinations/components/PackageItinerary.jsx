"use client";

import { useState } from "react";
import DynamicIcon from "@/shared/components/ui/DynamicIcon";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Helper to pick a meaningful icon based on the day's title if no specific icon is provided.
 */
function getSmartIcon(title, currentIcon) {
  if (currentIcon && currentIcon !== "Compass") return currentIcon;
  
  const t = title?.toLowerCase() || "";
  if (t.includes("arrival") || t.includes("welcome") || t.includes("transfer")) return "Plane";
  if (t.includes("landmark") || t.includes("sightseeing") || t.includes("tour") || t.includes("visit")) return "Camera";
  if (t.includes("culinary") || t.includes("food") || t.includes("dinner") || t.includes("tasting")) return "Utensils";
  if (t.includes("leisure") || t.includes("free") || t.includes("relax")) return "Coffee";
  if (t.includes("nature") || t.includes("mountain") || t.includes("scenic") || t.includes("lake")) return "Mountain";
  if (t.includes("departure") || t.includes("farewell") || t.includes("airport")) return "Send";
  
  return "Compass";
}

export default function PackageItinerary({ itinerary, accentHex }) {
  const [openDay, setOpenDay] = useState(1);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-slate-200" />
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
          The Journey Slate
        </h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        {itinerary.map((day, idx) => {
          const currentDay = day.day || day.dayNumber || (idx + 1);
          const isOpen = openDay === currentDay;
          const displayContent = day.content || day.description;
          
          return (
            <div
              key={currentDay}
              className={`rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                isOpen 
                ? "bg-white border-slate-200 shadow-xl shadow-black/[0.02]" 
                : "bg-transparent border-transparent hover:bg-slate-50"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenDay(isOpen ? null : currentDay)}
                className="w-full flex items-center gap-4 md:gap-6 p-4 md:p-8 text-left group transition-all"
              >
                {/* Boutique Day Icon Box */}
                <div 
                  className={`w-12 h-12 md:w-20 md:h-20 rounded-[1.2rem] md:rounded-[2rem] flex-shrink-0 flex items-center justify-center transition-all duration-700 bg-white ${
                    isOpen ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] scale-110" : "border border-slate-50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <div 
                    className="transition-colors duration-500"
                    style={{ color: isOpen ? accentHex : "#1E293B" }}
                  >
                    <span 
                      className="font-black text-xl md:text-3xl tracking-tighter transition-all duration-500"
                      style={{ color: isOpen ? accentHex : "#E2E8F0" }}
                    >
                      {currentDay.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                    <span className="px-1.5 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                      Day {currentDay.toString().padStart(2, '0')}
                    </span>
                    <div className="flex-grow h-[1px] bg-slate-100" />
                  </div>
                  <h3 className={`text-base md:text-2xl font-black tracking-tight transition-colors ${
                    isOpen ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                  }`}>
                    {day.title}
                  </h3>
                </div>

                <div className={`p-2 rounded-full transition-transform duration-500 ${isOpen ? "rotate-180 bg-slate-50" : "text-slate-300"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pb-8 px-5 md:pb-16 md:px-0 md:ps-[60px]">
                      <div className="max-w-4xl">
                        {displayContent?.split('•').filter(line => line.trim()).map((line, lIdx) => {
                          const [label, ...rest] = line.split(':');
                          const content = rest.join(':').trim();
                          
                          return (
                            <div key={lIdx} className="group/line flex gap-4 md:gap-8 items-start mb-8 md:mb-16 last:mb-0">
                              {/* Luminous Diamond Timeline Marker */}
                              <div className="relative flex-shrink-0 group/marker mt-1">
                                <div className="w-8 h-8 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center group-hover/line:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                                  {/* Pulsing Aura */}
                                  <div className="absolute inset-0 bg-brand-gold/0 group-hover/line:bg-brand-gold/[0.03] transition-colors" />
                                  
                                  <div className="relative">
                                    {/* Double Ring Design */}
                                    <div className="absolute inset-0 -m-1 rounded-full border border-brand-gold/20 scale-150 opacity-0 group-hover/line:opacity-100 group-hover/line:scale-100 transition-all duration-700" />
                                    
                                    {/* The Diamond Core */}
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-gold rotate-45 shadow-[0_0_15px_rgba(184,142,47,0.8)] transition-transform duration-500 group-hover/line:rotate-[135deg]" />
                                  </div>
                                </div>
                                
                                {lIdx < displayContent?.split('•').filter(line => line.trim()).length - 1 && (
                                  <div className="absolute top-8 md:top-11 left-1/2 -translate-x-1/2 w-[1px] h-10 md:h-10 bg-gradient-to-b from-slate-200 via-slate-100 to-transparent" />
                                )}
                              </div>

                              {/* Right Content Column - Flowing text */}
                              <div className="flex-grow">
                                {content ? (
                                  <div className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed tracking-tight">
                                    <span className="text-slate-900 font-black text-xs md:text-base uppercase tracking-widest mr-4">
                                      {label.trim()}:
                                    </span>
                                    <span>{content}</span>
                                  </div>
                                ) : (
                                  <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed tracking-tight">
                                    {label.trim()}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Day Gallery */}
                      {day.images && day.images.length > 0 && (
                        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
                          {day.images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx} 
                              className={`relative overflow-hidden rounded-2xl group/img shadow-md ${
                                day.images.length === 1 ? "aspect-video md:col-span-3" : 
                                day.images.length === 2 ? "aspect-square md:col-span-1" :
                                imgIdx === 0 ? "aspect-square md:row-span-2 md:col-span-2" : "aspect-square"
                              }`}
                            >
                              <img
                                src={img}
                                alt={`${day.title} view ${imgIdx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500" />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Day Highlights Strip */}
                      <div className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-slate-100">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentHex }} />
                            <span>Private Guide</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentHex }} />
                            <span>Luxe Transport</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentHex }} />
                            <span>Curated Dining</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
