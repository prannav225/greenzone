import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

export default function DestinationSection({
  dest,
  collection,
  idx,
  meta,
  onPreview,
}) {
  return (
    <section className="scroll-snap-section relative h-screen flex items-end overflow-hidden group">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {dest.images.map((imageUrl, imgIdx) => (
            <SwiperSlide key={imgIdx}>
              <img
                src={imageUrl}
                alt={`${dest.name} - ${imgIdx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-5" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-forest-deep via-forest-deep/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32 animate-fade-in-up">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-eyebrow text-accent-gold">
              {collection.category}
            </span>
            <div className="w-8 h-px bg-accent-gold/30" />
            <span className="text-eyebrow text-white/40">
              {idx < 9 ? `0${idx + 1}` : idx + 1}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              {dest.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {meta.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-accent-gold/10 border border-accent-gold/20 text-[9px] font-black uppercase tracking-widest text-accent-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-light italic text-accent-gold/80 max-w-2xl">
            {dest.subtitle}
          </h3>
          <p className="text-description max-w-xl text-white/70">{dest.desc}</p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
            {dest.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/50" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={() => onPreview(dest)}
              className="group flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:bg-accent-gold hover:text-forest-deep hover:border-accent-gold hover:scale-105"
            >
              Preview Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
