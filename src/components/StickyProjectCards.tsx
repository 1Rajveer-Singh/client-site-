"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { getTechIcon } from "@/components/TechIcons";
import { FlatAnalyticsGrowthIcon } from "@/components/icons/SvgRepoCollections";

export interface ProjectCardData {
  id: string;
  title: string;
  category: string;
  tag: string;
  desc: string;
  features: string[];
  techStack: string[];
  metric: string;
  url: string;
  image: string;
  gallery: string[];
}

export const defaultProjects: ProjectCardData[] = [
  {
    id: "mearf",
    title: "Maurya ERF Platform",
    category: "Academic Research & Scholarly Indexing",
    tag: "Production Deployed",
    desc: "Enterprise platform operating 4 journals, academic book publications, research event management pipelines, and an international advisor board peer review workflow.",
    features: [
      "Automated DOI & Crossref Metadata Indexing",
      "High-Concurrency Manuscript Submission Engine",
      "Peer-Review Workflow & Editorial Board Portal",
      "Sub-400ms First Contentful Paint worldwide",
      "Daily automated SQLite WAL database backups",
    ],
    techStack: ["Next.js", "React", "Linux", "Nginx", "Tailwind CSS"],
    metric: "4 Journals • 0.38s FCP • 99.999% Uptime",
    url: "https://www.mauryaerf.com/",
    image: "/Projects/mearf/slide-1.png",
    gallery: [
      "/Projects/mearf/slide-1.png",
      "/Projects/mearf/slide-2.png",
      "/Projects/mearf/slide-3.png",
      "/Projects/mearf/slide-4.png",
    ],
  },
  {
    id: "instagram",
    title: "Instagram Automation Engine",
    category: "Autonomous Growth & Meta Webhooks",
    tag: "High-Throughput Webhook",
    desc: "Autonomous Meta webhook engine delivering instant keyword-triggered DM responses, dynamic CRM lead qualification, conversion telemetry, and anti-spam account security guardrails.",
    features: [
      "Real-Time Meta Webhook & Graph API Event Listeners",
      "Automated Keyword-Triggered DM & Comment Responses",
      "Dynamic Intent Classification & Lead Qualification",
      "Instant CRM, Database & Notification Hub Sync",
      "Anti-Spam Rate Limiting & Account Health Guardrails",
    ],
    techStack: ["Python", "Node.js", "PostgreSQL", "Redis"],
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
  },
];

interface StickyCardProps {
  i: number;
  project: ProjectCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  totalCards: number;
  onOpenModal: (project: ProjectCardData) => void;
}

export const StickyCard_001 = ({
  i,
  project,
  progress,
  range,
  targetScale,
  totalCards,
  onOpenModal,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-16 sm:top-24 flex items-center justify-center w-full px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 28}px)`,
        }}
        className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row origin-top transition-shadow hover:shadow-3xl cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        {/* Visual Preview Half */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[420px] bg-slate-950 overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/75 text-white backdrop-blur-md border border-white/20">
              {project.tag}
            </span>
          </div>

          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold tracking-wide border border-blue-400 shadow-lg flex items-center gap-1.5">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              EXPLORE CASE STUDY
            </span>
          </div>
        </div>

        {/* Content Half */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-900">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-950 tracking-tight">
              {project.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {project.desc}
            </p>

            {/* Key Deliverable Metric */}
            <div className="mt-4 p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2 text-xs text-slate-800">
              <FlatAnalyticsGrowthIcon className="w-4 h-4 shrink-0 text-blue-600" />
              <span className="font-semibold truncate">{project.metric}</span>
            </div>

            {/* Tech badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700"
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center">
                    {getTechIcon(tech)}
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              Card {i + 1} of {totalCards}
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
            >
              View Full Gallery →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function StickyProjectCards({
  projects = defaultProjects,
}: {
  projects?: ProjectCardData[];
}) {
  const container = useRef<HTMLDivElement>(null);
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectCardData | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Modal ESC handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  const openModal = (proj: ProjectCardData) => {
    setActiveModalProject(proj);
    setActiveGalleryIndex(0);
  };

  return (
    <>
      <section
        ref={container}
        className="relative flex w-full flex-col items-center justify-start pb-32 pt-20 bg-slate-50 border-t border-slate-200"
      >
        {/* Sticky indicator header */}
        <div className="mb-12 text-center max-w-2xl px-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-500 bg-white border border-slate-200 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            STACKING CARD ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-slate-950">
            Featured Enterprise Deployments
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Scroll down to watch our production systems stack dynamically into view.
          </p>
        </div>

        {/* Sticky Card Stack */}
        <div className="relative w-full flex flex-col items-center gap-12 sm:gap-16 pb-24">
          {projects.map((project, i) => {
            const targetScale = Math.max(
              0.88,
              1 - (projects.length - i - 1) * 0.05
            );
            return (
              <StickyCard_001
                key={project.id}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.35, 1]}
                targetScale={targetScale}
                totalCards={projects.length}
                onOpenModal={openModal}
              />
            );
          })}
        </div>
      </section>

      {/* Interactive Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors"
                onClick={() => setActiveModalProject(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Image Carousel */}
              <div className="relative h-64 sm:h-96 rounded-2xl bg-slate-950 overflow-hidden">
                <img
                  src={activeModalProject.gallery[activeGalleryIndex]}
                  alt={`${activeModalProject.title} slide ${activeGalleryIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {activeModalProject.gallery.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <button
                      type="button"
                      aria-label="Previous slide"
                      className="p-2 rounded-full bg-black/60 text-white pointer-events-auto hover:bg-black/90 transition-colors"
                      onClick={() =>
                        setActiveGalleryIndex((prev) =>
                          prev === 0
                            ? activeModalProject.gallery.length - 1
                            : prev - 1
                        )
                      }
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next slide"
                      className="p-2 rounded-full bg-black/60 text-white pointer-events-auto hover:bg-black/90 transition-colors"
                      onClick={() =>
                        setActiveGalleryIndex((prev) =>
                          (prev + 1) % activeModalProject.gallery.length
                        )
                      }
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {activeModalProject.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {activeModalProject.gallery.map((img, idx) => (
                    <button
                      type="button"
                      key={img}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 ${
                        idx === activeGalleryIndex
                          ? "border-blue-600 shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      onClick={() => setActiveGalleryIndex(idx)}
                    >
                      <img
                        src={img}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description & Features */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModalProject.desc}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Production Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">
                {activeModalProject.metric}
              </span>
              <a
                href={activeModalProject.url}
                target={
                  activeModalProject.url.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>VISIT LIVE PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
