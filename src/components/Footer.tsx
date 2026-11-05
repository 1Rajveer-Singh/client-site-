"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, HelpCircle, Shield, FileText, Cookie, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"faq" | "privacy" | "terms" | "cookies" | null>(null);

  return (
    <>
      <footer id="contact" className="w-full bg-slate-950 text-white border-t border-slate-800 select-none z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Bio (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 p-1 border border-cyan-500/30 flex items-center justify-center shadow-xs shrink-0">
                  <img
                    src="/logo.png"
                    alt="Rajveer Singh Developer Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white font-heading tracking-wide">
                    Rajveer Singh | Developer
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    Full Stack • Cloud Servers • AI Automation
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-sm mt-1">
                Engineering high-availability cloud servers, Next.js 16 web applications, autonomous AI agent pipelines, and measurable business growth systems.
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Available for new client engagements</span>
              </div>
            </div>

            {/* Column 2: Direct Contact (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 text-left">
              <h4 className="text-xs font-heading font-extrabold text-slate-200 uppercase tracking-widest">
                Direct Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                <li>
                  <a
                    href="mailto:rakshitsingcse@gmail.com"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-medium group-hover:underline">rakshitsingcse@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918529348446"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium group-hover:underline">+91 8529348446</span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>India • Delivering to Clients Worldwide</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3.5 text-left">
              <h4 className="text-xs font-heading font-extrabold text-slate-200 uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>About Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link href="/plan" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Plan of Work (6 Stages)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Client Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Testimonials</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors font-medium flex items-center justify-between">
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal Policy Modals */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-500 font-sans">
              © 2026 Rajveer Singh | Developer. All rights reserved.
            </p>

            <div className="flex flex-row items-center justify-center gap-x-2.5 sm:gap-x-5 text-[11px] sm:text-xs font-medium text-slate-400 font-sans flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveModal("faq")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <span className="text-slate-700">•</span>
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("open_cookie_settings"));
                  }
                }}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Professional Policy & FAQ Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-2.5">
                {activeModal === "faq" && <HelpCircle className="w-5 h-5 text-blue-600" />}
                {activeModal === "privacy" && <Shield className="w-5 h-5 text-emerald-600" />}
                {activeModal === "terms" && <FileText className="w-5 h-5 text-purple-600" />}
                {activeModal === "cookies" && <Cookie className="w-5 h-5 text-amber-600" />}
                <h3 className="text-lg font-bold text-slate-900">
                  {activeModal === "faq" && "Frequently Asked Questions (FAQ)"}
                  {activeModal === "privacy" && "Privacy Policy"}
                  {activeModal === "terms" && "Terms of Service"}
                  {activeModal === "cookies" && "Cookie Preferences & Policy"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              {activeModal === "faq" && (
                <>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What core services does Rajveer Singh provide?</h4>
                    <p>I deliver high-availability cloud server architectures, full-stack Next.js 16 web applications, autonomous AI agents, programmatic SEO, and custom enterprise software.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What is your typical project delivery timeline?</h4>
                    <p>Standard projects follow our 6-stage engineering roadmap and typically range from 2 to 6 weeks, depending on system complexity and milestones.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Do you provide ongoing SLA guarantees and maintenance?</h4>
                    <p>Yes. Contractual 99.999% uptime service level agreements (SLAs), 24/7 telemetry monitoring, automated security patch cycles, and proactive server management.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">How can I get in touch for a project?</h4>
                    <p>Contact directly at rakshitsingcse@gmail.com or call +91 8529348446 to schedule an architectural consultation.</p>
                  </div>
                </>
              )}

              {activeModal === "privacy" && (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>At Rajveer Singh | Developer, privacy and data security are strictly prioritized. We collect only necessary contact and project details provided voluntarily through our communication channels.</p>
                  <p>We do not sell, rent, or trade your data to third parties. All technical information, credentials, and client project assets are secured using industry-standard TLS/SSL encryption and restricted access controls.</p>
                  <p>For inquiries, contact rakshitsingcse@gmail.com.</p>
                </>
              )}

              {activeModal === "terms" && (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>By engaging Rajveer Singh for consulting, design, or engineering services, you agree to our standard professional commercial terms:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>All software deliverables and intellectual property belong exclusively to the client upon full milestone settlement.</li>
                    <li>Both parties agree to execute mutual Non-Disclosure Agreements (NDAs) to protect proprietary business logic.</li>
                    <li>Service availability and performance benchmarks are governed by individual client Statement of Work (SOW) agreements.</li>
                  </ul>
                  <p>For legal inquiries, contact rakshitsingcse@gmail.com.</p>
                </>
              )}

              {activeModal === "cookies" && (
                <>
                  <p>We use essential first-party cookies and local storage tokens strictly required for website navigation, active session integrity, and user preference preservation.</p>
                  <p>We do not deploy invasive third-party cross-site advertising trackers.</p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
