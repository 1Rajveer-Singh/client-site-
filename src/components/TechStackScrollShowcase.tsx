"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/components/TechIcons";

interface CharacterProps {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
}

interface TechBadgeProps {
  name: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
}

export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 45, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 35, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5], [0.3, 0.7, 1]);

  return (
    <motion.span
      className={cn(
        "inline-block font-extrabold uppercase tracking-tight text-slate-900 transition-colors",
        isSpace && "w-3 sm:w-5"
      )}
      style={{
        x,
        rotateX,
        opacity,
      }}
    >
      {char}
    </motion.span>
  );
};

export const TechItemV2 = ({
  name,
  index,
  centerIndex,
  scrollYProgress,
}: TechBadgeProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 65, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 35, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.4, 0.8, 1]);

  return (
    <motion.div
      className="inline-flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md mx-1 sm:mx-2 min-w-[70px] sm:min-w-[90px] group hover:border-blue-500/50 hover:shadow-lg transition-all"
      style={{
        x,
        scale,
        y,
        opacity,
        transformOrigin: "center",
      }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-slate-800">
        {getTechIcon(name)}
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-700 tracking-tight text-center">
        {name}
      </span>
    </motion.div>
  );
};

export const TechItemV3 = ({
  name,
  index,
  centerIndex,
  scrollYProgress,
}: TechBadgeProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 80, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 35, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 25, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.35, 0.8, 1]);

  return (
    <motion.div
      className="inline-flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md mx-1 sm:mx-2 min-w-[70px] sm:min-w-[90px] group hover:border-blue-500/50 hover:shadow-lg transition-all"
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        transformOrigin: "center",
      }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-slate-800">
        {getTechIcon(name)}
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-700 tracking-tight text-center">
        {name}
      </span>
    </motion.div>
  );
};

export const Bracket = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={cn("h-8 sm:h-12 text-slate-900 inline-block", className)}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};

export default function TechStackScrollShowcase() {
  const targetRef1 = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"],
  });

  const headline = "ENGINEERED FOR SCALE";
  const characters = headline.split("");
  const centerCharIndex = Math.floor(characters.length / 2);

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Docker",
    "PostgreSQL",
    "Cloudflare",
    "OpenAI",
  ];
  const centerTechIndex = Math.floor(technologies.length / 2);

  return (
    <section className="relative w-full bg-slate-50 border-t border-b border-slate-200 overflow-hidden select-none">
      {/* Scroll indicator banner */}
      <div className="relative pt-12 pb-4 text-center z-20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-500 bg-white border border-slate-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          SCROLL TO EXPLORE ARCHITECTURE CONVERGENCE
        </span>
      </div>

      {/* Track 1: Typography 3D Convergence */}
      <div
        ref={targetRef1}
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4"
      >
        <div
          className="w-full max-w-5xl text-center text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter"
          style={{ perspective: "600px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={`c_${index}`}
              char={char}
              index={index}
              centerIndex={centerCharIndex}
              scrollYProgress={scrollYProgress1}
            />
          ))}
        </div>
      </div>

      {/* Track 2: V-Arc Tech Convergence */}
      <div
        ref={targetRef2}
        className="relative -mt-24 sm:-mt-32 flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-4"
      >
        <p className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-12">
          <Bracket className="h-8 sm:h-12 text-slate-800" />
          <span className="font-heading uppercase tracking-wide">
            Enterprise Cloud & Modern Core
          </span>
          <Bracket className="h-8 sm:h-12 scale-x-[-1] text-slate-800" />
        </p>

        <div className="w-full max-w-5xl flex items-center justify-center flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechItemV2
              key={`tech_v2_${tech}`}
              name={tech}
              index={index}
              centerIndex={centerTechIndex}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* Track 3: Rotational Fan Convergence */}
      <div
        ref={targetRef3}
        className="relative -mt-24 sm:-mt-32 flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-4 pb-20"
      >
        <p className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold tracking-tight text-slate-900 mb-8 sm:mb-12">
          <Bracket className="h-8 sm:h-12 text-blue-600" />
          <span className="font-heading uppercase tracking-wide text-blue-600">
            Intelligent AI & Automated Systems
          </span>
          <Bracket className="h-8 sm:h-12 scale-x-[-1] text-blue-600" />
        </p>

        <div
          className="w-full max-w-5xl flex items-center justify-center flex-wrap gap-2"
          style={{ perspective: "800px" }}
        >
          {technologies.map((tech, index) => (
            <TechItemV3
              key={`tech_v3_${tech}`}
              name={tech}
              index={index}
              centerIndex={centerTechIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
