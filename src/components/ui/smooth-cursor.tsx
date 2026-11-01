"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { motion, useSpring } from "motion/react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: React.ReactNode;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

function isTrackablePointer(pointerType: string) {
  return pointerType !== "touch";
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.55 }}
    >
      <g filter="url(#filter0_d_91_7928)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="#050811"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="#00f2fe"
          strokeWidth={2.4}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_91_7928"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(0);
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const isHoveringInteractive = useRef(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  });

  // 1. Force global suppression of all native cursors ONLY on desktop devices (width >= 1024px with fine pointer)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobileOrTouch =
      window.innerWidth < 1024 ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (isMobileOrTouch) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const styleId = "smooth-cursor-suppress-all-native";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.innerHTML = `
        @media (min-width: 1024px) {
          *, *::before, *::after,
          *:hover, *:active, *:focus, *:focus-within,
          html, body, div, span, p, a, button, input, textarea, select, label, svg, path, canvas,
          [role="button"], .cursor-pointer, .cursor-text, .cursor-grab, .cursor-grabbing, [class*="cursor-"] {
            cursor: none !important;
          }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  // 2. Track pointer, animate smooth physics cursor, and handle hover feedback
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const updateVelocity = (currentPos: Position) => {
      const currentTime = performance.now();
      const deltaTime =
        lastUpdateTime.current === 0
          ? 16
          : currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, select, textarea, [role="button"], [class*="cursor-pointer"], .arcade-box, .group'
      );
      if (interactive) {
        isHoveringInteractive.current = true;
        scale.set(1.2);
      } else {
        isHoveringInteractive.current = false;
        scale.set(1);
      }
    };

    const smoothPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      if (!isEnabled) {
        setIsEnabled(true);
      }
      setIsVisible(true);

      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        const targetScale = isHoveringInteractive.current ? 1.15 : 0.95;
        scale.set(targetScale);

        if (timeout !== null) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          scale.set(isHoveringInteractive.current ? 1.2 : 1);
        }, 120);
      }
    };

    let rafId = 0;
    const throttledPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        smoothPointerMove(e);
        rafId = 0;
      });
    };

    const handleMouseDown = () => {
      scale.set(0.85);
    };

    const handleMouseUp = () => {
      scale.set(isHoveringInteractive.current ? 1.2 : 1);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("pointermove", throttledPointerMove, {
      passive: true,
    });
    window.addEventListener("mouseover", handlePointerOver, {
      passive: true,
    });
    window.addEventListener("mousedown", handleMouseDown, {
      passive: true,
    });
    window.addEventListener("mouseup", handleMouseUp, {
      passive: true,
    });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("pointermove", throttledPointerMove);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [cursorX, cursorY, rotation, scale, isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="hidden lg:block pointer-events-none">
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotation,
          scale: scale,
          zIndex: 999999,
          pointerEvents: "none",
          willChange: "transform",
          opacity: isVisible ? 1 : 0,
        }}
        initial={false}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{
          duration: 0.12,
        }}
      >
        {cursor}
      </motion.div>
    </div>
  );
}
