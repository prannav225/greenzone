import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { JourneyContext } from "./JourneyContext";

export function JourneyProvider({ children }) {
  const navigate = useNavigate();
  const [primaryDestination, setPrimaryDestination] = useState(null);
  const [selectedHighlights, setSelectedHighlights] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [journeyDuration, setJourneyDuration] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromDate: "",
    toDate: "",
    groupSize: "",
    transport: "",
    food: "",
    stay: "",
    estimatedBudget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectPrimaryDestination = (destId) => {
    setPrimaryDestination(destId);
    setSelectedHighlights([]);
  };

  const toggleHighlight = (highlight) => {
    setSelectedHighlights((prev) =>
      prev.includes(highlight)
        ? prev.filter((h) => h !== highlight)
        : [...prev, highlight],
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
        primaryDestination,
        highlights: selectedHighlights,
        duration: journeyDuration,
        contact: formData,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetJourney = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setPrimaryDestination(null);
    setSelectedHighlights([]);
    setJourneyDuration("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      fromDate: "",
      toDate: "",
      groupSize: "",
      transport: "",
      food: "",
      stay: "",
      message: "",
    });
  };

  const openJourneyBuilder = () => navigate("/plan-your-trip");
  const closeJourneyBuilder = () => navigate("/destinations");

  return (
    <JourneyContext.Provider
      value={{
        openJourneyBuilder,
        closeJourneyBuilder,
        primaryDestination,
        selectPrimaryDestination,
        selectedHighlights,
        toggleHighlight,
        currentStep,
        setCurrentStep,
        handleNextStep,
        handleBackStep,
        journeyDuration,
        setJourneyDuration,
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
