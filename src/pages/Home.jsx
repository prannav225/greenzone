import HeroNew from "../components/home/HeroNew";
import ExperientialPillars from "../components/home/ExperientialPillars";
import Philosophy from "../components/home/Philosophy";
import WhoWeWorkWith from "../components/home/WhoWeWorkWith";
import HowItWorks from "../components/home/HowItWorks";
import CredibilityStrip from "../components/home/CredibilityStrip";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main className="scroll-snap-container bg-forest">
      <div className="scroll-snap-section">
        <HeroNew />
      </div>

      <ExperientialPillars />

      <Philosophy />

      <WhoWeWorkWith />

      <HowItWorks />

      <CredibilityStrip />

      <CallToAction />
    </main>
  );
}
