"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  Server,
  Code2,
  Bot,
  Search,
  BarChart3,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Loader2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import LordIcon from "@/components/ui/lord-icon";

interface TechnologyItem {
  name: string;
  role: string;
  logo: React.ReactNode;
}

interface ServiceTab {
  id: string;
  title: string;
  category: string;
  accent: string;
  lordIcon: string;
  image: string;
  detailedScope: string;
  technologies: TechnologyItem[];
  deliverableMetric: string;
}

export default function ServicesOverview() {
  const services: ServiceTab[] = [
    {
      id: "cloud-servers",
      title: "High-Availability Cloud Servers",
      category: "INFRASTRUCTURE & ORCHESTRATION",
      accent: "#2563EB",
      lordIcon: "wjrtlwtp",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "High-performance cloud server provisioning built for fault tolerance. We configure load-balanced reverse proxies, hardened firewalls (UFW/iptables), automated zero-downtime rolling deploys, and automated daily backups across multi-cloud regions.",
      technologies: [
        {
          name: "AWS Cloud",
          role: "EC2 • S3 • CloudFront • RDS",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FF9900">
              <path d="M18.74 13.92c-.28-.36-.78-.4-1.14-.14-2.14 1.58-4.82 2.45-7.58 2.45-3.32 0-6.38-1.27-8.62-3.41-.32-.3-.81-.29-1.12.02-.31.32-.3.81.02 1.13 2.54 2.43 6.02 3.86 9.72 3.86 3.12 0 6.13-.99 8.56-2.77.36-.27.42-.76.16-1.14zm1.48-1.57c-.15-.43-.62-.65-1.05-.5l-1.92.67c-.43.15-.66.62-.51 1.05.12.35.45.57.81.57.08 0 .16-.02.24-.05l1.93-.67c.43-.15.65-.63.5-1.07zm1.37-3.9c-.33-.31-.85-.3-1.16.03l-1.42 1.5c-.31.33-.3 1.15.03 1.16.16.15.37.23.57.23.22 0 .44-.09.6-.26l1.41-1.5c.31-.33.3-.85-.03-1.16zM6.92 7.74c0-.98.71-1.78 1.83-1.78 1.14 0 1.84.8 1.84 1.78v4.06c0 .48.39.88.88.88.48 0 .88-.4.88-.88V7.74c0-1.95-1.55-3.41-3.6-3.41-2.07 0-3.59 1.46-3.59 3.41v4.06c0 .48.4.88.88.88.49 0 .88-.4.88-.88V7.74z" />
            </svg>
          ),
        },
        {
          name: "DigitalOcean",
          role: "Droplets • VPC • Load Balancers",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0080FF">
              <path d="M12.04 0C5.41 0 .04 5.37.04 12c0 5.09 3.18 9.44 7.67 11.13v-3.78c-2.45-.73-4.23-2.99-4.23-5.67 0-3.26 2.65-5.91 5.91-5.91 1.76 0 3.34.77 4.43 2.01L10.3 13.3h5.92V7.38l-2.03 2.03C12.9 8.28 11.51 7.77 10 7.77c-2.33 0-4.23 1.9-4.23 4.23 0 1.92 1.28 3.54 3.04 4.05v3.85c-3.8-.6-6.72-3.89-6.72-7.9 0-4.42 3.58-8 8-8s8 3.58 8 8c0 3.73-2.56 6.87-6.04 7.77v3.74c5.56-.98 9.77-5.83 9.77-11.51 0-6.63-5.37-12-11.96-12z" />
            </svg>
          ),
        },
        {
          name: "Hostinger VPS",
          role: "Bare-Metal KVM • NVMe Storage",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#673DE6">
              <path d="M14.65 0L9.35 4.31v6.94l5.3-4.3V0zm-5.3 12.75v6.94l5.3 4.31V17.06l-5.3-4.31zM0 8.52v6.96l5.3 4.31V12.83L0 8.52zm18.7 0l5.3 4.31v-6.96l-5.3-4.31v6.96z" />
            </svg>
          ),
        },
        {
          name: "Linux / Ubuntu",
          role: "Hardened OS & Kernel Tweaks",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#E95420">
              <circle cx="12" cy="12" r="10" fill="#E95420" />
              <circle cx="12" cy="12" r="5" fill="#ffffff" />
            </svg>
          ),
        },
        {
          name: "Nginx / Caddy",
          role: "Reverse Proxy • SSL • Brotli",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#009639">
              <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.077 17.432H8.385V6.568h2.538l4.693 7.025V6.568h2.538v10.864h-2.538l-4.693-7.025v7.025z" />
            </svg>
          ),
        },
        {
          name: "Docker Engine",
          role: "Containers • Swarm • Compose",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "99.999% SLA • <300ms Global • Automated Failover",
    },
    {
      id: "full-stack",
      title: "Full-Stack Web Development",
      category: "MODERN WEB ARCHITECTURE",
      accent: "#06B6D4",
      lordIcon: "qhgmphtg",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "Industrial-grade web applications engineered with strictly typed TypeScript, server actions, optimistic UI mutations, and fluid micro-animations. Built for maximum speed, SEO indexing, and zero hydration layout shifts.",
      technologies: [
        {
          name: "Next.js",
          role: "App Router • PPR • Turbopack",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 180 180" fill="currentColor">
              <circle cx="90" cy="90" r="90" fill="#0f172a" />
              <path d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z" fill="#fff" />
              <rect x="115" y="54" width="12" height="72" fill="#fff" />
            </svg>
          ),
        },
        {
          name: "React",
          role: "Server Components • Suspense",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="-11.5 -10.232 23 20.463">
              <circle cx="0" cy="0" r="2.05" fill="#06B6D4" />
              <g stroke="#06B6D4" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "TypeScript",
          role: "Strict Contracts & Type Safety",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#3178C6" />
              <path d="M11.75 8.5H6.25v2h2v7h2.25v-7h1.25v-2zm7 3.5c0-1.8-1.2-2.5-3-2.5h-3.25v9h2.25v-2.75h1c1.8 0 3-.7 3-2.5v-1.25zm-2.25 1c0 .5-.4.75-1 .75h-1v-2h1c.6 0 1 .25 1 .75v.5z" fill="#fff" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          role: "Zero Runtime • Design System",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#06B6D4">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          role: "High-Concurrency ACID Relational",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#336791">
              <path d="M11.95 24c-.26 0-.53-.02-.79-.06-3.84-.57-6.84-3.56-7.46-7.44-.33-2.07.12-4.14 1.25-5.83.21-.31.62-.4 1.01-.22.4.18.57.65.37 1.05-.98 1.48-1.37 3.28-1.08 5.09.53 3.32 3.1 5.88 6.38 6.37 3.65.55 7.14-1.48 8.48-4.93.99-2.55.77-5.36-.61-7.71l-1.36-2.33c-.22-.38-.09-.86.28-1.08.38-.22.86-.09 1.08.28l1.36 2.33c1.62 2.76 1.88 6.06.72 9.06-1.57 4.05-5.67 6.43-9.95 6.43z" />
            </svg>
          ),
        },
        {
          name: "Redis Cache",
          role: "Sub-Millisecond In-Memory Store",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#DC382D">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.6 3.8-7.6 3.8L4.4 8 12 4.2zm-8 5.6l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "0.38s FCP • 100/100 Lighthouse • Type-Safe API",
    },
    {
      id: "ai-agents",
      title: "Autonomous AI Agent Swarms",
      category: "AUTONOMOUS AGENTS & VECTOR RAG",
      accent: "#9333EA",
      lordIcon: "kdduutaw",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "Autonomous multi-agent intelligence collectives that act as tireless digital employees. Powered by LangGraph state machines, Milvus/Qdrant vector embeddings, and deterministic tool execution for enterprise workflows.",
      technologies: [
        {
          name: "Python",
          role: "Asyncio • FastAPI Microservices",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M11.9 1.5c-3.1 0-5.3 1.3-5.3 3.8v2.8h5.5v.8H3.8c-2.4 0-3.8 2-3.8 5.1s1.3 5.3 3.8 5.3h2.3v-3.2c0-2.3 2-4.2 4.3-4.2h5.5v-4.8c0-3.1-2.4-4.8-4-4.8zm-2 2.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#0284C7" />
              <path d="M12.1 22.5c3.1 0 5.3-1.3 5.3-3.8v-2.8h-5.5v-.8h8.3c2.4 0 3.8-2 3.8-5.1s-1.3-5.3-3.8-5.3h-2.3v3.2c0 2.3-2 4.2-4.3 4.2h-5.5v4.8c0 3.1 2.4 4.8 4 4.8zm2-2.3c-.7 0-1.2-.6-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#D97706" />
            </svg>
          ),
        },
        {
          name: "LangGraph",
          role: "State Machine Agent Loops",
          logo: (
            <svg className="w-5 h-5 shrink-0 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
            </svg>
          ),
        },
        {
          name: "Milvus Vector DB",
          role: "Sub-30ms RAG Embeddings",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#00A1EA">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v11l10 5 10-5V6l-10 5z" />
            </svg>
          ),
        },
        {
          name: "OpenAI / Claude",
          role: "Structured Tool Calling",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#10A37F">
              <path d="M22.28 9.37a5.98 5.98 0 00-.52-4.98 6.08 6.08 0 00-6.48-2.73 6.04 6.04 0 00-4.66-2.16 6.13 6.13 0 00-5.83 4.24 6.04 6.04 0 00-3.95 2.87 6.08 6.08 0 00.74 7.02 5.98 5.98 0 00.52 4.98 6.08 6.08 0 006.48 2.73 6.04 6.04 0 004.66 2.16 6.13 6.13 0 005.83-4.24 6.04 6.04 0 003.95-2.87 6.08 6.08 0 00-.74-7.02z" />
            </svg>
          ),
        },
        {
          name: "Meta Graph API",
          role: "Instagram & WhatsApp Automated DMs",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#E4405F">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z" />
            </svg>
          ),
        },
        {
          name: "Celery & Redis",
          role: "Distributed Async Job Workers",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#37B44A">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "74% Auto-Resolved • <28ms RAG • 24/7 Autopilot",
    },
    {
      id: "algorithmic-seo",
      title: "Algorithmic SEO Optimization",
      category: "SEARCH DOMINANCE & SCHEMA",
      accent: "#059669",
      lordIcon: "msoeawqm",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "Mathematical and programmatic SEO systems that outrank competitors. We build dynamic schema injection pipelines, automate high-value keyword indexing, and ensure 100% Core Web Vitals compliance so Google prioritizes your domains.",
      technologies: [
        {
          name: "Semantic JSON-LD",
          role: "Rich Snippets & Graph Metadata",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0284C7">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
            </svg>
          ),
        },
        {
          name: "Google Search Console",
          role: "Instant Indexing API Integration",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.66-5.17 3.66-9.12z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.26 21.36 7.34 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
            </svg>
          ),
        },
        {
          name: "DOI & Crossref",
          role: "Scholarly Indexing & Citations",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F59E0B">
              <circle cx="12" cy="12" r="10" fill="#F59E0B" />
              <path d="M8 12h8m-4-4v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: "Dynamic XML Sitemaps",
          role: "Edge-Rendered Crawl Sitemaps",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#059669">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          ),
        },
        {
          name: "OpenGraph / Twitter",
          role: "Social Meta Cards & Previews",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
            </svg>
          ),
        },
        {
          name: "Lighthouse CI",
          role: "Core Web Vitals Perfection",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#E11D48">
              <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.2l6 3v9.6l-6 3-6-3V7.2l6-3z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "Top 3 SERP Ranking • Instant Indexing • 0 Errors",
    },
    {
      id: "power-bi",
      title: "Power BI Executive Telemetry",
      category: "BUSINESS INTELLIGENCE & HUD",
      accent: "#D97706",
      lordIcon: "gqdnbnwt",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "High-density executive dashboards that replace guess-work with clear quantitative intelligence. We build streaming data pipelines that ingest financial, sales, and operational data into crystal-clear Power BI visual control centers.",
      technologies: [
        {
          name: "Microsoft Power BI",
          role: "Interactive HUDs & Real-Time Reports",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#F2C811" d="M18.5 2H15a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              <path fill="#E6AD10" d="M13 7H9.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
              <path fill="#C98A0C" d="M7.5 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
            </svg>
          ),
        },
        {
          name: "DAX Modeling",
          role: "Cohort & Statistical Forecasting",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#D97706">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
            </svg>
          ),
        },
        {
          name: "Power Query ETL",
          role: "Automated Data Ingestion Pipelines",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0284C7">
              <path d="M4 6h16v2H4V6zm2 4h12v2H6v-2zm3 4h6v2H9v-2z" />
            </svg>
          ),
        },
        {
          name: "PostgreSQL DW",
          role: "Data Warehousing Replication Replicas",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#336791">
              <path d="M11.95 24c-.26 0-.53-.02-.79-.06-3.84-.57-6.84-3.56-7.46-7.44-.33-2.07.12-4.14 1.25-5.83.21-.31.62-.4 1.01-.22.4.18.57.65.37 1.05-.98 1.48-1.37 3.28-1.08 5.09.53 3.32 3.1 5.88 6.38 6.37 3.65.55 7.14-1.48 8.48-4.93.99-2.55.77-5.36-.61-7.71l-1.36-2.33c-.22-.38-.09-.86.28-1.08.38-.22.86-.09 1.08.28l1.36 2.33c1.62 2.76 1.88 6.06.72 9.06-1.57 4.05-5.67 6.43-9.95 6.43z" />
            </svg>
          ),
        },
        {
          name: "Stripe & Shopify APIs",
          role: "Real-Time Revenue Streaming",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#635BFF">
              <path d="M13.976 9.15c0-.98-.79-1.37-1.98-1.37-1.43 0-2.88.54-3.9 1.15l-.65-3.08c1.37-.62 3.14-.99 4.88-.99 3.73 0 6.06 1.83 6.06 5.09 0 4.96-6.8 5.22-6.8 7.37 0 .86.74 1.25 1.8 1.25 1.63 0 3.36-.69 4.34-1.35l.65 3.09c-1.37.71-3.32 1.18-5.26 1.18-3.83 0-6.14-1.92-6.14-5.12 0-5.11 7-5.4 7-7.22z" />
            </svg>
          ),
        },
        {
          name: "Automated KPI Alerts",
          role: "Threshold Trigger Notification Bots",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#059669">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "Real-Time Telemetry • Sub-Second Refresh • 100% Accuracy",
    },
    {
      id: "mobile-apps",
      title: "Cross-Platform Mobile Apps",
      category: "NATIVE & HYBRID APPLICATION",
      accent: "#E11D48",
      lordIcon: "tftaqjwp",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=85&w=1200&auto=format&fit=crop",
      detailedScope:
        "High-performance native-feeling mobile applications built with Flutter and React Native. Featuring offline SQLite database synchronization, push notification architectures, and biometric hardware authentication.",
      technologies: [
        {
          name: "Flutter",
          role: "Dart Engine • 120Hz Hardware Accelerated",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
              <path fill="#0175C2" d="M14.286 11.5L7.7 18.1 11.4 21.8 21.686 11.5h-7.4z" />
              <path fill="#0284C7" d="M7.7 18.1l3.7 3.7 3.7-3.7-3.7-3.7-3.7 3.7z" />
            </svg>
          ),
        },
        {
          name: "React Native",
          role: "TypeScript • Expo • Native Bridges",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="-11.5 -10.232 23 20.463">
              <circle cx="0" cy="0" r="2.05" fill="#06B6D4" />
              <g stroke="#06B6D4" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "SQLite Offline DB",
          role: "Local-First Instant Synchronization",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#003B57">
              <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c4.41 0 8 1.34 8 2.5S16.41 10 12 10 4 8.66 4 7.5 7.59 5 12 5z" />
            </svg>
          ),
        },
        {
          name: "Firebase Cloud Messaging",
          role: "Push Notifications • Auth • Analytics",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#FFA000" d="M3.89 15.67L6.64 2.21a.75.75 0 011.41-.09l2.76 5.17-6.92 8.38z" />
              <path fill="#F57C00" d="M14.28 9.53l-3.47-6.5a.75.75 0 00-1.38 0L3.89 15.67l10.39-6.14z" />
              <path fill="#FFCA28" d="M20.11 15.67l-2.6-13.46a.75.75 0 00-1.41-.09L3.89 15.67l7.46 4.19a2.25 2.25 0 002.16 0l6.6-4.19z" />
            </svg>
          ),
        },
        {
          name: "Apple App Store",
          role: "Fastlane CI/CD • TestFlight Automation",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#000000">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.91.04-2.02.61-2.67 1.38-.57.66-1.07 1.76-.94 2.81 1.02.08 2.04-.49 2.67-1.26z" />
            </svg>
          ),
        },
        {
          name: "Google Play Store",
          role: "AAB Bundling • Policy Compliance",
          logo: (
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M1.22 1.08L12.5 12 1.22 22.92c-.14-.24-.22-.52-.22-.84V1.92c0-.32.08-.6.22-.84z" />
              <path fill="#34A853" d="M16.27 8.35L3.6 1.13c-.32-.18-.68-.18-1 0l9.9 10.87 3.77-3.65z" />
              <path fill="#EA4335" d="M16.27 15.65l-3.77-3.65L2.6 22.87c.32.18.68.18 1 0l12.67-7.22z" />
              <path fill="#FBBC05" d="M21.2 11.23l-4.93-2.88-3.77 3.65 3.77 3.65 4.93-2.88c.8-.46.8-1.08 0-1.54z" />
            </svg>
          ),
        },
      ],
      deliverableMetric: "120Hz Smooth • Offline-Ready • iOS & Android",
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>("cloud-servers");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const activeService = services.find((s) => s.id === activeTabId) || services[0];

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleTabSwitch = (id: string) => {
    if (id === activeTabId) return;
    setIsLoading(true);
    setActiveTabId(id);
    setTimeout(() => {
      setIsLoading(false);
    }, 280);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-10 sm:py-14 lg:py-16 bg-slate-50 text-slate-900 border-b border-slate-200 select-none relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <KineticText
                text="SERVICES"
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight cursor-default"
              />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-blue-600 underline decoration-yellow-400 decoration-wavy">
                OVERVIEW
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Industrial-grade digital capabilities built to transform complex business challenges into automated, scalable revenue engines.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Linux Browser Frame Container - Pristine Pure White Design */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
          
          {/* Linux Browser Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-100/80 border-b border-slate-200">
            {/* Window Controls (Red, Yellow, Green) */}
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-2xs border border-[#e0443e]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-2xs border border-[#dea123]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-2xs border border-[#1aab29]" />
              <span className="ml-3 text-[11px] font-mono font-medium text-slate-500 truncate">
                ~/services/{activeService.id}
              </span>
            </div>

            {isLoading && (
              <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-mono font-bold animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>LOADING...</span>
              </div>
            )}
          </div>

          {/* Mobile View: Vertical Accordion (Row by Row) with Up/Down Expand */}
          <div className="block lg:hidden divide-y divide-slate-200">
            {services.map((srv) => {
              const isExpanded = srv.id === activeTabId;
              return (
                <div key={srv.id} className="transition-colors">
                  {/* Row Label Header Button */}
                  <button
                    type="button"
                    onClick={() => setActiveTabId(isExpanded ? "" : srv.id)}
                    className={`w-full flex items-center justify-between p-3.5 sm:p-4 text-left cursor-pointer transition-colors ${
                      isExpanded ? "bg-slate-50 text-blue-700" : "bg-white text-slate-900 hover:bg-slate-50/70"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: isExpanded ? srv.accent : "#f1f5f9" }}
                      >
                        <LordIcon
                          src={srv.lordIcon}
                          trigger="hover"
                          size={20}
                          colors={isExpanded ? "primary:#ffffff,secondary:#38bdf8" : "primary:#475569,secondary:#94a3b8"}
                        />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`text-xs sm:text-sm font-heading font-extrabold block truncate ${
                            isExpanded ? "text-blue-700" : "text-slate-900"
                          }`}
                        >
                          {srv.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block truncate uppercase">
                          {srv.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-90 bg-blue-100 text-blue-700" : "text-slate-500"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Inner Content: Expands Down / Up Right Below the Label */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 bg-slate-50/60 border-t border-slate-200 space-y-4 animate-in slide-in-from-top-2 duration-200">
                      {/* Image */}
                      <div className="relative w-full aspect-[16/9] max-h-48 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-slate-900 flex items-center justify-between">
                          <span className="truncate font-semibold">{srv.deliverableMetric}</span>
                          <span className="text-emerald-600 font-bold shrink-0 flex items-center gap-1 text-[10px]">
                            <ShieldCheck className="w-3 h-3" /> VERIFIED
                          </span>
                        </div>
                      </div>

                      {/* Scope Description */}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          SCOPE & CAPABILITY OVERVIEW
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed font-sans font-normal">
                          {srv.detailedScope}
                        </p>
                      </div>

                      {/* Technologies Section */}
                      <div className="pt-3 border-t border-slate-200">
                        <span className="font-heading font-extrabold text-xs text-slate-950 block mb-2">
                          Technologies
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {srv.technologies.map((tech, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5 shadow-2xs"
                            >
                              <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                                {tech.logo}
                              </div>
                              <div className="flex flex-col min-w-0 pr-1">
                                <span className="font-heading font-extrabold text-xs text-slate-900 truncate">
                                  {tech.name}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500 truncate font-medium">
                                  {tech.role}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Link */}
                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>Request Technical Proposal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop View: Left Sidebar Navigation + Right Content Display */}
          <div className="hidden lg:grid lg:grid-cols-12 min-h-[480px]">
            
            {/* Left Sidebar: Service Headings Navigation */}
            <div className="lg:col-span-4 p-3 sm:p-4 bg-slate-50/70 border-r border-slate-200 flex flex-col gap-1.5 sm:gap-2">
              <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>SERVICE DIRECTORY</span>
                <span>[6 ACTIVE]</span>
              </div>

              <div className="flex flex-col gap-1.5">
                {services.map((srv, idx) => {
                  const isSelected = srv.id === activeTabId;
                  // Forward: first-to-last (idx * 0.12s)
                  // Reverse: last-to-first ((total - 1 - idx) * 0.08s)
                  const delay = isInView
                    ? idx * 0.12
                    : (services.length - 1 - idx) * 0.08;

                  return (
                    <motion.button
                      key={srv.id}
                      type="button"
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -50 }
                      }
                      transition={{
                        duration: 0.75, // Slower, elegant glide
                        delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onClick={() => handleTabSwitch(srv.id)}
                      className={`w-full flex items-center gap-3 p-2.5 sm:p-3 rounded-xl text-left transition-colors cursor-pointer shrink-0 sm:shrink will-change-transform ${
                        isSelected
                          ? "bg-white border-2 border-blue-600 shadow-md text-slate-950"
                          : "bg-white/60 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white"
                      }`}
                    >
                      {/* Lordicon / Category Icon */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                          isSelected ? "scale-105 shadow-xs" : "opacity-85"
                        }`}
                        style={{
                          backgroundColor: isSelected ? srv.accent : "#f1f5f9",
                        }}
                      >
                        <LordIcon
                          src={srv.lordIcon}
                          trigger="hover"
                          size={22}
                          colors={isSelected ? "primary:#ffffff,secondary:#38bdf8" : "primary:#475569,secondary:#94a3b8"}
                        />
                      </div>

                      {/* Service Title & Category Subtext */}
                      <div className="flex-1 min-w-0 pr-1">
                        <span
                          className={`text-xs sm:text-[13px] font-heading font-extrabold block truncate ${
                            isSelected ? "text-blue-700" : "text-slate-900"
                          }`}
                        >
                          {srv.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block truncate">
                          {srv.category}
                        </span>
                      </div>

                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 transition-all ${
                          isSelected ? "text-blue-600 translate-x-0.5 opacity-100" : "opacity-0 -translate-x-1"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Hand Side Content Display */}
            <div className="lg:col-span-8 p-4 sm:p-6 lg:p-7 bg-white flex flex-col justify-between overflow-y-auto relative min-h-[460px]">
              
              {/* Switching Loader Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/85 backdrop-blur-xs z-30 flex flex-col items-center justify-center gap-3 animate-in fade-in duration-150">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-md animate-spin">
                    <Loader2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-600 uppercase">
                    PROJECTION RUNNING...
                  </span>
                </div>
              )}

              <div>
                {/* 1. Header with Title - High Contrast Font */}
                <div className="pb-3 sm:pb-4 border-b border-slate-200">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-slate-950 tracking-tight leading-tight">
                    {activeService.title}
                  </h3>
                </div>

                {/* 2. Showcase Visual Image Frame */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-52 rounded-2xl overflow-hidden border border-slate-200 my-4 shadow-sm group bg-slate-900">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Metric Badge over Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono shadow-md">
                    <span className="text-slate-900 font-semibold truncate">
                      {activeService.deliverableMetric}
                    </span>
                    <span className="text-emerald-600 font-bold shrink-0 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                    </span>
                  </div>
                </div>

                {/* 3. Description Section */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    SCOPE & CAPABILITY OVERVIEW
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed font-normal">
                    {activeService.detailedScope}
                  </p>
                </div>

                {/* Proper Separation Divider */}
                <div className="my-5 border-t-2 border-slate-100" />

                {/* 4. Technologies Section with Real Brand Logos */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base sm:text-lg font-black font-heading tracking-tight text-slate-950">
                      Technologies
                    </h4>
                    <span className="text-[10px] font-mono font-medium text-slate-400">PRODUCTION STACK</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {activeService.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-3 group"
                      >
                        {/* Real Brand SVG Icon */}
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {tech.logo}
                        </div>

                        {/* Name and Role */}
                        <div className="flex flex-col min-w-0 pr-1">
                          <span className="font-heading font-extrabold text-xs text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 truncate mt-0.5 font-medium">
                            {tech.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Bar Footer */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-500 text-center sm:text-left">
                  Need custom configuration or enterprise scoping?
                </span>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
