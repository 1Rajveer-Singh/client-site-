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
} from "lucide-react";
import { KineticText } from "@/registry/magicui/kinetic-text";
import { PixelImage } from "@/registry/magicui/pixel-image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full-Stack Web Development",
    message: "",
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_session_active", "true");
    }
  }, []);

  const getEmailContent = () => {
    const recipient = "rakshitsingcse@gmail.com";
    const subject = `Project Inquiry: ${formData.service} — ${formData.name}`;
    const body = `Hello Rajveer,

I am reaching out via your portfolio website regarding a new project:

• Client Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone.trim() || "Not provided"}
• Service Needed: ${formData.service}

Project Details & Requirements:
--------------------------------------------------
${formData.message}
--------------------------------------------------

Best regards,
${formData.name}
${formData.email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return { gmailUrl, mailtoUrl };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const { gmailUrl, mailtoUrl } = getEmailContent();
    try {
      const opened = window.open(gmailUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.href = mailtoUrl;
      }
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-clip">
      <SmoothCursor />
      <Navbar />

      {/* Contact Hero Header with Animated Grid Pixel Reveal Global Network Background */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 bg-[#060913] text-white overflow-hidden border-b-2 border-rose-500/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <PixelImage
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=2000&auto=format&fit=crop"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full h-full opacity-90 contrast-110 saturate-125"
            imageClassName="object-cover object-center w-full h-full"
            alt="Contact Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/55 via-[#060913]/35 to-[#060913]/90 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight text-white leading-tight break-words max-w-full">
            <KineticText text="GET IN TOUCH" as="span" className="inline-block" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-yellow-300 to-cyan-400">
              WITH RAJVEER SINGH
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-xs sm:text-sm md:text-base font-sans text-slate-200 leading-relaxed font-normal px-2">
            Have a project in mind or want to scale your digital infrastructure? Send a message and let&apos;s build something impactful together.
          </p>
        </div>
      </section>

      {/* Normal Professional Contact Form & Direct Contact Details */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col gap-6">
                <div>
                  <span className="text-xs font-heading font-extrabold text-blue-600 uppercase tracking-widest block mb-1.5">
                    CONTACT DETAILS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                    Direct Communication
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-sans">
                    Feel free to reach out directly via email or phone. I typically respond within a few hours.
                  </p>
                </div>

                <div className="space-y-5 pt-5 border-t border-slate-100 text-sm font-sans">
                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-slate-500 font-medium block">Email Address</span>
                      <a
                        href="mailto:rakshitsingcse@gmail.com"
                        className="text-slate-900 font-semibold hover:text-blue-600 transition-colors text-sm break-all"
                      >
                        rakshitsingcse@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Phone / WhatsApp</span>
                      <a
                        href="tel:+918529348446"
                        className="text-slate-900 font-semibold hover:text-amber-600 transition-colors text-sm"
                      >
                        +91 8529348446
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Location</span>
                      <span className="text-slate-900 font-semibold text-sm block">India (Available for Remote Global Work)</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Working Hours</span>
                      <span className="text-slate-900 font-semibold text-sm block">Mon - Sat: 9:00 AM - 8:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-heading font-bold text-slate-200 tracking-wider uppercase">
                    100% Confidentiality & Quality
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Every inquiry is handled with strict confidentiality. Non-disclosure agreements (NDAs) signed upon request before starting project discovery.
                </p>
              </div>
            </div>

            {/* Right: Clean Standard Corporate Company Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs">
                {submitted ? (
                  <div className="text-center py-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 shadow-xs">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                      Opening Gmail Compose Box...
                    </h3>
                    <p className="text-sm font-sans text-slate-600 max-w-md leading-relaxed mb-6">
                      Your project inquiry has been formatted and pre-filled directly into your Gmail composer addressed to <strong>rakshitsingcse@gmail.com</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => {
                          const { gmailUrl } = getEmailContent();
                          window.open(gmailUrl, "_blank", "noopener,noreferrer");
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-sans text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Re-open Gmail Composer</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const { mailtoUrl } = getEmailContent();
                          window.location.href = mailtoUrl;
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-sans text-sm font-semibold hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
                      >
                        <span>Open Default Mail App</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "Full-Stack Web Development",
                          message: "",
                        });
                      }}
                      className="mt-6 text-xs text-slate-500 hover:text-slate-800 underline font-sans cursor-pointer"
                    >
                      Reset Form & Compose Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-slate-900">
                        Send a Message
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 font-sans">
                        Fill out your project details below. Clicking send will open your Gmail composer with everything pre-filled.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder:text-slate-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder:text-slate-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder:text-slate-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer transition-all"
                        >
                          <option>Full-Stack Web Development</option>
                          <option>Autonomous AI Agent Swarms</option>
                          <option>High-Availability Cloud Servers</option>
                          <option>Algorithmic SEO Optimization</option>
                          <option>Power BI Dashboards</option>
                          <option>Cross-Platform Mobile Apps</option>
                          <option>Other / General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-sans">
                        Your Message & Goals <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, timeline, deliverables, and goals..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white placeholder:text-slate-400 leading-relaxed transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-heading text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send to Gmail Composer</span>
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
