import React from "react";

// ==========================================
// 1. PERSON THINKING COLLECTION (Vector Illustration)
// Use in: BookingWindowModal (Discovery consultation), Stage 01 Strategic Discovery
// ==========================================

export function PersonThinkingVector({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Person thinking and problem solving"
    >
      {/* Background Soft Accent Glow */}
      <circle cx="100" cy="100" r="82" fill="#F0FDF4" />
      <circle cx="100" cy="100" r="80" stroke="#BBF7D0" strokeWidth="2" strokeDasharray="6 4" />

      {/* Floating Idea / Thinking Thought Bubbles */}
      <circle cx="140" cy="46" r="6" fill="#3B82F6" opacity="0.3" />
      <circle cx="152" cy="34" r="9" fill="#10B981" opacity="0.25" />
      <circle cx="166" cy="18" r="14" fill="#6366F1" opacity="0.2" />

      {/* Thought Spark / Innovation Bulb */}
      <g transform="translate(142, 28) scale(0.9)">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
          fill="#F59E0B"
        />
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" fill="#D97706" />
        <path d="M8 9h8" stroke="#FEF3C7" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Person Body & Posture */}
      {/* Torso / Shoulders */}
      <path
        d="M48 174C48 144.177 72.177 120 102 120H108C137.823 120 162 144.177 162 174V182H48V174Z"
        fill="#1E293B"
      />
      {/* Collar Accent */}
      <path d="M92 120L100 134L108 120" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Neck */}
      <rect x="94" y="98" width="20" height="26" rx="4" fill="#FBCFE8" />

      {/* Head / Face */}
      <ellipse cx="104" cy="74" rx="26" ry="30" fill="#FDE047" />

      {/* Sleek Hair */}
      <path
        d="M78 70C78 48 90 38 106 38C124 38 134 48 134 68C124 64 116 66 108 62C98 58 90 64 78 70Z"
        fill="#0F172A"
      />

      {/* Ear */}
      <circle cx="78" cy="76" r="6" fill="#FDE047" stroke="#0F172A" strokeWidth="2" />

      {/* Thinking Glasses */}
      <rect x="86" y="66" width="16" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.8" stroke="#0F172A" strokeWidth="2.5" />
      <rect x="108" y="66" width="16" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.8" stroke="#0F172A" strokeWidth="2.5" />
      <line x1="102" y1="72" x2="108" y2="72" stroke="#0F172A" strokeWidth="2.5" />
      <line x1="78" y1="72" x2="86" y2="72" stroke="#0F172A" strokeWidth="2.5" />

      {/* Smiling / Thoughtful Expression */}
      <path d="M102 88C106 91 112 91 115 88" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

      {/* Hand on Chin (Classic Thinking Pose) */}
      {/* Arm coming up */}
      <path
        d="M142 168L126 112L116 98C116 98 120 94 124 94C128 94 128 102 128 102L138 124L154 168H142Z"
        fill="#0F172A"
      />
      {/* Hand & Fingers supporting chin */}
      <circle cx="118" cy="94" r="7" fill="#FDE047" stroke="#0F172A" strokeWidth="2" />
      <path d="M116 90C116 86 122 86 122 90V96" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

      {/* Blueprint Grid Sparkles */}
      <path d="M44 58L48 50L52 58L60 62L52 66L48 74L44 66L36 62L44 58Z" fill="#10B981" />
      <path d="M160 114L162 108L164 114L170 116L164 118L162 124L160 118L154 116L160 114Z" fill="#3B82F6" />
    </svg>
  );
}

// ==========================================
// 2. BUSINESS VALUE PILLARS (Flat & Sharp Duotone Vectors)
// 100% Code Ownership, Sub-300ms Benchmarks, Modern AI, 24/7 SLA
// ==========================================

// 1. 100% Code Ownership: Code Document with Golden Key & Security Seal
export function IconCodeOwnership({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Code File Sheet */}
      <rect x="4" y="3" width="20" height="26" rx="2.5" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
      {/* Code Brackets </> */}
      <path d="M10 11L7.5 13.5L10 16" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11L16.5 13.5L14 16" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12.5" y1="10.5" x2="11.5" y2="16.5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Code Lines */}
      <line x1="8" y1="20" x2="16" y2="20" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="13" y2="24" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Golden Security Lock & Key Seal */}
      <circle cx="23" cy="21" r="7" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="23" cy="21" r="5" fill="#FEF3C7" />
      {/* Keyhole */}
      <circle cx="23" cy="20" r="1.5" fill="#B45309" />
      <path d="M22.5 21.5L23.5 21.5L24 24L22 24L22.5 21.5Z" fill="#B45309" />
    </svg>
  );
}

