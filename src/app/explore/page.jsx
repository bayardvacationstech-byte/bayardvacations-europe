import ExplorePackages from "@/features/destinations/components/ExplorePackages";

export const metadata = {
  title: "Explore European Destinations | Bayard Vacations",
  description: "Discover our full collection of curated European journeys. Filter by region, theme, budget and more to find your perfect bespoke holiday.",
};

export default function ExplorePage() {
  return (
    <article className="min-h-screen bg-[#F9F8F5]">
      {/* Cinematic Header for Explore */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover"
             alt="European Landscapes"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">
            Discovery Hub
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">
            The Entire <span className="font-editorial italic font-normal text-brand-gold">Collection</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            From the Arctic fjords of Scandinavia to the sun-drenched coasts of the Adriatic — 
            explore our full portfolio of signature European experiences.
          </p>
        </div>
      </section>

      {/* Dynamic Package Explorer */}
      <ExplorePackages />
    </article>
  );
}
