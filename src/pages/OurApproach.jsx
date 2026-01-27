import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Leaf,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle,
  Zap,
  Compass,
  Target,
  Search,
  PenTool,
  Mountain,
  MessageSquare,
  Waves,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";

export default function OurApproach() {
  return (
    <div>
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-sky-mist">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1920"
            alt="Mountain Mist"
            className="w-full h-full object-cover scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-emerald-pop text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm animate-fade-in">
            <Compass className="w-3.5 h-3.5" />
            The Master Framework
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-8">
            Engineered for <br />
            <span className="text-emerald-pop italic">Transcendence.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-tight">
            We architect environments where human growth isn't just
            possible—it's inevitable.
          </p>
        </div>
      </section>

      {/* 2. CORE PRINCIPLES */}
      <Section
        variant="sand"
        padding="md"
        subtitle="The Foundations"
        subtitleIcon={<Zap className="w-3.5 h-3.5" />}
        title={
          <>
            The Pillars of <br />
            <span className="italic text-emerald-pop">Intentionality.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: <Leaf className="w-5 h-5" />,
              title: "Nature as Facilitator",
              desc: "We leverage wilderness constraints to strip away professional facades.",
              label: "01",
            },
            {
              icon: <Brain className="w-5 h-5" />,
              title: "Psychology-Backed",
              desc: "Integrating behavioral science and neuro-leadership into every journey.",
              label: "02",
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Active Reflection",
              desc: "Deft facilitation that crystallizes breakthroughs into business frameworks.",
              label: "03",
            },
          ].map((principle, idx) => (
            <div
              key={idx}
              className="group relative bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-white/60 shadow- premium transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col items-start min-h-[220px] hover:bg-white/60"
            >
              <div className="absolute top-8 right-8 text-6xl font-heading font-black text-forest/5 select-none transition-all leading-none duration-500">
                {principle.label}
              </div>

              <div className="relative z-10 w-12 h-12 rounded-xl bg-forest text-emerald-pop flex items-center justify-center shrink-0 shadow-md transition-all duration-300 mb-8">
                {principle.icon}
              </div>

              <div className="relative z-10 grow">
                <h3 className="text-2xl font-heading font-black text-forest mb-4 tracking-tight leading-none group-hover:text-emerald-pop transition-colors">
                  {principle.title}
                </h3>
                <p className="text-forest/50 font-medium text-lg leading-tight">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. THE FIVE-STEP METHODOLOGY - Dark/Forest Section */}
      <Section
        variant="forest"
        subtitle="The Protocol"
        subtitleIcon={<Target className="w-4 h-4" />}
        title={
          <>
            The 5-Step <br />
            <span className="italic text-emerald-pop">Cycle.</span>
          </>
        }
      >
        <div className="space-y-32 lg:space-y-40">
          {[
            {
              step: "01",
              title: "Diagnosis & Alignment",
              icon: <Search className="w-10 h-10" />,
              desc: "Before even stepping into nature, we audit the existing culture or personal blockages.",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
            },
            {
              step: "02",
              title: "Descent & Detachment",
              icon: <Compass className="w-10 h-10" />,
              desc: "Disconnecting from the systemic noise of the digital world. This phase is about stripping away the corporate mask.",
              image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
            },
            {
              step: "03",
              title: "Constructed Adversity",
              icon: <Mountain className="w-10 h-10" />,
              desc: "The core experience. We introduce curated stress to activate dormant leadership archetypes.",
              image:
                "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200",
            },
            {
              step: "04",
              title: "Synthesis & Reflection",
              icon: <PenTool className="w-10 h-10" />,
              desc: "Moving from the 'what' to the 'why'. We translate mountain successes into business breakthroughs.",
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
            },
            {
              step: "05",
              title: "Re-entry Protocol",
              icon: <Zap className="w-10 h-10" />,
              desc: "Ensuring the change sticks. We design a post-journey roadmap into your daily ecosystem.",
              image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
            >
              <div
                className={`lg:col-span-6 space-y-6 ${idx % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}
              >
                <div className="text-[6rem] md:text-[8rem] font-heading font-black text-white/5 leading-none h-20 mb-6">
                  {item.step}
                </div>
                <div className="flex items-center gap-6 mb-6 text-emerald-pop">
                  {item.icon}
                  <h3 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/50 text-xl font-medium leading-tight max-w-xl">
                  {item.desc}
                </p>
              </div>
              <div
                className={`lg:col-span-6 ${idx % 2 === 0 ? "order-1 lg:order-2" : "order-1"}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-6 border border-white/5 rounded-3xl -z-10 group-hover:scale-105 transition-all duration-1000" />
                  <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-4xl ring-1 ring-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. SAFETY & ETHICS - Redesigned and Compact */}
      <Section variant="sand" className="relative overflow-visible pb-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-5 pt-8">
            <div className="lg:sticky lg:top-40 space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-forest/40 block">
                  Safety & Standards
                </span>
                <h2 className="text-6xl lg:text-7xl font-heading font-black text-forest tracking-tighter leading-none">
                  The Ethics of <br />
                  <span className="text-emerald-pop italic">Adversity.</span>
                </h2>
              </div>
              <p className="text-forest/60 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                We manage high-consequence environments with surgical precision.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-emerald-pop" />,
                title: "Clinical Safety Standards",
                desc: "Certified WFR guides with constant satellite medical protocols globally.",
              },
              {
                icon: <Users className="w-5 h-5 text-emerald-pop" />,
                title: "Radical Inclusivity",
                desc: "Terrain calibrated to ensure psychological challenge for all levels.",
              },
              {
                icon: <Leaf className="w-5 h-5 text-emerald-pop" />,
                title: "Ethical Immersion",
                desc: "Leave No Trace plus active environmental stewardship.",
              },
            ].map((standard, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md p-8 lg:p-10 rounded-[2.5rem] border border-white/60 shadow-2xl hover:bg-white/50 transition-all duration-700 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {standard.icon}
                </div>
                <h4 className="text-2xl lg:text-3xl font-heading font-black text-forest mb-3 tracking-tight">
                  {standard.title}
                </h4>
                <p className="text-forest/50 font-medium text-lg lg:text-xl leading-relaxed">
                  {standard.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. FINAL CTA */}
      <FinalCTA
        variant="sky-mist"
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1920"
        icon={Zap}
        title={
          <>
            Architect Your <br />
            <span className="text-emerald-pop italic">Evolution.</span>
          </>
        }
        description="Let's design a configuration that triggers your next horizon."
        buttons={[
          { label: "Start Configuration", to: "/contact" },
          {
            label: "Discover Experiences",
            to: "/experiences",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
