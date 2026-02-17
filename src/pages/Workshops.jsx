import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Brain,
  Zap,
  Target,
  Users,
  Building2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Microscope,
  TrendingUp,
  Compass,
  Award,
  Calendar,
  Clock,
  Layers,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";
import {
  WORKSHOP_METHODOLOGY,
  NLP_LEVELS,
  EQ_CURRICULUM,
  WORKSHOP_AUDIENCE,
  WORKSHOP_OUTCOMES,
} from "../data/workshopsData";
import Hero from "../components/layout/Hero";
import FeatureCard from "../components/ui/FeatureCard";

export default function Workshops() {
  useEffect(() => {
    document.title = "Workshops & Training | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        bgImage="/workshop.png"
        eyebrow={
          <>
            <Award className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Executive Excellence
            </span>
          </>
        }
        title={
          <>
            Leadership Is <br className="hidden sm:block" />
            <span className="text-accent-gold italic">Experienced.</span>{" "}
            <br className="hidden sm:block" />
            Not Taught.
          </>
        }
        description="Experiential learning programs that combine psychology, outdoor immersion, and strategic thinking to unlock personal and professional transformation."
        primaryButton={{
          to: "#programs",
          label: "Explore Programs",
        }}
        showScrollIndicator={true}
      />
      {/* 2. WHAT MAKES OUR WORKSHOPS DIFFERENT */}
      <Section
        id="difference"
        variant="forest"
        padding="sm"
        subtitle="The Methodology"
        className="border-b border-white/10"
        subtitleIcon={<Sparkles className="text-accent-gold" />}
        title={
          <>
            <span className="text-white">Beyond Classrooms.</span>{" "}
            <br className="hidden md:block" />
            <span className="text-accent-gold italic">Beyond PowerPoints.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-white font-bold leading-tight tracking-tight">
              We replace static slide decks with dynamic, real-world
              environments where theory is immediately tested against reality.
            </p>
            <div className="w-16 h-1 bg-accent-gold/40" />
            <p className="text-base text-white/70 leading-relaxed font-medium">
              Our workshops are designed as lived experiences. By removing
              professionals from their comfort zones, we create high-stakes
              scenarios that mirror corporate pressure, revealing authentic
              leadership traits and areas for growth.
            </p>
          </div>

          <div className="grid gap-4">
            {WORKSHOP_METHODOLOGY.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.desc}
                icon={item.icon}
                variant="glass"
                layout="horizontal"
                accentColor="text-accent-gold"
              />
            ))}
          </div>
        </div>

        {/* The Core Model - Cinematic Banner */}
        <div className="relative group overflow-hidden rounded-card">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000"
              alt="Reflection"
            />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10" />
          </div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1">
              <h4 className="text-accent-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8">
                The Core Model
              </h4>
              <p className="text-3xl md:text-5xl font-heading font-medium text-white leading-tight tracking-tighter mb-8">
                Reflection + Action <br />
                <span className="text-accent-gold italic">= Evolution.</span>
              </p>
              <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                Every challenge is followed by a structured debriefing session
                where experiences are dissected, psychological patterns are
                identified, and concrete plans are forged.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="aspect-square w-48 h-48 rounded-full border border-white/10 flex flex-col items-center justify-center text-center p-6 relative group/circle">
                <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-3xl group-hover/circle:bg-accent-gold/10 transition-all" />
                <TrendingUp className="w-8 h-8 text-accent-gold mb-3 animate-float" />
                <span className="text-white font-black uppercase tracking-[0.2em] text-[9px]">
                  Continuous Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* 3. CORE PROGRAMS SECTION - OBL */}
      <Section
        id="programs"
        variant="forest"
        subtitle="Pillar One"
        subtitleIcon={<Zap />}
        title="Outbound Learning (OBL)"
        className="scroll-mt-20 border-b border-white/10"
        padding="sm"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed">
              Experiential leadership development in outdoor environments
              designed to build resilience, strategic thinking, and team
              synergy.
            </p>

            <div className="space-y-8">
              {/* Corporate Track */}
              <div className="group p-8 rounded-card bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-black tracking-tight text-white">
                    Corporate Leadership Track
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Leadership rotations during treks",
                    "Crisis simulation challenges",
                    "High-ropes / trust exercises",
                    "Strategic mirroring tasks",
                    "Campfire reflection debrief",
                    "Vision & career mapping",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/50"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* College Track */}
              <div className="group p-8 rounded-card bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-black tracking-tight text-white">
                    College Career Track
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "EQ for career success",
                    "Teamwork challenges",
                    "Resume & LinkedIn optimization",
                    "Elevator pitch practice",
                    "Execution simulations",
                    "Resilience role-play",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/50"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent-emerald mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-3 text-white/40">
                <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Real-world decision making
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Reflection-based learning
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Certificate of Excellence
                </span>
              </div>
            </div>

            <div className="pt-10">
              <PrimaryButton
                to="/outbound-learning"
                variant="primary"
                size="lg"
              >
                <span>Explore Full OBL Program</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-image overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000"
                alt="Outbound Learning"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-gold/10 blur-[100px] rounded-full animate-pulse" />
          </div>
        </div>
      </Section>
      {/* CORE PROGRAMS SECTION - NLP */}
      <Section
        id="nlp"
        variant="forest"
        subtitle="Pillar Two"
        subtitleIcon={<Brain />}
        title="Neuro-Linguistic Programming"
        padding="sm"
        className="border-b border-white/10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2 space-y-10">
            <p className="text-xl text-white/90 font-bold leading-relaxed">
              Deep-dive psychological training for communication mastery,
              behavioral transformation, and leadership influence.
            </p>

            <div className="space-y-6">
              {NLP_LEVELS.map((tier, idx) => (
                <div
                  key={idx}
                  className="relative p-10 rounded-card bg-white/5 border border-white/10 shadow-premium overflow-hidden group transition-all duration-700 hover:-translate-x-2"
                >
                  {/* Background Step Number */}
                  <div className="absolute top-0 right-0 text-white/5 text-9xl font-black -mr-8 -mt-8 group-hover:text-accent-gold/5 transition-colors pointer-events-none">
                    {tier.level}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <span className="text-accent-gold font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
                        Level {tier.level} • {tier.subtitle}
                      </span>
                      <h4 className="text-2xl font-heading font-black text-white mb-6">
                        {tier.tier}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tier.points.map((p, pi) => (
                          <div
                            key={pi}
                            className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent-gold" />
                            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">
                              {p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <ArrowRight className="w-10 h-10 text-white/10 group-hover:text-accent-gold transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-1 sticky top-32">
            <div className="relative group p-4 border border-white/10 rounded-[2.5rem]">
              <div className="aspect-4/5 rounded-[2rem] overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                  alt="NLP Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            <div className="mt-10 p-8 border-l-4 border-accent-gold italic text-white/80 text-lg leading-relaxed bg-white/5 backdrop-blur-xl shadow-premium rounded-r-card">
              "Psychological mastery in communication isn't about manipulation;
              it's about understanding the internal maps humans follow."
            </div>

            <div className="mt-12">
              <PrimaryButton to="/nlp" variant="primary" size="lg">
                <span>Explore Full NLP Program</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Section>
      {/* CORE PROGRAMS SECTION - EQ */}
      <Section
        id="eq"
        variant="forest"
        subtitle="Pillar Three"
        subtitleIcon={<Compass />}
        title="Emotional Intelligence (EQ)"
        padding="sm"
      >
        <div className="relative group">
          {/* Ambient Glow Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-emerald/20 blur-[120px] rounded-full transition-opacity duration-1000 pointer-events-none" />

          <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-premium border border-white/10">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-10 md:p-16">
                <div className="space-y-2 mb-10">
                  <span className="text-accent-gold font-black uppercase tracking-[0.3em] text-[10px]">
                    The Curriculum
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight tracking-tighter">
                    1-Day Experiential Intensive
                  </h3>
                </div>

                <p className="text-lg text-white/90 mb-12 leading-relaxed font-bold max-w-2xl">
                  A high-stakes session focused on enhancing workplace
                  leadership and professional growth through the lens of
                  emotional science.
                </p>

                <div className="grid sm:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-6">
                    <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      <div className="w-4 h-px bg-accent-gold" />
                      Core Components
                    </h4>
                    <div className="space-y-4">
                      {EQ_CURRICULUM.coreComponents.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold scale-0 group-hover/item:scale-100 transition-transform" />
                          <span className="font-black text-white/80 uppercase text-[10px] tracking-widest pl-2">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      <div className="w-4 h-px bg-accent-gold" />
                      Workshop Elements
                    </h4>
                    <div className="space-y-4">
                      {EQ_CURRICULUM.workshopElements.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold scale-0 group-hover/item:scale-100 transition-transform" />
                          <span className="font-black text-white/80 uppercase text-[10px] tracking-widest pl-2">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                    Target Audience:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {EQ_CURRICULUM.targetAudience.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-full text-[9px] uppercase tracking-widest hover:bg-white/10 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <PrimaryButton to="/eq" variant="primary" size="lg">
                    <span>Explore Full EQ Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </PrimaryButton>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[100px] rounded-full -mr-32 -mt-32" />

                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold shadow-2xl">
                    <Target className="w-8 h-8" />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-heading font-black text-white tracking-tight">
                      Practical Impact
                    </h4>
                    <p className="text-white/60 text-base leading-relaxed font-medium">
                      Designed for immediate workplace application. Not
                      theoretical fluff—real tools for real pressure.
                    </p>
                  </div>

                  <div className="pt-8 space-y-2">
                    <div className="text-6xl font-heading font-black text-accent-gold">
                      100%
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                      Implementation Focused
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="h-px w-full bg-white/10" />
                    <p className="mt-8 text-white/30 text-xs italic leading-relaxed">
                      *Includes personalized performance metrics and follow-up
                      consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* 4. WHO THESE PROGRAMS ARE FOR */}
      <Section
        id="audience"
        variant="forest"
        subtitle="Engagement"
        subtitleIcon={<Users />}
        title="Who We Partner With"
        center
        padding="sm"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOP_AUDIENCE.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              variant="glass"
              layout="vertical"
              className="p-10" // Override padding if needed
            />
          ))}
        </div>
      </Section>
      {/* 5. TRAINER AUTHORITY SECTION */}
      <Section
        id="trainer"
        variant="forest"
        subtitle="Expertise"
        subtitleIcon={<Microscope />}
        title="The Scientific Foundation"
        padding="sm"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent-gold/20 rounded-image blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative aspect-4/5 rounded-image overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. Padmashri S. Rao"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-forest-deep to-transparent">
                <div className="text-white font-heading font-black text-3xl mb-1 tracking-tight">
                  Dr. Padmashri S. Rao
                </div>
                <div className="text-accent-gold text-xs font-black uppercase tracking-widest">
                  Chief Facilitator & Psychologist
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <h3 className="text-4xl font-heading font-black text-white tracking-tighter mb-8 leading-tight">
                Psychology Meets <br />
                <span className="italic text-accent-gold">
                  Adventure Science.
                </span>
              </h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Our programs are architected by Dr. Padmashri S. Rao, a Clinical
                Psychologist and Corporate Trainer with extensive expertise in
                behavioral science and NLP.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    PhD in Cognitive Psychology
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    Certified NLP Practitioner
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    Clinical Practice Background
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    Programs for HAL & ISRO
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    Music Therapy Integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    Adventure-based Facilitation
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 text-white rounded-card shadow-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <p className="text-lg leading-relaxed relative z-10 italic">
                "We don't just facilitate activities; we facilitate neurological
                shifts. By combining the unpredictability of nature with the
                precision of psychology, we create lasting behavioral change."
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* 6. OUTCOMES & IMPACT */}
      <Section
        id="outcomes"
        variant="forest"
        subtitle="The Result"
        subtitleIcon={<TrendingUp />}
        title="Predictable Evolution."
        center
        padding="sm"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {WORKSHOP_OUTCOMES.map((outcome, idx) => (
            <div
              key={idx}
              className="group relative p-10 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-premium hover:bg-white/10 transition-all duration-1000"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-forest shadow-2xl transition-all duration-500 shrink-0">
                  <outcome.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="text-accent-gold font-black uppercase tracking-[0.4em] text-[10px] mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
                    Outcome {idx + 1}
                  </span>
                  <div className="text-white font-heading font-black text-2xl mb-4 leading-tight group-hover:text-accent-gold transition-colors">
                    {outcome.title}
                  </div>
                  <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors font-medium">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* 7. FINAL CTA SECTION */}
      <FinalCTA
        variant="forest"
        bgImage="/forest-classroom.png"
        icon={BookOpen}
        title={
          <>
            Design a Leadership <br />
            <span className="text-accent-gold italic">Experience.</span>
          </>
        }
        description="Let’s build a program aligned to your goals, challenges, and team dynamics. Move beyond training move into transformation."
        buttons={[
          {
            label: "Schedule a Consultation",
            to: "/contact",
            variant: "primary",
          },
          { label: "View Our Team", to: "/about", variant: "secondary" },
        ]}
      />
    </main>
  );
}
