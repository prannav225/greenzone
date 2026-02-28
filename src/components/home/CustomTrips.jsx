import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { Sparkles } from "lucide-react";

export default function CustomTrips({ id }) {
  return (
    <section
      id={id}
      className="py-12 sm:py-24 bg-sky-mist relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest text-sm font-bold mb-8">
          <Sparkles className="w-4 h-4 text-accent-gold" />
          Tailored Experiences
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-forest mb-8 leading-tight">
          Need Something Personalized?
        </h2>

        <p className="text-xl md:text-2xl text-forest/70 mb-12 leading-relaxed">
          We design tailored travel experiences for families, friend groups, and
          special interest travelers across Karnataka. Your pace, your
          interests, your story.
        </p>

        <PrimaryButton to="/plan-your-trip" size="lg" variant="primary">
          Build My Journey
        </PrimaryButton>
      </div>
    </section>
  );
}