// 2. Sub-300ms Global Benchmarks: High-Speed Gauge & Telemetry Rocket
export function IconSpeedBenchmark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Gauge Outer Ring */}
      <path
        d="M6 22C4.5 19.5 4 16.5 4 14C4 7.37 9.37 2 16 2C22.63 2 28 7.37 28 14C28 16.5 27.5 19.5 26 22"
        stroke="#93C5FD"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* High-Speed Zone Highlight */}
      <path
        d="M20 3.5C22.5 4.8 24.8 7.2 26.2 10"
        stroke="#2563EB"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Speed Dial Ticks */}
      <line x1="8" y1="14" x2="10" y2="14" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="14" x2="22" y2="14" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />

      {/* Speedometer Base */}
      <rect x="10" y="22" width="12" height="4" rx="2" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

      {/* Fast Dial Needle pointing to 300ms max speed */}
      <path
        d="M16 22L22 10"
        stroke="#1E40AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22" r="3" fill="#1D4ED8" stroke="#DBEAFE" strokeWidth="1.5" />

      {/* Lightning Flash Speed Icon */}
      <path
        d="M25 18L22 23H25L23.5 28L28.5 21.5H25.5L27 18H25Z"
        fill="#F59E0B"
        stroke="#D97706"
        strokeWidth="0.8"
      />
    </svg>
  );
}

// 3. Modern AI Integration: AI Neural Processor with Vector Nodes
export function IconAiAutomation({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Silicon Chip Carrier */}
      <rect x="6" y="6" width="20" height="20" rx="4" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" />
      
      {/* External Circuit Pins */}
      <path d="M10 2V6M16 2V6M22 2V6" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 26V30M16 26V30M22 26V30" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 10H6M2 16H6M2 22H6" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 10H30M26 16H30M26 22H30" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />

      {/* Central Neural Brain Core */}
      <rect x="11" y="11" width="10" height="10" rx="2" fill="#7C3AED" />
      
      {/* Multi-Agent Vector Synapses */}
      <circle cx="14" cy="14" r="1.5" fill="#DDD6FE" />
      <circle cx="18" cy="14" r="1.5" fill="#DDD6FE" />
      <circle cx="16" cy="18" r="1.5" fill="#FDE047" />
      <path d="M14 14L16 18L18 14" stroke="#DDD6FE" strokeWidth="1.2" strokeLinecap="round" />

      {/* AI Intelligence Sparkle */}
      <path d="M24 6L24.5 4.5L26 4L24.5 3.5L24 2L23.5 3.5L22 4L23.5 4.5L24 6Z" fill="#F59E0B" />
    </svg>
  );
}

// 4. Continuous SLA Support: 24/7 Clock with Active Live Telemetry Ring
export function IconSlaSupport({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer 99.999% SLA Shield / Disc */}
      <circle cx="16" cy="16" r="12" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
      
      {/* 24/7 Progress Track */}
      <path
        d="M16 4C22.63 4 28 9.37 28 16C28 22.63 22.63 28 16 28"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Clock Face Center */}
      <circle cx="16" cy="16" r="2" fill="#92400E" />
      {/* 24/7 Hands pointing precisely */}
      <line x1="16" y1="16" x2="16" y2="9" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="16" x2="21" y2="18" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />

      {/* Active Telemetry Pulse Beacon */}
      <circle cx="25" cy="7" r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="25" cy="7" r="1.5" fill="#FFFFFF" />

      {/* 24/7 Badge Ribbon */}
      <rect x="7" y="24" width="18" height="6" rx="2" fill="#0F172A" />
      <text x="16" y="28.5" fill="#38BDF8" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        24/7 SLA
      </text>
    </svg>
  );
}

// ==========================================
// 3. BUSINESS MANAGEMENT FLAT VECTORS
// Use in: PlanOfWork & Commercial milestones
// (Clean, flat vector styling for project management)
// ==========================================

// Flat Milestone Contract / Project Delivery Board
export function FlatProjectRoadmapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Clipboard / Tablet Base */}
      <rect x="5" y="4" width="22" height="26" rx="3" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      {/* Header Clip */}
      <rect x="11" y="2" width="10" height="4" rx="1.5" fill="#3B82F6" stroke="#0F172A" strokeWidth="2" />
      {/* Checked Milestones */}
      <rect x="8" y="10" width="4" height="4" rx="1" fill="#10B981" />
      <line x1="15" y1="12" x2="24" y2="12" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      <rect x="8" y="17" width="4" height="4" rx="1" fill="#3B82F6" />
      <line x1="15" y1="19" x2="24" y2="19" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      <rect x="8" y="24" width="4" height="4" rx="1" fill="#F59E0B" />
      <line x1="15" y1="26" x2="21" y2="26" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Flat Performance & Growth Analytics Chart
export function FlatAnalyticsGrowthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Chart Canvas */}
      <rect x="3" y="4" width="26" height="24" rx="3" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      {/* Bar Columns */}
      <rect x="7" y="18" width="3" height="7" fill="#94A3B8" />
      <rect x="13" y="14" width="3" height="11" fill="#38BDF8" />
      <rect x="19" y="10" width="3" height="15" fill="#3B82F6" />
      <rect x="25" y="7" width="3" height="18" fill="#10B981" />
      {/* Upward Growth Arrow */}
      <path d="M7 14L14 9L19 12L27 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 5H27V9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

