import { ArrowRight, Compass } from "lucide-react";
import FinalCTA from "../layout/FinalCTA";

export default function CallToAction() {
  return (
    <FinalCTA
      variant="charcoal"
      bgImage="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1920"
      imageOpacity="opacity-20"
      icon={Compass}
      title={
        <>
          Ready to Move <br />
          <span className="text-emerald-pop italic">Beyond the Classroom?</span>
        </>
      }
      description="Let's design a custom outbound learning configuration that triggers your team's next phase of leadership and growth."
      buttons={[
        { label: "Start Your Journey", to: "/contact", variant: "emerald" },
        { label: "Our Programs", to: "/programs", variant: "outline" },
      ]}
      showPartners={true}
    />
  );
}
