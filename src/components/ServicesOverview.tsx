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
  Sparkles,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";

export default function ServicesOverview() {
  const services = [
    {
      icon: Server,
      title: "High-Availability Cloud Servers",
      desc: "Bare-metal Linux servers, Nginx reverse proxy clusters, automated SSL provisioning, multi-region failover, and Docker orchestration for zero-downtime reliability.",
      tag: "99.999% SLA",
      tagColor: "text-blue-600 bg-blue-50 border-blue-200",
      accent: "#2563EB",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      desc: "Next.js 16 App Router architecture with React 19 Server Components, edge-rendered micro-frontends, and sub-350ms First Contentful Paint benchmarks.",
      tag: "NEXT.JS 16",
      tagColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
      accent: "#06B6D4",
    },
    {
      icon: Bot,
      title: "Autonomous AI Agent Swarms",
      desc: "Self-orchestrating multi-agent LLM systems with real-time vector memory, automated customer task triage, and high-throughput tool calling.",
      tag: "RAG & LLM",
      tagColor: "text-purple-600 bg-purple-50 border-purple-200",
      accent: "#9333EA",
    },
    {
      icon: Search,
      title: "Algorithmic SEO Optimization",
      desc: "Programmatic search engine dominance with automated semantic JSON-LD schema generation, dynamic XML sitemaps, and technical Core Web Vitals perfection.",
      tag: "GOOGLE RANK #1",
      tagColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      accent: "#059669",
    },
    {
      icon: BarChart3,
      title: "Power BI Executive Telemetry",
      desc: "Real-time executive HUD dashboards, DAX statistical modeling, automated data warehousing pipelines, and financial KPI telemetry for leadership teams.",
      tag: "REAL-TIME HUD",
      tagColor: "text-amber-600 bg-amber-50 border-amber-200",
      accent: "#D97706",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      desc: "Butter-smooth iOS and Android applications engineered with offline-first SQLite synchronization, background location streaming, and tactile haptics.",
      tag: "120HZ NATIVE",
      tagColor: "text-rose-600 bg-rose-50 border-rose-200",
      accent: "#E11D48",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-heading uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CORE ARCHITECTURAL OFFERINGS</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <KineticText
                text="SERVICES"
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight cursor-default"
              />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-blue-600">
                OVERVIEW
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Industrial-grade digital capabilities built to transform complex business challenges into automated, scalable revenue engines.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-heading font-bold text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-xs shrink-0"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xs text-white group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: srv.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold font-heading px-2.5 py-1 rounded-full border ${srv.tagColor}`}>
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 font-heading">
                  <Link href="/services" className="inline-flex items-center gap-1 hover:underline">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

