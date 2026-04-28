"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  Compass, 
  ChevronDown,
  Heart,
  User
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger, 
  DropdownMenuSub, 
  DropdownMenuSubContent, 
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from "@/shared/components/ui/dropdown-menu";
import { cn } from "@/shared/utils/utils";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";
import { TRAVEL_THEMES } from "@/features/themes/constants/themes";

const NavDropdown = ({ title, type, isScrolled }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [dynamicRegions, setDynamicRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(type === "explore");
  const timeoutRef = React.useRef(null);

  // Fetch dynamic regions data via GraphQL
  useEffect(() => {
    if (type !== "explore") return;

    const fetchRegions = async () => {
      console.log("--- NAV FETCHING REGIONS FROM API ---");
      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query GetRegions {
                regions {
                  id
                  title
                  subtitle
                  icon
                  countries {
                    id
                    name
                    slug
                  }
                }
              }
            `
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Received non-JSON response:", text.substring(0, 200));
          throw new Error("Received non-JSON response from server");
        }

        const { data } = await response.json();
        console.log("--- NAV DYNAMIC REGIONS RECEIVED ---", data?.regions?.length || 0, "regions");
        if (data?.regions) {
          setDynamicRegions(data.regions);
        }
      } catch (err) {
        console.error("Error fetching dynamic regions:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegions();
  }, [type]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300); // Increased delay for smoother transition
  };

  // Data selection based on type
  const isExplore = type === "explore";
  const data = isExplore ? (dynamicRegions.length > 0 ? dynamicRegions : EUROPE_REGIONS) : TRAVEL_THEMES;

  // Search filtering
  const filteredData = data.filter(item => {
    const search = searchTerm.toLowerCase();
    if (isExplore) {
      return (
        item.title.toLowerCase().includes(search) ||
        item.countries?.some(c => 
          typeof c === 'string' 
            ? c.toLowerCase().includes(search) 
            : c.name.toLowerCase().includes(search)
        )
      );
    }
    return item.title.toLowerCase().includes(search);
  });

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <style>{`
        .nav-dropdown-bridge::before {
          content: "";
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 20px;
          background: transparent;
          z-index: -1;
        }
      `}</style>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className={cn(
            "flex items-center gap-1.5 text-[14px] font-black uppercase tracking-[0.15em] transition-all duration-300 outline-none",
            isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
            "hover:text-brand-gold group active:scale-95"
          )}>
            {title}
            <ChevronDown className={cn(
              "w-4 h-4 transition-transform duration-300",
              open ? "rotate-180" : "group-hover:translate-y-0.5"
            )} />
          </button>
        </DropdownMenuTrigger>

      <DropdownMenuContent 
        className="nav-dropdown-bridge w-80 p-0 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 bg-white z-[10001] overflow-hidden" 
        align="start"
        sideOffset={12}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-5 space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {isExplore ? "Explore Europe" : "Travel Themes"}
          </p>
          
          <div 
            className="relative"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
              <Search size={14} className="text-slate-400" strokeWidth={3} />
            </div>
            <input
              type="text"
              placeholder={isExplore ? "Find a region or country..." : "Find a travel style..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="px-2.5 pb-2.5 space-y-1 max-h-[420px] overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <div className="py-12 px-6 space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 animate-pulse">
                  <div className="w-12 h-12 rounded-xl bg-slate-100" />
                  <div className="flex-grow space-y-2">
                    <div className="h-2 w-24 bg-slate-100 rounded" />
                    <div className="h-2 w-16 bg-slate-50 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredData.length === 0 ? (
            <div className="py-16 text-center">
              <Compass size={40} className="text-slate-100 mx-auto mb-4 animate-pulse" />
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">No matches found</p>
            </div>
          ) : (
            filteredData.map((item) => {
              // Icon mapping for Themes
              const themeIcons = {
                "honeymoon": <Heart size={18} />,
                "group-departure": <Compass size={18} />,
                "family": <User size={18} />,
                "educational": <Sparkles size={18} />,
                "religious-retreat": <Compass size={18} />,
                "solo": <Compass size={18} />,
                "exploration-bundle": <MapPin size={18} />,
                "relax-rejuvenate": <Sparkles size={18} />,
                "elite-escape": <Sparkles size={18} />
              };

              return isExplore ? (
                <DropdownMenuSub key={item.id}>
                  <DropdownMenuSubTrigger className="flex items-center justify-between py-3.5 px-4 rounded-xl cursor-pointer transition-all group/sub outline-none data-[state=open]:bg-brand-blue data-[state=open]:text-white data-[highlighted]:bg-brand-blue/5">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-1.5 transition-all group-hover/sub:scale-110",
                        "group-data-[state=open]/sub:bg-brand-blue group-data-[state=open]/sub:text-white"
                      )}>
                        <div className="relative w-full h-full">
                          {item.id === "scandinavia" && <Image src="/quick_region_images/Scandinavia Countries.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {item.id === "western-europe" && <Image src="/quick_region_images/France.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {item.id === "central-europe" && <Image src="/quick_region_images/Switzerland.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {item.id === "uk-ireland" && <Image src="/quick_region_images/UK.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {item.id === "eastern" && <Image src="/quick_region_images/domed_basilica.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {item.id === "balkans" && <Image src="/quick_region_images/parthenon.svg" alt="" fill className="object-contain gold-filter group-data-[state=open]/sub:brightness-0 group-data-[state=open]/sub:invert group-data-[state=open]/sub:[filter:brightness(0)_invert(1)]" />}
                          {!["scandinavia", "western-europe", "central-europe", "uk-ireland", "eastern", "balkans"].includes(item.id) && (
                            <Compass className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-black uppercase tracking-tight transition-colors group-data-[state=open]/sub:text-white text-slate-900">{item.title}</span>
                        <span className="text-[9px] font-bold transition-colors group-data-[state=open]/sub:text-white/80 text-slate-400">{item.subtitle}</span>
                      </div>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-64 p-2 rounded-2xl shadow-2xl border border-slate-100 bg-white ml-1">
                      <div className="px-3 py-3 border-b border-slate-50 mb-1">
                         <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Countries in {item.title}</p>
                      </div>
                      {item.countries?.map((c) => {
                        const countryName = typeof c === 'string' ? c : c.name;
                        const countrySlug = typeof c === 'string' ? item.id : c.slug;

                        const countryIcons = {
                          "France": "/quick_region_images/France.svg",
                          "Italy": "/quick_region_images/Italy.svg",
                          "Portugal": "/quick_region_images/Portugal.svg",
                          "Germany": "/quick_region_images/brandenburg_gate.svg",
                          "United Kingdom": "/quick_region_images/UK.svg",
                          "UK": "/quick_region_images/UK.svg",
                          "England": "/quick_region_images/England.svg",
                          "Scotland": "/quick_region_images/Scotland.svg",
                          "Wales": "/quick_region_images/Wales.svg",
                          "Ireland": "/quick_region_images/tower_bridge.svg",
                          "Czech Republic": "/quick_region_images/charles_bridge.svg",
                          "Switzerland": "/quick_region_images/Switzerland.svg",
                          "Greece": "/quick_region_images/parthenon.svg",
                          "Spain": "/quick_region_images/sagrada_familia.svg",
                          "Netherlands": "/quick_region_images/Netherland.svg",
                          "Netherland": "/quick_region_images/Netherland.svg",
                          "Belgium": "/quick_region_images/european_skyline.svg",
                          "Multi Countries": "/quick_region_images/european_skyline.svg",
                          "Austria": "/quick_region_images/european_skyline.svg",
                          "Hungary": "/quick_region_images/domed_basilica.svg",
                          "Poland": "/quick_region_images/domed_basilica.svg",
                          "Romania": "/quick_region_images/domed_basilica.svg",
                          "Bulgaria": "/quick_region_images/domed_basilica.svg",
                          "Ukraine": "/quick_region_images/domed_basilica.svg",
                          "Norway": "/quick_region_images/Scandinavia Countries.svg",
                          "Sweden": "/quick_region_images/Scandinavia Countries.svg",
                          "Finland": "/quick_region_images/Scandinavia Countries.svg",
                          "Iceland": "/quick_region_images/Scandinavia Countries.svg",
                          "Denmark": "/quick_region_images/Scandinavia Countries.svg",
                          "Croatia": "/quick_region_images/colosseum.svg",
                          "Montenegro": "/quick_region_images/alps_mountain.svg",
                          "Slovenia": "/quick_region_images/alps_mountain.svg",
                        };
                        const countrySvg = countryIcons[countryName];

                        return (
                          <DropdownMenuItem key={countryName} className="rounded-xl py-2 px-3 cursor-pointer transition-all outline-none data-[highlighted]:bg-brand-blue data-[highlighted]:text-white group/item">
                            <Link href={`/${item.id}?country=${countryName}`} className="flex items-center gap-3 w-full">
                              <div className="w-6 h-6 flex-shrink-0 relative">
                                {countrySvg ? (
                                  <Image 
                                    src={countrySvg} 
                                    alt="" 
                                    fill 
                                    className={cn(
                                      "object-contain transition-all gold-filter",
                                      "group-data-[highlighted]/item:brightness-0 group-data-[highlighted]/item:invert group-data-[highlighted]/item:[filter:brightness(0)_invert(1)]"
                                    )} 
                                  />
                                ) : (
                                  <MapPin className="w-4 h-4 text-brand-gold group-data-[highlighted]/item:text-white transition-colors" />
                                )}
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-tight group-data-[highlighted]/item:text-white transition-colors">{countryName}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                      <div className="mt-2 pt-2 border-t border-slate-50">
                        <Link 
                          href={`/${item.id}`}
                          className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-blue text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-brand-gold transition-all active:scale-95 shadow-lg shadow-brand-blue/20 hover:shadow-brand-gold/20"
                        >
                          Explore {item.title}
                        </Link>
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem key={item.id} className="p-0 rounded-xl overflow-hidden outline-none data-[highlighted]:bg-brand-blue group/theme !bg-none">
                  <Link 
                    href={`/themes/${item.id}`}
                    className="flex items-center justify-between p-3 w-full transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover/theme:scale-110 shadow-sm shadow-black/5 p-2.5",
                        item.color || "bg-brand-gold/10 text-brand-gold",
                        "group-data-[highlighted]/theme:bg-white group-data-[highlighted]/theme:text-brand-blue"
                      )}>
                        <div className="relative w-full h-full flex items-center justify-center">
                          {themeIcons[item.id] || <Sparkles size={18} />}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-black uppercase tracking-tight group-data-[highlighted]/theme:text-white transition-colors text-slate-900">{item.title}</span>
                        <span className="text-[9px] font-bold group-data-[highlighted]/theme:text-white/70 transition-colors uppercase tracking-widest text-slate-400">{item.subtitle}</span>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-200 group-data-[highlighted]/theme:text-white/50 transition-colors mr-1" strokeWidth={3} />
                  </Link>
                </DropdownMenuItem>
              )
            })
          )}
        </div>

        <div className="mt-2 pt-2 border-t border-slate-50 bg-slate-50/50">
          <Link 
            href={isExplore ? "/explore" : "/themes"}
            className="flex items-center justify-center gap-2 w-full py-4 text-brand-blue hover:text-brand-gold transition-all text-[10px] font-black uppercase tracking-[0.2em] active:scale-95"
          >
            View All {isExplore ? "Regions" : "Themes"} <ChevronRight size={12} className="mt-0.5" />
          </Link>
        </div>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavDropdown;
