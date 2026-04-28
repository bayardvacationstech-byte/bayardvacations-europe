import { NextResponse } from "next/server";
import { typesenseClient } from "@/shared/lib/typesense";

export const dynamic = "force-dynamic";

// Europe regions to filter by
const EUROPE_REGION_SLUGS = [
  "europe", 
  "scandinavia", 
  "scandinavian-countries", 
  "western-europe", 
  "central-europe", 
  "eastern-europe", 
  "uk-ireland", 
  "balkans", 
  "southern-europe",
  "greece",
  "italy",
  "france",
  "switzerland",
  "germany",
  "spain",
  "portugal",
  "austria",
  "netherlands",
  "belgium",
  "scotland",
  "ireland",
  "croatia",
  "turkey"
];

const normalizePackage = (document) => {
  const slug = document.slug || document.packageSlug;
  return {
    ...document,
    packageSlug: document.packageSlug || slug,
    packageName: document.packageName || document.name || document.title,
    bannerImage: document.bannerImage || document.banner_image || null,
    slug,
  };
};

export async function GET(request) {
  const { searchParams: urlSearchParams } = new URL(request.url);
  const q = urlSearchParams.get("q")?.trim();

  if (!q) {
    return NextResponse.json(
      { error: "Query parameter 'q' is required" },
      { status: 400 }
    );
  }

  try {
    const searchParams = {
      q,
      query_by: "name,title,region,theme,citiesList,activities",
      query_by_weights: "5,4,3,3,2,1",
      num_typos: "2,2,1,1,1,2",
      split_join_tokens: "both",
      prefix: "true",
      enable_synonyms: true,
      // FILTER FOR EUROPE ONLY
      filter_by: `region: [${EUROPE_REGION_SLUGS.join(",")}]`,
      sort_by: "basePrice:asc",
      per_page: 20,
    };

    // Use "published_packages" as the default collection name
    const COLLECTION_NAME = "published_packages";

    let result;
    try {
      result = await typesenseClient
        .collections(COLLECTION_NAME)
        .documents()
        .search(searchParams);
    } catch (searchError) {
      console.warn("Search with full params failed, retrying simplified...", searchError.message);
      const fallbackParams = {
        q,
        query_by: "name,title,region,theme",
        num_typos: "2",
        filter_by: `region: [${EUROPE_REGION_SLUGS.join(",")}]`,
        enable_synonyms: true,
        per_page: 20,
      };
      result = await typesenseClient
        .collections(COLLECTION_NAME)
        .documents()
        .search(fallbackParams);
    }

    const documents = result.hits?.map((hit) => normalizePackage(hit.document)) || [];

    return NextResponse.json({
      packages: documents,
      count: documents.length
    });
  } catch (error) {
    console.error("Error searching packages", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}
