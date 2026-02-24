import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PACKAGES } from "../data/packagesData";
import {
  JOURNEY_METADATA,
  DESTINATION_COLLECTIONS,
} from "../data/destinationsData";
import { PACKAGE_POLICIES } from "../data/packagePolicies";
import Hero from "../components/layout/Hero";
import {
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  XCircle,
  Briefcase,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function PackageDetail() {
  const { packageId } = useParams();
  const [showFixedBar, setShowFixedBar] = useState(true);
  const footerRef = useRef(null);

  const pkg = PACKAGES.find((p) => p.destinationId === packageId);
  const meta = JOURNEY_METADATA[packageId] || {};

  // Find the original destination description from collections
  let destination = null;
  for (const collection of DESTINATION_COLLECTIONS) {
    const found = collection.destinations.find((d) => d.id === packageId);
    if (found) {
      destination = found;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedBar(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 400px 0px",
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
        <h2 className="text-3xl font-black text-forest mb-4">
          Package Not Found
        </h2>
        <PrimaryButton to="/packages" variant="secondary">
          Back to Packages
        </PrimaryButton>
      </div>
    );
  }

  return (
    <main className="bg-mist min-h-screen pb-24 lg:pb-0">
      {/* 1. HERO SECTION - Compacted for mobile */}
      <Hero
        size="compact"
        bgImage={pkg.image}
        eyebrow={`${pkg.duration} Journey`}
        title={pkg.name}
        description={destination?.subtitle || pkg.tag}
        className="pt-24! pb-12! lg:pt-40 lg:pb-24"
      >
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1">
              Starting At
            </span>
            <span className="text-xl sm:text-2xl font-black text-accent-gold">
              {pkg.price}
            </span>
          </div>
          <div className="w-px h-8 sm:h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5 sm:mb-1">
              Standard Duration
            </span>
            <span className="text-xl sm:text-2xl font-black text-white">
              {pkg.duration}
            </span>
          </div>
        </div>
      </Hero>

      {/* 2. OVERVIEW & FLOW */}
      <section className="py-12 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left: Overview & Itinerary */}
          <div className="lg:col-span-2 space-y-12 lg:space-y-24">
            <div className="max-w-4xl bg-white/40 backdrop-blur-sm p-6 md:p-14 rounded-3xl border border-forest/10 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 text-forest/40 text-[9px] font-black uppercase tracking-widest mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 text-accent-gold" />
                Experience Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-forest mb-4 sm:mb-8 tracking-tight">
                About the{" "}
                <span className="text-accent-gold italic">Journey.</span>
              </h2>
              <p className="text-base sm:text-xl text-forest/60 leading-relaxed font-medium">
                {destination?.desc ||
                  "Experience the depth of this meticulously curated journey across Karnataka's finest landscapes."}
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 md:p-14 rounded-3xl border border-forest/10 shadow-sm text-sm sm:text-base">
              <div className="flex items-center gap-4 mb-8 sm:mb-12">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-forest/5 flex items-center justify-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-forest/30 block mb-0.5 sm:mb-1">
                    Pathways
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-forest tracking-tight">
                    Journey Timeline
                  </h2>
                </div>
              </div>

              <div className="space-y-0 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-forest/5">
                {meta.flow?.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative pl-10 pb-10 sm:pb-16 last:pb-0 group"
                  >
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[6px] border-accent-gold shadow-md z-10 transition-transform group-hover:scale-110" />
                    <div className="space-y-1 sm:space-y-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-forest/30">
                        Phase {idx + 1}
                      </span>
                      <p className="text-lg sm:text-xl font-bold text-forest transition-colors">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies Section - Modern Dark Card */}
            <div className="p-6 md:p-14 rounded-3xl bg-forest text-white shadow-2xl relative overflow-hidden group border border-forest/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 sm:mb-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
                    Booking Policies
                  </h2>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-xs sm:text-sm text-white/50 font-medium max-w-xl">
                    All bookings are subject to our standard quality protocols
                    and field lead availability. Rescheduling must be requested
                    at least 15 days in advance.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {PACKAGE_POLICIES.cancellation.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0" />
                        <span className="text-[10px] sm:text-xs font-bold text-white/70 leading-relaxed">
                          {rule}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Inclusions */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-forest/10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-heading font-black text-forest mb-6 sm:mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                Inclusions
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {PACKAGE_POLICIES.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-forest/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions - Light Red Styling */}
            <div className="p-6 sm:p-10 rounded-3xl bg-red-50/50 backdrop-blur-md border border-red-100 shadow-sm">
              <h3 className="text-lg sm:text-xl font-heading font-black text-red-900/60 mb-6 sm:mb-8 flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400" />
                Excluded
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {PACKAGE_POLICIES.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-200 mt-1.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-red-900/40">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to carry */}
            <div className="p-6 sm:p-10 rounded-3xl bg-accent-gold text-forest shadow-xl relative overflow-hidden border border-forest/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="text-lg sm:text-xl font-heading font-black mb-6 sm:mb-8 flex items-center gap-3 relative z-10">
                <Briefcase className="w-5 h-5" />
                Prep Checklist
              </h3>
              <ul className="space-y-3 sm:space-y-4 relative z-10">
                {PACKAGE_POLICIES.whatToCarry.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-forest mt-1.5 shrink-0" />
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking Link - Hidden on Mobile (moved to fixed bar) */}
            <div className="pt-8 hidden lg:block">
              <PrimaryButton
                href={`https://wa.me/917019971407?text=${encodeURIComponent(
                  `Hello Greenzone Adventures! I'm currently viewing the *${pkg.name}* (${pkg.duration}) itinerary on your website and would like to inquire about booking this experience.`,
                )}`}
                target="_blank"
                size="lg"
                className="w-full justify-center py-6 shadow-gold/20"
              >
                Inquire Now
              </PrimaryButton>
              <p className="text-center text-[10px] font-black uppercase tracking-widest text-forest/30 mt-4">
                Average Response Time: 2-4 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED MOBILE BOTTOM CTA */}
      <div
        className={`fixed bottom-0 inset-x-0 p-4 bg-white/80 backdrop-blur-xl border-t border-forest/5 z-100 lg:hidden transition-all duration-500 ${
          showFixedBar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-black uppercase tracking-widest text-forest/40">
              Starting Price
            </span>
            <span className="text-lg font-black text-forest">{pkg.price}</span>
          </div>
          <PrimaryButton
            href={`https://wa.me/917019971407?text=${encodeURIComponent(
              `Hello Greenzone Adventures! I'm currently viewing the *${pkg.name}* (${pkg.duration}) itinerary on your website and would like to inquire about booking this experience.`,
            )}`}
            target="_blank"
            size="md"
            className="flex-1 justify-center px-4! py-3! shadow-gold/20"
          >
            Inquire Now
          </PrimaryButton>
        </div>
      </div>

      {/* Navigation Breadcrumb */}
      <div
        ref={footerRef}
        className="py-8 lg:py-12 border-t border-forest/5 bg-forest/2"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/packages"
            className="flex items-center gap-2 text-forest/40 hover:text-forest transition-colors text-[9px] sm:text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Back to Packages
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-forest/20 text-[8px] sm:text-[10px] font-black uppercase tracking-widest">
              Share Experience
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-forest/5 border border-forest/10" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-forest/5 border border-forest/10" />
          </div>
        </div>
      </div>
    </main>
  );
}
