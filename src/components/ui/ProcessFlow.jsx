export default function ProcessFlow({
  steps,
  variant = "grid", // "grid" | "timeline" (future)
  className = "",
}) {
  if (variant === "grid") {
    return (
      <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="group/flow relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-gold/20 transition-all duration-700 overflow-hidden flex flex-col items-center text-center shadow-2xl"
          >
            {item.img && (
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover/flow:scale-110 group-hover/flow:opacity-20 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-b from-forest-deep via-forest-deep/80 to-forest-deep" />
              </div>
            )}

            <div className="relative z-10 flex flex-col items-center">
              {item.step && (
                <div className="text-accent-gold font-black italic text-4xl mb-6 opacity-40 group-hover/flow:opacity-100 group-hover/flow:scale-110 transition-all">
                  {item.step}
                </div>
              )}

              {item.icon && (
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold mb-8 shadow-2xl group-hover/flow:bg-accent-gold group-hover/flow:text-forest transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
              )}

              <h3 className="text-xl font-heading font-black text-white mb-4 tracking-tight group-hover/flow:text-accent-gold transition-colors">
                {item.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
