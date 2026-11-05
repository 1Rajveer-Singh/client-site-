"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import NeonBorder from "@/components/ui/neon-border";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story & Proof Grid */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <NeonBorder
              borderRadius={24}
              color="#00e5ff"
              secondaryColor="#3b82f6"
              trackColor="rgba(255, 255, 255, 0.12)"
              borderWidth={2}
              duration={5}
              glow={1.3}
              containerClassName="w-full"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 text-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1200&auto=format&fit=crop"
                  alt="Engineering Team Collaboration"
                  className="w-full h-80 object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                {/* Floating Stat Overlay */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="text-xl sm:text-2xl font-black font-heading text-white block">99.999%</span>
                      <span className="text-[10px] text-slate-300 font-sans uppercase">SLA Uptime</span>
                    </div>
                    <div className="border-x border-white/20">
                      <span className="text-xl sm:text-2xl font-black font-heading text-cyan-300 block">&lt;300ms</span>
                      <span className="text-[10px] text-slate-300 font-sans uppercase">Global Speed</span>
                    </div>
                    <div>
                      <span className="text-xl sm:text-2xl font-black font-heading text-emerald-300 block">50+</span>
                      <span className="text-[10px] text-slate-300 font-sans uppercase">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </NeonBorder>

            {/* Accent Card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block font-heading">Senior Full-Stack Architect</span>
                <span className="text-[11px] text-slate-500 font-sans">End-to-End Delivery & Zero Tech Debt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Company Introduction */}
          <div className="lg:col-span-7 flex flex-col text-left order-1 lg:order-2">
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <KineticText
                text="ABOUT RAJVEER SINGH"
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-950 tracking-tight cursor-default"
              />
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              We are an engineering-first digital studio and architecture practice founded by <strong>Rajveer Singh</strong>. We specialize in designing, engineering, and scaling resilient digital solutions for ambitious startups and global enterprises.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Unlike traditional agencies that pass your project through layers of non-technical account managers, we provide direct senior architectural expertise. From bare-metal high-availability Linux clusters and Next.js 16 full-stack systems to autonomous AI multi-agent pipelines, every line of code is engineered for speed, security, and measurable ROI.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">100% Code Ownership</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">Full IP transfer upon delivery with zero proprietary lock-in.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Sub-300ms Global Benchmarks</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">Optimized for Core Web Vitals and 60FPS fluid interactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Modern AI Integration</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">LangGraph & Milvus RAG agents for real business automation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <CheckCircle2 className="w-4 h-4" />
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

