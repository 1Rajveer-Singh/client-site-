"use client";

import React, { memo, forwardRef } from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// LiquidMetal - Ultra-fast CSS hardware-accelerated metallic border effect
// ============================================================================

export interface LiquidMetalProps {
  /** Base background color of the liquid metal */
  colorBack?: string;
  /** Tint/highlight color for the chrome effect */
  colorTint?: string;
  speed?: number;
  repetition?: number;
  distortion?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidMetal = memo(function LiquidMetal({
  colorBack = "#06b6d4",
  colorTint = "#facc15",
  className,
  style,
}: LiquidMetalProps) {
  return (
    <div
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      style={style}
    >
      <div
        className="w-[250%] h-[250%] -top-[75%] -left-[75%] absolute animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, ${colorBack}, ${colorTint}, #38bdf8, ${colorBack})`,
          opacity: 0.9,
        }}
      />
    </div>
  );
});

LiquidMetal.displayName = "LiquidMetal";

// ============================================================================
// LiquidMetalButton - Premium button with liquid metal border effect
// ============================================================================

export interface LiquidMetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  borderWidth?: number;
  metalConfig?: Omit<LiquidMetalProps, "className" | "style">;
  size?: "sm" | "md" | "lg";
  href?: string;
  innerClassName?: string;
}

export const LiquidMetalButton = forwardRef<
  HTMLButtonElement,
  LiquidMetalButtonProps
>(
  (
    {
      children,
      icon,
      rightIcon,
      borderWidth = 3,
      metalConfig,
      size = "md",
      className,
      innerClassName,
      disabled,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "py-2 px-4 gap-2.5 text-xs font-semibold",
      md: "py-2.5 px-6 gap-3 text-sm font-bold",
      lg: "py-3.5 px-8 gap-3.5 text-base font-bold",
    };

    const iconSizes = {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-9 h-9",
    };

    const content = (
      <div
        className="relative rounded-full overflow-hidden shadow-[0_12px_35px_-8px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-[1.03]"
        style={{ padding: borderWidth }}
      >
        {/* Liquid Metal Border Layer */}
        <LiquidMetal
          colorBack={metalConfig?.colorBack ?? "#06b6d4"}
          colorTint={metalConfig?.colorTint ?? "#facc15"}
          className="absolute inset-0 z-0 rounded-full"
        />

        {/* Inner Button Body */}
        <div
          className={cn(
            "relative z-10 rounded-full flex items-center justify-center font-heading transition-colors duration-200",
            "bg-slate-950 text-white",
            sizeStyles[size],
            innerClassName
          )}
        >
          {icon && (
            <div
              className={cn(
                "rounded-full flex items-center justify-center shrink-0",
                iconSizes[size]
              )}
            >
              {icon}
            </div>
          )}
          <span className="tracking-tight select-none">{children}</span>
          {rightIcon && (
            <div
              className={cn(
                "rounded-full flex items-center justify-center shrink-0 ml-1",
                iconSizes[size]
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );

    if (href) {
      return (
        <a
          href={href}
          className={cn(
            "relative group inline-block cursor-pointer border-none bg-transparent p-0 outline-none transition-transform active:scale-[0.98]",
            className
          )}
          onClick={onClick as any}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "relative group inline-block cursor-pointer border-none bg-transparent p-0 outline-none transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {content}
      </button>
    );
  }
);

LiquidMetalButton.displayName = "LiquidMetalButton";

export default LiquidMetalButton;
