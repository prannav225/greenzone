import { Link } from "react-router-dom";

/**
 * PRIMARY BUTTON COMPONENT
 * Standardized for the locked design system.
 */
const variants = {
  primary: "bg-accent-gold text-forest hover:shadow-gold",
  secondary:
    "bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/40 shadow-premium",
  outline:
    "bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-forest",
  dark: "bg-forest-deep text-white border border-white/10 hover:bg-forest hover:border-white/20",
  white: "bg-white text-forest shadow-premium hover:shadow-2xl",
};

const sizes = {
  xs: "px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em]",
  sm: "px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em]",
  md: "px-10 py-4 text-[11px] font-black uppercase tracking-widest",
  lg: "px-14 py-5 text-xs font-black uppercase tracking-[0.3em]",
};

export default function PrimaryButton({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    rounded-full transition-all duration-500
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-accent-gold/50
    overflow-hidden group/btn
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  // Content helper to avoid "component in render" error
  const renderContent = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Cinematic Shimmer Overlay */}
      <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 opacity-20 pointer-events-none" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {renderContent()}
    </button>
  );
}
