import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const checkDrawer = () => {
      setIsDrawerOpen(document.body.classList.contains("drawer-open"));
    };

    // Use a MutationObserver to watch for class changes on the body
    const observer = new MutationObserver(checkDrawer);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll);
    checkDrawer(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917019971407", "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-500 ${isDrawerOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"}`}
    >
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-forest-deep/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-accent-gold shadow-2xl transition-all duration-500 hover:bg-accent-gold hover:text-forest-deep transform ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle
          size={24}
          fill="currentColor"
          className="relative z-10"
        />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
      </button>
    </div>
  );
}
