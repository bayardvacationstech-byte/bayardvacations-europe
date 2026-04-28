import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { adminDb } from "@/core/firebase/admin";
import { EUROPE_REGIONS } from "@/features/destinations/constants/regions";

const typeDefs = gql`
  type BannerImage {
    image: String
    description: String
    label: String
  }

  type Stat {
    label: String
    value: String
  }

  type Country {
    id: ID!
    name: String!
    slug: String!
    description: String
    bannerImages: [BannerImage]
    stats: [Stat]
    continent: String
    visible: Boolean
  }

  type Package {
    id: ID!
    name: String!
    region: String!
    price: String
    duration: String
    tag: String
    status: String
    details: String
    heroImage: String
    daysNumeric: Int
    priceNumeric: Float
    themes: [String]
    travelStyle: String
    visaType: String
    slug: String
  }

  type Region {
    id: ID!
    title: String!
    subtitle: String!
    countries: [Country]
    icon: String
  }

  type Query {
    regions: [Region]
    packagesByRegion(regionNames: [String]!): [Package]
    packagesByTheme(themeNames: [String]!, limit: Int): [Package]
    packageById(id: String!): Package
  }
`;

const resolvePackageImage = async (data) => {
  let heroImage = null;
  let imageToResolve = (data.cardImages && data.cardImages.length > 0 ? data.cardImages[0] : null) || 
                       data.cardImage || 
                       (data.bannerImages && data.bannerImages.length > 0 ? data.bannerImages[0] : null);
  
  if (imageToResolve) {
    if (typeof imageToResolve === 'string' && imageToResolve.startsWith('http')) {
      heroImage = imageToResolve;
    } else {
      // Handle Firestore Reference Object or simple object with ref/id
      const imgId = imageToResolve._path?.segments?.[1] || 
                    imageToResolve.ref?._path?.segments?.[1] || 
                    imageToResolve.id || 
                    (typeof imageToResolve === 'string' ? imageToResolve : null);
      
      if (imgId) {
        try {
          const imgDoc = await adminDb.collection("images").doc(imgId).get();
          if (imgDoc.exists) {
            heroImage = imgDoc.data().url || imgDoc.data().imageUrl;
          }
        } catch (e) {
          console.error("Error fetching image for package:", imgId, e);
        }
      }
    }
  }

  // Final fallbacks from direct fields
  if (!heroImage) {
    heroImage = data.heroImage || data.imageUrl || data.bannerImages?.[0]?.image;
  }
  
  return heroImage;
};

