import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

/**
 * WHY GREENZONE DATA
 * Refined for a premium, editorial feel.
 */
const GREENZONE_PILLARS = [
  {
    id: "01",
    title: "Curated, Not Commercialized.",
    tagline: "High-Touch Selection",
    desc: "Every experience is engineered for individual depth, not mass volume. We select partners and participants who are ready for radical growth.",
    stat: "12",
    statLabel: "Elite Max Capacity",
    img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=2000",
    color: "var(--color-accent-gold)",
  },
  {
    id: "02",
    title: "Nature as the Master Classroom.",
    tagline: "Elemental Intelligence",
    desc: "Boardrooms can't teach grit; the wilderness can. We use high-consequence environments to reveal authentic leadership and raw resilience.",
    stat: "100%",
    statLabel: "Wilderness Immersion",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000",
    color: "var(--color-accent-gold)",
  },
  {
    id: "03",
    title: "Mastery and Lineage.",
    tagline: "Expert-Led Journeys",
    desc: "Our leads are not just guides; they are clinical psychologists, special forces veterans, and master facilitators who live what they teach.",
    stat: "15+",
    statLabel: "Years Avg Experience",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
    color: "var(--color-accent-gold)",
  },
  {
    id: "04",
    title: "Sustainable & Ethical Impact.",
    tagline: "Leave No Trace",
    desc: "We operate with a regenerative mindset. Every journey supports local conservation efforts and operates with carbon-conscious protocols.",
    stat: "Zero",
    statLabel: "Carbon Footprint Target",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=2000",
    color: "var(--color-accent-gold)",
  },
];

function PillarCard({ pillar, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={cardRef}
      className={`relative group flex flex-col md:flex-row items-center gap-12 min-h-[80vh] py-20 transition-all duration-1000 ease-out opacity-0 translate-y-12 overflow-hidden scroll-snap-section`}
    >
      {/* Visual Side */}
      <div
        className={`w-full md:w-1/2 relative aspect-4/3 overflow-hidden rounded-image shadow-premium ${isEven ? "md:order-1" : "md:order-2"} border border-white/5`}
      >
        <img
          src={pillar.img}
          alt={pillar.title}
          className="w-full h-full object-cover transition-transform duration-3000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />

        {/* Stat Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-forest-deep/60 backdrop-blur-3xl border border-white/10 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div
            className="text-2xl md:text-5xl font-black mb-1"
            style={{ color: pillar.color }}
          >
            {pillar.stat}
          </div>
          <div className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-[0.4em] font-black">
            {pillar.statLabel}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center space-y-8 ${isEven ? "md:order-2" : "md:order-1"} px-4 md:px-12 z-10`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <span className="w-12 h-px bg-white/20" />
            <span className="text-eyebrow" style={{ color: pillar.color }}>
              {pillar.tagline}
            </span>
          </div>
          <div className="text-white/5 text-8xl md:text-[10rem] font-heading font-black leading-none select-none -mb-12">
            {pillar.id}
          </div>
        </div>

        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-lg leading-[1.1]">
          {pillar.title}
        </h3>

        <p className="text-description max-w-xl">{pillar.desc}</p>

        <div className="pt-8 flex items-center gap-6 cursor-pointer group/method self-start transition-all">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-white/40 group-hover/method:text-accent-gold transition-colors">
            Methodology
          </span>
          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 shadow-premium group-hover/method:bg-accent-gold group-hover/method:border-accent-gold group-hover/method:scale-110">
            <ArrowRight className="w-6 h-6 text-white group-hover/method:text-forest" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhyGreenzoneNew() {
  return (
    <div className="relative bg-forest-deep overflow-hidden">
      {/* 
         CINEMATIC ATMOSPHERE: Redesigned for absolute consistency.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="atmospheric-noise">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[160px] animate-pulse-light-1 bg-accent-gold/5" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 blur-[160px] animate-pulse-light-2" />

        <div className="absolute inset-0 bg-linear-to-b from-forest-deep via-transparent to-forest-deep opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <section className="scroll-snap-section min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-4xl space-y-12 border-l-2 md:border-l-4 pl-6 md:pl-12 border-accent-gold/30">
            <span className="text-eyebrow text-accent-gold block">
              The Excellence Standard
            </span>
            <h2 className="text-hero text-white leading-[0.85] tracking-tighter">
              Outbound <br />
              <span
                className="text-transparent bg-clip-text italic animate-text-shimmer"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-accent-gold), white, var(--color-accent-gold))",
                  backgroundSize: "200% auto",
                }}
              >
                with Intent.
              </span>
            </h2>
            <p className="max-w-2xl text-white/50 text-2xl md:text-4xl font-light italic leading-tight">
              "Every expedition is an architectural masterpiece of
              transformation."
            </p>
          </div>
        </section>

        {/* PILLARS GRID */}
        <div className="space-y-24 pb-40">
          {GREENZONE_PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>

      {/* CLIMAX FOOTER */}
      <section className="scroll-snap-section min-h-screen flex flex-col items-center justify-center text-center px-6 relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-10000 group-hover:scale-110"
          style={{ backgroundImage: `url(${GREENZONE_PILLARS[2].img})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-deep via-forest-deep/80 to-forest-deep" />

        <div className="relative z-10 space-y-20 max-w-5xl">
          <div className="relative inline-block group/gz">
            <div className="absolute -inset-24 blur-[120px] opacity-20 group-hover/gz:opacity-40 transition-opacity duration-1000 bg-accent-gold" />
            <div className="relative w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center font-heading tracking-[0.5em] text-white bg-forest-deep/90 backdrop-blur-3xl transition-all duration-500 text-xl font-bold shadow-premium">
              GZ
            </div>
          </div>

          <div className="space-y-8 flex flex-col items-center">
            <h4 className="text-white text-4xl md:text-6xl lg:text-display-section font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
              Ready to cross <br className="hidden md:block" /> the{" "}
              <span className="italic text-accent-gold drop-shadow-glow">
                boundary?
              </span>
            </h4>
            <div className="w-24 md:w-48 h-px bg-linear-to-r from-transparent via-accent-gold/50 to-transparent" />
          </div>

          <div className="pt-10 flex justify-center">
            <PrimaryButton to="/contact" size="lg" variant="primary">
              Start Your Journey
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
