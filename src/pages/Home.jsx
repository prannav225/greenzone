import Hero from "../components/layout/Hero";
import FinalCTA from "../components/layout/FinalCTA";
import PrimaryButton from "../components/ui/PrimaryButton";
import { ArrowRight, Compass } from "lucide-react";
import OurExperiences from "../components/home/OurExperiences";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import WhyGreenzone from "../components/home/WhyGreenzone";
import HowItWorks from "../components/home/HowItWorks";
import HomeTestimonials from "../components/home/HomeTestimonials";

export default function Home() {
  return (
    <div className="scroll-snap-container bg-forest">
      <Hero
        priority
        bgImage="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Curated Expeditions"
        title={
          <>
            The Summit Awaits. <br />
            <span className="text-accent-gold italic">The Story is Yours.</span>
          </>
        }
        description="Curated trekking expeditions, heritage circuits, and custom private journeys designed for those who seek depth, silence, and immersion."
        className="scroll-snap-section"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-400">
          <PrimaryButton to="/destinations" size="md" variant="primary">
            Explore Destinations
            <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>

          <PrimaryButton to="/contact" size="md" variant="secondary">
            Plan Your Journey
          </PrimaryButton>
        </div>
      </Hero>

      <OurExperiences />
      <FeaturedDestinations />
      <WhyGreenzone />
      <HowItWorks />
      <HomeTestimonials />

      <FinalCTA
        variant="forest"
        bgImage="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1920"
        icon={Compass}
        title={
          <>
            Ready to Forge <br />
            <span className="text-accent-gold italic">Your Own Path?</span>
          </>
        }
        description="Select your destination and start designing your immersive travel experience today."
        buttons={[
          {
            label: "Plan Your Journey",
            to: "/contact",
            variant: "primary",
          },
        ]}
        showPartners={false}
      />
    </div>
  );
}
