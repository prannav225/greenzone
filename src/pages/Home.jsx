import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeWorkWith from "../components/home/WhoWeWorkWith";
import WhyGreenzone from "../components/home/WhyGreenzone";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhoWeWorkWith />
      <WhyGreenzone />
      <CallToAction />
    </main>
  );
}
