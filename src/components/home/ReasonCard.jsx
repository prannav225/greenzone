export default function ReasonCard({ icon, title, desc }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-accent-gold/40 hover:-translate-y-2 flex flex-col items-start shadow-premium">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-accent-gold/10 transition-colors duration-700" />

      <div className="w-14 h-14 rounded-2xl bg-forest-deep border border-white/10 text-accent-gold flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-accent-gold/50 group-hover:shadow-gold/20">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-4 tracking-tighter leading-tight transition-colors duration-500 group-hover:text-accent-gold">
        {title}
      </h3>
      <p className="text-white/60 font-medium text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">
        {desc}
      </p>
    </div>
  );
}
