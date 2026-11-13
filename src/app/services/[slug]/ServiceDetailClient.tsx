"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Layers,
  Search,
  Zap,
  Database,
  ShieldCheck,
  Code2,
  MessageSquare,
  LayoutDashboard,
  Sparkles,
  Bot,
  Server,
  Award,
} from "lucide-react";
import { ServiceData } from "./page";
import { getTechIcon } from "@/components/TechIcons";
import BookingWindowModal from "@/components/BookingWindowModal";
import { PixelImage } from "@/registry/magicui/pixel-image";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { NumberTicker } from "@/components/ui/number-ticker";

const SERVICE_DISCOUNTS: Record<string, [number, number, number]> = {
  "web-development": [22, 38, 62],
  "ai-automation": [25, 42, 65],
  "cloud-infrastructure": [20, 36, 60],
  "seo-optimization": [24, 40, 63],
  "power-bi-telemetry": [27, 45, 64],
  "mobile-apps": [23, 37, 61],
};

function getTierDiscount(slug: string, tIdx: number): number {
  if (SERVICE_DISCOUNTS[slug]) {
    const list = SERVICE_DISCOUNTS[slug];
    return list[Math.min(tIdx, list.length - 1)];
  }
  let seed = 0;
  for (let i = 0; i < slug.length; i++) seed = (seed * 31 + slug.charCodeAt(i)) % 1000;
  if (tIdx === 0) return 20 + (seed % 8); // 20 to 27%
  if (tIdx === 1) return 35 + (seed % 11); // 35 to 45%
  return 60 + (seed % 6); // 60 to 65%
}

function getCutPrice(priceStr: string, discountPercent: number): string {
  const num = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  if (isNaN(num)) return priceStr;
  const factor = 1 - discountPercent / 100;
  const original = Math.round((num / factor) / 10) * 10;
  const symbol = priceStr.startsWith("$") ? "$" : priceStr.startsWith("₹") ? "₹" : "";
  const locale = symbol === "₹" ? "en-IN" : "en-US";
  return `${symbol}${original.toLocaleString(locale)}`;
}

