"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [constraints, setConstraints] = useState({
    top: -600,
    left: -1000,
    right: 0,
    bottom: 0,
  });

  // Keep constraints responsive to window size
  useEffect(() => {
    setMounted(true);

    const updateConstraints = () => {
      if (typeof window === "undefined") return;
      const buttonSize = 52;
      const padding = 16;
      setConstraints({
        top: -(window.innerHeight - buttonSize - padding * 2),
        left: -(window.innerWidth - buttonSize - padding * 2),
        right: 0,
        bottom: 0,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  if (!mounted) return null;

  const phoneNumber = "918529348446";
  const defaultMessage = encodeURIComponent(
    "Hello Rajveer, I visited your website and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      dragElastic={0.08}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ scale: 1.08 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 select-none touch-none cursor-grab active:cursor-grabbing"
    >
      {/* Tooltip / Speech bubble label (hidden while dragging) */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-jakarta font-medium tracking-wide shadow-xl border border-slate-700/80 backdrop-blur-md transition-all duration-150 pointer-events-none ${
          isHovered && !isDragging
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span>Chat with Rajveer</span>
      </div>

      {/* Floating Action Button */}
      <motion.button
        type="button"
        onTap={handleOpenWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp (drag anywhere on screen)"
        title="Drag anywhere • Click to chat"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="relative group w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-grab active:cursor-grabbing ring-2 ring-white/20 hover:ring-white/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full border border-emerald-400/40 animate-pulse pointer-events-none" />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-6.5 h-6.5 fill-current relative z-10 pointer-events-none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
