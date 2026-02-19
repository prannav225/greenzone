import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";
import DestinationCard from "./DestinationCard";
import { FEATURED_DESTINATIONS } from "../../data/homeData";

/**
 * FEATURED DESTINATIONS SECTION
 * Showcases the key regions of discovery.
 */

export default function FeaturedDestinations() {
  return (
    <Section
      variant="dark"
      subtitle="The Map"
      subtitleIcon={<MapPin className="w-3.5 h-3.5" />}
      title={
        <>
          Featured{" "}
          <span className="italic text-accent-gold">Destinations.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURED_DESTINATIONS.map((item) => (
          <DestinationCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <PrimaryButton
          to="/destinations"
          variant="secondary"
          size="sm"
          className="group"
        >
          View All Destinations <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
      </div>
    </Section>
  );
}
