import { ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { optimizeImage } from "../../utils/image-optimization";

export default function FinalCTA({
  variant = "forest", // forest, sky-mist, charcoal
  title,
  description,
  icon: Icon,
  bgImage,
  imageOpacity = "opacity-40",
  buttons = [],
  showPartners = false,
  className = "",
}) {
  const isDark = variant === "forest" || variant === "charcoal";

  return (
    <section
      className={`relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center text-center py-12 sm:py-16 lg:py-20 overflow-hidden ${
        variant === "forest"
          ? "bg-forest"
          : variant === "charcoal"
            ? "bg-charcoal"
            : "bg-sky-mist"
      } ${className}`}
    >
      {/* Background Layer */}
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={optimizeImage(bgImage)}
            className={`w-full h-full object-cover ${imageOpacity} animate-slow-zoom`}
            alt="CTA Background"
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-linear-to-b ${
              variant === "forest"
                ? "from-forest/30 via-forest/70 to-forest"
                : variant === "charcoal"
                  ? "from-charcoal/30 via-charcoal/70 to-charcoal"
                  : "from-sky-mist/20 via-sky-mist/60 to-white"
            }`}
          />
        </div>
      )}

      {/* Grid Overlay for Sky-Mist variant */}
      {variant === "sky-mist" && !bgImage && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-6 px-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border-r border-forest/20 h-full last:border-r-0"
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        {/* Animated Icon */}
        {Icon && (
          <div
            className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-card mb-8 sm:mb-10 shadow-premium animate-float ${
              isDark ? "bg-white text-forest" : "bg-forest text-white"
            }`}
          >
            <Icon
              className={`w-10 h-10 ${isDark ? "text-accent-gold" : "text-accent-gold"}`}
            />
          </div>
        )}

        {/* Heading */}
        <h2
          className={`text-hero font-heading font-black mb-4 sm:mb-6 px-4 sm:px-0 ${
            isDark ? "text-white" : "text-forest"
          }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto leading-tight px-6 sm:px-0 ${
            isDark ? "text-white/60" : "text-forest/60"
          }`}
        >
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {buttons.map((btn, idx) => {
            const IconComp = btn.icon || (idx === 0 ? ArrowRight : null);
            return (
              <PrimaryButton
                key={idx}
                to={btn.to}
                variant={btn.variant || (isDark ? "primary" : "primary")}
                size="lg"
                className="group w-full sm:w-auto"
              >
                {btn.label}
                {IconComp && (
                  <IconComp className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                )}
              </PrimaryButton>
            );
          })}
        </div>

        {/* Trust Indicator / Partners (Optional) */}
        {showPartners && (
          <div className="mt-24 pt-16 border-t border-white/10 opacity-40">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 mb-12">
              Strategic Partners In Transformation
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["CORPORATE", "ACADEMY", "VENTURES", "GLOBAL"].map((name) => (
                <div
                  key={name}
                  className="text-xl md:text-2xl font-heading font-black text-white tracking-[0.2em] italic opacity-50"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
