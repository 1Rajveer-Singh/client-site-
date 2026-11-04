"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanOfWork from "@/components/PlanOfWork";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Sparkles, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function PlanPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Plan Hero Header with Animated Grid Pixel Reveal Blueprint Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#060913] text-white overflow-hidden border-b-2 border-purple-500/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-85 contrast-105 saturate-110"
            imageClassName="object-cover object-center w-full h-full"
            alt="Plan Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/55 via-[#060913]/35 to-[#060913]/90 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight">
            <KineticText text="THE 6-STAGE" as="span" className="inline-block" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-300 to-cyan-400">
              PLAN OF WORK
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base font-sans text-slate-200 leading-relaxed font-normal">
            Eliminate project uncertainty with a proven, milestone-driven execution pipeline. From initial discovery and research reports to zero-downtime deployment and 24/7 telemetry monitoring.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LiquidMetalButton
              href="/contact"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#581c87",
                colorTint: "#c084fc",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-heading text-xs font-bold"
              rightIcon={<ArrowRight className="w-4 h-4 text-purple-300" />}
            >
              START STAGE 01 BLUEPRINT
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* 9 Stages Interactive Component */}
      <PlanOfWork />

      <Footer />
    </main>
  );
}
