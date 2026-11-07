"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TextScrollRevealProps {
  text: string;
  className?: string;
  containerClassName?: string;
  as?: "p" | "span" | "div" | "h2" | "h3";
}

/**
 * Text Scroll On Reveal Effect
 * Words progressively illuminate as the user scrolls through the section.
 * Inspired by modern scroll-driven typography & CodePen thebabydino (KKLWBJZ).
 * Single DOM node per word ensures zero ghosting, crisp fonts, and zero layout shift.
 */
export function TextScrollReveal({
  text,
  className,
  containerClassName,
  as: Component = "p",
}: TextScrollRevealProps) {
  const targetRef = useRef<HTMLParagraphElement | null>(null);

  // Tracks the element moving through viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <Component
      ref={targetRef}
      className={cn("flex flex-wrap leading-relaxed select-none", containerClassName)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.5 / words.length, 1);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} className={className}>
            {word}
          </Word>
        );
      })}
    </Component>
  );
}

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
  className?: string;
}

const Word = ({ children, progress, range, className }: WordProps) => {
  // Smoothly reveals from 22% faded opacity to 100% full opacity, matching the CodePen wipe
  const opacity = useTransform(progress, range, [0.22, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={cn(
        "inline-block mr-1.5 sm:mr-2 text-slate-900 will-change-[opacity]",
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export default TextScrollReveal;
