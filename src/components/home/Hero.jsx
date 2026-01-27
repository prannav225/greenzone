import PrimaryButton from "../ui/PrimaryButton";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-forest pt-20 sm:pt-24 lg:pt-32">
      {/* Background with Modern Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1440"
          alt="Alpine Peaks"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 animate-fade-in text-emerald-pop shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-pop animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Experiential Learning Leader
              </span>
            </div>
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.95] sm:leading-[0.9] tracking-tighter mb-6 sm:mb-8 animate-fade-in-up">
              Leadership <br className="hidden sm:block" />
              Development <br className="sm:hidden" /> through{" "}
              <br className="hidden sm:block" />
              <span className="text-emerald-pop italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl block sm:inline mt-2 sm:mt-0">
                Structured Adventure.
              </span>
            </h1>
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-xl mb-10 sm:mb-12 leading-tight animate-fade-in-up animate-delay-200 mx-auto lg:mx-0 px-4 sm:px-0">
              Professional outbound learning programs designed to build
              resilience, emotional intelligence, and team synergy in the heart
              of nature.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300 w-full sm:w-auto px-6 sm:px-0">
              <PrimaryButton
                to="/contact"
                variant="emerald"
                size="lg"
                className="group w-full sm:w-auto"
              >
                Start Journey{" "}
                <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
              </PrimaryButton>
              <PrimaryButton
                to="/programs"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Our Programs
              </PrimaryButton>
            </div>
          </div>

          {/* Hero Visual / Card on the Right */}
          <div className="hidden xl:block xl:col-span-5 relative animate-fade-in animate-delay-200">
            <div className="relative group">
              {/* Outer Decorative Border */}
              <div className="absolute -inset-8 border border-white/5 rounded-card -z-10 animate-float" />
              <div className="absolute inset-0 bg-emerald-pop/5 rounded-card blur-3xl -z-20" />

              {/* Main Visual Container */}
              <div className="relative aspect-4/5 rounded-image overflow-hidden shadow-4xl group-hover:shadow-emerald-pop/10 transition-all duration-700 ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000"
                  alt="High Performance Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-linear-to-t from-forest/80 via-forest/40 to-transparent" />

                {/* Technical Label */}
                <div className="absolute top-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white font-black text-[10px] uppercase tracking-widest shadow-2xl">
                  ID: GZ-01_ALPHA
                </div>
              </div>

              {/* The Floating Insight Card */}
              <div className="absolute -bottom-12 -left-12 z-20 bg-white/10 backdrop-blur-2xl p-10 rounded-card shadow-4xl animate-float border border-white/20 max-w-[340px]">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-emerald-pop shadow-xl ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-emerald-pop font-black text-[10px] uppercase tracking-[0.3em] block mb-1">
                      Our Philosophy
                    </span>
                    <h4 className="font-heading font-black text-white text-2xl tracking-tighter leading-none">
                      Nature is the <br />
                      <span className="italic text-emerald-pop">
                        Greatest Teacher.
                      </span>
                    </h4>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-bold italic border-l-2 border-emerald-pop/30 pl-6">
                  "We don't build trips, we architect breakthrough
                  environments."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
