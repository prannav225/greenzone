import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

const PARTICLE_DATA = [
  { left: "10%", top: "20%", delay: "0s", duration: "4s" },
  { left: "30%", top: "50%", delay: "1.5s", duration: "5s" },
  { left: "70%", top: "15%", delay: "2s", duration: "6.3s" },
  { left: "90%", top: "85%", delay: "0.5s", duration: "4.7s" },
  { left: "5%", top: "75%", delay: "1.2s", duration: "5.5s" },
  { left: "45%", top: "35%", delay: "2.8s", duration: "6.8s" },
];

export default function HeroNew() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-forest flex flex-col items-center">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-forest-deep">
        <img
          src="/hero-trek.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-deep/70 via-transparent to-forest-deep/95" />
        <div className="absolute inset-0 bg-forest/20 backdrop-blur-[1px]" />
      </div>

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {PARTICLE_DATA.map((p, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full animate-pulse bg-accent-gold/40"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center w-full max-w-6xl mx-auto py-8">
        <div className="flex flex-col items-center w-full gap-[4vh] md:gap-12">
          {/* Eyebrow Badge */}
          <div className="animate-fade-in shrink-0 mt-[8vh]">
            <div className="glass-pill">
              <div className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute h-full w-full rounded-full bg-accent-gold opacity-75"></span>
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent-gold"></span>
              </div>
              <span className="truncate text-white text-[9px] md:text-xs font-black tracking-[0.3em] uppercase">
                Experiential Engineering
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-hero text-white mb-8 animate-fade-in-up select-none tracking-tighter">
            Beyond Travel. <br />
            <span className="text-accent-gold italic">Beyond Training.</span>
          </h1>

          {/* Subtext */}
          <div className="space-y-4 animate-fade-in-up animate-delay-300 px-4">
            <p className="text-description max-w-2xl mx-auto">
              GreenZone designs experiential leadership programs and curated
              journeys that combine adventure, psychology, and applied learning.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-400">
            <PrimaryButton to="/workshops" size="md" variant="primary">
              Explore Workshops
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>

            <PrimaryButton to="/destinations" size="md" variant="secondary">
              Explore Destinations
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="relative z-20 pb-8 animate-fade-in animate-delay-700 shrink-0 opacity-40">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[8px] uppercase font-black tracking-[0.6em] text-white/60">
            Scroll
          </span>
          <div
            className="w-px h-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-accent-gold), transparent)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1/2 animate-scroll-down bg-accent-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