function getFeatureIcon(featureText: string) {
  const text = featureText.toLowerCase();
  if (
    text.includes("ai") ||
    text.includes("agent") ||
    text.includes("llm") ||
    text.includes("model") ||
    text.includes("langgraph")
  ) {
    return <Bot className="w-3.5 h-3.5 text-purple-600" />;
  }
  if (
    text.includes("seo") ||
    text.includes("search") ||
    text.includes("google") ||
    text.includes("canonical") ||
    text.includes("ranking") ||
    text.includes("rag")
  ) {
    return <Search className="w-3.5 h-3.5 text-blue-600" />;
  }
  if (
    text.includes("database") ||
    text.includes("backup") ||
    text.includes("sql") ||
    text.includes("redis") ||
    text.includes("storage") ||
    text.includes("memory")
  ) {
    return <Database className="w-3.5 h-3.5 text-indigo-600" />;
  }
  if (
    text.includes("auth") ||
    text.includes("rbac") ||
    text.includes("security") ||
    text.includes("encryption") ||
    text.includes("guardrail") ||
    text.includes("sandbox") ||
    text.includes("firewall") ||
    text.includes("ssl")
  ) {
    return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />;
  }
  if (
    text.includes("server") ||
    text.includes("docker") ||
    text.includes("linux") ||
    text.includes("cluster") ||
    text.includes("proxy") ||
    text.includes("cloud")
  ) {
    return <Server className="w-3.5 h-3.5 text-sky-600" />;
  }
  if (
    text.includes("speed") ||
    text.includes("vitals") ||
    text.includes("lighthouse") ||
    text.includes("fast") ||
    text.includes("latency") ||
    text.includes("stream") ||
    text.includes("animation")
  ) {
    return <Zap className="w-3.5 h-3.5 text-amber-500" />;
  }
  if (
    text.includes("whatsapp") ||
    text.includes("email") ||
    text.includes("lead") ||
    text.includes("notification") ||
    text.includes("omnichannel") ||
    text.includes("webhook")
  ) {
    return <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />;
  }
  if (
    text.includes("next.js") ||
    text.includes("react") ||
    text.includes("code") ||
    text.includes("api") ||
    text.includes("server actions") ||
    text.includes("connector")
  ) {
    return <Code2 className="w-3.5 h-3.5 text-cyan-600" />;
  }
  if (
    text.includes("crm") ||
    text.includes("admin") ||
    text.includes("dashboard") ||
    text.includes("portal") ||
    text.includes("workflow") ||
    text.includes("triage") ||
    text.includes("cms")
  ) {
    return <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />;
  }
  if (
    text.includes("support") ||
    text.includes("maintenance") ||
    text.includes("sla") ||
    text.includes("checkpoint") ||
    text.includes("guarantee")
  ) {
    return <Award className="w-3.5 h-3.5 text-teal-600" />;
  }
  if (
    text.includes("bespoke") ||
    text.includes("page") ||
    text.includes("design") ||
    text.includes("ui") ||
    text.includes("discount")
  ) {
    return <Sparkles className="w-3.5 h-3.5 text-rose-500" />;
  }
  return <Check className="w-3.5 h-3.5 text-emerald-600" />;
}

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
        className="text-[15px] sm:text-[19px] font-black font-heading tracking-tight block"
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
      className="text-[15px] sm:text-[19px] font-black font-heading tracking-tight tabular-nums inline-flex items-baseline"
      style={{ color }}
    >
      {prefix && <span className="mr-0.5">{prefix}</span>}
      <NumberTicker
        value={num}
        decimalPlaces={decimals}
        className="text-[15px] sm:text-[19px] font-black font-heading tracking-tight"
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
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const heroBackdrop =
    service.capabilities[0]?.image ||
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=90&w=2000&auto=format&fit=crop";

  return (
    <>
      {/* 1. Hero Header - Interactive Kinetic Title with Atmospheric Backdrop */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 bg-[#070b16] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle Background Pixel Reveal */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <PixelImage
            src={heroBackdrop}
            customGrid={{ rows: 6, cols: 8 }}
            grayscaleAnimation
            className="w-full h-full opacity-25 contrast-100 saturate-50"
            imageClassName="object-cover object-center w-full h-full"
            alt={service.name}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/70 via-[#070b16]/50 to-[#070b16]/95 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center max-w-5xl mx-auto group">
            <KineticText
              text={service.name}
              as="h1"
              className="font-serif text-2xl sm:text-4xl md:text-[53px] tracking-tight text-white group-hover:text-orange-500 transition-colors leading-tight md:leading-[1.15] justify-center text-center cursor-default block break-normal [text-wrap:balance]"
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
                className="px-3 sm:px-4 py-[4.5px] sm:py-2 rounded-xl border border-slate-200/90 bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {metric.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs animate-pulse" />
                </div>
                <div className="my-0.5 sm:my-1">
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
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
                    <h3 className="font-serif text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] group-hover:text-orange-500 transition-colors text-ink">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-ink/85 text-[14px] leading-[1.55]">
                      {cap.description}
                    </p>

                    {/* Clean 2-Column Specifications Table */}
                    {cap.properties && cap.properties.length > 0 && (
                      <div className="mt-5 rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {cap.properties.map((prop, pIdx) => (
                              <tr
                                key={pIdx}
                                className={`border-b border-slate-200/70 last:border-b-0 transition-colors hover:bg-slate-50/70 ${
                                  pIdx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                                }`}
                              >
                                {/* Column 1: Direct Title */}
                                <td className="py-3 sm:py-3.5 px-3.5 sm:px-4 text-[11px] sm:text-xs font-mono font-semibold text-slate-900 w-[36%] sm:w-[32%] align-middle border-r border-slate-200/80 bg-slate-50/60">
                                  {prop.label}
                                </td>

                                {/* Column 2: Direct Data */}
                                <td className="py-3 sm:py-3.5 px-3.5 sm:px-4 text-[11px] sm:text-xs font-mono text-slate-700 align-middle leading-relaxed">
                                  {prop.detail}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Technologies Used with Pure Icons & Proper Stack Spacing */}
                    {cap.technologies && cap.technologies.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mr-1 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-slate-400" />
                          Stack:
                        </span>
                        {cap.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200/90 bg-slate-50/70 text-xs font-medium text-slate-800 shadow-2xs hover:bg-white hover:border-slate-300 transition-colors"
                          >
                            <span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                              {getTechIcon(tech)}
                            </span>
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    )}
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

      {/* 6. Scope & Engagement Models (Pricing Ideas for Clients) */}
      {service.pricingTiers && service.pricingTiers.length > 0 && (
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/90 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-16">
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-2 block">
                Commercial Delivery Models
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-950 tracking-tight">
                Scope & Engagement Models
              </h2>
              <p className="mt-3 text-sm sm:text-base font-sans text-slate-600 max-w-2xl leading-relaxed">
                Transparent, milestone-based pricing with fixed scope, deterministic delivery dates, and full intellectual property transfer upon launch.
              </p>

              {/* Currency Switcher Toggle */}
              <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300/80 text-xs font-mono font-semibold shadow-2xs">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    currency === "USD"
                      ? "bg-slate-950 text-white shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    currency === "INR"
                      ? "bg-slate-950 text-white shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  INR (₹)
                </button>
              </div>
            </div>

            {/* Pricing Cards Grid (dynamically sized for 2 or 3 cards) */}
            <div
              className={`grid grid-cols-1 ${
                service.pricingTiers && service.pricingTiers.length === 2
                  ? "md:grid-cols-2 max-w-4xl"
                  : "md:grid-cols-3 max-w-6xl"
              } gap-6 lg:gap-8 items-stretch mx-auto`}
            >
              {service.pricingTiers && service.pricingTiers.map((tier, tIdx) => {
                const isFeatured = tier.featured;
                const modelType = tier.tierId.includes("//")
                  ? tier.tierId.split("//")[1].trim().replace(/_/g, " ")
                  : tier.tierId;

                const activePrice = currency === "USD" ? tier.priceUSD : tier.priceINR;
                const discountPercent = getTierDiscount(service.slug, tIdx);
                const cutPrice = getCutPrice(activePrice, discountPercent);

                return (
                  <div
                    key={tIdx}
                    className={`rounded-2xl bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group ${
                      isFeatured
                        ? "border-2 border-slate-900 shadow-xl ring-2 ring-slate-900/10"
                        : "border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300"
                    }`}
                  >
                    {/* Top Creative Pattern Accent Bar */}
                    <div
                      className={`h-1.5 w-full absolute top-0 inset-x-0 ${
                        isFeatured
                          ? "bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500"
                          : discountPercent >= 60
                          ? "bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity"
                          : discountPercent >= 35
                          ? "bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500 opacity-80 group-hover:opacity-100 transition-opacity"
                          : "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity"
                      }`}
                    />

                    {/* Subtle Blueprint Radial Grid Watermark on Top-Right Corner */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none rounded-tr-2xl [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]" />

                    {tier.badge && (
                      <div className="absolute -top-3 right-6 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-slate-950 text-amber-300 shadow-xs uppercase border border-amber-400/30">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col flex-1 relative z-10">
                      {/* 1. First on top of card: The Price with Cut-Price & Tier-Specific Offer Badge */}
                      <div className="pb-4 border-b border-slate-100">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Offer Pricing
                          </span>
                          <span className="text-xs font-mono text-slate-600 font-semibold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80">
                            {tier.timeline}
                          </span>
                        </div>

                        {/* Strikethrough Cut-Price & Stepped Discount Pill */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-mono text-slate-400 line-through decoration-rose-500 decoration-2">
                            {cutPrice}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-black tracking-wider shadow-2xs ${
                              discountPercent >= 60
                                ? "bg-purple-50 text-purple-700 border border-purple-200/90"
                                : discountPercent >= 35
                                ? "bg-amber-50 text-amber-700 border border-amber-200/90"
                                : "bg-rose-50 text-rose-600 border border-rose-200/80"
                            }`}
                          >
                            {discountPercent}% OFF
                          </span>
                        </div>

                        {/* Current Original Offer Price */}
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-950">
                            {activePrice}
                          </span>
                          <span className="text-xs font-mono text-slate-400 font-medium">
                            / project
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-slate-500 mt-1 block">
                          {tier.priceNote}
                        </span>

                        <div className="mt-2.5 pt-2 border-t border-slate-100/90 flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Official Invoice (GST)
                          </span>
                          <span>50% Advance · 50% Launch</span>
                        </div>
                      </div>

                      {/* 2. Then the thing like (static, dynamic, etc.) related to card */}
                      <div className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md border ${
                              isFeatured
                                ? "bg-slate-950 text-white border-slate-900 shadow-2xs"
                                : "bg-blue-50/90 text-blue-700 border-blue-200/80"
                            }`}
                          >
                            {modelType}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            Architecture
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-950 leading-snug group-hover:text-blue-600 transition-colors">
                          {tier.name}
                        </h3>
                      </div>

                      {/* 3. Then next line their description */}
                      <p className="mt-3 text-ink/85 text-[12.5px] leading-[1.55]">
                        {tier.description}
                      </p>

                      {/* 4. Then next line the horizontal separator */}
                      <div className="my-5 border-t border-slate-200/90" />

                      {/* 5. Then their points with the perfect small icons */}
                      <div className="space-y-3 flex-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Scope Deliverables & Inclusions:
                        </span>
                        {tier.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-700 font-sans leading-relaxed group/item hover:text-slate-950 transition-colors"
                          >
                            <div className="w-5.5 h-5.5 rounded-md bg-slate-50 border border-slate-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:border-slate-400 group-hover/item:bg-white transition-all">
                              {getFeatureIcon(feat)}
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 6. Then at last the button */}
                    <div className="mt-7 pt-4 border-t border-slate-100 relative z-10">
                      <button
                        type="button"
                        onClick={() => setBookingModalOpen(true)}
                        className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-mono transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn ${
                          isFeatured
                            ? "bg-slate-950 hover:bg-slate-800 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5"
                            : "bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 shadow-2xs hover:border-slate-900 hover:-translate-y-0.5"
                        }`}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Explore Other Services Navigation */}
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
