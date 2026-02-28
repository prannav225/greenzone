import React from "react";
import {
  Download,
  ChevronDown,
  MapPin,
  Compass,
  Bus,
  Utensils,
  Hotel,
} from "lucide-react";

/**
 * Extracted SummaryContent to fix ESLint "component created during render" warning.
 */
const SummaryContent = ({
  layout = "mobile",
  selectedDestObj,
  selectedHighlights,
  journeyDuration,
  formData,
  setIsSummaryExpanded,
  summaryRef,
  handleDownload,
}) => {
  const formatDate = (date) => {
    if (!date) return "TBD";
    return new Intl.DateTimeFormat("en-GB").format(new Date(date));
  };

  return (
    <div className={`space-y-6`}>
      <div className="flex justify-between items-center mb-6 lg:mb-8 px-1">
        <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter">
          Your Draft
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold border border-accent-gold/20 hover:bg-accent-gold hover:text-forest-deep transition-all shadow-glow"
            title="Download Itinerary"
          >
            <Download size={18} />
          </button>
          {layout === "mobile" && (
            <button
              onClick={() => setIsSummaryExpanded(false)}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40"
            >
              <ChevronDown size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Captured Area for Export: Redesigned as a Premium Voyage Ticket */}
      <div
        ref={summaryRef}
        className="space-y-6 lg:space-y-8 p-6 lg:p-8 bg-[#0c1a16] relative overflow-hidden border border-white/5 rounded-[40px] w-full"
      >
        {/* Decorative Background Elements for Export */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-gold/5 rounded-full blur-[100px]" />

        {/* Premium Branding Header - Improved Resiliency */}
        <div className="relative z-10 mb-12">
          <div className="flex items-center justify-between gap-4 px-1">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 border border-white/10 p-2 lg:p-2.5 flex items-center justify-center shadow-2xl shrink-0">
                <img
                  src="/logo.webp"
                  alt="Greenzone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg lg:text-xl font-black text-white uppercase tracking-tight leading-none">
                  Greenzone
                </h4>
                <p className="text-[7px] lg:text-[7.5px] font-black uppercase tracking-[0.4em] text-accent-gold mt-1 lg:mt-1.5 opacity-80">
                  Adventures
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-block whitespace-nowrap px-2.5 py-1.5 bg-accent-gold/20 border border-accent-gold/20 rounded-full text-[6.5px] lg:text-[7px] font-black uppercase tracking-widest text-accent-gold backdrop-blur-sm">
                Bespoke
              </span>
            </div>
          </div>
        </div>

        {/* Essential Identity */}
        <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/5">
          <div className="space-y-2">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-accent-gold/40">
              Traveler
            </span>
            <p className="text-xs lg:text-sm font-black text-white uppercase tracking-tight truncate">
              {formData.name || "Guest"}
            </p>
          </div>
          <div className="space-y-2 text-right">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-accent-gold/40">
              Group Size
            </span>
            <p className="text-xs lg:text-sm font-black text-white uppercase tracking-tight">
              {formData.groupSize || "TBD"}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-accent-gold flex items-center gap-2">
            <MapPin className="w-3 h-3" /> Area
          </div>
          <p className="text-base lg:text-lg font-black text-white uppercase tracking-tight">
            {selectedDestObj?.name || "None Selected"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-accent-gold flex items-center gap-2">
            <Compass className="w-3 h-3" /> Spots
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {selectedHighlights.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-4 py-2.5 bg-white/5 backdrop-blur-md rounded-2xl text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] leading-[1.4] text-white/80 shadow-sm border border-white/5"
              >
                {s}
              </span>
            ))}
            {selectedHighlights.length === 0 && (
              <span className="text-[9px] text-white/20 italic font-medium">
                No spots chosen...
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/5">
          <div className="space-y-2">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/30">
              Start Date
            </span>
            <p className="text-xs font-black text-white uppercase">
              {formatDate(formData.fromDate)}
            </p>
          </div>
          <div className="space-y-2 text-right">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/30">
              End Date
            </span>
            <p className="text-xs font-black text-white uppercase">
              {formatDate(formData.toDate)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 lg:py-6 border-b border-white/5">
          <div className="space-y-1">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/30">
              Duration
            </span>
            <p className="text-[10px] lg:text-xs font-black text-white uppercase">
              {journeyDuration || "TBD"}
            </p>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/30">
              Budget
            </span>
            <p className="text-[10px] lg:text-xs font-black text-white uppercase">
              {formData.estimatedBudget || "TBD"}
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/30">
            Logistics & Preferences
          </p>
          <div className="grid grid-cols-1 gap-2.5">
            {[
              {
                l: "Transport",
                v: formData.transport,
                i: <Bus className="w-3 h-3" />,
              },
              {
                l: "Food",
                v: formData.food,
                i: <Utensils className="w-3 h-3" />,
              },
              { l: "Stay", v: formData.stay, i: <Hotel className="w-3 h-3" /> },
            ].map(
              (p, i) =>
                p.v && (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white/5 px-5 py-3.5 rounded-2xl border border-white/5 gap-4"
                  >
                    <div className="flex items-center gap-2 text-accent-gold/40 shrink-0">
                      {p.i}
                      <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest">
                        {p.l}
                      </span>
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-black uppercase text-accent-gold text-right tracking-widest whitespace-nowrap">
                      {p.v}
                    </span>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Footer Branding */}
        <div className="pt-12 text-center space-y-4">
          <div className="w-12 h-px bg-accent-gold/20 mx-auto" />
          <p className="text-[7px] font-black uppercase tracking-[0.5em] text-white/20 leading-relaxed max-w-[200px] mx-auto">
            Curated exclusively by Greenzone Adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryContent;
