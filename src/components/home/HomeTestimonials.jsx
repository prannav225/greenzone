import Section from "../layout/Section";
import { Quote } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../data/homeData";

/**
 * HOME TESTIMONIALS SECTION
 * Showcases guest voices and shared experiences.
 */

export default function HomeTestimonials() {
  return (
    <Section
      variant="dark"
      subtitle="Guest Voices"
      padding="sm"
      subtitleIcon={<Quote className="w-3.5 h-3.5" />}
      title={
        <>
          Shared <span className="italic text-accent-gold">Journeys.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </Section>
  );
}
