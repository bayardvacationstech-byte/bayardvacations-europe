export default function sitemap() {
  const baseUrl = "https://europe.bayardvacations.com";

  // In a real app, you would fetch your dynamic routes (e.g., /destinations/[slug]) here
  const routes = [
    "",
    "/about",
    "/contact",
    "/destinations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
