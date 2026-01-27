import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Users,
  Target,
  Heart,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Brain,
  Sparkles,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";

const founders = [
  {
    name: "Kumar Srivatsa MS",
    role: "Founder",
    bio: "Kumar founded Greenzone Adventures to bridge a critical gap between adventure tourism and human development. An entrepreneur by profession and an adventurer by conviction, his work focuses on designing experiential journeys that foster leadership, resilience, and self-discovery—far beyond surface-level exploration. His vision is simple: adventure should change how people think, decide, and lead.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Ashrith Paul",
    role: "Co-Founder | Operations & Delivery",
    bio: "Ashrith brings structure, reliability, and operational excellence to Greenzone’s experiences. With deep expertise in process design, implementation, and client management, he ensures that every journey—no matter how complex—runs with clarity, safety, and precision. His role is to make transformation repeatable, responsible, and real.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Praneet Varma",
    role: "Co-Founder | Experience Design",
    bio: "Praneet leads Greenzone’s creative and experiential design. With a strong background in entrepreneurship and design, he focuses on crafting journeys that feel intentional, immersive, and emotionally coherent—where every detail supports reflection and learning. For him, experience design is not about aesthetics—it’s about meaning.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-sky-mist">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1920"
            alt="Mountain Expedition"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />

          {/* Subtle Technical Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <div className="max-w-7xl mx-auto h-full grid grid-cols-12 px-8">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-forest/20 h-full last:border-r-0"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-emerald-pop text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-3xl">
            <Users className="w-4 h-4" />
            Human Presence
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.8] tracking-tighter mb-8 drop-shadow-sm">
            The Minds Behind <br />
            <span className="text-emerald-pop italic">The Descent.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-tight">
            Greenzone Adventures is shaped by explorers, psychologists, and
            designers who believe growth is earned through experience—not
            instruction.
          </p>
        </div>
      </section>

      {/* 2. FOUNDERS - Belief-Driven (Sand Section) */}
      <Section
        variant="sand"
        className="relative overflow-visible"
        padding="sm"
        subtitle="Belief-Driven Leadership"
        subtitleIcon={<Heart className="w-3 h-3" />}
        title={
          <>
            Leadership That <br />
            <span className="italic text-emerald-pop">
              Steps Into the Field.
            </span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-12">
            <p className="text-forest/60 text-lg font-medium max-w-xl mb-10">
              Greenzone was founded by individuals who believe leadership cannot
              be taught from the sidelines—it must be lived, tested, and
              reflected upon.
            </p>
          </div>

          <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
            {founders.map((founder, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="aspect-4/5 rounded-[2rem] overflow-hidden shadow-premium transition-all duration-1000 group-hover:shadow-4xl relative mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest/70 via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-col grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-heading font-black text-forest mb-1 tracking-tighter leading-none">
                      {founder.name}
                    </h3>
                    <p className="text-emerald-pop font-bold uppercase tracking-widest text-[9px]">
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-forest/60 text-base leading-relaxed font-medium">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. PSYCHOLOGICAL LEADERSHIP - Dr. Padmashri S. Rao */}
      <Section
        variant="mist"
        className="relative overflow-visible"
        padding="sm"
        subtitle="Psychological Backbone"
        subtitleIcon={<Brain className="w-3 h-3 text-emerald-pop" />}
        title={
          <>
            Where Science <br />
            <span className="text-emerald-pop italic">Meets Experience.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-12 mb-10">
            <p className="text-forest/60 text-lg font-medium transition-colors">
              Dr. Padmashri S. Rao is a distinguished Clinical Psychologist,
              Corporate Trainer, and Certified NLP Practitioner.
            </p>
          </div>

          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-8 border border-forest/10 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-all duration-700" />
              <div className="aspect-4/5 rounded-[2rem] overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                  alt="Dr. Padmashri S. Rao"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div>
              <h3 className="text-3xl font-heading font-black text-forest mb-2 tracking-tight">
                Dr. Padmashri S. Rao
              </h3>
              <p className="text-emerald-pop font-black uppercase tracking-widest text-xs">
                Clinical Psychologist | NLP & EQ Lead
              </p>
            </div>

            <p className="text-forest/60 text-lg md:text-xl font-medium leading-relaxed">
              With a PhD in Cognitive Psychology and experience working with
              institutions such as HAL, ISRO, and NIMHANS, she brings scientific
              rigor to Greenzone’s experiential programs.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Psychologically Safe",
                  icon: <ShieldCheck className="w-4 h-4" />,
                },
                {
                  label: "Emotionally Intelligent",
                  icon: <Heart className="w-4 h-4" />,
                },
                {
                  label: "Evidence-based",
                  icon: <Target className="w-4 h-4" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-emerald-pop/10 backdrop-blur-md border border-emerald-pop/20 flex flex-col gap-4 shadow-sm hover:bg-emerald-pop/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-pop shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-forest font-black text-[10px] leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-forest/50 text-base font-medium leading-relaxed max-w-2xl border-l-4 border-emerald-pop pl-8">
              She integrates NLP, Emotional Intelligence, resilience training,
              and experiential learning to translate outdoor experiences into
              lasting personal and professional growth.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. FACILITATION PHILOSOPHY - Ethos Centered */}
      <Section
        variant="charcoal"
        className="relative overflow-hidden"
        padding="sm"
        subtitle="Our Facilitation Ethos"
        subtitleIcon={<Sparkles className="w-3 h-3" />}
        center
        title={
          <>
            Guided by <br />
            <span className="italic text-emerald-pop">
              Principles, Not Personalities.
            </span>
          </>
        }
      >
        <div className="text-center">
          <p className="text-white/60 text-lg font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
            Greenzone does not rely on celebrity facilitators or performative
            leadership. Our experiences are guided by trained professionals,
            psychologists, and field leaders.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "The environment teaches first",
                desc: "Nature provides the raw feedback. We provide the container for it to be heard.",
              },
              {
                label: "The facilitator holds space",
                desc: "Our role isn't to direct the outcome—it's to ensure the experience is reflected upon.",
              },
              {
                label: "Reflection creates meaning",
                desc: "Transformation happens in the pause between the action and the integration.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] shadow-premium border border-white/10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 text-left flex flex-col h-full group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-pop/20 flex items-center justify-center text-emerald-pop mb-6 shrink-0 transition-transform group-hover:scale-110">
                  <span className="font-heading font-black text-base">
                    0{idx + 1}
                  </span>
                </div>
                <div className="grow">
                  <p className="text-white font-heading font-black text-xl mb-3 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. FINAL CTA */}
      <FinalCTA
        variant="forest"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
        icon={MessageSquare}
        title={
          <>
            Meet Your <br />
            <span className="text-emerald-pop italic">Collaborators.</span>
          </>
        }
        description="Let’s start a conversation about designing an experience that serves your people and your purpose."
        buttons={[{ label: "Start the Conversation", to: "/contact" }]}
      />
    </div>
  );
}
