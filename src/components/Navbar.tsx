"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Gamepad2,
  Menu,
  X,
  Home,
  ChevronDown,
  Code,
  Bot,
  Search,
  BarChart3,
  Smartphone,
  Trophy,
  Mail,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
    <header className="sticky top-0 z-40 w-full bg-[#080d1a]/85 backdrop-blur-xl border-b border-cyan-500/25 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]">
      {/* Laser Gradient Accent Beam */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-400 via-amber-400 to-fuchsia-500 shadow-[0_0_10px_rgba(6,182,212,0.7)]" />

      {/* Main Full-Width Header Bar: Left Corner Brand, Center Arcade Tokens */}
      <div className="relative w-full px-2 sm:px-4 lg:px-6 h-20 flex items-center justify-between">
        
        {/* Left-Side Corner: 16-Bit Arcade Marquee with NO left space */}
        <a
          href="#"
          className="flex items-center gap-3 pl-0 group shrink-0 z-10 select-none"
          title="IT PROGRAMMER SOLUTION"
        >
          {/* Official Website Brand Logo */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/90 p-1 border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all overflow-hidden shrink-0">
            <img
              src="/logo.png"
              alt="IT Programmer Solution Logo"
              className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <Text3DFlip
                className="text-sm sm:text-base md:text-lg font-black tracking-wider font-heading text-white cursor-pointer"
                textClassName="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                flipTextClassName="text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                rotateDirection="top"
              >
                IT PROGRAMMER SOLUTION
              </Text3DFlip>
            </div>
          </div>
        </a>

        {/* Right Corner: Aceternity Navigation Dock */}
        <div className="hidden lg:flex items-center gap-2 pr-3 sm:pr-5 z-20">
          <FloatingDock
            items={[
              {
                title: "Home",
                icon: <Home className="w-5 h-5 text-cyan-300" />,
                href: "/",
              },
              {
                title: "Services",
                icon: <Code className="w-5 h-5 text-blue-400" />,
                href: "/services",
              },
              {
                title: "Plan of Work",
                icon: <Compass className="w-5 h-5 text-purple-300" />,
                href: "/plan",
              },
              {
                title: "Our Work",
                icon: <Trophy className="w-5 h-5 text-emerald-300" />,
                href: "/work",
              },
              {
                title: "Testimonials",
                icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
                href: "/testimonials",
              },
              {
                title: "Contact",
                icon: <Mail className="w-5 h-5 text-rose-300" />,
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
            className="p-2.5 rounded-xl text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 cursor-pointer touch-manipulation select-none active:scale-95 shadow-md"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-yellow-300" /> : <Menu className="w-5 h-5 text-cyan-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (16-Bit Arcade Layout) */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-50 bg-[#070b16]/98 backdrop-blur-2xl border-t border-cyan-500/30 px-5 py-5 flex flex-col gap-3 font-heading text-xs animate-in shadow-2xl touch-manipulation text-white">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] text-cyan-400 font-bold">
            <span>COMMAND NAVIGATION</span>
            <span className="animate-pulse text-yellow-400">ONLINE</span>
          </div>

          {/* [Home] */}
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
              <Home className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Home</span>
          </a>

          {/* [Services] */}
          <a
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-yellow-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-amber-400/20 border border-yellow-400 flex items-center justify-center text-yellow-300">
              <Code className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Services & Infrastructure</span>
          </a>

          {/* [Plan of Work] */}
          <a
            href="/plan"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-purple-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-purple-400/20 border border-purple-400 flex items-center justify-center text-purple-300">
              <Compass className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Plan of Work (9 Stages)</span>
          </a>

          {/* [Work] */}
          <a
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-emerald-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
              <Trophy className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Our Client Work</span>
          </a>

          {/* [Testimonials] */}
          <a
            href="/testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-yellow-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center text-yellow-300">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Client Testimonies</span>
          </a>

          {/* [Contact] */}
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-rose-300 border border-slate-700/60 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-rose-400/20 border border-rose-400 flex items-center justify-center text-rose-300">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">Contact & Inquiries</span>
          </a>
        </div>
      )}
    </header>
  );
}
