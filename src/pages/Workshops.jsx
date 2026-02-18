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
import { WORKSHOP_METHODOLOGY } from "../data/workshopsData";
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
        priority={true}
        bgImage="/Workshop.webp"
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
        description="Select from our specialized developmental tracks designed for corporate teams, educational institutions, and growth-oriented professionals. This overview provides a high-level look at our core methodologies."
        primaryButton={{
          to: "#programs",
          label: "View Program Tracks",
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
        <div className="relative group overflow-hidden rounded-card mb-20">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed">
              High-impact leadership development in remote outdoor environments.
              OBL uses nature as a pressure-cooker to reveal authentic behavior
              and forge resilient teams.
            </p>

            <ul className="grid gap-4">
              {[
                "Leadership rotations in high-stakes environments",
                "Crisis simulation & strategic decision-making",
                "High-grit outdoor challenges",
                "Structured reflection & behavioral mirroring",
                "Integration of mountain-top insights to boardroom reality",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-white/60 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 group-hover:scale-125 transition-transform" />
                  <span className="text-lg font-medium tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <PrimaryButton
                to="/outbound-learning"
                variant="primary"
                size="md"
              >
                <span>View Full OBL Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-image overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000"
                alt="Outbound Learning"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="lg:order-2 space-y-8">
            <p className="text-xl text-white/90 font-bold leading-relaxed">
              Psychological training for communication mastery and behavioral
              transformation. NLP provides the tools to understand and recode
              the mental patterns that drive performance.
            </p>

            <ul className="grid gap-4">
              {[
                "Communication mastery & influence",
                "Behavioral modeling & pattern breaking",
                "Advanced rapport building techniques",
                "Emotional state management",
                "Strategic linguistics for leadership",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-white/60 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 group-hover:scale-125 transition-transform" />
                  <span className="text-lg font-medium tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <PrimaryButton to="/nlp" variant="primary" size="md">
                <span>View Full NLP Program</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:order-1 relative">
            <div className="aspect-video rounded-image overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                alt="NLP Training"
                className="w-full h-full object-cover"
              />
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
        className="border-b border-white/10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <p className="text-xl text-white/90 font-bold leading-relaxed">
              Applied emotional science for workplace leadership. Our EQ
              intensive moves beyond theory to provide actionable frameworks for
              managing stress, conflict, and interpersonal dynamics.
            </p>

            <ul className="grid gap-4">
              {[
                "Emotional awareness & regulation",
                "Resilience in high-pressure scenarios",
                "Empathy as a strategic tool",
                "Conflict resolution & navigation",
                "Authentic leadership presence",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-white/60 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 group-hover:scale-125 transition-transform" />
                  <span className="text-lg font-medium tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <PrimaryButton to="/eq" variant="primary" size="md">
                <span>View Full EQ Program</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-image overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Emotional Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 5. TRAINER AUTHORITY SECTION */}
      <Section
        id="trainer"
        variant="forest"
        subtitle="Expertise"
        subtitleIcon={<Microscope />}
        title="Scientific Foundation"
        padding="sm"
        className="border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic">
            "We don't just facilitate activities; we facilitate neurological
            shifts. By combining the unpredictability of nature with the
            precision of psychology, we create lasting behavioral change."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border border-accent-gold overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                alt="Dr. Padmashri S. Rao"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-heading font-black text-xl tracking-tight">
                Dr. Padmashri S. Rao
              </div>
              <div className="text-accent-gold text-[10px] font-black uppercase tracking-widest">
                Chief Facilitator & Psychologist
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FINAL CTA SECTION */}
      <FinalCTA
        variant="forest"
        bgImage="/forest-classroom.webp"
        icon={BookOpen}
        title={
          <>
            Design Your <br />
            <span className="text-accent-gold italic">Leadership Journey.</span>
          </>
        }
        description="Select a methodology to learn more, or schedule a consultation to build a custom program for your organization."
        buttons={[
          {
            label: "Schedule a Consultation",
            to: "/contact",
            variant: "primary",
          },
        ]}
      />
    </main>
  );
}
