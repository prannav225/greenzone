import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import {
  Compass,
  Target,
  Zap,
  Brain,
  ShieldCheck,
  Sparkles,
  Quote,
  ArrowRight,
  Mountain,
  Layout,
  Microscope,
} from "lucide-react";
import {
  VISION_MISSION,
  WHY_CHOOSE_US,
  FOUNDERS,
  COLLABORATION_POINTS,
} from "../data/aboutData";
import SectionHeading from "../components/ui/SectionHeading";

import Hero from "../components/layout/Hero";

// ...

export default function About() {
  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        bgImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
        eyebrow={
          <>
            <Compass className="w-4 h-4" />
            <span className="text-eyebrow text-accent-gold">
              Established Foundations
            </span>
          </>
        }
        title={
          <>
            About <br />
            <span className="text-accent-gold italic">Greenzone</span>
          </>
        }
        description="Where experiential design meets structured human development."
        // ... hero props ...
        overlayGradient="bg-linear-to-b from-forest-deep/80 via-transparent to-forest-deep"
      />

      {/* 2. VISION & MISSION - REDESIGNED */}
      <Section
        id="mission"
        variant="forest"
        padding="md"
        center={true}
        className="relative overflow-visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 w-full">
          {/* VISION - Primary focus */}
          <div className="relative group">
            <div className="relative bg-white/5 backdrop-blur-3xl p-10 lg:p-16 rounded-card border border-white/10 shadow-premium flex flex-col items-center text-center transition-all duration-700 hover:bg-white/10 group-hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center shadow-2xl mb-10 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-10 h-10 text-accent-gold" />
              </div>
              <span className="text-eyebrow text-accent-gold mb-4 opacity-60">
                The Vision
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-white mb-8">
                The <span className="text-accent-gold italic">Aspiration.</span>
              </h2>
              <p className="text-2xl lg:text-3xl text-white font-medium leading-[1.3] tracking-tight">
                {VISION_MISSION.vision.desc}
              </p>
            </div>
          </div>

          {/* MISSION - Operational focus */}
          <div className="relative group">
            <div className="relative bg-white/5 backdrop-blur-3xl p-10 lg:p-16 rounded-card border border-white/10 shadow-premium flex flex-col items-center text-center transition-all duration-700 hover:bg-white/10 group-hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl mb-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10 text-white/40" />
              </div>
              <span className="text-eyebrow text-white/30 mb-4">
                The Mission
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-white mb-8">
                The <span className="text-accent-gold italic">Method.</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/60 font-medium leading-relaxed">
                {VISION_MISSION.mission.desc}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. WHY GREENZONE EXISTS */}
      <Section id="purpose" variant="default" padding="md">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-4/5 rounded-image overflow-hidden shadow-premium relative">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000"
                alt="Outdoor Immersion"
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
            </div>
          </div>
          <div className="space-y-10">
            <SectionHeading
              title={
                <>
                  Why GreenZone <br />
                  <span className="text-accent-gold italic">Exists</span>
                </>
              }
              variant="light"
              className="mb-0 md:mb-0"
            />
            <div className="space-y-6 text-description text-forest/70">
              <p>
                The gap between theoretical learning and real-world application
                is a significant hurdle in development. We bridge this
                disconnect by stepping outside the traditional classroom and
                into environments that demand adaptability and decisive action.
              </p>
              <p>
                Whether for individuals seeking new perspective or organizations
                building leadership capacity, we provide a structured laboratory
                for intentional growth. We believe that clarity and resilience
                are not merely taught—they are built through action and
                intentional immersion.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. WHAT MAKES GREENZONE DIFFERENT - REDESIGNED */}
      <Section id="methodology" variant="forest" padding="md">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-eyebrow text-accent-gold opacity-60 block mb-4">
              The Methodology
            </span>
            <h2 className="text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter leading-none">
              The{" "}
              <span className="italic text-accent-gold underline decoration-accent-gold/20 underline-offset-8">
                Difference.
              </span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mx-12 mb-4" />
          <p className="text-white/50 font-medium max-w-xs text-sm uppercase tracking-widest leading-relaxed">
            Five pillars of <br /> specialized human <br /> development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className="relative group w-full">
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-card p-10 lg:p-12 border border-white/10 hover:border-accent-gold/30 hover:bg-white/10 transition-all duration-700 flex flex-col items-start overflow-hidden">
                {/* Decorative background blob */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${item.accent} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-1000 scale-150`}
                />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-gold mb-10 group-hover:bg-accent-gold group-hover:text-forest-deep group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-heading font-black text-white mb-6 tracking-tight leading-[1.1] group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/50 font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5. SEPARATE CUSTOMIZATION SECTION */}
        <div className="mt-24 pt-24 border-t border-white/10">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter mb-8 leading-tight">
              Built Around Your{" "}
              <span className="text-accent-gold">Objectives.</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-medium">
              Every journey and program is thoughtfully designed around
              participant context, goals, and desired outcomes. We do not offer
              standardized packages — we architect experiences with intention.
            </p>
            <Link
              to="/contact#inquiry"
              className="inline-flex items-center gap-3 text-accent-gold font-black uppercase tracking-widest text-sm group"
            >
              <span>Design Your Experience</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. THE FOUNDERS - REDESIGNED */}
      <Section
        id="founders"
        variant="default"
        padding="sm"
        className="bg-forest-deep"
      >
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-eyebrow text-accent-gold/40 mb-4">
            The Custodians
          </span>
          <h2 className="text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter leading-none mb-10">
            The <span className="italic text-accent-gold">Founders.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {FOUNDERS.map((founder, idx) => (
            <div key={idx} className="group flex flex-col h-full">
              {/* Founder Image Card */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-10 shadow-2xl transition-all duration-700 bg-forest shrink-0 border border-white/5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover filter transition-all duration-1000 scale-105 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/20 to-transparent opacity-80" />

                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-eyebrow text-accent-gold block mb-2 text-[10px]">
                    {founder.role}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-heading font-black text-white tracking-tighter leading-none">
                    {founder.name}
                  </h3>
                </div>
              </div>

              {/* Founder Details */}
              <div className="flex-1 space-y-6 px-2">
                <p className="text-white font-black uppercase text-[10px] tracking-widest opacity-40">
                  {founder.tagline}
                </p>
                <div className="h-px w-8 bg-accent-gold/30" />
                <ul className="space-y-4">
                  {founder.points.map((pt, j) => (
                    <li key={j} className="flex gap-4 group/item">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-accent-gold group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="text-white/50 text-sm leading-relaxed font-medium group-hover/item:text-white/80 transition-colors">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. PROFESSIONAL COLLABORATION */}
      <Section
        id="collaboration"
        variant="forest"
        padding="sm"
        className="border-t border-white/5"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <SectionHeading
              title={
                <>
                  Professional <br />
                  <span className="text-accent-gold italic">Collaboration</span>
                </>
              }
              variant="forest"
              className="mb-0 md:mb-0"
            />
            <div className="space-y-8 bg-white/5 backdrop-blur-xl p-10 rounded-card border border-white/10 shadow-premium">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">
                  Dr. Padmashri S. Rao
                </h3>
                <p className="text-accent-gold font-bold uppercase tracking-widest text-[10px]">
                  Clinical Psychologist & Advisor
                </p>
              </div>
              <ul className="space-y-4">
                {COLLABORATION_POINTS.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <ShieldCheck className="w-4 h-4 text-accent-gold opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <span className="text-white/60 font-medium text-sm group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-card overflow-hidden shadow-premium border-4 border-white/5 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr. Padmashri S. Rao"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="relative min-h-[70vh] flex items-center justify-center scroll-snap-section bg-forest-deep overflow-hidden py-24 border-t border-white/5">
        {/* Background Atmosphere */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-10 filter grayscale scale-110"
            alt="Forest Atmosphere"
          />
          <div className="absolute inset-0 bg-radial-gradient from-forest-deep/90 via-forest-deep to-forest-deep" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="space-y-12">
            <span className="text-eyebrow text-white uppercase tracking-[0.4em] opacity-30 block mb-8">
              The Path Forward
            </span>

            <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter max-w-4xl mx-auto">
              GreenZone is not defined by <br />
              <span className="text-accent-gold">destinations</span> or
              programs.
            </p>

            <div className="max-w-3xl mx-auto border-t border-white/10 pt-16 px-4 relative">
              <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed italic">
                “It is defined by the environments we create — spaces where
                perspective shifts, leadership clarifies, and growth becomes
                intentional.”
              </p>
            </div>

            <div className="pt-12">
              <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-forest-deep bg-forest flex items-center justify-center"
                    >
                      <Compass className="w-3 h-3 text-accent-gold/40" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold">
                  Redefining Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
