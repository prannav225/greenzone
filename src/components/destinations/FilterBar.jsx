import React, { useRef, useState } from "react";
import { Filter } from "lucide-react";

export default function FilterBar({
  activeFilter,
  setActiveFilter,
  filterOptions,
}) {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="sticky top-[72px] md:top-24 z-40 px-4 md:px-6 py-3 md:py-4 flex justify-center">
      <section className="w-full max-w-4xl bg-forest-deep/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full px-4 md:px-6 py-2 md:py-3 shadow-premium">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 shrink-0 px-2 border-r border-white/5 pr-4">
            <Filter className="w-3.5 h-3.5 text-accent-gold" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
              Filter
            </span>
          </div>
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex flex-1 items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide py-1.5 min-w-0 touch-pan-x overscroll-x-contain ${
              isDown ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`shrink-0 px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 border whitespace-nowrap active:scale-95 pointer-events-auto ${
                  activeFilter === option
                    ? "bg-accent-gold border-accent-gold text-forest-deep shadow-glow"
                    : "bg-white/5 border-white/5 text-white/30 hover:text-white hover:bg-white/10 shadow-sm"
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
