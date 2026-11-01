"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star, CheckCircle2 } from "lucide-react";
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

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  // Deterministic rotation offsets for cards based on index
  const getCardRotation = (index: number) => {
    const rotations = [-6, 4, -3, 5, -5, 3];
    return rotations[index % rotations.length];
  };

  return (
    <div className={cn("max-w-5xl mx-auto px-4 md:px-8 py-8", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Card Stack with 3D Offset Rotations */}
        <div className="relative h-84 w-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, index) => {
              const rot = getCardRotation(index);
              return (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rot,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.94,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rot,
                    zIndex: isActive(index)
                      ? 20
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -6, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    z: 100,
                    rotate: rot,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-3xl p-7 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-slate-700 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-rose-500" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] w2 px-3 py-1 rounded-full bg-black/70 border border-slate-700 text-cyan-300 font-bold tracking-wide">
                        {testimonial.service || "ENTERPRISE CLIENT"}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Client Photo & Identity */}
                    <div className="my-auto flex items-center gap-4">
                      {testimonial.src ? (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-lg shrink-0 bg-slate-800">
                          <img
                            src={testimonial.src}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-black border-2 border-slate-700 flex items-center justify-center text-xl font-black font-arcade text-yellow-300 shadow-lg shrink-0">
                          {testimonial.initials || testimonial.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="text-2xl font-bold card-title text-white tracking-wide">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs w3 text-cyan-300/90 font-medium">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 font-medium">IMPACT DELIVERED:</span>
                      <span className="text-emerald-400 font-bold w2 text-[11px] tracking-wide">
                        {testimonial.metric || "99.999% SLA"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right: Active Testimonial Quote & Navigation Controls */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-8 h-8 text-blue-600 shrink-0" />
              <span className="text-xs w2 font-bold text-blue-600 tracking-wider">
                VERIFIED REVIEW 0{active + 1} / 0{testimonials.length}
              </span>
            </div>

            <p className="text-base sm:text-lg font-sans font-medium leading-relaxed italic mb-6 text-slate-800">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div className="flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-bold card-title tracking-tight text-slate-950">
                {testimonials[active].name}
              </h3>
              <p className="text-xs sm:text-sm w3 mt-1 font-semibold text-blue-600">
                {testimonials[active].designation}
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows & Auto-shuffle Indicators */}
          <div className="flex items-center justify-between pt-8">
            <div className="flex gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActive(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === dotIdx ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="h-11 w-11 rounded-full bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 flex items-center justify-center group/button transition-all cursor-pointer shadow-xs"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 text-slate-700 group-hover/button:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="h-11 w-11 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center group/button transition-all cursor-pointer shadow-md font-bold"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 text-white group-hover/button:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
