"use client";

import React from "react";
import {
  ArrowRight,
  Play,
} from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";
import { NumberTicker } from "./ui/number-ticker";
import { SparklesText } from "./ui/sparkles-text";
import { LiquidMetalButton } from "./ui/liquid-metal";
import { Iphone } from "@/registry/magicui/iphone";
import { KineticText } from "@/registry/magicui/kinetic-text";

interface HeroSectionProps {
  onReplayIntro?: () => void;
  inkTheme?: "paper" | "obsidian" | "cyanotype";
}

export default function HeroSection({ onReplayIntro }: HeroSectionProps = {}) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#060913] text-white overflow-hidden border-b-2 border-cyan-500/20 select-none">
      {/* Curated Atmospheric Unsplash Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 contrast-105 saturate-110 pointer-events-none transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=90&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/60 via-[#060913]/40 to-[#060913]/90 pointer-events-none" />

      {/* Main Hero Container: Left Content + Right-Hand Side iPhone */}
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
              At <strong className="text-white font-semibold">IT PROGRAMMER SOLUTION</strong>, we architect dedicated cloud servers, edge computing networks, and mission-critical web applications with sub-300ms global latency, automated failover clusters, and 99.999% SLA integrity.
            </p>

            {/* Executive Action Buttons */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
              <LiquidMetalButton
                href="#plan"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#065f46",
                  colorTint: "#34d399",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-mono text-xs font-bold"
                rightIcon={<ArrowRight className="w-4 h-4 text-emerald-400" />}
              >
                GET STARTED
              </LiquidMetalButton>

              <LiquidMetalButton
                href="#work"
                size="md"
                borderWidth={2}
                metalConfig={{
                  colorBack: "#1e3a8a",
                  colorTint: "#60a5fa",
                  speed: 0.5,
                  distortion: 0.16,
                }}
                innerClassName="bg-slate-900 text-white font-mono text-xs font-bold"
                icon={<Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />}
              >
                VIEW WORK
              </LiquidMetalButton>
            </div>
          </div>

          {/* Right Column: 3-Device Fanned iPhone Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end py-6 overflow-visible">
            <div className="relative group flex items-center justify-center">
              {/* Subtle Tech Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-emerald-400/15 to-yellow-400/25 blur-3xl rounded-full scale-125 pointer-events-none" />

              {/* Left iPhone - Tilted Left behind middle (Pacific Blue Titanium) */}
              <div className="absolute -left-10 sm:-left-16 top-4 sm:top-6 w-[155px] sm:w-[185px] lg:w-[200px] -rotate-12 -translate-y-1 opacity-75 sm:opacity-85 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter transition-all duration-500 group-hover:-translate-x-3 group-hover:-rotate-[15deg] group-hover:opacity-95 z-10 pointer-events-none">
                <Iphone
                  frameColor="blue"
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=85&w=900&h=1800&auto=format&fit=crop"
                />
              </div>

              {/* Right iPhone - Tilted Right behind middle (Desert Gold Titanium) */}
              <div className="absolute -right-10 sm:-right-16 top-4 sm:top-6 w-[155px] sm:w-[185px] lg:w-[200px] rotate-12 -translate-y-1 opacity-75 sm:opacity-85 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter transition-all duration-500 group-hover:translate-x-3 group-hover:rotate-[15deg] group-hover:opacity-95 z-10 pointer-events-none">
                <Iphone
                  frameColor="gold"
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=85&w=900&h=1800&auto=format&fit=crop"
                />
              </div>

              {/* Center iPhone - Front Focus (Pure White Titanium) */}
              <div className="relative z-20 w-[175px] sm:w-[210px] lg:w-[230px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter transition-all duration-300 group-hover:scale-[1.03]">
                <Iphone
                  frameColor="white"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=900&h=1800&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Stats Token Badges at Bottom */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {[
            {
              value: 2,
              suffix: "",
              label: "PROJECTS COMPLETED",
              badge: "PRODUCTION",
              color: "text-emerald-400",
            },
            {
              value: 2,
              suffix: "",
              label: "HAPPY CLIENTS",
              badge: "VERIFIED",
              color: "text-cyan-400",
            },
            {
              value: 99.99,
              decimals: 2,
              suffix: "%",
              label: "SERVER UPTIME SLA",
              badge: "HIGH AVAILABILITY",
              color: "text-yellow-400",
            },
            {
              value: 0.38,
              decimals: 2,
              suffix: "s",
              label: "GLOBAL EDGE FCP",
              badge: "100/100 CWV",
              color: "text-rose-400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 bg-[#0c1322]/90 backdrop-blur-md shadow-lg hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-2xl sm:text-3xl font-black font-heading tracking-tight ${item.color}`}>
                  <NumberTicker
                    value={item.value}
                    decimalPlaces={item.decimals ?? 0}
                    className={`font-heading ${item.color}`}
                  />
                  {item.suffix}
                </span>
                <span className="text-[9px] font-heading font-semibold px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>
              <div className="text-[11px] font-heading font-semibold text-slate-400 tracking-wide mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
