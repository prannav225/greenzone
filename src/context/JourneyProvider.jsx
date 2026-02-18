import { useState, useEffect } from "react";
import { JourneyContext } from "./JourneyContext";

export function JourneyProvider({ children }) {
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

  const resetJourney = () => {
    setIsPanelOpen(false);
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

  const openJourneyBuilder = () => setIsPanelOpen(true);
  const closeJourneyBuilder = () => setIsPanelOpen(false);

  return (
    <JourneyContext.Provider
      value={{
        isPanelOpen,
        openJourneyBuilder,
        closeJourneyBuilder,
        selectedForJourney,
        toggleSelection,
        currentStep,
        handleNextStep,
        handleBackStep,
        journeyDuration,
        setJourneyDuration,
        focusTags,
        setFocusTags,
        formData,
        setFormData,
        isSubmitting,
        isSubmitted,
        handleSubmitJourney,
        resetJourney,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
