"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientTestimonials from "@/components/ClientTestimonials";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Star, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function TestimonialsPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Testimonials Hero Header with Animated Grid Pixel Reveal Leadership Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#060913] text-white overflow-hidden border-b-2 border-yellow-500/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-95 contrast-105 saturate-110"
            imageClassName="object-cover object-center w-full h-full"
            alt="Testimonials Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/40 via-[#060913]/25 to-[#060913]/85 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight break-normal [text-wrap:balance]">
            <KineticText text="WHAT ENGINEERING LEADERS" as="span" className="inline-block break-normal [text-wrap:balance]" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-rose-300 to-cyan-400 break-normal [text-wrap:balance]">
              SAY ABOUT OUR WORK
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base font-sans text-slate-200 leading-relaxed font-normal">
            Read direct feedback from CTOs, product directors, and founders who partnered with Rajveer Singh | Developer to eliminate technical debt and deploy scalable digital systems.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LiquidMetalButton
              href="/contact"
              size="md"
              borderWidth={2}
              metalConfig={{
                colorBack: "#78350f",
                colorTint: "#fde047",
                speed: 0.5,
                distortion: 0.16,
              }}
              innerClassName="bg-slate-900 text-white font-heading text-xs font-bold"
              rightIcon={<ArrowRight className="w-4 h-4 text-yellow-400" />}
            >
              BECOME OUR NEXT SUCCESS STORY
            </LiquidMetalButton>
          </div>
        </div>
      </section>

      {/* Interactive Testimonial Section with Photos and Auto-Shuffle */}
      <ClientTestimonials />

      <Footer />
    </main>
  );
}
