import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PACKAGES } from "../data/packagesData";
import { JOURNEY_METADATA, getDestinationById } from "../data/destinationsData";
import { PACKAGE_POLICIES } from "../data/packagePolicies";
import Hero from "../components/layout/Hero";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Sparkles,
  MapPin,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";
import PackageItinerary from "../components/packages/PackageItinerary";
import PackagePolicies from "../components/packages/PackagePolicies";
import PackageSidebar from "../components/packages/PackageSidebar";

export default function PackageDetail() {
  const { packageId } = useParams();
  const [showFixedBar, setShowFixedBar] = useState(true);
  const footerRef = useRef(null);

  const pkg = PACKAGES.find((p) => p.destinationId === packageId);
  const meta = JOURNEY_METADATA[packageId] || {};

  // Find the original destination description from collections
  const destination = getDestinationById(packageId);

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
        className="pt-24 pb-12 lg:pt-40 lg:pb-24"
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

            <PackageItinerary flow={meta.flow} />

            {/* Policies Section - Modern Dark Card */}
            <PackagePolicies />
          </div>

          {/* Right: Sidebar Info */}
          <div className="space-y-6 lg:space-y-8">
            <PackageSidebar />

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
