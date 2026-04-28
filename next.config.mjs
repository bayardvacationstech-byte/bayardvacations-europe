import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Dynamic hosting with SSR enabled
  output: "standalone",
  // Removed: output: "export" for dynamic rendering

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizeCss: true, // Requires 'critters' package
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "@radix-ui/react-accordion", 
      "@radix-ui/react-dialog", 
      "@radix-ui/react-select", 
      "@radix-ui/react-tooltip", 
      "date-fns", 
      "swiper"
    ],
  },

  productionBrowserSourceMaps: true,

  images: {
    // ✅ Optimized images with dynamic hosting
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.bayardvacations.com" },
      { protocol: "http", hostname: "cdn.bayardvacations.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "swiperjs.com" },
      { protocol: "https", hostname: "technovans.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },

  // ✅ Redirects to normalize category URLs and point to the new /themes route
  async redirects() {
    return [
      {
        source: "/categories",
        destination: "/themes",
        permanent: true,
      },
      {
        source: "/categories/solo_expedition",
        destination: "/themes/solo-expedition",
        permanent: true,
      },
      {
        source: "/categories/romantic_getaways",
        destination: "/themes/romantic-getaways",
        permanent: true,
      },
      {
        source: "/categories/family_funventure",
        destination: "/themes/family-funventure",
        permanent: true,
      },
      {
        source: "/categories/religious_retreat",
        destination: "/themes/religious-retreat",
        permanent: true,
      },
      {
        source: "/categories/exploration_bundle",
        destination: "/themes/exploration-bundle",
        permanent: true,
      },
      {
        source: "/categories/relax_rejuvenate",
        destination: "/themes/relax-rejuvenate",
        permanent: true,
      },
      {
        source: "/categories/elite_escape",
        destination: "/themes/elite-escape",
        permanent: true,
      },
      {
        source: "/categories/:slug",
        destination: "/themes/:slug",
        permanent: true,
      },
      {
        source: "/group-departure",
        destination: "/themes/group-departure",
        permanent: true,
      },
      {
        source: "/themes/group-adventures",
        destination: "/themes/group-departure",
        permanent: true,
      },
      {
        source: "/travel-insurance",
        destination: "/other-services",
        permanent: true,
      },
      {
        source: "/visa-assistance",
        destination: "/other-services",
        permanent: true,
      },
    ];
  },

  // ✅ Headers for caching static assets and security
  async headers() {
    return [
      {
        // Global security headers
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(self), geolocation=()",
          },
        ],
      },
      {
        // Cache images, fonts, and media for 1 year
        source: "/:all*(svg|png|jpg|jpeg|webp|avif|mp4|webm|woff|woff2|ttf|otf)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Explicit patterns for CDN-like structures if proxied
        source: "/(images|videos|img|media)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Direct match for public subdirectories
        source: "/(3d-icons|icons-filled|img|media)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // ✅ Proxy Cache Control
        source: "/media-assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // ✅ Hashed JS/CSS chunks are safe to cache forever (content-addressed)
        source: "/_next/static/chunks/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // ✅ Top-level _next/static files (manifests, build-id) must NOT be cached
        // so browsers always fetch the latest chunk manifest after a new deploy.
        source: "/_next/static/:file((?!chunks/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },


  async rewrites() {
    const adminApiUrl = process.env.ADMIN_API_URL || "http://192.168.0.147:3000";
    return [
      {
        source: "/media-assets/:path*",
        destination: "https://cdn.bayardvacations.com/:path*",
      },
      // Proxy document API calls to admin server
      {
        source: "/api/user-profiles/:path*",
        destination: `${adminApiUrl}/api/user-profiles/:path*`,
      },
    ];
  },

  // ✅ Turbopack is enabled via CLI: `next dev --turbo`
  // Note: Turbopack is primarily for dev mode; production builds still use webpack
};

// ✅ Sentry enabled for all environments
const moduleExports = withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "bayard-vacations",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  // Proxy Sentry requests through your own domain to avoid ad-blocker interference
  tunnelRoute: "/monitoring",
  // Annotate React components in stack traces for clearer error context
  reactComponentAnnotation: { enabled: true },
});

export default moduleExports;
