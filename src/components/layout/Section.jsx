/**
 * SECTION COMPONENT
 * Standardized for the locked design system.
 */

const variants = {
  default: "bg-transparent",
  mist: "bg-earth-light/50",
  earth: "bg-earth",
  forest: "bg-forest-deep text-earth",
  dark: "bg-forest-deep text-white",
};

const paddings = {
  xs: "py-12 sm:py-16 md:py-24",
  sm: "py-16 sm:py-24 md:py-32",
  md: "py-24 sm:py-32 md:py-48",
  lg: "py-32 sm:py-48 md:py-64",
  none: "py-0",
};

const widths = {
  narrow: "max-w-4xl",
  standard: "max-w-7xl",
  wide: "max-w-8xl",
  full: "w-full",
};

export default function Section({
  children,
  variant = "default",
  padding = "md",
  width = "standard",
  className = "",
  id,
  title,
  subtitle,
  subtitleIcon,
  center = false,
}) {
  return (
    <section
      id={id}
      className={`scroll-snap-section relative overflow-hidden transition-colors duration-1000 ${paddings[padding]} ${variants[variant]} ${className}`}
    >
      <div className={`${widths[width]} mx-auto px-6 sm:px-12 relative z-10`}>
        {(title || subtitle) && (
          <div
            className={`flex flex-col ${center ? "items-center text-center mx-auto" : "items-start"} max-w-4xl mb-16 md:mb-24`}
          >
            {subtitle && (
              <div
                className={`flex items-center gap-3 px-4 py-1.5 rounded-full shadow-2xl transition-all duration-500 mb-8 border border-white/10 ${
                  variant === "forest" || variant === "dark"
                    ? "bg-white/5 text-accent-gold"
                    : "bg-forest text-accent-gold"
                }`}
              >
                {subtitleIcon && (
                  <span className="w-4 h-4">{subtitleIcon}</span>
                )}
                <span className="text-eyebrow">{subtitle}</span>
              </div>
            )}
            {title && (
              <h2 className="text-section-title leading-[1.05] tracking-tighter drop-shadow-premium">
                {title}
              </h2>
            )}

            {/* Standardized Title Divider */}
            <div
              className={`mt-10 h-1 w-24 rounded-full bg-accent-gold/20 ${center ? "mx-auto" : ""}`}
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
