import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Brain,
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Users,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";

const team = [
  {
    name: "Kumar Srivatsa MS",
    role: "Founder",
    shortRole: "Leadership & Vision",
    bio: "An entrepreneur by profession and an adventurer by conviction, Kumar founded Greenzone to bridge the gap between adventure and development. He specializes in designing journeys that foster leadership, resilience, and self-discovery.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    stats: "15+ Years Experience",
  },
  {
    name: "Ashrith Paul",
    role: "Co-Founder",
    shortRole: "Operations & Safety",
    bio: "Ashrith ensures that every Greenzone journey runs with surgical precision. With deep expertise in process design and risk management, he makes complex transformation repeatable, responsible, and real.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    stats: "Certified Field Lead",
  },
  {
    name: "Praneet Varma",
    role: "Co-Founder",
    shortRole: "Experience Design",
    bio: "Praneet leads experience design, crafting journeys that are emotionally coherent and immersive. For him, adventure is a medium for meaning, where every detail supports reflection and growth.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    stats: "MBA, Experience Architect",
  },
  {
    name: "Dr. Padmashri S. Rao",
    role: "Lead Psychologist",
    shortRole: "Cognitive Science",
    bio: "A distinguished psychologist and NLP practitioner, Dr. Padmashri brings scientific rigor to our programs. She integrates cognitive science with outdoor experience to create lasting behavioral change.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    stats: "PhD in Psychology",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* 1. HERO - Introduction */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1440"
            alt="Human Growth in Nature"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/80 via-forest/40 to-forest" />

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-10 animate-fade-in text-emerald-pop shadow-2xl">
            <Compass className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Established Foundations
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-10 animate-fade-in-up">
            Human <br />
            Development <br />
            <span className="text-emerald-pop italic">Redefined.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/50 max-w-3xl mx-auto font-medium leading-tight animate-fade-in-up animate-delay-200">
            Greenzone Adventures is a specialized experiential learning
            organization based in Bangalore, bridging theory and behavior
            through structured nature-led journeys.
          </p>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-0.5 h-12 bg-white rounded-full mx-auto" />
        </div>
      </section>

      {/* 2. CORE EXPERTISE - Fixed "Lazy" Boxes */}
      <Section
        variant="mist"
        subtitle="Operational Excellence"
        subtitleIcon={<Zap className="w-3.5 h-3.5" />}
        title={
          <>
            Specialized <br />
            <span className="text-forest italic">Training Segments.</span>
          </>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
          {[
            {
              title: "OBL Programs",
              tag: "Transformation",
              desc: "Intensive field-based learning designed to trigger deep organizational shifts.",
              icon: <Zap className="w-5 h-5" />,
            },
            {
              title: "Corporate Teams",
              tag: "Leadership Labs",
              desc: "Strategic workshops focusing on synergy, alignment, and high-performance synergy.",
              icon: <Target className="w-5 h-5" />,
            },
            {
              title: "EQ & NLP",
              tag: "Cognitive Skillset",
              desc: "Integrating psychological frameworks to enhance personal and professional effectiveness.",
              icon: <Brain className="w-5 h-5" />,
            },
            {
              title: "Student Readiness",
              tag: "Agency & Grit",
              desc: "Equipping young professionals with the resilience and soft skills needed for the future.",
              icon: <ShieldCheck className="w-5 h-5" />,
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="relative group p-10 rounded-3xl bg-white/40 backdrop-blur-md border border-emerald-pop/60 shadow-premium overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/60"
            >
              {/* Subtle background icon */}
              <div className="absolute -top-6 -right-6 text-forest/5 group-hover:text-forest/10 transition-colors duration-500 scale-[2.5] opacity-20">
                {service.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-pop mb-4 block transition-colors">
                  {service.tag}
                </span>
                <h3 className="text-3xl font-heading font-black text-forest mb-4 tracking-tighter leading-none transition-colors">
                  {service.title}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed font-medium transition-colors">
                  {service.desc}
                </p>

                <div className="mt-10 flex items-center gap-2 text-forest/40 font-black text-[9px] uppercase tracking-widest group-hover:text-emerald-pop transition-colors">
                  Learn More{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. THE TEAM - Fixed Mobile Visibility */}
      <Section
        variant="sand"
        subtitle="The Core Team"
        subtitleIcon={<Users className="w-3.5 h-3.5" />}
        title={
          <>
            Leadership & <br />
            <span className="text-emerald-pop italic">
              Strategic Intelligence.
            </span>
          </>
        }
      >
        <div className="space-y-16 lg:space-y-24">
          {/* Founders Group */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {team.slice(0, 3).map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center sm:items-start"
              >
                <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl mb-8 ring-1 ring-forest/10 group-hover:shadow-forest/20 transition-all duration-700">
                  <img
                    src={`${member.image.split("?")[0]}?auto=format&fit=crop&q=80&w=600`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-4 bottom-4 lg:inset-x-6 lg:bottom-6">
                    <div className="bg-forest/60 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-4xl relative z-10 overflow-hidden transform transition-all duration-500 group-hover:bg-forest/80">
                      <div className="relative z-20">
                        <p className="text-emerald-pop font-black text-[10px] uppercase tracking-[0.25em] mb-2">
                          {member.shortRole}
                        </p>
                        <p className="text-white font-heading font-black text-2xl tracking-tighter leading-none mb-4">
                          {member.name}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.2em] font-black text-[9px]">
                          <span className="text-emerald-pop/80">
                            {member.role}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-white/40">{member.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-2 mt-4">
                  <p className="text-forest/60 text-sm leading-relaxed font-medium italic border-l-2 border-emerald-pop/30 pl-4 max-w-sm">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expert/Psychology Group */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/3">
              {team.slice(3).map((member, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center sm:items-start"
                >
                  <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl mb-8 ring-1 ring-forest/10 group-hover:shadow-forest/20 transition-all duration-700">
                    <img
                      src={`${member.image.split("?")[0]}?auto=format&fit=crop&q=80&w=600`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />

                    <div className="absolute inset-x-4 bottom-4 lg:inset-x-6 lg:bottom-6">
                      <div className="bg-forest/60 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-4xl relative z-10 overflow-hidden transform transition-all duration-500 group-hover:bg-forest/80">
                        <div className="relative z-20">
                          <p className="text-emerald-pop font-black text-[10px] uppercase tracking-[0.25em] mb-2">
                            {member.shortRole}
                          </p>
                          <p className="text-white font-heading font-black text-2xl tracking-tighter leading-none mb-4">
                            {member.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.2em] font-black text-[9px]">
                            <span className="text-emerald-pop/80">
                              {member.role}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-white/40">
                              {member.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-2 mt-4">
                    <p className="text-forest/60 text-sm leading-relaxed font-medium italic border-l-2 border-emerald-pop/30 pl-4 max-w-sm">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PHILOSOPHY - Integrated Growth Framework */}
      <Section
        variant="mist"
        subtitle="The Science of Growth"
        subtitleIcon={<Target className="w-3.5 h-3.5 text-emerald-pop" />}
        title={
          <>
            Where Methodology <br />
            <span className="text-forest italic">Meets the Wild.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-7">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-2xl sm:text-3xl text-forest/80 leading-tight mb-20 font-medium italic border-l-[6px] border-emerald-pop pl-10 pr-4">
                We bridge the gap between academic theory and real-world
                behavior through high-impact, nature-led training.
              </p>

              <div className="grid gap-6">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-emerald-pop" />,
                    title: "Experience First",
                    desc: "Theoretical knowledge is fragile. Lived experience is permanent. We trigger the latter through immersion.",
                  },
                  {
                    icon: <Brain className="w-5 h-5 text-emerald-pop" />,
                    title: "Clinical Rigorousness",
                    desc: "Our workshops are built on Clinical Psychology, NLP, and EQ frameworks to ensure scientific validity.",
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-emerald-pop" />,
                    title: "Surpassing Standards",
                    desc: "Safety is our baseline. Our risk management protocols set the industry standard for outbound training.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col sm:flex-row gap-8 p-10 rounded-3xl bg-white/40 backdrop-blur-md border border-emerald-pop/60 shadow-premium hover:shadow-2xl transition-all duration-700 hover:-translate-x-2 hover:bg-white/60"
                  >
                    <div className="w-16 h-16 rounded-xl bg-forest flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading font-black text-forest mb-3 tracking-tighter">
                        {item.title}
                      </h4>
                      <p className="text-forest/60 text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-10 border border-forest/5 rounded-3xl -z-10 animate-float" />
              <div className="absolute inset-0 bg-forest rounded-3xl translate-x-12 translate-y-12 -z-20 opacity-[0.03]" />

              <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-premium group-hover:shadow-[0_50px_100px_rgba(10,30,20,0.15)] transition-all duration-1000">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                  alt="Growth through Reflection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />

                {/* Floating Insight Panel */}
                <div className="absolute inset-x-6 bottom-6 lg:bottom-10 p-8 lg:p-10 bg-forest/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-4xl group-hover:bg-forest transition-all duration-500 flex flex-col items-center justify-center text-center">
                  <p className="text-emerald-pop font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                    The Formula
                  </p>
                  <p className="text-white font-heading font-black text-xs sm:text-xl lg:text-3xl leading-none tracking-tighter">
                    Action + Reflection ={" "}
                    <span className="text-emerald-pop italic">Evolution.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. FINAL CTA */}
      <FinalCTA
        variant="charcoal"
        bgImage="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1440"
        icon={Compass}
        title={
          <>
            Ready to Forge <br />
            <span className="text-emerald-pop italic">New Ground?</span>
          </>
        }
        description="Connect with our experts to design a specialized outbound configuration for your organization."
        buttons={[
          { label: "Our Programs", to: "/programs", variant: "emerald" },
          { label: "Start Journey", to: "/contact", variant: "outline" },
        ]}
      />
    </div>
  );
}
