;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="5cdcbe7b-cdfd-3779-7b77-d8796f05c3ab")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/destinations/components/RegionGallery.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$Container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/Container.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// HARD-CODED CORE REGIONS
const CORE_REGIONS = [
    {
        id: "scandinavia",
        title: "Scandinavia",
        heroImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
        from: "₹1,89,000",
        badge: "Limited Availability",
        badgeColor: "bg-rose-500 text-white"
    },
    {
        id: "uk-ireland",
        title: "UK & Ireland",
        heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
        from: "₹1,95,000",
        badge: "Member Exclusive"
    },
    {
        id: "western-europe",
        title: "Western Europe",
        heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
        from: "₹1,99,000",
        badge: "Summer 2026",
        badgeColor: "bg-brand-gold text-slate-900"
    },
    {
        id: "eastern",
        title: "Eastern Europe",
        heroImage: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=2070&auto=format&fit=crop",
        from: "₹99,000",
        badge: "Trending Now"
    },
    {
        id: "balkans",
        title: "Balkans",
        heroImage: "https://images.unsplash.com/photo-1555990793-da11153b2473?q=80&w=2071&auto=format&fit=crop",
        from: "₹1,49,000",
        badge: "Save 20% Today"
    }
];
const RegionGallery = ()=>{
    const Card = ({ region, className, tall = false })=>{
        if (!region) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            whileInView: {
                opacity: 1,
                scale: 1
            },
            viewport: {
                once: true
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl shadow-black/5 hover:shadow-black/20 transition-all duration-700", tall ? "h-[400px] sm:h-[500px] md:h-full md:min-h-[580px]" : "h-[200px] md:h-[280px]", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/${region.id}`,
                className: "block h-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: `${region.heroImage}&w=1000`,
                        alt: region.title,
                        fill: true,
                        unoptimized: true,
                        className: "object-cover transition-transform duration-1000 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20",
                        children: [
                            region.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-6 left-6 animate-fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md", region.badgeColor || "bg-white text-slate-900"),
                                    children: region.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "transform transition-transform duration-500 group-hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white text-2xl md:text-3xl font-bold mb-1 tracking-tight",
                                        children: region.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 text-[10px] font-black tracking-widest uppercase",
                                        children: [
                                            "From ",
                                            region.from
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 border border-white/10 rounded-[2.5rem] z-30 pointer-events-none group-hover:border-white/30 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 md:py-16 bg-white",
        "aria-labelledby": "showcase-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$Container$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6 md:mb-16 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block",
                                children: "Global Gateways"
                            }, void 0, false, {
                                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "showcase-heading",
                                className: "text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter",
                                children: [
                                    "Our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-blue",
                                        children: "Destinations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-1.5 bg-brand-gold mt-6 mx-auto rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            region: CORE_REGIONS[0],
                            tall: true,
                            className: "col-span-2 md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            region: CORE_REGIONS[1],
                            className: "col-span-1 md:col-start-1 md:row-start-1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            region: CORE_REGIONS[3],
                            className: "col-span-1 md:col-start-1 md:row-start-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            region: CORE_REGIONS[2],
                            className: "col-span-1 md:col-start-3 md:row-start-1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            region: CORE_REGIONS[4],
                            className: "col-span-1 md:col-start-3 md:row-start-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
            lineNumber: 105,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/destinations/components/RegionGallery.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RegionGallery;
const __TURBOPACK__default__export__ = RegionGallery;
var _c;
__turbopack_context__.k.register(_c, "RegionGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/destinations/components/RegionGallery.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/destinations/components/RegionGallery.jsx [app-client] (ecmascript)"));
}),
]);

//# debugId=5cdcbe7b-cdfd-3779-7b77-d8796f05c3ab
//# sourceMappingURL=src_features_destinations_components_RegionGallery_jsx_7e0e73b8._.js.map