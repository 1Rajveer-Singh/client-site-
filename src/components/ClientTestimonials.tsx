"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import {
  AnimatedTestimonials,
  type TestimonialItem,
} from "./ui/animated-testimonials";

export default function ClientTestimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Elena Rostova",
      designation: "Head of Growth",
      company: "Instagram Automation Pipeline",
      service: "Autonomous Lead & DM Pipeline",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      rating: 5,
      quote:
        "Rajveer Singh engineered our 24/7 Instagram lead automation and webhook pipeline. Every comment, DM, and story mention is qualified within seconds and synced straight to our CRM. Our lead conversion jumped 4.8x and response latency is practically zero.",
      metric: "4.8x Leads",
      metricLabel: "98.4% Open Rate",
    },
    {
      name: "David Vance",
      designation: "Chief Product Officer",
      company: "Automata AI Labs",
      service: "AI Agent Automation & Infrastructure",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      rating: 5,
      quote:
        "Their autonomous multi-agent swarm revolutionized our tier-1 support and financial routing. It resolves 74% of inquiries end-to-end with sub-40ms response latency, running on dedicated secure cloud instances that never fault.",
      metric: "74% Auto-Resolved",
      metricLabel: "Sub-40ms Latency",
    },
    {
      name: "Marcus Thorne",
      designation: "Chief Marketing Officer",
      company: "BioHealth Global",
      service: "SEO Optimization & Schema Architecture",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      rating: 5,
      quote:
        "We spent a year trying to break through competitive organic search rankings. The team restructured our JSON-LD schema, fine-tuned our Core Web Vitals to a pure 100 Lighthouse score, and our organic traffic spiked by 420% in 120 days.",
      metric: "+420% Organic",
      metricLabel: "#1 SERP Ranking",
    },
    {
      name: "Sophia Chen",
      designation: "Founder & CEO",
      company: "FleetGo Mobility Network",
      service: "Cross-Platform Mobile App Development",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      rating: 5,
      quote:
        "The cross-platform mobile application they built for our 1.2M drivers is butter-smooth at 120Hz. The offline-first SQLite synchronization is indestructible even in remote zones with zero cell service. Holding a 4.9-star rating is proof of their craftsmanship.",
      metric: "4.9★ App Rating",
      metricLabel: "1.2M Active Drivers",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-24 relative bg-white border-b border-slate-200/90 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-2 block">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-950 tracking-tight">
            What Clients Say
          </h2>
          <p className="mt-3 text-sm sm:text-base font-sans text-slate-600 max-w-2xl leading-relaxed">
            Verified engineering feedback from founders, product leaders, and marketing executives who shipped production systems with Rajveer Singh.
          </p>

          {/* Quiet Trust Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="font-bold text-slate-900 ml-1">5.0 / 5.0</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Verified Outcomes
            </span>
            <span className="text-slate-300">•</span>
            <span>Zero Production Faults</span>
          </div>
        </div>

        {/* 3D Animated Testimonials Carousel with the New Unslopped Card Design */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
