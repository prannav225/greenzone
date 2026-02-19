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
import BuildJourneyDrawer from "../components/destinations/BuildJourneyDrawer";
import PersonalisedJourneys from "../components/destinations/PersonalisedJourneys";
import { useJourney } from "../hooks/useJourney";
import { Compass, Sparkles, ArrowRight } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Destinations() {
  const { isPanelOpen, selectedForJourney, toggleSelection } = useJourney();

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDest, setSelectedDest] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <main className="relative bg-forest-deep text-earth">
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isPanelOpen
            ? "blur-md opacity-40 pointer-events-none origin-center"
            : "blur-0 opacity-100"
        }`}
      >
        <Hero
          size="compact"
          bgImage="https://images.unsplash.com/photo-1608973557237-4ab537f2cd5a?q=80&w=1600&auto=format&fit=crop"
          className="scroll-snap-section"
          eyebrow={
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Geographies</span>
            </div>
          }
          title={
            <>
              Travel That <br />
              <span
                className="italic animate-text-shimmer"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-gold), white, var(--color-accent-gold))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Transforms.
              </span>
            </>
          }
          description="Every destination is a deliberate choice—an architectural masterpiece of geography engineered to shift your perspective and reveal your authentic edge."
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 animate-fade-in-up animate-delay-300">
            <PrimaryButton to="/contact" size="lg">
              Explore Journeys
            </PrimaryButton>
            <PrimaryButton to="/contact" variant="secondary" size="lg">
              Build My Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>
          </div>
        </Hero>

        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterOptions={filterOptions}
        />

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
                onSelectJourney={() => toggleSelection(dest.id)}
                isSelected={selectedForJourney.includes(dest.id)}
              />
            )),
          )}
        </div>

        <PersonalisedJourneys />
        <FinalCTA
          bgImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
          icon={Compass}
          title={
            <>
              Your Boundary <br />
              <span className="italic text-accent-gold drop-shadow-glow">
                Awaits.
              </span>
            </>
          }
          description="The map is not the territory. The only way to understand the edge is to stand upon it. Connect with our curators to begin your transformation."
          buttons={[{ to: "/contact#inquiry", label: "Plan Your Expedition" }]}
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
