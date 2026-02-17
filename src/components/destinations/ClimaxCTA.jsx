import { Compass } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ClimaxCTA() {
  return (
    <section className="scroll-snap-section relative min-h-screen flex flex-col items-center justify-center text-center p-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
          alt="Dark Forest"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-deep/40 via-forest-deep/90 to-black" />
      </div>

      <div className="relative z-10 space-y-12 max-w-4xl">
        <div className="relative inline-block">
          <div className="absolute -inset-16 bg-accent-gold blur-[100px] opacity-10 animate-pulse" />
          <Compass
            className="w-20 h-20 text-accent-gold relative z-10 mx-auto"
            strokeWidth={1}
          />
        </div>

        <h2 className="text-hero text-white leading-none">
          Your Boundary <br />
          <span className="italic text-accent-gold drop-shadow-glow">
            Awaits.
          </span>
        </h2>

        <p className="text-description max-w-2xl mx-auto">
          The map is not the territory. The only way to understand the edge is
          to stand upon it. Connect with our curators to begin your
          transformation.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <PrimaryButton to="/contact#inquiry" size="lg" variant="primary">
            Plan Your Expedition
          </PrimaryButton>
          <PrimaryButton to="/workshops" size="lg" variant="secondary">
            View Workshops
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
