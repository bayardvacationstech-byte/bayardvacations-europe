import admin from "firebase-admin";

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  // Private key needs to handle escaped newlines
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

let adminDb;
let adminAuth;

// Validate config before initialization
let isConfigValid = 
  Boolean(firebaseAdminConfig.projectId && 
  firebaseAdminConfig.clientEmail && 
  firebaseAdminConfig.privateKey);

if (isConfigValid) {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(firebaseAdminConfig),
      });
    }
    adminDb = admin.firestore();
    adminAuth = admin.auth();
  } catch (error) {
    console.error("❌ Failed to initialize Firebase Admin:", error.message);
    isConfigValid = false; // Trigger mock mode if initialization fails
  }
}

// Fallback to safe mocks if config is invalid or initialization failed
if (!isConfigValid) {
  console.warn("⚠️ Firebase Admin credentials missing or invalid. Firestore functionality will be limited.");
  
  // Safe mock for adminDb to prevent crashes in resolvers
  const createMockCollection = () => ({
    get: async () => ({ docs: [], empty: true }),
    where: () => createMockCollection(),
    limit: () => createMockCollection(),
    orderBy: () => createMockCollection(),
    doc: () => ({ 
      get: async () => ({ exists: false }),
      collection: () => createMockCollection()
    })
  });

  adminDb = {
    collection: () => createMockCollection()
  };
  
  adminAuth = {
    // Basic mocks for auth if needed
    getUser: async () => { throw new Error("Firebase Auth is disabled (missing credentials)"); }
  };
}

export { adminDb, adminAuth };
