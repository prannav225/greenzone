import {
  Users,
  ShieldCheck,
  Heart,
  Clock,
  PencilLine,
  MapPin,
  Zap,
  Quote,
} from "lucide-react";

/**
 * FEATURED DESTINATIONS DATA
 */
export const FEATURED_DESTINATIONS = [
  {
    id: "hampi",
    name: "Hampi",
    subtitle: "Stone Poetry",
    image:
      "https://images.unsplash.com/photo-1651569213711-b29d1fc3f995?q=80&w=800&auto=format&fit=crop",
    link: "/destinations",
  },
  {
    id: "chikkamagaluru",
    name: "Chikkamagaluru",
    subtitle: "Above the Clouds",
    image:
      "https://images.unsplash.com/photo-1605105777592-c3430a67d033?auto=format&fit=crop&q=80&w=800",
    link: "/destinations",
  },
  {
    id: "gokarna",
    name: "Gokarna",
    subtitle: "Coastal Grounding",
    image:
      "https://images.unsplash.com/photo-1641192936002-80e89555786f?q=80&w=800&auto=format&fit=crop",
    link: "/destinations",
  },
];

/**
 * WHY GREENZONE DATA
 */
export const WHY_REASONS = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Small Curated Groups",
    desc: "We limit group sizes to ensure intimacy, flexibility, and a shared pace that respects the journey.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Safety-First Approach",
    desc: "Our expeditions are backed by rigorous planning, experienced leads, and a focus on physical and emotional wellbeing.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Cultural Immersion",
    desc: "We don't just visit; we engage. Our routes are designed to connect you deeply with local narratives and traditions.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Thoughtful Pacing",
    desc: "Luxury is found in time. We prioritize slow-travel rhythms that allow for reflection and genuine presence.",
  },
  {
    icon: <PencilLine className="w-5 h-5" />,
    title: "Personalised Design",
    desc: "Every journey is a custom narrative. We tailor each experience to align with your personal curiosity and grit.",
  },
];

/**
 * HOW WE TRAVEL STEPS
 */
export const TRAVEL_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Identify the landscape that resonates with your current state.",
  },
  {
    number: "02",
    title: "Curate",
    description:
      "Work with us to weave your personal narrative into the route.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "Step into the immersion, guided by nature and thoughtful pacing.",
  },
  {
    number: "04",
    title: "Reflect",
    description:
      "Convert the journey into lasting perspective and deep clarity.",
  },
];

/**
 * GUEST VOICES DATA
 */
export const TESTIMONIALS = [
  {
    quote:
      "The trek to Mullayanagiri was life-changing. Beyond the summit, it was the silence and the thoughtful pacing that stood out. Greenzone truly understands the depth of travel.",
    author: "Prannav S.",
    role: "Expedition Member",
  },
  {
    quote:
      "Our custom heritage journey through Hampi was flawless. The local narratives and the attention to detail transformed a simple trip into a profound immersion.",
    author: "Deepa K.",
    role: "Private Traveler",
  },
  {
    quote:
      "Safe, curated, and deeply experiential. The coastal retreat in Gokarna allowed me to reset in a way I hadn't imagined. Highly recommended for those who seek the real.",
    author: "Rahul M.",
    role: "Adventurer",
  },
];
