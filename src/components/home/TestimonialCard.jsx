import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col justify-between group hover:bg-white/10 transition-all duration-500">
      <Quote className="w-10 h-10 text-accent-gold/10 absolute top-8 right-8 group-hover:text-accent-gold/20 transition-colors" />
      <p className="text-white/80 text-lg leading-relaxed italic mb-8 relative z-10 transition-colors group-hover:text-white">
        "{quote}"
      </p>
      <div>
        <div className="h-px w-8 bg-accent-gold mb-4 transition-all group-hover:w-12" />
        <h4 className="text-white font-heading font-black text-xl tracking-tighter">
          {author}
        </h4>
        <span className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">
          {role}
        </span>
      </div>
    </div>
  );
}
