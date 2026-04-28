import { adminDb } from "@/core/firebase/admin";
import { EUROPE_REGIONS } from "../constants/regions";

export async function getPackageById(id) {
  try {
    console.log(`--- [SERVER] SEARCHING FOR PACKAGE BY SLUG OR ID: ${id} ---`);
    
    const cleanId = id.trim();
    
    // 1. Try to find by multiple slug fields
    let slugQuery = await adminDb.collection("published_packages")
      .where("slug", "==", cleanId)
      .limit(1)
      .get();
    
    if (slugQuery.empty) {
      slugQuery = await adminDb.collection("published_packages")
        .where("packageSlug", "==", cleanId)
        .limit(1)
        .get();
    }
    
    if (slugQuery.empty) {
      slugQuery = await adminDb.collection("published_packages")
        .where("titleSlug", "==", cleanId)
        .limit(1)
        .get();
    }

    if (slugQuery.empty) {
      slugQuery = await adminDb.collection("published_packages")
        .where("packageName", "==", cleanId)
        .limit(1)
        .get();
    }
    
    let doc = slugQuery.docs[0];

    // 2. If not found by slug, try by document ID
    if (!doc) {
      console.log(`--- [SERVER] NOT FOUND BY SLUG, TRYING ID: ${id} ---`);
      doc = await adminDb.collection("published_packages").doc(id).get();
      if (!doc.exists) doc = null;
    }

    if (!doc) {
      console.log(`--- [SERVER] PACKAGE ${id} NOT FOUND IN FIRESTORE ---`);
      return null;
    }

    const data = doc.data();
    console.log(`--- [SERVER] RAW DATA FOR ${id} ---`);
    
    // 1. Collect all image IDs to fetch in one go
    const imageIds = new Set();
    
    // Banner images
    (data.bannerImages || []).forEach(img => {
      const imgId = img.ref?._path?.segments?.[1] || img._path?.segments?.[1];
      if (imgId) imageIds.add(imgId);
    });

    // Itinerary images
    (data.itineraries || []).forEach(it => {
      (it.imageRefs || []).forEach(img => {
        const imgId = img.ref?._path?.segments?.[1] || img._path?.segments?.[1];
        if (imgId) imageIds.add(imgId);
      });
    });

    // Extract Hotel Details & IDs
    const hotelDetails = data.hotelDetails || {};
    const allHotelIds = new Set();
    Object.keys(hotelDetails).forEach(cat => {
      if (hotelDetails[cat].hotelIds) {
        hotelDetails[cat].hotelIds.forEach(id => allHotelIds.add(id));
      }
    });

    // 2. Fetch all unique image documents & hotel documents
    const imageMap = {};
    const hotelMap = {};

    const [imgDocs, hotelDocs] = await Promise.all([
      Promise.all(Array.from(imageIds).map(id => adminDb.collection("images").doc(id).get())),
      Promise.all(Array.from(allHotelIds).map(id => adminDb.collection("hotels").doc(id).get()))
    ]);

    imgDocs.forEach(doc => {
      if (doc.exists) imageMap[doc.id] = doc.data().url || doc.data().imageUrl;
    });

    hotelDocs.forEach(doc => {
      if (doc.exists) {
        const hData = doc.data();
        hotelMap[doc.id] = {
          id: doc.id,
          name: hData.name,
          stars: hData.starRating || hData.stars || 4,
          location: hData.place?.name || hData.city || hData.location || "City Center",
          image: hData.images?.[0] || hData.imageUrl,
          googleUrl: hData.googleUrl,
          roomType: hData.roomType || "Premium Room"
        };
      }
    });

    // Build hotelsByCategory
    const hotelsByCategory = {};
    Object.keys(hotelDetails).forEach(cat => {
      if (cat !== "baseCategory" && hotelDetails[cat].hotelIds) {
        hotelsByCategory[cat] = hotelDetails[cat].hotelIds
          .map(id => hotelMap[id])
          .filter(Boolean);
      }
    });

    // Find matching hub region
    const hubRegion = EUROPE_REGIONS.find(r => 
      r.countries.some(c => 
        (typeof c === 'string' ? c : c.name).toLowerCase() === (data.region || "").toLowerCase()
      )
    ) || EUROPE_REGIONS[0];

    // Extract sections
    const majorActivities = data.sections?.find(s => s.id === "major_activities")?.items || [];
    const packageHighlights = data.sections?.find(s => s.id === "package_highlights")?.items || [];
    const dynamicImportantNotes = data.sections?.find(s => s.id === "important_notes")?.items || [];

    // Map the complex Firestore structure to our UI components
    return {
      id: doc.id,
      name: data.packageName || data.packageTitle || "Unnamed Package",
      slug: data.packageSlug || data.titleSlug || id,
      region: hubRegion,
      price: data.basePrice > 0 ? `₹${data.basePrice}` : "Enquire for Price",
      from: data.basePrice > 0 ? `₹${data.basePrice}` : "Enquire for Price",
      duration: `${data.days} Days / ${data.nights} Nights`,
      tag: data.tailored_tag?.[0]?.toUpperCase() || "SIGNATURE",
      status: data.status === "published" ? "HOT" : "NEW",
      details: data.sections?.find(s => s.id === "package_overview")?.content?.[0] || "",
      heroImage: imageMap[data.bannerImages?.[0]?.ref?._path?.segments?.[1] || data.bannerImages?.[0]?._path?.segments?.[1]] || hubRegion.heroImage,
      bannerImages: (data.bannerImages || []).map(img => {
        const imgId = img.ref?._path?.segments?.[1] || img._path?.segments?.[1] || img.id;
        return imageMap[imgId];
      }).filter(Boolean),
      daysNumeric: data.days || 7,
      priceNumeric: data.basePrice || 0,
      themes: data.theme || [],
      travelStyle: data.tailored_tag?.[0] || "private-tour",
      visaType: data.groupAdventure?.visaDetails || data.visaDetails || "Schengen",
      itinerary: (data.itineraries || []).map((it, idx) => ({
        day: it.dayNumber,
        title: it.title,
        content: it.description,
        location: it.location || it.city || "",
        images: (it.imageRefs || []).map(imgRef => {
          const imgId = imgRef.ref?._path?.segments?.[1] || imgRef._path?.segments?.[1];
          return imageMap[imgId];
        }).filter(Boolean)
      })),
      citiesCount: new Set((data.itineraries || []).map(it => it.location || it.city).filter(Boolean)).size || 1,
      highlights: [...packageHighlights, ...majorActivities],
      inclusions: (data.includes || []).map(inc => ({
        icon: "CheckCircle",
        label: inc
      })),
      excludes: data.excludes || [],
      importantNotes: dynamicImportantNotes,
      hotelDetailsContent: data.hotelDetailsContent || "",
      hotelsByCategory,
      baseCategory: hotelDetails.baseCategory || "threestar",
      hotelCharges: data.hotelCharges || {}
    };
  } catch (error) {
    console.error(`Error in getPackageById for ${id}:`, error);
    return null;
  }
}
