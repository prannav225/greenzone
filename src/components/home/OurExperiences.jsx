import ExperiencePanel from "./ExperiencePanel";
import { EXPERIENCES } from "../../data/experiencesData";

export default function OurExperiences() {
  return (
    <section className="relative bg-forest-deep overflow-hidden">
      {/* Section Header */}
      <div className="relative z-20 pt-48 pb-24 px-6 text-center max-w-4xl mx-auto flex flex-col justify-center">
        <span className="text-eyebrow text-accent-gold block mb-6 animate-fade-in">
          Our Experiences
        </span>
        <h2 className="text-white text-5xl md:text-7xl font-heading mb-8 animate-fade-in animate-delay-200">
          Curated Paths. <span className="italic">Pure Discovery.</span>
        </h2>
        <p className="text-description max-w-2xl mx-auto animate-fade-in animate-delay-400">
          GreenZone specializes in four distinct vertical experiences, each
          designed for deep immersion and thoughtful pacing.
        </p>
        <div className="mt-12 flex justify-center animate-fade-in animate-delay-500">
          <div className="w-px h-24 bg-linear-to-b from-accent-gold to-transparent" />
        </div>
      </div>

      {/* Immersive Experience Panels */}
      {EXPERIENCES.map((experience, index) => (
        <ExperiencePanel
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </section>
  );
}