const resolvers = {
  Query: {
    packagesByTheme: async (_, { themeNames, limit: limitCount = 10 }) => {
      try {
        console.log(`--- FIRESTORE DYNAMIC QUERY: ${themeNames.join(", ")} ---`);
        
        const packagesRef = adminDb.collection("published_packages");
        
        // Try searching by 'themes' array
        let snapshot = await packagesRef
          .where("themes", "array-contains-any", themeNames)
          .limit(limitCount)
          .get();

        // If nothing found, try searching by 'theme' (singular)
        if (snapshot.empty) {
          console.log("No packages found with 'themes' array, trying 'theme' array...");
          snapshot = await packagesRef
            .where("theme", "array-contains-any", themeNames)
            .limit(limitCount)
            .get();
        }

        // Final Fallback: If still nothing, just get latest published packages so page isn't empty
        if (snapshot.empty) {
          console.log("No themed packages found, falling back to latest published...");
          snapshot = await packagesRef
            .orderBy("createdAt", "desc")
            .limit(limitCount)
            .get();
        }

        console.log(`Query returned ${snapshot.docs.length} packages`);

        const packages = await Promise.all(snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const name = data.name || data.packageName || data.packageTitle || data.title || "Unnamed Package";
          const price = data.price || (data.basePrice ? `₹${data.basePrice}` : null) || data.from || "Enquire for Price";
          
          let duration = data.duration || (data.days ? `${data.days} Days / ${data.nights || (data.days - 1)} Nights` : "7 Days");
          
          let heroImage = await resolvePackageImage(data);
          
          // Final fallback image if none found
          if (!heroImage) heroImage = "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop";

          // Robust Slug Generation
          const slug = data.slug || 
                       data.packageSlug || 
                       data.titleSlug || 
                       name.toLowerCase()
                         .trim()
                         .replace(/[^\w\s-]/g, "")
                         .replace(/[\s_-]+/g, "-")
                         .replace(/^-+|-+$/g, "");

          return {
            id: doc.id,
            name,
            region: data.region,
            price,
            duration,
            tag: (data.tag || (data.tailored_tag ? data.tailored_tag[0] : null) || "SIGNATURE").toUpperCase(),
            status: data.status === "published" ? "HOT" : "NEW",
            details: data.details || data.description || "",
            heroImage: heroImage,
            daysNumeric: data.daysNumeric || data.days || 7,
            priceNumeric: data.priceNumeric || data.basePrice || 0,
            themes: data.themes || data.theme || [],
            travelStyle: data.travelStyle,
            visaType: data.visaType,
            slug: slug
          };
        }));

        return packages;
      } catch (error) {
        console.error("GraphQL Error fetching packages by theme:", error);
        return [];
      }
    },
    regions: async () => {
      try {
        console.log("--- GRAPHQL REGIONS QUERY ---");
        // We'll fetch all regions and filter in memory to be more robust with case sensitivity
        const snapshot = await adminDb.collection("regions").get();

        const allDocs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log(`Total documents in 'regions' collection: ${allDocs.length}`);
        
        if (allDocs.length === 0) {
          console.log("No dynamic regions found, triggering static fallback.");
          return [];
        }

        // Filter for Europe and Visible
        const allCountries = allDocs.filter(doc => {
          const continent = doc.continent?.toLowerCase();
          return continent === "europe" && doc.visible !== false;
        });

        if (allCountries.length === 0) {
          console.log("No Europe-specific regions found, triggering static fallback.");
          return [];
        }

        console.log("Found Europe Countries:", allCountries.map(c => c.name));

        return EUROPE_REGIONS.map(staticRegion => {
          const regionalCountries = allCountries.filter(country => 
            staticRegion.countries.includes(country.name)
          );

          console.log(`Region ${staticRegion.id}: ${regionalCountries.length} countries matched`);

          return {
            id: staticRegion.id,
            title: staticRegion.title,
            subtitle: staticRegion.subtitle,
            icon: staticRegion.icon,
            countries: regionalCountries
          };
        });
      } catch (error) {
        console.error("GraphQL Error fetching regions:", error);
        return [];
      }
    },
    packagesByRegion: async (_, { regionNames }) => {
      try {
        if (!regionNames || regionNames.length === 0) {
          return [];
        }

        // Create a unique list of names including lowercased versions for case-insensitive matching
        const searchNames = Array.from(new Set([
          ...regionNames,
          ...regionNames.map(n => n.toLowerCase())
        ])).slice(0, 30); // Firestore 'in' limit is 30

        console.log(`--- FIRESTORE PACKAGES QUERY ---`);
        console.log(`Searching for region names (case-insensitive):`, searchNames);

        // Fetch packages from Firestore
        const snapshot = await adminDb.collection("published_packages")
          .where("region", "in", searchNames)
          .get();

        console.log(`Found ${snapshot.docs.length} documents in Firestore`);

        const packages = await Promise.all(snapshot.docs.map(async (doc) => {
          const data = doc.data();
          
          // 1. Resolve Name & Basic Info
          const name = data.name || data.packageName || data.packageTitle || data.title || "Unnamed Package";
          const price = data.price || (data.basePrice ? `₹${data.basePrice}` : null) || data.from || "Enquire for Price";
          
          // 2. Resolve Duration (Days/Nights)
          let duration = data.duration;
          if (!duration && data.days) {
            duration = `${data.days} Days / ${data.nights || (data.days - 1)} Nights`;
          } else if (!duration) {
            duration = "7 Days / 6 Nights";
          }
          
          const details = data.details || data.description || (data.sections?.find(s => s.id === "package_overview")?.content?.[0]) || "";
          
          // 3. Resolve Image using helper
          let heroImage = await resolvePackageImage(data);

          // 4. Robust Slug Generation
          const slug = data.slug || 
                       data.packageSlug || 
                       data.titleSlug || 
                       name.toLowerCase()
                         .trim()
                         .replace(/[^\w\s-]/g, "")
                         .replace(/[\s_-]+/g, "-")
                         .replace(/^-+|-+$/g, "");

          return {
            id: doc.id,
            name,
            region: data.region,
            price,
            duration,
            tag: (data.tag || (data.tailored_tag ? data.tailored_tag[0] : null) || "SIGNATURE").toUpperCase(),
            status: data.status === "published" ? "HOT" : "NEW",
            details,
            heroImage: heroImage,
            daysNumeric: data.daysNumeric || data.days || parseInt(duration) || 7,
            priceNumeric: data.priceNumeric || data.basePrice || parseFloat(price.replace(/[^0-9.]/g, "")) || 0,
            themes: data.themes || data.theme || [],
            travelStyle: data.travelStyle || (data.tailored_tag ? data.tailored_tag[0] : null),
            visaType: data.visaType,
            slug: slug
          };
        }));

        console.log("--- SLUG AUDIT ---");
        packages.forEach(p => console.log(`ID: ${p.id} -> SLUG: ${p.slug}`));
        console.log("------------------");

        console.log(`--- TOTAL MAPPED PACKAGES: ${packages.length} ---`);
        return packages;
      } catch (error) {
        console.error(`GraphQL Error fetching packages for names ${regionNames}:`, error);
        return [];
      }
    },
    packageById: async (_, { id }) => {
      try {
        console.log(`--- FETCHING SINGLE PACKAGE: ${id} ---`);
        
        // 1. Try Direct ID Lookup
        let doc = await adminDb.collection("published_packages").doc(id).get();
        
        // 2. If ID lookup fails, search by Slug field
        if (!doc.exists) {
          console.log(`Package ID ${id} not found, searching by slug...`);
          const slugSnapshot = await adminDb.collection("published_packages")
            .where("slug", "==", id) // Next.js passes the slug as the 'id' param in dynamic routes
            .limit(1)
            .get();
            
          if (!slugSnapshot.empty) {
            doc = slugSnapshot.docs[0];
          }
        }

        if (!doc || !doc.exists) {
          console.log(`Package ${id} not found after ID and Slug search`);
          return null;
        }

        const data = doc.data();
        const name = data.name || data.packageName || data.packageTitle || data.title || "Unnamed Package";
        const price = data.price || (data.basePrice ? `₹${data.basePrice}` : null) || data.from || "Enquire for Price";
        const duration = data.duration || (data.days ? `${data.days} Days / ${data.nights || (data.days - 1)} Nights` : "7 Days");
        const details = data.details || data.description || (data.sections?.find(s => s.id === "package_overview")?.content?.[0]) || "";

        // Use same robust image resolution
        const heroImage = await resolvePackageImage(data);
        
        // Robust Slug Generation (consistent with list views)
        const slug = data.slug || 
                     data.packageSlug || 
                     data.titleSlug || 
                     name.toLowerCase()
                       .trim()
                       .replace(/[^\w\s-]/g, "")
                       .replace(/[\s_-]+/g, "-")
                       .replace(/^-+|-+$/g, "");

        return {
          id: doc.id,
          name,
          region: data.region,
          price,
          duration,
          tag: (data.tag || (data.tailored_tag ? data.tailored_tag[0] : null) || "SIGNATURE").toUpperCase(),
          status: data.status === "published" ? "HOT" : "NEW",
          details,
          heroImage: heroImage,
          daysNumeric: data.daysNumeric || data.days || parseInt(duration) || 7,
          priceNumeric: data.priceNumeric || data.basePrice || parseFloat(price.replace(/[^0-9.]/g, "")) || 0,
          themes: data.themes || data.theme || [],
          travelStyle: data.travelStyle || (data.tailored_tag ? data.tailored_tag[0] : null),
          visaType: data.visaType,
          slug: slug,
          itinerary: data.itinerary || [],
          highlights: data.highlights || [],
          inclusions: data.inclusions || []
        };
      } catch (error) {
        console.error(`GraphQL Error fetching package ${id}:`, error);
        return null;
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Wrap the handler to ensure it always returns JSON even on initialization errors
const apolloHandler = startServerAndCreateNextHandler(server);

const handler = async (req) => {
  console.log(">>> API GRAPHQL REQUEST RECEIVED <<<", req.method);
  try {
    return await apolloHandler(req);
  } catch (error) {
    console.error("Critical GraphQL Initialization Error:", error);
    return new Response(JSON.stringify({ 
      errors: [{ message: error.message || "Internal Server Error" }] 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export { handler as GET, handler as POST };
