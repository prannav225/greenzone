import { PROCESS_STEPS } from "../../data/contactData";

export default function WhatHappensNext() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
        What Happens Next
      </h3>
      <div className="space-y-8 border-l border-white/10 pl-8 ml-4">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent-gold border-4 border-forest-deep shadow-gold animate-pulse" />
            <span className="text-[10px] font-black text-accent-gold uppercase tracking-[0.3em] block mb-2">
              Step {step.step}
            </span>
            <h4 className="text-xl font-heading font-bold text-white mb-2">
              {step.title}
            </h4>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
