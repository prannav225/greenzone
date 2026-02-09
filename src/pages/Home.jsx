import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeWorkWith from "../components/home/WhoWeWorkWith";
import WhyGreenzone from "../components/home/WhyGreenzone";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main className="scroll-snap-container">
      <div className="scroll-snap-section">
        <Hero />
      </div>
      <div className="scroll-snap-section">
        <WhatWeDo />
      </div>
      <div className="scroll-snap-section">
        <WhoWeWorkWith />
      </div>
      <div className="scroll-snap-section">
        <WhyGreenzone />
      </div>
      <div className="scroll-snap-section">
        <CallToAction />
      </div>
    </main>
  );
}
