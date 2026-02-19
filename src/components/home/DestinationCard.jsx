import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { optimizeImage } from "../../utils/image-optimization";

export default function DestinationCard({ name, subtitle, image, link }) {
  return (
    <Link
      to={link}
      className="group relative h-96 rounded-3xl overflow-hidden border border-white/10"
    >
      <img
        src={optimizeImage(image)}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/20 to-transparent" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-eyebrow text-accent-gold text-[10px] mb-2 uppercase tracking-widest">
          {subtitle}
        </span>
        <h3 className="text-3xl font-heading font-black text-white tracking-widest uppercase mb-1">
          {name}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-black uppercase tracking-widest opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Explore Journey <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
