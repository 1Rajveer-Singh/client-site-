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
  modalDescription: string;
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
      desc: "Enterprise platform operating 4 journals, academic book publications, research event management pipelines, and an international advisor board peer review workflow.",
      modalDescription:
        "Enterprise platform operating 4 journals, academic book publications, research event management pipelines, and an international advisor board peer review workflow.",
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
      metric: "4 Journals • 0.38s FCP • 99.999% Uptime",
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
      desc: "Autonomous Meta webhook engine delivering instant keyword-triggered DM responses, dynamic CRM lead qualification, conversion telemetry, and anti-spam account security guardrails.",
      modalDescription:
        "Autonomous Meta webhook engine delivering instant keyword-triggered DM responses, dynamic CRM lead qualification, conversion telemetry, and anti-spam account security guardrails.",
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

          {/* 2-Column Responsive Grid matching Plan of Work card size */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch">
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
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider ${project.id === "instagram" ? "text-pink-600" : "text-blue-600"
                          }`}
                      >
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        LIVE PRODUCTION
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p
                      suppressHydrationWarning
                      className="mt-2.5 text-xs sm:text-sm font-jakarta leading-relaxed text-slate-600 font-normal"
                    >
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

      {/* Split Window Modal: Clean Professional Designer Theme (Zero Black Color) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[92vh] sm:h-auto sm:max-h-[92vh] bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden text-black select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Navigation Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-7 py-3 sm:py-3.5 border-b border-slate-200 bg-slate-50/95 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3 truncate pr-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <h3 className="text-sm sm:text-base font-semibold font-jakarta tracking-tight text-slate-900 truncate">
                  {activeProject.title}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-jakarta font-medium uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-600">
                  {activeProject.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200 transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Split Window Body */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto overscroll-contain">

              {/* Left Portion: Fixed aspect-ratio image and gallery strip in light theme */}
              <div className="lg:col-span-7 flex flex-col justify-between p-4 sm:p-7 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 lg:sticky lg:top-0 lg:self-start">
                <div>
                  {/* Image Frame */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-white border border-slate-200 p-2 overflow-hidden shadow-sm flex items-center justify-center group shrink-0">
                    <img
                      src={activeProject.gallery[selectedImageIndex]}
                      alt={`${activeProject.title} screenshot ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain rounded-xl bg-slate-50 transition-all duration-300"
                    />

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-4 left-5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-jakarta font-medium text-slate-700 border border-slate-200 shadow-xs">
                      Screenshot {selectedImageIndex + 1} of {activeProject.gallery.length}
                    </div>

                    {/* Left & Right Controls */}
                    {activeProject.gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center border border-slate-200 shadow-sm transition-all hover:scale-105 cursor-pointer"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center border border-slate-200 shadow-sm transition-all hover:scale-105 cursor-pointer"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Below: Gallery Thumbnails Strip */}
                  <div className="mt-3.5 sm:mt-4">
                    <div className="text-[11px] font-jakarta text-slate-500 font-medium mb-2 flex items-center justify-between">
                      <span>Click thumbnail to view:</span>
                      <span className="text-slate-700 font-semibold">● {selectedImageIndex + 1}/{activeProject.gallery.length}</span>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
                      {activeProject.gallery.map((thumb, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-150 cursor-pointer ${selectedImageIndex === idx
                              ? "border-blue-600 ring-2 ring-blue-500/20 opacity-100"
                              : "border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400"
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

              {/* Right Portion: Executive Architecture & Compact Professional Description */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-7 bg-white text-slate-900 overflow-visible lg:overflow-y-auto">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-jakarta text-slate-950 tracking-tight leading-snug">
                    {activeProject.title}
                  </h3>

                  {/* Clean small professional description */}
                  <p className="mt-2.5 text-xs sm:text-sm font-jakarta font-normal leading-relaxed text-slate-600">
                    {activeProject.modalDescription}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mt-6">
                    <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Production Engineering Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] font-jakarta text-slate-800 font-medium leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Technology Stack */}
                  <div className="mt-6">
                    <h4 className="text-xs font-jakarta font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                      Core Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs font-jakarta font-medium text-slate-800"
                        >
                          <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                            {getTechIcon(tech)}
                          </div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Call to Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                  {activeProject.id === "mearf" ? (
                    <a
                      href="https://www.mauryaerf.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-jakarta font-semibold text-xs tracking-wider uppercase transition-all shadow-xs hover:shadow cursor-pointer"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-jakarta font-semibold text-xs tracking-wider uppercase transition-all shadow-xs hover:shadow cursor-pointer"
                    >
                      <span>Request Custom Pipeline</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-jakarta font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
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
