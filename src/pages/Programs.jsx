import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Brain,
  Compass,
  Zap,
  Target,
  Users,
  Building2,
  GraduationCap,
  Mountain,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";

const programCategories = [
  {
    id: "obl",
    subtitle: "The Flagship Framework",
    subtitleIcon: <Zap className="w-3.5 h-3.5" />,
    title: "Outbound Learning Programs (OBL)",
    keyword: "outbound learning programs",
    description:
      "Our signature field-based journeys are engineered to trigger deep organizational transformation through structured experiential cycles in nature.",
    who: "Organizations, HR Departments, and Leadership Teams aiming for radical alignment.",
    outcomes: [
      "Cohesion in Ambiguity",
      "Accelerated Problem-solving",
      "Crisis Response Maturity",
    ],
    duration: "2-3 Days / Multi-module",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000",
    variant: "mist",
  },
  {
    id: "corporate",
    subtitle: "High Performance Labs",
    subtitleIcon: <Building2 className="w-3.5 h-3.5" />,
    title: "Corporate Team Building Activities",
    keyword: "corporate team building activities",
    description:
      "Beyond simple icebreakers. We design high-stakes simulations that build real trust and strategic intelligence under pressure.",
    who: "Middle Management, Project Teams, and Newly Merged Departments.",
    outcomes: [
      "Trust Acceleration",
      "Strategic Decision Consistency",
      "Role Clarity",
    ],
    duration: "1 Day / Ongoing Series",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    variant: "sand",
  },
  {
    id: "specialized",
    subtitle: "Cognitive Excellence",
    subtitleIcon: <Brain className="w-3.5 h-3.5" />,
    title: "Specialized Workshops",
    description:
      "Psychology-backed modules integrated into outdoor environments to enhance the cognitive capacity of your workforce.",
    subsections: [
      {
        title: "Emotional Intelligence Training",
        keyword: "emotional intelligence training",
        desc: "Developing the interpersonal agility and self-regulation required for modern workplaces.",
        outcomes: ["Empathy-driven Leadership", "Conflict Mastery"],
      },
      {
        title: "NLP Workshops",
        keyword: "NLP workshops",
        desc: "Neuro-Linguistic Programming modules focused on peak communication and pattern recognition.",
        outcomes: ["Behavioral Shifting", "Precision Communication"],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    variant: "mist",
  },
  {
    id: "student",
    subtitle: "The Future Frontier",
    subtitleIcon: <GraduationCap className="w-3.5 h-3.5" />,
    title: "Student Outbound Learning Programs",
    keyword: "student outbound learning programs",
    description:
      "Moving students from theory to agency. We equip the next generation with the grit and interpersonal skills required for professional life.",
    who: "Educational Institutions, Business Schools, and Private Groups.",
    outcomes: [
      "Building Resilience",
      "Collaboration Over Competition",
      "Agency & Ownership",
    ],
    duration: "1-4 Days",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
    variant: "sand",
  },
  {
    id: "expeditions",
    subtitle: "Conscious Exploration",
    subtitleIcon: <Mountain className="w-3.5 h-3.5" />,
    title: "Adventure, Treks & Retreats",
    description:
      "Purposefully designed expeditions that combine physical challenge with cognitive rest for high-performing individuals and groups.",
    who: "Founders, Small Teams, and Perspective-seekers.",
    outcomes: ["Perspective Shifts", "Executive Sabbatical Clarity"],
    duration: "Custom based on terrain",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    variant: "forest",
  },
];

export default function Programs() {
  useEffect(() => {
    document.title =
      "Outbound Learning & Corporate Programs | Greenzone Adventures";
  }, []);

  return (
    <div className="bg-white">
      {/* 1. HERO - SEO INTRODUCTION */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1440"
            alt="Outbound Learning Programs"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/80 via-forest/40 to-forest" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-10 animate-fade-in text-emerald-pop shadow-2xl">
            <Target className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Primary Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-white leading-[0.9] sm:leading-[0.85] tracking-tighter mb-8 sm:mb-10 animate-fade-in-up">
            Built for <br className="hidden sm:block" />
            <span className="text-emerald-pop italic">Performance.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/50 max-w-3xl mx-auto font-medium leading-tight animate-fade-in-up animate-delay-200 px-4 sm:px-0">
            Specialized experiential modules designed to build leadership,
            resilience, and emotional intelligence through structured nature-led
            journeys.
          </p>
        </div>
      </section>

      {programCategories.map((cat, idx) => (
        <Section
          key={cat.id}
          id={cat.id}
          variant={cat.variant}
          subtitle={cat.subtitle}
          subtitleIcon={cat.subtitleIcon}
          title={
            <span
              className={
                cat.variant === "forest" ? "text-white" : "text-forest"
              }
            >
              {cat.title}
            </span>
          }
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-center">
            <div
              className={`lg:col-span-7 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="max-w-2xl">
                <p
                  className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-medium leading-tight ${cat.variant === "forest" ? "text-white/70" : "text-forest/70"}`}
                >
                  {cat.description}
                </p>

                {cat.subsections ? (
                  <div className="grid gap-6">
                    {cat.subsections.map((sub, sidx) => (
                      <div
                        key={sidx}
                        className={`p-6 sm:p-10 rounded-card shadow-premium transition-all duration-500 hover:-translate-y-1 ${
                          cat.variant === "sand"
                            ? "bg-white"
                            : cat.variant === "forest"
                              ? "bg-white/5 backdrop-blur-md border border-white/5"
                              : "bg-forest text-white"
                        }`}
                      >
                        <h3
                          className={`text-2xl font-heading font-black mb-3 tracking-tighter ${
                            cat.variant === "sand"
                              ? "text-forest"
                              : "text-white"
                          }`}
                        >
                          {sub.title}
                        </h3>
                        <p
                          className={`text-sm mb-6 ${
                            cat.variant === "sand"
                              ? "text-forest/50"
                              : "text-white/50"
                          }`}
                        >
                          {sub.desc}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {sub.outcomes.map((outcome, oidx) => (
                            <span
                              key={oidx}
                              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-pop bg-emerald-pop/10 px-3 py-1 rounded-full"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Who Section */}
                    <div
                      className={`flex gap-4 sm:gap-6 p-5 sm:p-6 rounded-card shadow-premium transition-all duration-500 ${
                        cat.variant === "sand"
                          ? "bg-white"
                          : cat.variant === "forest"
                            ? "bg-white/5 backdrop-blur-md border border-white/5"
                            : "bg-forest text-white"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xl ${
                          cat.variant === "sand"
                            ? "bg-forest text-emerald-pop"
                            : "bg-white/10 text-emerald-pop"
                        }`}
                      >
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      </div>
                      <div>
                        <h4
                          className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-1 sm:mb-2 ${
                            cat.variant === "sand"
                              ? "text-forest/40"
                              : "text-white/40"
                          }`}
                        >
                          Target Audience
                        </h4>
                        <p
                          className={`text-base sm:text-lg font-medium leading-tight ${
                            cat.variant === "sand"
                              ? "text-forest/80"
                              : "text-white/80"
                          }`}
                        >
                          {cat.who}
                        </p>
                      </div>
                    </div>

                    {/* Outcomes Section */}
                    <div
                      className={`flex gap-6 p-6 rounded-card shadow-premium transition-all duration-500 ${
                        cat.variant === "sand"
                          ? "bg-white"
                          : cat.variant === "forest"
                            ? "bg-white/5 backdrop-blur-md border border-white/5"
                            : "bg-forest text-white"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xl ${
                          cat.variant === "sand"
                            ? "bg-forest text-emerald-pop"
                            : "bg-white/10 text-emerald-pop"
                        }`}
                      >
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`text-xs font-black uppercase tracking-[0.2em] mb-4 ${
                            cat.variant === "sand"
                              ? "text-forest/40"
                              : "text-white/40"
                          }`}
                        >
                          Key Outcomes
                        </h4>
                        <div className="grid gap-3">
                          {cat.outcomes.map((outcome, oidx) => (
                            <div key={oidx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-pop" />
                              <span
                                className={`text-sm font-bold ${
                                  cat.variant === "sand"
                                    ? "text-forest/60"
                                    : "text-white/60"
                                }`}
                              >
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {cat.duration && (
                      <div
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-card shadow-premium transition-all duration-500 ${
                          cat.variant === "sand"
                            ? "bg-white text-forest"
                            : cat.variant === "forest"
                              ? "bg-white/5 backdrop-blur-md border border-white/5 text-white"
                              : "bg-forest text-white"
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-pop" />
                        <span className="text-xs font-black uppercase tracking-widest">
                          Typical Duration: {cat.duration}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div
              className={`lg:col-span-5 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="relative group">
                <div
                  className={`absolute -inset-10 border rounded-card -z-10 animate-float ${cat.variant === "forest" ? "border-white/5" : "border-forest/5"}`}
                />
                <div className="relative aspect-3/4 rounded-image overflow-hidden shadow-premium group-hover:shadow-[0_50px_100px_rgba(10,30,20,0.15)] transition-all duration-1000">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent ${cat.variant === "forest" ? "from-forest/60" : "from-forest/40"}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* FINAL CTA */}
      <FinalCTA
        variant="charcoal"
        bgImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1440"
        icon={Compass}
        title={
          <>
            Ready to Configure <br />
            <span className="text-emerald-pop italic">Your Evolution.</span>
          </>
        }
        description="Our experts specialize in tailoring these modules to your organization's specific behavioral and operational needs."
        buttons={[
          {
            label: "Request Configuration",
            to: "/contact",
            variant: "emerald",
          },
          { label: "View Our Team", to: "/about", variant: "outline" },
        ]}
      />
    </div>
  );
}
