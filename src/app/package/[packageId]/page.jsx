import { notFound } from "next/navigation";
import { getPackageById } from "@/features/destinations/utils/getDynamicPackage";
import PackageHero from "@/features/destinations/components/PackageHero";
import PackageStats from "@/features/destinations/components/PackageStats";
import MajorHighlights from "@/features/destinations/components/MajorHighlights";
import PackageOverview from "@/features/destinations/components/PackageOverview";
import PackageItinerary from "@/features/destinations/components/PackageItinerary";
import PackageHotels from "@/features/destinations/components/PackageHotels";
import PackageInclusions from "@/features/destinations/components/PackageInclusions";
import ImportantNotes from "@/features/destinations/components/ImportantNotes";
import PackagePriceCard from "@/features/destinations/components/PackagePriceCard";
import PackageNotes from "@/features/destinations/components/PackageNotes";
import Container from "@/shared/components/ui/Container";
import DynamicIcon from "@/shared/components/ui/DynamicIcon";

/**
 * Package Details Page
 * Orchestrates the cinematic storytelling for an individual tour.
 */
export default async function PackagePage({ params }) {
  const { packageId } = await params;

  // 1. Fetch dynamic package data DIRECTLY from Firestore (Safe for Server Components)
  let pkg = await getPackageById(packageId);

  // 2. Fallback to static data if no dynamic document exists
  if (!pkg) {
    const { findPackageById } = require("@/features/destinations/utils/findPackageById");
    pkg = findPackageById(packageId);
  }

  if (!pkg) {
    notFound();
  }

  return (
    <article className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* 1. Cinematic Entry */}
      <PackageHero pkg={pkg} />

      {/* 2. Quick Specs Bar */}
      <PackageStats pkg={pkg} />

      <Container className="pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* LEFT: The Story (Itinerary, Highlights, Stays) */}
          <div className="lg:col-span-8 space-y-12">
            <PackageOverview details={pkg.details} />
            <MajorHighlights highlights={pkg.highlights} />

            <PackageItinerary itinerary={pkg.itinerary} accentHex={pkg.region.accentHex} />

            <PackageHotels
              hotelsByCategory={pkg.hotelsByCategory}
              baseCategory={pkg.baseCategory}
            />

            <PackageInclusions inclusions={pkg.inclusions} excludes={pkg.excludes} />

            <ImportantNotes pkg={pkg} />

            <PackageNotes visaInfo={pkg.region.visaInfo} />
          </div>

          {/* RIGHT: Conversion & Pricing (Sticky) */}
          <aside className="lg:col-span-4 h-full">
            <div
              className="sticky top-32 overflow-y-auto"
              style={{ maxHeight: "calc(100dvh - 8rem)", scrollbarWidth: "none" }}
            >
              <PackagePriceCard pkg={pkg} />
            </div>
          </aside>
        </div>
      </Container>

      {/* 4. Final Conversion Section (Concierge Desk) - Removed as form is now in sidebar */}
    </article>
  );
}

// Internal small helper for the sidebar thumb
function PackageHeroOverlayThumb({ bg }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[5s] group-hover:scale-110"
      style={{ backgroundImage: `url(${bg || "https://images.unsplash.com/photo-1541849546-216549ae216d"})` }}
    />
  );
}
