export default function FounderCard({ image, name, role, tagline, points }) {
  return (
    <div className="group flex flex-col h-full bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-accent-gold/20 hover:shadow-premium transition-all duration-700">
      {/* Founder Image Card */}
      <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-10 shadow-lg transition-all duration-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
          <span className="text-eyebrow text-accent-gold block mb-2 text-[10px]">
            {role}
          </span>
          <h3 className="text-2xl lg:text-3xl font-heading font-black text-white tracking-tighter leading-none">
            {name}
          </h3>
        </div>
      </div>

      {/* Founder Details */}
      <div className="flex-1 space-y-6 px-2 pb-4">
        <p className="text-white/60 font-black uppercase text-[10px] tracking-widest italic">
          {tagline}
        </p>
        <div className="h-px w-8 bg-accent-gold" />
        <ul className="space-y-4">
          {points.map((pt, j) => (
            <li key={j} className="flex gap-4 group/item">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-accent-gold group-hover/item:scale-150 transition-transform duration-300" />
              <span className="text-white/70 text-sm leading-relaxed font-medium group-hover/item:text-white transition-colors">
                {pt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
