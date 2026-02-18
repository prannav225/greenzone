import Section from "../layout/Section";
import PrimaryButton from "../ui/PrimaryButton";

const steps = [
  {
    number: "01",
    title: "Immersion",
    description: "Step back from distraction to find absolute focus.",
  },
  {
    number: "02",
    title: "Challenge",
    description: "Face high-grit scenarios that demand authentic action.",
  },
  {
    number: "03",
    title: "Reflection",
    description:
      "Convert experience into strategic individual and team insights.",
  },
  {
    number: "04",
    title: "Application",
    description: "Bridge the journey to real-world performance and capability.",
  },
];

import { ArrowRight, Zap } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      variant="dark"
      subtitle="The Methodology"
      subtitleIcon={<Zap className="w-3.5 h-3.5" />}
      title={
        <>
          How{" "}
          <span className="text-accent-gold italic drop-shadow-glow">
            Growth Happens.
          </span>
        </>
      }
    >
      <div className="relative z-10 px-4">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative group text-center lg:text-left"
            >
              {/* Step Number Dot */}
              <div className="relative z-20 flex justify-center lg:justify-start mb-8">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-forest-deep border border-white/10 flex items-center justify-center shadow-premium transition-all duration-500 group-hover:border-accent-gold/50 group-hover:shadow-gold/20">
                  <span className="text-xs font-black text-accent-gold tracking-widest">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-heading font-black text-white tracking-tighter transition-colors group-hover:text-accent-gold">
                  {step.title}
                </h3>
                <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-24 text-center">
          <PrimaryButton to="/contact" variant="primary" size="md">
            Start Your Configuration
            <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
