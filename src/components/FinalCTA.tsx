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
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold font-heading uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

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

        {/* Action CTAs: Get Started & Explore Our Services */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-heading text-sm font-bold bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-98 transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-slate-200 font-heading text-sm font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>

        {/* Direct Contact & Response Guarantee */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs text-slate-400 font-sans">
          <a
            href="mailto:rakshitsingcse@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>rakshitsingcse@gmail.com</span>
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href="tel:+918529348446"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>+91 8529348446</span>
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="inline-flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Response within 2 Hours • 100% Mutual NDA</span>
          </div>
        </div>

      </div>
    </section>
  );
}

