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
import FloatingBuildJourneyCTA from "../components/destinations/FloatingBuildJourneyCTA";
import BuildJourneyDrawer from "../components/destinations/BuildJourneyDrawer";
import PersonalisedJourneys from "../components/destinations/PersonalisedJourneys";
import ClimaxCTA from "../components/destinations/ClimaxCTA";

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDest, setSelectedDest] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedForJourney, setSelectedForJourney] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [journeyDuration, setJourneyDuration] = useState("");
  const [focusTags, setFocusTags] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    groupSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("drawer-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("drawer-open");
    };
  }, [isPanelOpen]);

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

  const toggleSelection = (id) => {
    setSelectedForJourney((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmitJourney = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Journey Submission:", {
        destinations: selectedForJourney,
        duration: journeyDuration,
        focus: focusTags,
        contact: formData,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetDrawer = () => {
    setIsPanelOpen(false);
    // Reset state after a delay to allow for close animation
    setTimeout(() => {
      setCurrentStep(1);
      setIsSubmitted(false);
      setSelectedForJourney([]);
      setJourneyDuration("");
      setFocusTags([]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        dates: "",
        groupSize: "",
        message: "",
      });
    }, 500);
  };

  return (
    <main className="relative bg-forest-deep text-earth overflow-x-hidden">
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isPanelOpen
            ? "scale-[0.96] blur-md opacity-40 pointer-events-none origin-center"
            : "scale-100 blur-0 opacity-100"
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

      {!isPanelOpen && (
        <FloatingBuildJourneyCTA
          onClick={() => setIsPanelOpen(true)}
          selectedCount={selectedForJourney.length}
        />
      )}

      <BuildJourneyDrawer
        isOpen={isPanelOpen}
        onClose={resetDrawer}
        currentStep={currentStep}
        onNext={handleNextStep}
        onBack={handleBackStep}
        onSubmit={handleSubmitJourney}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        selectedForJourney={selectedForJourney}
        toggleSelection={toggleSelection}
        DESTINATION_COLLECTIONS={DESTINATION_COLLECTIONS}
        journeyDuration={journeyDuration}
        setJourneyDuration={setJourneyDuration}
        focusTags={focusTags}
        setFocusTags={setFocusTags}
        formData={formData}
        setFormData={setFormData}
      />
    </main>
  );
}
