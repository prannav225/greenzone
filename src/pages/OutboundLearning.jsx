import Section from "../components/layout/Section";
import Hero from "../components/layout/Hero";
import IntroSection from "../components/layout/IntroSection";
import ImmersiveContainer from "../components/layout/ImmersiveContainer";
import FeatureCard from "../components/ui/FeatureCard";
import ProcessFlow from "../components/ui/ProcessFlow";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";
import {
  OBL_HERO,
  OBL_INTRO,
  OBL_FEATURES,
  OBL_TRACKS,
  OBL_PROCESS,
  OBL_OUTCOMES,
} from "../data/oblData";
import { ShieldCheck, Mountain, Target, CheckCircle2 } from "lucide-react";

export default function OutboundLearning() {
  useEffect(() => {
    document.title = "Outbound Learning (OBL) | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        priority={true}
        bgImage={OBL_HERO.bgImage}
        eyebrow={
          <>
            <OBL_HERO.eyebrow.icon className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {OBL_HERO.eyebrow.text}
            </span>
          </>
        }
        title={
          <>
            {OBL_HERO.title[0]} <br />
            <span className="text-accent-gold italic">{OBL_HERO.title[1]}</span>
            <span className="text-accent-gold italic">
              {OBL_HERO.titleGlow}
            </span>
          </>
        }
        description={OBL_HERO.description}
        primaryButton={{
          to: "#program-tiers",
          label: "Explore OBL Tracks",
        }}
        showScrollIndicator={true}
      />

      {/* 2. WHAT IS OBL? */}
      <IntroSection
        id="what-is-obl"
        subtitle="The Methodology"
        subtitleIcon={<OBL_HERO.eyebrow.icon className="text-accent-gold" />}
        bgImage={OBL_INTRO.bgImage}
        title={OBL_INTRO.title}
        mainText={OBL_INTRO.mainText}
        subText={OBL_INTRO.subText}
        quote={OBL_INTRO.quote}
      >
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {OBL_FEATURES.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.desc}
              icon={feature.icon}
              variant="glass"
              layout="vertical"
              className="p-10"
            />
          ))}
        </div>
      </IntroSection>

      {/* 3. PROGRAM TIERS */}
      <Section
        id="program-tiers"
        variant="forest"
        subtitle="Tracks"
        subtitleIcon={<ShieldCheck className="text-accent-gold" />}
        title="Experience Tracks"
        center
        padding="sm"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {OBL_TRACKS.map((track, idx) => (
            <div
              key={idx}
              className="relative group p-10 md:p-14 rounded-[3.5rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-700 overflow-hidden shadow-premium h-full flex flex-col"
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-3xl rounded-full -mr-32 -mt-32 group-hover:bg-accent-gold/10 transition-colors`}
              />

              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-accent-gold mb-10">
                  <track.icon className="w-3.5 h-3.5" />
                  <span>{track.title}</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-heading font-black text-white mb-3">
                  {track.focus}
                </h4>
                <p className="text-white/50 text-base mb-10 font-medium italic leading-relaxed max-w-lg">
                  {track.desc}
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {track.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gold group-hover/item:scale-125 transition-transform shrink-0" />
                      <span className="text-white/70 text-sm font-medium leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. THE JOURNEY */}
      <Section
        id="experience-flow"
        variant="forest"
        subtitle="The Process"
        subtitleIcon={<Mountain className="text-accent-gold" />}
        title="Field Methodology"
        center
        padding="sm"
      >
        <ProcessFlow steps={OBL_PROCESS} />
      </Section>

      {/* 6. KEY OUTCOMES */}
      <Section
        id="outcomes"
        variant="forest"
        subtitle="The Impact"
        subtitleIcon={<Target className="text-accent-gold" />}
        title="Program Outcomes"
        center
        padding="sm"
        className="pb-10"
      >
        <ImmersiveContainer
          bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
          alt="Professional Transformation"
          overlayOpacity="opacity-50"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {OBL_OUTCOMES.map((outcome, idx) => (
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
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000"
        icon={CheckCircle2}
        title={
          <>
            Action-Based Learning. <br />
            <span className="text-accent-gold italic">Real-World Impact.</span>
          </>
        }
        description="Replace static learning with dynamic outdoor environments. Let's design an OBL experience that transforms your team's collective grit and strategic precision."
        buttons={[
          {
            label: "Consult Our Experts",
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
