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
          Ready to Build Something <br />
          <span className="text-accent-gold italic">Meaningful?</span>
        </>
      }
      description="Let’s design an experience aligned with your goals."
      buttons={[
        {
          label: "Schedule a Consultation",
          to: "/contact",
          variant: "primary",
        },
      ]}
      showPartners={true}
    />
  );
}
