"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  company?: string;
  src?: string;
  initials?: string;
  service?: string;
  metric?: string;
  metricLabel?: string;
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
      className={cn("w-full max-w-5xl mx-auto px-2 sm:px-4 py-4 sm:py-6", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stage Container */}
      <div className="relative w-full h-[480px] sm:h-[400px] md:h-[360px] flex items-center justify-center overflow-hidden">
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
              scale: 0.88,
              opacity: 0.45,
              zIndex: 10,
              filter: "blur(1px)",
            };
          } else if (status === "right") {
            animateProps = {
              x: "46%",
              scale: 0.88,
              opacity: 0.45,
              zIndex: 10,
              filter: "blur(1px)",
            };
          } else if (status === "hidden") {
            animateProps = {
              x: index > active ? "90%" : "-90%",
              scale: 0.72,
              opacity: 0,
              zIndex: 0,
              filter: "blur(3px)",
            };
          }

          return (
            <motion.div
              key={testimonial.name}
              initial={false}
              animate={animateProps}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Smooth cubic bezier
              }}
              onClick={() => {
                if (status === "left") handlePrev();
                if (status === "right") handleNext();
              }}
              className={cn(
                "absolute w-[95%] sm:w-[88%] md:w-[760px] max-w-full origin-center select-none",
                status === "center"
                  ? "cursor-default"
                  : status !== "hidden"
                  ? "cursor-pointer"
                  : "pointer-events-none"
              )}
            >
              {/* New Unslopped Card Design Embedded in Carousel */}
              <div className="w-full rounded-2xl p-6 sm:p-7 md:p-8 bg-white border border-slate-200/90 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)] text-slate-900 relative flex flex-col justify-between">
                <div>
                  {/* Top Row: Client Info & Outcome Pill */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                        {testimonial.src ? (
                          <img
                            src={testimonial.src}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono font-bold text-slate-600">
                            {testimonial.initials || testimonial.name.slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base sm:text-lg font-bold font-heading text-slate-950 truncate">
                            {testimonial.name}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-sans text-slate-500 truncate mt-0.5">
                          {testimonial.designation} {testimonial.company ? `· ${testimonial.company}` : ""}
                        </span>
                      </div>
                    </div>

                    {/* Impact Metric Pill */}
                    {testimonial.metric && (
                      <div className="shrink-0 text-right">
                        <span className="px-2.5 sm:px-3 py-1 rounded-md bg-slate-50 border border-slate-200/90 text-[11px] sm:text-xs font-mono font-semibold text-slate-800 block">
                          {testimonial.metric}
                        </span>
                        {testimonial.metricLabel && (
                          <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                            {testimonial.metricLabel}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3.5">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base font-sans text-slate-700 leading-relaxed font-normal">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Footer Line with Service Domain */}
                {testimonial.service && (
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Delivered Architecture</span>
                    <span className="font-semibold text-slate-800">
                      {testimonial.service}
                    </span>
                  </div>
                )}
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
          className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 flex items-center justify-center shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 text-slate-700" />
        </button>

        {/* Dots Pagination */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === active
                  ? "w-6 bg-slate-900"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 flex items-center justify-center shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </div>
  );
};
