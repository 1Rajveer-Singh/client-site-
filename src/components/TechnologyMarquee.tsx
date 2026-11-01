"use client";

import React from "react";

export default function TechnologyMarquee() {
  const technologies = [
    {
      name: "Next.js Application",
      desc: "App Router • Server Actions • Multi-Region Edge Caching",
      tag: "FULL-STACK",
      badgeBg: "bg-slate-100 border-slate-300 text-black",
      logo: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 180 180" fill="currentColor">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z" fill="#fff" />
          <rect x="115" y="54" width="12" height="72" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Mobile Apps",
      desc: "Flutter & React Native • iOS & Android • 120Hz Native UI",
      tag: "MOBILE DEV",
      badgeBg: "bg-sky-50 border-sky-200 text-sky-800",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
          <path fill="#0175C2" d="M14.286 11.5L7.7 18.1 11.4 21.8 21.686 11.5h-7.4z" />
          <path fill="#29B6F6" d="M7.7 18.1l3.7 3.7 3.7-3.7-3.7-3.7-3.7 3.7z" />
        </svg>
      ),
    },
    {
      name: "Nginx",
      desc: "Bare-Metal Linux • Reverse Proxy • SSL / 99.999% SLA",
      tag: "INFRASTRUCTURE",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
      logo: (
        <svg className="w-6 h-6 text-[#009639]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.077 17.432H8.385V6.568h2.538l4.693 7.025V6.568h2.538v10.864h-2.538l-4.693-7.025v7.025z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      desc: "Microservices • CI/CD Pipelines • Container Isolation",
      tag: "CONTAINERS",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-800",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 5.428h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.929 5.428h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.215a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm19.345-1.077c-.456-.347-1.168-.456-1.85-.347-.193-.526-.549-.974-1.01-1.282l-.464-.316-.316.463c-.347.509-.494 1.129-.425 1.745-.632.147-1.783.587-2.394 1.482-.316.463-.378.989-.316 1.482H.416a.417.417 0 00-.416.417 6.44 6.44 0 001.328 3.967 11.233 11.233 0 006.753 4.137c5.297.872 10.457-1.391 13.066-5.758a6.398 6.398 0 00.91-3.328c0-.98-.27-1.923-.746-2.664z" />
        </svg>
      ),
    },
    {
      name: "N8N Automation",
      desc: "Self-Hosted Workflows • Webhooks • Autonomous AI Agents",
      tag: "AUTOMATION",
      badgeBg: "bg-rose-50 border-rose-200 text-rose-800",
      logo: (
        <svg className="w-7 h-5" viewBox="0 0 228 120" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71" />
        </svg>
      ),
    },
    {
      name: "Power Bi Dashboard",
      desc: "Real-Time KPI Dashboards • DAX Modeling • Executive Telemetry",
      tag: "ANALYTICS",
      badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#F2C811" d="M18.5 2H15a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <path fill="#E6AD10" d="M13 7H9.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
          <path fill="#C98A0C" d="M7.5 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
        </svg>
      ),
    },
    {
      name: "SEO Optimization",
      desc: "JSON-LD Structured Data • Core Web Vitals • Page 1 Dominance",
      tag: "GROWTH & SERP",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
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
    <div className="relative w-full overflow-hidden bg-[#fefce8] border-y-2 border-amber-300/70 py-6 select-none z-10 shadow-[inset_0_1px_0_rgba(251,191,36,0.3),0_6px_20px_rgba(245,158,11,0.08)]">
      {/* Sleek edge fade masks in lite yellow */}
      <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#fefce8] via-[#fefce8]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#fefce8] via-[#fefce8]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track: Smooth right to left scrolling with Real Brand Logos */}
      <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center gap-6">
        {marqueeList.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/90 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
          >
            {/* Real Logo inside stylized card */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200/80 shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {tech.logo}
            </div>

            {/* Typographic Content */}
            <div className="flex flex-col text-left pr-3">
              <div className="flex items-center gap-2.5">
                <span className="font-heading font-black text-sm sm:text-base text-slate-900 tracking-wide group-hover:text-amber-700 transition-colors">
                  {tech.name}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${tech.badgeBg}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {tech.tag}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-600 mt-1 whitespace-nowrap font-medium tracking-tight">
                {tech.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
