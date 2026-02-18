import { Award } from "lucide-react";

export default function CredibilityStrip() {
  return (
    <section className="bg-forest-deep py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex items-center gap-4 text-accent-gold opacity-60">
          <Award className="w-6 h-6" />
          <div className="h-8 w-px bg-white/10" />
        </div>
        <p className="text-white/60 text-sm md:text-base font-medium max-w-3xl text-center md:text-left leading-relaxed">
          Programs facilitated in collaboration with experienced leadership
          trainers and psychologists, including{" "}
          <span className="text-white">Dr. Padmashri S. Rao.</span>
        </p>
      </div>
    </section>
  );
}
