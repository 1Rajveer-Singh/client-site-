"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TechnologyMarquee() {
  const technologies = [
    {
      name: "Next.js 16",
      desc: "App Router • React 19 • Edge Prerender",
      tag: "FULL-STACK",
      badgeBg: "bg-slate-100 border-slate-200 text-slate-800",
      logo: (
        <svg className="w-6 h-6 text-slate-900" viewBox="0 0 180 180" fill="currentColor">
          <circle cx="90" cy="90" r="90" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4" />
          <path d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z" fill="#fff" />
          <rect x="115" y="54" width="12" height="72" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Docker Engine",
      desc: "Microservices • CI/CD Pipelines • Isolation",
      tag: "CONTAINERS",
      badgeBg: "bg-sky-50 border-sky-200 text-sky-700",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0284C7">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 5.428h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.929 5.428h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.215a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm19.345-1.077c-.456-.347-1.168-.456-1.85-.347-.193-.526-.549-.974-1.01-1.282l-.464-.316-.316.463c-.347.509-.494 1.129-.425 1.745-.632.147-1.783.587-2.394 1.482-.316.463-.378.989-.316 1.482H.416a.417.417 0 00-.416.417 6.44 6.44 0 001.328 3.967 11.233 11.233 0 006.753 4.137c5.297.872 10.457-1.391 13.066-5.758a6.398 6.398 0 00.91-3.328c0-.98-.27-1.923-.746-2.664z" />
        </svg>
      ),
    },
    {
      name: "Linux & Nginx",
      desc: "Reverse Proxy • SSL Hardened • 99.999% SLA",
      tag: "INFRASTRUCTURE",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      logo: (
        <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.077 17.432H8.385V6.568h2.538l4.693 7.025V6.568h2.538v10.864h-2.538l-4.693-7.025v7.025z" />
        </svg>
      ),
    },
    {
      name: "LangGraph & AI RAG",
      desc: "Milvus Vector DB • Multi-Agent Automation",
      tag: "AI ARCHITECTURE",
      badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
      logo: (
        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
        </svg>
      ),
    },
    {
      name: "Python & FastAPI",
      desc: "Sub-30ms Asynchronous Telemetry Pipelines",
      tag: "BACKEND API",
      badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 1.5c-3.1 0-5.3 1.3-5.3 3.8v2.8h5.5v.8H3.8c-2.4 0-3.8 2-3.8 5.1s1.3 5.3 3.8 5.3h2.3v-3.2c0-2.3 2-4.2 4.3-4.2h5.5v-4.8c0-3.1-2.4-4.8-4-4.8zm-2 2.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#0284C7" />
          <path d="M12.1 22.5c3.1 0 5.3-1.3 5.3-3.8v-2.8h-5.5v-.8h8.3c2.4 0 3.8-2 3.8-5.1s-1.3-5.3-3.8-5.3h-2.3v3.2c0 2.3-2 4.2-4.3 4.2h-5.5v4.8c0 3.1 2.4 4.8 4 4.8zm2-2.3c-.7 0-1.2-.6-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#D97706" />
        </svg>
      ),
    },
    {
      name: "Flutter & React Native",
      desc: "iOS & Android • 120Hz Native UI • SQLite",
      tag: "MOBILE APPS",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
          <path fill="#0175C2" d="M14.286 11.5L7.7 18.1 11.4 21.8 21.686 11.5h-7.4z" />
          <path fill="#0284C7" d="M7.7 18.1l3.7 3.7 3.7-3.7-3.7-3.7-3.7 3.7z" />
        </svg>
      ),
    },
    {
      name: "N8N Orchestration",
      desc: "Self-Hosted Workflows • Webhooks • Cron",
      tag: "AUTOMATION",
      badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
      logo: (
        <svg className="w-7 h-5" viewBox="0 0 228 120" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#E11D48" />
        </svg>
      ),
    },
    {
      name: "Power BI Telemetry",
      desc: "DAX Analytics • Real-Time Financial HUD",
      tag: "DATA WAREHOUSE",
      badgeBg: "bg-yellow-50 border-yellow-200 text-yellow-800",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#F2C811" d="M18.5 2H15a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <path fill="#E6AD10" d="M13 7H9.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
          <path fill="#C98A0C" d="M7.5 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
        </svg>
      ),
    },
    {
      name: "Algorithmic SEO",
      desc: "JSON-LD Schema • Core Web Vitals • Page 1",
      tag: "GROWTH & SERP",
      badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.66-5.17 3.66-9.12z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.26 21.36 7.34 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
        </svg>
      ),
    },
  ];

  // Duplicate for smooth seamless infinite horizontal scroll
  const marqueeList = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 text-slate-900 border-y border-slate-200/90 py-12 select-none z-10">
      {/* Subtle Ambient Engineering Glow & Micro-Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.06),transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Eyebrow Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span>ENTERPRISE TECHNOLOGY STACK • ARCHITECTED FOR 99.999% SLA PRODUCTION</span>
        </div>
      </div>

      {/* Sleek edge fade masks for smooth infinite flow matching light background */}
      <div className="absolute left-0 inset-y-0 w-28 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-28 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none" />

      {/* Marquee Track: Smooth right to left scrolling with Real Brand Logos and Light Cards */}
      <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center gap-5 sm:gap-6 relative z-10">
        {marqueeList.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.12),0_8px_10px_-6px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 shadow-xs group cursor-pointer"
          >
            {/* Logo container */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 border border-slate-100 shadow-2xs group-hover:bg-slate-100/80 group-hover:scale-105 transition-all duration-300">
              {tech.logo}
            </div>

            {/* Typographic Content */}
            <div className="flex flex-col text-left pr-2">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-sm text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors">
                  {tech.name}
                </span>
                <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-2xs ${tech.badgeBg}`}>
                  {tech.tag}
                </span>
              </div>
              <span className="text-[11px] font-sans text-slate-500 mt-1 whitespace-nowrap font-medium tracking-normal">
                {tech.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
