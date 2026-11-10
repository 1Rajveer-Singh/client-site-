"use client";

import React from "react";
import Link from "next/link";
import {
  Server,
  Code2,
  Bot,
  Search,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { FlatProjectRoadmapIcon } from "@/components/icons/SvgRepoCollections";

export default function ServicesOverview() {
  const services = [
    {
      id: "servers",
      slug: "cloud-infrastructure",
      step: "01",
      icon: Server,
      title: "High-Availability Cloud Servers",
      category: "CLOUD INFRASTRUCTURE",
      badge: "99.999% SLA",
      themeColor: "#3B82F6",
      gradientBg: "from-blue-950 via-slate-900 to-slate-950",
      desc: "Bare-metal Linux servers, Nginx reverse proxy clusters, automated SSL provisioning, multi-region failover, and Docker orchestration for zero-downtime reliability.",
      deliverable: "Sub-300ms Latency • Automated Failover • DDoS Hardened",
    },
    {
      id: "web",
      slug: "web-development",
      step: "02",
      icon: Code2,
      title: "Full-Stack Web Development",
      category: "NEXT.JS & REACT",
      badge: "LIGHTHOUSE 100",
      themeColor: "#06B6D4",
      gradientBg: "from-cyan-950 via-slate-900 to-slate-950",
      desc: "Next.js App Router architecture with React Server Components, edge-rendered micro-frontends, and sub-350ms First Contentful Paint benchmarks.",
      deliverable: "0.38s FCP • Edge Prerender • Zero Hydration Shift",
    },
    {
      id: "ai",
      slug: "ai-automation",
      step: "03",
      icon: Bot,
      title: "Autonomous AI Agent Swarms",
      category: "MULTI-AGENT LLM PIPELINES",
      badge: "SUB-40MS TTFT",
      themeColor: "#A855F7",
      gradientBg: "from-purple-950 via-slate-900 to-slate-950",
      desc: "Self-orchestrating multi-agent LLM systems with real-time vector memory, automated customer task triage, and high-throughput tool calling.",
      deliverable: "LangGraph Multi-Agent • Milvus RAG • 70%+ Triage",
    },
    {
      id: "seo",
      slug: "seo-optimization",
      step: "04",
      icon: Search,
      title: "Algorithmic SEO & JSON-LD Schema",
      category: "GROWTH & SEARCH DOMINANCE",
      badge: "PAGE 1 SERP",
      themeColor: "#10B981",
      gradientBg: "from-emerald-950 via-slate-900 to-slate-950",
      desc: "Programmatic search engine dominance with automated semantic JSON-LD schema generation, dynamic XML sitemaps, and technical Core Web Vitals perfection.",
      deliverable: "Semantic JSON-LD • Top Google Ranking • Fast Indexing",
    },
    {
      id: "bi",
      slug: "power-bi-telemetry",
      step: "05",
      icon: BarChart3,
      title: "Power BI Executive Telemetry",
      category: "DATA WAREHOUSING & DAX",
      badge: "REAL-TIME HUD",
      themeColor: "#F59E0B",
      gradientBg: "from-amber-950 via-slate-900 to-slate-950",
      desc: "Real-time executive HUD dashboards, DAX statistical modeling, automated data warehousing pipelines, and financial KPI telemetry for leadership teams.",
      deliverable: "Streaming Telemetry • DAX Modeling • Automated Alerts",
    },
    {
      id: "mobile",
      slug: "mobile-apps",
      step: "06",
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      category: "FLUTTER & REACT NATIVE",
      badge: "120HZ FLUID",
      themeColor: "#E11D48",
      gradientBg: "from-rose-950 via-slate-900 to-slate-950",
      desc: "High-performance native-feeling mobile applications built with Flutter and React Native. Featuring offline SQLite database synchronization and biometric security.",
      deliverable: "120Hz Smooth • Offline-Ready • iOS & Android",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-slate-200 text-slate-900 select-none relative overflow-hidden">
      {/* Engineering Blueprint Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <KineticText
              text="SERVICES"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight cursor-default"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-blue-600 underline decoration-yellow-400 decoration-wavy">
              OVERVIEW
            </span>
          </div>
          <p className="mt-3 text-sm sm:text-base font-sans leading-relaxed max-w-2xl text-slate-600 font-normal">
            Engineered with deterministic milestones, verifiable SLAs, and sub-second global response times.
          </p>
        </div>

        {/* 6 Cards Grid (Exact matching card design from Services page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Visual Banner matching Services page */}
                  <div
                    className={`relative w-full h-40 bg-gradient-to-br ${service.gradientBg} overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

                    {/* Step Number Watermark */}
                    <span className="absolute -bottom-3 -right-2 text-7xl font-black font-heading text-white/10 select-none pointer-events-none group-hover:text-white/20 transition-colors">
                      {service.step}
                    </span>

                    {/* Center Hero Icon */}
                    <div
                      className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: service.themeColor }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-between text-slate-800">
                    <div>
                      <span
                        className="text-[11px] w2 font-bold uppercase tracking-wider block mb-1.5"
                        style={{ color: service.themeColor }}
                      >
                        {service.category}
                      </span>

                      <h3 className="text-xl font-bold card-title text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-sm font-sans leading-relaxed line-clamp-3 min-h-[56px] text-slate-600 font-normal">
                        {service.desc}
                      </p>

                      {/* Deliverables / Specs Pill */}
                      <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center gap-2 text-center w2 text-xs text-slate-700 truncate shadow-2xs">
                        <FlatProjectRoadmapIcon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{service.deliverable}</span>
                      </div>

                      {/* View Service Details & Tools Link */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Explore Tech Stack & Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to View All Services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
          >
            <span>View All Engineering Services & Toolchains</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
