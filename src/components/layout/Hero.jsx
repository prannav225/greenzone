import { ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

const optimizeImage = (url) => {
  if (!url) return url;
  if (typeof url !== "string") return url;
  if (url.includes("images.unsplash.com")) {
    if (url.includes("?")) {
      return url
        .replace(/w=\d+/, "w=1600")
        .replace(/q=\d+/, "q=75")
        .replace(/auto=[^&]+/, "auto=format");
    }
    return `${url}?auto=format&fit=crop&q=75&w=1600`;
  }
  return url;
};

export default function Hero({
  bgImage,
  overlayGradient = "bg-linear-to-b from-forest-deep via-forest-deep/60 to-forest-deep",
  eyebrow,
  title,
  description,
  primaryButton, // { to, label, variant, size }
  showScrollIndicator = false,
  className = "",
  priority = false, // Set to true for the first section of a page
  children,
}) {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-forest-deep ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={optimizeImage(bgImage)}
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Hero Background"
          fetchPriority={priority ? "high" : "low"}
          loading={priority ? "eager" : "lazy"}
        />
        <div className={`absolute inset-0 ${overlayGradient}`} />
        <div className="absolute inset-0 opacity-20 atmospheric-noise"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-10 animate-fade-in text-accent-gold shadow-2xl">
            {eyebrow}
          </div>
        )}

        {title && (
          <h1 className="text-hero text-white mb-8 sm:mb-10 animate-fade-in-up">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-description text-white/70 max-w-4xl mx-auto animate-fade-in-up animate-delay-200 px-4 sm:px-0 mb-10">
            {description}
          </p>
        )}

        {primaryButton && (
          <div className="animate-fade-in-up animate-delay-300">
            <PrimaryButton
              to={primaryButton.to}
              variant={primaryButton.variant || "primary"}
              size={primaryButton.size || "lg"}
            >
              <span>{primaryButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </div>
        )}

        {children}
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-accent-gold to-transparent animate-scroll-down"></div>
        </div>
      )}
    </section>
  );
}
