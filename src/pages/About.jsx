import Section from "../components/layout/Section";
import { Compass, Sparkles } from "lucide-react";
import {
  PHILOSOPHY,
  WHAT_SETS_US_APART,
  FOUNDERS,
  SAFETY_RESPONSIBILITY,
} from "../data/aboutData";
import Hero from "../components/layout/Hero";
import FounderCard from "../components/about/FounderCard";
import FinalCTA from "../components/layout/FinalCTA";

export default function About() {
  return (
    <main className="scroll-snap-container">
      {/* 1. HERO SECTION */}
      <Hero
        priority={true}
        bgImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
        eyebrow={
          <>
            <Compass className="w-4 h-4 text-accent-gold" />
            <span className="text-eyebrow text-accent-gold">
              The Art of Curation
            </span>
          </>
        }
        title={
          <>
            About <br />
            <span className="text-accent-gold italic">Greenzone</span>
          </>
        }
        description="Crafting immersive, slow-travel experiences across the powerful landscapes of the Western Ghats and beyond."
        overlayGradient="bg-linear-to-b from-forest-deep/80 via-transparent to-forest-deep"
      />

      {/* 2. OUR STORY */}
      <Section
        id="story"
        variant="default"
        padding="sm"
        title={
          <>
            Our <br />
            <span className="text-accent-gold italic">Story.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-4/5 rounded-image overflow-hidden shadow-premium relative">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000"
                alt="Our Journey"
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest-deep/60 to-transparent" />
            </div>
          </div>
          <div className="space-y-6 text-description text-forest/70">
            <p>
              Greenzone Adventures was born from a simple realization: the world
              doesn't need more tourists; it needs more travelers. We started
              with a passion for the rugged heights of the Western Ghats and a
              belief that travel is found in the moments between the landmarks.
            </p>
            <p>
              Our roots are in the exploration of Karnataka's unseen trails and
              untold heritage. We rejected the model of mass tourism in favor of
              deep immersion—choosing intentional pacing, small groups, and
              genuine cultural respect over generic itineraries.
            </p>
            <p>
              Today, we curate journeys for those who seek to decompress, to
              listen to the wind in the shola forests, and to walk through stone
              temples that have stood silent for centuries.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. THE ESSENCE (PHILOSOPHY) */}
      <Section
        id="philosophy"
        variant="forest"
        padding="sm"
        center={true}
        className="relative overflow-visible"
        title={PHILOSOPHY.title}
        subtitle={PHILOSOPHY.tagline}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center shadow-2xl mb-10 mx-auto transition-transform duration-500 hover:scale-110">
            <Sparkles className="w-10 h-10 text-accent-gold" />
          </div>
          <p className="text-2xl lg:text-3xl text-white/80 font-medium leading-[1.3] tracking-tight max-w-3xl mx-auto">
            {PHILOSOPHY.desc}
          </p>
        </div>
      </Section>

      {/* 4. WHAT SETS US APART */}
      <Section
        id="difference"
        variant="default"
        padding="sm"
        title={
          <>
            What Sets <br />
            <span className="italic text-accent-gold">Us Apart.</span>
          </>
        }
        subtitle="The Difference"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHAT_SETS_US_APART.map((item, i) => (
            <div key={i} className="relative group w-full">
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-card p-10 lg:p-12 border border-white/10 hover:border-accent-gold/30 hover:bg-white/10 transition-all duration-700 flex flex-col items-start overflow-hidden shadow-sm hover:shadow-premium">
                <div className="w-14 h-14 rounded-2xl bg-forest-deep flex items-center justify-center text-accent-gold mb-10 group-hover:bg-accent-gold group-hover:text-forest-deep group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-heading font-black text-white mb-6 tracking-tight leading-[1.1] transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/60 font-medium leading-relaxed transition-colors duration-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. SAFETY & RESPONSIBILITY */}
      <Section
        id="safety"
        variant="forest"
        padding="md"
        className="bg-forest-deep"
        title={
          <>
            Safety & <br />
            <span className="text-accent-gold italic">Responsible Travel.</span>
          </>
        }
        subtitle="Our Commitment"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <p className="text-description text-white/60">
              We believe that we are guests in the environments we visit. Our
              commitment to safety and sustainability is woven into every
              itinerary.
            </p>
            <div className="grid gap-8">
              {SAFETY_RESPONSIBILITY.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-black text-white mb-2 uppercase tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-card overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000"
              alt="Responsible Trekking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 6. FOUNDERS */}
      <Section
        id="founders"
        variant="default"
        padding="md"
        className="pb-20"
        title={
          <>
            Meet the <span className="italic text-accent-gold">Founders.</span>
          </>
        }
        subtitle="The Curators"
        center={true}
      >
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {FOUNDERS.map((founder, idx) => (
            <FounderCard key={idx} {...founder} />
          ))}
        </div>
      </Section>

      {/* 7. FINAL CTA */}
      <FinalCTA
        bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
        title={
          <>
            Ready to <br />
            <span className="text-accent-gold italic">Decompress?</span>
          </>
        }
        description="Step away from the noise and into the stillness. Your curated expedition awaits."
        buttons={[{ to: "/contact", label: "Start Your Journey" }]}
      />
    </main>
  );
}
