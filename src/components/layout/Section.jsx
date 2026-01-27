const variants = {
  default: "bg-transparent",
  mist: "bg-sky-mist",
  sand: "bg-earth-sand",
  forest: "bg-forest text-white",
  charcoal: "bg-charcoal text-white",
};

const paddings = {
  xs: "py-12 md:py-16 lg:py-20",
  sm: "py-16 md:py-24 lg:py-32",
  md: "py-24 md:py-32 lg:py-40",
  lg: "py-32 md:py-40 lg:py-48",
  none: "py-0",
};

const widths = {
  narrow: "max-w-5xl",
  standard: "max-w-7xl",
  wide: "max-w-8xl",
  full: "max-width-none",
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
      className={`${paddings[padding]} ${variants[variant]} ${className} relative overflow-hidden`}
    >
      <div className={`${widths[width]} mx-auto px-6 lg:px-8 relative z-10`}>
        {(title || subtitle) && (
          <div
            className={`${center ? "text-center mx-auto" : ""} max-w-4xl mb-16 lg:mb-24`}
          >
            {subtitle && (
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm ${
                  variant === "forest" || variant === "charcoal"
                    ? "bg-white/10 text-emerald-pop"
                    : "bg-forest text-emerald-pop"
                }`}
              >
                {subtitleIcon && subtitleIcon}
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[0.85] mb-8">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
