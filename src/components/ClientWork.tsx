"use client";

import React from "react";
import {
  Globe,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";
import NeonBorder from "@/components/ui/neon-border";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  tagBg: string;
  desc: string;
  metric: string;
  url: string;
  image: string;
  badge: string;
}

export default function ClientWork() {
  const projects: ProjectItem[] = [
    {
      id: "mearf",
      title: "Maurya ERF Platform",
      category: "Academic Research & Scholarly Indexing",
      tag: "Live Production",
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      desc: "International peer-reviewed scholarly research publishing & academic journal indexing portal engineered for high-concurrency editorial workflows, automated DOI indexing, and lightning-fast global accessibility.",
      metric: "12+ Journals • 0.38s FCP • 99.999% Uptime",
      url: "https://www.mauryaerf.com/",
      image: "/Projects/mearf-preview.jpg",
      badge: "FEATURED PRODUCTION",
    },
    {
      id: "finscale",
      title: "FinScale Cloud Commerce",
      category: "High-Concurrency FinTech Commerce",
      tag: "Live Production",
      tagBg: "bg-blue-600 text-white border-blue-500",
      desc: "Enterprise Next.js 16 storefront and edge payment orchestration engine processing multi-region checkout transactions with zero downtime and automated currency settlement.",
      metric: "Sub-300ms Checkout • $12M+ Annual GMV",
      url: "/contact",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1000&auto=format&fit=crop",
      badge: "FINTECH STOREFRONT",
    },
    {
      id: "automata",
      title: "Automata AI Swarms",
      category: "Autonomous Multi-Agent Triage",
      tag: "Live Production",
      tagBg: "bg-purple-600 text-white border-purple-500",
      desc: "Self-orchestrating multi-agent LLM systems with real-time vector memory, automated enterprise customer triage, and high-throughput tool calling.",
      metric: "74% Auto-Resolved • <28ms Response",
      url: "/contact",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=85&w=1000&auto=format&fit=crop",
      badge: "ENTERPRISE AI SWARM",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 relative border-b-2 border-slate-200 select-none bg-white overflow-hidden"
    >
      {/* Subtle Engineering Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <KineticText
              text="OUR CLIENT"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading text-slate-950 cursor-default"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading text-blue-600 underline decoration-yellow-400 decoration-wavy">
              WORK
            </span>
          </div>

          <p className="mt-3 text-sm sm:text-base font-sans leading-relaxed max-w-2xl text-slate-600 font-normal">
            Mission-critical digital architectures deployed to live production. Explore our featured enterprise implementations.
          </p>
        </div>

        {/* 3-Column Responsive Grid matching Plan of Work card size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <NeonBorder
              key={project.id}
              borderRadius={16}
              color="#00e5ff"
              secondaryColor="#3b82f6"
              trackColor="rgba(0, 0, 0, 0.08)"
              borderWidth={2}
              duration={5.5}
              glow={1.1}
              containerClassName="w-full h-full"
            >
              <div
                className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 h-full"
              >
                {/* Preview Image at Top with PixelImage Grayscale Reveal */}
                <a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="relative block w-full h-40 bg-slate-900 overflow-hidden cursor-pointer group/img"
                  title={`Visit ${project.title}`}
                >
                  <PixelImage
                    src={project.image}
                    customGrid={{ rows: 4, cols: 6 }}
                    grayscaleAnimation
                    className="w-full h-full"
                    imageClassName="object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    alt={project.title}
                  />

                  {/* Luminous Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover/img:bg-slate-950/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 px-3 py-1.5 rounded-xl bg-black/80 text-white font-heading text-xs font-semibold border border-cyan-400 shadow-xl flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      VISIT PLATFORM
                    </span>
                  </div>

                  {/* Live Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider border shadow-xs flex items-center gap-1.5 ${project.tagBg}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {project.tag}
                    </span>

                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-heading font-bold border shadow-xs bg-[#090d16] text-yellow-400 border-yellow-500/60"
                    >
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </a>

                {/* Project Details with Refined Modern Typography */}
                <div className="p-5 flex flex-col justify-between text-slate-800 flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] w2 text-blue-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] w1 text-emerald-600 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        VERIFIED
                      </span>
                    </div>

                    <h3 className="text-xl font-bold card-title text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm font-sans leading-relaxed line-clamp-3 min-h-[56px] text-slate-600 font-normal">
                      {project.desc}
                    </p>

                    {/* Key Deliverables Pill */}
                    <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-center w2 text-xs text-slate-700 shadow-xs flex items-center justify-center gap-1.5 truncate">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{project.metric}</span>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs w3 tracking-wider truncate max-w-[160px] text-slate-500 uppercase font-bold">
                      {project.id === "mearf" ? "MAURYAERF.COM" : "ENTERPRISE"}
                    </span>

                    <a
                      href={project.url}
                      target={project.url.startsWith("http") ? "_blank" : undefined}
                      rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow-md bg-slate-900 text-white hover:bg-blue-600 transition-all cursor-pointer group/btn"
                    >
                      <span>LAUNCH SITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </NeonBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
