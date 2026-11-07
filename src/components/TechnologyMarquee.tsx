"use client";

import React from "react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { Sparkles, Cpu } from "lucide-react";

export default function TechnologyMarquee() {
  const technologies = [
    {
      name: "Next.js",
      desc: "App Router • React 19 • Edge Rendering",
      tag: "FULL-STACK",
      badgeBg: "bg-slate-100 border-slate-200 text-slate-900",
      logo: (
        <svg className="w-7 h-7 text-black" viewBox="0 0 180 180" fill="currentColor">
          <circle cx="90" cy="90" r="90" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4" />
          <path d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z" fill="#fff" />
          <rect x="115" y="54" width="12" height="72" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "React",
      desc: "Server Components • Suspense • Actions",
      tag: "FRONTEND",
      badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-800",
      logo: (
        <svg className="w-7 h-7" viewBox="-11.5 -10.232 23 20.463">
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
      desc: "Strict End-to-End Type Safety & Contracts",
      tag: "LANGUAGE",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.75 8.5H6.25v2h2v7h2.25v-7h1.25v-2zm7 3.5c0-1.8-1.2-2.5-3-2.5h-3.25v9h2.25v-2.75h1c1.8 0 3-.7 3-2.5v-1.25zm-2.25 1c0 .5-.4.75-1 .75h-1v-2h1c.6 0 1 .25 1 .75v.5z" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      desc: "Modern Utility Engine & Zero-Runtime CSS",
      tag: "STYLING",
      badgeBg: "bg-teal-50 border-teal-200 text-teal-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "Python",
      desc: "FastAPI • AI Agents • Data Science & ML",
      tag: "BACKEND API",
      badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 1.5c-3.1 0-5.3 1.3-5.3 3.8v2.8h5.5v.8H3.8c-2.4 0-3.8 2-3.8 5.1s1.3 5.3 3.8 5.3h2.3v-3.2c0-2.3 2-4.2 4.3-4.2h5.5v-4.8c0-3.1-2.4-4.8-4-4.8zm-2 2.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#0284C7" />
          <path d="M12.1 22.5c3.1 0 5.3-1.3 5.3-3.8v-2.8h-5.5v-.8h8.3c2.4 0 3.8-2 3.8-5.1s-1.3-5.3-3.8-5.3h-2.3v3.2c0 2.3-2 4.2-4.3 4.2h-5.5v4.8c0 3.1 2.4 4.8 4 4.8zm2-2.3c-.7 0-1.2-.6-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#D97706" />
        </svg>
      ),
    },
    {
      name: "Docker",
      desc: "Microservices • CI/CD Pipelines • Isolation",
      tag: "CONTAINERS",
      badgeBg: "bg-sky-50 border-sky-200 text-sky-700",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#0284C7">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 5.428h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.929 5.428h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.215a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm19.345-1.077c-.456-.347-1.168-.456-1.85-.347-.193-.526-.549-.974-1.01-1.282l-.464-.316-.316.463c-.347.509-.494 1.129-.425 1.745-.632.147-1.783.587-2.394 1.482-.316.463-.378.989-.316 1.482H.416a.417.417 0 00-.416.417 6.44 6.44 0 001.328 3.967 11.233 11.233 0 006.753 4.137c5.297.872 10.457-1.391 13.066-5.758a6.398 6.398 0 00.91-3.328c0-.98-.27-1.923-.746-2.664z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      desc: "ACID Relational Data • High Throughput",
      tag: "DATABASE",
      badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#336791">
          <path d="M11.95 24c-.26 0-.53-.02-.79-.06-3.84-.57-6.84-3.56-7.46-7.44-.33-2.07.12-4.14 1.25-5.83.21-.31.62-.4 1.01-.22.4.18.57.65.37 1.05-.98 1.48-1.37 3.28-1.08 5.09.53 3.32 3.1 5.88 6.38 6.37 3.65.55 7.14-1.48 8.48-4.93.99-2.55.77-5.36-.61-7.71l-1.36-2.33c-.22-.38-.09-.86.28-1.08.38-.22.86-.09 1.08.28l1.36 2.33c1.62 2.76 1.88 6.06.72 9.06-1.57 4.05-5.67 6.43-9.95 6.43zM12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.38.2.4.03.88-.37 1.08-.4.2-.88.03-1.08-.37A11.96 11.96 0 010 12C0 5.37 5.37 0 12 0s12 5.37 12 12c0 2.21-.6 4.35-1.74 6.22-.22.37-.71.49-1.08.27-.37-.22-.49-.71-.27-1.08C21.89 15.77 22 13.9 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "Linux & Nginx",
      desc: "Reverse Proxy • SSL Hardened • 99.999% SLA",
      tag: "INFRASTRUCTURE",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      logo: (
        <svg className="w-7 h-7 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.077 17.432H8.385V6.568h2.538l4.693 7.025V6.568h2.538v10.864h-2.538l-4.693-7.025v7.025z" />
        </svg>
      ),
    },
    {
      name: "Redis",
      desc: "Sub-Millisecond Cache & Pub/Sub Brokers",
      tag: "CACHING",
      badgeBg: "bg-rose-50 border-rose-200 text-rose-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#DC382D">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.6 3.8-7.6 3.8L4.4 8 12 4.2zm-8 5.6l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
        </svg>
      ),
    },
    {
      name: "LangGraph",
      desc: "Milvus Vector DB • Multi-Agent Automation",
      tag: "AI ARCHITECTURE",
      badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
      logo: (
        <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
        </svg>
      ),
    },
    {
      name: "Power BI",
      desc: "DAX Analytics • Real-Time Financial HUD",
      tag: "DATA WAREHOUSE",
      badgeBg: "bg-yellow-50 border-yellow-200 text-yellow-800",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path fill="#F2C811" d="M18.5 2H15a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <path fill="#E6AD10" d="M13 7H9.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
          <path fill="#C98A0C" d="M7.5 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
        </svg>
      ),
    },
    {
      name: "Flutter",
      desc: "iOS & Android • 120Hz Native UI • SQLite",
      tag: "MOBILE APPS",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
          <path fill="#0175C2" d="M14.286 11.5L7.7 18.1 11.4 21.8 21.686 11.5h-7.4z" />
          <path fill="#0284C7" d="M7.7 18.1l3.7 3.7 3.7-3.7-3.7-3.7-3.7 3.7z" />
        </svg>
      ),
    },
    {
      name: "Algorithmic SEO",
      desc: "JSON-LD Schema • Core Web Vitals • Page 1",
      tag: "SERP RANK",
      badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
      logo: (
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.66-5.17 3.66-9.12z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.26 21.36 7.34 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
        </svg>
      ),
    },
  ];

  // Tripled list for infinite horizontal drift
  const marqueeList = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 text-slate-900 border-y border-slate-200 py-6 sm:py-8 select-none z-10">
      {/* Background Engineering Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4 sm:mb-5 text-center">
        {/* Section Title: Technology We Use */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-1.5">
          <KineticText
            text="TECHNOLOGY"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-slate-950 cursor-default"
          />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-blue-600 underline decoration-yellow-400 decoration-wavy">
            WE USE
          </span>
        </div>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          Battle-tested modern languages, frameworks, cloud platforms, and AI engines engineered for ultra-fast response and 99.999% SLA reliability.
        </p>
      </div>

      {/* Marquee Carousel Container - Tightened Height */}
      <div className="relative w-full overflow-hidden py-1.5">
        {/* Edge Fade Masks for Smooth Infinite Drift */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center gap-4 sm:gap-5 relative z-10">
          {marqueeList.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-xs group cursor-pointer"
            >
              {/* Authentic Real Brand SVG Icon */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200/80 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>

              {/* Title & Technical Role */}
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </span>
                  <span className={`inline-flex items-center text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-2xs ${tech.badgeBg}`}>
                    {tech.tag}
                  </span>
                </div>
                <span className="text-[11px] font-sans text-slate-500 mt-0.5 whitespace-nowrap font-medium">
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
