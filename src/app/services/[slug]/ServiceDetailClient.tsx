"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FlatProjectRoadmapIcon } from "@/components/icons/SvgRepoCollections";
import { ServiceData } from "./page";
import { getTechIcon } from "@/components/TechIcons";
import BookingWindowModal from "@/components/BookingWindowModal";
import { PixelImage } from "@/registry/magicui/pixel-image";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { NumberTicker } from "@/components/ui/number-ticker";

interface ServiceDetailClientProps {
  service: ServiceData;
  allServices: ServiceData[];
}

function MetricValueTicker({
  rawValue,
  color,
}: {
  rawValue: string;
  color?: string;
}) {
  // Matches optional prefix (like '<', '+', '-'), numeric value (with optional decimal), and optional suffix (like '%', 'ms', 's', ' FPS', '/100')
  const match = rawValue.match(/^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return (
      <span
        className="text-xl sm:text-2xl font-black font-heading tracking-tight block"
        style={{ color }}
      >
        {rawValue}
      </span>
    );
  }

  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

  return (
    <span
      className="text-xl sm:text-2xl font-black font-heading tracking-tight tabular-nums inline-flex items-baseline"
      style={{ color }}
    >
      {prefix && <span className="mr-0.5">{prefix}</span>}
      <NumberTicker
        value={num}
        decimalPlaces={decimals}
        className="font-heading"
      />
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  );
}

export default function ServiceDetailClient({
  service,
  allServices,
}: ServiceDetailClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const heroBackdrop =
    service.capabilities[0]?.image ||
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=90&w=2000&auto=format&fit=crop";

  return (
    <>
      {/* 1. Hero Header - Interactive Kinetic Title with Atmospheric Backdrop */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#070b16] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle Background Pixel Reveal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src={heroBackdrop}
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-25 contrast-100 saturate-50"
            imageClassName="object-cover object-center w-full h-full"
            alt={service.name}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/70 via-[#070b16]/50 to-[#070b16]/95 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase mb-4 shadow-xs">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: service.accentColor }}
            />
            <span>{service.category}</span>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto">
            <KineticText
              text={service.name}
              as="h1"
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight justify-center text-center cursor-default"
            />
          </div>
        </div>
      </section>

      {/* 2. Metric Strip - NumberTicker Matrix Animation */}
      <section className="py-5 sm:py-6 bg-slate-50 border-b border-slate-200/90 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {service.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {metric.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs animate-pulse" />
                </div>
                <div className="my-1.5">
                  <MetricValueTicker
                    rawValue={metric.value}
                    color={service.accentColor}
                  />
                </div>
                <span className="text-[11px] text-slate-500 font-sans font-normal truncate block">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Alternating Capabilities - Clear Visuals, Quiet Chrome, No Gimmicks */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-950 tracking-tight">
              Architectural Capabilities
            </h2>
            <p className="mt-3 text-sm sm:text-base font-sans text-slate-600 max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
          </div>

          {/* Alternating Zigzag Items */}
          <div className="space-y-16 lg:space-y-24">
            {service.capabilities.map((cap, idx) => {
              const isImageLeft = idx % 2 === 0;
              const capImage =
                cap.image ||
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1200&auto=format&fit=crop";

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-xs">
                      <img
                        src={capImage}
                        alt={cap.title}
                        className="w-full h-72 sm:h-88 object-cover object-center filter brightness-95"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center text-left ${
                      isImageLeft ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <span className="text-xs font-mono font-semibold text-slate-500 tracking-wider uppercase mb-2">
                      Capability 0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-950 tracking-tight leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Deliverable Pill with Flat Roadmap Icon */}
                    <div className="mt-5 py-2.5 px-3.5 rounded-lg border border-slate-200/90 bg-slate-50 flex items-center gap-2 text-xs font-mono text-slate-700 w-fit">
                      <FlatProjectRoadmapIcon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>{cap.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Technologies & Tools Used */}
      <section id="tools" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200/90 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
              Toolchain
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-slate-950">
              Technologies & Environment
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Production toolchain utilized to build, deploy, and maintain this service.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {service.tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 p-2 border border-slate-200/80 flex items-center justify-center shrink-0">
                      {getTechIcon(tool.name)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold font-heading text-slate-900 truncate">
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
                    {tool.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. System Execution Blueprint */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-slate-950">
              Execution Blueprint
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Deterministic, milestone-based execution framework ensuring on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.workflow.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1.5">
                    Phase 0{idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold font-heading text-slate-900 mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Explore Other Services Navigation */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Portfolio Range
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-950 mt-1">
                Explore Other Services
              </h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View all services overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
                    {item.objective}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span>Explore service specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Scheduling Window Modal */}
      <BookingWindowModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
