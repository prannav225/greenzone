import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

/**
 * NAVBAR COMPONENT
 * Standardized for the locked design language.
 */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Destinations", path: "/destinations" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-100 flex justify-center p-4 sm:p-6 pb-0 pointer-events-none pt-[calc(1rem+env(safe-area-inset-top,0px))] md:pt-6">
        {/* Main Navbar Pill */}
        <header
          className={`w-full max-w-7xl h-14 sm:h-18 transition-all duration-500 rounded-full pointer-events-auto flex items-center justify-between px-5 sm:px-10 shadow-premium border border-white/10 relative z-50 ${
            isScrolled
              ? "bg-forest-deep/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-forest-deep/40 backdrop-blur-2xl"
          }`}
        >
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white flex items-center justify-center transition-all duration-700 p-1.5 sm:p-2 rounded-full shadow-lg group-hover:scale-110">
              <img
                src="./logo.png"
                alt="greenzone logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-black text-white text-[13px] sm:text-lg tracking-tighter block whitespace-nowrap">
              Greenzone{" "}
              <span className="italic text-accent-gold hidden xs:inline">
                Adventures.
              </span>
              <span className="italic text-accent-gold xs:hidden">
                Adventures.
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-white/50 hover:text-white text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 rounded-full hover:bg-white/5 whitespace-nowrap relative group/link"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-x-4 bottom-1 h-px bg-accent-gold scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* CTA strictly hidden on Mobile, only block on Desktop (lg+) */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-primary px-8 py-2.5 h-auto rounded-full text-[9px] tracking-widest"
              >
                <span>Start Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/5 backdrop-blur-3xl flex items-center justify-center text-white border border-white/10 transition-all active:scale-95 shadow-xl"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu Container */}
        <div
          className={`absolute top-full left-4 right-4 mt-4 lg:hidden pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-12 opacity-0 scale-[0.95] pointer-events-none"
          }`}
        >
          <div className="bg-forest-deep/95 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-8 shadow-premium overflow-hidden relative">
            {/* Subtle atmosphere in mobile menu */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[100px] opacity-10 bg-accent-gold pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between py-5 px-2 border-b border-white/5 transition-all duration-300 group text-white/70 hover:text-white hover:pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-heading font-black text-lg uppercase tracking-widest">
                    {link.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-accent-gold transition-all duration-300 group-hover:translate-x-2" />
                </Link>
              ))}
            </div>

            <div className="mt-8 relative z-10">
              <PrimaryButton
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Start Your Journey</span>
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Dimmer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-forest-deep/90 backdrop-blur-xl z-90 lg:hidden pointer-events-auto transition-opacity duration-700"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
