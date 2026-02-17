import {
  Activity,
  Brain,
  Building2,
  GraduationCap,
  Users,
  Mountain,
  Flag,
  Users2,
  Briefcase,
  Target,
  ShieldCheck,
  Search,
} from "lucide-react";

export const OBL_HERO = {
  bgImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000",
  eyebrow: {
    icon: Mountain,
    text: "Experiential Mastery",
  },
  title: ["Outbound ", "Learning "],
  titleGlow: "(OBL).",
  description:
    "Action-based leadership and team development through immersive challenges in real-world outdoor environments.",
};

export const OBL_INTRO = {
  title: ["Action-Based", "Development."],
  bgImage:
    "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?auto=format&fit=crop&q=80&w=2000",
  mainText:
    "Outbound Learning is a method of experiential training that replaces static classrooms with dynamic outdoor environments.",
  subText:
    "Unlike traditional training, OBL places participants in high-grit scenarios where they must decide, delegate, and execute immediately. Reflection on these actions reveals deep-seated leadership traits and team dynamics that a boardroom can never expose.",
  quote:
    "The wilderness doesn't wait for permission. It demands clarity, resilience, and absolute collaboration. We use these demands to forge stronger, more adaptive professional teams.",
};

export const OBL_FEATURES = [
  {
    title: "Real-World Stakes",
    desc: "Challenges that mirror workplace pressure through tangible environmental variables.",
    icon: Activity,
  },
  {
    title: "Structured Reflection",
    desc: "Every experience is dissected to bridge the gap between outdoor action and office application.",
    icon: Brain,
  },
];

export const OBL_TRACKS = [
  {
    title: "Corporate Leadership Track",
    focus: "For Managers & High-Value Teams",
    desc: "Deep-dive experiential training focused on strategic resilience and command.",
    points: [
      "Leadership rotations during complex treks",
      "High-stakes crisis simulation challenges",
      "Trust-based high-ropes and obstacles",
      "Strategic mirroring and communication tasks",
      "Campfire debrief and psychological reflection",
      "Personalized executive action planning",
    ],
    icon: Building2,
    accent: "accent-gold",
  },
  {
    title: "College Career Track",
    focus: "For Students & Emerging Talents",
    desc: "Transforming academic potential into professional grit and career readiness.",
    points: [
      "Foundational EQ and self-awareness labs",
      "Teamwork and peer-influence challenges",
      "Career-mapped strategic simulations",
      "Resume, LinkedIn, and pitch mentorship",
      "High-resilience role-play exercises",
      "Post-grad transitional roadmap building",
    ],
    icon: GraduationCap,
    accent: "accent-emerald",
  },
];

export const OBL_PROCESS = [
  {
    step: "01",
    title: "Immersion",
    desc: "Trust-building tasks designed to break down corporate silos and establish safety.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "02",
    title: "Challenge",
    desc: "High-grit outdoor tasks that mirror workplace pressure and demand decision-making.",
    icon: Mountain,
    img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "03",
    title: "Reflection",
    desc: "Debrief sessions where triggers are identified and learning is crystallized into insights.",
    icon: Brain,
    img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "04",
    title: "Application",
    desc: "Forging concrete action plans for immediate implementation back at the office.",
    icon: Flag,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export const OBL_AUDIENCE = [
  {
    title: "Corporate Teams",
    desc: "Building resilience and seamless collaboration within organizational units.",
    icon: Building2,
  },
  {
    title: "Academic Institutions",
    desc: "Preparing the next generation of leaders through grit and practical experience.",
    icon: GraduationCap,
  },
  {
    title: "HR & Talent Managers",
    desc: "Implementing high-impact, behavioral development tracks for talent retention.",
    icon: Briefcase,
  },
  {
    title: "High-Performers",
    desc: "Individual professionals seeking to break through psychological barriers outdoors.",
    icon: Target,
  },
];

export const OBL_OUTCOMES = [
  {
    title: "Leadership Presence",
    desc: "Cultivate a commanding style that inspires trust during crisis.",
  },
  {
    title: "Team Synergy",
    desc: "Build intuitive collaboration that functions at high speeds without ego.",
  },
  {
    title: "Strategic Precision",
    desc: "Master rapid data processing and clear decision-making under high stakes.",
  },
  {
    title: "Mental Resilience",
    desc: "Forge psychological grit that turns setbacks into strategic opportunities.",
  },
  {
    title: "Command Clarity",
    desc: "Learn to communicate with surgical precision and tactical intent.",
  },
  {
    title: "Adaptive Agility",
    desc: "Identify the internal cognitive patterns that drive team successes and setbacks.",
  },
];
