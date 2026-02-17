import { useEffect } from "react";
import Section from "../components/layout/Section";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-forest-deep min-h-screen text-white">
      <Section
        title="Terms of Service"
        subtitle="Last Updated: February 2026"
        variant="forest"
      >
        <div className="max-w-4xl space-y-8 opacity-80 font-medium leading-relaxed">
          <p>
            By accessing and using Greenzone Adventures' website and services,
            you agree to comply with and be bound by the following terms and
            conditions.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Service Description
          </h2>
          <p>
            Greenzone Adventures provides experiential learning, outbound
            training, and curated travel experiences. All programs are
            customized and subject to availability and specific booking
            conditions.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Liability
          </h2>
          <p>
            While we emphasize safety and professionalism, participation in
            outdoor and adventure activities involves inherent risks.
            Participants are expected to follow all instructions and safety
            protocols.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including designs, text, and images, is
            the property of Greenzone Adventures and may not be used without
            prior written consent.
          </p>
        </div>
      </Section>
    </main>
  );
}
