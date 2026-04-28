"use client";

import React, { use } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TRAVEL_THEMES } from "@/features/themes/constants/themes";
import ThemeDetailHero from "@/features/themes/components/ThemeDetailHero";
import ThemePackageList from "@/features/themes/components/ThemePackageList";
import Container from "@/shared/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";

const RegionEnquiry = dynamic(() => import("@/features/destinations/components/RegionEnquiry"), {
  ssr: false,
});

/**
 * ThemesDetailPage
 * Dynamic route for individual theme landing pages.
 */
export default function ThemesDetailPage({ params }) {
  const { themeId } = use(params);

  // Find theme data
  const theme = TRAVEL_THEMES.find(t => t.id === themeId);

  if (!theme) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-brand-soft">
      {/* 1. Cinematic Hero Section */}
      <ThemeDetailHero theme={theme} />

      {/* 2. The Curated Collection List */}
      <ThemePackageList themeId={themeId} />

      {/* 4. Enquiry CTA (Same as Region Page) */}
      <RegionEnquiry region={{
        title: theme.title,
        heroImage: theme.image,
        accentHex: "#BF9106" // Signature Bayard Gold
      }} />
    </article>
  );
}
