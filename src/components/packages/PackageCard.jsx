import React from "react";
import { Clock, MapPin, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

export default function PackageCard({ pkg }) {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-forest/20 transition-all duration-700 shadow-2xl hover:-translate-y-1">
      {/* Image & Tag */}
      <div className="relative h-44 sm:h-72 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Floating Tag */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[7px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-forest shadow-xl">
            {pkg.tag || "CURATED"}
          </span>
        </div>

        {/* Price Label Overlay */}
        <div className="absolute bottom-3 left-4 sm:bottom-6 sm:left-8 z-20">
          <p className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-0">
            Starting Price
          </p>
          <p className="text-xl sm:text-3xl font-black text-accent-gold drop-shadow-lg scale-90 sm:scale-100 origin-left">
            {pkg.price}
          </p>
        </div>

        {/* Dark Overlay for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-10 flex flex-col flex-1 bg-white">
        <div className="flex items-center gap-1.5 text-forest/30 text-[7px] sm:text-[9px] font-black uppercase tracking-[0.25em] mb-1 sm:mb-4">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent-gold/60" />
          <span>{pkg.duration}</span>
          <span className="text-forest/10 mx-0.5">•</span>
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent-gold/60" />
          <span className="truncate max-w-[100px] sm:max-w-none">
            {pkg.destinationId?.replace(/-/g, " ")}
          </span>
        </div>

        <h3 className="text-lg sm:text-2xl font-heading font-black text-forest mb-2 sm:mb-6 leading-tight tracking-tight min-h-12 sm:min-h-14 line-clamp-2">
          {pkg.name}
        </h3>

        <ul className="space-y-1.5 sm:space-y-3.5 mb-4 sm:mb-10 flex-1">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-[11px] sm:text-sm font-semibold text-forest/50"
            >
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent-gold shrink-0" />
              <span className="line-clamp-1">{h}</span>
            </li>
          ))}
        </ul>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-3 sm:pt-6 border-t border-forest/5">
          <Link
            to={`/packages/${pkg.destinationId}`}
            className="group/btn flex items-center gap-1.5 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-forest transition-all"
          >
            <span className="relative">
              Details
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold transition-all group-hover/btn:w-full" />
            </span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-gold transition-transform group-hover/btn:translate-x-1" />
          </Link>

          <PrimaryButton
            href={`https://wa.me/917019971407?text=${encodeURIComponent(
              `Hello Greenzone Adventures! I'm interested in the *${pkg.name}* (${pkg.duration}) experience. Could you please share more details or help me with the booking?`,
            )}`}
            target="_blank"
            className="px-5! sm:px-8! py-2! sm:py-3! bg-accent-gold! border-accent-gold! text-forest-deep! shadow-md hover:shadow-gold transition-all"
          >
            <span className="text-[8px] sm:text-[10px] font-black tracking-widest uppercase">
              Book Experience
            </span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
