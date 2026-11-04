"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWork from "@/components/ClientWork";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  ExternalLink,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Cpu,
  CheckCircle2,
  Gauge,
  Search,
  Server,
} from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function WorkPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  const deepDiveCards = [
    {
      step: "01",
      icon: Gauge,
      themeColor: "#10B981",
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      gradientBg: "from-emerald-950 via-slate-900 to-slate-950",
      category: "EDGE PERFORMANCE",
      title: "Sub-400ms Worldwide FCP",
      badge: "LIGHTHOUSE 100",
      desc: "Aggressive edge caching and streaming server rendering ensure academic researchers across India, Europe, and the US load journals in under 0.38 seconds.",
      deliverable: "0.38s FCP • Global Edge CDN • Zero Hydration Shift",
    },
    {
      step: "02",
      icon: Search,
      themeColor: "#3B82F6",
      tagBg: "bg-blue-600 text-white border-blue-500",
      gradientBg: "from-blue-950 via-slate-900 to-slate-950",
      category: "INDEXING ACCELERATION",
      title: "Automated DOI & Schema",
      badge: "GOOGLE SCHOLAR",
      desc: "Real-time JSON-LD scholarly article schema enables immediate Google Scholar indexing, citation discovery, and verified author credential attribution.",
      deliverable: "Semantic JSON-LD • Instant DOI • Citation Discovery",
    },
    {
      step: "03",
      icon: Server,
      themeColor: "#8B5CF6",
      tagBg: "bg-purple-600 text-white border-purple-500",
      gradientBg: "from-purple-950 via-slate-900 to-slate-950",
      category: "HIGH CONCURRENCY",
      title: "Fail-Safe Infrastructure",
      badge: "99.999% UPTIME",
      desc: "Nginx reverse-proxy load balancing and SQLite WAL journal mode guarantee smooth operation even during high-volume research submission deadline spikes.",
      deliverable: "100k Concurrent • Auto Failover • Daily Backups",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Work Hero Header with Animated Grid Pixel Reveal Cyber Matrix Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#060913] text-white overflow-hidden border-b-2 border-emerald-500/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-85 contrast-105 saturate-110"
            imageClassName="object-cover object-center w-full h-full"
            alt="Work Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/55 via-[#060913]/35 to-[#060913]/90 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight">
            <KineticText text="OUR CLIENT" as="span" className="inline-block" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-300">
              PRODUCTION WORK
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base font-sans text-slate-200 leading-relaxed font-normal">
            Real software deployed to global production. Review our featured academic publishing infrastructure, sub-400ms performance metrics, and zero-downtime uptime records.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LiquidMetalButton
              href="https://www.mauryaerf.com/"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#065f46",
                colorTint: "#34d399",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-heading text-xs font-bold"
              rightIcon={<ExternalLink className="w-4 h-4 text-emerald-400" />}
            >
              LAUNCH MAURYA ERF PLATFORM
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* Featured Showcase (Matches Plan of Work card sizing) */}
      <ClientWork />

      {/* Deep Architectural Breakdown (Matching Plan of Work exact card sizing) */}
      <section className="py-24 bg-white border-b-2 border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-heading font-extrabold text-emerald-600 uppercase tracking-widest block mb-2">
              DEEP ARCHITECTURAL BREAKDOWN
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-950">
              How We Engineered Maurya ERF for Global Scale
            </h2>
            <p className="mt-3 text-sm sm:text-base font-sans leading-relaxed text-slate-600 font-normal">
              A technical breakdown of our infrastructure optimizations and database architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {deepDiveCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.step}
                  className="rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Visual Banner (Exact h-40 height matching Plan of Work) */}
                    <div
                      className={`relative w-full h-40 bg-gradient-to-br ${card.gradientBg} overflow-hidden flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

                      <span className="absolute -bottom-3 -right-2 text-7xl font-black font-heading text-white/10 select-none pointer-events-none group-hover:text-white/20 transition-colors">
                        {card.step}
                      </span>

                      <div
                        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: card.themeColor }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>

                      <div className="absolute top-3 left-3 pointer-events-none z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] w2 font-bold uppercase tracking-wider border shadow-xs ${card.tagBg}`}>
                          FEATURE {card.step}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 pointer-events-none z-10">
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] w1 font-bold border shadow-xs bg-[#090d16] text-yellow-400 border-yellow-500/60"
                        >
                          {card.badge}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content (Matching Plan of Work p-5 padding) */}
                    <div className="p-5 flex flex-col justify-between text-slate-800">
                      <div>
                        <span
                          className="text-[11px] w2 font-bold uppercase tracking-wider block mb-1.5"
                          style={{ color: card.themeColor }}
                        >
                          {card.category}
                        </span>

                        <h3 className="text-xl font-bold card-title text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                          {card.title}
                        </h3>

                        <p className="mt-2.5 text-sm font-sans leading-relaxed line-clamp-3 min-h-[56px] text-slate-600 font-normal">
                          {card.desc}
                        </p>

                        <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-center w2 text-xs text-slate-700 truncate shadow-xs">
                          {card.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
