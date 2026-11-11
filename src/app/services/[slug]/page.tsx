import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { getTechIcon } from "@/components/TechIcons";
import ServiceDetailClient from "./ServiceDetailClient";

export interface PricingTier {
  tierId: string;
  name: string;
  timeline: string;
  description: string;
  badge?: string;
  featured?: boolean;
  priceUSD: string;
  priceINR: string;
  priceNote: string;
  features: string[];
  ctaText: string;
}

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
    properties?: {
      label: string;
      value?: string;
      category?: string;
      tags?: string[];
      detail: string;
    }[];
    technologies?: string[];
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
  pricingTiers?: PricingTier[];
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
        title: "Requirement Gathering & Designing",
        description:
          "We gather and analyze your project documentation to architect a deterministic development roadmap before designing user-centric interfaces. Whether your business requires a fast static site on WordPress or a high-concurrency dynamic application on Next.js, our design process emphasizes user-centric flows, responsive design systems, and conversion-focused performance.",
        deliverable: "Interactive Prototypes, Design Tokens & User-Centric Specs",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Core Web Vitals",
            detail: "3/3 — LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1",
          },
          {
            label: "Loading & Rendering",
            detail: "≤ 1.8s — FCP · TTFB ≤ 0.8s · Speed Index",
          },
          {
            label: "Interaction & Runtime",
            detail: "≤ 200ms — TBT · JavaScript Execution · Event Response",
          },
          {
            label: "Frontend Architecture",
            detail: "4 Modes — SSR · SSG · ISR · CSR",
          },
        ],
        technologies: ["Figma", "WordPress", "Next.js", "React", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Architecture Planning & API Development",
        description:
          "We architect secure, deterministic API ecosystems that power modern web and mobile applications with low latency and high concurrency. From standard CRUD operations (Create, Read, Update, Delete) with idempotent HTTP methods to high-throughput real-time event streaming and strict OAuth 2.0 / JWT protection, we ensure clean contract boundaries, data integrity, and sub-50ms execution across distributed environments.",
        deliverable: "OpenAPI Spec, CRUD Endpoints & Real-Time Gateway",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "CRUD & HTTP Operations",
            detail: "GET · POST · PUT · PATCH · DELETE (Create · Read · Update · Delete · Status Codes · Headers · Query Parameters)",
          },
          {
            label: "Real-Time Communication",
            detail: "WebSockets · SSE · Webhooks · Long Polling",
          },
          {
            label: "API Performance & Security",
            detail: "Latency · Throughput (RPS) · Error Rate · Availability · OAuth 2.0 · JWT · TLS · Rate Limiting · Caching · API Versioning",
          },
        ],
        technologies: ["REST API", "GraphQL", "WebSockets", "Node.js", "PostgreSQL", "Redis", "Postman", "Docker"],
      },
      {
        title: "Database & Backend Integration",
        description:
          "We engineer scalable, fault-tolerant database architectures and resilient backend systems that guarantee ACID compliance and sub-millisecond data retrieval. Through type-safe ORM schemas, distributed Redis caching, connection pooling, and automated database migrations, our backend architecture handles high-concurrency read/write transactions with zero data loss and automated failover.",
        deliverable: "ACID Database Schema, High-Throughput Connection Pool & Cache Layer",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Relational & Document Databases",
            detail: "PostgreSQL · MySQL · MongoDB · Supabase · Neon · PlanetScale",
          },
          {
            label: "ORM & Schema Architecture",
            detail: "Prisma ORM · Drizzle ORM · TypeORM · Mongoose · Automated Migrations",
          },
          {
            label: "Caching & In-Memory Data",
            detail: "Redis · Upstash · Memcached · Cache Invalidation · Sub-Millisecond Reads",
          },
          {
            label: "Reliability & Data Security",
            detail: "ACID Compliance · Connection Pooling · Row-Level Security (RLS) · Automated Backups · SSL / TLS",
          },
        ],
        technologies: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis", "Docker", "Node.js", "TypeScript"],
      },
      {
        title: "SEO & Google Search Integrity",
        description:
          "We engineer technical SEO directly into source code to guarantee maximum Google crawlability, Core Web Vitals compliance, and rich search visibility. From semantic JSON-LD structured schema to automated XML sitemaps, OpenGraph metadata, and canonical routing, our web architectures are built to rank on Page 1 while defending against algorithm volatility.",
        deliverable: "Automated JSON-LD Schema, Dynamic XML Sitemap & Search Console Setup",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Crawlability & Search Signals",
            detail: "Dynamic XML Sitemaps · robots.txt · Canonical Tags · Clean Slug Hierarchies",
          },
          {
            label: "Google Core Web Vitals",
            detail: "LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · 100/100 Lighthouse Performance",
          },
          {
            label: "Search Console & Telemetry",
            detail: "Google Search Console · GA4 Analytics · IndexNow API · Zero 404 Leaks",
          },
        ],
        technologies: ["Google Search Console", "Next.js", "Cloudflare", "TypeScript"],
      },
      {
        title: "AI Integration & Neural Workflows",
        description:
          "We integrate autonomous AI agent capabilities, neural embeddings, and intelligent LLM workflows directly into modern web applications. From custom RAG (Retrieval-Augmented Generation) search and interactive conversational copilots to automated background data enrichment, we transform static platforms into intelligent, self-operating systems.",
        deliverable: "Integrated Vector RAG Pipeline, Neural Search & Autonomous Copilot Agent",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Vector Search & Retrieval (RAG)",
            detail: "Pinecone · pgvector · ChromaDB · Hybrid Dense & Sparse Keyword Search",
          },
          {
            label: "Autonomous Agent Workflows",
            detail: "LangGraph · LangChain · Tool-Calling Function Agents · Real-Time Streaming",
          },
          {
            label: "Security & Guardrails",
            detail: "Rate Limiting · Prompt Injection Shielding · Token Optimization · Streaming SSE",
          },
        ],
        technologies: ["OpenAI", "Anthropic", "LangChain", "Python", "Next.js", "TypeScript"],
      },
      {
        title: "DevOps, Cloud Deployment & Edge CDN",
        description:
          "Automated zero-downtime deployment pipelines across bare-metal Linux servers and edge clusters with Docker containerization, reverse proxy hardening, automated SSL, and 24/7 SLA telemetry monitoring.",
        deliverable: "Dockerized Production Stack, CI/CD Pipeline & Edge CDN Caching",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "CI/CD & Automated Pipelines",
            detail: "GitHub Actions · Automated Health Checks · Zero-Downtime Rollouts",
          },
          {
            label: "Edge Network & DDoS Mitigation",
            detail: "Cloudflare CDN · Sub-30ms Global Edge Routing · Rate Limiting · SSL/TLS",
          },
          {
            label: "Telemetry & Uptime SLAs",
            detail: "Prometheus · Grafana · 99.999% SLA Uptime · Anomaly Alerting",
          },
        ],
        technologies: ["Docker", "Linux", "Nginx", "Cloudflare", "TypeScript", "Node.js"],
      },
    ],
    tools: [
      { name: "Figma", category: "UI/UX Design", role: "Wireframing, Design Tokens & High-Fidelity Prototypes" },
      { name: "WordPress", category: "CMS", role: "High-Speed Static Sites & Editorial Content Platforms" },
      { name: "Next.js", category: "Framework", role: "Dynamic Full-Stack App Router & Edge SSR" },
      { name: "React", category: "Frontend", role: "Server Components, Hooks & Interactive UI" },
      { name: "TypeScript", category: "Language", role: "End-to-End Strict Type Safety & Clean Contracts" },
      { name: "Tailwind CSS", category: "Styling", role: "Modern Responsive Utility Architecture" },
      { name: "PostgreSQL", category: "Database", role: "ACID Compliant Relational Data Storage" },
      { name: "OpenAI", category: "AI & LLM", role: "Custom Neural Embeddings & Assistant APIs" },
      { name: "Google Search Console", category: "SEO & Telemetry", role: "Search Indexing, Schema Audits & Organic Visibility" },
      { name: "Cloudflare", category: "Edge CDN", role: "Global Edge Network & Low Latency Asset Delivery" },
    ],
    workflow: [
      { step: "01", phase: "Architecture Discovery", action: "System blueprint, schema mapping, and latency SLA definitions." },
      { step: "02", phase: "Component Engine", action: "React Server Component scaffolding and type-safe API contracts." },
      { step: "03", phase: "Edge Optimization", action: "Lighthouse 100 tuning, asset compression, and Core Web Vitals audit." },
      { step: "04", phase: "Production Deployment", action: "Zero-downtime CI/CD rollout with automated regression testing." },
    ],
    pricingTiers: [
      {
        tierId: "tier_01 // static",
        name: "High-Performance Static Website (5+ Pages)",
        timeline: "1 – 2 Weeks",
        description: "Ultra-fast static website architecture starting from 5+ bespoke pages with rich interactive micro-animations, designed for businesses demanding instant loading and zero server maintenance.",
        priceUSD: "$350",
        priceINR: "₹28,000",
        priceNote: "Starting cost · Scales with page count & structural complexity",
        features: [
          "5+ Bespoke Static Pages with High Interaction & Fluid Animations",
          "Core Web Vitals ≥ 90 Benchmark (Mobile & Desktop Lighthouse)",
          "100% SEO-Friendly Architecture Across All Pages",
          "Canonical Image Mapping & Google Search Console Verification",
          "Instant WhatsApp & Email Lead Notification Webhooks",
          "Seasonal & Occasional Promotional Discount Offers Available",
        ],
        ctaText: "Select Static Plan",
      },
      {
        tierId: "tier_02 // dynamic",
        name: "Full-Stack Dynamic Platform (Next.js)",
        timeline: "3 – 5 Weeks",
        badge: "Production Standard",
        featured: true,
        description: "Production-grade Next.js dynamic application with relational database architecture, automated backup systems, role-based authentication, crucial data encryption, and flexible CMS deployment.",
        priceUSD: "$800",
        priceINR: "₹65,000",
        priceNote: "Starting cost · Scales with server capacity, data architecture & security",
        features: [
          "Engineered in Next.js (App Router, Server Actions & RSC)",
          "Relational Database Architecture with Automated Data Backups",
          "Role-Based Authentication (RBAC) & Secure Session Management",
          "Strong End-to-End Encryption for Crucial & Sensitive Data",
          "Built-In SEO Optimization for Search Ranking & Fast Global Deployment",
          "Custom CMS Included: Standalone Desktop .exe (Single User) or Cloud Server (Teams)",
        ],
        ctaText: "Select Dynamic Plan",
      },
      {
        tierId: "tier_03 // advanced",
        name: "Custom Scaled Web Portal & Multi-User Architecture",
        timeline: "4 – 6 Weeks",
        description: "Advanced custom web platform engineered for growing businesses requiring multi-user role management, automated reporting, payment workflows, and high performance.",
        priceUSD: "$1,550",
        priceINR: "₹1,25,000",
        priceNote: "Starting cost · Scales with enterprise data volume & custom module requirements",
        features: [
          "Multi-Role Corporate Admin Portal & Client Dashboards",
          "High-Concurrency Database Optimization & Redis Caching",
          "Payment Gateway Integration (Stripe / Razorpay / Webhooks)",
          "Automated PDF Invoice & Scheduled Analytics Generation",
          "Custom Multi-User CMS Deployment with Audit Logs",
          "90 Days Extended SLA, Security Updates & Maintenance Warranty",
        ],
        ctaText: "Select Portal Plan",
      },
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
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "State Machine Architecture",
            detail: "StateGraph · Subgraphs · Cyclic Feedback Loops · Human-in-the-Loop",
          },
          {
            label: "Tool Execution & Protocols",
            detail: "Function Calling · OpenAPI Specs · Webhooks · Isolated Code Sandboxes",
          },
          {
            label: "Memory & Checkpointing",
            detail: "PostgreSQL Checkpointers · Redis Ephemeral State · Long-Term Vector Memory",
          },
        ],
        technologies: ["LangGraph", "Python", "OpenAI", "Claude", "Redis", "Docker"],
      },
      {
        title: "Enterprise RAG & Milvus Vector Memory",
        description:
          "Hybrid search pipelines combining BM25 keyword matching with dense embedding vectors in Milvus to ground LLM reasoning on your proprietary enterprise data.",
        deliverable: "Vector Store Cluster & Document Ingestion Pipeline",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Hybrid Search Pipeline",
            detail: "Dense Vector Embeddings · BM25 Sparse Search · Reciprocal Rank Fusion (RRF)",
          },
          {
            label: "Document Ingestion",
            detail: "Unstructured PDF / Docx · Chunking Strategies · Metadata Filtering · Tokenizers",
          },
          {
            label: "Retrieval Latency",
            detail: "<15ms Search Latency · Cosine Similarity · Cross-Encoder Re-Ranking",
          },
        ],
        technologies: ["Milvus", "Python", "Hugging Face", "FastAPI", "PostgreSQL", "Docker"],
      },
      {
        title: "Autonomous Customer Support & Triage",
        description:
          "Multi-channel conversational agents integrated into WhatsApp, Telegram, and Web Chat capable of answering inquiries, generating leads, and escalating edge cases.",
        deliverable: "Omnichannel Bot Integration with Fallback Handlers",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Channel Integrations",
            detail: "WhatsApp Business API · Telegram Bot API · Web Embed Widget · Slack SDK",
          },
          {
            label: "Autonomous Handlers",
            detail: "Intent Classification · Lead Qualification · Escalation Fallback Routing",
          },
          {
            label: "Throughput & Latency",
            detail: "Sub-40ms TTFT Streaming · 24/7 Availability · Graceful Error Fallback",
          },
        ],
        technologies: ["FastAPI", "Python", "Redis", "OpenAI", "Docker", "Node.js"],
      },
      {
        title: "Automated Data Extraction & Synthesis",
        description:
          "Structured JSON extraction from unstructured PDFs, emails, invoices, and reports with automated validation and database syncing.",
        deliverable: "Pydantic Schema Validation & ETL Ingestion",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Schema Enforcement",
            detail: "Pydantic Models · JSON Schema Validation · Field Type Coercion",
          },
          {
            label: "Document OCR & Ingestion",
            detail: "OCR Invoice Extraction · Multi-Page PDF Summaries · Contract Parsing",
          },
          {
            label: "Data Delivery",
            detail: "PostgreSQL Database Sync · Webhook Dispatches · Cloud Storage S3",
          },
        ],
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
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
    pricingTiers: [
      {
        tierId: "tier_01 // pilot",
        name: "AI Assistant & Document Intelligence Bot",
        timeline: "1 – 2 Weeks",
        description: "Bespoke single-agent conversational assistant or document extractor integrated directly into WhatsApp, Telegram, or Web Chat.",
        priceUSD: "$460",
        priceINR: "₹38,000",
        priceNote: "Starting cost · Single channel integration & document ingestion",
        features: [
          "Custom Prompt Architecture & Guardrail Shields",
          "Document Ingestion (PDF / Excel / CSV Knowledge)",
          "WhatsApp or Web Chat Embed Gateway",
          "Automated Lead Qualification & Email Alerts",
          "Token Usage Dashboard & Cost Telemetry",
          "30 Days Prompt Maintenance & Tuning",
        ],
        ctaText: "Select Pilot Plan",
      },
      {
        tierId: "tier_02 // production",
        name: "Multi-Agent Swarm & Knowledge Base RAG",
        timeline: "3 – 5 Weeks",
        badge: "Production Standard",
        featured: true,
        description: "Autonomous LangGraph multi-agent system connected to Milvus vector databases, proprietary tools, and custom transactional APIs.",
        priceUSD: "$950",
        priceINR: "₹78,000",
        priceNote: "Starting cost · Multi-agent state graph & vector memory",
        features: [
          "LangGraph Cyclic State Graph Orchestration",
          "Milvus Hybrid Vector RAG (Dense + BM25 Search)",
          "Custom Tool Calling & Internal Database APIs",
          "Human-in-the-Loop Review Checkpoints",
          "Multi-Channel Omnichannel Routing (WhatsApp + Web)",
          "60 Days Model Observability & Latency SLA Support",
        ],
        ctaText: "Select Production Plan",
      },
      {
        tierId: "tier_03 // advanced",
        name: "Automated Business Process & Workflow Swarm",
        timeline: "4 – 6 Weeks",
        description: "Autonomous agent swarm executing multi-step business operations, CRM data extraction, automated ticket resolution, and scheduled report delivery.",
        priceUSD: "$1,750",
        priceINR: "₹1,45,000",
        priceNote: "Starting cost · Multi-system autonomous execution & custom API tools",
        features: [
          "End-to-End Business Workflow Automation (Invoices, Leads, Triage)",
          "Internal Database & ERP Connectors (PostgreSQL / REST APIs)",
          "Redis Ephemeral Session Caching & Memory Storage",
          "Sub-40ms Streaming Token Gateway with Cost Guardrails",
          "Role-Based Agent Execution Sandboxes",
          "90 Days Model Maintenance & Prompt Optimization Support",
        ],
        ctaText: "Select Automation Plan",
      },
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
        properties: [
          {
            label: "Security & Access Control",
            detail: "SSH Key-Only Authentication · Non-Root Sudo Sandboxing · Strict UFW Firewall Rules",
          },
          {
            label: "Intrusion Prevention",
            detail: "Fail2ban Daemon Monitoring · Automated Security Patches · Port Cloaking",
          },
          {
            label: "Kernel Parameter Tuning",
            detail: "TCP BBR Congestion Control · High File Descriptor Limits · Optimized VM Swappiness",
          },
        ],
        technologies: ["Linux", "Nginx", "Docker", "Fail2ban", "Cloudflare"],
      },
      {
        title: "High-Throughput Nginx Reverse Proxy",
        description:
          "Optimized Nginx configurations with Brotli/Gzip compression, HTTP/2 & HTTP/3 QUIC support, automated Let's Encrypt SSL rotation, and DDoS rate-limiting rules.",
        deliverable: "Custom Nginx Configs & Automated SSL Provisioning",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Protocols & Compression",
            detail: "HTTP/2 & HTTP/3 (QUIC) · Brotli & Gzip Compression · Upstream Connection Keepalive",
          },
          {
            label: "SSL & Transport Security",
            detail: "Let's Encrypt Automated Renewal · HSTS Strict Transport · OCSP Stapling",
          },
          {
            label: "Traffic & Rate Limiting",
            detail: "Round-Robin Load Balancing · Path-Based Microservice Proxy · IP Burst Rate Limits",
          },
        ],
        technologies: ["Nginx", "Linux", "Certbot", "Cloudflare"],
      },
      {
        title: "Docker Container Orchestration",
        description:
          "Containerized microservices using Docker Compose and cluster orchestration for repeatable, isolated, and rapidly deployable application environments.",
        deliverable: "Multi-Container Docker Stacks & Health Check Watchdogs",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Multi-Service Composition",
            detail: "Docker Compose Stacks · Health Check Watchdogs · Automatic Restart Policies",
          },
          {
            label: "Network & Storage Isolation",
            detail: "Isolated Bridge Networks · Persistent Named Volumes · Host Port Mapping",
          },
          {
            label: "Resource Allocation",
            detail: "Hard CPU Limits · Memory Caps & OOM Guard · Automated Log Rotation & Pruning",
          },
        ],
        technologies: ["Docker", "Linux", "Nginx", "PostgreSQL", "Redis"],
      },
      {
        title: "Automated Backup & Disaster Recovery",
        description:
          "Automated cron-based database snapshots, remote encrypted offsite backups, and verified single-command recovery playbooks for zero data loss.",
        deliverable: "Encrypted S3 Backups & Automated Recovery Scripts",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Snapshot Automation",
            detail: "Cron-Scheduled Database Dumps · Incremental File Sync · Encrypted S3 Offsite Storage",
          },
          {
            label: "Recovery Verification",
            detail: "Single-Command Cold Restores · Point-in-Time Recovery · Automated Checksum Checks",
          },
          {
            label: "Telemetry & SLA Guardrails",
            detail: "Prometheus Node Exporters · Grafana Dashboards · 99.999% SLA Uptime Alerts",
          },
        ],
        technologies: ["Linux", "AWS", "Prometheus", "Grafana", "Docker"],
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
        properties: [
          {
            label: "Structured Data Types",
            detail: "Organization · LocalBusiness · FAQPage · Service · SoftwareApplication",
          },
          {
            label: "Google SERP Features",
            detail: "Rich Snippets · Knowledge Graph Panels · Review Stars · Sitelinks Searchbox",
          },
          {
            label: "Compliance & Validation",
            detail: "Schema.org Standard · Google Rich Results Validated · Zero Parsing Errors",
          },
        ],
        technologies: ["Google Search Console", "Next.js", "TypeScript", "Cloudflare"],
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description:
          "Systematic elimination of Cumulative Layout Shift (CLS), Largest Contentful Paint (LCP) bottlenecks, and Interaction to Next Paint (INP) latency.",
        deliverable: "Green-Zone Google Search Console Experience Status",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Vitals Thresholds",
            detail: "LCP ≤ 1.8s · INP ≤ 150ms · CLS = 0.000 · TTFB ≤ 80ms",
          },
          {
            label: "Asset Optimization",
            detail: "AVIF / WebP Compression · Font Subsetting & Preload · Critical CSS Inlining",
          },
          {
            label: "Edge Caching Architecture",
            detail: "Cloudflare Edge Caching · Cache-Control Immutable · HTTP/3 Streaming",
          },
        ],
        technologies: ["Google Lighthouse", "Next.js", "Cloudflare", "Tailwind CSS"],
      },
      {
        title: "Technical Architecture & Sitemap Audits",
        description:
          "Canonicalization, robots.txt directives, dynamic multi-language XML sitemaps, and automated IndexNow pings whenever new pages or articles are published.",
        deliverable: "Automated Dynamic XML Sitemap & IndexNow Pipeline",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Crawl Architecture",
            detail: "Multilingual Dynamic XML Sitemaps · Canonical URL Rules · Robots.txt Directives",
          },
          {
            label: "Indexing Automation",
            detail: "IndexNow Protocol Integration · Google Indexing API · Instant SERP Submission",
          },
          {
            label: "Link Graph Health",
            detail: "Zero Broken Internal Links (404) · 301 Redirect Mappings · BreadcrumbList Microdata",
          },
        ],
        technologies: ["Google Search Console", "Next.js", "TypeScript", "Cloudflare"],
      },
      {
        title: "Programmatic Keyword Landing Pages",
        description:
          "Scalable, template-driven landing page architectures targeting high-intent long-tail keywords with automated localized dynamic metadata.",
        deliverable: "Scalable Keyword Matrix Architecture",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Template Scalability",
            detail: "Dynamic Route Slugs · Automated Metadata Generators · High-Intent Matrices",
          },
          {
            label: "Internal Linking Engine",
            detail: "Topical Cluster Maps · Semantic Related Articles · Automated Breadcrumbs",
          },
          {
            label: "SERP Telemetry & CTR",
            detail: "Organic Click-Through-Rate Tracking · Impression Growth HUD · Search Analytics",
          },
        ],
        technologies: ["Next.js", "Google Search Console", "TypeScript", "Tailwind CSS"],
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
    pricingTiers: [
      {
        tierId: "tier_01 // vitals",
        name: "Core Web Vitals & Rapid 7-Day Indexing",
        timeline: "1 – 2 Weeks",
        description: "Targeted technical SEO acceleration delivering Core Web Vitals ≥ 90 performance, crawl health resolution, and verified 7-day Google indexing.",
        priceUSD: "$290",
        priceINR: "₹24,000",
        priceNote: "Starting price · Scales as per site size & technical requirements",
        features: [
          "Core Web Vitals ≥ 90 Performance (Mobile & Desktop Lighthouse)",
          "7 Days Rapid Indexing & Google SERP Rank Verification",
          "Automated JSON-LD Schema (Organization, Service & FAQ)",
          "Canonical Tag Structure & 301 Redirect Loop Repair",
          "Dynamic XML Sitemap Generation & IndexNow Protocol Integration",
          "Image Aspect Ratio & Next-Gen AVIF / WebP Asset Optimization",
        ],
        ctaText: "Select Vitals Plan",
      },
      {
        tierId: "tier_02 // ranking",
        name: "Programmatic Schema & SERP Dominance",
        timeline: "3 – 4 Weeks",
        badge: "Production Standard",
        featured: true,
        description: "Full programmatic SEO architecture targeting high-intent long-tail keywords, rich snippet capture, dynamic template generation, and ranking authority.",
        priceUSD: "$950",
        priceINR: "₹78,000",
        priceNote: "Comprehensive strategy · Dynamic template code & schema matrix",
        features: [
          "Dynamic Programmatic Landing Page Templates & Route Generation",
          "Comprehensive Schema.org Entities (FAQ, Reviews, Products & Software)",
          "Topical Cluster Mapping & Internal Linking Optimization",
          "Google Rich Snippets & Knowledge Graph Panel Capture",
          "Automated Multi-Language Dynamic Sitemaps with Instant Pings",
          "30–60 Days Continuous Keyword Tracking & Organic Impressions Telemetry",
        ],
        ctaText: "Select Ranking Plan",
      },
      {
        tierId: "tier_03 // enterprise",
        name: "Full Inbound Search Dominance Engine",
        timeline: "Continuous Retainer",
        description: "End-to-end inbound search engine dominance transformation with competitive keyword moats, multi-region SERP capture, and continuous technical vitals guardrails.",
        priceUSD: "$2,000+",
        priceINR: "₹1,65,000+",
        priceNote: "Dedicated search engineering · Monthly growth KPI contract",
        features: [
          "Multi-Regional International SEO & Country-Specific Hreflang",
          "Competitive Keyword Moat Engineering & Search Gap Audits",
          "High-Frequency Programmatic Content Publishing Pipeline",
          "Continuous 99th Percentile Core Web Vitals Guardrail System",
          "Executive SERP Telemetry & Organic Conversion HUD in Power BI",
          "Direct Strategic Consultation with Rajveer Singh",
        ],
        ctaText: "Request Enterprise Scope",
      },
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
        properties: [
          {
            label: "Visual Architecture",
            detail: "High-Contrast Executive Dashboards · Responsive Mobile Views · Real-Time KPI Tiles",
          },
          {
            label: "Key Metrics Tracked",
            detail: "Monthly Recurring Revenue MRR · Customer Acquisition Cost CAC · Operational Burn · Gross Margins",
          },
          {
            label: "Interaction Controls",
            detail: "Cross-Filtering Slicers · Drill-Through Pages · Bookmarks & Narrative Summaries",
          },
        ],
        technologies: ["Power BI", "Azure", "SQL Server", "PostgreSQL"],
      },
      {
        title: "Advanced DAX Calculations & Time Intelligence",
        description:
          "Complex statistical measures including Year-over-Year (YoY), Month-to-Date (MTD), rolling averages, cumulative cohorts, and variance forecasting.",
        deliverable: "Optimized DAX Measure Library & Star Schema Models",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Statistical Measures",
            detail: "Year-over-Year YoY · Month-to-Date MTD · Rolling 30/90 Averages · Cumulative Cohorts",
          },
          {
            label: "Engine Optimization",
            detail: "VertiPaq Memory Compression · Measure Branching · Zero Slow Row-Context Scans",
          },
          {
            label: "Forecasting & Variances",
            detail: "Predictive Variance Modeling · Target vs Actual Milestones · Scenario What-If Parameters",
          },
        ],
        technologies: ["Power BI", "SQL Server", "Python", "Azure"],
      },
      {
        title: "Automated Data Warehousing & ETL Pipelines",
        description:
          "Consolidation of disparate data sources (PostgreSQL, Stripe, CRM, Google Analytics, Excel) into a clean, normalized relational warehouse.",
        deliverable: "Automated Python/SQL ETL Ingestion Pipelines",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Source Connectors",
            detail: "PostgreSQL · MySQL · Stripe · Google Analytics 4 · REST APIs · Excel Spreadsheets",
          },
          {
            label: "Data Ingestion & Cleaning",
            detail: "Power Query M Transformation · Python Cleansing · Star Schema Fact & Dimensions",
          },
          {
            label: "Refresh Automation",
            detail: "DirectQuery Real-Time Sync · Scheduled On-Premises Gateways · Incremental Loading",
          },
        ],
        technologies: ["Power BI", "SQL Server", "Python", "PostgreSQL", "Azure"],
      },
      {
        title: "Automated Alerts & Anomaly Detection",
        description:
          "Proactive notifications triggered via Slack or Email whenever critical operational KPIs deviate beyond standard statistical tolerances.",
        deliverable: "Power Automate & Webhook Alerting Rules",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Alert Triggers",
            detail: "KPI Threshold Exceedance · Statistical Variance Deviations · Zero-Transaction Outages",
          },
          {
            label: "Notification Channels",
            detail: "Slack Webhook Alerts · Automated Email Digests · Microsoft Teams Adaptive Cards",
          },
          {
            label: "Governance & Security",
            detail: "Row-Level Security (RLS) · Enterprise Role Permissions · Audit Access Logs",
          },
        ],
        technologies: ["Power BI", "Python", "Azure", "PostgreSQL"],
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
    pricingTiers: [
      {
        tierId: "tier_01 // standard",
        name: "Executive KPI Dashboard & Single-Source HUD",
        timeline: "1 – 2 Weeks",
        description: "Streamlined executive command console connecting your primary business database or operational spreadsheets with automated KPI visualizations.",
        priceUSD: "$390",
        priceINR: "₹32,000",
        priceNote: "Starting cost · Scales as per report views & data source complexity",
        features: [
          "Consolidated Executive KPI Dashboard (Up to 3 Custom Report Views)",
          "Single Data Source Integration (PostgreSQL, MySQL or Excel/Sheets)",
          "Automated Scheduled Data Refresh via Microsoft Gateway",
          "Mobile-Responsive Layout for Executive Tablet & Smartphone Access",
          "Interactive Date Slicers, Trend Visuals & Summary Export Cards",
          "30 Days Post-Deployment Handover & Measure Refresh Support",
        ],
        ctaText: "Select Standard Plan",
      },
      {
        tierId: "tier_02 // advanced",
        name: "Multi-Source ETL & Advanced DAX Modeling",
        timeline: "2 – 3 Weeks",
        badge: "Production Standard",
        featured: true,
        description: "Comprehensive data transformation connecting multiple business sources into a high-performance Star Schema with advanced DAX time-intelligence.",
        priceUSD: "$700",
        priceINR: "₹58,000",
        priceNote: "Starting cost · Scales with data warehousing pipelines & custom metrics",
        features: [
          "Multi-Source Data Integration (PostgreSQL + Stripe + CRM + Sheets)",
          "Clean Star Schema Fact & Dimension Relational Modeling",
          "Advanced DAX Statistical Measures (YoY, MTD, Cohort & Margin Variances)",
          "VertiPaq Storage Engine Tuning for Sub-Second Query Execution",
          "Automated Email / Teams Notification Alerts on KPI Threshold Deviations",
          "60 Days Comprehensive Model Maintenance & Query Optimization",
        ],
        ctaText: "Select Advanced Plan",
      },
      {
        tierId: "tier_03 // enterprise_bi",
        name: "Comprehensive Business Intelligence Suite",
        timeline: "4 – 5 Weeks",
        description: "End-to-end organizational business intelligence platform with multi-department reporting, automated data pipelines, and custom executive views.",
        priceUSD: "$1,200",
        priceINR: "₹98,000",
        priceNote: "Starting cost · Scales with departmental views & custom data connectors",
        features: [
          "Multi-Department Corporate Dashboards (Finance, Sales & Operations)",
          "Automated Scheduled Python & SQL Ingestion Pipelines",
          "Granular Row-Level Security (RLS) & Multi-Role Governance",
          "Custom DirectQuery Telemetry for Real-Time KPI Tracking",
          "Automated Executive PDF Briefings via Email & Webhook Integrations",
          "90 Days Dedicated Model Tuning, Measure Updates & Support",
        ],
        ctaText: "Select Suite Plan",
      },
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
        properties: [
          {
            label: "Frame Rate & Animation",
            detail: "60–120 FPS Fluid Gestures · Hardware Accelerated Rendering · Zero Frame Drops",
          },
          {
            label: "Design Systems",
            detail: "Material 3 & Apple Cupertino Guidelines · Dynamic Island · Responsive Safe Areas",
          },
          {
            label: "State Architecture",
            detail: "Declarative Reactive UI · Pure State Separation · Optimistic UI Updates",
          },
        ],
        technologies: ["React", "TypeScript", "Figma", "Tailwind CSS"],
      },
      {
        title: "Offline-First SQLite Synchronization",
        description:
          "Complete local database storage allowing users to create and edit content without internet access, with automatic conflict-free server sync upon reconnection.",
        deliverable: "Local SQLite Cache & Conflict-Free Replicator",
        image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Local Mobile Storage",
            detail: "Encrypted Local SQLite Database · Offline ACID Transactions · Sub-5ms Reads",
          },
          {
            label: "Replication Protocol",
            detail: "Conflict-Free Replicated Data (CRDT) · Delta Patching · Background Queue Sync",
          },
          {
            label: "Network Resilience",
            detail: "Zero Data Loss on Signal Loss · Auto-Retry with Exponential Backoff",
          },
        ],
        technologies: ["TypeScript", "PostgreSQL", "Supabase", "React"],
      },
      {
        title: "Biometric Authentication & Security",
        description:
          "Hardware-backed secure key storage with Face ID, Touch ID, and fingerprint authentication guarding user sessions and sensitive transactions.",
        deliverable: "Secure Enclave Integration & Biometric Auth Flow",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Hardware Security Enclave",
            detail: "Apple Face ID & Touch ID · Android BiometricPrompt API · Cryptographic Keys",
          },
          {
            label: "Session Management",
            detail: "Secure Keychain & EncryptedSharedPreferences · Automatic Inactivity Lockout",
          },
          {
            label: "Transport Protection",
            detail: "TLS 1.3 Certificate Pinning · OWASP Mobile Top 10 Hardened · Zero Plaintext Storage",
          },
        ],
        technologies: ["TypeScript", "React", "Supabase", "Node.js"],
      },
      {
        title: "Push Notifications & Background Services",
        description:
          "Automated Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs) integration for transactional alerts and background telemetry.",
        deliverable: "Targeted Push Notification & Background Sync System",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=85&w=1200&auto=format&fit=crop",
        properties: [
          {
            label: "Push Gateways",
            detail: "Apple Push Notification service (APNs) · Firebase Cloud Messaging (FCM) · Silent Pings",
          },
          {
            label: "Notification Features",
            detail: "Actionable Interactive Notifications · Topic Routing · Custom Sound & Badges",
          },
          {
            label: "Background Execution",
            detail: "Background Fetch Workers · Location Telemetry Sync · Scheduled Sync Tasks",
          },
        ],
        technologies: ["TypeScript", "Node.js", "Firebase", "PostgreSQL"],
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
    pricingTiers: [
      {
        tierId: "tier_01 // mvp",
        name: "Cross-Platform MVP (iOS & Android)",
        timeline: "2 – 3 Weeks",
        description: "Essential cross-platform mobile application with clean navigation, responsive screen layouts, user authentication, and API connectivity.",
        priceUSD: "$700",
        priceINR: "₹58,000",
        priceNote: "Starting cost · Scales with screen count & custom API integrations",
        features: [
          "Unified React Native / Flutter Codebase for iOS & Android",
          "Up to 5 Core Screens with Fluid 60Hz Native Navigation",
          "Email & Social OAuth 2.0 User Authentication Flow",
          "REST API Integration with JSON Payload Handling",
          "Push Notification Setup via Firebase Cloud Messaging (FCM)",
          "30 Days Post-Launch Bug Fix Warranty & TestFlight / APK Delivery",
        ],
        ctaText: "Select MVP Plan",
      },
      {
        tierId: "tier_02 // production",
        name: "Full-Stack Mobile App & App Store Launch",
        timeline: "4 – 6 Weeks",
        badge: "Production Standard",
        featured: true,
        description: "Production-ready mobile platform engineered with offline-first SQLite synchronization, biometric Face ID security, in-app purchases or payments, and store submission.",
        priceUSD: "$1,400",
        priceINR: "₹1,15,000",
        priceNote: "Starting cost · Scales with offline sync, payment gateways & backend complexity",
        features: [
          "Complete Apple App Store & Google Play Store Submission Guidance",
          "Offline-First Local SQLite Database with Server Synchronization",
          "Hardware Biometric Authentication (Face ID, Touch ID & Fingerprint)",
          "Payment Gateway Integration (Stripe / Razorpay SDK)",
          "Actionable Push Notifications & Background Sync Tasks",
          "60 Days Telemetry Monitoring, Crashlytics & Production Support",
        ],
        ctaText: "Select Production Plan",
      },
      {
        tierId: "tier_03 // advanced_mobile",
        name: "Advanced Mobile Platform with Real-Time Sync",
        timeline: "6 – 8 Weeks",
        description: "Feature-rich cross-platform mobile ecosystem with real-time sync, custom in-app purchases, advanced hardware integration, and analytics.",
        priceUSD: "$2,250",
        priceINR: "₹1,85,000",
        priceNote: "Starting cost · Scales with real-time streaming & custom native bridges",
        features: [
          "Real-Time WebSocket State Synchronization & Mutation Queues",
          "In-App Purchases, Digital Subscriptions & Automated Invoicing",
          "Custom Native Module Bridges for Camera, Bluetooth & Sensors",
          "Advanced Crashlytics, User Session Telemetry & Analytics HUD",
          "Fastlane Automated CI/CD Release Pipeline for iOS & Android",
          "90 Days Priority Store Maintenance, OS Upgrades & Bug Fixes",
        ],
        ctaText: "Select Ecosystem Plan",
      },
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

