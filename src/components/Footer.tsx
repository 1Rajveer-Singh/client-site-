"use client";

import React, { useState } from "react";
import { X, HelpCircle, Shield, FileText, Cookie } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"faq" | "privacy" | "terms" | "cookies" | null>(null);

  return (
    <>
      <footer id="contact" className="w-full bg-white border-t border-slate-200 select-none z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Company Copyright & Branding */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-slate-950 p-1 border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
              <img
                src="/logo.png"
                alt="IT Programmer Solution Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 font-heading tracking-wide">
                IT PROGRAMMER SOLUTION
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-sans mt-0.5">
                © 2026 IT PROGRAMMER SOLUTION. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right: Business Links & Modal Triggers - Responsive grid/wrap */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600 font-sans">
            <button
              type="button"
              onClick={() => setActiveModal("faq")}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1"
            >
              Terms of Service
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => setActiveModal("cookies")}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1"
            >
              Cookies
            </button>
          </div>
        </div>
      </footer>

      {/* Professional Business Company Policy & FAQ Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
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
                    <h4 className="font-semibold text-slate-900 mb-1">What core services does IT PROGRAMMER SOLUTION provide?</h4>
                    <p>We deliver high-availability cloud server architectures, full-stack Next.js web applications, autonomous AI agents, programmatic SEO, and custom software systems.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">What is your typical project delivery timeline?</h4>
                    <p>Standard enterprise projects follow our 9-stage engineering roadmap and typically range from 2 to 6 weeks, depending on system complexity and milestones.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Do you provide ongoing SLA guarantees and maintenance?</h4>
                    <p>Yes. We offer contractual 99.999% uptime service level agreements (SLAs), 24/7 telemetry monitoring, automated security patch cycles, and proactive server management.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">How can we request a consultation or custom quote?</h4>
                    <p>You can contact our engineering team directly at contact@itprogrammersolution.com or submit a request via our Contact page to schedule a discovery call.</p>
                  </div>
                </>
              )}

              {activeModal === "privacy" && (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>At IT PROGRAMMER SOLUTION, we respect your privacy and are committed to safeguarding your personal and commercial data. We collect only necessary contact and project details provided voluntarily through our communication channels.</p>
                  <p>We do not sell, rent, or trade your data to third parties. All technical information, credentials, and client project assets are secured using industry-standard TLS/SSL encryption and restricted access controls.</p>
                  <p>For data inquiries or access requests, please contact our privacy compliance officer at privacy@itprogrammersolution.com.</p>
                </>
              )}

              {activeModal === "terms" && (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>By engaging IT PROGRAMMER SOLUTION for consulting, design, or engineering services, you agree to our standard professional commercial terms:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>All software deliverables and intellectual property belong exclusively to the client upon full milestone settlement.</li>
                    <li>Both parties agree to execute mutual Non-Disclosure Agreements (NDAs) to protect proprietary business logic.</li>
                    <li>Service availability and performance benchmarks are governed by individual client Statement of Work (SOW) agreements.</li>
                  </ul>
                  <p>For legal inquiries, contact legal@itprogrammersolution.com.</p>
                </>
              )}

              {activeModal === "cookies" && (
                <>
                  <p>IT PROGRAMMER SOLUTION uses essential first-party cookies and local storage tokens strictly required for website navigation, active session integrity, and user preference preservation.</p>
                  <p>We do not deploy invasive third-party cross-site advertising trackers. You can disable cookies at any time through your web browser preferences without losing access to core site content.</p>
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
