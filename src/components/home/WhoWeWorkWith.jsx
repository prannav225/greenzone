import Section from "../layout/Section";
import { Users, Building2, GraduationCap, Zap } from "lucide-react";

export default function WhoWeWorkWith() {
  const segments = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Corporate Leadership Teams",
      desc: "High-impact transformational journeys for senior executives and management clusters.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "HR & Learning & Development",
      desc: "Custom outbound programs designed to align with organizational competency frameworks.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Colleges & Universities",
      desc: "Experiential leadership and resilience modules for the next generation of professionals.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Growth-Oriented Individuals",
      desc: "Curated small-group expeditions for those seeking clarity and personal expansion.",
    },
  ];

  return (
    <Section
      variant="dark"
      subtitle="Who We Serve"
      subtitleIcon={<Users className="w-3.5 h-3.5" />}
      title={
        <>
          Strategic Partnerships <br />
          <span className="italic text-accent-gold">Across Domains.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {segments.map((segment, idx) => (
          <div
            key={idx}
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-accent-gold/40 hover:-translate-y-2 flex flex-col items-start shadow-premium"
          >
            {/* Visual Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-accent-gold/10 transition-colors duration-700" />

            <div className="w-14 h-14 rounded-2xl bg-forest-deep border border-white/10 text-accent-gold flex items-center justify-center mb-8 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-accent-gold/50 group-hover:shadow-gold/20">
              {segment.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-4 tracking-tighter leading-tight transition-colors duration-500 group-hover:text-accent-gold">
              {segment.title}
            </h3>
            <p className="text-white/60 font-medium text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">
              {segment.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
