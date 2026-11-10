"use client";

import React, { useState, useEffect } from "react";
import {
  Globe,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";
import { getTechIcon } from "./TechIcons";
import { FlatAnalyticsGrowthIcon } from "@/components/icons/SvgRepoCollections";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  tagBg: string;
  desc: string;
  detailedAbout: string;
  features: string[];
  techStack: string[];
  metric: string;
  url: string;
  image: string;
  gallery: string[];
  badge: string;
}

export default function ClientWork() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const projects: ProjectItem[] = [
    {
      id: "mearf",
      title: "Maurya ERF Platform",
      category: "Academic Research & Scholarly Indexing",
      tag: "Live Production",
      tagBg: "bg-emerald-600 text-white border-emerald-500",
      desc: "International peer-reviewed scholarly research publishing & academic journal indexing portal engineered for high-concurrency editorial workflows, automated DOI indexing, and lightning-fast global accessibility.",
      detailedAbout:
        "Maurya ERF (mauryaerf.com) is an enterprise academic publishing and scholarly indexing ecosystem. Engineered to host multiple high-impact peer-reviewed journals, the platform automates author manuscript submission pipelines, editorial review board assignments, automated DOI assignment, and semantic metadata tagging for instant Google Scholar and Crossref discovery. The architecture features zero hydration layout shift, server-side caching, and hardened security for research intellectual property.",
      features: [
        "Automated DOI & Crossref Metadata Indexing",
        "High-Concurrency Manuscript Submission Engine",
        "Peer-Review Workflow & Editorial Board Portal",
        "Sub-400ms First Contentful Paint worldwide",
        "Daily automated SQLite WAL database backups",
        "Strict academic copyright & IP protection protocols",
      ],
      techStack: [
        "Next.js",
        "React",
        "Linux",
        "Nginx",
        "Tailwind CSS",
        "JSON-LD",
      ],
      metric: "12+ Journals • 0.38s FCP • 99.999% Uptime",
      url: "https://www.mauryaerf.com/",
      image: "/Projects/mearf/slide-1.png",
      gallery: [
        "/Projects/mearf/slide-1.png",
        "/Projects/mearf/slide-2.png",
        "/Projects/mearf/slide-3.png",
        "/Projects/mearf/slide-4.png",
      ],
      badge: "FEATURED PRODUCTION",
    },
    {
      id: "instagram",
      title: "Instagram Automation",
      category: "Autonomous Growth & Lead Generation",
      tag: "Live Production",
      tagBg: "bg-pink-600 text-white border-pink-500",
      desc: "End-to-end autonomous Instagram growth and lead qualification engine. Triggers instant context-aware DM responses to story replies, reel comments, and bio link clicks with real-time CRM pipeline synchronization.",
      detailedAbout:
        "The Instagram Automation suite transforms inbound social media engagement into qualified, sales-ready leads without manual intervention. Operating 24/7 on official Meta Graph APIs and event webhooks, the system listens for trigger keywords across reel comments, direct messages, and story interactions. It conducts dynamic natural-language qualification dialogues, captures verified client contact data, and streams hot leads directly into cloud databases and team communication channels.",
      features: [
        "Real-Time Meta Webhook & Graph API Event Listeners",
        "Automated Keyword-Triggered DM & Comment Responses",
        "Dynamic Intent Classification & Lead Qualification",
        "Instant CRM, Database & Notification Hub Sync",
        "Anti-Spam Rate Limiting & Account Health Guardrails",
        "Real-Time Conversion Telemetry & Response Analytics",
      ],
      techStack: [
        "Python",
        "Node.js",
        "Meta Graph API",
        "Webhooks",
        "PostgreSQL",
        "LangChain",
        "Redis",
      ],
      metric: "Instant DM Reply • 98.4% Open Rate • 4.8x Lead Conversion",
      url: "/contact",
      image: "/Projects/instagram/slide-1.png",
      gallery: [
        "/Projects/instagram/slide-1.png",
        "/Projects/instagram/slide-2.png",
        "/Projects/instagram/slide-3.png",
        "/Projects/instagram/slide-4.png",
        "/Projects/instagram/slide-5.png",
      ],
      badge: "AUTOMATION PIPELINE",
    },
    {
      id: "automata",
      title: "Automata AI Swarms",
      category: "Autonomous Multi-Agent Triage",
      tag: "Live Production",
      tagBg: "bg-purple-600 text-white border-purple-500",
      desc: "Self-orchestrating multi-agent LLM systems with real-time vector memory, automated enterprise customer triage, and high-throughput tool calling.",
      detailedAbout:
        "Enterprise autonomous agent collective engineered to resolve high-tier customer workflows and transactional triage autonomously. Featuring hybrid Milvus vector retrieval, automated ticket dispatch, and deterministic state-machine fallbacks.",
      features: [
        "Autonomous Multi-Agent Swarm Orchestration",
        "Milvus Vector Database Semantic Memory",
        "Deterministic Tool Calling & ERP Integration",
        "Sub-28ms P99 Vector Retrieval Latency",
        "Human-in-the-Loop Escalation Routing",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "Milvus",
        "LangGraph",
        "Docker",
        "Next.js",
      ],
      metric: "74% Auto-Resolved • <28ms Response",
      url: "/contact",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=85&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=85&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=85&w=1000&auto=format&fit=crop",
      ],
      badge: "ENTERPRISE AI SWARM",
    },
  ];

  const openProjectModal = (project: ProjectItem) => {
    setActiveProject(project);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (!activeProject) return;
    setSelectedImageIndex((prev) => (prev + 1) % activeProject.gallery.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? activeProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
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
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 h-full cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Preview Image at Top with PixelImage Grayscale Reveal */}
                <div
                  className="relative block w-full h-44 bg-slate-900 overflow-hidden group/img"
                  title={`Open ${project.title} Showcase`}
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
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 px-3.5 py-1.5 rounded-xl bg-black/85 text-white font-heading text-xs font-semibold border border-cyan-400 shadow-xl flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      VIEW SHOWCASE & ASSETS
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

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

                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm font-sans leading-relaxed text-slate-600 font-normal">
                      {project.desc}
                    </p>

                    {/* Key Deliverables Pill */}
                    <div className="mt-4 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-center w2 text-xs text-slate-700 shadow-xs flex items-center justify-center gap-2 truncate">
                      <FlatAnalyticsGrowthIcon className="w-4 h-4 shrink-0" />
                      <span className="truncate font-medium">{project.metric}</span>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs w3 tracking-wider truncate max-w-[160px] text-slate-500 uppercase font-bold">
                      {project.id === "mearf"
                        ? "MAURYAERF.COM"
                        : project.id === "instagram"
                        ? "INSTAGRAM AUTO"
                        : "ENTERPRISE"}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md bg-slate-900 text-white hover:bg-blue-600 transition-all cursor-pointer group/btn"
                    >
                      <span>LAUNCH SITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Window Modal: Left Portion (Big Image + Gallery Thumbnails) & Right Portion (Title + About the Project) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[92vh] sm:h-auto sm:max-h-[92vh] bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden text-slate-900 select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Navigation Header - Pinned at top */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-7 py-3.5 sm:py-4 border-b border-slate-200/90 bg-slate-50/95 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2.5 truncate pr-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold font-heading tracking-tight text-slate-900 truncate">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Split Window Body: Single combined vertical scroll on mobile (< lg), split layout on desktop (>= lg) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto overscroll-contain">
              
              {/* Left Portion: Fixed aspect-ratio image at top on mobile, sticky on desktop */}
              <div className="lg:col-span-7 flex flex-col justify-between p-4 sm:p-7 bg-[#0b0f19] text-white border-b lg:border-b-0 lg:border-r border-slate-800 lg:sticky lg:top-0 lg:self-start">
                <div>
                  {/* Big Image Frame with fixed aspect ratio */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group shrink-0">
                    <img
                      src={activeProject.gallery[selectedImageIndex]}
                      alt={`${activeProject.title} screenshot ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain bg-black/90 transition-all duration-300"
                    />

                    {/* Frame Gradient Overlay Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                      Screenshot {selectedImageIndex + 1} of {activeProject.gallery.length}
                    </div>

                    {/* Left & Right Controls for cycling big frame */}
                    {activeProject.gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Below: Gallery Thumbnails Strip */}
                  <div className="mt-3.5 sm:mt-4">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                      <span>Tap thumbnail to switch image:</span>
                      <span className="text-cyan-400 font-semibold">● {selectedImageIndex + 1}/{activeProject.gallery.length}</span>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
                      {activeProject.gallery.map((thumb, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border transition-all duration-150 cursor-pointer ${
                            selectedImageIndex === idx
                              ? "border-blue-500 ring-2 ring-blue-500/20 opacity-100"
                              : "border-slate-800 opacity-60 hover:opacity-90 hover:border-slate-600"
                          }`}
                        >
                          <img
                            src={thumb}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Portion: Title and About the Project (flows naturally under image in mobile scroll, no trapped sub-scroll) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-8 bg-white overflow-visible lg:overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-slate-500">
                      {activeProject.category}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Live
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold font-heading text-slate-900 tracking-tight leading-tight">
                    {activeProject.title}
                  </h3>

                  {/* Section Divider */}
                  <div className="my-5 border-b border-slate-200" />

                  {/* About the Project */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        About this project
                      </h4>
                    </div>
                    <div
                      className="text-base sm:text-[16px] leading-relaxed"
                      style={{ color: "#000000", fontWeight: 600 }}
                    >
                      {activeProject.detailedAbout}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mt-5">
                    <h4
                      className="text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-3"
                      style={{ color: "#000000", fontWeight: 900 }}
                    >
                      KEY CAPABILITIES & DELIVERABLES
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] font-sans"
                          style={{ color: "#000000", fontWeight: 600 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Architecture with Real SVGs */}
                  <div className="mt-5">
                    <h4
                      className="text-xs sm:text-sm font-black font-heading uppercase tracking-wider mb-2.5"
                      style={{ color: "#000000", fontWeight: 900 }}
                    >
                      CORE TECHNOLOGY STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-mono font-bold text-slate-900 shadow-2xs hover:bg-white hover:border-blue-500 transition-all group"
                        >
                          <div className="w-4 h-4 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {getTechIcon(tech)}
                          </div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Call to Action Buttons */}
                <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                  {activeProject.id === "mearf" ? (
                    <a
                      href="https://www.mauryaerf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>Get In Touch</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
