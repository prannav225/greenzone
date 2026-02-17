import { useRef, useEffect } from "react";

const PHILOSOPHY_STORY = [
  {
    id: "01",
    eyebrow: "The Setting",
    title: "Nature removes distraction.",
    desc: "The wild provides a high-fidelity environment where noise defaults to zero and focus becomes absolute.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    eyebrow: "The Catalyst",
    title: "Challenge reveals leadership.",
    desc: "True capability isn't found in theory. It is forged through high-grit experiences that demand authentic action.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    eyebrow: "The Insight",
    title: "Reflection builds clarity.",
    desc: "Experience without reflection is lost. We facilitate structured decompression that turns action into understanding.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "04",
    eyebrow: "The Result",
    title: "Application drives growth.",
    desc: "We bridge the gap between the mountain and the boardroom, ensuring every insight drives real-world performance.",
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2000",
  },
];

function PhilosophyPanel({ panel }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const background = panelRef.current.querySelector(".panel-bg");

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.15;
        const yOffset = rect.top * speed;
        background.style.transform = `translateY(${yOffset}px) scale(1.15)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={panelRef}
      className="scroll-snap-section relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="panel-bg absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${panel.img})`,
            maskImage:
              "radial-gradient(ellipse at center, black 0%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, black 20%, transparent 85%)",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-forest-deep/80 via-transparent to-forest-deep/90 mix-blend-multiply" />

        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/3 -left-1/3 w-3/4 h-3/4 blur-[150px] rounded-full animate-float bg-accent-gold/10" />
          <div className="absolute bottom-1/3 -right-1/3 w-3/4 h-3/4 bg-emerald-500/5 blur-[150px] rounded-full animate-float delay-2000" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="space-y-12 animate-fade-in-up">
          <div className="flex flex-col items-center gap-4">
            <span className="text-eyebrow text-accent-gold drop-shadow-glow">
              {panel.eyebrow}
            </span>
            <div className="w-16 h-px bg-accent-gold/40" />
          </div>

          <h2 className="text-section-title leading-[0.85] tracking-tighter drop-shadow-premium">
            <span
              className="inline-block text-transparent bg-clip-text animate-text-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white, var(--color-accent-gold), white)",
                backgroundSize: "200% auto",
              }}
            >
              {panel.title}
            </span>
          </h2>

          <p className="text-description max-w-3xl mx-auto text-balance drop-shadow-xl">
            {panel.desc}
          </p>

          <div className="pt-16 flex flex-col items-center gap-6 opacity-30">
            <div className="text-white text-5xl font-heading font-black tracking-tighter">
              {panel.id}
            </div>
            <div className="w-px h-24 bg-linear-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Philosophy() {
  return (
    <div className="relative overflow-hidden bg-forest-deep">
      {/* Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-15 mix-blend-soft-light"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />

      {/* Atmospheric noise overlay */}
      <div className="atmospheric-noise absolute z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {PHILOSOPHY_STORY.map((panel) => (
        <PhilosophyPanel key={panel.id} panel={panel} />
      ))}

      {/* CLIMAX SECTION */}
      <section className="scroll-snap-section relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-8000 opacity-60 scale-110"
          style={{
            backgroundImage: `url(${PHILOSOPHY_STORY[3].img})`,
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 90%)",
          }}
        />

        <div className="absolute inset-0 bg-forest-deep/50 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto space-y-24 py-20">
          <div className="relative inline-block group">
            <div className="absolute -inset-24 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-accent-gold" />
            <div className="relative w-40 h-40 rounded-full border-2 border-white/20 flex items-center justify-center text-white font-heading tracking-[0.3em] text-4xl bg-forest-deep/90 backdrop-blur-3xl transition-all duration-500 shadow-premium">
              GZ
            </div>
            <div className="absolute inset-x-0 -bottom-10 flex justify-center">
              <div className="w-16 h-px animate-pulse bg-accent-gold shadow-gold" />
            </div>
          </div>

          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-eyebrow text-accent-gold block drop-shadow-glow">
                Why It Works
              </span>
              <h3 className="text-white text-[8vw] font-heading font-black tracking-tighter opacity-15 select-none leading-none">
                EXPERIENCE
              </h3>
            </div>

            <div className="flex flex-col items-center gap-12">
              <div
                className="w-px h-32 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-accent-gold), rgba(191,167,106,0.1), transparent)",
                }}
              />
              <p className="font-heading text-xl md:text-3xl font-light tracking-widest italic text-white/90 drop-shadow-premium max-w-2xl leading-relaxed">
                Experience Changes{" "}
                <span className="font-bold text-accent-gold">Perspective</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
