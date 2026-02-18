import {
  X,
  Check,
  Compass,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { useJourney } from "../../hooks/useJourney";
import { DESTINATION_COLLECTIONS } from "../../data/destinationsData";

export default function BuildJourneyDrawer() {
  const {
    isPanelOpen,
    resetJourney,
    currentStep,
    handleNextStep,
    handleBackStep,
    handleSubmitJourney,
    isSubmitting,
    isSubmitted,
    selectedForJourney,
    toggleSelection,
    journeyDuration,
    setJourneyDuration,
    focusTags,
    setFocusTags,
    formData,
    setFormData,
  } = useJourney();

  return (
    <div
      className={`fixed inset-0 z-150 transition-opacity duration-700 ${isPanelOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm"
        onClick={resetJourney}
      />

      <div
        className={`absolute inset-y-0 right-0 w-full max-w-[480px] bg-forest-deep border-l border-white/10 shadow-premium transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="flex flex-col h-full items-center justify-center p-12 text-center animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-accent-gold/10 flex items-center justify-center mb-8 border border-accent-gold/20">
              <CheckCircle2
                className="w-12 h-12 text-accent-gold"
                strokeWidth={1}
              />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
              Journey Request Received
            </h3>
            <p className="text-earth/60 font-medium mb-10 leading-relaxed">
              Our team will connect with you within 24–48 hours to design your
              bespoke experience.
            </p>
            <button
              onClick={resetJourney}
              className="w-full px-8 py-4 bg-accent-gold text-forest-deep rounded-full font-black uppercase tracking-widest text-[11px] shadow-glow transition-all hover:scale-105"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full relative">
            {/* HEADER & PROGRESS */}
            <div className="p-6 sm:p-8 border-b border-white/5 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-accent-gold" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Step {currentStep} of 4
                  </span>
                </div>
                <button
                  onClick={resetJourney}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Minimal Progress Bar */}
              <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-gold transition-all duration-700 ease-out"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* SCROLLABLE STEP CONTENT */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-2">
                      Select Your Destinations
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-accent-gold/60">
                      {selectedForJourney.length} destinations selected
                    </p>
                  </div>

                  <div className="space-y-3">
                    {DESTINATION_COLLECTIONS.flatMap((c) => c.destinations).map(
                      (dest) => (
                        <button
                          key={dest.id}
                          onClick={() => toggleSelection(dest.id)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 group ${
                            selectedForJourney.includes(dest.id)
                              ? "bg-accent-gold/10 border-accent-gold/30"
                              : "bg-white/5 border-white/5 hover:border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all">
                              <img
                                src={dest.images[0]}
                                alt={dest.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                              {dest.name}
                            </span>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              selectedForJourney.includes(dest.id)
                                ? "bg-accent-gold border-accent-gold"
                                : "border-white/20"
                            }`}
                          >
                            {selectedForJourney.includes(dest.id) && (
                              <Check
                                className="w-3 h-3 text-forest-deep"
                                strokeWidth={4}
                              />
                            )}
                          </div>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    Choose Journey Duration
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "1-Day Circuit",
                      "2–3 Day Escape",
                      "4–6 Day Immersion",
                      "Fully Custom",
                    ].map((type) => (
                      <button
                        key={type}
                        onClick={() => setJourneyDuration(type)}
                        className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 ${
                          journeyDuration === type
                            ? "bg-accent-gold border-accent-gold text-forest-deep"
                            : "bg-white/5 border-white/5 text-white/70 hover:border-white/20"
                        }`}
                      >
                        <span className="text-sm font-black uppercase tracking-widest">
                          {type}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            journeyDuration === type
                              ? "border-forest-deep"
                              : "border-white/20"
                          }`}
                        >
                          {journeyDuration === type && (
                            <div className="w-2 h-2 rounded-full bg-forest-deep" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    What Should This Focus On?
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Heritage",
                      "Trekking",
                      "Coastal",
                      "Spiritual",
                      "Leadership-Oriented",
                      "Cultural Immersion",
                    ].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setFocusTags((prev) =>
                            prev.includes(tag)
                              ? prev.filter((t) => t !== tag)
                              : [...prev, tag],
                          );
                        }}
                        className={`px-6 py-3 rounded-full border transition-all duration-500 text-[10px] font-black uppercase tracking-widest ${
                          focusTags.includes(tag)
                            ? "bg-accent-gold border-accent-gold text-forest-deep"
                            : "bg-white/5 border-white/5 text-white/50 hover:border-white/20"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    Tell Us About Your Group
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                          Dates
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Oct 2024"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                          value={formData.dates}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dates: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                        Group Size
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Pax"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                        value={formData.groupSize}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            groupSize: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-accent-gold ml-2">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* SUMMARY BOX */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block">
                        Your Route
                      </span>
                      <p className="text-xs font-bold text-accent-gold">
                        {selectedForJourney.length > 0
                          ? selectedForJourney
                              .map((id) => {
                                const allDests =
                                  DESTINATION_COLLECTIONS.flatMap(
                                    (c) => c.destinations,
                                  );
                                return (
                                  allDests.find((d) => d.id === id)?.name || id
                                );
                              })
                              .join(", ")
                          : "None selected"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block">
                          Duration
                        </span>
                        <p className="text-xs font-bold text-white">
                          {journeyDuration || "Not chosen"}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block">
                          Focus
                        </span>
                        <p className="text-xs font-bold text-white">
                          {focusTags.join(", ") || "None"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* STICKY FOOTER NAVIGATION */}
            <div className="p-6 sm:p-8 border-t border-white/5 flex gap-3 sm:gap-4 bg-forest-deep">
              {currentStep > 1 && (
                <button
                  onClick={handleBackStep}
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  disabled={
                    currentStep === 1
                      ? selectedForJourney.length === 0
                      : currentStep === 2
                        ? !journeyDuration
                        : false
                  }
                  className="flex-2 flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-forest-deep rounded-full font-black uppercase tracking-widest text-[10px] shadow-glow transition-all hover:scale-105 disabled:opacity-30 disabled:scale-100 disabled:shadow-none"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitJourney}
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="flex-2 flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-forest-deep rounded-full font-black uppercase tracking-widest text-[10px] shadow-glow transition-all hover:scale-105 disabled:opacity-30 disabled:scale-100 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Design My Route
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
