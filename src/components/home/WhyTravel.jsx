import React from "react";
import { ShieldCheck, Calendar, Truck, Heart, Users } from "lucide-react";

const REASONS = [
  {
    title: "Transparent Pricing",
    desc: "Fixed packages with no hidden surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Planning",
    desc: "Itineraries curated by local insiders.",
    icon: Calendar,
  },
  {
    title: "Premium Logistics",
    desc: "Clean vehicles and professional drivers.",
    icon: Truck,
  },
  {
    title: "Cultural Respect",
    desc: "Authentic encounters with local traditions.",
    icon: Heart,
  },
  {
    title: "Small Groups",
    desc: "Intimate and safer travel circles.",
    icon: Users,
  },
];

export default function WhyTravel({ id }) {
  return (
    <section id={id} className="py-12 sm:py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">
            The Greenzone <br />
            <span className="text-accent-gold italic text-[1.2em]">
              Difference.
            </span>
          </h2>
          <p className="text-lg text-white/50 font-medium">
            We prioritize the integrity of your experience over mass tourism.
            Every mile is designed for comfort and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          {REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
