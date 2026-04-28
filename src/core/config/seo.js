export const SEO_DEFAULTS = {
  title: {
    default: "Bayard Vacations Europe | Premium Bespoke Journeys",
    template: "%s | Bayard Vacations Europe",
  },
  description: "Experience the timeless elegance of Europe with Bayard Vacations. Carefully curated itineraries for romantic getaways, family adventures, and solo expeditions across the continent.",
  keywords: ["Europe travel", "luxury tours Europe", "bespoke itineraries", "Bayard Vacations Europe", "custom travel packages"],
  metadataBase: new URL("https://europe.bayardvacations.com"),
  openGraph: {
    type: "website",
    locale: "en_GB", // Default for Europe
    url: "https://europe.bayardvacations.com",
    siteName: "Bayard Vacations Europe",
    images: [
      {
        url: "/bayard-logo.png",
        width: 1200,
        height: 630,
        alt: "Bayard Vacations Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayard Vacations Europe | Premium Bespoke Journeys",
    description: "Experience the timeless elegance of Europe with Bayard Vacations.",
  },
};
