import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import { optimizeImage } from "../../utils/image-optimization";
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
    <section className="scroll-snap-section relative min-h-svh flex flex-col justify-end overflow-hidden group">
      <div className="absolute inset-0 bg-forest-deep">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {dest.images.map((imageUrl, imgIdx) => (
            <SwiperSlide key={imgIdx} className="bg-forest-deep">
              <img
                src={optimizeImage(imageUrl)}
                alt={`${dest.name} - ${imgIdx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-5" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-forest-deep via-forest-deep/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 md:pb-32 animate-fade-in-up">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] md:text-eyebrow text-accent-gold uppercase font-black tracking-widest">
              {collection.category}
            </span>
            <div className="w-8 h-px bg-accent-gold/30" />
            <span className="text-[10px] md:text-eyebrow text-white/40 font-black">
              {idx < 9 ? `0${idx + 1}` : idx + 1}
            </span>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              {dest.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {meta.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-accent-gold/10 border border-accent-gold/20 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-accent-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-lg md:text-2xl font-light italic text-accent-gold/80 max-w-2xl leading-tight">
            {dest.subtitle}
          </h3>
          <p className="text-sm md:text-description max-w-xl text-white/70 leading-relaxed">
            {dest.desc}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 sm:pt-4">
            {dest.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-center gap-2 md:gap-3">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent-gold/50" />
                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/50">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 sm:pt-8 pb-4">
            <PrimaryButton
              onClick={() => onPreview(dest)}
              variant="secondary"
              size="md"
              className="group"
            >
              Preview Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
