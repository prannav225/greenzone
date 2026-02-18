import { Filter } from "lucide-react";

export default function FilterBar({
  activeFilter,
  setActiveFilter,
  filterOptions,
}) {
  return (
    <div className="sticky top-[72px] md:top-24 z-40 px-4 md:px-6 py-3 md:py-4 pointer-events-none">
      <section className="max-w-4xl mx-auto bg-forest-deep/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-3 shadow-premium pointer-events-auto overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Filter className="w-3.5 h-3.5 text-accent-gold" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
              Filter
            </span>
          </div>
          <div className="flex flex-1 items-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide py-1">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 border whitespace-nowrap ${
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
