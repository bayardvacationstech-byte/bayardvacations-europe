;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="c7b92663-beb8-3a2b-9eb2-b2cd75f6474d")}catch(e){}}();
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/graphql [external] (graphql, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("graphql", () => require("graphql"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/firebase-admin [external] (firebase-admin, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("firebase-admin", () => require("firebase-admin"));

module.exports = mod;
}),
"[project]/src/core/firebase/admin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/firebase-admin [external] (firebase-admin, cjs)");
;
const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || ("TURBOPACK compile-time value", "bayard-43e94"),
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    // Private key needs to handle escaped newlines
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n")
};
let adminDb;
let adminAuth;
// Validate config before initialization
let isConfigValid = Boolean(firebaseAdminConfig.projectId && firebaseAdminConfig.clientEmail && firebaseAdminConfig.privateKey);
if (isConfigValid) {
    try {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["default"].apps.length) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["default"].initializeApp({
                credential: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["default"].credential.cert(firebaseAdminConfig)
            });
        }
        adminDb = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["default"].firestore();
        adminAuth = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["default"].auth();
    } catch (error) {
        console.error("❌ Failed to initialize Firebase Admin:", error.message);
        isConfigValid = false; // Trigger mock mode if initialization fails
    }
}
// Fallback to safe mocks if config is invalid or initialization failed
if (!isConfigValid) {
    console.warn("⚠️ Firebase Admin credentials missing or invalid. Firestore functionality will be limited.");
    // Safe mock for adminDb to prevent crashes in resolvers
    const createMockCollection = ()=>({
            get: async ()=>({
                    docs: [],
                    empty: true
                }),
            where: ()=>createMockCollection(),
            limit: ()=>createMockCollection(),
            orderBy: ()=>createMockCollection(),
            doc: ()=>({
                    get: async ()=>({
                            exists: false
                        }),
                    collection: ()=>createMockCollection()
                })
        });
    adminDb = {
        collection: ()=>createMockCollection()
    };
    adminAuth = {
        // Basic mocks for auth if needed
        getUser: async ()=>{
            throw new Error("Firebase Auth is disabled (missing credentials)");
        }
    };
}
;
}),
"[project]/src/features/destinations/constants/regions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Europe Regions Master Data ───────────────────────────────
// Used by: Explore grid (homepage), Region landing pages (/region/[id])
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "EUROPE_REGIONS",
    ()=>EUROPE_REGIONS,
    "REGIONS_MAP",
    ()=>REGIONS_MAP
]);
const EUROPE_REGIONS = [
    {
        id: "scandinavia",
        title: "Scandinavia",
        subtitle: "Arctic & Fjords",
        tagline: "Aurora, fjords, scenic rail, Lapland — premium winter journeys.",
        heroImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
        icon: "Snowflake",
        // Color palette (Tailwind-safe classes)
        accentClass: "from-cyan-900 via-slate-900 to-sky-950",
        badgeColor: "bg-white/10 text-white border-white/20",
        accentHex: "#0146b3",
        tags: [
            "Winter luxury",
            "Nature",
            "Aurora",
            "Scenic Rail"
        ],
        countries: [
            "Norway",
            "Sweden",
            "Denmark",
            "Finland",
            "Iceland"
        ],
        highlights: [
            {
                icon: "Sparkles",
                label: "Aurora Borealis",
                detail: "Best Oct – Mar"
            },
            {
                icon: "TrainFront",
                label: "Scenic Rail",
                detail: "Bergen, Flåm & beyond"
            },
            {
                icon: "Mountain",
                label: "Fjords of Norway",
                detail: "UNESCO listed"
            },
            {
                icon: "CloudSnow",
                label: "Lapland",
                detail: "Husky & snowmobile"
            }
        ],
        destinations: [
            {
                id: "sc-1",
                name: "The Aurora Chase",
                tag: "ADVENTURE",
                duration: "7D / 6N",
                daysNumeric: 7,
                priceNumeric: 189000,
                themes: [
                    "adventure",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Tromsø · Alta · Ice Hotel",
                status: "HOT",
                from: "₹1,89,000"
            },
            {
                id: "sc-2",
                name: "Fjord Majestic",
                tag: "SCENIC",
                duration: "9D / 8N",
                daysNumeric: 9,
                priceNumeric: 210000,
                themes: [
                    "luxury",
                    "solo"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Bergen · Flåm · Geiranger",
                status: "NEW",
                from: "₹2,10,000"
            },
            {
                id: "sc-3",
                name: "Blue Lagoon Retreat",
                tag: "WELLNESS",
                duration: "5D / 4N",
                daysNumeric: 5,
                priceNumeric: 155000,
                themes: [
                    "luxury",
                    "honeymoon"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Reykjavik · Golden Circle",
                status: "WANT",
                from: "₹1,55,000"
            },
            {
                id: "sc-4",
                name: "Lapland Winter Safari",
                tag: "LUXURY/FAMILY",
                duration: "6D / 5N",
                daysNumeric: 6,
                priceNumeric: 245000,
                themes: [
                    "luxury",
                    "family"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Rovaniemi · Saariselkä · Inari",
                status: "HOT",
                from: "₹2,45,000"
            }
        ],
        whyChoose: "Scandinavia rewards the curious traveler with raw, unspoiled drama — from dancing Northern Lights above the Arctic Circle to the silent depth of Geiranger's glacial fjords. These journeys are crafted for those who seek wonder in extremes.",
        visaInfo: {
            type: "Schengen",
            note: "Single Schengen visa covers Norway, Sweden, Denmark & Finland. Iceland is Schengen-associated. Valid for multiple entries."
        }
    },
    {
        id: "western-europe",
        title: "Western Europe",
        subtitle: "Cultural Heartland",
        tagline: "France, Switzerland, Italy, Germany, Netherlands, Belgium — first-timer high-demand routes.",
        heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
        icon: "Castle",
        accentClass: "from-amber-900 via-stone-900 to-yellow-950",
        badgeColor: "bg-white/10 text-white border-white/20",
        accentHex: "#BF9106",
        tags: [
            "Luxury",
            "Honeymoon",
            "Alpine",
            "First-timer Choice"
        ],
        countries: [
            "France",
            "Switzerland",
            "Italy",
            "Germany",
            "Netherlands",
            "Netherland",
            "Belgium",
            "Portugal",
            "Multi Countries"
        ],
        highlights: [
            {
                icon: "TowerControl",
                label: "Paris & Versailles",
                detail: "The golden triangle"
            },
            {
                icon: "Mountain",
                label: "Swiss Alps",
                detail: "Lucerne, Interlaken, Zermatt"
            },
            {
                icon: "Flower2",
                label: "Amsterdam Canals",
                detail: "Dutch masters & Keukenhof"
            },
            {
                icon: "Waves",
                label: "Rhine Valley",
                detail: "Castles & Rhine cruises"
            }
        ],
        destinations: [
            {
                id: "w-1",
                name: "Grand Swiss Alps",
                tag: "LUXURY",
                duration: "10D / 9N",
                daysNumeric: 10,
                priceNumeric: 199000,
                themes: [
                    "luxury",
                    "honeymoon"
                ],
                travelStyle: "luxury-elite",
                visaType: "schengen",
                details: "Lucerne · Interlaken · Zermatt",
                status: "WANT",
                from: "₹1,99,000"
            },
            {
                id: "w-2",
                name: "Parisian Elegance",
                tag: "ROMANTIC",
                duration: "7D / 6N",
                daysNumeric: 7,
                priceNumeric: 165000,
                themes: [
                    "honeymoon",
                    "luxury"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Paris · Versailles · Loire Valley",
                status: "NEW",
                from: "₹1,65,000"
            },
            {
                id: "w-3",
                name: "Rhine River Wonders",
                tag: "SCENIC",
                duration: "8D / 7N",
                daysNumeric: 8,
                priceNumeric: 172000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "rail",
                visaType: "schengen",
                details: "Cologne · Amsterdam · Strasbourg",
                status: "HOT",
                from: "₹1,72,000"
            },
            {
                id: "w-4",
                name: "Classic Europe Grand Tour",
                tag: "BESTSELLER",
                duration: "14D / 13N",
                daysNumeric: 14,
                priceNumeric: 285000,
                themes: [
                    "family",
                    "luxury"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Paris · Brussels · Amsterdam · Zurich",
                status: "HOT",
                from: "₹2,85,000"
            }
        ],
        whyChoose: "Western Europe is the continent's crown — art-filled capital cities, alpine grandeur, tulip fields, and world-class cuisine. These are the routes that first-time visitors dream of and seasoned travelers return to. Curated to deliver maximum iconic moments.",
        visaInfo: {
            type: "Schengen",
            note: "A single Schengen visa covers France, Germany, Switzerland, Belgium & Netherlands. Valid for 90 days within a 180-day period."
        }
    },
    {
        id: "central-europe",
        title: "Central Europe",
        subtitle: "Imperial Capitals",
        tagline: "Prague, Vienna, Budapest and neighboring circuits — strong value and culture appeal.",
        heroImage: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop",
        icon: "Building2",
        accentClass: "from-amber-900 via-stone-900 to-yellow-950",
        badgeColor: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
        accentHex: "#BF9106",
        tags: [
            "Culture",
            "Value",
            "Imperial History",
            "Architecture"
        ],
        countries: [
            "Austria",
            "Czech Republic",
            "Hungary",
            "Poland",
            "Slovakia",
            "Slovenia"
        ],
        highlights: [
            {
                icon: "Castle",
                label: "Prague Castle",
                detail: "Largest ancient castle complex"
            },
            {
                icon: "Music",
                label: "Vienna Opera",
                detail: "Beethoven, Mozart & Strauss"
            },
            {
                icon: "Waves",
                label: "Budapest Thermal Baths",
                detail: "Széchenyi & Gellért"
            },
            {
                icon: "Compass",
                label: "Bled & Ljubljana",
                detail: "Slovenia's alpine lakes"
            }
        ],
        destinations: [
            {
                id: "c-1",
                name: "Bohemian Rhapsody",
                tag: "CULTURAL",
                duration: "9D / 8N",
                daysNumeric: 9,
                priceNumeric: 145000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Prague · Vienna · Budapest",
                status: "HOT",
                from: "₹1,45,000"
            },
            {
                id: "c-2",
                name: "Polish Heritage Trail",
                tag: "HISTORY",
                duration: "7D / 6N",
                daysNumeric: 7,
                priceNumeric: 125000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Krakow · Warsaw · Wroclaw",
                status: "NEW",
                from: "₹1,25,000"
            },
            {
                id: "c-3",
                name: "Alpine Central Circuit",
                tag: "SCENIC",
                duration: "10D / 9N",
                daysNumeric: 10,
                priceNumeric: 179000,
                themes: [
                    "adventure",
                    "solo"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Vienna · Salzburg · Bled · Ljubljana",
                status: "WANT",
                from: "₹1,79,000"
            }
        ],
        whyChoose: "Central Europe offers extraordinary cultural depth at outstanding value. Baroque palaces, cobblestone old towns, classical music heritage, and legendary thermal spa culture — all without the crowds of Western Europe's primary tourist centers.",
        visaInfo: {
            type: "Schengen",
            note: "All countries covered under Schengen (except some parts of the Western Balkans). Best value multi-country itineraries in Europe."
        }
    },
    {
        id: "uk-ireland",
        title: "UK & Ireland",
        subtitle: "Heritage & Castles",
        tagline: "Separate visa logic, strong city appeal, countryside and heritage storytelling.",
        heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
        icon: "Crown",
        accentClass: "from-emerald-900 via-slate-900 to-green-950",
        badgeColor: "bg-white/10 text-white border-white/20",
        accentHex: "#0146b3",
        tags: [
            "Separate visa",
            "Heritage",
            "City Breaks",
            "Countryside"
        ],
        countries: [
            "United Kingdom",
            "UK",
            "England",
            "Scotland",
            "Wales",
            "Ireland"
        ],
        highlights: [
            {
                icon: "Mountain",
                label: "Scottish Highlands",
                detail: "Loch Ness, Glencoe & Skye"
            },
            {
                icon: "Landmark",
                label: "London Iconic",
                detail: "Big Ben, Tower Bridge & more"
            },
            {
                icon: "Leaf",
                label: "Ring of Kerry",
                detail: "Ireland's Wild Atlantic Way"
            },
            {
                icon: "Map",
                label: "Cotswolds",
                detail: "England's idyllic villages"
            }
        ],
        destinations: [
            {
                id: "u-1",
                name: "Royal British Journey",
                tag: "HERITAGE/FAMILY",
                duration: "12D / 11N",
                daysNumeric: 12,
                priceNumeric: 195000,
                themes: [
                    "family",
                    "luxury"
                ],
                travelStyle: "luxury-elite",
                visaType: "uk-visa",
                details: "London · Edinburgh · Cotswolds",
                status: "HOT",
                from: "₹1,95,000"
            },
            {
                id: "u-2",
                name: "Emerald Isle Escape",
                tag: "NATURE",
                duration: "8D / 7N",
                daysNumeric: 8,
                priceNumeric: 155000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "easy-visa",
                details: "Dublin · Ring of Kerry · Galway",
                status: "WANT",
                from: "₹1,55,000"
            },
            {
                id: "u-3",
                name: "Scotland Highlands Drive",
                tag: "ADVENTURE",
                duration: "9D / 8N",
                daysNumeric: 9,
                priceNumeric: 180000,
                themes: [
                    "adventure",
                    "solo"
                ],
                travelStyle: "private-fit",
                visaType: "uk-visa",
                details: "Edinburgh · Inverness · Isle of Skye",
                status: "NEW",
                from: "₹1,80,000"
            }
        ],
        whyChoose: "The UK & Ireland stand apart from mainland Europe — a separate visa, a distinct island culture, and some of the world's most iconic heritage landscapes. From the energy of London's museums to the misty silence of Connemara's coastline, these journeys deliver deep storytelling.",
        visaInfo: {
            type: "UK Visa (Non-Schengen)",
            note: "UK requires a separate Standard Visitor Visa. Ireland has its own visa — separate from Schengen. Plan both if combining with mainland Europe.",
            isSpecial: true
        }
    },
    {
        id: "eastern",
        title: "Eastern Europe",
        subtitle: "Offbeat Discovery",
        tagline: "Emerging routes, offbeat discovery, better value, and strong medieval / cultural interest.",
        heroImage: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=2070&auto=format&fit=crop",
        icon: "Palace",
        accentClass: "from-rose-900 via-slate-900 to-red-950",
        badgeColor: "bg-white/10 text-white border-white/20",
        accentHex: "#0146b3",
        tags: [
            "Offbeat",
            "Emerging",
            "Value",
            "Medieval"
        ],
        countries: [
            "Romania",
            "Bulgaria",
            "Ukraine",
            "Moldova",
            "Belarus",
            "Serbia",
            "North Macedonia"
        ],
        highlights: [
            {
                icon: "Skull",
                label: "Transylvania",
                detail: "Dracula lore & Bran Castle"
            },
            {
                icon: "Palette",
                label: "Sofia & Plovdiv",
                detail: "Ancient Thrace meets modern art"
            },
            {
                icon: "Mountain",
                label: "Carpathian Mountains",
                detail: "Pristine hiking & ski resorts"
            },
            {
                icon: "Church",
                label: "Orthodox Monasteries",
                detail: "UNESCO painted interiors"
            }
        ],
        destinations: [
            {
                id: "e-1",
                name: "Transylvania & Beyond",
                tag: "OFFBEAT",
                duration: "8D / 7N",
                daysNumeric: 8,
                priceNumeric: 99000,
                themes: [
                    "budget",
                    "adventure",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Bucharest · Bran · Sibiu · Cluj",
                status: "NEW",
                from: "₹99,000"
            },
            {
                id: "e-2",
                name: "Bulgaria Cultural Trail",
                tag: "CULTURAL",
                duration: "7D / 6N",
                daysNumeric: 7,
                priceNumeric: 89000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Sofia · Plovdiv · Sozopol · Varna",
                status: "WANT",
                from: "₹89,000"
            },
            {
                id: "e-3",
                name: "Medieval Eastern Circuit",
                tag: "HISTORY",
                duration: "10D / 9N",
                daysNumeric: 10,
                priceNumeric: 110000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "schengen",
                details: "Krakow · Lviv · Chernivtsi · Kyiv",
                status: "NEW",
                from: "₹1,10,000"
            }
        ],
        whyChoose: "Eastern Europe is travel's best-kept secret — medieval fortresses, painted monasteries, ancient Thracian ruins, and Carpathian wilderness untouched by mass tourism. Exceptional cultural richness at a fraction of the Western European price point.",
        visaInfo: {
            type: "Mixed (Schengen + Non-Schengen)",
            note: "Romania & Bulgaria are Schengen members. Serbia, North Macedonia and others have separate entry requirements. Our team manages all visa paperwork."
        }
    },
    {
        id: "balkans",
        title: "Balkans",
        subtitle: "The New Europe",
        tagline: "Adriatic coasts, mountains, hidden towns — next-wave Europe positioning.",
        heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=2071&auto=format&fit=crop",
        icon: "Ship",
        accentClass: "from-sky-900 via-slate-900 to-blue-950",
        badgeColor: "bg-white/10 text-white border-white/20",
        accentHex: "#0146b3",
        tags: [
            "New demand",
            "Summer routes",
            "Coastal",
            "Hidden Gems"
        ],
        countries: [
            "Croatia",
            "Montenegro",
            "Bosnia",
            "Albania",
            "Slovenia",
            "Greece"
        ],
        highlights: [
            {
                icon: "Umbrella",
                label: "Adriatic Coastline",
                detail: "Dubrovnik, Split & beyond"
            },
            {
                icon: "Waves",
                label: "Plitvice Lakes",
                detail: "UNESCO turquoise waterfalls"
            },
            {
                icon: "Bridge",
                label: "Mostar Old Bridge",
                detail: "Ottoman heritage in Bosnia"
            },
            {
                icon: "Trees",
                label: "Albanian Riviera",
                detail: "Europe's undiscovered coast"
            }
        ],
        destinations: [
            {
                id: "b-1",
                name: "Adriatic Coast Drive",
                tag: "COASTAL",
                duration: "10D / 9N",
                daysNumeric: 10,
                priceNumeric: 149000,
                themes: [
                    "honeymoon",
                    "luxury"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Dubrovnik · Split · Hvar · Trogir",
                status: "HOT",
                from: "₹1,49,000"
            },
            {
                id: "b-2",
                name: "Balkans Hidden Gems",
                tag: "OFFBEAT",
                duration: "12D / 11N",
                daysNumeric: 12,
                priceNumeric: 135000,
                themes: [
                    "adventure",
                    "solo"
                ],
                travelStyle: "group",
                visaType: "easy-visa",
                details: "Kotor · Mostar · Sarajevo · Tirana",
                status: "NEW",
                from: "₹1,35,000"
            },
            {
                id: "b-3",
                name: "Slovenia & Croatia Classic",
                tag: "NATURE",
                duration: "8D / 7N",
                daysNumeric: 8,
                priceNumeric: 125000,
                themes: [
                    "budget",
                    "solo"
                ],
                travelStyle: "private-fit",
                visaType: "schengen",
                details: "Ljubljana · Bled · Plitvice · Zadar",
                status: "WANT",
                from: "₹1,25,000"
            }
        ],
        whyChoose: "The Balkans are summer Europe's most exciting frontier — turquoise Adriatic coves, Ottoman old towns, dramatic canyon landscapes, and world-class coastlines at genuinely accessible prices. These routes are for travelers who want to be ahead of the curve.",
        visaInfo: {
            type: "Mixed (Schengen + Non-Schengen)",
            note: "Croatia & Slovenia are Schengen members. Montenegro, Bosnia, Kosovo & Albania have visa-on-arrival or e-visa options for Indian passport holders."
        }
    }
];
const REGIONS_MAP = Object.fromEntries(EUROPE_REGIONS.map((r)=>[
        r.id,
        r
    ]));
}),
"[project]/src/app/api/graphql/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/server/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$ApolloServer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/server/dist/esm/ApolloServer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$as$2d$integrations$2f$next$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@as-integrations/next/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/firebase/admin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/constants/regions.js [app-route] (ecmascript)");
;
;
;
;
;
const typeDefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gql"]`
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
const resolvePackageImage = async (data)=>{
    let heroImage = null;
    let imageToResolve = (data.cardImages && data.cardImages.length > 0 ? data.cardImages[0] : null) || data.cardImage || (data.bannerImages && data.bannerImages.length > 0 ? data.bannerImages[0] : null);
    if (imageToResolve) {
        if (typeof imageToResolve === 'string' && imageToResolve.startsWith('http')) {
            heroImage = imageToResolve;
        } else {
            // Handle Firestore Reference Object or simple object with ref/id
            const imgId = imageToResolve._path?.segments?.[1] || imageToResolve.ref?._path?.segments?.[1] || imageToResolve.id || (typeof imageToResolve === 'string' ? imageToResolve : null);
            if (imgId) {
                try {
                    const imgDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("images").doc(imgId).get();
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
        packagesByTheme: async (_, { themeNames, limit: limitCount = 10 })=>{
            try {
                console.log(`--- FIRESTORE DYNAMIC QUERY: ${themeNames.join(", ")} ---`);
                const packagesRef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("published_packages");
                // Try searching by 'themes' array
                let snapshot = await packagesRef.where("themes", "array-contains-any", themeNames).limit(limitCount).get();
                // If nothing found, try searching by 'theme' (singular)
                if (snapshot.empty) {
                    console.log("No packages found with 'themes' array, trying 'theme' array...");
                    snapshot = await packagesRef.where("theme", "array-contains-any", themeNames).limit(limitCount).get();
                }
                // Final Fallback: If still nothing, just get latest published packages so page isn't empty
                if (snapshot.empty) {
                    console.log("No themed packages found, falling back to latest published...");
                    snapshot = await packagesRef.orderBy("createdAt", "desc").limit(limitCount).get();
                }
                console.log(`Query returned ${snapshot.docs.length} packages`);
                const packages = await Promise.all(snapshot.docs.map(async (doc)=>{
                    const data = doc.data();
                    const name = data.name || data.packageName || data.packageTitle || data.title || "Unnamed Package";
                    const price = data.price || (data.basePrice ? `₹${data.basePrice}` : null) || data.from || "Enquire for Price";
                    let duration = data.duration || (data.days ? `${data.days} Days / ${data.nights || data.days - 1} Nights` : "7 Days");
                    let heroImage = await resolvePackageImage(data);
                    // Final fallback image if none found
                    if (!heroImage) heroImage = "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop";
                    // Robust Slug Generation
                    const slug = data.slug || data.packageSlug || data.titleSlug || name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
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
        regions: async ()=>{
            try {
                console.log("--- GRAPHQL REGIONS QUERY ---");
                // We'll fetch all regions and filter in memory to be more robust with case sensitivity
                const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("regions").get();
                const allDocs = snapshot.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data()
                    }));
                console.log(`Total documents in 'regions' collection: ${allDocs.length}`);
                if (allDocs.length === 0) {
                    console.log("No dynamic regions found, triggering static fallback.");
                    return [];
                }
                // Filter for Europe and Visible
                const allCountries = allDocs.filter((doc)=>{
                    const continent = doc.continent?.toLowerCase();
                    return continent === "europe" && doc.visible !== false;
                });
                if (allCountries.length === 0) {
                    console.log("No Europe-specific regions found, triggering static fallback.");
                    return [];
                }
                console.log("Found Europe Countries:", allCountries.map((c)=>c.name));
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EUROPE_REGIONS"].map((staticRegion)=>{
                    const regionalCountries = allCountries.filter((country)=>staticRegion.countries.includes(country.name));
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
        packagesByRegion: async (_, { regionNames })=>{
            try {
                if (!regionNames || regionNames.length === 0) {
                    return [];
                }
                // Create a unique list of names including lowercased versions for case-insensitive matching
                const searchNames = Array.from(new Set([
                    ...regionNames,
                    ...regionNames.map((n)=>n.toLowerCase())
                ])).slice(0, 30); // Firestore 'in' limit is 30
                console.log(`--- FIRESTORE PACKAGES QUERY ---`);
                console.log(`Searching for region names (case-insensitive):`, searchNames);
                // Fetch packages from Firestore
                const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("published_packages").where("region", "in", searchNames).get();
                console.log(`Found ${snapshot.docs.length} documents in Firestore`);
                const packages = await Promise.all(snapshot.docs.map(async (doc)=>{
                    const data = doc.data();
                    // 1. Resolve Name & Basic Info
                    const name = data.name || data.packageName || data.packageTitle || data.title || "Unnamed Package";
                    const price = data.price || (data.basePrice ? `₹${data.basePrice}` : null) || data.from || "Enquire for Price";
                    // 2. Resolve Duration (Days/Nights)
                    let duration = data.duration;
                    if (!duration && data.days) {
                        duration = `${data.days} Days / ${data.nights || data.days - 1} Nights`;
                    } else if (!duration) {
                        duration = "7 Days / 6 Nights";
                    }
                    const details = data.details || data.description || data.sections?.find((s)=>s.id === "package_overview")?.content?.[0] || "";
                    // 3. Resolve Image using helper
                    let heroImage = await resolvePackageImage(data);
                    // 4. Robust Slug Generation
                    const slug = data.slug || data.packageSlug || data.titleSlug || name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
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
                packages.forEach((p)=>console.log(`ID: ${p.id} -> SLUG: ${p.slug}`));
                console.log("------------------");
                console.log(`--- TOTAL MAPPED PACKAGES: ${packages.length} ---`);
                return packages;
            } catch (error) {
                console.error(`GraphQL Error fetching packages for names ${regionNames}:`, error);
                return [];
            }
        },
        packageById: async (_, { id })=>{
            try {
                console.log(`--- FETCHING SINGLE PACKAGE: ${id} ---`);
                // 1. Try Direct ID Lookup
                let doc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("published_packages").doc(id).get();
                // 2. If ID lookup fails, search by Slug field
                if (!doc.exists) {
                    console.log(`Package ID ${id} not found, searching by slug...`);
                    const slugSnapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$firebase$2f$admin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection("published_packages").where("slug", "==", id) // Next.js passes the slug as the 'id' param in dynamic routes
                    .limit(1).get();
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
                const duration = data.duration || (data.days ? `${data.days} Days / ${data.nights || data.days - 1} Nights` : "7 Days");
                const details = data.details || data.description || data.sections?.find((s)=>s.id === "package_overview")?.content?.[0] || "";
                // Use same robust image resolution
                const heroImage = await resolvePackageImage(data);
                // Robust Slug Generation (consistent with list views)
                const slug = data.slug || data.packageSlug || data.titleSlug || name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
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
const server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$ApolloServer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApolloServer"]({
    typeDefs,
    resolvers
});
// Wrap the handler to ensure it always returns JSON even on initialization errors
const apolloHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$as$2d$integrations$2f$next$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startServerAndCreateNextHandler"])(server);
const handler = async (req)=>{
    console.log(">>> API GRAPHQL REQUEST RECEIVED <<<", req.method);
    try {
        return await apolloHandler(req);
    } catch (error) {
        console.error("Critical GraphQL Initialization Error:", error);
        return new Response(JSON.stringify({
            errors: [
                {
                    message: error.message || "Internal Server Error"
                }
            ]
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};
;
}),
];

//# debugId=c7b92663-beb8-3a2b-9eb2-b2cd75f6474d
//# sourceMappingURL=%5Broot-of-the-server%5D__94741195._.js.map