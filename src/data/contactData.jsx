import { Compass, Mountain, Palmtree, Map } from "lucide-react";

export const EXPERIENCE_TYPES = [
  {
    id: "trekking",
    label: "Trekking & Mountain Escapes",
    icon: <Mountain size={14} />,
  },
  {
    id: "heritage",
    label: "Heritage & Cultural Circuits",
    icon: <Compass size={14} />,
  },
  {
    id: "coastal",
    label: "Coastal & Island Retreats",
    icon: <Palmtree size={14} />,
  },
  { id: "custom", label: "Custom Private Journeys", icon: <Map size={14} /> },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Connect",
    desc: "Share your vision through our inquiry form. We'll reach out to understand your personal rhythm and travel goals.",
  },
  {
    step: "02",
    title: "Curate",
    desc: "Our architects design a bespoke narrative for your journey—weaving together trails, heritage, and stillness.",
  },
  {
    step: "03",
    title: "Embark",
    desc: "Step into a seamless experience where every detail is managed with safety-first precision and deep intentionality.",
  },
];

export const FAQS = [
  {
    question: "How far in advance should I book my journey?",
    answer:
      "For curated private journeys, we recommend booking at least 4-6 weeks in advance to ensure the best pace and availability of immersive stays.",
  },
  {
    question: "Are these journeys suitable for solo travelers?",
    answer:
      "Absolutely. Our small curated groups are designed to foster intimacy and safety, making them perfect for those traveling alone to reconnect.",
  },
  {
    question: "Can you customize a journey for a private family group?",
    answer:
      "Yes, bespoke private design is our specialty. We can tailor the grit, pacing, and cultural depth to meet your family's specific needs.",
  },
  {
    question: "What is your approach to safety in remote areas?",
    answer:
      "Safety is our baseline. Every expedition is led by experienced field leads with rigorous protocols, first-aid training, and local network support.",
  },
];
