import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = "glass", // "glass" | "paper" | "outline"
  layout = "vertical", // "vertical" | "horizontal"
  accentColor = "text-accent-gold",
  iconBgColor,
  action, // { label: string, to: string } or onClick
  className = "",
  children, // for custom content like lists
}) {
  const baseStyles =
    "group relative transition-all duration-500 rounded-card overflow-hidden";

  const variants = {
    glass:
      "bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-premium",
    paper:
      "bg-white border border-forest/5 shadow-premium hover:shadow-2xl hover:-translate-y-0.5",
    outline:
      "bg-transparent border border-white/10 hover:border-accent-gold/30",
  };

  const layoutStyles = {
    vertical: "flex flex-col items-start p-8 md:p-10",
    horizontal: "flex items-center gap-5 p-6",
  };

  const content = (
    <>
      {Icon && (
        <div
          className={`shrink-0 ${layout === "horizontal" ? "w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform" : "mb-6"}`}
        >
          {layout === "horizontal" ? (
            <div
              className={`w-full h-full flex items-center justify-center rounded-lg ${iconBgColor || "bg-forest-deep"}`}
            >
              <Icon className={`w-4 h-4 ${accentColor}`} />
            </div>
          ) : (
            <Icon
              className={`w-10 h-10 ${accentColor} group-hover:scale-110 transition-transform duration-500`}
            />
          )}
        </div>
      )}

      <div className="flex-1">
        {title && (
          <h3
            className={`font-black tracking-tight mb-2 ${variant === "paper" ? "text-forest text-sm uppercase tracking-[0.05em]" : "text-white text-lg"}`}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className={`font-medium leading-relaxed ${variant === "paper" ? "text-forest/50 text-xs" : "text-white/70 text-sm"}`}
          >
            {description}
          </p>
        )}
        {children}

        {action && (
          <div
            className={`mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest ${accentColor} group-hover:gap-3 transition-all`}
          >
            <span>{action.label}</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        )}
      </div>

      {className.includes("number-card") && (
        <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/3 group-hover:text-accent-gold/5 transition-colors pointer-events-none select-none">
          {className.match(/num-(\d+)/)?.[1] || ""}
        </div>
      )}
    </>
  );

  if (action?.to) {
    return (
      <Link
        to={action.to}
        className={`${baseStyles} ${variants[variant]} ${layoutStyles[layout]} ${className} block`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${layoutStyles[layout]} ${className}`}
    >
      {content}
    </div>
  );
}
