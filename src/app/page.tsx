"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import PlanOfWork from "@/components/PlanOfWork";
import ClientWork from "@/components/ClientWork";
import ClientTestimonials from "@/components/ClientTestimonials";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Magic UI Physics-Based Smooth Cursor */}
      <SmoothCursor />

      {/* Normal Website View - Immediate Load Without Reload Animation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Technology Marquee (Right to Left): Web Dev, SEO, Power BI, Next.js, AI Agents */}
      <TechnologyMarquee />

      {/* Clean White Background Sections */}
      <PlanOfWork />
      <ClientWork />
      <ClientTestimonials />
      <Footer />
    </main>
  );
}
