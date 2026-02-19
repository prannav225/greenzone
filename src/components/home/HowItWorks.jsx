import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";
import TravelStep from "./TravelStep";
import { ArrowRight, Zap } from "lucide-react";
import { TRAVEL_STEPS } from "../../data/homeData";

/**
 * HOW IT WORKS SECTION
 * Explains the 4-step methodology of curated travel.
 */

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      variant="dark"
      padding="sm"
      subtitle="The Methodology"
      subtitleIcon={<Zap className="w-3.5 h-3.5" />}
      title={
        <>
          How We{" "}
          <span className="text-accent-gold italic drop-shadow-glow">
            Travel.
          </span>
        </>
      }
    >
      <div className="relative z-10 px-4">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {TRAVEL_STEPS.map((step) => (
            <TravelStep key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-20 lg:mt-24 text-center">
          <PrimaryButton to="/contact" variant="primary" size="md">
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
