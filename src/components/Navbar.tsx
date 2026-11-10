"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Users,
  ChevronDown,
  Code,
  Bot,
  Server,
  Search,
  BarChart3,
  Smartphone,
  Trophy,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import BookingWindowModal from "./BookingWindowModal";

interface NavbarProps {
  onReplayIntro?: () => void;
  inkTheme?: "paper" | "obsidian" | "cyanotype";
  onThemeChange?: (theme: "paper" | "obsidian" | "cyanotype") => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleOpen = () => setBookingWindowOpen(true);
    window.addEventListener("open-booking-window", handleOpen);
    return () => window.removeEventListener("open-booking-window", handleOpen);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 120);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dynamic header styling according to each individual page
  const getPageTheme = (path: string) => {
    if (path.startsWith("/about")) {
      return {
        bg: "bg-[#0a1026]/95 border-b border-indigo-500/30",
        accent: "text-indigo-400",
      };
    }
    if (path.startsWith("/services")) {
      return {
        bg: "bg-[#071328]/95 border-b border-blue-500/30",
        accent: "text-blue-400",
      };
    }
    if (path.startsWith("/plan")) {
      return {
        bg: "bg-[#130826]/95 border-b border-purple-500/30",
        accent: "text-purple-400",
      };
    }
    if (path.startsWith("/work")) {
      return {
        bg: "bg-[#041a14]/95 border-b border-emerald-500/30",
        accent: "text-emerald-400",
      };
    }
    if (path.startsWith("/testimonials")) {
      return {
        bg: "bg-[#1c1305]/95 border-b border-amber-500/30",
        accent: "text-amber-400",
      };
    }
    if (path.startsWith("/contact")) {
      return {
        bg: "bg-[#1c0812]/95 border-b border-rose-500/30",
        accent: "text-rose-400",
      };
    }
    // Default Home ("/")
    return {
      bg: "bg-[#050814]/95 border-b border-slate-800",
      accent: "text-cyan-400",
    };
  };

  const pageTheme = getPageTheme(pathname || "/");

  const serviceObjectives = [
    {
      title: "Web Development",
      objective: "Next.js, React, responsive websites & web apps",
      icon: Code,
      href: "/services/web-development",
    },
    {
      title: "AI Automation",
      objective: "Workflow automation, business copilots & API pipelines",
      icon: Bot,
      href: "/services/ai-automation",
    },
    {
      title: "Cloud Infrastructure",
      objective: "High-availability Linux servers, Nginx & 99.999% SLA",
      icon: Server,
      href: "/services/cloud-infrastructure",
    },
    {
      title: "SEO Optimization",
      objective: "Search ranking, technical schema & speed optimization",
      icon: Search,
      href: "/services/seo-optimization",
    },
    {
      title: "Power BI Telemetry",
      objective: "Executive dashboards, DAX modeling & KPI reporting",
      icon: BarChart3,
      href: "/services/power-bi-telemetry",
    },
    {
      title: "Mobile Apps",
      objective: "Cross-platform iOS & Android mobile applications",
      icon: Smartphone,
      href: "/services/mobile-apps",
    },
  ];

  return (
    <>
      {/* Upper Div: Always Solid Black, scrolls away */}
      <div className="w-full bg-black text-slate-300 border-b border-white/10 text-xs py-1 px-3 sm:px-6 relative z-40 select-none">
        <div className="w-full flex items-center justify-between text-[11px] sm:text-xs">
          <a
            href="mailto:rakshitsingcse@gmail.com"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors truncate max-w-[170px] sm:max-w-none"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-sans font-medium truncate">
              rakshitsingcse@gmail.com
            </span>
          </a>
          <a
            href="tel:+918529348446"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-sans font-medium">
              +91 8529348446
            </span>
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${pageTheme.bg}`}
      >
        <div className="relative w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Left: Brand */}
          <div className="flex items-center z-20 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group select-none"
              title="Rajveer Singh | Developer"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 p-1 border border-slate-700/80 shadow-xs group-hover:border-slate-500 transition-colors overflow-hidden shrink-0">
                <img
                  src="/logo.png"
                  alt="Rajveer Singh Developer Logo"
                  className="w-full h-full object-contain filter"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-bold tracking-tight font-heading text-white group-hover:text-slate-200 transition-colors">
                  Rajveer Singh <span className={`${pageTheme.accent} font-normal`}>| Developer</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Centered Navbar Dock */}
          <div
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-30"
            ref={dropdownRef}
          >
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FloatingDock
                items={[
                  {
                    title: "Home",
                    icon: <Home className="w-4 h-4 text-slate-300" />,
                    href: "/",
                    isActive: pathname === "/",
                  },
                  {
                    title: "About Us",
                    icon: <Users className="w-4 h-4 text-slate-300" />,
                    href: "/about",
                    isActive: pathname?.startsWith("/about"),
                  },
                  {
                    title: "Services",
                    icon: <Code className="w-4 h-4 text-slate-300" />,
                    href: "/services",
                    isActive: pathname?.startsWith("/services"),
                    suffix: (
                      <ChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    ),
                    onClick: (e: React.MouseEvent) => {
                      if (window.innerWidth >= 1024) {
                        e.preventDefault();
                        setServicesDropdownOpen((prev) => !prev);
                      }
                    },
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                  },
                  {
                    title: "Our Work",
                    icon: <Trophy className="w-4 h-4 text-slate-300" />,
                    href: "/work",
                    isActive: pathname?.startsWith("/work"),
                  },
                  {
                    title: "Contact",
                    icon: <Mail className="w-4 h-4 text-slate-300" />,
                    href: "/contact",
                    isActive: pathname?.startsWith("/contact"),
                  },
                ]}
              />

              {/* Clean Services Dropdown (strictly on hover/click, quiet no-slop chrome) */}
              {servicesDropdownOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[580px] max-w-[92vw]"
                >
                  <div className="p-3.5 rounded-2xl bg-[#090d1a]/98 backdrop-blur-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white">
                    {/* 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {serviceObjectives.map((srv) => {
                        const Icon = srv.icon;
                        return (
                          <Link
                            key={srv.title}
                            href={srv.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-900/90 border border-transparent hover:border-slate-800/90 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 group-hover:text-cyan-400 group-hover:border-slate-700 transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                                {srv.title}
                              </span>
                              <span className="text-[11px] text-slate-400 font-sans line-clamp-2 mt-0.5 leading-snug">
                                {srv.objective}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Book Call Button */}
          <div className="flex items-center gap-3 z-20">
            <button
              type="button"
              onClick={() => setBookingWindowOpen(true)}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-xs cursor-pointer select-none"
            >
              <Calendar className="w-4 h-4 shrink-0 text-slate-950" />
              <span>Book Call</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer touch-manipulation select-none transition-colors shadow-xs"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-slate-200" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer - Strictly No Slop, Quiet & Clean */}
        {mobileMenuOpen && (
          <div className="lg:hidden relative z-50 bg-slate-950/98 backdrop-blur-xl border-t border-slate-800 px-4 py-3.5 flex flex-col gap-1 text-sm text-slate-200 shadow-xl select-none">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-900 transition-colors font-medium text-sm"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-900 transition-colors font-medium text-sm"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col rounded-lg border border-slate-800/80 bg-slate-900/40 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-200 hover:text-white hover:bg-slate-900/60 transition-colors cursor-pointer text-sm font-medium"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col bg-slate-950/95 border-t border-slate-800/80 p-1.5 gap-0.5 text-xs">
                  {serviceObjectives.map((srv) => (
                    <Link
                      key={srv.title}
                      href={srv.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-900 flex flex-col"
                    >
                      <span className="font-medium text-white">{srv.title}</span>
                      <span className="text-[11px] text-slate-400 font-sans">{srv.objective}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-900 transition-colors font-medium text-sm"
            >
              Our Work
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-900 transition-colors font-medium text-sm"
            >
              Contact
            </Link>

            {/* Book Call Button in Mobile - Solid, No Slop */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingWindowOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer mt-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 shrink-0 text-slate-950" />
              <span>Book Call</span>
            </button>
          </div>
        )}
      </header>

      {/* Embedded Scheduling Window Modal */}
      <BookingWindowModal
        isOpen={bookingWindowOpen}
        onClose={() => setBookingWindowOpen(false)}
      />
    </>
  );
}
