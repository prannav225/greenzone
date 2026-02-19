export default function TravelStep({ number, title, description }) {
  return (
    <div className="relative group text-center lg:text-left">
      {/* Step Number Dot */}
      <div className="relative z-20 flex justify-center lg:justify-start mb-8">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-forest-deep border border-white/10 flex items-center justify-center shadow-premium transition-all duration-500 group-hover:border-accent-gold/50 group-hover:shadow-gold/20">
          <span className="text-xs font-black text-accent-gold tracking-widest">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl lg:text-3xl font-heading font-black text-white tracking-tighter transition-colors group-hover:text-accent-gold">
          {title}
        </h3>
        <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-xs mx-auto lg:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
}
