import React from "react";
import { Check, Compass, Calendar, Users } from "lucide-react";

export const DestinationStep = ({
  allDestinations,
  primaryDestination,
  selectPrimaryDestination,
}) => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {allDestinations.map((dest) => (
        <button
          key={dest.id}
          onClick={() => selectPrimaryDestination(dest.id)}
          className={`group p-4 lg:p-6 rounded-2xl lg:rounded-[32px] border transition-all duration-500 text-left ${
            primaryDestination === dest.id
              ? "bg-accent-gold border-accent-gold shadow-premium scale-[1.01]"
              : "bg-white/5 border-white/10"
          }`}
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden shrink-0">
              <img
                src={dest.images[0]}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-base lg:text-2xl font-black uppercase tracking-tighter wrap-break-word leading-tight mb-0.5 ${primaryDestination === dest.id ? "text-forest-deep" : "text-white"}`}
              >
                {dest.name}
              </h3>
              <p
                className={`text-[8px] lg:text-[9px] uppercase font-black tracking-widest leading-relaxed line-clamp-2 ${primaryDestination === dest.id ? "text-forest-deep/60" : "text-white/30"}`}
              >
                {dest.subtitle}
              </p>
            </div>
            {primaryDestination === dest.id && (
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-forest-deep flex items-center justify-center">
                <Check
                  className="w-3 h-3 lg:w-4 lg:h-4 text-accent-gold"
                  strokeWidth={5}
                />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  </div>
);

export const HighlightsStep = ({
  selectedDestObj,
  selectedHighlights,
  toggleHighlight,
}) => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {selectedDestObj?.highlights.map((spot) => (
        <button
          key={spot}
          onClick={() => toggleHighlight(spot)}
          className={`flex items-center justify-between p-4 lg:p-6 rounded-xl lg:rounded-[24px] border transition-all duration-500 ${
            selectedHighlights.includes(spot)
              ? "bg-accent-gold border-accent-gold text-forest-deep"
              : "bg-white/5 border-white/10 text-white/50"
          }`}
        >
          <span className="flex-1 text-left text-[10px] lg:text-xs font-black uppercase tracking-widest pr-4 wrap-break-word leading-tight">
            {spot}
          </span>
          <div
            className={`w-5 h-5 lg:w-6 lg:h-6 rounded-lg border flex items-center justify-center transition-all ${
              selectedHighlights.includes(spot)
                ? "bg-forest-deep border-forest-deep"
                : "border-white/20"
            }`}
          >
            {selectedHighlights.includes(spot) && (
              <Check size={12} strokeWidth={4} className="text-accent-gold" />
            )}
          </div>
        </button>
      ))}
    </div>
  </div>
);
