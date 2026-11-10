"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWork from "@/components/ClientWork";
import ClientTestimonials from "@/components/ClientTestimonials";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import LordIcon from "@/components/ui/lord-icon";
import {
  Globe,
  Server,
  Search,
  Bot,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Layers,
  ChevronDown,
  HelpCircle,
  Code2,
  Lock,
  Headphones,
  Cpu,
  Compass,
} from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  const coreServices = [
    {
      num: "01",
      title: "Website Design & Development",
      headline: "Websites That Don't Just Look Good. They Drive Growth.",
      desc: "We engineer pixel-perfect, lightning-fast digital storefronts and enterprise platforms optimized for psychological engagement, search discovery, and maximum business conversion.",
      icon: Globe,
      themeColor: "#3B82F6",
      tagBg: "bg-blue-50 border-blue-200 text-blue-700",
      items: [
        "Business & Corporate Websites",
        "E-Commerce Websites (Shopify / Next.js)",
        "SaaS Platforms & Web Applications",
        "Custom Website Development",
        "UI/UX Design & High-Fidelity Prototypes",
        "Responsive 60FPS Mobile-First Web Development",
      ],
    },
    {
      num: "02",
      title: "Domain & Web Hosting",
      headline: "Your Digital Presence Starts With Reliable Infrastructure.",
      desc: "Avoid costly downtime and sluggish loading. We deploy hardened cloud servers and secure network topologies that keep your digital presence online 24/7/365 with contractual 99.999% SLA.",
      icon: Server,
      themeColor: "#10B981",
      tagBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      items: [
        "Domain Registration & DNS Management",
        "Hosting Architecture & Setup",
        "VPS & High-Availability Cloud Hosting",
        "Automated SSL Certificates & TLS 1.3",
        "Zero-Downtime Website Deployment",
        "Linux Server Hardening & Nginx Tuning",
        "Automated Daily Backups & Disaster Recovery",
      ],
    },
    {
      num: "03",
      title: "SEO Optimization",
      headline: "Get Discovered. Get More Traffic. Grow Your Business.",
      desc: "Climb Google's first page with algorithmic search engine optimization, semantic structured data schemas, Core Web Vitals optimization, and high-authority link strategies.",
      icon: Search,
      themeColor: "#F59E0B",
      tagBg: "bg-amber-50 border-amber-200 text-amber-800",
      items: [
        "Technical SEO & Code Architecture",
        "On-Page Optimization & Meta Strategy",
        "Off-Page SEO & Authority Building",
        "Comprehensive Keyword & Competitor Research",
        "Website Speed & Core Web Vitals (Sub-300ms)",
        "Comprehensive In-Depth SEO Audits",
        "Search Performance & Ranking Telemetry",
      ],
    },
    {
      num: "04",
      title: "AI Automation & Workflow",
      headline: "Work Smarter. Automate Repetitive Tasks. Scale Faster.",
      desc: "Eliminate hundreds of hours of manual labor with custom AI-powered autonomous agent pipelines, intelligent RAG conversational copilots, and self-hosted N8N automated workflows.",
      icon: Bot,
      themeColor: "#8B5CF6",
      tagBg: "bg-purple-50 border-purple-200 text-purple-700",
      items: [
        "AI-Powered Autonomous Business Workflows",
        "Intelligent AI Chatbots & Virtual Assistants",
        "Automated Multi-Stage Email Workflows",
        "CRM & Lead Pipeline Automation",
        "Complex Third-Party API Integrations",
        "Automated Bulk Data Processing",
        "Custom Multi-Agent Swarms & Copilots",
      ],
    },
    {
      num: "05",
      title: "Mobile App Development",
      headline: "Powerful Mobile Experiences. Built Around Your Business.",
      desc: "We build intuitive, fluid native iOS and Android mobile apps engineered with 120Hz smooth animations, offline-first SQLite synchronization, and seamless user experiences.",
      icon: Smartphone,
      themeColor: "#EC4899",
      tagBg: "bg-rose-50 border-rose-200 text-rose-700",
      items: [
        "Native Android Applications (Kotlin / Flutter)",
        "Native iOS Applications (Swift / Flutter)",
        "Cross-Platform Applications (Flutter / React Native)",
        "Custom Mobile Applications Tailored to Business",
        "Real-Time API Integration & Background Sync",
        "Cloud Backend & Authentication Architecture",
        "Continuous App Store Deployment & Maintenance",
      ],
    },
    {
      num: "06",
      title: "Power BI & Data Analytics",
      headline: "Turn Complex Data Into Clear Business Decisions.",
      desc: "Gain instant visibility into your sales, operations, and financials with interactive, real-time enterprise business intelligence dashboards and predictive analytics HUDs.",
      icon: BarChart3,
      themeColor: "#EAB308",
      tagBg: "bg-yellow-50 border-yellow-200 text-yellow-800",
      items: [
        "Interactive Power BI Dashboards",
        "End-to-End Business Intelligence Solutions",
        "Custom Visualizations & Executive Telemetry",
        "ETL Data Cleaning, Transformation & DAX Modeling",
        "SQL Server, PostgreSQL & Cloud DB Integration",
        "Automated Executive Reporting Schedules",
        "Real-Time KPI Tracking & Margin Analysis",
      ],
    },
  ];

  const processStages = [
    { step: "01", title: "Discovery & Consultation", desc: "Deconstruct your business goals, identify operational bottlenecks, and formulate an airtight project roadmap." },
    { step: "02", title: "Planning & Strategy", desc: "Define deterministic milestones, tech stacks, risk mitigations, and fixed-scope delivery criteria." },
    { step: "03", title: "UI/UX Design", desc: "Craft conversion-focused Figma wireframes, interactive prototypes, and modern responsive design systems." },
    { step: "04", title: "Development & Implementation", desc: "Write clean, type-safe Next.js, Flutter, and Python code with strict adherence to architectural standards." },
    { step: "05", title: "Testing & Quality Assurance", desc: "Rigorous cross-device testing, security penetration audits, load testing, and Core Web Vitals verification." },
    { step: "06", title: "Launch & Deployment", desc: "Zero-downtime production rollout on hardened cloud servers, SSL automation, and edge CDN distribution." },
    { step: "07", title: "Support & Maintenance", desc: "Contractual 99.999% SLA uptime, automated server telemetry, security patches, and ongoing enhancements." },
  ];

  const whyChooseUsPoints = [
    {
      icon: Code2,
      title: "Tailored Digital Solutions",
      desc: "Every line of code and architectural decision is purpose-built for your business domain, eliminating generic templates and bloated plugins.",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Zap,
      title: "Modern Technologies",
      desc: "We leverage cutting-edge frameworks including Next.js, React, LangGraph AI, and Docker to ensure your software remains ahead of the curve.",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: ShieldCheck,
      title: "Scalable & Secure Architecture",
      desc: "Built with bank-grade security protocols, multi-region failovers, sub-300ms global speeds, and automated backup disaster recovery systems.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Users,
      title: "Transparent Communication",
      desc: "No middlemen or corporate bureaucracy. You work directly with Rajveer Singh with frequent milestone demos and direct WhatsApp/Slack access.",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      icon: Clock,
      title: "On-Time Project Delivery",
      desc: "We hold a 100% on-time milestone track record backed by deterministic roadmap execution and automated CI/CD continuous deployment.",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      icon: Headphones,
      title: "Long-Term Technical Support",
      desc: "We don't disappear after deployment. We provide ongoing server maintenance, security upgrades, and 24/7 telemetry monitoring.",
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
  ];

  const faqs = [
    {
      q: "What services do you provide?",
      a: "We provide comprehensive full-stack digital services including modern website design & development (Next.js, React), domain & high-availability cloud server hosting (99.999% SLA), algorithmic SEO optimization, custom AI agent workflows & RAG chatbots, cross-platform mobile app development (iOS & Android), and interactive Power BI business analytics dashboards.",
    },
    {
      q: "How much does website development cost?",
      a: "Project investment depends on complexity and scope. Typical corporate websites and bespoke web applications range from $1,500 to $10,000+. Every project is delivered with a deterministic fixed-price quote and clear milestone deliverables — so there are never any unexpected hidden fees or surprise billings.",
    },
    {
      q: "Do you provide domain and hosting?",
      a: "Yes! We handle the complete infrastructure lifecycle: custom domain registration, DNS zone configuration, SSL certificate automation, and deployment on hardened bare-metal Linux servers or VPS cloud clusters with automated failover and 99.999% uptime guarantees.",
    },
    {
      q: "Can you develop custom AI automation workflows?",
      a: "Absolutely. We build bespoke AI solutions including LangGraph multi-agent pipelines, Milvus vector database semantic search, autonomous lead nurturing workflows via N8N, and customer support copilots integrated with your CRM and backend databases.",
    },
    {
      q: "Do you provide ongoing website maintenance?",
      a: "Yes, we offer comprehensive monthly care plans that include 24/7 automated telemetry monitoring, continuous security patches, automated off-site daily backups, Core Web Vitals speed upkeep, and priority support.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most corporate websites and marketing portals launch in 2 to 4 weeks. Complex custom web applications, mobile apps, or multi-agent AI pipelines generally take 4 to 8 weeks, structured across our 7 transparent milestone stages.",
    },
    {
      q: "Can I request changes after project delivery?",
      a: "Yes! Every project includes a dedicated 14 to 30-day post-launch warranty period where all refinements and adjustments are handled with zero additional cost. Ongoing retainer packages are also available for continuous feature development.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we collaborate with founders, CTOs, and businesses across the United States, United Kingdom, Europe, Canada, Australia, and Asia-Pacific. We provide flexible asynchronous communication and seamless timezone coordination via Slack, WhatsApp, and Google Meet.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      {/* Physics Cursor */}
      <SmoothCursor />

      {/* Adaptive Header */}
      <Navbar />

      {/* Hero Section: Everything Your Business Needs to Succeed Digitally */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 bg-[#0a1026] text-white overflow-hidden border-b-2 border-indigo-500/20 select-none">
        {/* Dynamic Technological Grid Background with Pixel Reveal - Subdued Visibility */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-35 contrast-100 saturate-90"
            imageClassName="object-cover object-center w-full h-full"
            alt="About Rajveer Singh Developer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1026]/75 via-[#0a1026]/50 to-[#0a1026]/90 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Headline - Divided into Two Rows (Both Mobile & Desktop) */}
          <h1 className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight block">
              EVERYTHING YOUR BUSINESS NEEDS
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-indigo-300 to-cyan-400 block mt-1 sm:mt-2">
              TO SUCCEED DIGITALLY.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-sans text-slate-300 leading-relaxed font-normal">
            We bridge the gap between ambitious business vision and bulletproof engineering. From high-conversion websites and high-availability cloud servers to autonomous AI swarms and intuitive mobile experiences, we build systems that drive real revenue.
          </p>

          {/* CTA Buttons: Get Started & Explore Our Services - Strictly in One Row */}
          <div className="mt-6 sm:mt-7 flex flex-row items-center justify-center gap-2.5 sm:gap-4 flex-nowrap w-full">
            <LiquidMetalButton
              href="/contact"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#312e81",
                colorTint: "#818cf8",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
              rightIcon={<ArrowRight className="w-4 h-4 text-indigo-400" />}
            >
              Get Started
            </LiquidMetalButton>

            <LiquidMetalButton
              href="#services-overview"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#065f46",
                colorTint: "#34d399",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
              rightIcon={<ChevronDown className="w-4 h-4 text-emerald-400" />}
            >
              Explore Our Services
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950 leading-tight">
                Architecting Digital Solutions That Power Modern Businesses.
              </h2>
              <p className="mt-5 text-sm sm:text-base font-sans text-slate-600 leading-relaxed">
                Founded and led by <strong>Rajveer Singh</strong>, our engineering practice was established with a single unwavering objective: eliminate the bloat, delayed deadlines, and fragmented handoffs typical of conventional agencies.
              </p>
              <p className="mt-4 text-sm sm:text-base font-sans text-slate-600 leading-relaxed">
                When you partner with us, you work directly with senior architects who grasp commercial viability as deeply as Linux kernels, distributed vector databases, and high-conversion UI/UX psychology.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-sm text-slate-900">Direct Senior Access</div>
                    <div className="text-xs text-slate-500 font-sans mt-0.5">No junior devs or account middlemen</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-sm text-slate-900">Deterministic Milestones</div>
                    <div className="text-xs text-slate-500 font-sans mt-0.5">Guaranteed deliverables on exact schedule</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1200&auto=format&fit=crop"
                  alt="Engineering Team Collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white text-left">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">[LEADERSHIP STATEMENT]</span>
                  <p className="font-heading font-extrabold text-base sm:text-lg mt-1 text-slate-100">
                    "We don't just ship websites; we build scalable digital assets that generate revenue while you sleep."
                  </p>
                  <span className="text-xs text-slate-300 font-sans mt-2">— Rajveer Singh, Lead Engineer & Founder</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Six Core Services Breakdown */}
      <section id="services-overview" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950">
              Our Six Core Digital Services
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-slate-600">
              Engineered to be completely intuitive and easy to understand for business owners, while packing enterprise-level industrial strength under the hood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((srv, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group text-left"
                >
                  <div>
                    {/* Header: Icon + Title on same row with proper separation border */}
                    <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-slate-200/80">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300 relative shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${srv.themeColor}, ${srv.themeColor}cc)`,
                          boxShadow: `0 8px 20px -4px ${srv.themeColor}55`,
                        }}
                      >
                        <LordIcon
                          src={
                            srv.num === "01"
                              ? "qhgmphtg"
                              : srv.num === "02"
                              ? "wjrtlwtp"
                              : srv.num === "03"
                              ? "msoeawqm"
                              : srv.num === "04"
                              ? "kdduutaw"
                              : srv.num === "05"
                              ? "tftaqjwp"
                              : "gqdnbnwt"
                          }
                          trigger="hover"
                          size={28}
                          colors="primary:#ffffff,secondary:#ffffff"
                        />
                      </div>

                      <h3 className="text-lg font-black font-heading text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    <div className="text-xs font-heading font-bold text-slate-700 mt-1 leading-snug">
                      "{srv.headline}"
                    </div>
                    <p className="text-xs font-sans text-slate-500 mt-2.5 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Deliverables & Scope:
                      </div>
                      <ul className="space-y-1.5">
                        {srv.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2 text-xs font-sans text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: srv.themeColor }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Process: A Smarter Process. Better Results. */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950">
              A Smarter Process. Better Results.
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-slate-600">
              We eliminate project ambiguity with an airtight, milestone-driven development process from initial consultation to 24/7 post-launch telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stg, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between text-left hover:border-purple-300 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-purple-600 mb-2">
                    {stg.step}
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                    {stg.title}
                  </h3>
                  <p className="text-xs font-sans text-slate-600 mt-2 leading-relaxed">
                    {stg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us: Your Vision. Our Expertise. One Powerful Partnership. */}
      <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950">
              Your Vision. Our Expertise. One Powerful Partnership.
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-slate-600">
              We combine deep technical rigor with commercial pragmatism to ensure your software generates measurable business ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUsPoints.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  {/* Header Row: Icon and Title on same row */}
                  <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-slate-200/80">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-md group-hover:scale-110 transition-all duration-300 ${item.color}`}>
                      <LordIcon
                        src={
                          idx === 0
                            ? "nobciafz"
                            : idx === 1
                            ? "yxyampao"
                            : idx === 2
                            ? "ssdupzsv"
                            : idx === 3
                            ? "kdduutaw"
                            : idx === 4
                            ? "wzwygmng"
                            : "tftaqjwp"
                        }
                        trigger="hover"
                        size={30}
                        colors={
                          idx === 0
                            ? "primary:#2563eb,secondary:#3b82f6"
                            : idx === 1
                            ? "primary:#d97706,secondary:#f59e0b"
                            : idx === 2
                            ? "primary:#059669,secondary:#10b981"
                            : idx === 3
                            ? "primary:#9333ea,secondary:#a855f7"
                            : idx === 4
                            ? "primary:#0891b2,secondary:#06b6d4"
                            : "primary:#e11d48,secondary:#f43f5e"
                        }
                      />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Paragraph Row: Smaller font size */}
                  <p className="text-xs sm:text-[13px] font-sans text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Projects / Our Work */}
      <ClientWork />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Interactive FAQ Section: Frequently Asked Questions */}
      <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950">
              Frequently Asked Questions.
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-slate-600">
              Clear answers to common questions about our engagement process, pricing, timelines, and post-launch support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer select-none"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-sans text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 text-left">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final Closing CTA Section */}
      <section className="py-20 lg:py-24 bg-[#0a1026] text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.15),transparent_100%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base font-sans text-slate-300 leading-relaxed">
            Let's build something extraordinary together. Schedule a discovery consultation with Rajveer Singh to discuss your technical blueprint, budget, and deterministic roadmap.
          </p>

          <div className="mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 flex-nowrap w-full">
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
              innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
              rightIcon={<ArrowRight className="w-4 h-4 text-emerald-400" />}
            >
              Get Started
            </LiquidMetalButton>

            <LiquidMetalButton
              href="/services"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#312e81",
                colorTint: "#818cf8",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
            >
              Explore Our Services
            </LiquidMetalButton>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}

