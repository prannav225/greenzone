import Hero from "../components/layout/Hero";
import FinalCTA from "../components/layout/FinalCTA";
import PrimaryButton from "../components/ui/PrimaryButton";
import { ArrowRight, Compass } from "lucide-react";
import FeaturedPackages from "../components/home/FeaturedPackages";
import WhyTravel from "../components/home/WhyTravel";
import CustomTrips from "../components/home/CustomTrips";
import DestinationGrid from "../components/home/DestinationGrid";
export default function Home() {
  return (
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <Hero
        priority
        size="compact"
        bgImage="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Adventure Karnataka"
        title={
          <>
            Explore Karnataka With
            <span className="text-accent-gold italic">
              {" "}
              Greenzone Adventures
            </span>
          </>
        }
        description="Affordable group tours and personalized travel experiences across Karnataka’s most iconic destinations."
        className=""
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animate-delay-400 mt-4 sm:mt-8">
          <PrimaryButton to="/destinations" size="md" variant="primary">
            View Tour Packages
            <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>

          <PrimaryButton to="/plan-your-trip" size="md" variant="secondary">
            Plan Custom Trip
          </PrimaryButton>
        </div>
      </Hero>

      <FeaturedPackages id="packages" />

      {/* 3️⃣ WHY TRAVEL WITH US */}
      <WhyTravel id="why-travel" />

      {/* 4️⃣ CUSTOM TRIPS SECTION */}
      <CustomTrips id="custom-trips" />

      {/* 5️⃣ DESTINATION GRID */}
      <DestinationGrid id="destinations" />

      {/* 6️⃣ FINAL CTA */}
      <FinalCTA
        variant="forest"
        bgImage="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1920"
        icon={Compass}
        title="Ready for Your Next Trip?"
        description="Select your destination and start designing your immersive travel experience today."
        buttons={[
          {
            label: "Book a Package",
            to: "/destinations",
            variant: "primary",
          },
          {
            label: "Plan Custom Trip",
            to: "/plan-your-trip",
            variant: "secondary",
          },
        ]}
        showPartners={false}
      />
    </div>
  );
}
