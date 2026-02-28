import React from "react";
import { ShieldCheck } from "lucide-react";
import { PACKAGE_POLICIES } from "../../data/packagePolicies";

export default function PackagePolicies() {
  return (
    <div className="p-6 md:p-14 rounded-3xl bg-forest text-white shadow-2xl relative overflow-hidden group border border-forest/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
            Booking Policies
          </h2>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-white/50 font-medium max-w-xl">
            All bookings are subject to our standard quality protocols and field
            lead availability. Rescheduling must be requested at least 15 days
            in advance.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {PACKAGE_POLICIES.cancellation.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-3 sm:gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-white/70 leading-relaxed">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
