import { useEffect } from "react";
import Section from "../components/layout/Section";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Greenzone Adventures";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-forest-deep min-h-screen text-white">
      <Section
        title="Privacy Policy"
        subtitle="Last Updated: February 2026"
        variant="forest"
      >
        <div className="max-w-4xl space-y-8 opacity-80 font-medium leading-relaxed">
          <p>
            At Greenzone Adventures, we prioritize the privacy of our visitors
            and clients. This Privacy Policy documents the types of information
            we collect and how we use it.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Data Collection
          </h2>
          <p>
            We collect information you provide directly to us through our
            contact form, including your name, email, phone number, and
            organization details to better serve your experience design needs.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Use of Information
          </h2>
          <p>
            We use the information we collect to communicate with you,
            personalize your experience, and improve our service offerings. We
            do not sell or share your personal data with third parties for
            marketing purposes.
          </p>
          <h2 className="text-2xl font-heading font-bold text-accent-gold">
            Contact Us
          </h2>
          <p>
            If you have any questions about our Privacy Policy, please contact
            us via our contact page.
          </p>
        </div>
      </Section>
    </main>
  );
}
