"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import {
  IconCodeOwnership,
  IconSpeedBenchmark,
  IconAiAutomation,
  IconSlaSupport,
} from "@/components/icons/SvgRepoCollections";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story & Proof Grid */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 text-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1200&auto=format&fit=crop"
                alt="Engineering Team Collaboration"
                className="w-full h-80 object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
            </div>
          </div>

          {/* Right Column: Mission & Company Introduction */}
          <div className="lg:col-span-7 flex flex-col text-left order-1 lg:order-2">
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight">
                ABOUT RAJVEER SINGH
              </h2>
            </div>

            <p className="mt-2 text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
              We are an engineering-led digital solutions company dedicated to enabling businesses to leverage technology to enhance performance, drive innovation, and operate more efficiently. We specialize in designing, developing, and scaling reliable digital solutions tailored to your business needs.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Unlike traditional agencies with multiple layers of communication, we believe in direct collaboration, technical expertise, and transparent execution. You work directly with the people responsible for bringing your ideas to life, ensuring a clear development process, thoughtful solutions, and quality-driven results.
            </p>

            {/* Core Value Pillars - Rich Business Vectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/80 flex items-center justify-center shrink-0 border border-emerald-200/90 shadow-2xs">
                  <IconCodeOwnership className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">100% Code Ownership</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">Full IP transfer upon delivery with zero proprietary lock-in.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 border border-blue-200/90 shadow-2xs">
                  <IconSpeedBenchmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Sub-300ms Global Benchmarks</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">Optimized for Core Web Vitals and 60FPS fluid interactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50/80 flex items-center justify-center shrink-0 border border-purple-200/90 shadow-2xs">
                  <IconAiAutomation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Modern AI Integration</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">LangGraph & Milvus RAG agents for real business automation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 flex items-center justify-center shrink-0 border border-amber-200/90 shadow-2xs">
                  <IconSlaSupport className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Continuous SLA Support</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">24/7 telemetry monitoring and proactive security hardening.</p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 font-heading group"
              >
                <span>Learn more about our engineering services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

