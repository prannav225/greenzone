import {
  Activity,
  Brain,
  Building2,
  GraduationCap,
  Users,
  Mountain,
  Flag,
  Briefcase,
  Target,
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
  title: ["High-Grit", "Action."],
  bgImage:
    "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?auto=format&fit=crop&q=80&w=2000",
  mainText:
    "OBL is our signature field-based methodology designed to test individual capability and team cohesion against real-world environmental stakes.",
  subText:
    "By removing the safety net of the boardroom, we trigger authentic behavioral responses that are impossible to simulate indoors. This is tactical assessment and leadership refinement under pressure.",
  quote:
    "Nature provides the most honest feedback loop. Our role is to ensure that feedback is translated into sustainable organizational capability.",
};

export const OBL_FEATURES = [
  {
    title: "Field Stakes",
    desc: "Tangible environmental variables that mirror high-velocity workplace pressure.",
    icon: Activity,
  },
  {
    title: "Tactical Debrief",
    desc: "Converting outdoor outcomes into concrete professional strategies.",
    icon: Brain,
  },
];

export const OBL_TRACKS = [
  {
    title: "Corporate Leadership Track",
    focus: "For Managers & High-Value Teams",
    desc: "Refining command, delegation, and decision-making through field-based leadership rotations.",
    points: [
      "Dynamic leadership rotations during treks",
      "High-stakes crisis management simulations",
      "Trust-based strategic obstacles",
      "Field-to-Boardroom insight bridging",
      "Executive resilience & grit assessment",
    ],
    icon: Building2,
    accent: "accent-gold",
  },
  {
    title: "College Career Track",
    focus: "For Students & Emerging Talents",
    desc: "Bridging the gap between academic theory and the practical demands of professional careers.",
    points: [
      "Workplace readiness and peer dynamics",
      "Strategic role-play & situational awareness",
      "High-grit capability building",
      "Transition mapping for career success",
      "Resilience-based problem solving",
    ],
    icon: GraduationCap,
    accent: "accent-emerald",
  },
];

export const OBL_PROCESS = [
  {
    step: "01",
    title: "Baseline",
    desc: "Establishing team safety and identifying current behavioral defaults.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "02",
    title: "Climax",
    desc: "High-stakes field challenges that demand immediate and authentic action.",
    icon: Mountain,
    img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "03",
    title: "Analysis",
    desc: "Structured debriefs to dissect actions and map them to professional behavior.",
    icon: Brain,
    img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
  },
  {
    step: "04",
    title: "Protocols",
    desc: "Defining concrete implementation steps for the workplace.",
    icon: Flag,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export const OBL_AUDIENCE = [
  {
    title: "Corporate Units",
    desc: "Refining collaboration and resilience within senior and mid-level management.",
    icon: Building2,
  },
  {
    title: "Student Bodies",
    desc: "Equipping emerging professionals with the grit required for global industries.",
    icon: GraduationCap,
  },
  {
    title: "HR Strategists",
    desc: "Implementing objective-driven developmental tracks for talent growth.",
    icon: Briefcase,
  },
  {
    title: "Professional Individuals",
    desc: "Personal breakthrough challenges for those ready to lead beyond comfort.",
    icon: Target,
  },
];

export const OBL_OUTCOMES = [
  {
    title: "Leadership Command",
    desc: "Develop a measured style that inspires trust during organizational flux.",
  },
  {
    title: "Tactical Synergy",
    desc: "Build intuitive team collaboration that functions at pace without friction.",
  },
  {
    title: "Strategic Decision-Making",
    desc: "Master rapid data processing and clear execution under high stakes.",
  },
  {
    title: "Operational Resilience",
    desc: "Build psychological endurance to maintain performance during setbacks.",
  },
  {
    title: "Communication Precision",
    desc: "Learn to communicate with surgical intent and absolute clarity.",
  },
];
