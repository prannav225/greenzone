import {
  Brain,
  Zap,
  Target,
  Users,
  Building2,
  GraduationCap,
  MessageSquare,
  Workflow,
  Scale,
  Users2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const NLP_HERO = {
  bgImage:
    "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&q=80&w=2000",
  eyebrow: {
    icon: Brain,
    text: "Cognitive Mastery",
  },
  title: ["Neuro-Linguistic", "Programming "],
  titleGlow: "(NLP)",
  description:
    "Practical psychological tools for communication, leadership, and personal transformation.",
};

export const NLP_INTRO = {
  title: ["The Language of", "Performance."],
  bgImage:
    "https://images.unsplash.com/photo-1454165833267-0352c8034dbd?auto=format&fit=crop&q=80&w=2000",
  mainText:
    "NLP provides a practical toolkit for understanding how we communicate, think, and react in professional environments.",
  subText:
    "Rather than abstract theory, our NLP training focuses on the actual habits that drive performance. We help you identify the mental patterns that limit your growth and replace them with communication styles and behaviors that produce measurable results.",
  quote:
    "Success in leadership is rarely about what you know—it's about how you process information and influence those around you. NLP is the 'software' for that process.",
  concepts: [
    {
      title: "Mindset",
      desc: "How our nervous system processes information and shapes our daily experience.",
      icon: Brain,
    },
    {
      title: "Language",
      desc: "The verbal and non-verbal tools we use to convey ideas and build rapport.",
      icon: MessageSquare,
    },
    {
      title: "Results",
      desc: "The ability to update our habits and 'mental programs' to reach specific goals.",
      icon: Workflow,
    },
  ],
};

export const NLP_FORMATS = [
  {
    tier: "A) 1-Day Foundation",
    focus: "Core Communication",
    desc: "A focused introduction to the fundamentals of professional interaction.",
    points: [
      "Mastering first impressions and rapport",
      "Managing your emotional state under pressure",
      "Identifying how others process information",
      "Foundational tools for self-regulation",
      "Communicating with clarity and intent",
    ],
    icon: Zap,
    accent: "accent-gold",
  },
  {
    tier: "B) 2-Day Deep Dive",
    focus: "Leadership & Conflict",
    desc: "Applying psychological principles to lead teams and navigate friction.",
    points: [
      "Identifying and breaking limiting beliefs",
      "Advanced conflict resolution frameworks",
      "Understanding team behavioral patterns",
      "Strategic influence and persuasion",
      "Leadership language for high-stakes meetings",
    ],
    icon: Scale,
    accent: "accent-emerald",
  },
  {
    tier: "C) 3-Day Mastery",
    focus: "Advanced Influence",
    desc: "Integrated mastery for senior leaders, focusing on cultural and organizational change.",
    points: [
      "Coaching others through behavioral change",
      "High-level negotiation and influence",
      "Building resilient organizational cultures",
      "Reframing challenges into strategic assets",
      "Personalized executive action coaching",
    ],
    icon: Sparkles,
    accent: "accent-gold",
  },
];

export const NLP_APPLICATIONS = [
  {
    title: "Precision Leadership",
    desc: "Convey expectations with absolute clarity to ensure team alignment.",
    icon: Target,
  },
  {
    title: "Conflict Navigation",
    desc: "Resolve workplace friction by understanding the diverse perspectives of your team.",
    icon: Users2,
  },
  {
    title: "Stress Management",
    desc: "Maintain focus and composure in high-velocity professional environments.",
    icon: Scale,
  },
  {
    title: "Decisive Confidence",
    desc: "Dismantle internal hesitation and foster a proactive, high-performance mindset.",
    icon: Zap,
  },
  {
    title: "Ethical Influence",
    desc: "Tools for building genuine rapport and driving organizational progress.",
    icon: TrendingUp,
  },
  {
    title: "Interpersonal Agility",
    desc: "Adapt your communication style to match the needs of different stakeholders.",
    icon: Users,
  },
];

export const NLP_AUDIENCE = [
  {
    title: "Executives & Managers",
    desc: "Leaders intent on refining their presence and organizational influence.",
    icon: Building2,
  },
  {
    title: "L&D Professionals",
    desc: "Individuals seeking practical, result-oriented development frameworks.",
    icon: Brain,
  },
  {
    title: "Entrepreneurs",
    desc: "Founders managing the psychological complexities of scaling a business.",
    icon: TrendingUp,
  },
  {
    title: "Growth-Oriented Professionals",
    desc: "High-performers looking for deeper self-awareness and career mastery.",
    icon: GraduationCap,
  },
];

export const NLP_OUTCOMES = [
  {
    title: "Clearer Communication",
    desc: "Direct, unambiguous dialogue in high-stakes professional settings.",
  },
  {
    title: "Executive Presence",
    desc: "A centered, authentic influence that guides teams through change.",
  },
  {
    title: "Emotional Control",
    desc: "Composure and mental clarity during critical decision-making.",
  },
  {
    title: "Cognitive Flexibility",
    desc: "The ability to pivot your thinking and approach problems from new angles.",
  },
  {
    title: "Habit Transformation",
    desc: "Replacing restrictive patterns with sustainable, high-performance habits.",
  },
];
