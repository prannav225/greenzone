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
  title: ["Understanding the", "Internal Map."],
  bgImage:
    "https://images.unsplash.com/photo-1454165833267-0352c8034dbd?auto=format&fit=crop&q=80&w=2000",
  mainText:
    "NLP is a practical approach to understanding how thoughts, language, and behavior interact.",
  subText:
    "It focuses on the mechanics of communication, emotional regulation, belief systems, and behavioral change, allowing individuals to identify limiting patterns and build more effective responses.",
  quote:
    "Applied professionally in leadership, coaching, and conflict resolution, NLP is not about abstract theory but about grounded results. It provides a toolkit for navigating complex human interactions with clarity and intelligence.",
  concepts: [
    {
      title: "Neuro",
      desc: "Our nervous system and how we process experience through our five senses.",
      icon: Brain,
    },
    {
      title: "Linguistic",
      desc: "The language and non-verbal communication systems through which we code our internal maps.",
      icon: MessageSquare,
    },
    {
      title: "Programming",
      desc: "The ability to discover, utilize, and change our mental programs to achieve specific outcomes.",
      icon: Workflow,
    },
  ],
};

export const NLP_FORMATS = [
  {
    tier: "A) 1-Day Foundation Program",
    focus: "Foundational Clarity",
    desc: "A baseline introduction to the mechanics of thought and communication.",
    points: [
      "Understanding how the mind processes experience",
      "Beliefs of excellence",
      "Meta-models of communication",
      "Perceptual positions (multi-perspective thinking)",
      "Anchoring techniques for emotional regulation",
    ],
    icon: Zap,
    accent: "accent-gold",
  },
  {
    tier: "B) 2-Day Deep Dive",
    focus: "Communication & Leadership",
    desc: "Deepening the application of NLP within professional and team dynamics.",
    points: [
      "Subconscious belief systems",
      "Cognitive biases",
      "Meta-programs and behavioral patterns",
      "Neurological levels of change",
      "Role-play and conflict resolution exercises",
      "Leadership communication practice",
    ],
    icon: Scale,
    accent: "accent-emerald",
  },
  {
    tier: "C) 3-Day Mastery",
    focus: "Influence & Mastery",
    desc: "The highest tier of integration, focusing on advanced leadership and influence.",
    points: [
      "Advanced communication strategies",
      "Leadership influence",
      "Emotional intelligence integration",
      "Reframing negative thought patterns",
      "Psycho-drama & experiential learning",
      "Personalized action planning",
    ],
    icon: Sparkles,
    accent: "accent-gold",
  },
];

export const NLP_APPLICATIONS = [
  {
    title: "Leadership Communication",
    desc: "Convey vision and expectations with precision, ensuring alignment at every level.",
    icon: Target,
  },
  {
    title: "Managing Conflict",
    desc: "Navigate workplace friction by understanding the underlying psychological maps of all parties.",
    icon: Users2,
  },
  {
    title: "Emotional Control",
    desc: "Practical techniques to manage stress and maintain focus under environmental pressure.",
    icon: Scale,
  },
  {
    title: "Building Confidence",
    desc: "Identify and dismantle limiting internal dialogues to foster high-performance mindsets.",
    icon: Zap,
  },
  {
    title: "Influence & Persuasion",
    desc: "Ethical frameworks for building rapport and driving meaningful organizational change.",
    icon: TrendingUp,
  },
  {
    title: "Team Interactions",
    desc: "Enhance collaboration by recognizing and adapting to different cognitive processing styles.",
    icon: Users,
  },
];

export const NLP_AUDIENCE = [
  {
    title: "Corporate Leaders and Managers",
    desc: "Executives seeking to refine their communication and influence.",
    icon: Building2,
  },
  {
    title: "HR & L&D Professionals",
    desc: "Professionals looking for science-backed behavioral development frameworks.",
    icon: Brain,
  },
  {
    title: "Entrepreneurs and Business Owners",
    desc: "Partners navigating the psychological demands of growth and scale.",
    icon: TrendingUp,
  },
  {
    title: "Individuals Seeking Personal Growth",
    desc: "High-performers seeking deeper self-awareness and cognitive regulation.",
    icon: GraduationCap,
  },
];

export const NLP_OUTCOMES = [
  {
    title: "Clearer Communication",
    desc: "Eliminate ambiguity in high-stakes professional dialogue.",
  },
  {
    title: "Stronger Leadership Presence",
    desc: "Cultivate an authentic influence that guides teams through change.",
  },
  {
    title: "Better Emotional Regulation",
    desc: "Maintain clarity and composure in high-pressure environments.",
  },
  {
    title: "Greater Self-Awareness",
    desc: "Identify the internal cognitive patterns that drive your successes and setbacks.",
  },
  {
    title: "More Adaptive Thinking Patterns",
    desc: "Develop the cognitive flexibility to approach challenges from multiple perspectives.",
  },
  {
    title: "Long-term Behavioral Change",
    desc: "Implement sustainable shifts in professional habits and interpersonal reactions.",
  },
];
