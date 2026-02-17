export default function SectionHeading({
  title,
  subtitle,
  subtitleIcon,
  variant = "green", // or "forest", "dark", "light"
  center = false,
  className = "",
}) {
  const isDark = variant === "forest" || variant === "dark";

  return (
    <div
      className={`flex flex-col ${center ? "items-center text-center mx-auto" : "items-start"} max-w-4xl mb-16 md:mb-24 ${className}`}
    >
      {subtitle && (
        <div
          className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full shadow-2xl transition-all duration-500 mb-8 border border-white/10 ${
            isDark
              ? "bg-white/5 text-accent-gold"
              : "bg-forest text-accent-gold"
          }`}
        >
          {subtitleIcon && (
            <div className="flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
              {subtitleIcon}
            </div>
          )}
          <span className="text-eyebrow translate-y-[0.5px]">{subtitle}</span>
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
  );
}
