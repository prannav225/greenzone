import Section from "../components/layout/Section";
import Hero from "../components/layout/Hero";
import IntroSection from "../components/layout/IntroSection";
import ImmersiveContainer from "../components/layout/ImmersiveContainer";
import FeatureCard from "../components/ui/FeatureCard";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";
import {
  EQ_HERO,
  EQ_INTRO,
  EQ_COMPONENTS,
  EQ_STRUCTURE,
  EQ_AUDIENCE,
  EQ_OUTCOMES,
} from "../data/eqData";
import {
  ShieldCheck,
  Heart,
  Brain,
  Users,
  CheckCircle2Icon,
} from "lucide-react";

export default function EQ() {
  useEffect(() => {
    document.title = "Emotional Intelligence (EQ) | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        bgImage={EQ_HERO.bgImage}
        eyebrow={
          <>
            <EQ_HERO.eyebrow.icon className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {EQ_HERO.eyebrow.text}
            </span>
          </>
        }
        title={
          <>
            {EQ_HERO.title[0]} <br />
            <span className="text-accent-gold italic">{EQ_HERO.titleGlow}</span>
          </>
        }
        description={EQ_HERO.description}
        primaryButton={{
          to: "#program-structure",
          label: "Explore EQ Program",
        }}
        showScrollIndicator={true}
      />

      {/* 2. WHAT IS EMOTIONAL INTELLIGENCE? */}
      <IntroSection
        id="what-is-eq"
        subtitle="Definition"
        subtitleIcon={<EQ_HERO.eyebrow.icon className="text-accent-gold" />}
        bgImage={EQ_INTRO.bgImage}
        title={EQ_INTRO.title}
        mainText={EQ_INTRO.mainText}
        subText={EQ_INTRO.subText}
        quote={EQ_INTRO.quote}
      />

      {/* 3. THE FIVE CORE COMPONENTS */}
      <Section
        id="core-components"
        variant="forest"
        subtitle="The Framework"
        subtitleIcon={<ShieldCheck className="text-accent-gold" />}
        title="Five Core Components"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {EQ_COMPONENTS.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="text-center items-center"
            />
          ))}
        </div>
      </Section>

      {/* 4. PROGRAM STRUCTURE */}
      <Section
        id="program-structure"
        variant="forest"
        subtitle="Workshop"
        subtitleIcon={<Heart className="text-accent-gold" />}
        title="Program Structure"
        className="scroll-mt-20"
        padding="sm"
      >
        <div className="relative group rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/5">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-forest-deep/40 via-transparent to-forest-deep/40 opacity-30" />
            <div className="absolute inset-0 opacity-10 atmospheric-noise"></div>
          </div>

          <div className="relative z-10 p-10 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">
                  {EQ_STRUCTURE.title[0]} <br />
                  <span className="text-accent-gold">
                    {EQ_STRUCTURE.title[1]}
                  </span>
                </h3>
                <p className="text-lg text-white/60 mb-10 leading-relaxed font-medium">
                  {EQ_STRUCTURE.desc}
                </p>

                <div className="grid gap-4">
                  {EQ_STRUCTURE.points.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-accent-gold group-hover/item:scale-150 transition-transform" />
                      <span className="text-white/70 text-base font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-full border border-white/5 p-8 animate-slow-spin-reverse relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold backdrop-blur-xl border border-white/10">
                    <Heart size={20} />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold backdrop-blur-xl border border-white/10">
                    <Brain size={20} />
                  </div>
                  <div className="w-full h-full rounded-full border border-white/10 p-12">
                    <img
                      src={EQ_STRUCTURE.image}
                      alt="Workshop Interaction"
                      className="w-full h-full object-cover rounded-full opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. WHO THIS PROGRAM IS FOR */}
      <Section
        id="audience"
        variant="forest"
        subtitle="Targeted For"
        subtitleIcon={<Users className="text-accent-gold" />}
        title="Designed For"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQ_AUDIENCE.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="text-center items-center p-10"
            />
          ))}
        </div>
      </Section>

      {/* 6. KEY WORKPLACE OUTCOMES */}
      <Section
        id="outcomes"
        variant="forest"
        subtitle="The Result"
        subtitleIcon={<CheckCircle2Icon className="text-accent-gold" />}
        title="Workplace Outcomes"
        center
        padding="sm"
      >
        <ImmersiveContainer
          bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
          alt="Professional Growth"
          overlayOpacity="opacity-50"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {EQ_OUTCOMES.map((outcome, idx) => (
              <FeatureCard
                key={idx}
                title={outcome.title}
                description={outcome.desc}
                icon={ShieldCheck}
                variant="glass"
                layout="vertical"
                className={`number-card num-${(idx + 1).toString()} p-10`}
              />
            ))}
          </div>
        </ImmersiveContainer>
      </Section>

      {/* 7. FINAL CTA */}
      <FinalCTA
        variant="forest"
        bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
        icon={Heart}
        title={
          <>
            Lead with Clarity. <br />
            <span className="text-accent-gold italic">
              Respond with Confidence.
            </span>
          </>
        }
        description="Let’s design an Emotional Intelligence program tailored to your organization. Move beyond reaction—move into leadership resonance."
        buttons={[
          {
            label: "Schedule a Consultation",
            to: "/contact",
            variant: "primary",
          },
          {
            label: "View All Workshops",
            to: "/workshops",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
