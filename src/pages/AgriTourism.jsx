import Section from "../components/layout/Section";
import Hero from "../components/layout/Hero";
import IntroSection from "../components/layout/IntroSection";
import ImmersiveContainer from "../components/layout/ImmersiveContainer";
import FeatureCard from "../components/ui/FeatureCard";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";
import {
  AGRI_HERO,
  AGRI_INTRO,
  AGRI_EXPERIENCES,
  AGRI_OUTCOMES,
  AGRI_AUDIENCE,
  AGRI_FORMAT,
  AGRI_EXCLUSIVITY,
  AGRI_CTA,
} from "../data/agriData";
import { Sprout, ShieldCheck, CheckCircle2, Scale } from "lucide-react";

export default function AgriTourism() {
  useEffect(() => {
    document.title = "Agri Learning Retreats | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="scroll-snap-container md:scroll-snap-type-y-mandatory bg-forest-deep">
      {/* 1. HERO SECTION */}
      <Hero
        priority={true}
        bgImage={AGRI_HERO.bgImage}
        eyebrow={
          <>
            <AGRI_HERO.eyebrow.icon className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {AGRI_HERO.eyebrow.text}
            </span>
          </>
        }
        title={
          <>
            {AGRI_HERO.title[0]} <br />
            <span className="text-accent-gold italic">
              {AGRI_HERO.title[1]}
            </span>
          </>
        }
        description={AGRI_HERO.description}
        primaryButton={{
          to: "/contact",
          label: "Partner With Us",
        }}
        showScrollIndicator={true}
      />

      {/* 2. WHY AGRI LEARNING MATTERS TODAY */}
      <IntroSection
        id="why-it-matters"
        subtitle="Philosophy"
        subtitleIcon={<Sprout className="text-accent-gold" />}
        bgImage={AGRI_INTRO.bgImage}
        title={AGRI_INTRO.title}
        mainText={AGRI_INTRO.mainText}
        subText={AGRI_INTRO.subText}
        quote={AGRI_INTRO.quote}
      />

      {/* 3. WHAT STUDENTS EXPERIENCE */}
      <Section
        id="experience"
        variant="forest"
        subtitle="The Curriculum"
        subtitleIcon={<CheckCircle2 className="text-accent-gold" />}
        title="The Student Experience"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGRI_EXPERIENCES.map((item, i) => (
            <div
              key={i}
              className="group/item relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-gold/20 transition-all duration-700 overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-5 group-hover/item:scale-110 group-hover/item:opacity-10 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-b from-forest-deep via-forest-deep/80 to-forest-deep" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold mb-8 shadow-2xl group-hover/item:bg-accent-gold group-hover/item:text-forest-deep transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-black text-white mb-4 tracking-tight group-hover/item:text-accent-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. LEARNING OUTCOMES */}
      <Section
        id="outcomes"
        variant="forest"
        subtitle="The Result"
        subtitleIcon={<ShieldCheck className="text-accent-gold" />}
        title="Learning Outcomes"
        center
        padding="sm"
      >
        <ImmersiveContainer
          bgImage="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
          alt="Environmental Transformation"
          overlayOpacity="opacity-50"
          className="border-0 sm:border md:rounded-[3rem] p-0 sm:p-14 md:p-20 bg-transparent sm:bg-forest-deep/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {AGRI_OUTCOMES.map((outcome, idx) => (
              <FeatureCard
                key={idx}
                title={outcome.title}
                description={outcome.desc}
                icon={ShieldCheck}
                variant="glass"
                layout="vertical"
                className={`number-card num-${(idx + 1).toString()} p-6 sm:p-10 border-white/5 sm:border-white/10`}
              />
            ))}
          </div>
        </ImmersiveContainer>
      </Section>

      {/* 5. DESIGNED FOR */}
      <Section
        id="audience"
        variant="forest"
        subtitle="Audience"
        subtitleIcon={<CheckCircle2 className="text-accent-gold" />}
        title="Designed For"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGRI_AUDIENCE.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="text-left items-left p-5"
            />
          ))}
        </div>
      </Section>

      {/* 6. EXPERIENCE FORMAT */}
      <Section
        id="format"
        variant="forest"
        subtitle="Logistics"
        subtitleIcon={<Scale className="text-accent-gold" />}
        title="Experience Format"
        padding="sm"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
          <div className="space-y-8">
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              {AGRI_FORMAT.desc}
            </p>
            <div className="grid gap-6">
              {AGRI_FORMAT.points.map((item, i) => (
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
            <div className="aspect-square rounded-full border border-white/5 p-8 animate-slow-spin relative">
              <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-[100px] pointer-events-none" />
              <div className="w-full h-full rounded-full border border-white/10 p-12 overflow-hidden">
                <img
                  src={AGRI_FORMAT.image}
                  alt="Farm Experience"
                  className="w-full h-full object-cover rounded-full opacity-60 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. EXCLUSIVITY STATEMENT */}
      <Section
        id="exclusivity"
        variant="forest"
        subtitle="Positioning"
        subtitleIcon={<ShieldCheck className="text-accent-gold" />}
        title="A Curated Partnership"
        center
        padding="sm"
      >
        <div className="max-w-4xl mx-auto pb-20">
          <ImmersiveContainer className="text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-gold/20 rounded-full blur-[100px]" />
            <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-8 tracking-tighter">
              {AGRI_EXCLUSIVITY.title}
            </h3>
            <p className="text-xl text-white/60 leading-relaxed font-medium">
              {AGRI_EXCLUSIVITY.text}
            </p>
          </ImmersiveContainer>
        </div>
      </Section>

      {/* 8. FINAL CTA */}
      <FinalCTA
        variant="forest"
        bgImage={AGRI_CTA.bgImage}
        icon={Sprout}
        title={
          <>
            {AGRI_CTA.title[0]} <br />
            <span className="text-accent-gold italic">{AGRI_CTA.title[1]}</span>
          </>
        }
        description={AGRI_CTA.description}
        buttons={[
          {
            label: "Request Partnership Details",
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
