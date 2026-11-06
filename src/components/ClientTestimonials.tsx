"use client";

import React from "react";
import {
  Sparkles,
} from "lucide-react";
import { NumberTicker } from "./ui/number-ticker";
import { AnimatedTestimonials, type TestimonialItem } from "./ui/animated-testimonials";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LiquidMetalButton } from "./ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";

export default function ClientTestimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Elena Rostova",
      designation: "Head of Growth, Instagram Automation",
      service: "Autonomous Lead & DM Pipeline",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      initials: "ER",
      rating: 5,
      quote:
        "Rajveer Singh engineered our 24/7 Instagram lead automation and webhook pipeline. Every comment, DM, and story mention is qualified within seconds and synced straight to our CRM. Our lead conversion jumped 4.8x and response latency is practically zero.",
      metric: "98.4% Open Rate // 4.8x Leads",
    },
    {
      name: "David Vance",
      designation: "Chief Product Officer, Automata AI Labs",
      service: "AI Agent Automation & Servers",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      initials: "DV",
      rating: 5,
      quote:
        "Their autonomous multi-agent swarm revolutionized our tier-1 support and financial routing. It resolves 74% of inquiries end-to-end with sub-40ms response latency, running on dedicated secure cloud instances that never fault.",
      metric: "74% Auto-Resolved // $480k Saved",
    },
    {
      name: "Marcus Thorne",
      designation: "Chief Marketing Officer, BioHealth Global",
      service: "SEO Optimization & Schema",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      initials: "MT",
      rating: 5,
      quote:
        "We spent a year trying to break through competitive organic search rankings. The team restructured our JSON-LD schema, fine-tuned our Core Web Vitals to a pure 100 Lighthouse score, and our organic traffic spiked by 420% in 120 days.",
      metric: "#1 SERP Rank // +420% Organic",
    },
    {
      name: "Sophia Chen",
      designation: "Founder & CEO, FleetGo Mobility Network",
      service: "Mobile App Development",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      initials: "SC",
      rating: 5,
      quote:
        "The cross-platform mobile application they built for our 1.2M drivers is butter-smooth at 120Hz. The offline-first SQLite synchronization is indestructible even in remote zones with zero cell service. Holding a 4.9-star rating is proof of their craftsmanship.",
      metric: "4.9★ App Store // 1.2M Drivers",
    },
  ];

  const clientAvatars = [
    {
      id: 1,
      name: "Elena Rostova",
      designation: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "David Vance",
      designation: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Marcus Thorne",
      designation: "Chief Marketing Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sophia Chen",
      designation: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 relative bg-white border-b border-slate-200 text-slate-900 select-none overflow-hidden"
    >
      {/* Subtle Dot Matrix Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <KineticText
              text="WHAT CLIENTS"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-heading cursor-default"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-600 font-heading underline decoration-yellow-400 decoration-wavy">
              SAY
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base font-sans text-slate-600 leading-relaxed max-w-2xl mb-6 font-normal">
            Real testimonials from engineering leaders, founders, and marketing directors who scaled their businesses with Rajveer Singh.
          </p>

          {/* Aceternity Animated Tooltip Avatars */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-heading font-bold text-slate-500 tracking-wide">VERIFIED LEADERS:</span>
            <AnimatedTooltip items={clientAvatars} />
          </div>
        </div>

        {/* Aceternity Animated Testimonials 3D Rotational Stack with Auto-Shuffle */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
