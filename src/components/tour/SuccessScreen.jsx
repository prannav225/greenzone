import React from "react";
import { CheckCircle2 } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

const SuccessScreen = ({ resetJourney }) => {
  return (
    <div className="min-h-screen bg-forest-deep flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-gold/5 rounded-full blur-[100px]" />
      <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[40px] text-center relative z-10">
        <div className="w-24 h-24 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-8 border border-accent-gold/20 shadow-glow">
          <CheckCircle2
            className="w-12 h-12 text-accent-gold"
            strokeWidth={1}
          />
        </div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
          Confirmed
        </h2>
        <p className="text-earth/60 font-medium mb-10 leading-relaxed">
          Your voyage is being architected. Expect a curated brief within 24–48
          hours.
        </p>
        <PrimaryButton
          to="/"
          onClick={resetJourney}
          className="w-full"
          size="lg"
        >
          Return Home
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SuccessScreen;
