import { useEffect, useState, useMemo } from "react";
import {
  DESTINATION_COLLECTIONS,
  JOURNEY_METADATA,
} from "../data/destinationsData";

// Components
import HeroSection from "../components/destinations/HeroSection";
import FilterBar from "../components/destinations/FilterBar";
import DestinationSection from "../components/destinations/DestinationSection";
import DestinationPreviewModal from "../components/destinations/DestinationPreviewModal";
import BuildJourneyDrawer from "../components/destinations/BuildJourneyDrawer";
import PersonalisedJourneys from "../components/destinations/PersonalisedJourneys";
import ClimaxCTA from "../components/destinations/ClimaxCTA";
import { useJourney } from "../hooks/useJourney";

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
        <HeroSection />

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
        <ClimaxCTA />
      </div>

      <DestinationPreviewModal
        selectedDest={selectedDest}
        onClose={() => setSelectedDest(null)}
        JOURNEY_METADATA={JOURNEY_METADATA}
      />
    </main>
  );
}
