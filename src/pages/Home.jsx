import HeroNew from "../components/home/HeroNew";
import ExperientialPillars from "../components/home/ExperientialPillars";
import Philosophy from "../components/home/Philosophy";
import WhyGreenzoneNew from "../components/home/WhyGreenzoneNew";

export default function Home() {
  return (
    <main className="scroll-snap-container bg-forest">
      <div className="scroll-snap-section">
        <HeroNew />
      </div>

      <ExperientialPillars />

      <Philosophy />

      <WhyGreenzoneNew />
    </main>
  );
}
