"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// NeonBorder — Originkit
// A glowing neon light that chases your frame's edge with real layered bloom,
// corner-accurate motion, and full control over color, speed, and glow.
// ============================================================================

export interface NeonBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Primary neon light color (e.g. "#00e5ff", "#3b82f6", "#ef4444") */
  color?: string;
  /** Secondary or trail color */
  secondaryColor?: string;
  /** Track / base border color (subtle outline behind the beam) */
  trackColor?: string;
  /** Border thickness in pixels (default: 2) */
  borderWidth?: number;
  /** Border radius in pixels (default: 16) */
  borderRadius?: number;
  /** Animation duration in seconds per full loop (default: 5) */
  duration?: number;
  /** Length of the neon beam as a percentage (10 to 60, default: 28) */
  beamLength?: number;
  /** Glow / bloom multiplier (default: 1.2) */
  glow?: number;
  /** Reverse travel direction */
  reverse?: boolean;
  className?: string;
  containerClassName?: string;
}

const __originkitPresetProps = {
  color: "#00e5ff",
  secondaryColor: "#3b82f6",
  trackColor: "rgba(255, 255, 255, 0.08)",
  borderWidth: 2,
  borderRadius: 16,
  duration: 5,
  beamLength: 28,
  glow: 1.2,
  reverse: false,
};

export default function NeonBorder({
  children,
  color = __originkitPresetProps.color,
  secondaryColor = __originkitPresetProps.secondaryColor,
  trackColor = __originkitPresetProps.trackColor,
  borderWidth = __originkitPresetProps.borderWidth,
  borderRadius = __originkitPresetProps.borderRadius,
  duration = __originkitPresetProps.duration,
  beamLength = __originkitPresetProps.beamLength,
  glow = __originkitPresetProps.glow,
  reverse = __originkitPresetProps.reverse,
  className,
  containerClassName,
  style,
  ...props
}: NeonBorderProps) {
  const uniqueId = useId().replace(/[:]/g, "");
  const gradientId = `neon-grad-${uniqueId}`;
  const filterId = `neon-bloom-${uniqueId}`;

  const insetOffset = borderWidth / 2;
  const dashLength = Math.max(5, Math.min(60, beamLength));
  const dashGap = 100 - dashLength;

  return (
    <div
      className={cn("relative group/neon block", containerClassName)}
      style={{ borderRadius, ...style }}
      {...props}
    >
      {/* Content wrapper */}
      <div
        className={cn("relative z-10 w-full h-full overflow-hidden", className)}
        style={{ borderRadius }}
      >
        {children}
      </div>

      {/* SVG Neon Layer with Real Layered Bloom & Corner Accuracy */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        style={{ borderRadius }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Animated Linear / Conic Style Traveling Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="60%" stopColor={secondaryColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>

          {/* Layered Bloom Gaussian Blur Filters */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={4 * glow} result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation={10 * glow} result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Track Outline (Subtle frame definition) */}
        <rect
          x={insetOffset}
          y={insetOffset}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          rx={Math.max(0, borderRadius - insetOffset)}
          ry={Math.max(0, borderRadius - insetOffset)}
          fill="none"
          stroke={trackColor}
          strokeWidth={borderWidth}
          vectorEffect="non-scaling-stroke"
        />

        {/* 2. Outer Ambient Diffused Bloom */}
        <rect
          x={insetOffset}
          y={insetOffset}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          rx={Math.max(0, borderRadius - insetOffset)}
          ry={Math.max(0, borderRadius - insetOffset)}
          fill="none"
          stroke={color}
          strokeWidth={borderWidth * 2.5}
          strokeOpacity={0.45 * glow}
          pathLength={100}
          strokeDasharray={`${dashLength} ${dashGap}`}
          className="neon-beam-animated"
          style={{
            filter: `blur(${8 * glow}px)`,
            animation: `originkitNeonTravel ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
          }}
          vectorEffect="non-scaling-stroke"
        />

        {/* 3. Medium Layered Bloom Halo */}
        <rect
          x={insetOffset}
          y={insetOffset}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          rx={Math.max(0, borderRadius - insetOffset)}
          ry={Math.max(0, borderRadius - insetOffset)}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={borderWidth * 1.5}
          strokeOpacity={0.85 * glow}
          pathLength={100}
          strokeDasharray={`${dashLength} ${dashGap}`}
          className="neon-beam-animated"
          style={{
            filter: `blur(${2.5 * glow}px)`,
            animation: `originkitNeonTravel ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
          }}
          vectorEffect="non-scaling-stroke"
        />

        {/* 4. Sharp High-Intensity Core Neon Line */}
        <rect
          x={insetOffset}
          y={insetOffset}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          rx={Math.max(0, borderRadius - insetOffset)}
          ry={Math.max(0, borderRadius - insetOffset)}
          fill="none"
          stroke={color}
          strokeWidth={borderWidth}
          pathLength={100}
          strokeDasharray={`${dashLength} ${dashGap}`}
          strokeLinecap="round"
          className="neon-beam-animated"
          style={{
            animation: `originkitNeonTravel ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
          }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Embedded CSS for 60/120fps Keyframe Loop */}
      <style jsx>{`
        @keyframes originkitNeonTravel {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}

export { NeonBorder };

