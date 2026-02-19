import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Destinations", path: "/destinations" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const isBranchActive = (link) => {
    if (isActive(link.path)) return true;
    if (link.submenu) {
      return link.submenu.some((sub) => isActive(sub.path));
    }
    return false;
  };

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
          className={`w-full transition-all duration-700 rounded-full pointer-events-auto flex items-center border border-white/10 relative z-50 ${
            isScrolled
              ? "max-w-7xl lg:max-w-3xl h-14 sm:h-18 px-5 sm:px-10 bg-forest-deep/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "max-w-7xl h-14 sm:h-18 px-5 sm:px-10 bg-forest-deep/40 backdrop-blur-2xl shadow-premium"
          }`}
        >
          {/* Logo Section */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group shrink-0"
            >
              <div
                className={`bg-white flex items-center justify-center transition-all duration-700 rounded-full shadow-lg group-hover:scale-110 ${
                  isScrolled
                    ? "w-9 h-9 sm:w-12 sm:h-12 lg:w-10 lg:h-10 p-1.5 sm:p-2 lg:p-2"
                    : "w-9 h-9 sm:w-12 sm:h-12 p-1.5 sm:p-2"
                }`}
              >
                <img
                  src="./logo.webp"
                  alt="greenzone logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className={`transition-all duration-700 overflow-hidden flex items-center ${isScrolled ? "lg:max-w-0 lg:opacity-0 lg:-translate-x-4" : "max-w-[300px] opacity-100 translate-x-0"}`}
              >
                <span className="font-heading font-black text-white text-[13px] sm:text-lg tracking-tighter block whitespace-nowrap ml-2 sm:ml-3">
                  Greenzone{" "}
                  <span className="italic text-accent-gold hidden xs:inline">
                    Adventures.
                  </span>
                  <span className="italic text-accent-gold xs:hidden">
                    Adventures.
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered and Stabilized */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group/nav-item">
                {link.submenu ? (
                  <div
                    className={`flex items-center rounded-full transition-all duration-300 group-hover/nav-item:bg-white/5 ${isBranchActive(link) ? "bg-white/5" : ""}`}
                  >
                    <Link
                      to={link.path}
                      className={`pl-4 pr-2 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 whitespace-nowrap relative group/link ${isBranchActive(link) ? "text-white" : "text-white/50 hover:text-white"}`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div
                        className={`absolute inset-x-4 bottom-1.5 h-px bg-accent-gold transition-transform duration-300 origin-center ${isBranchActive(link) ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}
                      />
                    </Link>
                    <button
                      className={`pr-4 pl-1 py-2 transition-all duration-300 group-hover/nav-item:text-white ${isBranchActive(link) ? "text-white" : "text-white/50 hover:text-white"}`}
                    >
                      <ChevronDown
                        size={12}
                        className="group-hover/nav-item:rotate-180 transition-transform duration-300"
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 pt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-300 z-50">
                      <div className="py-3 bg-forest-deep/95 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-premium">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`block px-6 py-2.5 text-[12px] font-black uppercase tracking-[0.2em] transition-colors ${isActive(sub.path) ? "text-accent-gold bg-white/5" : "text-white/50 hover:text-accent-gold"}`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 rounded-full hover:bg-white/5 whitespace-nowrap relative group/link ${isActive(link.path) ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div
                      className={`absolute inset-x-4 bottom-1 h-px bg-accent-gold transition-transform duration-300 origin-center ${isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4 shrink-0">
            {/* CTA strictly hidden on Mobile, only block on Desktop (lg+) */}
            <div className="hidden lg:block">
              <PrimaryButton
                to="/contact"
                variant="primary"
                size="sm"
                className={`transition-all duration-700 ${
                  isScrolled ? "lg:w-10 lg:h-10 lg:p-0! lg:min-w-0!" : ""
                } ${
                  isActive("/contact")
                    ? "ring-2 ring-accent-gold shadow-[0_0_20px_rgba(233,226,211,0.3)]"
                    : ""
                }`}
              >
                {/* On mobile (below lg), always show text. On lg, hide text when scrolled. */}
                <span className={`${isScrolled ? "lg:hidden" : ""}`}>
                  Start Journey
                </span>
                <ArrowRight
                  className={`transition-all duration-700 ${isScrolled ? "lg:w-4 lg:h-4 lg:ml-0" : "w-4 h-4 ml-2"}`}
                />
              </PrimaryButton>
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
          className={`absolute top-full left-4 right-4 mt-4 lg:hidden pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-100 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-12 opacity-0 scale-[0.95] pointer-events-none"
          }`}
        >
          <div className="bg-forest-deep/95 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-premium overflow-hidden flex flex-col max-h-[calc(100vh-140px)]">
            {/* Subtle atmosphere in mobile menu */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[100px] opacity-10 bg-accent-gold pointer-events-none" />

            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide py-4">
              <div className="flex flex-col gap-1 relative z-10">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    className="flex flex-col border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center justify-between py-4 px-2 group">
                      <Link
                        to={link.path}
                        className={`font-heading font-black text-md uppercase tracking-widest transition-all duration-300 ${isBranchActive(link) ? "text-white" : "text-white/70 hover:text-white"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {!link.submenu && (
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-2 ${isActive(link.path) ? "text-white" : "text-accent-gold"}`}
                        />
                      )}
                    </div>
                    {link.submenu && (
                      <div className="flex flex-col gap-0.5 pb-2 pl-3 border-l border-white/10 ml-2 mb-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`font-heading font-black text-[10px] uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl transition-all ${isActive(sub.path) ? "bg-accent-gold text-forest-deep" : "text-white/40 hover:text-white hover:bg-white/5"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Contact Quick Link in Mobile Menu */}
            <div className="p-6 bg-white/5 border-t border-white/5">
              <PrimaryButton
                to="/contact"
                size="sm"
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
