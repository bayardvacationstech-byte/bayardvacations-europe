import { notFound } from "next/navigation";
import { EUROPE_REGIONS, REGIONS_MAP } from "@/features/destinations/constants/regions";
import RegionHero from "@/features/destinations/components/RegionHero";
import RegionHighlights from "@/features/destinations/components/RegionHighlights";
import RegionPackages from "@/features/destinations/components/RegionPackages";
import RegionVisaInfo from "@/features/destinations/components/RegionVisaInfo";
import RegionEnquiry from "@/features/destinations/components/RegionEnquiry";

// ─── Static Params for SSG ────────────────────────────────────
export async function generateStaticParams() {
  return EUROPE_REGIONS.map((r) => ({ regionId: r.id }));
}

// ─── Per-Region SEO Metadata ─────────────────────────────────
export async function generateMetadata({ params }) {
  const { regionId } = await params;
  const region = REGIONS_MAP[regionId];
  if (!region) return {};

  return {
    title: `${region.title} Tour Packages | Bayard Vacations Europe`,
    description: `Explore curated ${region.title} holiday packages. ${region.tagline} Book premium, tailor-made journeys from India.`,
    openGraph: {
      title: `${region.title} — Bayard Vacations Europe`,
      description: region.tagline,
      images: [{ url: region.heroImage }],
    },
    alternates: {
      canonical: `/${region.id}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────
export default async function RegionPage({ params }) {
  const { regionId } = await params;
  const region = REGIONS_MAP[regionId];
  if (!region) notFound();

  return (
    <article className="min-h-screen bg-[#F9F8F5]">
      {/* 1. Cinematic Hero */}
      <RegionHero region={region} />

      {/* 2. Highlights / USP Strip */}
      <RegionHighlights region={region} />

      {/* 3. Tour Packages Grid */}
      <RegionPackages region={region} />

      {/* 4. Why Choose + Visa Info Two-col */}
      <RegionVisaInfo region={region} />

      {/* 5. Enquiry CTA */}
      <RegionEnquiry region={region} />
    </article>
  );
}
