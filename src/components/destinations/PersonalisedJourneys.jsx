import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";

export default function PersonalisedJourneys() {
  return (
    <Section variant="dark" padding="lg">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -left-12 -top-12 text-white/5 text-[15rem] font-black select-none pointer-events-none">
            Art
          </div>
          <h2 className="text-section-title text-white font-serif italic leading-tight relative z-10">
            Your Journey, <br />
            <span className="text-accent-gold font-sans not-italic font-black">
              Architected by Hand.
            </span>
          </h2>
        </div>
        <div className="space-y-10">
          <p className="text-description text-earth/80">
            We do not deal in itineraries. We deal in narratives. Every journey
            we design is a bespoke cultural immersion, tailored to the rhythm of
            your group and the specific outcomes you seek to achieve.
            <br />
            <br />
            From special access to heritage sites to private wilderness camps,
            we ensure every mile has an intent, and every moment has a purpose.
          </p>
          <PrimaryButton to="/contact#inquiry" variant="primary" size="md">
            Design My Journey
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
