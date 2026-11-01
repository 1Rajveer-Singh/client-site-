# IT PROGRAMMER SOLUTION - Next.js Digital Platform

A futuristic, high-performance Next.js application featuring a cinematic horizontal wave opening loader for **IT PROGRAMMER SOLUTION**.

---

## 🌟 Key Features

### 1. Futuristic Horizontal Wave Opening Loader (`WaveIntroLoader.tsx`)
- **Multi-harmonic Canvas Wave Engine**: 5 distinct horizontal wave streams oscillating with varied frequencies, amplitudes, and radiant gradient color strokes.
- **Luminous Additive Glow**: Uses `globalCompositeOperation = "lighter"` and soft radial blur ribbons for a vibrant, digital neon aesthetic.
- **Dynamic Center Typography**: **“IT PROGRAMMER SOLUTION”** glows prominently at the center, revealed by a flowing chromatic light sweep that tracks the wave harmonics.
- **Photons & Wave Crest Sparks**: 45+ energy particles flowing dynamically across the wave vector curves.
- **Digital Frequency Synthesizer Bars & Precision Telemetry**: Real-time progress tracker (0% to 100%) showing system initialization milestones.
- **Cinematic Reveal Transition**: Smooth horizontal sweep / zoom reveal uncovering the enterprise portal.

### 2. Session Persistence & Replay
- Plays automatically **once per session** using `sessionStorage.getItem("itps_intro_seen")`.
- Replayable anytime via:
  - Navigation bar `Replay Intro` button
  - Hero section `Replay Wave Intro` CTA
  - Persistent floating **Wave Studio Control Dock**
  - Footer `Replay Intro Animation` link

### 3. Accessibility & Performance First
- Full compliance with `prefers-reduced-motion`: automatically disables oscillation for users with motion sensitivity, presenting a calm static branding transition.
- Immediate **Skip Intro [ESC]** button with keyboard listener.
- Zero external heavy 3D bundles — built with lightweight HTML5 Canvas + Tailwind CSS + Next.js App Router.

### 4. Interactive Wave Studio Dock (`WaveControlDock.tsx`)
- Switch wave color schemes live:
  - **Cyberpunk Glow** (Electric Cyan, Neon Pink, Laser Green)
  - **Electric Indigo** (Sky Blue, Cobalt, Violet)
  - **Emerald Quantum** (Matrix Emerald, Cyber Cyan, Lime)
  - **Solar Flare** (Gold Amber, Orange, Crimson)

---

## 🚀 Getting Started

The application is located at:
`C:\Users\rkste\.gemini\antigravity\scratch\it-programmer-solution`

### Run Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Build:
```bash
npm run build
npm start
```
