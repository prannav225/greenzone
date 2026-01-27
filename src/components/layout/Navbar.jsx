import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Greenzone", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Destinations & Experiences", path: "/destinations" },
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
          className={`w-full max-w-7xl h-14 sm:h-18 transition-all duration-500 rounded-2xl sm:rounded-full pointer-events-auto flex items-center justify-between px-5 sm:px-10 shadow-2xl border relative z-50 ${
            isScrolled
              ? "glass-card-dark border-white/10"
              : "bg-forest/20 backdrop-blur-xl border-white/10 group-hover:bg-forest/30"
          }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-1 ring-white/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-forest font-heading font-black text-xl sm:text-2xl leading-none select-none">
                G
              </span>
            </div>
            <span className="font-heading font-black text-white text-[18px] sm:text-xl tracking-tighter block">
              Greenzone{" "}
              <span className="text-emerald-pop italic">Adventures.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-white/60 hover:text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full hover:bg-white/10 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-3 px-6 py-2.5 rounded-full bg-emerald-pop text-forest font-black text-[11px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(60,220,160,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Journey <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all active:scale-90 shadow-sm"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu Container */}
        <div
          className={`absolute top-full left-4 right-4 mt-3 lg:hidden pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-4 opacity-0 scale-[0.98] pointer-events-none"
          }`}
        >
          <div className="glass-card-dark rounded-card border-white/10 p-6 sm:p-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between p-4 rounded-card transition-colors duration-200 hover:bg-white/5 group text-white hover:text-emerald-pop"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-heading font-black text-lg tracking-tight">
                    {link.name}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-white/5">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-4 w-full bg-emerald-pop text-forest py-5 rounded-card font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-pop/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dimmer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-90 lg:hidden pointer-events-auto cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
