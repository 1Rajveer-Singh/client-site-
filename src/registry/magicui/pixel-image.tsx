"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Grid = {
  rows: number;
  cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

export interface PixelImageProps {
  src: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
  className?: string;
  imageClassName?: string;
  alt?: string;
}

export function PixelImage({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 800,
  maxAnimationDelay = 1000,
  colorRevealDelay = 1100,
  customGrid,
  className = "",
  imageClassName = "",
  alt = "Pixel Image",
}: PixelImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(!grayscaleAnimation);
  const [hasError, setHasError] = useState(false);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (g?: Grid) => {
      if (!g) return false;
      const { rows: r, cols: c } = g;
      return (
        Number.isInteger(r) &&
        Number.isInteger(c) &&
        r >= MIN_GRID &&
        c >= MIN_GRID &&
        r <= MAX_GRID &&
        c <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  useEffect(() => {
    setIsVisible(true);
    if (grayscaleAnimation) {
      const colorTimeout = setTimeout(() => {
        setShowColor(true);
      }, colorRevealDelay);
      return () => clearTimeout(colorTimeout);
    }
  }, [colorRevealDelay, grayscaleAnimation]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const x1 = Number(((col * 100) / cols).toFixed(2));
      const y1 = Number(((row * 100) / rows).toFixed(2));
      const x2 = Number((((col + 1) * 100) / cols).toFixed(2));
      const y2 = Number((((row + 1) * 100) / rows).toFixed(2));

      const clipPath = `polygon(${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%)`;

      // Deterministic pseudo-random seed to satisfy Next.js static prerendering
      const pseudoRand = Math.abs(Math.sin((index + 1) * 9973)) % 1;
      const delay = Math.round(pseudoRand * maxAnimationDelay);
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  if (hasError) {
    return (
      <div
        className={cn(
          "relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className={cn("relative w-full h-full select-none overflow-hidden", className)}
    >
      {pieces.map((piece, index) => (
        <div
          key={index}
          suppressHydrationWarning
          className={cn(
            "absolute inset-0 transition-all ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${alt} piece ${index + 1}`}
            onError={() => setHasError(true)}
            className={cn(
              "w-full h-full object-cover",
              imageClassName,
              grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
            )}
            style={{
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export default PixelImage;
