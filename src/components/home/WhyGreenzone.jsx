import Section from "../layout/Section";
import { Brain, Users, ShieldCheck, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Facilitation",
    description:
      "Led by a unique mix of clinical psychologists, certified coaches, and seasoned field experts.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Psychology-Backed",
    description:
      "We move beyond 'games' to functional shifts using proven NLP and EQ frameworks.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Clinical Safety",
    description:
      "Verified medical protocols and risk management systems for high-consequence environments.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Measurable Impact",
    description:
      "Lasting behavioral impact that translates directly back to professional and personal life.",
  },
];

export default function WhyGreenzone() {
  return (
    <Section
      id="why-greenzone"
      variant="mist"
      subtitle="Why Greenzone"
      subtitleIcon={<Brain className="w-3.5 h-3.5 text-emerald-pop" />}
      title={
        <>
          Outbound Learning{" "}
          <span className="text-forest italic">with Intent.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 xl:gap-24 items-center relative z-10">
        <div className="lg:col-span-12 xl:col-span-5 relative group order-2 xl:order-1">
          <div className="relative">
            {/* Main Visual */}
            <div className="aspect-16/10 xl:aspect-4/5 rounded-image overflow-hidden shadow-4xl relative z-10 transition-all duration-1000 group-hover:shadow-forest/20 ring-1 ring-forest/5">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200"
                alt="Leadership training in nature"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-forest/40 via-transparent to-transparent mix-blend-multiply opacity-60" />
            </div>

            {/* Glass Badge Overlay */}
            <div className="absolute -bottom-8 sm:-bottom-12 -right-4 sm:-right-6 xl:-right-12 z-20 bg-white/40 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 rounded-card shadow-4xl animate-float border border-white/40 max-w-[280px] sm:max-w-[340px] hidden sm:block">
              <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-forest flex items-center justify-center text-emerald-pop shadow-2xl ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-emerald-pop font-black text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] block mb-1">
                    Performance
                  </span>
                  <h4 className="font-heading font-black text-forest text-xl sm:text-2xl tracking-tighter leading-none">
                    Functional <br />
                    <span className="italic">Shift.</span>
                  </h4>
                </div>
              </div>
              <p className="text-forest/60 text-xs sm:text-sm leading-relaxed font-bold italic border-l-2 border-emerald-pop/30 pl-4 sm:pl-6">
                "Experience that translates directly into team agency and
                leadership."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
          <div className="max-w-2xl mx-auto xl:mx-0">
            <p className="text-lg sm:text-xl lg:text-2xl text-forest/80 leading-tight mb-12 sm:mb-16 font-medium italic border-l-4 border-emerald-pop pl-6 sm:pl-8 animate-fade-in">
              We design professional environments where nature becomes a mirror
              for organizational behavior, and structured reflection turns
              challenge into functional growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="group/card flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 rounded-card bg-white/60 backdrop-blur-sm border border-emerald-pop/60 shadow-premium hover:shadow-2xl hover:bg-forest transition-all duration-700 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-image-mobile bg-forest text-emerald-pop shadow-xl flex items-center justify-center transition-all duration-500 group-hover/card:bg-emerald-pop group-hover/card:text-forest group-hover/card:scale-110">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-forest text-xl sm:text-2xl mb-3 sm:mb-4 leading-none tracking-tighter group-hover/card:text-white transition-colors duration-500">
                      {reason.title}
                    </h3>
                    <p className="text-forest/50 text-xs sm:text-sm leading-relaxed font-medium group-hover/card:text-white/60 transition-colors duration-500">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
