"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Terminal,
} from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { KineticText } from "@/registry/magicui/kinetic-text";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "High-Availability Cloud Servers",
    budget: "$5,000 - $15,000",
    message: "",
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SmoothCursor />
      <Navbar />

      {/* Contact Hero Header with High-Visibility Unsplash Global Network Background */}
      <section className="relative py-24 bg-[#060913] text-white overflow-hidden border-b-2 border-rose-500/20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95 contrast-110 saturate-125 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=2000&auto=format&fit=crop')`,
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/40 via-[#060913]/25 to-[#060913]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight break-words max-w-full">
            <KineticText text="CONNECT WITH" as="span" className="inline-block" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-yellow-300 to-cyan-400">
              OUR PRINCIPAL ARCHITECTS
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-xs sm:text-sm md:text-base font-sans text-slate-200 leading-relaxed font-normal px-2">
            Ready to upgrade your infrastructure or build a mission-critical web system? Submit your project parameters below for an immediate technical architecture proposal.
          </p>
        </div>
      </section>

      {/* Contact Form & Direct Telemetry Details */}
      <section className="py-16 sm:py-20 bg-white" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white shadow-md flex flex-col gap-6"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div>
                  <span className="text-xs font-heading font-extrabold text-rose-600 uppercase tracking-widest block mb-2">
                    COMMUNICATION CHANNELS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-950">
                    Get in Touch Directly
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-sans text-slate-600 leading-relaxed font-normal">
                    Our lead software architects review all project requests within 2 business hours.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 text-sm font-sans">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 block font-heading font-bold uppercase tracking-wider">EMAIL US</span>
                      <a
                        href="mailto:contact@itprogrammersolution.com"
                        className="text-slate-900 font-bold hover:text-blue-600 transition-colors text-xs sm:text-sm break-all"
                      >
                        contact@itprogrammersolution.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block font-heading font-bold uppercase tracking-wider">RESPONSE TIME</span>
                      <span className="text-slate-900 font-bold text-xs sm:text-sm block">Within 2 Hours (24/7 Global SLA)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block font-heading font-bold uppercase tracking-wider">CONFIDENTIALITY</span>
                      <span className="text-slate-900 font-bold text-xs sm:text-sm block">100% Mutual NDA Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Architecture Badge */}
              <div
                className="p-6 rounded-2xl sm:rounded-3xl bg-slate-900 text-white border-2 border-slate-800 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-heading text-yellow-300 font-bold tracking-wider">
                    PRODUCTION GUARANTEE
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed font-normal">
                  Every solution deployed by IT PROGRAMMER SOLUTION comes with complete source-code ownership, zero technical debt handover, and continuous telemetry monitoring.
                </p>
              </div>
            </div>

            {/* Right: Technical Proposal Form */}
            <div className="lg:col-span-7">
              <div
                className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white shadow-xl"
                style={{ backgroundColor: "#ffffff" }}
              >
                {submitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-950 mb-2">
                      Proposal Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-slate-600 max-w-md leading-relaxed mb-6">
                      Thank you for contacting IT PROGRAMMER SOLUTION. A principal systems engineer is reviewing your specs and will reply with a scope roadmap shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-heading text-xs font-bold hover:bg-blue-600 transition-colors uppercase tracking-wider"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-slate-950 mb-1.5">
                        Request Architectural Proposal
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-slate-600">
                        Fill in your requirements below to trigger our engineering discovery process.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold font-heading text-slate-800 mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400 shadow-2xs transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-bold font-heading text-slate-800 mb-2">
                          WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400 shadow-2xs transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold font-heading text-slate-800 mb-2">
                          SERVICE FOCUS
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer shadow-2xs transition-all"
                        >
                          <option>High-Availability Cloud Servers</option>
                          <option>Web Development (Next.js 16)</option>
                          <option>Autonomous AI Agent Swarms</option>
                          <option>Algorithmic SEO & Schema</option>
                          <option>Power BI Dashboards</option>
                          <option>Cross-Platform Mobile Apps</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-bold font-heading text-slate-800 mb-2">
                          TARGET BUDGET
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer shadow-2xs transition-all"
                        >
                          <option>$2,000 - $5,000</option>
                          <option>$5,000 - $15,000</option>
                          <option>$15,000 - $50,000</option>
                          <option>$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold font-heading text-slate-800 mb-2">
                        PROJECT BRIEF & TECHNICAL SPECIFICATIONS *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current tech stack, business bottlenecks, or key performance deliverables..."
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-slate-400 leading-relaxed shadow-2xs transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-heading text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4 text-cyan-400" />
                      <span>TRANSMIT PROPOSAL REQUEST</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
