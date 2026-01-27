import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  MapPin,
  Compass,
  Mountain,
  Waves,
  Trees,
  Cloud,
  ChevronRight,
  Target,
  Users,
  Backpack,
  Zap,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect, useState } from "react";

const destinationData = [
  {
    id: "western-ghats",
    name: "Western Ghats",
    keywords: "Trekking in Karnataka, Outbound training locations",
    desc: "A primary hub for intensive OBL programs. The layered ecosystems and tropical terrain provide the perfect backdrop for leadership development and complex problem-solving simulations.",
    useCases: [
      {
        type: "OBL Programs",
        context: "Team synergy and leadership maturity labs.",
      },
      {
        type: "Student Programs",
        context: "Resilience building and nature-led inquiry.",
      },
    ],
    highlights: [
      "Tropical Biodiversity",
      "Challenging Terrain",
      "Climatic Diversity",
    ],
    image:
      "https://images.unsplash.com/photo-1621360841013-c7683c313df3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "chikmagalur",
    name: "Chikmagalur",
    keywords: "Corporate retreats India, Trekking in Karnataka",
    desc: "Renowned for its expansive coffee estates and rugged peaks like Mullayanagiri. This region offers a blend of physical challenge and high-end logistical comfort, making it a favorite for corporate leadership labs.",
    useCases: [
      {
        type: "Corporate Labs",
        context: "High-stakes strategic planning and trust labs.",
      },
      {
        type: "Treks / Retreats",
        context: "Executive sabbaticals and perspective resets.",
      },
    ],
    highlights: [
      "High Altitude Summits",
      "Estate Immersion",
      "Strategic Silence",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "coorg",
    name: "Coorg",
    keywords: "Corporate retreats India, Outbound training locations",
    desc: "Known as the Scotland of India, Coorg's dense forest cover and perennial streams are ideal for emotional intelligence workshops and team bonding through immersion.",
    useCases: [
      {
        type: "EQ Workshops",
        context: "Self-regulation and interpersonal agility modules.",
      },
      {
        type: "Team Retreats",
        context: "Social cohesion and cultural alignment.",
      },
    ],
    highlights: ["Dense Canopy", "River Dynamics", "Atmospheric Clarity"],
    image:
      "https://images.unsplash.com/photo-1582202359419-797745778a48?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "hampi",
    name: "Hampi",
    keywords: "Corporate retreats India, Historical outbound training",
    desc: "The boulder-strewn landscape of this UNESCO site forces a shift in perspective. The architectural history and geological scale create a unique environment for mindset innovation and legacy thinking.",
    useCases: [
      {
        type: "Treks / Retreats",
        context: "Legacy planning and historical perspective shifts.",
      },
      {
        type: "OBL Programs",
        context: "Navigation and strategy-led simulations.",
      },
    ],
    highlights: [
      "Geological Scaling",
      "Archetypal History",
      "Bouldering Logic",
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gokarna",
    name: "Gokarna",
    keywords: "Corporate retreats India, Coastal trekking",
    desc: "A coastal destination where the cliffs meet the Arabian Sea. The rhythmic ocean dynamics and challenging cliff treks are effective for programs focusing on balance and 'flow' states.",
    useCases: [
      {
        type: "EQ & NLP",
        context: "Flow mechanics and somatic grounding workshops.",
      },
      {
        type: "Treks / Retreats",
        context: "Minimalist logic and cognitive rest.",
      },
    ],
    highlights: ["Coastal Rhythm", "Cliff Navigation", "Aperture Scaling"],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "lepakshi",
    name: "Lepakshi",
    keywords: "Corporate retreats India, Single-day training",
    desc: "Selected for its architectural precision and historical weight. Ideally suited for short-duration, high-impact leadership workshops focusing on structural integrity and precision.",
    useCases: [
      {
        type: "One-Day Labs",
        context: "Precision communication and structural alignment.",
      },
      {
        type: "Student Programs",
        context: "Legacy and architectural inquiry.",
      },
    ],
    highlights: [
      "Structural Precision",
      "Proximity to Bangalore",
      "Historical Rigour",
    ],
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState(destinationData[0].id);

  useEffect(() => {
    document.title =
      "Trekking in Karnataka & Outbound Locations | Greenzone Adventures";
  }, []);

  return (
    <div className="bg-white">
      {/* 1. HERO - SEO INTRO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920"
            alt="Outbound Training Locations India"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/80 via-forest/40 to-forest" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-10 animate-fade-in text-emerald-pop shadow-2xl">
            <MapPin className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              The Logic of Space
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-10 animate-fade-in-up">
            Selected <br />
            <span className="text-emerald-pop italic">Geographies.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/50 max-w-3xl mx-auto font-medium leading-tight animate-fade-in-up animate-delay-200">
            We don't choose locations for their beauty alone. We choose them for
            their functional architecture—the way a landscape forces a specific
            psychological shift.
          </p>
        </div>
      </section>

      {/* 2. WHY LOCATION MATTERS */}
      <Section
        variant="mist"
        subtitle="Operational Logic"
        subtitleIcon={<Compass className="w-3.5 h-3.5" />}
        title={
          <>
            Where Purpose <br />
            <span className="text-forest italic">Meets Terrain.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-8">
            <p className="text-2xl text-forest/80 leading-tight font-medium italic border-l-4 border-emerald-pop pl-8">
              In experiential learning, the environment is the most powerful
              facilitator.
            </p>
            <p className="text-forest/60 text-lg">
              A desert landscape demands minimalism and internal focus, while a
              dense forest necessitates complex collaboration and sensory
              awareness. We match the physical terrain to your organizational
              goals to ensure the shift in behavior is deep and permanent.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {[
                {
                  label: "Complexity",
                  desc: "For teams navigating rapid change.",
                  icon: <Trees className="w-5 h-5" />,
                },
                {
                  label: "Resilience",
                  desc: "For groups building long-term grit.",
                  icon: <Mountain className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-emerald-pop/60 shadow-premium hover:shadow-2xl hover:bg-white/60 transition-all duration-700 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-pop text-white flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:bg-emerald-pop group-hover:text-forest group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-heading font-black text-forest mb-2 tracking-tighter">
                    {item.label}
                  </h4>
                  <p className="text-sm text-forest/50 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 border border-forest/5 rounded-3xl -z-10 animate-float" />
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-4xl group-hover:shadow-[0_50px_100px_rgba(10,30,20,0.15)] transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1200"
                alt="Environmental Facilitation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. KARNATAKA & BEYOND - INTERACTIVE CARDS */}
      <Section
        variant="sand"
        subtitle="Primary Sectors"
        subtitleIcon={<Target className="w-3.5 h-3.5" />}
        title={
          <>
            Karnataka-Based <br />
            <span className="text-emerald-pop italic">Strategic Hubs.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Navigation/Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {destinationData.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setActiveTab(dest.id)}
                className={`w-full text-left p-6 rounded-[2rem] transition-all duration-500 flex items-center justify-between group backdrop-blur-md border ${
                  activeTab === dest.id
                    ? "bg-forest/90 text-white shadow-2xl -translate-x-2 border-white/10"
                    : "bg-white/40 text-forest border-white/60 hover:bg-white/60 hover:shadow-xl"
                }`}
              >
                <div>
                  <h3 className="text-xl font-heading font-black tracking-tight mb-1">
                    {dest.name}
                  </h3>
                  <p
                    className={`text-[9px] uppercase tracking-widest font-black transition-colors ${
                      activeTab === dest.id
                        ? "text-emerald-pop"
                        : "text-forest/30 group-hover:text-forest/60"
                    }`}
                  >
                    GZ Sector ID: {dest.id.toUpperCase()}
                  </p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-500 ${
                    activeTab === dest.id
                      ? "rotate-90 text-emerald-pop"
                      : "text-forest/20 group-hover:translate-x-1"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            {destinationData.map((dest) => (
              <div
                key={dest.id}
                className={`transition-all duration-700 space-y-8 ${
                  activeTab === dest.id
                    ? "opacity-100 translate-y-0 relative z-10"
                    : "absolute opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <div className="relative aspect-video sm:aspect-4/3 lg:aspect-video rounded-3xl overflow-hidden shadow-premium">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-forest/80 to-transparent flex items-end justify-between">
                    <div>
                      <p className="text-emerald-pop font-black text-[10px] uppercase tracking-[0.4em] mb-2">
                        Selected Sector
                      </p>
                      <h4 className="text-4xl text-white font-heading font-black tracking-tighter">
                        {dest.name}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h5 className="text-xs font-black uppercase tracking-[0.2em] text-forest/40">
                      Factual Overview
                    </h5>
                    <p className="text-lg text-forest/70 leading-relaxed font-medium">
                      {dest.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {dest.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 bg-white/30 backdrop-blur-sm border border-white/60 rounded-full text-[9px] font-black uppercase tracking-widest text-forest/60 shadow-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h5 className="text-xs font-black uppercase tracking-[0.2em] text-forest/40">
                      Primary Use Cases
                    </h5>
                    <div className="space-y-4">
                      {dest.useCases.map((use, i) => (
                        <div
                          key={i}
                          className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm relative group/use transition-all hover:shadow-md hover:bg-white/60"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            {use.type.includes("OBL") ||
                            use.type.includes("Labs") ? (
                              <Zap className="w-4 h-4 text-emerald-pop" />
                            ) : (
                              <Backpack className="w-4 h-4 text-emerald-pop" />
                            )}
                            <span className="text-sm font-black text-forest uppercase tracking-tight">
                              {use.type}
                            </span>
                          </div>
                          <p className="text-xs text-forest/60 leading-relaxed">
                            {use.context}
                          </p>
                          <div className="absolute top-4 right-4 text-emerald-pop/30 opacity-0 group-hover/use:opacity-100 transition-opacity">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <PrimaryButton
                      to="/programs"
                      variant="emerald"
                      size="xs"
                      className="w-full justify-center"
                    >
                      View Matching Programs
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. FINAL CTA - SEO FOCUS */}
      <FinalCTA
        variant="charcoal"
        bgImage="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&q=80&w=1920"
        icon={Compass}
        title={
          <>
            Configure Your <br />
            <span className="text-emerald-pop italic">Deployment.</span>
          </>
        }
        description="Every destination is a variable in the behavioral equation. Connect with our architects to select the right sector for your next outbound learning journey."
        buttons={[
          { label: "Request Sector Audit", to: "/contact", variant: "emerald" },
          { label: "Our Programs", to: "/programs", variant: "outline" },
        ]}
      />
    </div>
  );
}
