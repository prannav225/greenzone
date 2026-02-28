import React from "react";
import { Calendar } from "lucide-react";

export default function PackageItinerary({ flow }) {
  if (!flow || flow.length === 0) return null;

  return (
    <div className="bg-white/40 backdrop-blur-sm p-6 md:p-14 rounded-3xl border border-forest/10 shadow-sm text-sm sm:text-base">
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-forest/5 flex items-center justify-center">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
        </div>
        <div>
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-forest/30 block mb-0.5 sm:mb-1">
            Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-forest tracking-tight">
            Journey Timeline
          </h2>
        </div>
      </div>

      <div className="space-y-0 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-forest/5">
        {flow.map((step, idx) => (
          <div
            key={idx}
            className="relative pl-10 pb-10 sm:pb-16 last:pb-0 group"
          >
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[6px] border-accent-gold shadow-md z-10 transition-transform group-hover:scale-110" />
            <div className="space-y-1 sm:space-y-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-forest/30">
                Phase {idx + 1}
              </span>
              <p className="text-lg sm:text-xl font-bold text-forest transition-colors">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
