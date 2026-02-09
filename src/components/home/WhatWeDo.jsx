import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";
import {
  Building2,
  GraduationCap,
  Compass,
  ArrowRight,
  Brain,
  Zap,
  Mountain,
} from "lucide-react";

const pillars = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Outbound Learning",
    tagline: "The GZ Master Framework",
    description:
      "Field-based journeys designed to trigger deep organizational transformation through structured adventure.",
    link: "/programs#obl",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Teams",
    tagline: "High Performance Labs",
    description:
      "Strategic alignment and decision-making programs under pressure for modern leadership teams.",
    link: "/programs#corporate",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "EQ & NLP Workshops",
    tagline: "Cognitive Excellence",
    description:
      "Integrating Emotional Intelligence and NLP to enhance personal effectiveness and communication.",
    link: "/programs#specialized",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Student Programs",
    tagline: "Career Preparedness",
    description:
      "Equipping the next generation with resilience, agency, and real-world leadership skills.",
    link: "/programs#student",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Adventure & Travel",
    tagline: "Conscious Exploration",
    description:
      "Purposefully designed expeditions that combine physical challenge with cognitive rest for groups.",
    link: "/programs#expeditions",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
];

export default function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      variant="mist"
      subtitle="Our Core Pillars"
      subtitleIcon={<Compass className="w-3.5 h-3.5 text-emerald-pop" />}
      title={
        <>
          Experiential Programs <br />
          <span className="text-forest italic">Designed to Transform.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10 px-2 sm:px-4 md:px-0">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-card overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 ring-1 ring-forest/5"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-b from-charcoal/10 via-charcoal/40 to-forest/90" />
            </div>

            {/* Top Info Bar */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-card bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:bg-emerald-pop group-hover:text-forest transition-all duration-500">
                {pillar.icon}
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24 bg-linear-to-t from-forest via-forest/80 to-transparent">
              <span className="text-emerald-pop font-heading font-black text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-2 sm:mb-3 block">
                {pillar.tagline}
              </span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-black text-white mb-3 sm:mb-4 tracking-tighter leading-none">
                {pillar.title}
              </h3>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <p className="text-white/60 text-[10px] sm:text-[11px] lg:text-xs leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {pillar.description}
                </p>

                <PrimaryButton
                  to={pillar.link}
                  variant="white"
                  size="xs"
                  className="sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-2" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
        <PrimaryButton to="/programs" variant="primary" size="lg">
          Explore All Training Modules
        </PrimaryButton>
      </div>
    </Section>
  );
}
