"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Gamepad2,
  Menu,
  X,
  Home,
  Users,
  ChevronDown,
  Code,
  Bot,
  Search,
  BarChart3,
  Smartphone,
  Trophy,
  Mail,
  Phone,
  Coins,
  Sparkles,
  Compass,
  Award,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { Text3DFlip } from "./ui/text-3d-flip";

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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Dynamic header styling according to each individual page
  const getPageTheme = (path: string) => {
    if (path.startsWith("/about")) {
      return {
        bg: "bg-[#0a1026]/95 border-b border-indigo-500/40",
        accent: "text-indigo-400",
        glow: "shadow-[0_4px_30px_rgba(99,102,241,0.2)]",
        badge: "border-indigo-500/50 text-indigo-300",
      };
    }
    if (path.startsWith("/services")) {
      return {
        bg: "bg-[#071328]/95 border-b border-blue-500/40",
        accent: "text-blue-400",
        glow: "shadow-[0_4px_30px_rgba(37,99,235,0.2)]",
        badge: "border-blue-500/50 text-blue-300",
      };
    }
    if (path.startsWith("/plan")) {
      return {
        bg: "bg-[#130826]/95 border-b border-purple-500/40",
        accent: "text-purple-400",
        glow: "shadow-[0_4px_30px_rgba(168,85,247,0.2)]",
        badge: "border-purple-500/50 text-purple-300",
      };
    }
    if (path.startsWith("/work")) {
      return {
        bg: "bg-[#041a14]/95 border-b border-emerald-500/40",
        accent: "text-emerald-400",
        glow: "shadow-[0_4px_30px_rgba(16,185,129,0.2)]",
        badge: "border-emerald-500/50 text-emerald-300",
      };
    }
    if (path.startsWith("/testimonials")) {
      return {
        bg: "bg-[#1c1305]/95 border-b border-amber-500/40",
        accent: "text-amber-400",
        glow: "shadow-[0_4px_30px_rgba(245,158,11,0.2)]",
        badge: "border-amber-500/50 text-amber-300",
      };
    }
    if (path.startsWith("/contact")) {
      return {
        bg: "bg-[#1c0812]/95 border-b border-rose-500/40",
        accent: "text-rose-400",
        glow: "shadow-[0_4px_30px_rgba(244,63,94,0.2)]",
        badge: "border-rose-500/50 text-rose-300",
      };
    }
    // Default Home ("/")
    return {
      bg: "bg-[#050814]/95 border-b border-cyan-500/30",
      accent: "text-cyan-400",
      glow: "shadow-[0_4px_30px_rgba(6,182,212,0.18)]",
      badge: "border-cyan-500/50 text-cyan-300",
    };
  };

  const pageTheme = getPageTheme(pathname || "/");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicesList = [
    {
      title: "Web Development",
      desc: "Next.js 16, React 19, 60FPS engine",
      icon: Code,
      badge: "PWR-UP 01",
      color: "bg-cyan-500 text-black",
      href: "#work",
    },
    {
      title: "AI Agent Automation",
      desc: "Autonomous LLM swarms & neural pipelines",
      icon: Bot,
      badge: "PWR-UP 02",
      color: "bg-fuchsia-500 text-white",
      href: "#work",
    },
    {
      title: "SEO Optimization",
      desc: "Pixel-perfect rank & Core Web Vitals",
      icon: Search,
      badge: "PWR-UP 03",
      color: "bg-emerald-400 text-black",
      href: "#work",
    },
    {
      title: "Power BI Dashboard",
      desc: "Real-time telemetry HUD & analytics",
      icon: BarChart3,
      badge: "PWR-UP 04",
      color: "bg-amber-400 text-black",
      href: "#work",
    },
    {
      title: "Mobile App",
      desc: "Cross-platform iOS & Android cartridges",
      icon: Smartphone,
      badge: "PWR-UP 05",
      color: "bg-rose-500 text-white",
      href: "#work",
    },
  ];

  return (
    <>
      {/* Upper Div: Always Solid Black, NOT sticky (scrolls away naturally) */}
      <div className="w-full bg-black text-slate-300 border-b border-white/10 text-xs py-2 px-2 sm:px-4 relative z-40 select-none">
        <div className="w-full flex items-center justify-between">
          <a
            href="mailto:rakshitsingcse@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors pl-0 shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-sans font-medium text-[11px] sm:text-xs text-slate-200">
              rakshitsingcse@gmail.com
            </span>
          </a>
          <a
            href="tel:+918529348446"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors pr-0 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-sans font-medium text-[11px] sm:text-xs text-slate-200">
              +91 8529348446
            </span>
          </a>
        </div>
      </div>

      {/* Sticky Header: Sticks to top when scrolling down, dynamic theme color per page */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${pageTheme.bg} ${pageTheme.glow}`}
      >
        {/* Main Full-Width Header Bar: Left Corner Brand, Right Nav Dock */}
        <div className="relative w-full px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Left-Side Corner: Brand Title */}
          <a
            href="/"
            className="flex items-center gap-3 pl-0 group shrink-0 z-10 select-none"
            title="Rajveer Singh | Developer"
          >
            {/* Official Website Brand Logo */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 p-1 border border-slate-700/80 shadow-xs group-hover:border-slate-500 transition-all overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="Rajveer Singh Developer Logo"
                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-tight font-heading text-white group-hover:text-slate-200 transition-colors">
                Rajveer Singh <span className={`${pageTheme.accent} font-normal transition-colors duration-300`}>| Developer</span>
              </span>
            </div>
          </a>

          {/* Right Corner: Navigation Dock */}
          <div className="hidden lg:flex items-center gap-2 pr-2 sm:pr-4 z-20">
            <FloatingDock
              items={[
                {
                  title: "Home",
                  icon: <Home className="w-5 h-5 text-slate-300" />,
                  href: "/",
                },
                {
                  title: "About Us",
                  icon: <Users className="w-5 h-5 text-slate-300" />,
                  href: "/about",
                },
                {
                  title: "Services",
                  icon: <Code className="w-5 h-5 text-slate-300" />,
                  href: "/services",
                },
                {
                  title: "Plan of Work",
                  icon: <Compass className="w-5 h-5 text-slate-300" />,
                  href: "/plan",
                },
                {
                  title: "Our Work",
                  icon: <Trophy className="w-5 h-5 text-slate-300" />,
                  href: "/work",
                },
                {
                  title: "Testimonials",
                  icon: <Sparkles className="w-5 h-5 text-slate-300" />,
                  href: "/testimonials",
                },
                {
                  title: "Contact",
                  icon: <Mail className="w-5 h-5 text-slate-300" />,
                  href: "/contact",
                },
              ]}
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2 relative z-50">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer touch-manipulation select-none active:scale-95 shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-slate-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden relative z-50 bg-slate-900/98 backdrop-blur-2xl border-t border-slate-800 px-5 py-5 flex flex-col gap-2 font-heading text-xs shadow-2xl touch-manipulation text-slate-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              <span>Navigation</span>
              <span className="text-emerald-400 font-mono text-[10px]">Online</span>
            </div>

            {/* [Home] */}
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">Home</span>
            </a>

            {/* [About Us] */}
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Users className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">About Us</span>
            </a>

            {/* [Services] */}
            <a
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Code className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">Services & Infrastructure</span>
            </a>

            {/* [Plan of Work] */}
            <a
              href="/plan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">Plan of Work (6 Stages)</span>
            </a>

            {/* [Work] */}
            <a
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Trophy className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">Featured Projects</span>
            </a>

            {/* [Testimonials] */}
            <a
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/60 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-sm">Client Testimonials</span>
            </a>

            {/* [Contact] */}
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 transition-colors"
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="font-semibold text-sm">Get in Touch</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
