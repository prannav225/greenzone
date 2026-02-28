import React from "react";
import { CheckCircle2, XCircle, Briefcase } from "lucide-react";
import { PACKAGE_POLICIES } from "../../data/packagePolicies";

export default function PackageSidebar() {
  return (
    <>
      {/* Inclusions */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-forest/10 shadow-sm">
        <h3 className="text-lg sm:text-xl font-heading font-black text-forest mb-6 sm:mb-8 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent-gold" />
          Inclusions
        </h3>
        <ul className="space-y-4 sm:space-y-5">
          {PACKAGE_POLICIES.inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 sm:gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-forest/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions - Light Red Styling */}
      <div className="p-6 sm:p-10 rounded-3xl bg-red-50/50 backdrop-blur-md border border-red-100 shadow-sm">
        <h3 className="text-lg sm:text-xl font-heading font-black text-red-900/60 mb-6 sm:mb-8 flex items-center gap-3">
          <XCircle className="w-5 h-5 text-red-400" />
          Excluded
        </h3>
        <ul className="space-y-4 sm:space-y-5">
          {PACKAGE_POLICIES.exclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 sm:gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-200 mt-1.5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-red-900/40">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* What to carry */}
      <div className="p-6 sm:p-10 rounded-3xl bg-accent-gold text-forest shadow-xl relative overflow-hidden border border-forest/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />
        <h3 className="text-lg sm:text-xl font-heading font-black mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
          <Briefcase className="w-5 h-5" />
          Prep Checklist
        </h3>
        <ul className="space-y-3 sm:space-y-4 relative z-10">
          {PACKAGE_POLICIES.whatToCarry.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-forest mt-1.5 shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-tight">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
