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
  onClick?: () => void;
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
        "mx-auto flex h-14 items-center gap-2 sm:gap-2.5 rounded-full bg-slate-950/90 px-3.5 py-2 border border-slate-700/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.2)]",
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
  onClick,
}: FloatingDockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-120, 0, 120], [1, 1.1, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 16 });

  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      className="cursor-pointer select-none"
    >
      <motion.div
        ref={ref}
        style={{ scale }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border",
          hovered
            ? "bg-slate-800 text-yellow-300 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.35)]"
            : "bg-[#101728]/90 text-slate-300 border-slate-700/80 hover:text-white"
        )}
      >
        <div className="flex items-center justify-center shrink-0 w-4 h-4">
          {icon}
        </div>
        <span className="font-heading font-medium tracking-tight text-[11px] sm:text-xs">
          {title}
        </span>
      </motion.div>
    </a>
  );
}
