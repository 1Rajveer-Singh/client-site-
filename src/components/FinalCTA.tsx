"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800/80">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Headline */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-4">
          <KineticText
            text="Ready to build your"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-heading text-white tracking-tight cursor-default"
          />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-heading text-slate-100 tracking-tight">
            digital infrastructure?
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
          Partner directly with Rajveer Singh to architect reliable cloud infrastructure, full-stack web applications, and autonomous automation workflows.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 transition-colors shadow-xs"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-slate-300 font-medium text-xs sm:text-sm bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <span>View technical services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

