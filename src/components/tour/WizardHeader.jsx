import React from "react";
import { Compass, Check } from "lucide-react";

const WizardHeader = ({ currentStep, STEPS }) => {
  return (
    <>
      {/* Hero Header */}
      <div className="pt-20 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto mb-4 lg:mb-12">
        <div className="flex items-center gap-2 mb-2 lg:mb-4">
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
            <Compass className="w-3 h-3 lg:w-4 lg:h-4 text-accent-gold" />
          </div>
          <span className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.4em] text-accent-gold">
            Designer
          </span>
        </div>
        <h1 className="text-3xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1]">
          Bespoke <span className="text-accent-gold">Voyage</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* LEFT COLUMN: WIZARD */}
          <div className="lg:col-span-8 space-y-12">
            {/* Step Navigation */}
            <div className="sticky top-[72px] lg:top-32 z-40 bg-forest-deep/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border-b lg:border-0 border-white/5 py-4 lg:py-0 mb-4 lg:mb-16">
              <div className="flex justify-between items-center max-w-lg lg:max-w-none">
                {STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 flex-1"
                  >
                    <div
                      className={`w-9 h-9 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        currentStep === step.id
                          ? "bg-accent-gold border-accent-gold text-forest-deep shadow-glow"
                          : currentStep > step.id
                            ? "bg-accent-gold/20 border-accent-gold/20 text-accent-gold"
                            : "bg-white/5 border-white/10 text-white/20"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check size={16} strokeWidth={4} />
                      ) : (
                        React.cloneElement(step.icon, {
                          className: "w-4 h-4 lg:w-5 lg:h-5",
                        })
                      )}
                    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <span
                        className={`text-[8px] lg:text-[10px] font-black uppercase tracking-widest ${
                          currentStep === step.id
                            ? "text-white"
                            : "text-white/20"
                        }`}
                      >
                        {step.title}
                      </span>
                      {/* Desktop context */}
                      <span className="hidden lg:block text-[8px] text-white/30 uppercase font-black">
                        Step 0{step.id}
                      </span>
                    </div>
                    {step.id < 4 && (
                      <div className="hidden lg:block flex-1 h-px bg-white/5 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WizardHeader;
