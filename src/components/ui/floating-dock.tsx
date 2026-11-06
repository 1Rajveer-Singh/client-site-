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
  isActive,
  onClick,
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
          "relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 select-none",
          "shadow-[0_4px_10px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)_inset]",
          "active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.8)]",
          isActive
            ? "bg-gradient-to-b from-slate-800 to-slate-900 text-cyan-300 border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.35)]"
            : hovered
            ? "bg-gradient-to-b from-slate-800 to-slate-900 text-yellow-300 border-yellow-400 shadow-[0_8px_20px_rgba(250,204,21,0.35)]"
            : "bg-gradient-to-b from-[#162036]/90 to-[#0e1626]/95 text-slate-300 border-slate-700/80 hover:text-white hover:border-slate-500"
        )}
      >
        <div className="flex items-center justify-center shrink-0 w-4 h-4 transition-transform duration-200">
          {icon}
        </div>
        <span className="font-heading font-medium tracking-tight text-[11px] sm:text-xs">
          {title}
        </span>
      </motion.div>
    </motion.a>
  );
}
