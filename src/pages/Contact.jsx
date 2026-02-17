import { useState, useEffect, useRef } from "react";
import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Compass,
  Users,
  Zap,
  ShieldCheck,
  ChevronRight,
  Clock,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "Adventure & Travel",
    title: "Adventure & Personalised Travel",
    desc: "For individuals, families, or groups looking for curated journeys.",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    id: "Corporate OBL",
    title: "Corporate Outbound Learning (OBL)",
    desc: "For organizations seeking leadership and team development programs.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "NLP & EQ",
    title: "NLP & Emotional Intelligence",
    desc: "For corporate training, leadership workshops, or professional development.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "Agri Learning",
    title: "Agri Learning Retreats (Schools Only)",
    desc: "For premium institutions seeking experiential sustainability education.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const PROGRAM_TYPES = [
  "Adventure & Travel",
  "Corporate OBL",
  "NLP Program",
  "Emotional Intelligence Program",
  "Agri Learning Retreat",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    programType: "",
    dates: "",
    groupSize: "",
    location: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleCategorySelect = (id) => {
    // Map internal ID to dropdown value
    const mapping = {
      "Adventure & Travel": "Adventure & Travel",
      "Corporate OBL": "Corporate OBL",
      "NLP & EQ": "NLP Program",
      "Agri Learning": "Agri Learning Retreat",
    };
    setFormData((prev) => ({ ...prev, programType: mapping[id] }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    document.title = "Contact | GreenZone Adventures";
  }, []);

  return (
    <main className="scroll-snap-container bg-forest-deep">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
            alt="Mountains"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold mb-10 animate-fade-in-up">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-eyebrow translate-y-[0.5px]">
              Get in Touch
            </span>
          </div>

          <h1 className="text-hero text-white mb-8 animate-fade-in-up [animation-delay:200ms]">
            Let’s Design Your{" "}
            <span className="text-accent-gold italic">Experience.</span>
          </h1>

          <p className="text-description text-earth/60 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
            Tell us what you’re looking for — we’ll build something aligned to
            your goals.
          </p>
        </div>
      </section>

      {/* 2. SELECT YOUR INTEREST */}
      <Section
        variant="forest"
        padding="sm"
        title={
          <>
            Selection <span className="text-accent-gold italic">Framework</span>
          </>
        }
        subtitle="Step One"
        subtitleIcon={<ChevronRight />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className="group relative cursor-pointer p-10 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/8 hover:border-accent-gold/40 transition-all duration-700 flex flex-col items-start text-left animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Ambient Glow Background */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-gold/5 rounded-full blur-[80px] group-hover:bg-accent-gold/15 transition-all duration-700" />

              {/* Dynamic Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-forest-deep shadow-2xl border border-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-accent-gold/20 transition-all duration-700">
                <div className="text-accent-gold w-6 h-6 transform group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-black text-white mb-4 leading-[1.1] tracking-tight group-hover:text-accent-gold transition-colors duration-500">
                {cat.title}
              </h3>

              <p className="text-[13px] text-earth/40 font-medium leading-relaxed mb-auto group-hover:text-earth/70 transition-colors duration-500">
                {cat.desc}
              </p>

              <div className="mt-12 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-accent-gold/40 group-hover:text-accent-gold transition-all duration-500">
                <span className="translate-y-[0.5px]">Configure</span>
                <div className="h-px w-8 bg-accent-gold/20 group-hover:w-14 group-hover:bg-accent-gold transition-all duration-500" />
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Edge Highlight */}
              <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-accent-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* 3. INQUIRY FORM STRUCTURE */}
      <Section
        id="inquiry"
        variant="forest"
        padding="sm"
        title={
          <>
            Inquiry <span className="text-accent-gold italic">Details</span>
          </>
        }
        subtitle="Step Two"
        subtitleIcon={<ChevronRight />}
      >
        <div
          ref={formRef}
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-4 h-4" />,
                    label: "Phone",
                    value: "+91 70199 71407",
                    href: "tel:+917019971407",
                  },
                  {
                    icon: <Mail className="w-4 h-4" />,
                    label: "Email",
                    value: "greenzoneadventures@gmail.com",
                    href: "mailto:greenzoneadventures@gmail.com",
                  },
                  {
                    icon: <MapPin className="w-4 h-4" />,
                    label: "Location",
                    value: "Bengaluru",
                    href: "#",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center group-hover:bg-accent-gold group-hover:text-forest-deep transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-earth block">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-card bg-accent-gold/5 border border-accent-gold/20 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-gold" />
                <h4 className="text-sm font-black uppercase tracking-widest text-white">
                  Response Expectation
                </h4>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-medium">
                We typically respond within 24–48 hours. Every program is
                customized — our team may schedule a short call to understand
                your requirements better.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8 bg-earth-light/20 p-8 sm:p-12 lg:p-16 rounded-card shadow-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl" />

            <form
              className="relative z-10 space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER YOUR NAME"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="OPTIONAL"
                    value={formData.org}
                    onChange={(e) =>
                      setFormData({ ...formData, org: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL@EXAMPLE.COM"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Program Type
                  </label>
                  <select
                    value={formData.programType}
                    onChange={(e) =>
                      setFormData({ ...formData, programType: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      SELECT PROGRAM
                    </option>
                    {PROGRAM_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. LATE OCTOBER 2024"
                    value={formData.dates}
                    onChange={(e) =>
                      setFormData({ ...formData, dates: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Group Size
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. 20-25 PEOPLE"
                    value={formData.groupSize}
                    onChange={(e) =>
                      setFormData({ ...formData, groupSize: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                    Location Preference
                  </label>
                  <input
                    type="text"
                    placeholder="CITY OR REGION"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-earth ml-4">
                  Message / Program Goals
                </label>
                <textarea
                  rows={4}
                  placeholder="DESCRIBE YOUR OBJECTIVES..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/50 border-forest-deep/10 px-6 py-4 rounded-2xl focus:border-accent-gold focus:bg-white outline-none font-bold text-forest-deep transition-all resize-none"
                />
              </div>

              <PrimaryButton
                variant="primary"
                size="lg"
                className="w-full group"
              >
                SUBMIT INQUIRY
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </PrimaryButton>
            </form>
          </div>
        </div>
      </Section>

      {/* 6. FINAL CLOSING LINE */}
      <section className="py-24 bg-forest-deep text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="w-px h-24 bg-linear-to-b from-transparent via-accent-gold to-transparent mx-auto opacity-30" />
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white italic tracking-tighter">
            We don’t offer standard packages. <br />
            <span className="text-accent-gold">
              We design meaningful experiences.
            </span>
          </h2>
          <div className="w-px h-24 bg-linear-to-b from-accent-gold via-accent-gold to-transparent mx-auto opacity-30" />
        </div>
      </section>
    </main>
  );
}
