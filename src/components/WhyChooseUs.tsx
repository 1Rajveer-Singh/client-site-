"use client";

import React from "react";
import Link from "next/link";
import { KineticText } from "@/registry/magicui/kinetic-text";
import LordIcon from "@/components/ui/lord-icon";

export default function WhyChooseUs() {
  const differentiators = [
    {
      lordIcon: "yxyampao",
      title: "Sub-300ms Global Edge Latency",
      desc: "Every website and API is architected with modern edge caching, zero unnecessary hydration, and 100/100 Core Web Vitals for maximum conversion.",
      metric: "<300ms FCP",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      accent: "#06B6D4",
    },
    {
      lordIcon: "ssdupzsv",
      title: "Contractual 99.999% SLA Uptime",
      desc: "Engineered on high-concurrency bare-metal Linux servers and Docker clusters with automated health-checks and multi-region failover.",
      metric: "99.999% SLA",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      accent: "#10B981",
    },
    {
      lordIcon: "nobciafz",
      title: "Direct Senior Architect Access",
      desc: "No middlemen or junior handoffs. You collaborate directly with Rajveer Singh to architect systems built specifically for your business goals.",
      metric: "1-on-1 Lead Dev",
      color: "text-blue-600 bg-blue-50 border-blue-200",
      accent: "#2563EB",
    },
    {
      lordIcon: "lbjtvqiv",
      title: "100% Code Ownership & IP Transfer",
      desc: "All source code, Dockerfiles, and database schemas belong to you completely upon milestone completion. Zero vendor lock-in.",
      metric: "Full Ownership",
      color: "text-purple-600 bg-purple-50 border-purple-200",
      accent: "#8B5CF6",
    },
    {
      lordIcon: "kdduutaw",
      title: "Autonomous AI & Vector RAG",
      desc: "We don't just wrap ChatGPT; we build autonomous LangGraph multi-agent pipelines with Milvus vector search for mission-critical automation.",
      metric: "Custom AI RAG",
      color: "text-amber-600 bg-amber-50 border-amber-200",
      accent: "#F59E0B",
    },
    {
      lordIcon: "tftaqjwp",
      title: "24/7 Telemetry & Continuous Support",
      desc: "Proactive server monitoring, automated security patches, error alerting, and dedicated ongoing maintenance to keep your systems bulletproof.",
      metric: "24/7 Active Support",
      color: "text-rose-600 bg-rose-50 border-rose-200",
      accent: "#F43F5E",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <KineticText
              text="WHY CHOOSE"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight cursor-default"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-emerald-600">
              US
            </span>
          </div>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Here is how we deliver measurable enterprise quality, transparent commercial contracts, and zero technical debt.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {differentiators.map((diff, idx) => {
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Row: Icon and Title on same row */}
                  <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-slate-200/80">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:scale-110 shadow-lg relative border border-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${diff.accent}, ${diff.accent}dd)`,
                        boxShadow: `0 8px 24px -2px ${diff.accent}66`,
                      }}
                    >
                      <LordIcon
                        src={diff.lordIcon}
                        trigger="hover"
                        size={30}
                        colors="primary:#ffffff,secondary:#38bdf8"
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {diff.title}
                    </h3>
                  </div>

                  {/* Paragraph Row: Smaller font size with clean line-height */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

