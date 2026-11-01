"use client";

import React from "react";
import {
  Compass,
  FileText,
  Palette,
  Code2,
  ShieldCheck,
  UserCheck,
  Rocket,
  Search,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";

interface StepItem {
  step: string;
  stageBadge: string;
  title: string;
  category: string;
  desc: string;
  deliverable: string;
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
      title: "Blueprint & Discovery",
      category: "COMMERCIAL FEASIBILITY & ROADMAP",
      desc: "Deconstruct business objectives, define deterministic milestone contracts, map full-stack architecture, and establish fixed-scope commercial delivery.",
      deliverable: "Tech Blueprint • Milestone Contract • Risk Matrix",
      icon: Compass,
      themeColor: "#8B5CF6",
      tagBg: "bg-purple-600 text-white border-purple-500",
      gradientBg: "from-purple-950 via-slate-900 to-slate-950",
    },
    {
      step: "02",
      stageBadge: "STAGE 02",
      title: "Developer to Client Report for Research Plan",
      category: "TECHNICAL DUE DILIGENCE & SPECS",
      desc: "In-depth research report delivered to stakeholders: competitive teardown, server capacity models, API schemas, and measurable ROI benchmarks.",
      deliverable: "Research Report • Schema Specs • Server Sizing",
      icon: FileText,
      themeColor: "#3B82F6",
      tagBg: "bg-blue-600 text-white border-blue-500",
      gradientBg: "from-blue-950 via-slate-900 to-slate-950",
    },
    {
      step: "03",
      stageBadge: "STAGE 03",
      title: "Design Selection",
      category: "HIGH-CONVERSION UI/UX SYSTEM",
      desc: "Interactive wireframes and sleek design prototypes engineered for psychological conversion triggers, brand authority, and frictionless user flows.",
      deliverable: "Figma Prototypes • Design System • UX Validation",
      icon: Palette,
      themeColor: "#EC4899",
      tagBg: "bg-pink-600 text-white border-pink-500",
      gradientBg: "from-pink-950 via-slate-900 to-slate-950",
    },
    {
      step: "04",
      stageBadge: "STAGE 04",
      title: "Development Phase",
      category: "MISSION-CRITICAL FULL-STACK",
      desc: "Iterative agile sprints delivering Next.js 16 frontend, high-concurrency cloud servers, database isolation, and autonomous AI automation pipelines.",
      deliverable: "Clean Git Commits • Next.js 16 • Cloud APIs",
      icon: Code2,
      themeColor: "#06B6D4",
      tagBg: "bg-cyan-600 text-white border-cyan-500",
      gradientBg: "from-cyan-950 via-slate-900 to-slate-950",
    },
    {
      step: "05",
      stageBadge: "STAGE 05",
      title: "Testing Phase (Performance & Load)",
      category: "ENTERPRISE RIGOR & LOAD AUDIT",
      desc: "Stress-testing under 100k+ concurrent requests, latency benchmarking, zero hydration error audits, and automated end-to-end security penetration.",
      deliverable: "100k Stress Test • CWV 100 • Zero Security Flags",
      icon: ShieldCheck,
      themeColor: "#F59E0B",
      tagBg: "bg-amber-600 text-white border-amber-500",
      gradientBg: "from-amber-950 via-slate-900 to-slate-950",
    },
    {
      step: "06",
      stageBadge: "STAGE 06",
      title: "Client Review",
      category: "STAKEHOLDER VALIDATION",
      desc: "Transparent staging walkthrough, collaborative feedback alignment, feature sign-offs, and final go-to-market optimization before public launch.",
      deliverable: "Staging Preview • Stakeholder Sign-Off • Final Polish",
      icon: UserCheck,
      themeColor: "#6366F1",
      tagBg: "bg-indigo-600 text-white border-indigo-500",
      gradientBg: "from-indigo-950 via-slate-900 to-slate-950",
    },
    {
      step: "07",
      stageBadge: "STAGE 07",
      title: "Deployment",
      category: "ZERO-DOWNTIME ORCHESTRATION",
      desc: "Automated blue/green zero-downtime deployment across global edge CDN clusters, SSL hardening, reverse proxy setup, and instant DNS rollout.",
      deliverable: "Edge Rollout • SSL Hardened • Sub-350ms FCP",
      icon: Rocket,
      themeColor: "#10B981",
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      gradientBg: "from-emerald-950 via-slate-900 to-slate-950",
    },
    {
      step: "08",
      stageBadge: "STAGE 08",
      title: "SEO Initial and Optimize",
      category: "ORGANIC REVENUE ACCELERATION",
      desc: "Semantic JSON-LD schema integration, XML sitemaps, Core Web Vitals perfection, and automated indexation for dominant Google search rankings.",
      deliverable: "JSON-LD Schema • Google Indexation • Page 1 Targets",
      icon: Search,
      themeColor: "#E11D48",
      tagBg: "bg-rose-600 text-white border-rose-500",
      gradientBg: "from-rose-950 via-slate-900 to-slate-950",
    },
    {
      step: "09",
      stageBadge: "STAGE 09",
      title: "Monitoring",
      category: "24/7 AUTOPILOT & TELEMETRY",
      desc: "Real-time server telemetry, automated error alerting, APM latency tracking, and continuous proactive infrastructure maintenance under strict SLAs.",
      deliverable: "99.999% SLA • Real-time HUD • Telemetry Alerts",
      icon: Activity,
      themeColor: "#14B8A6",
      tagBg: "bg-teal-600 text-white border-teal-500",
      gradientBg: "from-teal-950 via-slate-900 to-slate-950",
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
            An industrial-grade, 9-stage engineering pipeline built with entrepreneurial precision to minimize commercial risk and maximize global scalability.
          </p>
        </div>

        {/* 9 Cards in a Clean Responsive Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Visual Banner */}
                  <div
                    className={`relative w-full h-40 bg-gradient-to-br ${item.gradientBg} overflow-hidden flex items-center justify-center`}
                  >
                    {/* Background Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

                    {/* Stage Number Watermark */}
                    <span className="absolute -bottom-3 -right-2 text-7xl font-black font-heading text-white/10 select-none pointer-events-none group-hover:text-white/20 transition-colors">
                      {item.step}
                    </span>

                    {/* Stage Hero Icon */}
                    <div
                      className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Stage Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] w2 font-bold uppercase tracking-wider border shadow-xs ${item.tagBg}`}
                      >
                        {item.stageBadge}
                      </span>
                    </div>

                    {/* Verified Step Tag */}
                    <div className="absolute top-3 right-3 pointer-events-none z-10">
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] w1 font-bold border shadow-xs flex items-center gap-1.5 bg-[#090d16] text-yellow-400 border-yellow-500/60"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        PHASE {item.step}
                      </span>
                    </div>

                    {/* Bottom Vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content with Refined Modern Typography */}
                  <div className="p-5 flex flex-col text-slate-800">
                    {/* Category */}
                    <span
                      className="text-[11px] w2 font-bold uppercase tracking-wider block mb-1.5"
                      style={{ color: item.themeColor }}
                    >
                      {item.category}
                    </span>

                    {/* Stage Title */}
                    <h3 className="text-xl font-bold card-title text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Description with Clean Sans Typography */}
                    <p className="mt-2.5 text-sm font-sans leading-relaxed line-clamp-3 min-h-[56px] text-slate-600 font-normal">
                      {item.desc}
                    </p>

                    {/* Deliverable Pill with Modern Font */}
                    <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-center w2 text-xs text-slate-700 truncate shadow-xs">
                      {item.deliverable}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
