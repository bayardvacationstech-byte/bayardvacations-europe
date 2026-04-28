"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { H1, P } from "@/shared/components/ui/Typography";

// Dynamically import the Hero with SSR disabled to solve all hydration issues permanently
const CinematicHero = dynamic(() => import("@/features/hero/CinematicHero"), {
  ssr: false,
  loading: () => <section className="relative h-screen bg-black" aria-hidden="true" />
});

const QuickRegions = dynamic(() => import("@/features/destinations/components/QuickRegions"), {
  ssr: false,
  loading: () => <div className="h-24 bg-brand-soft/20 animate-pulse rounded-full mx-8 my-4" />
});

const RegionGallery = dynamic(() => import("@/features/destinations/components/RegionGallery"), {
  ssr: false,
  loading: () => <div className="h-96 bg-slate-50 animate-pulse rounded-[2rem] mx-8 my-8" />
});

const StyleStudio = dynamic(() => import("@/features/themes/components/StyleStudio"), {
  ssr: false,
});

const PackageShowcase = dynamic(() => import("@/features/destinations/components/PackageShowcase"), {
  ssr: false,
});

const VideoTestimonials = dynamic(() => import("@/features/testimonials/components/VideoTestimonials"), {
  ssr: false,
});

const JourneyPlanner = dynamic(() => import("@/features/contact/components/JourneyPlanner"), {
  ssr: false,
});

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple skeleton/placeholder for the SSR phase to avoid layout shifts
  if (!isMounted) {
    return <article className="min-h-screen bg-brand-soft anim-pulse" aria-hidden="true" />;
  }

  return (
    <article className="min-h-screen relative bg-brand-soft">
      <CinematicHero />
      <QuickRegions />
      <RegionGallery />
      <StyleStudio />
      <PackageShowcase />
      <VideoTestimonials />
      <JourneyPlanner />
    </article>
  );
}
