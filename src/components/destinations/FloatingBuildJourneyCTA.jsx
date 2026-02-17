import { Plus } from "lucide-react";

export default function FloatingBuildJourneyCTA({ onClick, selectedCount }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-55 group">
      <button
        onClick={onClick}
        className="flex items-center gap-4 px-10 py-5 bg-forest-deep/50 backdrop-blur-3xl text-white rounded-full font-black uppercase tracking-widest text-[11px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] transition-all duration-700 hover:scale-105 hover:bg-white hover:text-forest-deep hover:border-white active:scale-95 whitespace-nowrap"
      >
        <div className="relative">
          <Plus
            className="w-5 h-5 group-hover:rotate-90 transition-transform duration-700 font-bold"
            strokeWidth={3}
          />
        </div>
        <span>Build My Journey</span>
        {selectedCount > 0 && (
          <div className="flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-full bg-white text-forest-deep group-hover:bg-forest-deep group-hover:text-white text-[11px] font-black animate-in zoom-in duration-500 transition-colors">
            {selectedCount}
          </div>
        )}
      </button>
    </div>
  );
}
