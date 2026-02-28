import React, { useEffect, useState, useRef } from "react";
import { toPng } from "html-to-image";
import {
  Compass,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Check,
  Calendar,
  Users,
  Utensils,
  MapPin,
  Clock,
  Globe,
  Star,
  Zap,
  Bus,
  Home,
  Hotel,
  IndianRupee,
  LayoutList,
  ChevronDown,
  Download,
} from "lucide-react";
import { useJourney } from "../hooks/useJourney";
import { DESTINATION_COLLECTIONS } from "../data/destinationsData";

import SummaryContent from "../components/tour/SummaryContent";
import WizardHeader from "../components/tour/WizardHeader";
import {
  DestinationStep,
  HighlightsStep,
} from "../components/tour/StepComponents";
import DateStep from "../components/tour/DateStep";
import DetailsStep from "../components/tour/DetailsStep";
import SuccessScreen from "../components/tour/SuccessScreen";
import PrimaryButton from "../components/ui/PrimaryButton";

const STEPS = [
  { id: 1, title: "Region", icon: <MapPin className="w-4 h-4" /> },
  { id: 2, title: "Spots", icon: <Compass className="w-4 h-4" /> },
  { id: 3, title: "Dates", icon: <Calendar className="w-4 h-4" /> },
  { id: 4, title: "Details", icon: <Users className="w-4 h-4" /> },
];

export default function PersonalizedTour() {
  const {
    currentStep,
    handleNextStep,
    handleBackStep,
    handleSubmitJourney,
    isSubmitting,
    isSubmitted,
    primaryDestination,
    selectPrimaryDestination,
    selectedHighlights,
    toggleHighlight,
    journeyDuration,
    setJourneyDuration,
    formData,
    setFormData,
    resetJourney,
  } = useJourney();

  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const summaryRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleDownload = async () => {
    if (!summaryRef.current) return;

    try {
      const originalStyle = summaryRef.current.style.cssText;
      summaryRef.current.style.width = "450px";
      summaryRef.current.style.height = "auto";
      summaryRef.current.style.background = "#0c1a16";
      summaryRef.current.style.borderRadius = "48px";

      await new Promise((res) => setTimeout(res, 300));

      const dataUrl = await toPng(summaryRef.current, {
        cacheBust: true,
        backgroundColor: "#0c1a16",
        pixelRatio: 2,
        skipFonts: true,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
        },
      });

      summaryRef.current.style.cssText = originalStyle;

      const link = document.createElement("a");
      link.download = `Greenzone-Voyage-${formData.name || "Bespoke"}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const handleFinalSubmission = async () => {
    // 1. Trigger Download
    await handleDownload();
    // 2. Submit Journey
    handleSubmitJourney();
  };

  const allDestinations = DESTINATION_COLLECTIONS.flatMap(
    (c) => c.destinations,
  );
  const selectedDestObj = allDestinations.find(
    (d) => d.id === primaryDestination,
  );

  if (isSubmitted) {
    return <SuccessScreen resetJourney={resetJourney} />;
  }

  return (
    <div className="min-h-screen pt-24 bg-forest-deep pb-32 lg:pb-24 relative overflow-x-hidden">
      <WizardHeader currentStep={currentStep} STEPS={STEPS} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* LEFT COLUMN: WIZARD */}
          <div className="lg:col-span-8 space-y-12">
            {/* Wizard Content */}
            <div className="min-h-[400px]">
              {currentStep === 1 && (
                <DestinationStep
                  allDestinations={allDestinations}
                  primaryDestination={primaryDestination}
                  selectPrimaryDestination={selectPrimaryDestination}
                />
              )}

              {currentStep === 2 && (
                <HighlightsStep
                  selectedDestObj={selectedDestObj}
                  selectedHighlights={selectedHighlights}
                  toggleHighlight={toggleHighlight}
                />
              )}

              {currentStep === 3 && (
                <DateStep
                  formData={formData}
                  setFormData={setFormData}
                  setJourneyDuration={setJourneyDuration}
                  journeyDuration={journeyDuration}
                />
              )}

              {currentStep === 4 && (
                <DetailsStep formData={formData} setFormData={setFormData} />
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SUMMARY (DESKTOP) */}
          <div className="hidden lg:block lg:col-span-4 self-start sticky top-40">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl max-h-[calc(100vh-280px)] overflow-y-auto scrollbar-hide">
              <SummaryContent
                selectedDestObj={selectedDestObj}
                selectedHighlights={selectedHighlights}
                journeyDuration={journeyDuration}
                formData={formData}
                setIsSummaryExpanded={setIsSummaryExpanded}
                summaryRef={summaryRef}
                handleDownload={handleDownload}
                layout="desktop"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile Summary Drawer */}
      {isSummaryExpanded && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-forest-deep/90 backdrop-blur-sm"
            onClick={() => setIsSummaryExpanded(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto bg-forest-deep border-t border-white/10 rounded-t-[40px] p-6 animate-slide-up">
            <SummaryContent
              selectedDestObj={selectedDestObj}
              selectedHighlights={selectedHighlights}
              journeyDuration={journeyDuration}
              formData={formData}
              setIsSummaryExpanded={setIsSummaryExpanded}
              summaryRef={summaryRef}
              handleDownload={handleDownload}
              layout="mobile"
            />
          </div>
        </div>
      )}

      {/* Global Navigation Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-4 lg:p-8 bg-linear-to-t from-forest-deep via-forest-deep/95 to-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setIsSummaryExpanded(true)}
            className="lg:hidden p-4 rounded-[20px] bg-white/5 border border-white/10 text-white shadow-premium"
          >
            <LayoutList size={24} />
          </button>

          <div className="flex-1 flex items-center justify-end gap-3 lg:gap-6">
            {currentStep > 1 && (
              <PrimaryButton
                variant="secondary"
                size="lg"
                onClick={handleBackStep}
              >
                <ChevronLeft size={18} /> Back
              </PrimaryButton>
            )}

            {currentStep < 4 ? (
              <PrimaryButton
                onClick={handleNextStep}
                disabled={currentStep === 1 && !primaryDestination}
                size="lg"
                className="flex-1 lg:flex-none min-w-[180px]"
              >
                Continue <ChevronRight size={18} />
              </PrimaryButton>
            ) : (
              <PrimaryButton
                onClick={handleFinalSubmission}
                disabled={isSubmitting}
                size="lg"
                className="flex-1 lg:flex-none min-w-[220px]"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Finalize Voyage <ArrowRight size={18} />
                  </>
                )}
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
