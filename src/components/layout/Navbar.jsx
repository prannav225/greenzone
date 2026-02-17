import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

/**
 * NAVBAR COMPONENT
 * Standardized for the locked design language.
 */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Workshops",
    path: "/workshops",
    submenu: [
      { name: "OBL", path: "/outbound-learning" },
      { name: "NLP", path: "/nlp" },
      { name: "EQ", path: "/eq" },
      { name: "Agri Tourism", path: "/agri-tourism" },
    ],
  },
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
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* CTA strictly hidden on Mobile, only block on Desktop (lg+) */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`btn-primary px-8 py-2.5 h-auto rounded-full text-[9px] tracking-widest ${isActive("/contact") ? "ring-2 ring-accent-gold shadow-[0_0_20px_rgba(233,226,211,0.3)]" : ""}`}
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
                <div key={link.path} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between py-5 px-2 border-b border-white/5 group ${isBranchActive(link) ? "text-white" : "text-white/70"}`}
                  >
                    <Link
                      to={link.path}
                      className={`font-heading font-black text-lg uppercase tracking-widest transition-all duration-300 ${isBranchActive(link) ? "text-white" : "text-white/70 hover:text-white"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu ? (
                      <div className="flex flex-col gap-4 mt-2 mb-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`font-heading font-black text-sm uppercase tracking-widest pl-4 py-2 border-l ${isActive(sub.path) ? "text-accent-gold border-accent-gold" : "text-accent-gold/60 hover:text-accent-gold border-accent-gold/20"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <ArrowRight
                          className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-2 ${isActive(link.path) ? "text-white" : "text-accent-gold"}`}
                        />
                      </Link>
                    )}
                  </div>
                </div>
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
