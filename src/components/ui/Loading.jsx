import { useEffect, useState } from "react";

const NATURE_PHRASES = [
  "Mapping hidden trails…",
  "Breathing in the wilderness…",
  "Charting untouched horizons…",
  "Listening to the forest…",
];

export default function Loading() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % NATURE_PHRASES.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-deep overflow-hidden">
      {/* Dark radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(191,167,106,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Ambient floating orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          top: "10%",
          left: "15%",
          background:
            "radial-gradient(circle, rgba(31,61,45,0.5) 0%, transparent 70%)",
          animation: "float 9s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 240,
          height: 240,
          bottom: "12%",
          right: "12%",
          background:
            "radial-gradient(circle, rgba(191,167,106,0.07) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite reverse",
          filter: "blur(50px)",
        }}
      />

      {/* ── Centre Content ── */}
      <div className="relative flex flex-col items-center gap-10 select-none">
        {/* Rings + Leaf Icon */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 112, height: 112 }}
        >
          {/* Outer slow-spinning dashed ring */}
          <svg
            className="absolute inset-0"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            style={{ animation: "slow-spin 16s linear infinite" }}
          >
            <circle
              cx="56"
              cy="56"
              r="52"
              stroke="rgba(191,167,106,0.20)"
              strokeWidth="1"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Middle counter-spinning ring */}
          <svg
            className="absolute inset-0"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            style={{ animation: "slow-spin 10s linear infinite reverse" }}
          >
            <circle
              cx="56"
              cy="56"
              r="40"
              stroke="rgba(191,167,106,0.12)"
              strokeWidth="1"
              strokeDasharray="3 12"
              strokeLinecap="round"
            />
          </svg>

          {/* Spinning arc — the "progress" feel */}
          <svg
            className="absolute inset-0"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            style={{ animation: "slow-spin 2.4s linear infinite" }}
          >
            <circle
              cx="56"
              cy="56"
              r="52"
              stroke="url(#goldArc)"
              strokeWidth="2.5"
              strokeDasharray="60 267"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="goldArc"
                x1="0"
                y1="0"
                x2="112"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#bfa76a" stopOpacity="0" />
                <stop offset="100%" stopColor="#bfa76a" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centre circle + leaf icon */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full bg-forest-light border border-accent-gold/20"
            style={{
              width: 64,
              height: 64,
              boxShadow:
                "0 0 32px rgba(191,167,106,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* SVG leaf — branded nature icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="rgba(191,167,106,0.08)"
              />
              <path
                d="M17 8c-2.5-1.5-6-1.5-8 1-2 2.5-1.5 6 0 8 0 0 2-4 5-5s3 3 3 3c2-2.5 2.5-5.5 0-7z"
                fill="#bfa76a"
                opacity="0.9"
              />
              <path
                d="M9 17c.5-3 3-5 5-5"
                stroke="rgba(11,26,18,0.8)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Brand wordmark */}
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-eyebrow text-accent-gold/50"
            style={{ letterSpacing: "0.35em" }}
          >
            Greenzone
          </p>
          <h1
            className="font-heading font-bold text-earth"
            style={{
              fontSize: "clamp(1.5rem,4vw,2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Adventures
          </h1>
        </div>

        {/* Cycling nature phrase */}
        <p
          className="text-eyebrow text-accent-muted"
          style={{
            letterSpacing: "0.25em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            minHeight: "1.2em",
          }}
        >
          {NATURE_PHRASES[phraseIndex]}
        </p>

        {/* Breathing progress bar */}
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: 160,
            height: 2,
            background: "rgba(191,167,106,0.10)",
          }}
        >
          <div
            style={{
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, #bfa76a, transparent)",
              backgroundSize: "200% 100%",
              animation: "text-shimmer 2s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
