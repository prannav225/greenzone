import { ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

export default function Hero({
  bgImage,
  overlayGradient = "bg-linear-to-b from-forest-deep via-forest-deep/60 to-forest-deep",
  eyebrow,
  title,
  description,
  primaryButton, // { to, label, variant, size }
  showScrollIndicator = false,
  className = "",
  children,
}) {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-forest-deep ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Hero Background"
          fetchPriority="high"
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
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-8 sm:mb-10 animate-fade-in-up">
            {title}
          </div>
        )}

        {description && (
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-medium leading-relaxed animate-fade-in-up animate-delay-200 px-4 sm:px-0 mb-10">
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
