import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Destinations", path: "/destinations" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: Facebook, name: "Facebook", url: "#" },
];

export default function FooterMinimal() {
  return (
    <footer className="relative bg-forest-deep text-white overflow-hidden border-t border-white/5">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(233, 226, 211, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 p-2 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <img
                src="./logo.png"
                alt="greenzone logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter text-white">
              Greenzone <span className="text-accent-gold">Adventures</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 md:gap-12">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-earth/60 hover:text-accent-gold transition-all duration-300 text-xs font-black uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group hover:bg-accent-gold hover:border-accent-gold hover:scale-110 shadow-premium"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-white group-hover:text-forest transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] sm:text-xs">
          <p className="text-earth/40 font-medium tracking-wide">
            © 2026 Greenzone Adventures. Engineered for evolution.
          </p>

          <div className="flex gap-10">
            <Link
              to="/privacy"
              className="text-earth/40 hover:text-accent-gold transition-colors font-medium tracking-wide uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-earth/40 hover:text-accent-gold transition-colors font-medium tracking-wide uppercase"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
