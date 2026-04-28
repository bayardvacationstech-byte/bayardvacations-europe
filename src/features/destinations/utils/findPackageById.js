import { EUROPE_REGIONS } from "../constants/regions";

/**
 * Utility to find a package by its ID across all regions.
 * Enriches the basic data with mock itinerary and details for the UI.
 */
export function findPackageById(identifier) {
  let foundPackage = null;
  let parentRegion = null;

  for (const region of EUROPE_REGIONS) {
    const pkg = region.destinations.find((d) => {
      const generatedSlug = d.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
      return d.id === identifier || generatedSlug === identifier;
    });
    if (pkg) {
      foundPackage = pkg;
      parentRegion = region;
      break;
    }
  }

  if (!foundPackage) return null;

  // Enrich with cinematic storytelling data
  return {
    ...foundPackage,
    region: {
      id: parentRegion.id,
      title: parentRegion.title,
      accentHex: parentRegion.accentHex,
      heroImage: parentRegion.heroImage,
      visaInfo: parentRegion.visaInfo,
    },
    // Mock itinerary based on duration
    itinerary: generateMockItinerary(foundPackage.daysNumeric),
    inclusions: [
      { icon: "Hotel", label: "4-5★ Boutique Stays" },
      { icon: "Utensils", label: "Daily Breakfast & Select Dinners" },
      { icon: "Car", label: "Private Airport Transfers" },
      { icon: "Ticket", label: "All Sightseeing Entries" },
      { icon: "ShieldCheck", label: "Travel Insurance Coverage" },
    ],
    highlights: [
      "Private Guided Tour of Masterpieces",
      "Exclusive Rooftop Dining Experience",
      "Offbeat Neighborhood Discovery",
    ],
  };
}

function generateMockItinerary(days) {
  const steps = [
    { title: "Arrival & Welcome", desc: "Private transfer to your boutique hotel. Evening welcome dinner with regional specialties.", icon: "MapPin" },
    { title: "City Landmarks", desc: "Expert-led tour of the most iconic historical sites and hidden architectural gems.", icon: "Camera" },
    { title: "Local Immersion", desc: "Hands-on workshop or market visit to experience the authentic local lifestyle.", icon: "Utensils" },
    { title: "Scenic Escape", desc: "Day trip to nearby natural wonders or charming village outskirts.", icon: "Mountain" },
    { title: "Leisure & Discovery", desc: "Free morning for personal exploration. Afternoon curated shopping or gallery visit.", icon: "Compass" },
    { title: "Cultural Night", desc: "Exclusive performance or sunset cruise experience.", icon: "Music" },
    { title: "Farewell", desc: "Last-minute souvenir hunting before your private transfer to the airport.", icon: "Plane" },
  ];

  const itinerary = [];
  for (let i = 0; i < days; i++) {
    const step = steps[i % steps.length];
    itinerary.push({
      day: i + 1,
      title: step.title,
      description: step.desc,
      icon: step.icon,
    });
  }
  return itinerary;
}
