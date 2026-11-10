"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
  isActive?: boolean;
  suffix?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <FloatingDockDesktop items={items} className={desktopClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-11 items-center gap-1.5 sm:gap-2 rounded-full bg-slate-950/90 px-2.5 py-1 border border-slate-700/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.2)]",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
  suffix,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: FloatingDockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-120, 0, 120], [1, 1.05, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 16 });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (onMouseLeave) onMouseLeave();
      }}
      whileHover={{ y: -3.5 }}
      whileTap={{ y: 2.5, scale: 0.94 }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 18,
        mass: 0.2,
      }}
      className="cursor-pointer select-none inline-block outline-none"
    >
      <motion.div
        ref={ref}
        style={{ scale }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 select-none",
          "shadow-[0_4px_10px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)_inset]",
          "active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.8)]",
          isActive
            ? "bg-slate-800 text-white border-slate-600 shadow-xs"
            : hovered
            ? "bg-slate-800/80 text-white border-slate-700"
            : "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
        )}
      >
        <div className="flex items-center justify-center shrink-0 w-4 h-4 transition-transform duration-200">
          {icon}
        </div>
        <span className="font-heading font-medium tracking-tight text-[11px] sm:text-xs">
          {title}
        </span>
        {suffix}
      </motion.div>
    </motion.a>
  );
}
