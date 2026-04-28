;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="fb8c187b-2195-9dfd-abaa-bf4093bf9b20")}catch(e){}}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/destinations/components/QuickRegions.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/free-mode.mjs [app-client] (ecmascript) <export default as FreeMode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/mousewheel.mjs [app-client] (ecmascript) <export default as Mousewheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
/**
 * DEFINITIVE LANDMARK MAPPING
 * Audited and verified 2026-04-22
 */ const FEATURED_CITIES = [
    {
        id: "paris",
        name: "Paris",
        regionId: "western-europe",
        image: "/quick_region_images/eiffel_tower.svg"
    },
    {
        id: "london",
        name: "London",
        regionId: "uk-ireland",
        image: "/quick_region_images/tower_bridge.svg"
    },
    {
        id: "rome",
        name: "Rome",
        regionId: "western-europe",
        image: "/quick_region_images/colosseum_alt.svg"
    },
    {
        id: "amalfi",
        name: "Amalfi Coast",
        regionId: "western-europe",
        image: "/quick_region_images/trevi_fountain.svg"
    },
    {
        id: "swiss-alps",
        name: "Swiss Alps",
        regionId: "western-europe",
        image: "/quick_region_images/alps_mountain.svg"
    },
    {
        id: "santorini",
        name: "Santorini",
        regionId: "balkans",
        image: "/quick_region_images/parthenon.svg"
    },
    {
        id: "berlin",
        name: "Berlin",
        regionId: "western-europe",
        image: "/quick_region_images/brandenburg_gate.svg"
    },
    {
        id: "venice",
        name: "Venice",
        regionId: "western-europe",
        image: "/quick_region_images/european_skyline.svg"
    },
    {
        id: "barcelona",
        name: "Barcelona",
        regionId: "western-europe",
        image: "/quick_region_images/sagrada_familia.svg"
    },
    {
        id: "prague",
        name: "Prague",
        regionId: "central-europe",
        image: "/quick_region_images/charles_bridge.svg"
    },
    {
        id: "edinburgh",
        name: "Edinburgh",
        regionId: "uk-ireland",
        image: "/quick_region_images/edinburgh_castle.svg"
    },
    {
        id: "florence",
        name: "Florence",
        regionId: "western-europe",
        image: "/quick_region_images/leaning_tower_of_pisa.svg"
    },
    {
        id: "vienna",
        name: "Vienna",
        regionId: "central-europe",
        image: "/quick_region_images/buckingham_palace.svg"
    },
    {
        id: "budapest",
        name: "Budapest",
        regionId: "central-europe",
        image: "/quick_region_images/cologne_cathedral.svg"
    },
    {
        id: "lisbon",
        name: "Lisbon",
        regionId: "western-europe",
        image: "/quick_region_images/tower_bridge_alt.svg"
    },
    {
        id: "amsterdam",
        name: "Amsterdam",
        regionId: "western-europe",
        image: "/quick_region_images/european_skyline.svg"
    },
    {
        id: "nice",
        name: "Nice",
        regionId: "western-europe",
        image: "/quick_region_images/domed_basilica.svg"
    },
    {
        id: "berlin-tower",
        name: "Berlin TV Tower",
        regionId: "western-europe",
        image: "/quick_region_images/berlin_tv_tower.svg"
    },
    {
        id: "louvre",
        name: "The Louvre",
        regionId: "western-europe",
        image: "/quick_region_images/louvre.svg"
    },
    {
        id: "london-modern",
        name: "The Shard",
        regionId: "uk-ireland",
        image: "/quick_region_images/the_shard.svg"
    }
];
const QuickRegions = ()=>{
    _s();
    const [isScrolledPastHero, setIsScrolledPastHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHeaderVisible, setIsHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [prevEl, setPrevEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nextEl, setNextEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickRegions.useEffect": ()=>{
            const handleScroll = {
                "QuickRegions.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    // 1. Threshold for adding "stuck" visual effects
                    const shouldBeStuck = currentScrollY > 700;
                    setIsScrolledPastHero({
                        "QuickRegions.useEffect.handleScroll": (prev)=>prev !== shouldBeStuck ? shouldBeStuck : prev
                    }["QuickRegions.useEffect.handleScroll"]);
                    // 2. Synchronize top-offset logic with actual Header component
                    if (currentScrollY > 200) {
                        if (currentScrollY > lastScrollY.current) {
                            setIsHeaderVisible({
                                "QuickRegions.useEffect.handleScroll": (prev)=>prev !== false ? false : prev
                            }["QuickRegions.useEffect.handleScroll"]);
                        } else {
                            setIsHeaderVisible({
                                "QuickRegions.useEffect.handleScroll": (prev)=>prev !== true ? true : prev
                            }["QuickRegions.useEffect.handleScroll"]);
                        }
                    } else {
                        setIsHeaderVisible(true);
                    }
                    lastScrollY.current = currentScrollY;
                }
            }["QuickRegions.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "QuickRegions.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["QuickRegions.useEffect"];
        }
    }["QuickRegions.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky z-[990] transition-all duration-300 max-w-full overflow-x-clip", // Perfectly coordinates with the 64px height of the scrolled header (40px logo + 24px padding)
        isHeaderVisible ? "top-16" : "top-0", // Visual styles when scrolled past
        isScrolledPastHero ? "bg-brand-soft/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-1" : "bg-brand-soft/20 py-1 sm:py-3"),
        "aria-label": "Top Destinations Discovery",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__["Mousewheel"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    freeMode: true,
                    mousewheel: {
                        forceToAxis: true
                    },
                    navigation: {
                        prevEl,
                        nextEl
                    },
                    // Direct density configuration for immediate application
                    slidesPerView: isScrolledPastHero ? 6.5 : 4.5,
                    spaceBetween: isScrolledPastHero ? 4 : 8,
                    slidesOffsetBefore: 12,
                    slidesOffsetAfter: 12,
                    breakpoints: {
                        768: {
                            slidesPerView: isScrolledPastHero ? 10.5 : 6.5,
                            spaceBetween: isScrolledPastHero ? 6 : 16,
                            slidesOffsetBefore: 60,
                            slidesOffsetAfter: 60
                        },
                        1024: {
                            slidesPerView: isScrolledPastHero ? 16.5 : 10.5,
                            spaceBetween: isScrolledPastHero ? 8 : 24,
                            slidesOffsetBefore: 80,
                            slidesOffsetAfter: 80
                        }
                    },
                    touchStartPreventDefault: false,
                    className: "w-full relative",
                    children: FEATURED_CITIES.map((city, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                className: "flex flex-col items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${city.regionId}`,
                                    className: "group flex flex-col items-center gap-1.5 md:gap-3 outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative aspect-square rounded-full flex-shrink-0 transition-all duration-500 border border-slate-200 bg-white shadow-sm p-1 group-hover:scale-110", isScrolledPastHero ? "w-12 h-12 md:w-16 md:h-16" : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: city.image,
                                                    alt: city.name,
                                                    fill: true,
                                                    className: "object-contain p-2 transform transition-transform duration-700 group-hover:scale-110",
                                                    priority: idx < 5,
                                                    sizes: "(max-width: 640px) 64px, 96px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block font-bold text-slate-800 tracking-tight transition-all duration-300 group-hover:text-brand-gold whitespace-nowrap text-center", isScrolledPastHero ? "text-[8px] md:text-[10px]" : "text-[10px] sm:text-xs md:text-sm"),
                                            children: city.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, city.id || city.name, false, {
                            fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, isScrolledPastHero ? "sticky-swiper" : "normal-swiper", false, {
                    fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: (node)=>setPrevEl(node),
                    className: "quick-regions-prev hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200 items-center justify-center cursor-pointer pointer-events-auto transition-all hover:bg-brand-gold hover:text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: (node)=>setNextEl(node),
                    className: "quick-regions-next hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-[1001] w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xl border border-slate-200 items-center justify-center cursor-pointer pointer-events-auto transition-all hover:bg-brand-gold hover:text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
            lineNumber: 90,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/destinations/components/QuickRegions.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuickRegions, "+a3gnlbRev6jzRIcyieB46JQrRI=");
_c = QuickRegions;
const __TURBOPACK__default__export__ = QuickRegions;
var _c;
__turbopack_context__.k.register(_c, "QuickRegions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/destinations/components/QuickRegions.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/destinations/components/QuickRegions.jsx [app-client] (ecmascript)"));
}),
]);

//# debugId=fb8c187b-2195-9dfd-abaa-bf4093bf9b20
//# sourceMappingURL=src_features_destinations_components_QuickRegions_jsx_b8147fd1._.js.map