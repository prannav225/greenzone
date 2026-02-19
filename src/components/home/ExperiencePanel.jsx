import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "../../data/experiencesData";
import PrimaryButton from "../ui/PrimaryButton";

export default function ExperiencePanel({ experience, index }) {
  const isEven = index % 2 === 0;
  const Icon = experience.icon;

  return (
    <div className="relative h-[60vh] w-full flex items-center overflow-hidden group scroll-snap-section">
      {/* Background with Cinematic Treatment */}
      <div className="absolute inset-0 z-0 bg-forest-deep">
        <img
          src={experience.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-4000 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-deep/40 backdrop-blur-[1px]" />

        {/* Deep Forest Gradient for Content Contrast */}
        <div
          className={`absolute inset-0 bg-linear-to-r ${
            isEven
              ? "from-forest-deep via-forest-deep/60 to-transparent"
              : "from-transparent via-forest-deep/60 to-forest-deep"
          }`}
        />

        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-forest-deep to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-forest-deep to-transparent opacity-90" />
      </div>

      {/* Numerical Anchor - Immersive Background Element */}
      <div
        className={`absolute bottom-0 ${
          isEven ? "right-0" : "left-0"
        } pointer-events-none select-none overflow-hidden`}
      >
        <span className="font-heading text-[25vw] font-black text-white/5 leading-none -mb-32 block translate-y-16 group-hover:-translate-y-10 transition-transform duration-1000">
          0{experience.id}
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div
          className={`max-w-2xl ${
            isEven ? "md:ml-0" : "md:ml-auto md:text-right md:items-end"
          } flex flex-col items-center text-center md:items-start md:text-left`}
        >
          {/* Eyebrow Logic */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 animate-fade-in group-hover:gap-6 transition-all duration-500">
            <span className="text-eyebrow">{experience.subtitle}</span>
          </div>

          {/* Title - Fluid & Impactful */}
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-premium">
            {experience.title}
          </h2>

          {/* Description - Balanced density */}
          <div className="relative mb-10 sm:mb-12">
            <div
              className={`hidden md:block absolute top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ${
                isEven ? "-left-6" : "-right-6"
              }`}
              style={{ backgroundColor: experience.accentColor, opacity: 0.3 }}
            />
            <p className="text-description max-w-xl mx-auto md:mx-0">
              {experience.description}
            </p>
          </div>

          {/* Luxury CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <PrimaryButton
              to={experience.link}
              className="w-full sm:w-auto px-12 py-5"
            >
              <span>{experience.cta}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>

            {/* Icon Secondary Indicator */}
            <div
              className={`hidden md:flex items-center gap-5 transition-opacity duration-700 delay-300 ${
                isEven ? "opacity-20" : "flex-row-reverse opacity-20"
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Marker */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className={`h-1 rounded-full transition-all duration-700 ${
              exp.id === experience.id ? "w-16" : "w-3 bg-white/10"
            }`}
            style={{
              backgroundColor:
                exp.id === experience.id ? experience.accentColor : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}
