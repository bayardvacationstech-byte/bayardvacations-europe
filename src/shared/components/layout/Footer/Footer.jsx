"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/shared/components/ui/Container";

import { TRAVEL_THEMES } from "@/features/themes/constants/themes";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer style={{ backgroundColor: "#2a2a2e", color: "#ffffff", fontFamily: "inherit", overflow: "hidden", position: "relative" }}>

      {/* Responsive Styles Overlay */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-bottom: 40px !important;
          }
          .skyline-container {
            overflow-x: auto;
            padding-bottom: 10px;
            width: 100%;
            justify-content: flex-start !important;
            scrollbar-width: none;
            gap: 15px !important;
          }
          .skyline-container::-webkit-scrollbar {
            display: none;
          }
          .skyline-icon {
            height: 45px !important;
          }
          .top-row-flex {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 10px !important;
          }
          .footer-logo {
            width: 160px !important;
          }
          .eiffel-column {
            justify-content: center !important;
            padding-top: 20px;
          }
          .eiffel-wrapper {
            width: 140px !important;
            height: 220px !important;
          }
          .horizontal-divider {
            margin-bottom: 32px !important;
          }
          .themes-list {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 12px 24px !important;
          }
        }
      `}</style>

      <Container className="pt-8 md:pt-14">

        {/* === TOP ROW: Logo + Landmark Icons === */}
        <div className="top-row-flex" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", marginBottom: "0px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "block", lineHeight: 0, flexShrink: 0, paddingBottom: "28px" }}>
            <Image
              src="/Bayard_white_logo.svg"
              alt="Bayard Vacations"
              width={240}
              height={60}
              className="footer-logo"
              style={{ width: "200px", height: "auto", display: "block" }}
              priority
            />
          </Link>

          {/* Landmark icons — scrolls on mobile */}
          <div className="skyline-container" style={{ display: "flex", alignItems: "flex-end", gap: "20px", flexWrap: "nowrap", marginLeft: "auto" }}>
            {[
              { src: "/quick_region_images/leaning_tower_of_pisa.svg", alt: "Pisa", h: 95 },
              { src: "/quick_region_images/brandenburg_gate.svg", alt: "Berlin", h: 62 },
              { src: "/quick_region_images/sagrada_familia.svg", alt: "Barcelona", h: 100 },
              { src: "/quick_region_images/colosseum.svg", alt: "Rome", h: 65 },
              { src: "/quick_region_images/parthenon.svg", alt: "Athens", h: 60 },
              { src: "/quick_region_images/tower_bridge.svg", alt: "London", h: 60 },
              { src: "/quick_region_images/cologne_cathedral.svg", alt: "Cologne", h: 90 },
              { src: "/quick_region_images/charles_bridge.svg", alt: "Prague", h: 65 },
              { src: "/quick_region_images/edinburgh_castle.svg", alt: "Scotland", h: 75 },
              { src: "/quick_region_images/louvre.svg", alt: "Paris", h: 55 },
            ].map((icon) => (
              <div key={icon.alt} style={{ display: "flex", alignItems: "flex-end", flexShrink: 0 }}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={100}
                  height={icon.h}
                  className="skyline-icon"
                  style={{ width: "auto", height: `${icon.h}px`, filter: "brightness(0) invert(1)", opacity: "0.8", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* === HORIZONTAL DIVIDER === */}
        <div className="horizontal-divider" style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "48px" }} />

        {/* === MAIN CONTENT GRID === */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.5fr 1fr", gap: "60px", paddingBottom: "80px" }}>

          {/* Col 1: Destinations */}
          <div>
            <p style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 28px 0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "inline-block" }} />
              Destinations
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { name: "Scandinavia", href: "/scandinavia", sub: "Norway, Sweden, Finland, Iceland" },
                { name: "Western Europe", href: "/western-europe", sub: "France, Switzerland, Italy, Germany" },
                { name: "Central Europe", href: "/central-europe", sub: "Prague, Vienna, Budapest, Poland" },
                { name: "The Balkans", href: "/balkans", sub: "Croatia, Montenegro, Greece, Slovenia" },
                { name: "UK & Ireland", href: "/uk-ireland", sub: "London, Edinburgh, Dublin, Scotland" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none", fontSize: "15px", fontWeight: 500, display: "block", marginBottom: "6px" }}>
                    {link.name}
                  </Link>
                  <div style={{ display: "flex", flexWrap: "wrap", columnGap: "8px", rowGap: "4px" }}>
                    {link.sub.split(", ").map((country, idx, arr) => (
                      <div key={country} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Link
                          href={`${link.href}?country=${country}`}
                          style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.55)",
                            textDecoration: "none",
                            transition: "color 0.2s ease"
                          }}
                        >
                          {country}
                        </Link>
                        {idx < arr.length - 1 && (
                          <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)" }}>·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Themes */}
          <div>
            <p style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 28px 0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "inline-block" }} />
              Travel Themes
            </p>
            <ul className="themes-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {TRAVEL_THEMES.slice(0, 5).map((theme) => (
                <li key={theme.id}>
                  <Link 
                    href={`/themes/${theme.id}`} 
                    style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "14px", fontWeight: 400, transition: "color 0.2s" }}
                  >
                    {theme.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Concierge & Contact (Merged) */}
          <div>
            <p style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 28px 0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "inline-block" }} />
              Concierge & Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>

              {/* Chat Helper */}
              <div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>
                  AI Concierge: Ask Bayard Assistant
                </p>
                <Link
                  href="#"
                  style={{
                    color: "#D4AF37",
                    fontSize: "13px",
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "8px",
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(212,175,55,0.3)",
                    paddingBottom: "2px",
                    transition: "all 0.2s"
                  }}
                >
                  Start Chatting →
                </Link>
              </div>

              {/* Contact Info */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", opacity: 0.5 }}>Call</span>
                  <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>063631 17421</span>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  WhatsApp · Instant Chat · Email · 24hr Support
                </p>
              </div>

              <div style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>
                <span style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", display: "block", marginBottom: "6px", opacity: 0.5 }}>In-Person</span>
                144, 9th Main Rd, 4th Block, Kanteerava Nagar,<br />
                Nandini Layout, Bengaluru, KA 560096
              </div>

              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontStyle: "italic", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px" }}>
                ✦ 24/7 Global Support & Personalized Concierge
              </div>
            </div>
          </div>

          {/* Col 4: Artistic Eiffel Tower "Midnight Show" */}
          <div className="eiffel-column" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
            <style>{`
              @keyframes eiffelMidnightShow {
                0%, 100%, 10% { 
                  opacity: 0.85; 
                  filter: brightness(1.3) saturate(1.8) drop-shadow(0 0 20px rgba(212,175,55,0.4));
                  /* Constant Vibrant Gold Base */
                }
                25% { 
                  opacity: 1; 
                  filter: brightness(1.8) saturate(3.5) drop-shadow(0 0 50px rgba(212,175,55,0.9)); 
                  /* Intense Imperial Gold */
                }
                40% { 
                  opacity: 1; 
                  filter: brightness(2.2) saturate(0) contrast(1.5) drop-shadow(0 0 60px rgba(255,255,255,1)); 
                  /* Diamond White Sparkle */
                }
                60% { 
                  opacity: 0.9; 
                  filter: brightness(1.5) hue-rotate(180deg) saturate(4) drop-shadow(0 0 40px rgba(0,112,243,0.8)); 
                  /* European Blue */
                }
                80% { 
                  opacity: 0.9; 
                  filter: brightness(1.6) hue-rotate(280deg) saturate(3) drop-shadow(0 0 40px rgba(255,45,149,0.8)); 
                  /* Sunset Rose */
                }
              }
              .eiffel-tower-visual {
                animation: eiffelMidnightShow 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                display: block;
              }
              .eiffel-tower-visual:hover {
                transform: scale(1.1) translateY(-10px);
                opacity: 1 !important;
                filter: brightness(2) saturate(4) !important;
                animation-play-state: paused;
              }
            `}</style>
            <div className="eiffel-wrapper" style={{ width: "220px", height: "340px", pointerEvents: "auto", position: "relative" }}>
              <Image
                src="/quick_region_images/eiffel_tower.svg"
                alt="Eiffel Tower Decoration"
                width={220}
                height={340}
                className="eiffel-tower-visual"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "10px"
                }}
              />
            </div>
          </div>

        </div>

        {/* BOTTOM UTILITY & COPYRIGHT */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "24px",
          paddingBottom: "32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px"
        }}>
          {/* Utility Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center" }}>
            {mounted ? [
              { name: "Plan Your Trip", href: "https://www.bayardvacations.com/plan-your-trip" },
              { name: "About Us", href: "https://www.bayardvacations.com/about" },
              { name: "Privacy Policy", href: "https://www.bayardvacations.com/privacy-policy" },
              { name: "Terms and Conditions", href: "https://www.bayardvacations.com/terms-and-conditions" },
              { name: "Other Services", href: "https://www.bayardvacations.com/other-services" },
              { name: "Cancellation Policy", href: "https://www.bayardvacations.com/cancellation-policy" },
              { name: "Refund Policy", href: "https://www.bayardvacations.com/refund-policy" },
              { name: "Blogs", href: "https://www.bayardvacations.com/blogs" },
              { name: "FAQ", href: "https://www.bayardvacations.com/faq" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 400,
                  transition: "color 0.2s ease"
                }}
              >
                {link.name}
              </Link>
            )) : null}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 400, margin: 0, letterSpacing: "0.02em" }}>
            © {currentYear} Bayard Vacations. All rights reserved.
          </p>
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
