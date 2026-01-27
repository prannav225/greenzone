import Section from "../layout/Section";
import { Users, Building2, GraduationCap, Heart } from "lucide-react";

export default function WhoWeWorkWith() {
  const segments = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "HR & L&D Teams",
      desc: "Partners in scaling culture, employee engagement, and long-term organizational development.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Corporate Managers",
      desc: "Supporting leaders in building high-performance teams and resilient work environments.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Educational Institutions",
      desc: "Collaborating with colleges and universities to enhance student leadership and life skills.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Private Groups",
      desc: "Curated retreats and expeditions for those seeking personal renewal and cognitive clarity.",
    },
  ];

  return (
    <Section
      variant="sand"
      subtitle="Who We Serve"
      subtitleIcon={<Users className="w-3.5 h-3.5" />}
      title={
        <>
          Strategic Partnerships <br />
          <span className="italic text-emerald-pop">Across Domains.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((segment, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-sm border border-white focus-within:bg-white shadow-premium hover:shadow-2xl hover:bg-forest transition-all duration-700 hover:-translate-y-2 flex flex-col items-start"
          >
            <div className="w-14 h-14 rounded-2xl bg-forest text-emerald-pop flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:bg-emerald-pop group-hover:text-forest group-hover:scale-110">
              {segment.icon}
            </div>
            <h3 className="text-2xl font-heading font-black text-forest mb-4 tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
              {segment.title}
            </h3>
            <p className="text-forest/60 font-medium text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
              {segment.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
