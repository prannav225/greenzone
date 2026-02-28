import { useEffect, useState, useMemo } from "react";
import {
  DESTINATION_COLLECTIONS,
  JOURNEY_METADATA,
} from "../data/destinationsData";

// Components
import Hero from "../components/layout/Hero";
import FinalCTA from "../components/layout/FinalCTA";
import FilterBar from "../components/destinations/FilterBar";
import DestinationSection from "../components/destinations/DestinationSection";
import DestinationPreviewModal from "../components/destinations/DestinationPreviewModal";
import PersonalisedJourneys from "../components/destinations/PersonalisedJourneys";

import { useJourney } from "../hooks/useJourney";
import { Compass, Sparkles, ArrowRight } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Destinations() {
  const { primaryDestination, selectPrimaryDestination, openJourneyBuilder } =
    useJourney();

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDest, setSelectedDest] = useState(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Non-journey related logic (filterOptions, filteredCollections) remains...
  const filterOptions = [
    "All",
    "Heritage",
    "Trekking",
    "Coastal",
    "Spiritual",
    "1-Day Circuits",
  ];

  const filteredCollections = useMemo(() => {
    if (activeFilter === "All") return DESTINATION_COLLECTIONS;

    return DESTINATION_COLLECTIONS.map((collection) => ({
      ...collection,
      destinations: collection.destinations.filter((dest) => {
        const meta = JOURNEY_METADATA[dest.id] || {};
        const tags = meta.tags || [];
        const isOneDay =
          meta.duration?.includes("1 Day") ||
          meta.duration?.includes("1–2 Days");

        if (activeFilter === "Heritage")
          return collection.category.includes("Heritage");
        if (activeFilter === "Trekking")
          return collection.category.includes("Mountain");
        if (activeFilter === "Coastal")
          return collection.category.includes("Coastal");
        if (activeFilter === "Spiritual")
          return collection.category.includes("Spiritual");
        if (activeFilter === "1-Day Circuits") return isOneDay;
        return tags.includes(activeFilter);
      }),
    })).filter((collection) => collection.destinations.length > 0);
  }, [activeFilter]);

  return (
    <main className="relative bg-forest-deep text-earth overflow-x-hidden">
      <div className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <Hero
          size="compact"
          bgImage="https://images.unsplash.com/photo-1608973557237-4ab537f2cd5a?q=80&w=1600&auto=format&fit=crop"
          eyebrow={
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Geographies</span>
            </div>
          }
          title="Explore Destinations Across Karnataka"
          description="Every destination is a deliberate choice—an architectural masterpiece of geography engineered to shift your perspective and reveal your authentic edge."
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 animate-fade-in-up animate-delay-300">
            <PrimaryButton
              onClick={() => {
                document
                  .getElementById("destinations-content")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
            >
              Explore Journeys
            </PrimaryButton>
          </div>
        </Hero>

        {/* Unified Action Bar (Optimized for Small Screens) */}
        <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:bottom-8 left-1/2 -translate-x-1/2 z-100 transition-all duration-700 w-full max-w-fit px-4 sm:px-6">
          <PrimaryButton
            onClick={openJourneyBuilder}
            variant="secondary"
            size="lg"
            className="shadow-glow-large border-2 border-accent-gold/20 backdrop-blur-md text-accent-gold sm:px-14 px-8 py-3.5 sm:py-5"
          >
            <Sparkles className="w-3 h-3 animate-pulse text-accent-gold shrink-0" />
            <span className="text-[9px] sm:text-xs">Design a custom Trip</span>
            <ArrowRight className="w-3 h-3 text-accent-gold shrink-0" />
          </PrimaryButton>
        </div>

        <div id="destinations-content">
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            filterOptions={filterOptions}
          />
        </div>

        {/* SIGNATURE DESTINATIONS */}
        <div className="relative z-10 bg-forest-deep">
          {filteredCollections.map((collection) =>
            collection.destinations.map((dest, idx) => (
              <DestinationSection
                key={dest.id}
                dest={dest}
                collection={collection}
                idx={idx}
                meta={JOURNEY_METADATA[dest.id] || {}}
                onPreview={setSelectedDest}
                onSelectJourney={() => selectPrimaryDestination(dest.id)}
                isSelected={primaryDestination === dest.id}
              />
            )),
          )}
        </div>

        <PersonalisedJourneys />
        <FinalCTA
          bgImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
          icon={Compass}
          title="Ready to Experience This Destination?"
          description="The map is not the territory. The only way to understand the edge is to stand upon it. Connect with our curators to begin your transformation."
          buttons={[
            {
              label: "View Available Packages",
              to: "/packages",
              variant: "primary",
            },
            {
              label: "Plan Custom Trip",
              to: "/plan-your-trip",
              variant: "secondary",
            },
          ]}
        />
      </div>

      <DestinationPreviewModal
        selectedDest={selectedDest}
        onClose={() => setSelectedDest(null)}
        JOURNEY_METADATA={JOURNEY_METADATA}
      />
    </main>
  );
}
