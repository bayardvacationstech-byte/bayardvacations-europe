export const FILTER_OPTIONS = {
  themes: [
    { id: "honeymoon", label: "Honeymoon" },
    { id: "family", label: "Family" },
    { id: "luxury", label: "Luxury" },
    { id: "adventure", label: "Adventure" },
    { id: "budget", label: "Budget" },
    { id: "solo", label: "Solo" }
  ],
  regions: [
    { id: "uk-ireland", label: "UK & Ireland" },
    { id: "scandinavia", label: "Scandinavia" },
    { id: "western-europe", label: "Western Europe" },
    { id: "eastern-europe", label: "Eastern Europe" },
    { id: "central-europe", label: "Central Europe" },
    { id: "balkans", label: "Balkans" }
  ],
  budgets: [
    { id: "under-1l", label: "Under ₹1L", min: 0, max: 100000 },
    { id: "1l-1.5l", label: "₹1L – ₹1.5L", min: 100000, max: 150000 },
    { id: "1.5l-3l", label: "₹1.5L – ₹3L", min: 150000, max: 300000 },
    { id: "over-3l", label: "₹3L+", min: 300000, max: 10000000 }
  ],
  durations: [
    { id: "4-6d", label: "4 – 6 Days", min: 4, max: 6 },
    { id: "7-9d", label: "7 – 9 Days", min: 7, max: 9 },
    { id: "10-13d", label: "10 – 13 Days", min: 10, max: 13 },
    { id: "14-plus", label: "14+ Days", min: 14, max: 100 }
  ]
};
