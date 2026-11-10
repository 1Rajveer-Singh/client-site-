import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { getTechIcon } from "@/components/TechIcons";
import ServiceDetailClient from "./ServiceDetailClient";

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  accentColor: string;
  gradientBg: string;
  borderAccent: string;
  objective: string;
  metrics: { label: string; value: string; detail: string }[];
  capabilities: {
    title: string;
    description: string;
    deliverable: string;
    image?: string;
  }[];
  tools: {
    name: string;
    category: string;
    role: string;
  }[];
  workflow: {
    step: string;
    phase: string;
    action: string;
  }[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    name: "Full-Stack Web Development",
    tagline: "Ultra-Fast Next.js & React Architectures Engineered for Peak Conversion",
    category: "ENTERPRISE WEB ENGINEERING",
    badge: "LIGHTHOUSE 100",
    accentColor: "#06B6D4",
    gradientBg: "from-cyan-950 via-slate-900 to-slate-950",
    borderAccent: "border-cyan-500/40",
    objective:
      "We design and build bespoke, high-performance web applications using the Next.js App Router, React Server Components, and edge-distributed micro-frontends. Our objective is to deliver sub-350ms First Contentful Paint speeds, zero hydration layout shift, and resilient backend integrations that scale seamlessly under high traffic.",
    metrics: [
      { label: "Core Web Vitals", value: "100/100", detail: "Mobile & Desktop Lighthouse" },
      { label: "First Contentful Paint", value: "<0.35s", detail: "Edge pre-rendered HTML" },
      { label: "Server Response", value: "<45ms", detail: "Global CDN Edge caching" },
      { label: "Architecture", value: "React RSC", detail: "RSC streaming & Suspense" },
    ],
    capabilities: [
      {
        title: "React Server Components & Next.js",
        description:
          "Zero-bundle-size server components that fetch data securely at the edge, stream responses progressively, and eliminate client-side JavaScript bloat.",
        deliverable: "Progressive RSC Streaming & Static Site Generation (SSG)",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Micro-Frontend & Edge Runtime API",
        description:
          "Independent, composable frontend modules backed by Vercel / Cloudflare edge runtimes with global CDN caching and near-zero latency worldwide.",
        deliverable: "Global Edge Runtime & Sub-50ms API Handlers",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Responsive Tactile Design Systems",
        description:
          "Tailwind CSS powered design systems with fluid clamp typography, dark/light theme switching, 60fps micro-interactions, and WCAG AA accessibility compliance.",
        deliverable: "Design Token Library & Component Catalog",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Resilient Database & Backend Integration",
        description:
          "Type-safe ORM integration with PostgreSQL, Redis caching layers, webhooks, and authenticated REST/GraphQL endpoints with rate limiting.",
        deliverable: "Prisma/Drizzle ORM & Distributed Redis Cache",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "Next.js", category: "Framework", role: "SSR & Static Edge Hosting" },
      { name: "React", category: "Frontend", role: "React Server Components & Suspense" },
      { name: "TypeScript", category: "Language", role: "End-to-End Strict Type Safety" },
      { name: "Tailwind CSS", category: "Styling", role: "Modern Responsive Utility CSS" },
      { name: "Prisma", category: "Data Layer", role: "Type-Safe Relational Schema Migrations" },
      { name: "PostgreSQL", category: "Database", role: "ACID Compliant Relational Data" },
      { name: "Redis", category: "Cache", role: "Sub-Millisecond In-Memory Cache" },
      { name: "Cloudflare", category: "Edge CDN", role: "Global Edge Network & DDoS Mitigation" },
    ],
    workflow: [
      { step: "01", phase: "Architecture Discovery", action: "System blueprint, schema mapping, and latency SLA definitions." },
      { step: "02", phase: "Component Engine", action: "React Server Component scaffolding and type-safe API contracts." },
      { step: "03", phase: "Edge Optimization", action: "Lighthouse 100 tuning, asset compression, and Core Web Vitals audit." },
      { step: "04", phase: "Production Deployment", action: "Zero-downtime CI/CD rollout with automated regression testing." },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "Autonomous AI Agent Automation",
    tagline: "Autonomous Multi-Agent Swarms & Real-Time Neural Workflows",
    category: "MULTI-AGENT LLM SYSTEMS",
    badge: "SUB-40MS TTFT",
    accentColor: "#A855F7",
    gradientBg: "from-purple-950 via-slate-900 to-slate-950",
    borderAccent: "border-purple-500/40",
    objective:
      "We architect self-orchestrating multi-agent LLM systems, custom Retrieval-Augmented Generation (RAG) pipelines, and autonomous workflow bots. Our objective is to automate repetitive business processes, customer triage, and data extraction with deterministic accuracy, 24/7 availability, and sub-40ms Time-to-First-Token performance.",
    metrics: [
      { label: "Task Automation", value: "75%+", detail: "Autonomous ticket & triage handling" },
      { label: "Inference Latency", value: "<40ms", detail: "Fast streaming token generation" },
      { label: "Vector Search", value: "<15ms", detail: "Hybrid dense & sparse retrieval" },
      { label: "Availability", value: "24/7/365", detail: "Uninterrupted autonomous swarms" },
    ],
    capabilities: [
      {
        title: "LangGraph Multi-Agent Orchestration",
        description:
          "Graph-based state machine agents that collaborate, critique, execute code, call external APIs, and self-correct across complex workflows.",
        deliverable: "Multi-Agent State Graph & Tool-Calling Runtime",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Enterprise RAG & Milvus Vector Memory",
        description:
          "Hybrid search pipelines combining BM25 keyword matching with dense embedding vectors in Milvus to ground LLM reasoning on your proprietary enterprise data.",
        deliverable: "Vector Store Cluster & Document Ingestion Pipeline",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Autonomous Customer Support & Triage",
        description:
          "Multi-channel conversational agents integrated into WhatsApp, Telegram, and Web Chat capable of answering inquiries, generating leads, and escalating edge cases.",
        deliverable: "Omnichannel Bot Integration with Fallback Handlers",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Automated Data Extraction & Synthesis",
        description:
          "Structured JSON extraction from unstructured PDFs, emails, invoices, and reports with automated validation and database syncing.",
        deliverable: "Pydantic Schema Validation & ETL Ingestion",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "LangGraph", category: "Agent Framework", role: "Multi-Agent State Graph Orchestration" },
      { name: "OpenAI / Claude", category: "Frontier LLMs", role: "Advanced Reasoning & Tool Calling" },
      { name: "Python", category: "Language", role: "AI & Neural Pipeline Foundation" },
      { name: "FastAPI", category: "Backend", role: "Asynchronous High-Throughput REST" },
      { name: "Milvus", category: "Vector Store", role: "Enterprise Dense & Sparse Embeddings" },
      { name: "Hugging Face", category: "Embeddings", role: "Transformer Models & Semantic Tokenizers" },
      { name: "Redis", category: "Memory", role: "Session Memory & Prompt Caching" },
      { name: "Docker", category: "Container", role: "Reproducible Model Inference Pods" },
    ],
    workflow: [
      { step: "01", phase: "Prompt & Data Audit", action: "Mapping enterprise data sources, edge cases, and safety guardrails." },
      { step: "02", phase: "Vector & Tool Rigging", action: "Embedding knowledge bases into Milvus and building custom API tools." },
      { step: "03", phase: "Graph Validation", action: "Multi-agent evaluation benchmark against thousands of sample queries." },
      { step: "04", phase: "Omnichannel Rollout", action: "Deploying production endpoints with rate limiting and logging HUD." },
    ],
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    name: "Cloud & Server Infrastructure",
    tagline: "High-Availability Linux Servers, Nginx Reverse Proxies & Docker Clusters",
    category: "CLOUD INFRASTRUCTURE & DEVOPS",
    badge: "99.999% SLA",
    accentColor: "#3B82F6",
    gradientBg: "from-blue-950 via-slate-900 to-slate-950",
    borderAccent: "border-blue-500/40",
    objective:
      "We engineer, harden, and manage bare-metal Linux servers, cloud instances, and microservice clusters. Our objective is to ensure 99.999% uptime, sub-300ms global latency, automated SSL rotation, ironclad firewall protection, and automated disaster-recovery backup schedules for mission-critical web applications.",
    metrics: [
      { label: "Target Uptime", value: "99.999%", detail: "Verifiable SLA guarantee" },
      { label: "Global Latency", value: "<180ms", detail: "Optimized reverse proxy caching" },
      { label: "Failover Time", value: "<10s", detail: "Automated multi-region routing" },
      { label: "Backup Cadence", value: "Daily", detail: "Encrypted point-in-time recovery" },
    ],
    capabilities: [
      {
        title: "Linux & Ubuntu Server Hardening",
        description:
          "Production-ready OS tuning: SSH key-only auth, fail2ban intrusion prevention, automated security patches, kernel parameter optimization, and zero unnecessary daemons.",
        deliverable: "Hardened Ubuntu LTS Server Matrix & CIS Compliance",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "High-Throughput Nginx Reverse Proxy",
        description:
          "Optimized Nginx configurations with Brotli/Gzip compression, HTTP/2 & HTTP/3 QUIC support, automated Let's Encrypt SSL rotation, and DDoS rate-limiting rules.",
        deliverable: "Custom Nginx Configs & Automated SSL Provisioning",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Docker Container Orchestration",
        description:
          "Containerized microservices using Docker Compose and cluster orchestration for repeatable, isolated, and rapidly deployable application environments.",
        deliverable: "Multi-Container Docker Stacks & Health Check Watchdogs",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Automated Backup & Disaster Recovery",
        description:
          "Automated cron-based database snapshots, remote encrypted offsite backups, and verified single-command recovery playbooks for zero data loss.",
        deliverable: "Encrypted S3 Backups & Automated Recovery Scripts",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "Linux / Ubuntu", category: "Operating System", role: "Hardened Bare-Metal Server OS" },
      { name: "Nginx", category: "Web Server", role: "High-Speed Reverse Proxy & SSL Gateway" },
      { name: "Docker", category: "Containers", role: "Isolated Multi-Service Container Stacks" },
      { name: "AWS", category: "Infrastructure", role: "Elastic Compute, S3 & VPC Networking" },
      { name: "Cloudflare", category: "CDN & Security", role: "Anycast DNS & Layer 7 WAF Protection" },
      { name: "Certbot", category: "Security", role: "Automated Let's Encrypt Certificate Rotation" },
      { name: "Fail2ban", category: "Hardening", role: "Intrusion Prevention & SSH Sandboxing" },
      { name: "Prometheus & Grafana", category: "Telemetry", role: "24/7 Metric Telemetry & Uptime Alarms" },
    ],
    workflow: [
      { step: "01", phase: "Security & Load Audit", action: "Assessing server attack vectors, bottleneck analysis, and resource planning." },
      { step: "02", phase: "Provisioning & Hardening", action: "Setting up Linux OS, firewall rules, user sandboxing, and SSL certificates." },
      { step: "03", phase: "Docker Containerization", action: "Packaging services into clean compose stacks with automatic restart policies." },
      { step: "04", phase: "24/7 Telemetry Setup", action: "Configuring uptime alerts, memory/CPU monitoring, and scheduled snapshots." },
    ],
  },
  "seo-optimization": {
    slug: "seo-optimization",
    name: "Algorithmic SEO & Search Dominance",
    tagline: "Programmatic Schema, Core Web Vitals Perfection & Page 1 Google Rankings",
    category: "GROWTH & SEARCH DOMINANCE",
    badge: "PAGE 1 SERP",
    accentColor: "#10B981",
    gradientBg: "from-emerald-950 via-slate-900 to-slate-950",
    borderAccent: "border-emerald-500/40",
    objective:
      "We implement programmatic search engine dominance strategies that turn your digital footprint into an inbound organic growth engine. Our objective is to secure Page 1 Google rankings, optimize Core Web Vitals to the 99th percentile, embed rich JSON-LD semantic schemas, and maximize organic conversion rates.",
    metrics: [
      { label: "PageSpeed Score", value: "99+", detail: "Mobile & Desktop Google PageSpeed" },
      { label: "Organic Reach", value: "+240%", detail: "Average 6-month impressions growth" },
      { label: "Indexing Speed", value: "<24h", detail: "IndexNow & Automated Google Sitemaps" },
      { label: "Schema Validation", value: "100%", detail: "Google Rich Results Validated" },
    ],
    capabilities: [
      {
        title: "Semantic JSON-LD Structured Data",
        description:
          "Deep schema markup for Organization, LocalBusiness, FAQPage, Services, and SoftwareApplication to capture Google Rich Snippets and Knowledge Graph boxes.",
        deliverable: "Automated JSON-LD Schema Generator & Google Validator",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description:
          "Systematic elimination of Cumulative Layout Shift (CLS), Largest Contentful Paint (LCP) bottlenecks, and Interaction to Next Paint (INP) latency.",
        deliverable: "Green-Zone Google Search Console Experience Status",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Technical Architecture & Sitemap Audits",
        description:
          "Canonicalization, robots.txt directives, dynamic multi-language XML sitemaps, and automated IndexNow pings whenever new pages or articles are published.",
        deliverable: "Automated Dynamic XML Sitemap & IndexNow Pipeline",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Programmatic Keyword Landing Pages",
        description:
          "Scalable, template-driven landing page architectures targeting high-intent long-tail keywords with automated localized dynamic metadata.",
        deliverable: "Scalable Keyword Matrix Architecture",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "Google Search Console", category: "SERP Telemetry", role: "Crawl Health, Indexing & Click CTR" },
      { name: "JSON-LD / Schema", category: "Structured Data", role: "Google Rich Results & Knowledge Graph" },
      { name: "Google Lighthouse", category: "Vitals Engine", role: "Core Web Vitals & Speed Perfection" },
      { name: "Ahrefs & SEMrush", category: "SERP Analytics", role: "Competitor Keyword Audits & Backlink Depth" },
      { name: "Screaming Frog", category: "Site Crawler", role: "Canonicalization & Link Architecture Audits" },
      { name: "Next.js Metadata", category: "Metadata API", role: "Dynamic OpenGraph, Twitter Cards & Pre-renders" },
      { name: "IndexNow", category: "Instant Indexing", role: "Search Engine Ping Protocol on Deployment" },
      { name: "Cloudflare", category: "Edge Cache", role: "Sub-50ms Global Time-to-First-Byte (TTFB)" },
    ],
    workflow: [
      { step: "01", phase: "Technical SEO Audit", action: "Crawling for crawl errors, redirect loops, missing schemas, and slow assets." },
      { step: "02", phase: "Schema Injection", action: "Crafting structured JSON-LD entities for full Google entity recognition." },
      { step: "03", phase: "Speed Refactor", action: "Optimizing font preloading, SVG inline symbols, and image aspect ratios." },
      { step: "04", phase: "SERP Telemetry", action: "Tracking keyword rankings, CTR gains, and organic search impressions." },
    ],
  },
  "power-bi-telemetry": {
    slug: "power-bi-telemetry",
    name: "Power BI & Executive Telemetry",
    tagline: "Real-Time Telemetry HUDs, DAX Statistical Modeling & Executive Dashboards",
    category: "DATA WAREHOUSING & TELEMETRY",
    badge: "REAL-TIME HUD",
    accentColor: "#F59E0B",
    gradientBg: "from-amber-950 via-slate-900 to-slate-950",
    borderAccent: "border-amber-500/40",
    objective:
      "We convert complex organizational databases into intuitive, real-time executive HUD dashboards and advanced DAX models. Our objective is to empower leadership teams with automated data refreshes, financial KPI telemetry, predictive variance alerts, and multi-source data warehousing.",
    metrics: [
      { label: "Data Refresh", value: "Real-Time", detail: "DirectQuery & Automated API Sync" },
      { label: "KPI Visibility", value: "100%", detail: "Consolidated executive single-pane view" },
      { label: "Reporting Overhead", value: "-90%", detail: "Elimination of manual spreadsheet work" },
      { label: "Modeling", value: "Advanced DAX", detail: "Time-intelligence & predictive metrics" },
    ],
    capabilities: [
      {
        title: "Executive Single-Pane-of-Glass Dashboards",
        description:
          "High-contrast, intuitive visual consoles displaying revenue run-rate, customer churn, operational burn, and SLA compliance in real time.",
        deliverable: "Production Power BI Service Reports & Mobile Layouts",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Advanced DAX Calculations & Time Intelligence",
        description:
          "Complex statistical measures including Year-over-Year (YoY), Month-to-Date (MTD), rolling averages, cumulative cohorts, and variance forecasting.",
        deliverable: "Optimized DAX Measure Library & Star Schema Models",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Automated Data Warehousing & ETL Pipelines",
        description:
          "Consolidation of disparate data sources (PostgreSQL, Stripe, CRM, Google Analytics, Excel) into a clean, normalized relational warehouse.",
        deliverable: "Automated Python/SQL ETL Ingestion Pipelines",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Automated Alerts & Anomaly Detection",
        description:
          "Proactive notifications triggered via Slack or Email whenever critical operational KPIs deviate beyond standard statistical tolerances.",
        deliverable: "Power Automate & Webhook Alerting Rules",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "Power BI", category: "BI Platform", role: "Interactive Executive Visualizations & DAX Models" },
      { name: "DAX Studio", category: "Optimization", role: "Measure Profiling & VertiPaq Engine Tuning" },
      { name: "Azure / Fabric", category: "Lakehouse", role: "Enterprise Unified Data Warehousing" },
      { name: "SQL Server", category: "Relational DB", role: "Star Schema Fact & Dimension Views" },
      { name: "Python / Pandas", category: "ETL Engine", role: "Automated Cleansing & Statistical Models" },
      { name: "Power Query", category: "Data Ingestion", role: "Automated Multi-Source Extraction Pipelines" },
      { name: "Power Automate", category: "Alerting", role: "KPI Threshold Deviation & Webhook Alerts" },
      { name: "PostgreSQL", category: "Source Warehouse", role: "Normalized Real-Time Transactional Sync" },
    ],
    workflow: [
      { step: "01", phase: "Data Source Audit", action: "Cataloging all databases, APIs, and manual spreadsheets across the company." },
      { step: "02", phase: "Star Schema Architecture", action: "Designing fact and dimension tables for optimal DAX calculation speeds." },
      { step: "03", phase: "Dashboard Engineering", action: "Building executive-ready visualizations with responsive mobile views." },
      { step: "04", phase: "Automated Sync & Training", action: "Setting scheduled refreshes and onboarding executive team members." },
    ],
  },
  "mobile-apps": {
    slug: "mobile-apps",
    name: "Cross-Platform Mobile App Development",
    tagline: "Butter-Smooth iOS & Android Applications Engineered with Flutter & React Native",
    category: "CROSS-PLATFORM ENGINEERING",
    badge: "120HZ NATIVE",
    accentColor: "#F43F5E",
    gradientBg: "from-rose-950 via-slate-900 to-slate-950",
    borderAccent: "border-rose-500/40",
    objective:
      "We design and build high-performance mobile applications that run identically across iOS and Android from a single robust codebase. Our objective is to deliver 120Hz native gesture animations, offline-first SQLite synchronization, biometric security, and background notification architectures.",
    metrics: [
      { label: "Frame Rate", value: "120 FPS", detail: "Butter-smooth native gesture rendering" },
      { label: "Offline First", value: "100%", detail: "Full offline SQLite sync with server" },
      { label: "App Size", value: "<15 MB", detail: "Optimized binary tree-shaking" },
      { label: "Code Sharing", value: "90%+", detail: "Unified iOS & Android business logic" },
    ],
    capabilities: [
      {
        title: "120Hz Gesture Navigation & Native Feel",
        description:
          "Physics-based tactile interactions, seamless screen transitions, and instant touch responses that feel indistinguishable from platform-native code.",
        deliverable: "High-Fidelity Gesture & Animation Engine",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Offline-First SQLite Synchronization",
        description:
          "Complete local database storage allowing users to create and edit content without internet access, with automatic conflict-free server sync upon reconnection.",
        deliverable: "Local SQLite Cache & Conflict-Free Replicator",
        image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Biometric Authentication & Security",
        description:
          "Hardware-backed secure key storage with Face ID, Touch ID, and fingerprint authentication guarding user sessions and sensitive transactions.",
        deliverable: "Secure Enclave Integration & Biometric Auth Flow",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1200&auto=format&fit=crop",
      },
      {
        title: "Push Notifications & Background Services",
        description:
          "Automated Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs) integration for transactional alerts and background telemetry.",
        deliverable: "Targeted Push Notification & Background Sync System",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=85&w=1200&auto=format&fit=crop",
      },
    ],
    tools: [
      { name: "Flutter", category: "Mobile Framework", role: "High-Performance Cross-Platform Compilations" },
      { name: "React Native", category: "Cross-Platform", role: "120Hz Native JS/TS Mobile Runtime" },
      { name: "Swift", category: "Apple Platform", role: "iOS Native Modules & App Store Services" },
      { name: "Kotlin", category: "Google Platform", role: "Jetpack Compose & Android Hardware Integration" },
      { name: "SQLite", category: "Local Database", role: "Offline-First Encrypted Mobile Storage" },
      { name: "Firebase", category: "Push Alerts", role: "Real-Time Transactional Push Notifications" },
      { name: "TypeScript", category: "Language", role: "Strict Type Contracts Across App & Server" },
      { name: "Fastlane", category: "DevOps", role: "Automated TestFlight & Play Store Deployments" },
    ],
    workflow: [
      { step: "01", phase: "Mobile UX Wireframes", action: "Crafting ergonomic, thumb-friendly navigation and interaction patterns." },
      { step: "02", phase: "Offline Data Engine", action: "Architecting local SQLite schemas and background synchronization workers." },
      { step: "03", phase: "Hardware Integration", action: "Wiring camera, biometric auth, push notifications, and haptics." },
      { step: "04", phase: "App Store Publishing", action: "Managing Apple TestFlight, App Store, and Google Play Store certification." },
    ],
  },
};

export const instant = false;

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Not Found | Rajveer Singh Solutions",
    };
  }

  return {
    title: `${service.name} | Services | Rajveer Singh`,
    description: service.objective,
    openGraph: {
      title: `${service.name} - Architectural Capabilities`,
      description: service.tagline,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  const allServices = Object.values(servicesData);

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      <ServiceDetailClient service={service} allServices={allServices} />

      <FinalCTA />
      <Footer />
    </main>
  );
}

