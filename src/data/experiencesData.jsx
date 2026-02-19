import { Mountain, Landmark, Waves, Map } from "lucide-react";

export const EXPERIENCES = [
  {
    id: 1,
    title: "Trek & Mountain Escapes",
    subtitle: "High Altitudes",
    description:
      "Summit the Western Ghats and traverse cloud-laden paths. From the peak of Mullayanagiri to the winds of Kodachadri, these are journeys of grit and absolute stillness.",
    cta: "Explore Mountains",
    link: "/destinations?category=Mountain",
    image:
      "https://images.unsplash.com/photo-1739038034791-a60471396db0?auto=format&fit=crop&q=80&w=2000",
    icon: Mountain,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
  {
    id: 2,
    title: "Heritage & Cultural Circuits",
    subtitle: "Ancient Echoes",
    description:
      "Walk through the mathematical poetry of Hoysala architecture and the boulder-strewn legacy of Hampi. Modern exploration meets timeless craftsmanship.",
    cta: "Explore Heritage",
    link: "/destinations?category=Heritage",
    image:
      "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&q=80&w=1200",
    icon: Landmark,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
  {
    id: 3,
    title: "Coastal & Island Retreats",
    subtitle: "Infinite Horizons",
    description:
      "Where the Ghats meet the Arabian Sea. Dive into the coral reefs of Netrani or trace the rugged cliffs of Gokarna for deep, saltwater grounding.",
    cta: "Explore Coastal",
    link: "/destinations?category=Coastal",
    image:
      "https://images.unsplash.com/photo-1642516864726-a243f416fc00?q=80&w=2000&auto=format&fit=crop",
    icon: Waves,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
  {
    id: 4,
    title: "Custom Private Journeys",
    subtitle: "Bespoke Design",
    description:
      "For those who seek the path less traveled. We weave your personal interests into a seamless, high-touch narrative across Karnataka's most powerful landscapes.",
    cta: "Plan Custom Journey",
    link: "/contact",
    image:
      "https://images.unsplash.com/photo-1618393678187-fb258b8ee191?q=80&w=2000&auto=format&fit=crop",
    icon: Map,
    overlayColor: "from-forest-deep via-transparent to-transparent",
    accentColor: "var(--color-accent-gold)",
  },
];
