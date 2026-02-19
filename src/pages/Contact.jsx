import { useEffect } from "react";
import Section from "../components/layout/Section";
import Hero from "../components/layout/Hero";
import QuickConnect from "../components/contact/QuickConnect";
import WhatHappensNext from "../components/contact/WhatHappensNext";
import ContactForm from "../components/contact/ContactForm";
import FAQItem from "../components/contact/FAQItem";
import { FAQS } from "../data/contactData";
import { Compass } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Greenzone Adventures";
  }, []);

  return (
    <main className="scroll-snap-container bg-forest-deep">
      {/* 1. HERO SECTION */}
      <Hero
        bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Begin Your Story"
        title={
          <>
            Plan Your <br />
            <span className="text-accent-gold italic">Journey.</span>
          </>
        }
        description="Whether it's a silent trek in the Western Ghats or a custom heritage circuit, let's curate an experience that resonates."
        priority={true}
        size="compact"
      />

      {/* 2. INQUIRY FORM */}
      <Section id="inquiry" variant="forest" padding="sm">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start pb-20">
          {/* Quick Connect & What Happens Next */}
          <div className="lg:col-span-4 space-y-16">
            <QuickConnect />
            <WhatHappensNext />
          </div>

          {/* Inquiry Form */}
          <ContactForm />
        </div>
      </Section>

      {/* 3. FAQ SECTION */}
      <Section
        id="faq"
        variant="forest"
        padding="sm"
        className="border-t border-white/5"
        title={
          <>
            Everything You Need <br /> To{" "}
            <span className="italic text-accent-gold">Know.</span>
          </>
        }
        subtitle="Common Questions"
      >
        <div className="max-w-4xl">
          <div className="bg-white/5 backdrop-blur-3xl rounded-3xl p-8 md:p-12 border border-white/10">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* 4. FOOTER ADVERTISEMENT / CLOSING */}
      <section className="relative h-[30vh] flex items-center justify-center bg-forest-deep overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent-gold/50 to-transparent" />
        <div className="text-center space-y-6 px-6">
          <p className="text-xl md:text-3xl font-heading font-bold text-white/40 italic">
            “Travel is the only thing you buy that makes you richer.”
          </p>
          <div className="flex items-center justify-center gap-4 text-accent-gold opacity-50">
            <div className="w-12 h-px bg-accent-gold/20" />
            <Compass size={24} className="animate-slow-spin" />
            <div className="w-12 h-px bg-accent-gold/20" />
          </div>
        </div>
      </section>
    </main>
  );
}
