import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden px-6 animate-fade-in">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[60vw] sm:h-[60vw] bg-accent-gold/5 blur-[100px] sm:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-forest-deep to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-10 max-w-2xl w-full">
        {/* Large 404 Text */}
        <div className="relative flex items-center justify-center">
          <h1 className="relative font-heading font-black text-[140px] leading-[0.8] sm:text-[220px] md:text-[280px] tracking-tighter text-white drop-shadow-premium drop-shadow-gold">
            404
          </h1>
        </div>

        {/* Messaging */}
        <div className="space-y-4 sm:space-y-6 max-w-[280px] sm:max-w-md mx-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white uppercase tracking-[0.2em] font-heading">
            Off the Beaten Path
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/50 font-medium leading-relaxed tracking-wider">
            The trail you're looking for seems to have vanished into the
            wilderness. Let's get you back to familiar terrain.
          </p>
        </div>

        {/* Call to Action */}
        <div className="pt-6 sm:pt-10 w-full sm:w-auto">
          <PrimaryButton
            to="/"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto mt-2"
          >
            <MoveLeft className="w-4 h-4" />
            Return to Basecamp
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
