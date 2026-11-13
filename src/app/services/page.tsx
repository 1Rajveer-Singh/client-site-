"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  Server,
  Code2,
  Bot,
  Search,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Database,
  CheckCircle2,
} from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

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
      tagBg: "bg-blue-600 text-white border-blue-500",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1200&auto=format&fit=crop",
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
      tagBg: "bg-cyan-600 text-white border-cyan-500",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=85&w=1200&auto=format&fit=crop",
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
      tagBg: "bg-purple-600 text-white border-purple-500",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=85&w=1200&auto=format&fit=crop",
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
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
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
      tagBg: "bg-amber-600 text-white border-amber-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1200&auto=format&fit=crop",
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
      badge: "120HZ NATIVE",
      themeColor: "#F43F5E",
      tagBg: "bg-rose-600 text-white border-rose-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=85&w=1200&auto=format&fit=crop",
      gradientBg: "from-rose-950 via-slate-900 to-slate-950",
      desc: "Butter-smooth iOS and Android applications engineered with offline-first SQLite synchronization, background location streaming, and tactile haptics.",
      deliverable: "120Hz Animation • Offline SQLite • Biometric Auth",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Services Hero Header with Atmospheric Unsplash Infrastructure Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 bg-[#060913] text-white overflow-hidden border-b-2 border-cyan-500/20">
        {/* Animated Grid Pixel Reveal Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-90 contrast-105 saturate-110"
            imageClassName="object-cover object-center w-full h-full"
            alt="Services Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/60 via-[#060913]/40 to-[#060913]/90 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex flex-col items-center max-w-full">
            <KineticText
              text="MISSION-CRITICAL"
              as="h1"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight cursor-default max-w-full break-normal [text-wrap:balance]"
            />
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-400 inline-block mt-2 leading-tight max-w-full break-normal [text-wrap:balance]">
              SERVICES & SERVERS
            </span>
          </div>

          <p className="mt-4 sm:mt-5 max-w-2xl lg:max-w-3xl mx-auto text-xs sm:text-sm md:text-base font-sans text-slate-200 leading-relaxed font-normal px-2">
            From high-availability cloud servers to autonomous AI swarms and Next.js architectures, we engineer software systems with industrial-grade reliability.
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center w-full px-2">
            <LiquidMetalButton
              href="/contact"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#065f46",
                colorTint: "#34d399",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-sans text-[11px] sm:text-xs font-bold tracking-wider uppercase text-center"
              rightIcon={<ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />}
            >
              SCHEDULE TECHNICAL DISCOVERY
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* Services Grid Section (Matching Plan of Work exact card sizing) */}
      <section className="py-24 bg-white border-b-2 border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-heading text-slate-950">
              ARCHITECTURAL <span className="text-blue-600 underline decoration-yellow-400 decoration-wavy">CAPABILITIES</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base font-sans leading-relaxed max-w-2xl text-slate-600">
              Engineered with deterministic milestones, verifiable SLAs, and sub-second global response times.
            </p>
          </div>

          {/* Cards using exact Plan of Work grid & card sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Visual Image Banner with Gradient & Badges */}
                    <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                      />
                      {/* Dark gradient overlay for text legibility & color harmony */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/20 pointer-events-none" />

                      {/* Top Right SLA / Performance Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15 shadow-xs">
                          {service.badge}
                        </span>
                      </div>

                      {/* Stage Watermark */}
                      <span className="absolute bottom-2 right-3 text-6xl font-black font-heading text-white/20 select-none pointer-events-none group-hover:text-white/35 transition-colors">
                        {service.step}
                      </span>

                      {/* Center Hero Icon */}
                      <div
                        className="absolute bottom-3 left-4 z-10 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: service.themeColor }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Card Content with Refined Modern Typography */}
                    <div className="p-5 flex flex-col justify-between text-slate-800">
                      <div>
                        <span
                          className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5"
                          style={{ color: service.themeColor }}
                        >
                          {service.category}
                        </span>

                        <h3 className="font-serif text-xl md:text-2xl leading-[1.15] tracking-[-0.01em] text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-ink/80 text-[14px] sm:text-[15px] leading-[1.55] line-clamp-3 min-h-[56px]">
                          {service.desc}
                        </p>

                        {/* Deliverables / Specs Pill */}
                        <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200/90 bg-slate-50 text-center font-mono text-[11px] sm:text-xs font-semibold text-slate-700 truncate shadow-2xs">
                          {service.deliverable}
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
