"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export interface TestimonialItem {
    /** Unique identifier for the card */
    id: string | number;
    /** Title displayed for the card */
    title: string;
    /** Description text for the card */
    description: string;
    /** Image URL/path for the card */
    image: string;
}

export interface TestimonialsCardProps {
    /** Array of testimonial items to display */
    items?: TestimonialItem[];
    testimonials?: TestimonialItem[];
    /** Additional CSS classes for the container */
    className?: string;
    /** Width of the card stack (default: 400) */
    width?: number;
    /** Whether to show navigation arrows (default: true) */
    showNavigation?: boolean;
    /** Whether to show the counter (default: true) */
    showCounter?: boolean;
    /** Whether to enable auto-play (default: false) */
    autoPlay?: boolean;
    /** Auto-play interval in ms (default: 3000) */
    autoPlayInterval?: number;
}

export function TestimonialsCard({
    items,
    testimonials,
    className,
    width = 400,
    showNavigation = true,
    showCounter = true,
    autoPlay = false,
    autoPlayInterval = 3000,
}: TestimonialsCardProps) {
    const list = items || testimonials || [];
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Normalize active index so it remains valid if list length changes
    const validIndex = list.length > 0 ? Math.min(activeIndex, list.length - 1) : 0;

    useEffect(() => {
        if (activeIndex >= list.length && list.length > 0) {
            setActiveIndex(list.length - 1);
        }
    }, [list.length, activeIndex]);

    const activeItem = list[validIndex];

    // Auto-play effect: stops on pause, hover, or keyboard focus, resumes when cleared
    useEffect(() => {
        if (!autoPlay || list.length <= 1 || isPaused || isHovered || isFocused) {
            return;
        }

        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % list.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, list.length, isPaused, isHovered, isFocused]);

    const handleNext = () => {
        if (validIndex < list.length - 1) {
            setDirection(1);
            setActiveIndex(validIndex + 1);
        }
    };

    const handlePrev = () => {
        if (validIndex > 0) {
            setDirection(-1);
            setActiveIndex(validIndex - 1);
        }
    };

    // Pre-calculate rotations for visual variety
    const rotations = useMemo(() => [4, -2, -9, 7], []);

    if (!list || list.length === 0) {
        return null;
    }

    return (
        <div
            className={cn("flex items-center justify-center p-8", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            <div
                className="relative grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto] gap-x-8 gap-y-2 w-full"
                style={{ perspective: "1400px", maxWidth: `${width}px` }}
            >
                {/* Counter (Row 1) */}
                {showCounter && (
                    <div className="row-start-1 md:col-start-2 md:row-start-1 text-right font-mono text-sm text-neutral-500 dark:text-neutral-400">
                        {validIndex + 1} / {list.length}
                    </div>
                )}

                {/* Image Card Stack */}
                <div className="row-start-2 col-start-1 md:row-start-1 row-span-3 relative w-full aspect-square">
                    <AnimatePresence custom={direction}>
                        {list.map((item, index) => {
                            const isActive = index === validIndex;
                            const offset = index - validIndex;
                            const cardKey = (item.id !== undefined && item.id !== null && item.id !== "")
                                ? String(item.id)
                                : (item.title ? `${item.title}-${index}` : `testimonial-card-${index}`);

                            return (
                                <motion.div
                                    key={cardKey}
                                    className="absolute inset-0 w-full h-full overflow-hidden border-[6px] bg-neutral-200 dark:bg-neutral-800 border-white dark:border-neutral-700 shadow-2xl rounded-lg"
                                    initial={{
                                        x: offset * 15,
                                        y: Math.abs(offset) * 6,
                                        z: -150 * Math.abs(offset),
                                        scale: 0.85 - Math.abs(offset) * 0.04,
                                        rotateZ: rotations[index % 4],
                                        opacity: isActive ? 1 : 0.5,
                                        zIndex: 10 - Math.abs(offset),
                                    }}
                                    animate={
                                        isActive
                                            ? {
                                                x: [offset * 15, direction === 1 ? -200 : 200, 0],
                                                y: [Math.abs(offset) * 6, 0, 0],
                                                z: [-200, 150, 250],
                                                scale: [0.85, 1.05, 1],
                                                rotateZ: [rotations[index % 4], -5, 0],
                                                opacity: 1,
                                                zIndex: 100,
                                            }
                                            : {
                                                x: offset * 15,
                                                y: Math.abs(offset) * 6,
                                                z: -150 * Math.abs(offset),
                                                rotateZ: rotations[index % 4],
                                                scale: 0.85 - Math.abs(offset) * 0.04,
                                                opacity: 0.55,
                                                zIndex: 10 - Math.abs(offset),
                                            }
                                    }
                                    exit={{
                                        x: direction === 1 ? -250 : 250,
                                        z: -260,
                                        scale: 0.75,
                                        rotateZ: direction === 1 ? -10 : 10,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Text Area (Row 2 in desktop col 2, preserved min-h-[120px]) */}
                <div className="col-start-1 md:col-start-2 md:row-start-2 flex flex-col justify-center min-h-[120px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem ? (activeItem.id || activeItem.title || validIndex) : "active-card"}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.35 }}
                        >
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                {activeItem?.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                {activeItem?.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation & Autoplay Controls (Row 3 in desktop col 2) */}
                {list.length > 1 && (
                    <div className="col-start-1 md:col-start-2 md:row-start-3 flex items-center gap-2 m-auto -mt-2 md:mt-4 md:m-0">
                        {showNavigation && (
                            <button
                                disabled={validIndex === 0}
                                onClick={handlePrev}
                                className={cn(
                                    "flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all",
                                    validIndex === 0
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105"
                                )}
                                aria-label="Previous card"
                            >
                                <ArrowLeft className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                            </button>
                        )}
                        {showNavigation && (
                            <button
                                disabled={validIndex === list.length - 1}
                                onClick={handleNext}
                                className={cn(
                                    "flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all",
                                    validIndex === list.length - 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105"
                                )}
                                aria-label="Next card"
                            >
                                <ArrowRight className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                            </button>
                        )}
                        {autoPlay && (
                            <button
                                type="button"
                                onClick={() => setIsPaused((prev) => !prev)}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105"
                                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                                title={isPaused ? "Resume autoplay" : "Pause autoplay"}
                            >
                                {isPaused ? (
                                    <Play className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                                ) : (
                                    <Pause className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                                )}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export const AnimatedTestimonials = TestimonialsCard;
export default TestimonialsCard;
