"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src?: string;
  initials?: string;
  service?: string;
  metric?: string;
  rating?: number;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: TestimonialItem[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay moves right-to-left every 5.5s
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [autoplay, isPaused, handleNext]);

  // Determine stage position: "center" (front), "left" (behind left), "right" (behind right), or "hidden"
  const getCardStatus = (index: number) => {
    if (index === active) return "center";
    if (index === (active - 1 + total) % total) return "left";
    if (index === (active + 1) % total) return "right";
    return "hidden";
  };

  return (
    <div
      className={cn("w-full max-w-6xl mx-auto px-2 sm:px-6 py-6 sm:py-10", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stage Container */}
      <div className="relative w-full h-[520px] sm:h-[420px] md:h-[370px] flex items-center justify-center overflow-hidden">
        {testimonials.map((testimonial, index) => {
          const status = getCardStatus(index);

          // Position configs
          let animateProps = {
            x: "0%",
            scale: 1,
            opacity: 1,
            zIndex: 30,
            filter: "blur(0px)",
          };

          if (status === "left") {
            animateProps = {
              x: "-46%",
              scale: 0.86,
              opacity: 0.42,
              zIndex: 10,
              filter: "blur(1.5px)",
            };
          } else if (status === "right") {
            animateProps = {
              x: "46%",
              scale: 0.86,
              opacity: 0.42,
              zIndex: 10,
              filter: "blur(1.5px)",
            };
          } else if (status === "hidden") {
            animateProps = {
              x: index > active ? "90%" : "-90%",
              scale: 0.7,
              opacity: 0,
              zIndex: 0,
              filter: "blur(4px)",
            };
          }

          return (
            <motion.div
              key={testimonial.name}
              initial={false}
              animate={animateProps}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1], // Buttery smooth cubic bezier
              }}
              onClick={() => {
                if (status === "left") handlePrev();
                if (status === "right") handleNext();
              }}
              className={cn(
                "absolute w-[92%] sm:w-[82%] md:w-[740px] max-w-full origin-center select-none",
                status === "center" ? "cursor-default" : status !== "hidden" ? "cursor-pointer" : "pointer-events-none"
              )}
            >
              {/* Card divided into two parts vertically: Left (Picture + Name + Designation), Right (Message) */}
              <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-slate-700/80 text-white shadow-2xl relative overflow-hidden">
                {/* Luminous Top Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-center">
                  
                  {/* Left Column: First Picture, then next line Name, then Designation */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left md:pr-6 md:border-r border-slate-800/80 shrink-0">
                    {/* 1. Picture */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] mb-3 shrink-0 bg-slate-800">
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 2. Name */}
                    <h4 className="text-lg sm:text-xl font-black font-heading text-white tracking-tight leading-snug">
                      {testimonial.name}
                    </h4>

                    {/* 3. Designation */}
                    <p className="text-xs sm:text-[13px] font-sans font-medium text-cyan-300 mt-1 leading-snug">
                      {testimonial.designation}
                    </p>

                    {/* Star Ratings */}
                    <div className="flex items-center gap-1 mt-2.5">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Message & Metrics */}
                  <div className="md:col-span-8 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-sm sm:text-base font-sans leading-relaxed text-slate-100 italic font-normal">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Controls & Carousel Indicators */}
      <div className="mt-6 flex items-center justify-center gap-4">
        {/* Prev Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          className="w-11 h-11 rounded-2xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>

        {/* Dots Pagination */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === active
                  ? "w-7 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="w-11 h-11 rounded-2xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>
      </div>
    </div>
  );
};
