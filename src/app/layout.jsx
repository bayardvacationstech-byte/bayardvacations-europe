import "../styles/globals.css";
import { Poppins, Great_Vibes } from "next/font/google";
import { SEO_DEFAULTS } from "@/core/config/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

import Header from "@/shared/components/layout/Header/Header";
import Footer from "@/shared/components/layout/Footer/Footer";

export const metadata = SEO_DEFAULTS;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${greatVibes.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Header />

        {/* Semantic Main Content Area */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
