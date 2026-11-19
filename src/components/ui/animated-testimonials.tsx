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
    const [isManualNav, setIsManualNav] = useState(false);

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
            setIsManualNav(false);
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % list.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, list.length, isPaused, isHovered, isFocused]);

    const handleNext = () => {
        if (validIndex < list.length - 1) {
            setIsManualNav(true);
            setDirection(1);
            setActiveIndex(validIndex + 1);
        }
    };

    const handlePrev = () => {
        if (validIndex > 0) {
            setIsManualNav(true);
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
            className={cn("flex items-center justify-center py-6 px-3 sm:px-6 w-full overflow-hidden", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            <div
                className="relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
                style={{ perspective: "1200px", maxWidth: `${width}px` }}
            >
                {/* Image Card Stack (Col 1 on desktop, Top on mobile) */}
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-none aspect-square mx-auto">
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
                                    aria-hidden={!isActive}
                                    className="absolute inset-0 w-full h-full overflow-hidden border-[5px] sm:border-[6px] bg-neutral-200 dark:bg-neutral-800 border-white dark:border-neutral-700 shadow-xl sm:shadow-2xl rounded-2xl"
                                    initial={{
                                        x: offset * 12,
                                        y: Math.abs(offset) * 6,
                                        z: -120 * Math.abs(offset),
                                        scale: 0.88 - Math.abs(offset) * 0.04,
                                        rotateZ: rotations[index % 4],
                                        opacity: isActive ? 1 : 0.5,
                                        zIndex: 10 - Math.abs(offset),
                                    }}
                                    animate={
                                        isActive
                                            ? {
                                                x: [offset * 12, direction === 1 ? -120 : 120, 0],
                                                y: [Math.abs(offset) * 6, 0, 0],
                                                z: [-150, 80, 180],
                                                scale: [0.88, 1.03, 1],
                                                rotateZ: [rotations[index % 4], -4, 0],
                                                opacity: 1,
                                                zIndex: 100,
                                            }
                                            : {
                                                x: offset * 12,
                                                y: Math.abs(offset) * 6,
                                                z: -120 * Math.abs(offset),
                                                rotateZ: rotations[index % 4],
                                                scale: 0.88 - Math.abs(offset) * 0.04,
                                                opacity: 0.55,
                                                zIndex: 10 - Math.abs(offset),
                                            }
                                    }
                                    exit={{
                                        x: direction === 1 ? -180 : 180,
                                        z: -200,
                                        scale: 0.8,
                                        rotateZ: direction === 1 ? -8 : 8,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.65,
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

                {/* Content Column (Col 2 on desktop, Bottom on mobile) */}
                <div className="flex flex-col justify-between w-full h-full gap-4 text-left">
                    {/* Counter */}
                    {showCounter && (
                        <div className="font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                            {validIndex + 1} / {list.length}
                        </div>
                    )}

                    {/* Text Area (Row 2 in desktop, persistent live region) */}
                    <div
                        className="flex flex-col justify-center min-h-[140px] sm:min-h-[130px] w-full"
                        aria-live={isManualNav ? "polite" : "off"}
                        aria-atomic="true"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem ? (activeItem.id || activeItem.title || validIndex) : "active-card"}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg sm:text-xl font-bold font-heading text-neutral-900 dark:text-white leading-snug">
                                    {activeItem?.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed font-sans">
                                    {activeItem?.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation & Controls */}
                    {list.length > 1 && (
                        <div className="flex items-center gap-2 pt-2">
                            {showNavigation && (
                                <button
                                    disabled={validIndex === 0}
                                    onClick={handlePrev}
                                    className={cn(
                                        "flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all",
                                        validIndex === 0
                                            ? "opacity-40 cursor-not-allowed"
                                            : "hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95"
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
                                            ? "opacity-40 cursor-not-allowed"
                                            : "hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95"
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
                                    className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 ml-1"
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
        </div>
    );
}

export const AnimatedTestimonials = TestimonialsCard;
export default TestimonialsCard;
