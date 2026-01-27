import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import FinalCTA from "../components/layout/FinalCTA";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contact | Outbound Training Bangalore & Corporate Team Building India";
  }, []);

  return (
    <div className="bg-white">
      {/* 1. HERO - SEO INTRODUCTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=1920"
            alt="Outbound Training Bangalore"
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-10 animate-fade-in text-emerald-pop shadow-2xl">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Start Your Journey
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-10">
            Let's Architect <br />
            <span className="text-emerald-pop italic">Your Evolution.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-tight">
            Specializing in high-impact outbound training in Bangalore and
            multi-scale corporate team building across India.
          </p>
        </div>
      </section>

      {/* 2. WHO SHOULD CONTACT US / WHAT HAPPENS NEXT */}
      <Section
        variant="mist"
        subtitle="The Collaboration Protocol"
        subtitleIcon={<Users className="w-3.5 h-3.5" />}
        title={
          <>
            Who We <br />
            <span className="text-forest italic">Collaborate With.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Audience Grid */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "HR & L&D Leaders",
                  desc: "Organizations looking to solve culture, engagement, or leadership gaps.",
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  title: "Corporate Managers",
                  desc: "Teams navigating merger complexity or seeking peak performance alignment.",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  title: "Academic Heads",
                  desc: "Institutions aiming to build student resilience and real-world agency.",
                  icon: <Compass className="w-5 h-5" />,
                },
                {
                  title: "Discovery Seekers",
                  desc: "Individuals or small teams ready for a perspective-shifting retreat.",
                  icon: <Zap className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-emerald-pop/60 shadow-premium hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 hover:bg-white/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center text-emerald-pop mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-heading font-black text-forest mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-forest/50 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-forest p-10 lg:p-16 rounded-3xl text-white relative overflow-hidden shadow-4xl self-start">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-pop/10 rounded-full blur-[100px] animate-float" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-forest-light/10 rounded-full blur-[120px]" />
            <h3 className="text-3xl font-heading font-black mb-10 tracking-tighter">
              What happens next?
            </h3>
            <div className="space-y-10 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "Within 24 hours, an expert architect will reach out to understand your specific organizational or individual needs.",
                  icon: <Phone className="w-5 h-5" />,
                },
                {
                  step: "02",
                  title: "Program Design",
                  desc: "We configure a custom experiential roadmap, matching terrain and methodology to your desired outcomes.",
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  step: "03",
                  title: "Deployment",
                  desc: "Full execution of your journey, from clinical safety logs to post-experience reflection frameworks.",
                  icon: <CheckCircle2 className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-8 group bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-emerald-pop/30 flex items-center justify-center text-emerald-pop text-[10px] font-black group-hover:bg-emerald-pop group-hover:text-forest transition-all">
                      {item.step}
                    </div>
                    {idx !== 2 && (
                      <div className="w-px h-full bg-linear-to-b from-emerald-pop/30 to-transparent my-2" />
                    )}
                  </div>
                  <div className="pb-0">
                    <h5 className="text-xl font-heading font-black mb-2 tracking-tight group-hover:text-emerald-pop transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-white/50 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. INQUIRY FORM */}
      <Section
        id="inquiry"
        variant="sand"
        padding="md"
        subtitle="The Configuration Phase"
        subtitleIcon={<Zap className="w-3.5 h-3.5" />}
        title={
          <>
            Initiate Your <br />
            <span className="italic text-emerald-pop">Inquiry.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-12">
            <p className="text-xl text-forest/60 font-medium leading-relaxed">
              Prefer a direct channel? Reach out to our Bangalore hub for
              immediate corporate team building inquiries.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail />,
                  label: "Email Us",
                  info: "hello@greenzone.in",
                  href: "mailto:hello@greenzone.in",
                },
                {
                  icon: <Phone />,
                  label: "Call Us",
                  info: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: <MapPin />,
                  label: "Visit Hub",
                  info: "Bengaluru, KA, India",
                  href: "#",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-emerald-pop flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-forest/30 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-lg font-heading font-black text-forest">
                      {item.info}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-emerald-pop/5 backdrop-blur-sm border border-emerald-pop/10 shadow-premium">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-pop" />
                <h5 className="text-sm font-black uppercase tracking-widest text-forest">
                  Privacy Assured
                </h5>
              </div>
              <p className="text-xs text-forest/50 font-medium leading-relaxed">
                Your data is used strictly for configuring your program. No
                spam, just professional discovery.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 lg:p-16 rounded-3xl shadow-premium border border-forest/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-pop/5 rounded-full blur-3xl" />

              <form
                className="space-y-10 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="NAME"
                      className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-2xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest placeholder-forest/20 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                      Organization / Individual
                    </label>
                    <input
                      type="text"
                      placeholder="ENTITY NAME"
                      className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-2xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest placeholder-forest/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                      Program Interest
                    </label>
                    <select className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-2xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest appearance-none cursor-pointer transition-all shadow-sm">
                      <option>Outbound Learning (OBL)</option>
                      <option>Corporate Team Building</option>
                      <option>Student Development</option>
                      <option>Personal Retreat / Trek</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                      Group Size
                    </label>
                    <input
                      type="text"
                      placeholder="E.G. 15-20"
                      className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-2xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest placeholder-forest/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                    Preferred Location
                  </label>
                  <select className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-2xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest appearance-none cursor-pointer transition-all shadow-sm">
                    <option>Western Ghats / Chikmagalur</option>
                    <option>Hampi / Lepakshi (Historical)</option>
                    <option>Coorg / Wayanad</option>
                    <option>Gokarna (Coastal)</option>
                    <option>Himalayas</option>
                    <option>Bengaluru Local</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-forest/40 ml-4">
                    Objectives & Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="DESCRIBE YOUR GOALS..."
                    className="w-full bg-[#fcfdfc] border border-forest/40 px-8 py-5 rounded-3xl focus:border-emerald-pop focus:bg-white focus:ring-4 focus:ring-emerald-pop/5 outline-none font-bold text-forest placeholder-forest/20 transition-all resize-none shadow-sm"
                  />
                </div>

                <PrimaryButton
                  variant="primary"
                  size="lg"
                  className="w-full group"
                >
                  Transmit Inquiry
                  <div className="relative ml-4">
                    <Send className="w-5 h-5 group-hover:translate-x-12 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-700" />
                    <Send className="w-5 h-5 absolute inset-0 -translate-x-12 translate-y-12 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                  </div>
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <FinalCTA
        variant="forest"
        icon={Zap}
        bgImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
        title={
          <>
            The Systems are <br />
            <span className="text-emerald-pop italic">Engaged.</span>
          </>
        }
        description="Our architects are ready to configure your journey. Transmit your inquiry to begin."
        buttons={[]}
      />
    </div>
  );
}
