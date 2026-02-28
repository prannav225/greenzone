import React from "react";
import { Check, Compass, Calendar, Users } from "lucide-react";

export const DestinationStep = ({
  allDestinations,
  primaryDestination,
  selectPrimaryDestination,
}) => (
  <div className="space-y-4 animate-fade-in">
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
      {allDestinations.map((dest) => (
        <button
          key={dest.id}
          onClick={() => selectPrimaryDestination(dest.id)}
          className={`group p-3 lg:p-6 rounded-xl lg:rounded-[32px] border transition-all duration-500 text-left ${
            primaryDestination === dest.id
              ? "bg-accent-gold border-accent-gold shadow-premium"
              : "bg-white/5 border-white/10"
          }`}
        >
          <div className="flex flex-col gap-2 lg:gap-5">
            <div className="w-full h-20 lg:w-20 lg:h-20 rounded-lg lg:rounded-2xl overflow-hidden shrink-0">
              <img
                src={dest.images[0]}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 pr-6 relative">
              <h3
                className={`text-[10px] lg:text-2xl font-black uppercase tracking-tighter wrap-break-word leading-[1.1] mb-0.5 ${primaryDestination === dest.id ? "text-forest-deep" : "text-white"}`}
              >
                {dest.name}
              </h3>
              <p
                className={`text-[6px] lg:text-[9px] uppercase font-black tracking-widest leading-tight line-clamp-1 ${primaryDestination === dest.id ? "text-forest-deep/60" : "text-white/30"}`}
              >
                {dest.subtitle}
              </p>
              {primaryDestination === dest.id && (
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-forest-deep flex items-center justify-center">
                  <Check
                    className="w-2.5 h-2.5 text-accent-gold"
                    strokeWidth={5}
                  />
                </div>
              )}
            </div>
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
  <div className="space-y-4 animate-fade-in">
    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 lg:gap-3">
      {selectedDestObj?.highlights.map((spot) => (
        <button
          key={spot}
          onClick={() => toggleHighlight(spot)}
          className={`flex items-center justify-between p-3 lg:p-6 rounded-lg lg:rounded-[24px] border transition-all duration-500 ${
            selectedHighlights.includes(spot)
              ? "bg-accent-gold border-accent-gold text-forest-deep shadow-glow"
              : "bg-white/5 border-white/10 text-white/50"
          }`}
        >
          <span className="flex-1 text-left text-[8px] lg:text-xs font-black uppercase tracking-widest pr-2 wrap-break-word leading-tight line-clamp-2">
            {spot}
          </span>
          <div
            className={`w-4 h-4 lg:w-6 lg:h-6 rounded lg:rounded-lg border flex items-center justify-center transition-all shrink-0 ${
              selectedHighlights.includes(spot)
                ? "bg-forest-deep border-forest-deep"
                : "border-white/20"
            }`}
          >
            {selectedHighlights.includes(spot) && (
              <Check size={10} strokeWidth={4} className="text-accent-gold" />
            )}
          </div>
        </button>
      ))}
    </div>
  </div>
);
