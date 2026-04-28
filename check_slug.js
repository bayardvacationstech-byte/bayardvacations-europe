import { adminDb } from "./src/core/firebase/admin.js";

async function checkPackage(slug) {
  console.log(`Checking slug: ${slug}`);
  const q1 = await adminDb.collection("published_packages").where("slug", "==", slug).get();
  console.log(`Matches in 'slug': ${q1.size}`);
  
  const q2 = await adminDb.collection("published_packages").where("packageSlug", "==", slug).get();
  console.log(`Matches in 'packageSlug': ${q2.size}`);
  
  const q3 = await adminDb.collection("published_packages").where("titleSlug", "==", slug).get();
  console.log(`Matches in 'titleSlug': ${q3.size}`);

  if (q1.size > 0) console.log("Data in slug:", q1.docs[0].data());
}

const target = "6n7d-germany-tour";
checkPackage(target).then(() => process.exit(0));
