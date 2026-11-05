"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      {/* Subtle tech ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Headline */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
          <KineticText
            text="READY TO SCALE YOUR"
            as="h2"
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight cursor-default"
          />
          <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
            DIGITAL INFRASTRUCTURE?
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          Partner directly with Rajveer Singh to architect high-availability cloud servers, Next.js 16 web applications, and autonomous AI automation systems built for measurable enterprise growth.
        </p>

        {/* Action CTAs: Get Started & Explore Our Services - One Single Row */}
        <div className="mt-7 sm:mt-9 flex flex-row items-center justify-center gap-2.5 sm:gap-4 flex-nowrap w-full">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-heading text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-98 transition-all whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3 sm:py-4 rounded-xl text-slate-200 font-heading text-xs sm:text-sm font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all shadow-sm whitespace-nowrap"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

