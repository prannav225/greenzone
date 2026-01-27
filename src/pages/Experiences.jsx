import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Mountain,
  Sparkles,
  Target,
  Zap,
  Waves,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";

export default function Experiences() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
            alt="Alpine Wilderness"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 animate-fade-in text-emerald-pop shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              The Methodology
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-8">
            Intentional by <br />
            <span className="text-emerald-pop italic">Design.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-tight">
            We don’t offer trips. We engineer modular journeys designed to
            address specific human and organizational challenges.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE PROGRAMS */}
      <Section
        variant="mist"
        padding="md"
        subtitle="For Organizations"
        subtitleIcon={<Building2 className="w-3.5 h-3.5" />}
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <div className="absolute -inset-10 border border-forest/5 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-4" />
              <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1500"
                  alt="Corporate Leadership"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest/60 via-transparent to-transparent" />
              </div>

              {/* Outcomes Widget */}
              <div className="absolute -bottom-8 -right-8 bg-forest p-10 rounded-[2rem] shadow-premium border border-emerald-pop/20 text-white animate-float ring-8 ring-sky-mist">
                <p className="text-emerald-pop font-black text-[10px] uppercase tracking-widest mb-6">
                  Core Outcomes
                </p>
                <ul className="space-y-4">
                  {[
                    "Radical Team Alignment",
                    "Resilient Decision-making",
                    "Systemic Culture Shift",
                  ].map((goal) => (
                    <li
                      key={goal}
                      className="flex items-center gap-3 text-sm font-bold"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-pop" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-heading font-black text-forest mb-10 leading-[0.8] tracking-tighter">
                Corporate <br />
                <span className="text-emerald-pop italic">
                  Leadership Labs.
                </span>
              </h2>
              <p className="text-forest/60 text-xl font-medium mb-12 leading-tight">
                Designed for teams navigating complexity. We use nature and
                psychological frameworks to build clarity, trust, and
                intelligence under pressure.
              </p>
              <PrimaryButton
                to="/experiences/corporate"
                variant="primary"
                size="lg"
                className="group"
              >
                Explore Corporate Programs
                <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. STUDENT PROGRAMS */}
      <Section
        variant="sand"
        padding="sm"
        subtitle="The Emerging Academy"
        subtitleIcon={<GraduationCap className="w-3.5 h-3.5" />}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-forest mb-6 leading-[0.85] tracking-tighter">
                The Evolving <br />
                <span className="text-emerald-pop italic">Youth Frontier.</span>
              </h2>
              <p className="text-forest/60 text-lg font-medium mb-8 leading-tight">
                Moving education beyond theory into lived experience. Our
                programs focus on emotional intelligence and real-world
                readiness.
              </p>

              <div className="relative mb-8 group">
                <div className="relative bg-white p-8 rounded-3xl border border-forest/5 shadow-premium">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-mist flex items-center justify-center text-forest">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="text-forest/40 font-black text-[10px] uppercase tracking-widest">
                      Behavioral Archetype
                    </span>
                  </div>
                  <p className="text-forest font-heading font-black text-xl leading-tight mb-3">
                    "Moving from{" "}
                    <span className="text-emerald-pop">Anxiety</span> to{" "}
                    <span className="italic">Agency</span>."
                  </p>
                  <p className="text-forest/50 text-sm font-medium">
                    Through structured challenges, students develop confidence
                    and the ability to respond to pressure.
                  </p>
                </div>
              </div>

              <PrimaryButton to="/contact" variant="primary" size="lg">
                Explore Student Programs
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-6 border border-forest/10 rounded-[2rem] -z-10 animate-float" />
              <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1500"
                  alt="Student Resilience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-linear-to-t from-forest/60 via-forest/40 to-transparent" />
              </div>

              <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-black text-[10px] uppercase tracking-widest">
                Curated Adversity
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. ADVENTURE & TRAVEL */}
      <Section
        variant="forest"
        padding="md"
        subtitle="For Conscious Seekers"
        subtitleIcon={<Mountain className="w-3.5 h-3.5" />}
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-10 border border-white/10 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-4" />
              <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1500"
                  alt="Adventure & Travel"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 bg-linear-to-t from-forest via-forest/40 to-transparent" />
              </div>

              <div className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-black text-[10px] uppercase tracking-widest">
                Cognitive Clarity
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-10 leading-[0.8] tracking-tighter">
              Curated <br />
              <span className="text-emerald-pop italic">Expeditions.</span>
            </h2>
            <p className="text-white/60 text-xl font-medium mb-12 leading-tight">
              Purposefully designed journeys that combine wilderness and
              reflection—ideal for seeking clarity and perspective.
            </p>

            <PrimaryButton to="/contact" variant="emerald" size="lg">
              Join an Expedition
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* 5. CINEMATIC MODULAR FINALE */}
      <FinalCTA
        variant="sky-mist"
        icon={Waves}
        title={
          <>
            Your journey is <br />
            <span className="text-emerald-pop italic">Modular.</span>
          </>
        }
        description="Every Greenzone experience is a building block in growth. stand alone—or integrate into a larger developmental journey."
        buttons={[
          { label: "Design Configuration", to: "/contact" },
          { label: "Our Philosophy", to: "/about", variant: "secondary" },
        ]}
      />
    </div>
  );
}
