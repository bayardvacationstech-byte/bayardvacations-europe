"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/shared/components/ui/Container";
import { cn } from "@/shared/utils/utils";
import { Search, User, Menu, X, ChevronDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from "./NavDropdown";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";
import { TRAVEL_THEMES } from "@/features/themes/constants/themes";
import SearchModal from "@/shared/components/ui/SearchModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = React.useRef(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const pathname = usePathname();

  // Handle mounting and smart scroll logic
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Transparency threshold (Only update if state actually changes)
      const shouldBeScrolled = currentScrollY > 50;
      setIsScrolled(prev => prev !== shouldBeScrolled ? shouldBeScrolled : prev);

      // 2. Smart reveal logic (Show on scroll up, hide on scroll down)
      // Only trigger visibility changes after 200px to prevent jitter
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(prev => prev !== false ? false : prev);
        } else {
          setIsVisible(prev => prev !== true ? true : prev);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on path change
  useEffect(() => {
    setIsVisible(true);
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [

    { title: "Explore", href: "/explore", dropdown: true, type: "explore" },
    { title: "Themes", href: "/themes", dropdown: true, type: "themes" },
    { title: "About Us", href: "https://www.bayardvacations.com/about" },
    { title: "Contact", href: "/contact" },
  ];

  // Initial render (consistent between server and client)
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-[9999] bg-transparent py-6 h-20">
        <Container className="flex items-center justify-between">
          <div className="w-44 h-10 bg-white/10 animate-pulse rounded" />
          <div className="flex gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-16 h-4 bg-white/10 animate-pulse rounded" />
            ))}
          </div>
        </Container>
      </header>
    );
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full transition-all duration-500 transform",
          isSearchOpen ? "z-[10005]" : "z-[9999]",
          !isVisible && !isSearchOpen && "-translate-y-full shadow-none",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-brand-peach/20 py-3"
            : "bg-transparent py-6 shadow-none"
        )}
      >
        <Container className="relative">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-[1001] transition-transform hover:scale-105 active:scale-95">
              <Image
                src={!isScrolled ? "/Bayard_white_logo.svg" : "/bayard-logo.png"}
                alt="Bayard Vacations"
                width={160}
                height={40}
                className="w-36 md:w-44 h-auto transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden c-lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className="relative group"
                >
                  {link.dropdown ? (
                    <NavDropdown
                      title={link.title}
                      type={link.type}
                      isScrolled={isScrolled}
                    />
                  ) : (
                    <>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1.5 text-[14px] font-black uppercase tracking-[0.15em] transition-all duration-300",
                          isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                          "hover:text-brand-gold active:scale-95"
                        )}
                      >
                        {link.title}
                      </Link>
                      <div className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full",
                        pathname === link.href ? "w-full" : "w-0"
                      )} />
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* Action Icons & Expanding Search */}
            <div className="flex items-center gap-2 md:gap-4 relative z-[1001]">
              <div className={cn(
                "flex items-center transition-all duration-500 bg-white/10 backdrop-blur-md rounded-full overflow-hidden border border-white/20",
                isSearchOpen ? "w-48 lg:w-64 px-3 py-1" : "w-0 px-0 py-0 opacity-0 border-none"
              )}>
                <Search size={16} className="text-white shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Where in Europe?"
                  className="w-full h-8 bg-transparent text-white placeholder:text-white/60 text-sm font-bold focus:outline-none pl-3"
                />
                <button 
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchTerm("");
                  }}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={14} className="text-white" />
                </button>
              </div>

              {!isSearchOpen && (
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    setTimeout(() => searchInputRef.current?.focus(), 100);
                  }}
                  className={cn(
                    "p-2 rounded-full transition-all hover:bg-brand-peach/10",
                    isScrolled ? "text-slate-800" : "text-white"
                  )}
                >
                  <Search size={20} />
                </button>
              )}

              <Link
                href="/login"
                className={cn(
                  "hidden sm:flex p-2 rounded-full transition-all hover:bg-brand-peach/10",
                  isScrolled ? "text-slate-800" : "text-white"
                )}
              >
                <User size={20} />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "c-lg:hidden p-2 rounded-xl transition-all",
                  isScrolled ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white backdrop-blur-md"
                )}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Side-Nav Overlay - Outside main header to avoid transform interference */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[10000] c-lg:hidden"
            />

            {/* Slide-over Panel (Luxury Drawer) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[10001] c-lg:hidden flex flex-col pt-6 p-8"
            >
              {/* Drawer Header Area */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="/bayard-logo.png"
                    alt="Bayard Vacations"
                    width={140}
                    height={35}
                    className="w-32 h-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 bg-slate-100 text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links List */}
              <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex flex-col"
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobileItem(expandedMobileItem === link.title ? null : link.title)}
                          className={cn(
                            "flex items-center justify-between w-full text-lg font-black tracking-tight transition-all py-2",
                            pathname.includes(link.href) ? "text-brand-blue" : "text-slate-900"
                          )}
                        >
                          {link.title}
                          <ChevronDown className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            expandedMobileItem === link.title ? "rotate-180" : ""
                          )} />
                        </button>
                        <AnimatePresence>
                          {expandedMobileItem === link.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50/50 rounded-2xl mt-2"
                            >
                              <div className="flex flex-col p-2 space-y-1">
                                {(link.type === "explore" ? EUROPE_REGIONS : TRAVEL_THEMES).map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    href={link.type === "explore" ? `/${subItem.id}` : `${link.href}/${subItem.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-blue shadow-sm">
                                      {link.type === "explore" ? <MapPin size={16} /> : <Sparkles size={16} />}
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-[11px] font-black uppercase tracking-tight text-slate-800">{subItem.title}</span>
                                      <span className="text-[9px] text-slate-400 font-bold">{subItem.subtitle}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "text-lg font-black tracking-tight transition-all py-2",
                          pathname === link.href ? "text-brand-blue" : "text-slate-900 hover:text-brand-gold"
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 mb-6">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold transition-transform active:scale-95 shadow-xl"
                >
                  <User size={20} />
                  Account Login
                </Link>
                <div className="flex justify-center gap-6 mt-6 text-slate-400">
                  <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Bayard Vacations</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => {
          setIsSearchOpen(false);
          setSearchTerm("");
        }} 
        externalSearchTerm={searchTerm}
        setExternalSearchTerm={setSearchTerm}
      />
    </>
  );
};

export default Header;
