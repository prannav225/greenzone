import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle, Sparkles, X, Compass } from "lucide-react";
import { useJourney } from "../../hooks/useJourney";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openJourneyBuilder, selectedForJourney } = useJourney();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const checkDrawer = () => {
      setIsDrawerOpen(document.body.classList.contains("drawer-open"));
    };

    const observer = new MutationObserver(checkDrawer);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll);
    checkDrawer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917019971407", "_blank");
    setIsOpen(false);
  };

  if (isDrawerOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col-reverse items-end gap-3">
      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 z-10 backdrop-blur-xl border ${
          isOpen
            ? "bg-white/10 border-white/20 text-white rotate-180"
            : "bg-accent-gold/20 border-accent-gold/40 text-accent-gold"
        }`}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X size={24} strokeWidth={2.5} />
        ) : (
          <Sparkles size={24} strokeWidth={2.5} />
        )}
      </button>

      {/* Expanded Actions */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Global Build My Journey Action */}
        <div className="flex items-center gap-3 group">
          <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 sm:group-hover:opacity-100 transition-opacity whitespace-nowrap lg:block hidden border border-white/5">
            Build My Journey
          </span>
          <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg lg:hidden border border-white/5">
            Build My Journey
          </span>
          <button
            onClick={() => {
              openJourneyBuilder();
              setIsOpen(false);
            }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-premium transition-transform active:scale-95 relative"
          >
            <Compass size={20} strokeWidth={2.5} />
            {selectedForJourney.length > 0 && (
              <div className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-accent-gold text-forest-deep rounded-full text-[10px] font-black flex items-center justify-center border-2 border-forest-deep">
                {selectedForJourney.length}
              </div>
            )}
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center gap-3 group">
          <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 sm:group-hover:opacity-100 transition-opacity whitespace-nowrap lg:block hidden border border-white/5">
            WhatsApp
          </span>
          <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg lg:hidden border border-white/5">
            WhatsApp
          </span>
          <button
            onClick={openWhatsApp}
            className="w-12 h-12 rounded-full bg-[#25D366]/20 backdrop-blur-xl border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shadow-premium transition-all hover:scale-110 active:scale-95"
          >
            <MessageCircle size={20} fill="currentColor" />
          </button>
        </div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <div className="flex items-center gap-3 group">
            <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 sm:group-hover:opacity-100 transition-opacity whitespace-nowrap lg:block hidden border border-white/5">
              Back to Top
            </span>
            <span className="bg-forest-deep/60 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg lg:hidden border border-white/5">
              Back to Top
            </span>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-accent-gold flex items-center justify-center shadow-premium transition-all hover:scale-110 active:scale-95"
            >
              <ChevronUp size={20} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
