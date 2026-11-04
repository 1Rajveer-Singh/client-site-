"use client";

import React from "react";
import {
  ArrowRight,
  Play,
  Search,
  Bot,
  Smartphone,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";
import { NumberTicker } from "./ui/number-ticker";
import { SparklesText } from "./ui/sparkles-text";
import { LiquidMetalButton } from "./ui/liquid-metal";
import { Iphone } from "@/registry/magicui/iphone";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

interface HeroSectionProps {
  onReplayIntro?: () => void;
  inkTheme?: "paper" | "obsidian" | "cyanotype";
}

export default function HeroSection({ onReplayIntro }: HeroSectionProps = {}) {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#050814] text-white overflow-hidden border-b-2 border-cyan-500/20 select-none">
      {/* Dynamic Technological Grid Background with Pixel Reveal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PixelImage
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=95&w=2560&auto=format&fit=crop"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation
          className="w-full h-full opacity-70 contrast-125 saturate-130"
          imageClassName="object-cover object-center w-full h-full"
          alt="Rajveer Singh Developer Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/80 via-[#050814]/45 to-[#050814]/95 pointer-events-none" />
      </div>

      {/* Main Hero Container: Left Content + Right-Hand Side 3-iPhone Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <KineticText
                text="LEVEL UP YOUR"
                as="h1"
                className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight cursor-default"
              />
              <SparklesText
                className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-400 inline-block mt-1 sm:mt-2"
                sparklesCount={8}
                colors={{ first: "#facc15", second: "#38bdf8" }}
              >
                DIGITAL EMPIRE.
              </SparklesText>
            </div>

            {/* Dynamic Typewriter Sub-headline */}
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2.5 font-sans text-sm sm:text-base text-slate-300">
              <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase shrink-0">[SPECIALTY]:</span>
              <TypingAnimation
                words={[
                  "High-Availability Cloud Servers",
                  "Next.js 16 Web Engineering",
                  "Autonomous AI Agent Swarms",
                  "Algorithmic SEO Optimization",
                  "Cross-Platform Mobile Apps",
                ]}
                loop={true}
                className="font-bold text-white font-sans"
              />
            </div>

            {/* Mission Description */}
            <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base font-sans text-slate-200 leading-relaxed font-normal">
              At <strong className="text-white font-semibold">Rajveer Singh | Developer</strong>, we architect dedicated cloud servers, edge computing networks, and mission-critical web applications with sub-300ms global latency, automated failover clusters, and 99.999% SLA integrity.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
              <LiquidMetalButton
                href="/contact"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#065f46",
                  colorTint: "#34d399",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide"
                rightIcon={<ArrowRight className="w-4 h-4 text-emerald-400" />}
              >
                Get Started
              </LiquidMetalButton>

              <LiquidMetalButton
                href="/services"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#1e3a8a",
                  colorTint: "#60a5fa",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-sans text-xs sm:text-sm font-bold tracking-wide"
                icon={<Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />}
              >
                Explore Our Services
              </LiquidMetalButton>
            </div>
          </div>

          {/* Right Column: 3-Device Fanned iPhone Showcase with High-Impact Visuals */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end py-6 overflow-visible">
            <div className="relative group flex items-center justify-center">
              {/* Subtle Tech Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-purple-500/25 blur-3xl rounded-full scale-125 pointer-events-none" />

              {/* Left iPhone: SEO & Google Search Metrics (Pacific Blue Titanium Frame) */}
              <div className="absolute -left-10 sm:-left-16 top-4 sm:top-6 w-[155px] sm:w-[185px] lg:w-[200px] -rotate-12 -translate-y-1 opacity-80 sm:opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter transition-all duration-500 group-hover:-translate-x-3 group-hover:-rotate-[15deg] group-hover:opacity-100 z-10 pointer-events-none">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-blue-600/95 text-white text-[9px] font-bold shadow-lg border border-blue-400/50 backdrop-blur-md flex items-center gap-1 shrink-0 z-30">
                    <Search className="w-2.5 h-2.5 text-cyan-300" />
                    <span className="font-heading">SEO Rank #1</span>
                  </div>
                  <Iphone
                    frameColor="blue"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=900&h=1800&auto=format&fit=crop"
                  />
                </div>
              </div>

              {/* Right iPhone: Cross-Platform Mobile App & Telemetry (Desert Gold Titanium Frame) */}
              <div className="absolute -right-10 sm:-right-16 top-4 sm:top-6 w-[155px] sm:w-[185px] lg:w-[200px] rotate-12 -translate-y-1 opacity-80 sm:opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter transition-all duration-500 group-hover:translate-x-3 group-hover:rotate-[15deg] group-hover:opacity-100 z-10 pointer-events-none">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-purple-600/95 text-white text-[9px] font-bold shadow-lg border border-purple-400/50 backdrop-blur-md flex items-center gap-1 shrink-0 z-30">
                    <Smartphone className="w-2.5 h-2.5 text-purple-200" />
                    <span className="font-heading">Mobile App Core</span>
                  </div>
                  <Iphone
                    frameColor="gold"
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=90&w=900&h=1800&auto=format&fit=crop"
                  />
                </div>
              </div>

              {/* Center iPhone: Autonomous AI RAG Chatbot (Space Black Titanium Frame) */}
              <div className="relative z-20 w-[175px] sm:w-[210px] lg:w-[230px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter transition-all duration-300 group-hover:scale-[1.03]">
                <div className="relative">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[10px] font-bold shadow-xl border border-cyan-300/40 backdrop-blur-md flex items-center gap-1.5 shrink-0 z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <Bot className="w-3 h-3 text-cyan-200" />
                    <span className="font-heading">AI RAG Copilot</span>
                  </div>
                  <Iphone
                    frameColor="black"
                    src="https://images.unsplash.com/photo-1677442136019-21780efad99a?q=90&w=900&h=1800&auto=format&fit=crop"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width KPI Metrics Matrix with increased spacing between items and compact small card size */}
        <div className="w-full mt-16 sm:mt-20 pt-8 border-t border-slate-800/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full text-left">
            {[
              {
                value: 50,
                suffix: "+",
                label: "PROJECTS DELIVERED",
                badge: "PRODUCTION READY",
                desc: "High-performance enterprise systems",
                color: "text-emerald-400",
                borderColor: "hover:border-emerald-500/50",
              },
              {
                value: 100,
                suffix: "+",
                label: "HAPPY CLIENTS",
                badge: "GLOBAL PARTNERS",
                desc: "Across USA, Europe & Asia Pacific",
                color: "text-cyan-400",
                borderColor: "hover:border-cyan-500/50",
              },
              {
                value: 99.99,
                decimals: 2,
                suffix: "%",
                label: "SERVER UPTIME SLA",
                badge: "HIGH AVAILABILITY",
                desc: "Contractual zero-downtime integrity",
                color: "text-yellow-400",
                borderColor: "hover:border-yellow-500/50",
              },
              {
                value: 0.38,
                decimals: 2,
                suffix: "s",
                label: "GLOBAL EDGE FCP",
                badge: "100/100 CWV",
                desc: "Sub-300ms First Contentful Paint",
                color: "text-rose-400",
                borderColor: "hover:border-rose-500/50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col justify-between border border-slate-800/80 bg-[#0c1322]/75 backdrop-blur-md shadow-md hover:-translate-y-1 transition-all duration-300 group ${item.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700/70 tracking-wider">
                      {item.badge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className={`text-xl sm:text-2xl font-black font-heading tracking-tight ${item.color} mt-1`}>
                    <NumberTicker
                      value={item.value}
                      decimalPlaces={item.decimals ?? 0}
                      className={`font-heading ${item.color}`}
                    />
                    {item.suffix}
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/60">
                  <div className="text-[10px] sm:text-[11px] font-heading font-extrabold text-slate-200 tracking-wider">
                    {item.label}
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5 leading-tight truncate">
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
