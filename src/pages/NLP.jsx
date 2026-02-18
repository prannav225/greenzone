import Section from "../components/layout/Section";
import Hero from "../components/layout/Hero";
import IntroSection from "../components/layout/IntroSection";
import ImmersiveContainer from "../components/layout/ImmersiveContainer";
import FeatureCard from "../components/ui/FeatureCard";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";
import {
  NLP_HERO,
  NLP_INTRO,
  NLP_FORMATS,
  NLP_APPLICATIONS,
  NLP_AUDIENCE,
  NLP_OUTCOMES,
} from "../data/nlpData";
import {
  Target,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function NLP() {
  useEffect(() => {
    document.title = "NLP Workshop | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        priority={true}
        bgImage={NLP_HERO.bgImage}
        eyebrow={
          <>
            <NLP_HERO.eyebrow.icon className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {NLP_HERO.eyebrow.text}
            </span>
          </>
        }
        title={
          <>
            {NLP_HERO.title[0]} <br />
            <span className="text-accent-gold italic">{NLP_HERO.title[1]}</span>
            <span className="text-accent-gold italic">
              {NLP_HERO.titleGlow}
            </span>
          </>
        }
        description={NLP_HERO.description}
        primaryButton={{
          to: "#program-formats",
          label: "Explore NLP Tiers",
        }}
        showScrollIndicator={true}
      />

      {/* 2. WHAT IS NLP? */}
      <IntroSection
        id="what-is-nlp"
        subtitle="Fundamentals"
        subtitleIcon={<NLP_HERO.eyebrow.icon className="text-accent-gold" />}
        bgImage={NLP_INTRO.bgImage}
        title={NLP_INTRO.title}
        mainText={NLP_INTRO.mainText}
        subText={NLP_INTRO.subText}
        quote={NLP_INTRO.quote}
      >
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {NLP_INTRO.concepts.map((concept, idx) => (
            <div
              key={idx}
              className="lg:p-8 p-5 lg:rounded-3xl rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                <concept.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {concept.title}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {concept.desc}
              </p>
            </div>
          ))}
        </div>
      </IntroSection>

      {/* 3. PROGRAM FORMATS (THE THREE TIERS) */}
      <Section
        id="program-formats"
        variant="forest"
        subtitle="Flexibility"
        subtitleIcon={<Zap className="text-accent-gold" />}
        title="Program Formats"
        center
        padding="sm"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {NLP_FORMATS.map((tier, idx) => (
            <div
              key={idx}
              className={`relative group lg:p-10 p-7 lg:rounded-3xl rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-700 overflow-hidden shadow-premium h-full flex flex-col`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${tier.accent}/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-${tier.accent}/10 transition-colors`}
              />

              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-accent-gold mb-8">
                  <tier.icon className="w-3 h-3" />
                  <span>{tier.tier}</span>
                </div>

                <h4 className="text-2xl font-heading font-black text-white mb-2">
                  {tier.focus}
                </h4>
                <p className="text-white/50 text-sm mb-8 font-medium italic leading-relaxed">
                  {tier.desc}
                </p>

                <div className="space-y-4">
                  {tier.points.map((point, pIdx) => (
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

      {/* 4. KEY APPLICATIONS */}
      <Section
        id="applications"
        variant="forest"
        subtitle="Practicality"
        subtitleIcon={<Target className="text-accent-gold" />}
        title="Impact Domains"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NLP_APPLICATIONS.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="p-5"
            />
          ))}
        </div>
      </Section>

      {/* 5. DESIGNED FOR */}
      <Section
        id="audience"
        variant="forest"
        subtitle="Targeted For"
        subtitleIcon={<CheckCircle2 className="text-accent-gold" />}
        title="Target Audience"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NLP_AUDIENCE.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="text-left items-center p-5"
            />
          ))}
        </div>
      </Section>

      {/* 6. KEY OUTCOMES */}
      <Section
        id="outcomes"
        variant="forest"
        subtitle="The Result"
        subtitleIcon={<ShieldCheck className="text-accent-gold" />}
        title="Program Outcomes"
        center
        padding="sm"
        className="pb-10"
      >
        <ImmersiveContainer
          bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
          alt="Professional Growth"
          overlayOpacity="opacity-50"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {NLP_OUTCOMES.map((outcome, idx) => (
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
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
        icon={TrendingUp}
        title={
          <>
            Master Your Mind. <br />
            <span className="text-accent-gold italic">
              Elevate Your Presence.
            </span>
          </>
        }
        description="Whether you are an executive or a high-performer, NLP provides the foundational software for professional excellence."
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
