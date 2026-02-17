import { Filter } from "lucide-react";

export default function FilterBar({
  activeFilter,
  setActiveFilter,
  filterOptions,
}) {
  return (
    <div className="sticky top-16 md:top-24 z-40 px-6 py-4 pointer-events-none">
      <section className="max-w-4xl mx-auto bg-forest-deep/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-premium pointer-events-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Filter className="w-3.5 h-3.5 text-accent-gold" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
              Filter
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 border ${
                  activeFilter === option
                    ? "bg-accent-gold border-accent-gold text-forest-deep shadow-glow"
                    : "bg-white/5 border-white/5 text-white/30 hover:text-white hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
