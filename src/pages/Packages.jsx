import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/layout/Hero";
import FilterBar from "../components/destinations/FilterBar";
import { PACKAGES } from "../data/packagesData";
import { JOURNEY_METADATA } from "../data/destinationsData";
import PackageCard from "../components/packages/PackageCard";

export default function Packages() {
  const [searchParams] = useSearchParams();
  const destParam = searchParams.get("dest");

  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterOptions = [
    "All",
    "1 Day",
    "2 Days",
    "3 Days",
    "Heritage",
    "Trekking",
    "Coastal",
    "Spiritual",
    "Budget Friendly",
  ];

  const filteredPackages = useMemo(() => {
    let filtered = PACKAGES;

    // If a destination param is provided, only show packages for that destination
    if (destParam) {
      filtered = filtered.filter((p) => p.destinationId === destParam);
    }

    if (activeFilter === "All") return filtered;

    return filtered.filter((pkg) => {
      const meta = JOURNEY_METADATA[pkg.destinationId] || {};
      const tags = meta.tags || [];

      if (activeFilter === "1 Day") return pkg.duration === "1 Day";
      if (activeFilter === "2 Days") return pkg.duration === "2 Days";
      if (activeFilter === "3 Days")
        return pkg.duration === "3 Days" || pkg.duration === "3–4 Days";
      if (activeFilter === "Heritage")
        return tags.includes("Heritage") || tags.includes("Architectural");
      if (activeFilter === "Trekking") return tags.includes("Trek Intensive");
      if (activeFilter === "Coastal")
        return tags.includes("Coastal") || tags.includes("Aqua Immersion");
      if (activeFilter === "Spiritual") return tags.includes("Spiritual");
      if (activeFilter === "Budget Friendly")
        return parseInt(pkg.price.replace(/[^0-9]/g, "")) < 5000;

      return false;
    });
  }, [activeFilter, destParam]);

  return (
    <main className="bg-white">
      <Hero
        size="compact"
        bgImage="https://images.unsplash.com/photo-1608973557237-4ab537f2cd5a?q=80&w=1600&auto=format&fit=crop"
        eyebrow="Curated Group Experiences"
        title="Tour Packages Across Karnataka"
        description="Fixed departures and curated group experiences with transparent pricing. Explore the heart of the land with expert guidance and seamless logistics."
      />

      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterOptions={filterOptions}
      />

      <section className="py-24 bg-forest/2 border-t border-forest/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {filteredPackages.map((pkg, idx) => (
                <PackageCard key={idx} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-forest-deep/5 rounded-[3rem] border border-dashed border-forest/10">
              <h3 className="text-2xl font-black text-forest/40 mb-2 font-heading tracking-tight">
                No packages found
              </h3>
              <p className="text-forest/30 font-medium">
                Try selecting a different filter or check back later.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-6 text-accent-gold font-black uppercase tracking-widest text-xs hover:underline"
              >
                Show all packages
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
