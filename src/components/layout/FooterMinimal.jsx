import { Link, useLocation } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const navigation = {
  company: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact", path: "/contact" },
  ],
  workshops: [
    { name: "Overview", path: "/workshops" },
    { name: "Outbound Learning", path: "/outbound-learning" },
    { name: "Neuro-Linguistic Programming", path: "/nlp" },
    { name: "Emotional Intelligence", path: "/eq" },
    { name: "Agri Tourism", path: "/agri-tourism" },
  ],
  social: [
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: Facebook, name: "Facebook", url: "#" },
  ],
};

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="relative bg-forest-deep text-white overflow-hidden border-t border-white/5 tracking-widest font-black">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-emerald/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(233, 226, 211, 0.1), transparent)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
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

            <p className="text-xs leading-relaxed text-earth/50 max-w-sm normal-case font-medium tracking-normal mb-8">
              Engineering world-class experiential journeys that combine
              psychology, adventure, and tactical growth to foster professional
              evolution and personal grit.
            </p>

            <div className="flex gap-4">
              {navigation.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-accent-gold group/icon"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-white/40 group-hover/icon:text-forest-deep transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column - Company */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase font-black text-white/30 tracking-[0.4em]">
              Directory
            </h4>
            <nav className="flex flex-col gap-4">
              {navigation.company.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group flex items-center gap-2 text-[11px] uppercase transition-colors ${
                    isActive(link.path)
                      ? "text-accent-gold"
                      : "text-earth/60 hover:text-accent-gold"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    className={`w-3 h-3 transition-all ${
                      isActive(link.path)
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Links Column - Workshops */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase font-black text-white/30 tracking-[0.4em]">
              Evolution Tracks
            </h4>
            <nav className="flex flex-col gap-4">
              {navigation.workshops.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group flex items-center gap-2 text-[11px] uppercase transition-colors ${
                    isActive(link.path)
                      ? "text-accent-gold"
                      : "text-earth/60 hover:text-accent-gold"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    className={`w-3 h-3 transition-all ${
                      isActive(link.path)
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase font-black text-white/30 tracking-[0.4em]">
              Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-earth/60 normal-case font-medium tracking-normal">
                  Bengaluru, Karnataka,
                  <br />
                  India
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                <span className="text-[11px] text-earth/60 group-hover:text-white transition-colors lowercase tracking-normal">
                  hello@greenzone.com
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                <span className="text-[11px] text-earth/60 group-hover:text-white transition-colors tracking-normal">
                  +91 70199 71407
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-earth/30 font-medium tracking-widest leading-none">
            © {currentYear} GREENZONE ADVENTURES. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-10">
            <Link
              to="/privacy"
              className="text-[10px] uppercase text-earth/30 hover:text-accent-gold transition-colors"
            >
              Privacy / Legal
            </Link>
            <Link
              to="/terms"
              className="text-[10px] uppercase text-earth/30 hover:text-accent-gold transition-colors"
            >
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
