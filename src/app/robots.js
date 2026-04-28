export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://europe.bayardvacations.com/sitemap.xml",
  };
}
