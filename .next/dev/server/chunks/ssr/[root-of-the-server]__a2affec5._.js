;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4ace82c8-0d80-5878-eb52-c787b384cbc5")}catch(e){}}();
module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/features/destinations/constants/regions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionHero.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionHero.jsx <module evaluation>", "default");
}),
"[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionHero.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionHero.jsx", "default");
}),
"[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionHighlights.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionHighlights.jsx <module evaluation>", "default");
}),
"[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionHighlights.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionHighlights.jsx", "default");
}),
"[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHighlights$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHighlights$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHighlights$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionPackages.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionPackages.jsx <module evaluation>", "default");
}),
"[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionPackages.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionPackages.jsx", "default");
}),
"[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionPackages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionPackages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionPackages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionVisaInfo.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionVisaInfo.jsx <module evaluation>", "default");
}),
"[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionVisaInfo.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionVisaInfo.jsx", "default");
}),
"[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionVisaInfo$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionVisaInfo$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionVisaInfo$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionEnquiry.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionEnquiry.jsx <module evaluation>", "default");
}),
"[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/destinations/components/RegionEnquiry.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/destinations/components/RegionEnquiry.jsx", "default");
}),
"[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionEnquiry$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionEnquiry$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionEnquiry$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/[regionId]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegionPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/constants/regions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHero.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHighlights$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionHighlights.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionPackages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionPackages.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionVisaInfo$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionVisaInfo.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionEnquiry$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/destinations/components/RegionEnquiry.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EUROPE_REGIONS"].map((r)=>({
            regionId: r.id
        }));
}
async function generateMetadata({ params }) {
    const { regionId } = await params;
    const region = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["REGIONS_MAP"][regionId];
    if (!region) return {};
    return {
        title: `${region.title} Tour Packages | Bayard Vacations Europe`,
        description: `Explore curated ${region.title} holiday packages. ${region.tagline} Book premium, tailor-made journeys from India.`,
        openGraph: {
            title: `${region.title} — Bayard Vacations Europe`,
            description: region.tagline,
            images: [
                {
                    url: region.heroImage
                }
            ]
        },
        alternates: {
            canonical: `/${region.id}`
        }
    };
}
async function RegionPage({ params }) {
    const { regionId } = await params;
    const region = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$constants$2f$regions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["REGIONS_MAP"][regionId];
    if (!region) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "min-h-screen bg-[#F9F8F5]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                region: region
            }, void 0, false, {
                fileName: "[project]/src/app/[regionId]/page.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionHighlights$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                region: region
            }, void 0, false, {
                fileName: "[project]/src/app/[regionId]/page.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionPackages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                region: region
            }, void 0, false, {
                fileName: "[project]/src/app/[regionId]/page.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionVisaInfo$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                region: region
            }, void 0, false, {
                fileName: "[project]/src/app/[regionId]/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$destinations$2f$components$2f$RegionEnquiry$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                region: region
            }, void 0, false, {
                fileName: "[project]/src/app/[regionId]/page.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[regionId]/page.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[regionId]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[regionId]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# debugId=4ace82c8-0d80-5878-eb52-c787b384cbc5
//# sourceMappingURL=%5Broot-of-the-server%5D__a2affec5._.js.map