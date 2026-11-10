"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyIntro from "@/components/CompanyIntro";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlanOfWork from "@/components/PlanOfWork";
import ClientWork from "@/components/ClientWork";
import ClientTestimonials from "@/components/ClientTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      {/* Magic UI Physics-Based Smooth Cursor */}
      <SmoothCursor />

      {/* Neutral Header & Navigation */}
      <Navbar />
      
      {/* Hero Section with CTAs: Get Started & Explore Our Services */}
      <HeroSection />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Interactive Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* 6-Stage Plan of Work with Images */}
      <PlanOfWork />

      {/* Featured Projects */}
      <ClientWork />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Final High-Converting CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
