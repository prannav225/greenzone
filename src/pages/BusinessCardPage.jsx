import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, Globe, MapPin, QrCode, Download } from "lucide-react";
import { toPng, toJpeg } from "html-to-image";
import { QRCode } from "react-qrcode-logo";

const FOUNDERS = {
  pranav: {
    name: "PRANAV M",
    role: "Founding Team",
    phone: "+91 9945859958",
    email: "pra9v@proton.me",
    website: "pra9v.site",
    id: "pranav",
  },
  kumar: {
    name: "KUMAR SRIVASTA MS",
    role: "Founder",
    phone: "+91 7019971407",
    email: "greenzoneadventures@gmail.com",
    website: "greenzoneadventures.com",
    id: "kumar",
  },
};

const BusinessCardPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const founderId =
    searchParams.get("founder") === "kumar" ? "kumar" : "pranav";
  const side = searchParams.get("side") === "back" ? "back" : "front";
  const founder = FOUNDERS[founderId];

  const cardRef = useRef(null);

  const downloadImage = (format) => {
    if (cardRef.current === null) return;

    const options = {
      pixelRatio: 3, // High quality for printing
      backgroundColor: "#0b1a12", // Forest Deep
    };

    const fileName =
      side === "back"
        ? `greenzone_card_back.${format}`
        : `${founder.id}_business_card_front.${format}`;
    const action = format === "png" ? toPng : toJpeg;

    action(cardRef.current, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = fileName;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download image", err);
      });
  };

  return (
    <div className="min-h-screen bg-forest-deep flex flex-col items-center justify-center p-4 gap-8">
      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-6 z-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Founder Switcher */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl">
            <button
              onClick={() =>
                setSearchParams({ card: "true", founder: "pranav", side })
              }
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                founderId === "pranav"
                  ? "bg-accent-gold text-forest-deep shadow-lg"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Pranav
            </button>
            <button
              onClick={() =>
                setSearchParams({ card: "true", founder: "kumar", side })
              }
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                founderId === "kumar"
                  ? "bg-accent-gold text-forest-deep shadow-lg"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Kumar
            </button>
          </div>

          {/* Side Switcher */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl">
            <button
              onClick={() =>
                setSearchParams({
                  card: "true",
                  founder: founderId,
                  side: "front",
                })
              }
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                side === "front"
                  ? "bg-white text-forest-deep shadow-lg"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Front
            </button>
            <button
              onClick={() =>
                setSearchParams({
                  card: "true",
                  founder: founderId,
                  side: "back",
                })
              }
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                side === "back"
                  ? "bg-white text-forest-deep shadow-lg"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Back
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => downloadImage("png")}
            className="btn-primary flex items-center gap-2 px-6"
          >
            <Download size={16} />
            Download {side === "back" ? "Back" : "Front"} (PNG)
          </button>
        </div>
      </div>

      {/* Business Card Container - Forced Dimensions for Printing (2x3.5 at 300dpi is approx 600x1050) */}
      <div
        ref={cardRef}
        style={{ width: "400px", height: "700px" }} // Scaled for display while maintaining aspect ratio
        className="relative bg-forest-deep overflow-hidden border border-white/10 rounded-md shadow-premium flex flex-col p-8 font-sans selection:bg-accent-gold"
      >
        {/* Atmospheric Grain/Noise (Subtle for Print) */}
        <div className="absolute inset-0 opacity-70 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* --- DECORATIVE LAYERS (Creative & Modern) --- */}
        {/* Large Decorative Vertical Text */}
        <div className="absolute top-1/2 -right-32 -translate-y-1/2 rotate-90 opacity-[0.05] select-none pointer-events-none">
          <span className="text-[120px] font-black tracking-widest text-white whitespace-nowrap">
            ADVENTURES
          </span>
        </div>

        {/* Topographic Lines SVG (Static) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          viewBox="0 0 400 700"
        >
          <path
            d="M-50 200 Q100 150 200 250 T450 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent-gold"
          />
          <path
            d="M-50 220 Q110 170 210 270 T460 220"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent-gold"
          />
          <path
            d="M-50 600 Q150 550 250 650 T450 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent-gold"
          />
          <path
            d="M-50 620 Q160 570 260 670 T460 620"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent-gold"
          />
        </svg>

        {/* Left Side Accent Bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-accent-gold via-accent-gold/20 to-transparent" />

        {/* --- CONTENT LAYERS --- */}

        {side === "front" ? (
          <>
            {/* Header: Branded Identity */}
            <div className="relative flex justify-between items-start mb-16 pr-4">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md p-2 shadow-2xl border border-white/20 flex items-center justify-center">
                  <img
                    src="/logo.webp"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-lg font-black text-white tracking-widest uppercase leading-none">
                    Greenzone
                  </span>
                  <span className="text-[8px] font-bold text-accent-gold tracking-[0.5em] uppercase mt-1">
                    Adventures
                  </span>
                </div>
              </div>
            </div>

            {/* Identity: The Nameplate */}
            <div className="flex-1 flex flex-col justify-start pt-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-accent-gold" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-accent-gold" />
                  <div className="w-1 h-1 rounded-full bg-accent-gold/40" />
                  <div className="w-1 h-1 rounded-full bg-accent-gold/20" />
                </div>
              </div>

              <div className="mb-4">
                <h1
                  className={`font-black text-white tracking-tighter uppercase leading-[0.9] text-wrap ${
                    founder.name.length > 6 ? "text-5xl" : "text-7xl"
                  }`}
                >
                  {founder.name}
                </h1>
              </div>

              <div className="inline-flex self-start px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/20 rounded-lg shrink-0">
                <span className="text-[11px] font-bold text-accent-gold tracking-[0.2em] uppercase whitespace-nowrap">
                  {founder.role}
                </span>
              </div>
            </div>

            {/* Footer: Architectural Contact & QR */}
            <div className="mt-auto grid grid-cols-[1.2fr_auto] items-end pb-8 border-t border-white/10 pt-10 gap-4 relative overflow-hidden">
              {/* Subtle noise card for contact */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone / Whatsapp",
                    value: founder.phone,
                  },
                  { icon: Mail, label: "Email Address", value: founder.email },
                  {
                    icon: Globe,
                    label: "Personal Site",
                    value: founder.website,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <item.icon
                        size={10}
                        className="text-accent-gold shrink-0"
                      />
                      <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest leading-none whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[13px] text-white font-medium tracking-wide leading-none whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Integrated QR Frame */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative p-2 bg-white/5 border border-white/10 rounded-md">
                  <div className="absolute -inset-1 pointer-events-none opacity-40" />
                  <QRCode
                    value="https://greenzoneadventures.com"
                    size={70}
                    qrStyle="dots"
                    eyeRadius={4}
                    fgColor="#ffffff"
                    bgColor="transparent"
                    quietZone={0}
                  />
                </div>
                <span className="text-[7px] text-white/30 uppercase font-black tracking-[0.3em] leading-none whitespace-nowrap">
                  Visit Website
                </span>
              </div>
            </div>
          </>
        ) : (
          /* --- BACK SIDE DESIGN --- */
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Center Logo Hub */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md p-6 shadow-2xl border border-white/20 flex items-center justify-center mb-8 relative z-10 transition-transform hover:scale-105 duration-500">
                <img
                  src="/logo.webp"
                  alt="Greenzone Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="font-heading text-4xl font-black text-white tracking-[0.2em] uppercase leading-none mb-2">
                  Greenzone
                </span>
                <span className="font-sans text-xs font-bold text-accent-gold tracking-[0.6em] uppercase opacity-80">
                  Adventures
                </span>
              </div>

              {/* Decorative accent dots below branding */}
              <div className="flex gap-2 mt-12">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i === 2 ? "bg-accent-gold" : "bg-white/10"}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Tagline/URL */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="h-px w-10 bg-accent-gold/20 mb-4" />
              <span className="text-[9px] font-black text-white/20 tracking-[0.4em] uppercase">
                greenzoneadventures.com
              </span>
            </div>
          </div>
        )}

        {/* Print safe margins indicator (Visual only, not for print) */}
        <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-lg opacity-50" />
      </div>

      {/* Instructions */}
      <div className="text-white/40 text-[10px] text-center max-w-xs">
        Design optimized for 300DPI 2" x 3.5" printing. Download as PNG for best
        quality.
      </div>
    </div>
  );
};

export default BusinessCardPage;
