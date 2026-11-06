"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { NumberTicker } from "./ui/number-ticker";
import CobaltSprite from "./ui/cobalt-sprite";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";

interface HeroSectionProps {
  onReplayIntro?: () => void;
  inkTheme?: "paper" | "obsidian" | "cyanotype";
}

export default function HeroSection({ onReplayIntro }: HeroSectionProps = {}) {
  return (
    <section id="hero" className="hero-section relative flex items-center justify-center py-6 sm:py-8 lg:py-10 xl:py-12 bg-black text-white overflow-hidden border-b border-slate-900 select-none">
      {/* Background Deep Black with Crystal-Clear High-Intensity Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
        {/* Cinematic Cyber Tech Background Image - Maximum Optical Clarity & Contrast */}
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-100 brightness-135 contrast-130 saturate-135 pointer-events-none"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Ultra-soft hairline bottom blend so the section meets the marquee seamlessly */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: CONTENT (AUTO RESPONSIVE) ================= */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            {/* Main Headline with 3 distinct curated font styles */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
              <span className="whitespace-nowrap block">
                <span className="hero-font-1 text-white inline-block">TURN YOUR </span>
                <span className="hero-font-2 text-cyan-300 inline-block px-1">Ideas </span>
                <span className="hero-font-1 text-white inline-block">INTO</span>
              </span>
              <span className="hero-font-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 block mt-1 sm:mt-2">
                DIGITAL SOLUTIONS
              </span>
            </h1>

            {/* Subtitle / Description - Reduced height & tighter spacing on mobile */}
            <p className="mt-2 sm:mt-3 max-w-xl mx-auto lg:mx-0 text-xs sm:text-base text-slate-300 font-sans leading-snug sm:leading-relaxed">
              We architect high-availability cloud servers, Next.js 16 web applications, and autonomous AI automation systems built for measurable enterprise growth.
            </p>

            {/* CTA Buttons: Get Started & Explore Our Services - Strictly in One Single Row */}
            <div className="mt-4 sm:mt-5 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 flex-nowrap w-full">
              <LiquidMetalButton
                href="/contact"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#312e81",
                  colorTint: "#818cf8",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
                rightIcon={<ArrowRight className="w-4 h-4 text-indigo-400" />}
              >
                Get Started
              </LiquidMetalButton>

              <LiquidMetalButton
                href="/services"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#065f46",
                  colorTint: "#34d399",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide !px-3.5 sm:!px-6 !py-2 sm:!py-2.5 whitespace-nowrap"
                rightIcon={<ArrowRight className="w-4 h-4 text-emerald-400" />}
              >
                Explore Our Services
              </LiquidMetalButton>
            </div>

            {/* Next Row Perks - Strictly in One Row */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center lg:justify-start gap-2 sm:gap-6 text-[10px] xs:text-[11px] sm:text-xs text-slate-300 font-sans flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar">
              <span className="inline-flex items-center gap-1 shrink-0">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                Verified Delivery
              </span>
              <span className="inline-flex items-center gap-1 shrink-0">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                Modern Tech Stack
              </span>
              <span className="inline-flex items-center gap-1 shrink-0">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-400 shrink-0" />
                24/7 Dedicated Support
              </span>
            </div>
          </div>

          {/* ================= RIGHT VISUAL: ORIGINKIT COBALT SPRITE (AUTO RESPONSIVE) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-2">
            {/* Cobalt Sprite Container - Auto-scales to device resolution */}
            <div className="relative z-10 w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] xl:w-[370px] xl:h-[370px] max-w-full aspect-square flex items-center justify-center">
              {/* Subtle Tech Radial Glow */}
              <div className="absolute inset-0 bg-blue-600/15 blur-[120px] rounded-full scale-110 pointer-events-none" />

              {/* Cobalt Sprite WebGL Canvas with Pure Black Background */}
              <div className="w-full h-full relative z-20 flex items-center justify-center">
                <CobaltSprite
                  follow="page"
                  scale={90}
                  reach={10}
                  lean={10}
                  blink={10}
                  float={15}
                  spriteColor="#1400F6"
                  background="#000000"
                  frost={5}
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= FULL-WIDTH KPI METRICS (Glassmorphism & Strict 2x2 Grid) ================= */}
        <div className="w-full mt-7 sm:mt-10 pt-4 sm:pt-5 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-10 xl:gap-12 w-full text-left">
            {[
              {
                value: 10,
                suffix: "+",
                label: "HAPPY CLIENTS",
                badge: "GLOBAL TRUST",
                desc: "Trusted worldwide",
                color: "text-cyan-400",
                borderColor: "hover:border-cyan-400/50",
              },
              {
                value: 10,
                suffix: "+",
                label: "PROJECTS DELIVERED",
                badge: "PRODUCTION READY",
                desc: "Web, AI & Enterprise",
                color: "text-emerald-400",
                borderColor: "hover:border-emerald-400/50",
              },
              {
                value: 99.99,
                decimals: 2,
                suffix: "%",
                label: "SERVER UPTIME SLA",
                badge: "HIGH AVAILABILITY",
                desc: "Zero-downtime integrity",
                color: "text-violet-400",
                borderColor: "hover:border-violet-400/50",
              },
              {
                value: 24,
                suffix: "/7",
                label: "SUPPORT & MONITORING",
                badge: "ALWAYS ON",
                desc: "24/7 technical support",
                color: "text-amber-400",
                borderColor: "hover:border-amber-400/50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl px-3.5 py-3 sm:px-5 sm:py-4 flex flex-col justify-between border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/[0.08] hover:border-white/25 hover:-translate-y-1 transition-all duration-300 group ${item.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/15 backdrop-blur-sm tracking-wider">
                      {item.badge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className={`text-lg sm:text-2xl font-black font-heading tracking-tight ${item.color} mt-0.5 sm:mt-1`}>
                    <NumberTicker
                      value={item.value}
                      decimalPlaces={item.decimals ?? 0}
                      className={`font-heading ${item.color}`}
                    />
                    {item.suffix}
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10">
                  <div className="text-[9px] sm:text-[11px] font-heading font-extrabold text-slate-200 tracking-wider truncate">
                    {item.label}
                  </div>
                  <p className="text-[8.5px] sm:text-[10px] text-slate-400 font-sans mt-0.5 leading-tight truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
