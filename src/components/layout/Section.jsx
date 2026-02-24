/**
 * SECTION COMPONENT
 * Standardized for the locked design system.
 */

const variants = {
  default: "bg-transparent",
  mist: "bg-mist text-forest",
  earth: "bg-earth text-forest",
  forest: "bg-forest-deep text-earth",
  dark: "bg-forest-deep text-white",
};

const paddings = {
  xs: "pt-24 sm:pt-14 md:pt-20",
  sm: "pt-32 sm:pt-20 md:pt-28",
  md: "pt-40 sm:pt-28 md:pt-40",
  lg: "pt-48 sm:pt-40 md:pt-56",
  none: "py-0",
};

const widths = {
  narrow: "max-w-4xl",
  standard: "max-w-7xl",
  wide: "max-w-8xl",
  full: "w-full",
};

import SectionHeading from "../ui/SectionHeading";

// ... existing imports/variants ...

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
  snap = true,
}) {
  return (
    <section
      id={id}
      className={`${snap ? "scroll-snap-section" : ""} relative transition-colors duration-1000 ${paddings[padding]} ${variants[variant]} ${className}`}
    >
      {/* Premium Texture Layer for light variants */}
      {(variant === "mist" || variant === "earth") && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] overflow-hidden" />
      )}
      <div className={`${widths[width]} mx-auto px-4 sm:px-12 relative z-10`}>
        {(title || subtitle) && (
          <SectionHeading
            title={title}
            subtitle={subtitle}
            subtitleIcon={subtitleIcon}
            variant={variant}
            center={center}
          />
        )}
        {children}
      </div>
    </section>
  );
}
