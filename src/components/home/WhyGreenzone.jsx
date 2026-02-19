import Section from "../layout/Section";
import { Compass } from "lucide-react";
import ReasonCard from "./ReasonCard";
import { WHY_REASONS } from "../../data/homeData";

/**
 * WHY GREENZONE SECTION
 * Highlights the core differentiators and values of the brand.
 */

export default function WhyGreenzone() {
  return (
    <Section
      variant="dark"
      subtitle="The Difference"
      className="pb-20"
      padding="sm"
      subtitleIcon={<Compass className="w-3.5 h-3.5" />}
      title={
        <>
          Why <span className="italic text-accent-gold">Greenzone?</span>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_REASONS.map((reason, idx) => (
          <ReasonCard key={idx} {...reason} />
        ))}
      </div>
    </Section>
  );
}
