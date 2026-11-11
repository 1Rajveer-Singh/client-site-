"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWork from "@/components/ClientWork";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ArrowRight, ExternalLink } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function WorkPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Work Hero Header with Animated Grid Pixel Reveal Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#060913] text-white overflow-hidden border-b-2 border-emerald-500/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-90 contrast-110 saturate-115"
            imageClassName="object-cover object-center w-full h-full"
            alt="Work Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/40 via-[#060913]/25 to-[#060913]/85 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight break-normal [text-wrap:balance]">
            <KineticText text="OUR CLIENT" as="span" className="inline-block break-normal [text-wrap:balance]" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-300 break-normal [text-wrap:balance]">
              PRODUCTION WORK
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base font-sans text-slate-200 leading-relaxed font-normal">
            Real software deployed to global production. Review our featured academic publishing infrastructure, sub-400ms performance metrics, and zero-downtime uptime records.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LiquidMetalButton
              href="https://www.mauryaerf.com/"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#065f46",
                colorTint: "#34d399",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-heading text-xs font-bold"
              rightIcon={<ExternalLink className="w-4 h-4 text-emerald-400" />}
            >
              LAUNCH MAURYA ERF PLATFORM
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* Featured Showcase (Matches Plan of Work card sizing) */}
      <ClientWork />

      <Footer />
    </main>
  );
}
