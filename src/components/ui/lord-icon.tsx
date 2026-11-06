"use client";

import React, { useEffect, useState } from "react";

// Global singleton flag to prevent duplicate custom element registration
let isDefined = false;

export interface LordIconProps {
  /** 8-character ID (e.g. 'nobciafz') or full URL 'https://cdn.lordicon.com/...' */
  src: string;
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "boomerang" | "in";
  colors?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function LordIcon({
  src,
  trigger = "hover",
  colors = "primary:#ffffff,secondary:#38bdf8",
  size = 28,
  className = "",
  style,
}: LordIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@lordicon/element")
        .then(({ defineElement }) => {
          if (!isDefined) {
            defineElement();
            isDefined = true;
          }
          setMounted(true);
        })
        .catch(() => {
          setMounted(true);
        });
    }
  }, []);

  const fullSrc = src.startsWith("http") ? src : `https://cdn.lordicon.com/${src}.json`;

  if (!mounted) {
    return (
      <span
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "inline-block",
          ...style,
        }}
        className={className}
      />
    );
  }

  return React.createElement("lord-icon", {
    src: fullSrc,
    trigger,
    colors,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      display: "inline-block",
      verticalAlign: "middle",
      ...style,
    },
    class: className,
  });
}

export { LordIcon };
