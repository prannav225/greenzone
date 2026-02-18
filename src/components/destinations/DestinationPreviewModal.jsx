import { X, Clock, Users, Sun, Map as MapIcon } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

export default function DestinationPreviewModal({
  selectedDest,
  onClose,
  JOURNEY_METADATA,
}) {
  if (!selectedDest) return null;

  const meta = JOURNEY_METADATA[selectedDest.id] || {};

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div
        className="absolute inset-0 bg-forest-deep/90 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl max-h-[90vh] md:max-h-none bg-forest-deep border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:left-6 md:right-auto p-4 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors z-[210] md:z-auto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Side */}
        <div className="w-full md:w-1/2 relative min-h-[200px] sm:min-h-[300px] shrink-0">
          <img
            src={selectedDest.images[0]}
            alt={selectedDest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-transparent to-transparent" />
        </div>

        {/* Modal Content Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 overflow-y-auto scrollbar-hide">
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold mb-2 block">
                Prototype Journey
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                {selectedDest.name}
              </h3>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                <Clock className="w-4 h-4 text-accent-gold mb-2" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 block">
                  Duration
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {meta.duration}
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                <Users className="w-4 h-4 text-accent-gold mb-2" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 block">
                  Ideal Group
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {meta.groupSize}
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                <Sun className="w-4 h-4 text-accent-gold mb-2" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 block">
                  Best Season
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {meta.season}
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                <MapIcon className="w-4 h-4 text-accent-gold mb-2" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 block">
                  Type
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {meta.tags?.[0]}
                </span>
              </div>
            </div>

            {/* Journey Flow */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 border-b border-white/5 pb-2">
                Sample Journey Flow
              </h4>
              <div className="space-y-3 md:space-y-4">
                {meta.flow?.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-[10px] font-black text-accent-gold shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 md:pt-8">
              <PrimaryButton to="/contact#inquiry" size="md" className="w-full">
                Design This Journey
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
