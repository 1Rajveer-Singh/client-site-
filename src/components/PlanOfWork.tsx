"use client";

import React from "react";
import {
  Compass,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Search,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import LordIcon from "@/components/ui/lord-icon";

interface StepItem {
  step: string;
  stageBadge: string;
  title: string;
  category: string;
  desc: string;
  deliverable: string;
  image: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  themeColor: string;
  tagBg: string;
  gradientBg: string;
}

export default function PlanOfWork() {
  const steps: StepItem[] = [
    {
      step: "01",
      stageBadge: "STAGE 01",
      title: "Strategic Discovery & Blueprint",
      category: "COMMERCIAL FEASIBILITY & ROADMAP",
      desc: "Deconstruct business objectives, define deterministic milestone contracts, map full-stack architecture, and establish fixed-scope commercial delivery.",
      deliverable: "Tech Blueprint • Milestone Contract • Risk Matrix",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      icon: Compass,
      themeColor: "#8B5CF6",
      tagBg: "bg-purple-600 text-white border-purple-500",
      gradientBg: "from-purple-950 via-slate-900 to-slate-950",
    },
    {
      step: "02",
      stageBadge: "STAGE 02",
      title: "High-Conversion UI/UX Design",
      category: "DESIGN SYSTEM & FIGMA PROTOTYPES",
      desc: "Interactive wireframes and sleek design prototypes engineered for psychological conversion triggers, brand authority, and frictionless user flows.",
      deliverable: "Figma Prototypes • Design System • Responsive Mockups",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
      icon: Palette,
      themeColor: "#EC4899",
      tagBg: "bg-pink-600 text-white border-pink-500",
      gradientBg: "from-pink-950 via-slate-900 to-slate-950",
    },
    {
      step: "03",
      stageBadge: "STAGE 03",
      title: "Full-Stack Development & AI",
      category: "MISSION-CRITICAL NEXT.JS & AI",
      desc: "Iterative agile sprints delivering Next.js frontend, high-concurrency cloud servers, database isolation, and autonomous AI automation pipelines.",
      deliverable: "Clean Git Code • Next.js • Vector AI RAG Sprints",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      icon: Code2,
      themeColor: "#06B6D4",
      tagBg: "bg-cyan-600 text-white border-cyan-500",
      gradientBg: "from-cyan-950 via-slate-900 to-slate-950",
    },
    {
      step: "04",
      stageBadge: "STAGE 04",
      title: "Testing, QA & Security Audit",
      category: "ENTERPRISE RIGOR & LOAD AUDIT",
      desc: "Stress-testing under 100k+ concurrent requests, latency benchmarking, zero hydration error audits, and automated end-to-end security penetration.",
      deliverable: "100k Stress Test • CWV 100 • Zero Security Flags",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      icon: ShieldCheck,
      themeColor: "#F59E0B",
      tagBg: "bg-amber-600 text-white border-amber-500",
      gradientBg: "from-amber-950 via-slate-900 to-slate-950",
    },
    {
      step: "05",
      stageBadge: "STAGE 05",
      title: "Deployment & Global Edge CDN",
      category: "ZERO-DOWNTIME ORCHESTRATION",
      desc: "Automated blue/green zero-downtime deployment across global edge CDN clusters, SSL hardening, reverse proxy setup, and instant DNS rollout.",
      deliverable: "Edge Rollout • SSL Hardened • Sub-300ms Global Speed",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      icon: Rocket,
      themeColor: "#10B981",
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      gradientBg: "from-emerald-950 via-slate-900 to-slate-950",
    },
    {
      step: "06",
      stageBadge: "STAGE 06",
      title: "SEO Dominance & 24/7 Telemetry",
      category: "GROWTH, TELEMETRY & SLA SUPPORT",
      desc: "Semantic JSON-LD schema integration, Google Search Page 1 optimization, OpenTelemetry real-time anomaly alerts, and continuous 24/7 SLA maintenance.",
      deliverable: "Page 1 Rank Signals • Real-Time Grafana • 24/7 SLA",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      icon: Search,
      themeColor: "#6366F1",
      tagBg: "bg-indigo-600 text-white border-indigo-500",
      gradientBg: "from-indigo-950 via-slate-900 to-slate-950",
    },
  ];

  return (
    <section
      id="plan"
      className="py-24 relative border-b-2 border-slate-200 select-none bg-white overflow-hidden"
    >
      {/* Subtle Engineering Blueprint Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with High-Contrast Visibility */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <KineticText
              text="PLAN OF"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading text-slate-950 cursor-default"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading text-purple-600 underline decoration-yellow-400 decoration-wavy">
              WORK
            </span>
          </div>

          <p className="mt-3 text-sm sm:text-base font-sans leading-relaxed max-w-2xl text-slate-600 font-normal">
            A battle-tested, 6-stage engineering roadmap designed with mathematical precision to eliminate technical debt and guarantee 99.999% production reliability.
          </p>
        </div>

        {/* 6 Stage Cards in a Clean Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 h-full"
            >
              <div>
                {/* Top Visual Image Banner with Gradient & Stage Badges */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  {/* Dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Stage Number Watermark */}
                  <span className="absolute bottom-2 right-3 text-6xl font-black font-heading text-white/20 select-none pointer-events-none group-hover:text-white/35 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col text-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      <LordIcon
                        src={
                          item.step === "01"
                            ? "wzwygmng"
                            : item.step === "02"
                            ? "wloilxuq"
                            : item.step === "03"
                            ? "nobciafz"
                            : item.step === "04"
                            ? "ofwpzftr"
                            : item.step === "05"
                            ? "yxyampao"
                            : "msoeawqm"
                        }
                        trigger="hover"
                        size={24}
                        colors="primary:#ffffff,secondary:#38bdf8"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      {/* Category */}
                      <span
                        className="text-[11px] font-mono font-bold uppercase tracking-wider block truncate"
                        style={{ color: item.themeColor }}
                      >
                        {item.category}
                      </span>
                      {/* Stage Title */}
                      <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description - Card property updated so the paragraph is fully shown */}
                  <p className="mt-2.5 text-sm font-sans leading-relaxed text-slate-600 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Deliverable Pill */}
              <div className="px-6 pb-6 pt-0">
                <div className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-center text-xs text-slate-700 truncate shadow-2xs">
                  {item.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
