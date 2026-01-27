import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "The Team", path: "/about" }, // Pointing to About since Team info is there
  { name: "Contact", path: "/contact" },
];

const experienceLinks = [
  { name: "Outbound Learning", path: "/programs#obl" },
  { name: "Corporate Programs", path: "/programs#corporate" },
  { name: "Student Programs", path: "/programs#student" },
  { name: "Adventure & Travel", path: "/programs#expeditions" },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: Facebook, name: "Facebook", url: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden pt-24 pb-12">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-120 h-120 bg-forest-light/5 rounded-full blur-[140px] z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-pop/5 rounded-full blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand & Vision Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-1 ring-white/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-forest font-heading font-black text-2xl select-none">
                  G
                </span>
              </div>
              <span className="font-heading font-black text-2xl tracking-tight">
                Greenzone <span className="text-emerald-pop">Adventures.</span>
              </span>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-10 font-medium">
              We design nature-led, experiential journeys that foster
              leadership, resilience, and meaningful personal growth.
            </p>

            {/* Social Links with Modern Styling */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-pop hover:text-forest hover:border-emerald-pop transition-all duration-500 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-xs uppercase tracking-[0.3em] text-white/30 mb-8 border-l-2 border-emerald-pop pl-4">
              Explore
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-emerald-pop text-sm font-bold tracking-wide transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-emerald-pop mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Nav */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-xs uppercase tracking-[0.3em] text-white/30 mb-8 border-l-2 border-emerald-pop pl-4">
              Programs
            </h4>
            <ul className="space-y-4">
              {experienceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-emerald-pop text-sm font-bold tracking-wide transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-emerald-pop mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Visual treatment */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h4 className="font-heading font-black text-xs uppercase tracking-[0.3em] text-emerald-pop mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-6">
                <li className="group">
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:hello@greenzone.in"
                    className="text-sm font-bold text-white/80 group-hover:text-emerald-pop transition-colors"
                  >
                    hello@greenzone.in
                  </a>
                </li>
                <li className="group">
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-bold text-white/80 group-hover:text-emerald-pop transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="group">
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-1">
                    Location
                  </p>
                  <p className="text-sm font-bold text-white/80">
                    Bengaluru, KA, India
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Redesigned */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
              © 2026 Greenzone Adventures
            </p>
            <span className="w-1 h-1 rounded-full bg-white/10 hidden md:block"></span>
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hidden md:block">
              Transformation with Intent
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/40">
            <Link
              to="/privacy"
              className="hover:text-emerald-pop transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-emerald-pop transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
