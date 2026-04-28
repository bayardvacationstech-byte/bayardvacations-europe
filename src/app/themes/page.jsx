import ThemePackageList from "@/features/themes/components/ThemePackageList";

export const metadata = {
  title: "Travel Themes | Bayard Vacations",
  description: "Explore our collection of specialized travel themes. From honeymoons to adventure, find the perfect focus for your European journey.",
};

export default function AllThemesPage() {
  return (
    <article className="min-h-screen bg-[#F9F8F5]">
      {/* Cinematic Header for Themes */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover"
             alt="Luxury Travel"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">
            Inspiration
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Signature <span className="font-editorial italic font-normal text-brand-gold">Themes</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Every journey tells a story. Choose a theme that resonates with your spirit 
            and let us curate a bespoke experience tailored to your passion.
          </p>
        </div>
      </section>

      {/* Dynamic Package List for All Themes */}
      <ThemePackageList themeId={null} />
    </article>
  );
}
