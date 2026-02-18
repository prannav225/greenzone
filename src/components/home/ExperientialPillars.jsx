import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Users, Sprout } from "lucide-react";

const pillars = [
  {
    id: 1,
    title: "Adventure & Travel",
    subtitle: "The Journey",
    description:
      "Curated journeys across powerful landscapes designed for personal expansion, mental resilience, and environmental connection.",
    cta: "Explore Destinations",
    link: "/destinations",
    image: "/adventure-kayak.webp",
    icon: Mountain,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
  {
    id: 2,
    title: "Workshops & Leadership Programs",
    subtitle: "The Training",
    description:
      "Outbound Learning (OBL), NLP, and Emotional Intelligence programs that translate psychological principles into tangible leadership capability.",
    cta: "View Workshops",
    link: "/workshops",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    icon: Users,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
  {
    id: 3,
    title: "Agri Learning Retreats",
    subtitle: "The Connection",
    description:
      "Immersive sustainability programs for students and professionals, focusing on agricultural systems and mindful resource management.",
    cta: "Discover Retreats",
    link: "/agri-tourism",
    image: "/agri-retreat.webp",
    icon: Sprout,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
];

function PillarPanel({ pillar, index }) {
  const isEven = index % 2 === 0;
  const Icon = pillar.icon;

  return (
    <div className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden group scroll-snap-section">
      {/* Background with Cinematic Treatment */}
      <div className="absolute inset-0 z-0 bg-forest-deep">
        <img
          src={pillar.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-4000 ease-out group-hover:scale-110"
          style={{
            transform: `translateY(${pillar.id === 2 ? "0" : "0"})`, // Placeholder for parallax if needed
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-deep/40 backdrop-blur-[1px]" />

        {/* Deep Forest Gradient for Content Contrast */}
        <div
          className={`absolute inset-0 bg-linear-to-r ${isEven ? "from-forest-deep via-forest-deep/60 to-transparent" : "from-transparent via-forest-deep/60 to-forest-deep"}`}
        />

        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-forest-deep to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-forest-deep to-transparent opacity-90" />
      </div>

      {/* Numerical Anchor - Immersive Background Element */}
      <div
        className={`absolute bottom-0 ${isEven ? "right-0" : "left-0"} pointer-events-none select-none overflow-hidden`}
      >
        <span className="font-heading text-[25vw] font-black text-white/5 leading-none -mb-32 block translate-y-16 group-hover:-translate-y-10 transition-transform duration-1000">
          0{pillar.id}
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div
          className={`max-w-2xl ${isEven ? "md:ml-0" : "md:ml-auto md:text-right md:items-end"} flex flex-col items-center text-center md:items-start md:text-left`}
        >
          {/* Eyebrow Logic */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 animate-fade-in group-hover:gap-6 transition-all duration-500">
            <span className="text-eyebrow">{pillar.subtitle}</span>
          </div>

          {/* Title - Fluid & Impactful */}
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-premium">
            {pillar.title}
          </h2>

          {/* Description - Balanced density */}
          <div className="relative mb-10 sm:mb-12">
            <div
              className={`hidden md:block absolute top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ${isEven ? "-left-6" : "-right-6"}`}
              style={{ backgroundColor: pillar.accentColor, opacity: 0.3 }}
            />
            <p className="text-description max-w-xl mx-auto md:mx-0">
              {pillar.description}
            </p>
          </div>

          {/* Luxury CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <Link
              to={pillar.link}
              className="btn-primary w-full sm:w-auto px-12 py-5"
            >
              <span>{pillar.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Icon Secondary Indicator */}
            <div
              className={`hidden md:flex items-center gap-5 transition-opacity duration-700 delay-300 ${isEven ? "opacity-20" : "flex-row-reverse opacity-20"}`}
            >
              <Icon className="w-6 h-6 text-white" />
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Marker */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`h-1 rounded-full transition-all duration-700 ${
              num === pillar.id ? "w-16" : "w-3 bg-white/10"
            }`}
            style={{
              backgroundColor:
                num === pillar.id ? pillar.accentColor : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ExperientialPillars() {
  return (
    <section className="relative bg-forest-deep overflow-hidden">
      {/* Section Header */}
      <div className="relative z-20 pt-48 pb-24 px-6 text-center max-w-4xl mx-auto flex flex-col justify-center">
        <span className="text-eyebrow text-accent-gold block mb-6 animate-fade-in">
          What We Do
        </span>
        <h2 className="text-white text-5xl md:text-7xl font-heading mb-8 animate-fade-in animate-delay-200">
          Three Paths. <span className="italic">One Purpose.</span>
        </h2>
        <p className="text-description max-w-2xl mx-auto animate-fade-in animate-delay-400">
          GreenZone operates at the intersection of adventure, psychology, and
          experiential education.
        </p>
        <div className="mt-12 flex justify-center animate-fade-in animate-delay-500">
          <div className="w-px h-24 bg-linear-to-b from-accent-gold to-transparent" />
        </div>
      </div>

      {pillars.map((pillar, index) => (
        <PillarPanel key={pillar.id} pillar={pillar} index={index} />
      ))}
    </section>
  );
}
