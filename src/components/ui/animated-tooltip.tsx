"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedTooltipItem {
  id: number;
  name: string;
  designation: string;
  image?: string;
  initials?: string;
  accent?: string;
}

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: AnimatedTooltipItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex flex-row items-center", className)}>
      {items.map((item) => (
        <div
          className="group relative -mr-3"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center rounded-xl bg-slate-950 px-3 py-1.5 text-xs shadow-xl border border-slate-700"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 z-30 h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                <div className="font-bold text-white font-arcade text-[10px]">
                  {item.name}
                </div>
                <div className="text-slate-400 text-[9px] font-mono">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-white bg-slate-900 text-yellow-300 font-arcade text-xs font-black shadow-md group-hover:scale-110 group-hover:z-30 transition-all cursor-pointer">
            {item.initials || item.name.slice(0, 2).toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltip;
