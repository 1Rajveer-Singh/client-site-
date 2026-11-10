"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  X,
  Calendar,
  ExternalLink,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { PersonThinkingVector } from "@/components/icons/SvgRepoCollections";

export interface BookingWindowModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
}

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function BookingWindowModal({
  isOpen,
  onClose,
  calLink = "itprogrammersolution/free-client-consultation-30-minutes",
}: BookingWindowModalProps) {
  // Calendar state initialized on mount to satisfy Next.js static prerender
  const [today, setToday] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("02:00 PM");

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setCurrentDate(now);
    const nextDay = new Date(now);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  }, []);

  // Step state: 'select' -> 'form' -> 'confirmed'
  const [step, setStep] = useState<"select" | "form" | "confirmed">("select");

  // Form details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timezone detection
  const timeZone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
    } catch {
      return "Asia/Kolkata";
    }
  }, []);

  // Keyboard navigation & body scroll lock
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

  // Month calculations
  const year = currentDate ? currentDate.getFullYear() : 2026;
  const month = currentDate ? currentDate.getMonth() : 10;

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Adjust so Monday is 0, Sunday is 6
  let startingDay = firstDayOfMonth.getDay() - 1;
  if (startingDay < 0) startingDay = 6;

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isPastDate = (day: number) => {
    if (!today) return false;
    const test = new Date(year, month, day);
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return test < startOfToday;
  };

  const isTodayDate = (day: number) => {
    if (!today) return false;
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const handleDateSelect = (day: number) => {
    if (isPastDate(day)) return;
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const recipient = "rakshitsingcse@gmail.com";
    const subject = `Consultation Request: ${name} — ${formattedSelectedDate} at ${selectedSlot}`;
    const body = `Hello Rajveer,

A client consultation call has been scheduled via your portfolio:

• Name: ${name}
• Email: ${email}
• Phone: ${phone.trim() || "Not provided"}
• Date: ${formattedSelectedDate}
• Time: ${selectedSlot} (${timeZone})
• Format: 30-minute Google Meet video call

Project requirements / notes:
--------------------------------------------------
${notes.trim() || "Technical architecture and scope consultation."}
--------------------------------------------------

Best regards,
${name}
${email}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.open(mailtoUrl, "_blank");
    } catch {
      // Fallback
    }

    setIsSubmitting(false);
    setStep("confirmed");
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return "#";
    const title = encodeURIComponent(
      "Rajveer Singh — Technical Consultation (30 min)"
    );
    const details = encodeURIComponent(
      `Technical consultation with Rajveer Singh (IT Programmer Solution).\nClient: ${name}\nNotes: ${notes}\nGoogle Meet link will be shared via email confirmation.`
    );
    const location = encodeURIComponent("Google Meet (Online)");

    const startHour = parseInt(selectedSlot.split(":")[0], 10);
    const isPM = selectedSlot.includes("PM") && startHour !== 12;
    const hour = isPM ? startHour + 12 : startHour;
    const minute = selectedSlot.includes("30") ? 30 : 0;

    const startDate = new Date(selectedDate);
    startDate.setHours(hour, minute, 0, 0);

    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    const formatGDate = (d: Date) =>
      d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${formatGDate(
      startDate
    )}/${formatGDate(endDate)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-100"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl h-[100dvh] sm:h-auto sm:max-h-[85vh] bg-white rounded-none sm:rounded-2xl shadow-xl border-0 sm:border sm:border-slate-200 overflow-hidden flex flex-col text-slate-900">
        
        {/* Quiet Window Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-12 border-b border-slate-200 bg-slate-50/80 shrink-0 z-20">
          <div className="flex items-center gap-3">
            {/* Subtle Traffic Light Dots */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onClose}
                title="Close"
                className="w-3 h-3 rounded-full bg-slate-300 hover:bg-rose-500 transition-colors"
                aria-label="Close modal"
              />
              <span className="w-3 h-3 rounded-full bg-slate-200" />
              <span className="w-3 h-3 rounded-full bg-slate-200" />
            </div>

            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-xs sm:text-sm font-semibold text-slate-900">
                Technical consultation
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <span>•</span>
                <span>Rajveer Singh</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open direct Cal.com link in new tab"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            >
              <span>Cal.com</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content: Single Smooth Vertical Scroll with 4px Grid Spacing */}
        <div className="relative flex-1 w-full bg-white overflow-y-auto overflow-x-hidden min-h-0">
          {step === "confirmed" ? (
            /* Confirmation State */
            <div className="p-6 sm:p-10 max-w-md mx-auto flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-1.5">
                Consultation scheduled
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                A calendar invitation and Google Meet link have been prepared for{" "}
                <strong className="text-slate-800 font-medium">{email}</strong>.
              </p>

              <div className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="font-medium font-mono tabular-nums">
                    {formattedSelectedDate} at {selectedSlot}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>30-minute scoping discussion</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Google Meet video call</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Host: Rajveer Singh</span>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add to Google Calendar</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : step === "form" ? (
            /* Contact Details Form */
            <div className="p-5 sm:p-8 max-w-lg mx-auto">
              <button
                type="button"
                onClick={() => setStep("select")}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Select a different time</span>
              </button>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between mb-6 text-xs">
                <div className="flex items-center gap-2 font-mono tabular-nums text-slate-800 font-medium">
                  <CalendarCheck className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{formattedSelectedDate} • {selectedSlot}</span>
                </div>
                <span className="text-slate-500">30 min</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Your details
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                We will email you the Google Meet room link and meeting confirmation.
              </p>

              <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">
                    Full name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexander Vance"
                      className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">
                    Email address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexander@company.com"
                      className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">
                    Phone / WhatsApp <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">
                    Project scope / requirements <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Brief overview of what you are building, tech stack, or deadlines..."
                      className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-2xs"
                  >
                    <span>Schedule consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Step 1: Calendar and Available Slots */
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
              
              {/* Left Column: Context & Overview */}
              <div className="md:col-span-4 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-emerald-700 font-medium block">
                      Discovery call
                    </span>
                    <div className="w-10 h-10 -mt-1 -mr-1">
                      <PersonThinkingVector className="w-full h-full" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Free technical consultation
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    30-minute discovery session with Rajveer Singh to architect project scope, system boundaries, and deliverables.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Google Meet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>No obligation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                    Timezone
                  </span>
                  <span className="text-xs font-mono text-slate-700 font-medium truncate block">
                    {timeZone}
                  </span>
                </div>
              </div>

              {/* Right Column: Month Calendar + Slots */}
              <div className="md:col-span-8 p-4 sm:p-6 flex flex-col sm:flex-row gap-5">
                
                {/* Month Calendar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold text-slate-900 font-mono">
                      {MONTH_NAMES[month]} {year}
                    </h4>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="p-1 rounded-md border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="p-1 rounded-md border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                        aria-label="Next month"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Weekday Labels */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {WEEKDAYS.map((w, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium text-slate-400 py-1"
                      >
                        {w}
                      </span>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: startingDay }).map((_, i) => (
                      <div key={`blank-${i}`} className="h-8" />
                    ))}

                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNumber = i + 1;
                      const past = isPastDate(dayNumber);
                      const selected = isSelected(dayNumber);
                      const isToday = isTodayDate(dayNumber);

                      return (
                        <button
                          key={`day-${dayNumber}`}
                          type="button"
                          disabled={past}
                          onClick={() => handleDateSelect(dayNumber)}
                          className={`h-8 rounded-md text-xs font-mono tabular-nums transition-colors flex items-center justify-center ${
                            selected
                              ? "bg-slate-900 text-white font-medium"
                              : past
                              ? "text-slate-300 cursor-not-allowed"
                              : isToday
                              ? "border border-slate-400 text-slate-900 font-medium hover:bg-slate-100"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {dayNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px bg-slate-200 hidden sm:block" />

                {/* Slots Column */}
                <div className="w-full sm:w-44 shrink-0 flex flex-col">
                  <div className="mb-2.5">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Available slots
                    </span>
                    <span className="text-xs font-mono tabular-nums font-medium text-slate-800 block truncate">
                      {formattedSelectedDate}
                    </span>
                  </div>

                  <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[220px] sm:max-h-[280px] pr-1">
                    {TIME_SLOTS.map((slot, idx) => {
                      const isChosen = selectedSlot === slot;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`w-full py-2 px-2.5 rounded-md text-xs font-mono tabular-nums transition-colors flex items-center justify-between border ${
                            isChosen
                              ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-medium"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span>{slot}</span>
                          {isChosen && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-3 mt-auto">
                    <button
                      type="button"
                      onClick={() => setStep("form")}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}