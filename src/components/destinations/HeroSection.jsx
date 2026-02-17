import PrimaryButton from "../ui/PrimaryButton";
import { Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="scroll-snap-section relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1608973557237-4ab537f2cd5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hampi Sunrise"
          className="w-full h-full object-cover scale-110 animate-slow-zoom opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-deep/60 via-transparent to-forest-deep" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
          <div className="w-12 h-px bg-accent-gold/40" />
          <span className="text-eyebrow text-accent-gold">
            Selected Geographies
          </span>
          <div className="w-12 h-px bg-accent-gold/40" />
        </div>
        <h1 className="text-hero text-white mb-10 drop-shadow-premium">
          Travel That <br />
          <span
            className="italic animate-text-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-accent-gold), white, var(--color-accent-gold))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transforms.
          </span>
        </h1>
        <p className="text-description max-w-2xl mx-auto mb-12">
          Every destination is a deliberate choice—an architectural masterpiece
          of geography engineered to shift your perspective and reveal your
          authentic edge.
        </p>
        <div className="flex justify-center animate-fade-in-up animate-delay-300">
          <PrimaryButton to="/contact#inquiry" size="lg">
            Explore Journeys
          </PrimaryButton>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <Compass className="w-8 h-8 text-accent-gold" />
      </div>
    </section>
  );
}
