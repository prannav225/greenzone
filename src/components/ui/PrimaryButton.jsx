import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-forest text-white hover:bg-forest/90 shadow-lg hover:shadow-forest/20",
  secondary:
    "bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-white",
  amber:
    "bg-amber text-charcoal hover:bg-amber/90 shadow-lg hover:shadow-amber/20",
  emerald:
    "bg-emerald-pop text-forest hover:bg-emerald-pop/90 shadow-lg hover:shadow-emerald-pop/20",
  white: "bg-white text-forest hover:bg-white/90 shadow-lg",
  outline:
    "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
};

const sizes = {
  xs: "px-3 py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-widest",
  sm: "px-4 py-2 text-[10px] sm:text-sm font-bold uppercase tracking-widest",
  md: "px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-bold uppercase tracking-widest",
  lg: "px-6 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-lg font-bold uppercase tracking-widest",
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
    hover:-translate-y-1 active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-forest/50 focus:ring-offset-2
    overflow-hidden group/btn
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <div className="inline-flex">
      {to ? (
        <Link to={to} className={baseStyles} {...props}>
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
        </Link>
      ) : href ? (
        <a href={href} className={baseStyles} {...props}>
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
        </a>
      ) : (
        <button className={baseStyles} {...props}>
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
        </button>
      )}
    </div>
  );
}
