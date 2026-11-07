"use client";

import React, { useEffect } from "react";
import { X, Calendar, Sparkles, ExternalLink } from "lucide-react";

export interface BookingWindowModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
}

export default function BookingWindowModal({
  isOpen,
  onClose,
  calLink = "itprogrammersolution/free-client-consultation-30-minutes",
}: BookingWindowModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const directUrl = `https://cal.com/${calLink}`;
  const iframeSrc = `https://cal.com/${calLink}?embed=true&layout=month_view`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] border border-slate-200/90 overflow-hidden flex flex-col">
        {/* Linux / macOS Styled Window Titlebar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50 select-none shrink-0">
          <div className="flex items-center gap-3">
            {/* Window control traffic lights */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onClose}
                title="Close Window"
                className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Close"
              />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
            </div>

            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-heading font-bold text-slate-900">
                Book Consultation — Rajveer Singh
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Live Availability
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open calendar in new tab"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Window Content: Calendar Embed with Watermark Shield */}
        <div className="relative w-full h-[620px] sm:h-[680px] bg-white overflow-hidden">
          <iframe
            src={iframeSrc}
            title="Book Free Consultation"
            style={{
              width: "100%",
              height: "calc(100% + 50px)",
              border: 0,
            }}
            className="w-full border-0 -mb-[50px]"
            allow="camera; microphone; autoplay; fullscreen"
          />

          {/* Bottom mask to hide Cal.com footer watermark */}
          <div
            className="absolute bottom-0 left-0 right-0 h-11 bg-white border-t border-slate-100 pointer-events-none z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
