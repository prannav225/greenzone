import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We begin by understanding your goals, challenges, context, and the kind of transformation you are seeking.",
  },
  {
    number: "02",
    title: "Custom Design",
    description:
      "Every experience is intentionally designed—aligned to your people, purpose, and environment. No templates. No off-the-shelf programs.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "Participants receive mindset priming, context setting, and pre-work to ensure deeper engagement and psychological safety.",
  },
  {
    number: "04",
    title: "Immersive Experience",
    description:
      "The journey unfolds outdoors through guided challenges, reflection, dialogue, and experiential learning—supported every step of the way.",
  },
  {
    number: "05",
    title: "Integration",
    description:
      "Post-experience reflection and integration ensure insights translate into real-world behavior, decisions, and growth.",
  },
];

import { ArrowRight, Zap } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      variant="charcoal"
      subtitle="The Methodology"
      subtitleIcon={<Zap className="w-3.5 h-3.5" />}
      title={
        <>
          A Journey of{" "}
          <span className="text-emerald-pop italic">Five Steps.</span>
        </>
      }
    >
      <div className="relative z-10">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-forest-light/0 via-forest-light/40 to-forest-light/0 -translate-x-1/2" />
        <div className="lg:hidden absolute left-[23.5px] top-0 bottom-0 w-px bg-linear-to-b from-forest-light/0 via-forest-light/40 to-forest-light/0" />

        <div className="space-y-16 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-start lg:items-center gap-8 lg:gap-16 pl-16 lg:pl-0"
            >
              <div className="w-full order-1">
                {index % 2 === 0 ? (
                  <div className="lg:text-right space-y-4">
                    <span className="text-[10px] font-black text-emerald-pop uppercase tracking-widest">
                      Phase {step.number}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-heading font-black text-white tracking-tighter transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-lg md:text-xl font-medium leading-tight max-w-md lg:ml-auto">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden lg:block" aria-hidden="true" />
                )}
              </div>

              <div className="absolute left-0 lg:relative lg:left-auto lg:order-2 z-20 flex justify-center w-12 lg:w-auto">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-charcoal border-4 border-forest-light flex items-center justify-center shadow-[0_0_30px_rgba(45,147,108,0.4)] transition-transform duration-500 hover:scale-110">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-emerald-pop animate-pulse shadow-[0_0_20px_rgba(60,220,160,0.8)]" />
                </div>
              </div>

              <div className="w-full order-3">
                {index % 2 === 1 ? (
                  <div className="lg:text-left space-y-4">
                    <span className="text-[10px] font-black text-emerald-pop uppercase tracking-widest">
                      Phase {step.number}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-heading font-black text-white tracking-tighter transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-lg md:text-xl font-medium leading-tight max-w-md lg:mr-auto">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden lg:block" aria-hidden="true" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 lg:mt-32 text-center relative z-10">
        <PrimaryButton to="/contact" variant="emerald" size="lg">
          Start Your Configuration
          <ArrowRight className="w-5 h-5 ml-4" />
        </PrimaryButton>
      </div>
    </Section>
  );
}
