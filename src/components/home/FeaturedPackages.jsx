import React from "react";
import { ArrowRight, Star } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { PACKAGES } from "../../data/packagesData";
import PackageCard from "../packages/PackageCard";

export default function FeaturedPackages({ id }) {
  // Only show the first 6 featured packages on home
  const featured = PACKAGES.slice(0, 6);

  return (
    <section
      id={id}
      className="py-12 sm:py-24 bg-mist border-y border-forest/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 text-forest/60 text-[10px] font-black uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 text-accent-gold fill-accent-gold" />
            Curated For You
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-forest mb-6 tracking-tight">
            Our Featured{" "}
            <span className="text-accent-gold italic">Journeys.</span>
          </h2>
          <p className="text-lg text-forest/50 max-w-2xl mx-auto font-medium">
            Meticulously planned itineraries designed for meaningful exploration
            and effortless comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featured.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <PrimaryButton to="/packages" variant="primary" className="group">
            View All Tour Packages
            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
