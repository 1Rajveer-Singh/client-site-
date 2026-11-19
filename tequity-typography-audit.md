# Full Typography Audit of Tequity.tech

**Audited Domain:** `https://tequity.tech`  
**Engine & Stack:** Next.js (App Router), Tailwind CSS v4, Webflow/Custom Design Tokens  
**Scope:** `<main>` element only (Hero, Stats, Why Tequity, 1 Partner Every Stage, Capabilities, Free for Founders, Testimonials, Case Studies, Blog, CTA Banner). Excluded header, navigation, and footer.  
**Measurement Viewports:** 1440px (Desktop), 768px (Tablet), 390px (Mobile)

---

## A. Fonts Loaded

Every font listed below was extracted directly from live `@font-face` definitions, font preload tags, and Next.js font loader declarations:

| Font Family | Declared Weights | Style | Source | System / Next.js Variable | Primary Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`IBM Plex Serif`** | `200`, `300`, `400`, `500`, `700` | Normal & Italic | Self-hosted Next.js static asset (`/assets/fonts/` & `/_next/static/media/`) | `--font-serif`, `--_🔠-typography---font--heading-serif` | All display titles, H0–H5, editorial headings, stat counters, and quote text. |
| **`IBM Plex Sans Variable`** | `100` – `700` (Variable) | Normal & Italic | Self-hosted Next.js static asset (`/_next/static/media/IBMPlexSans_Variable-...ttf`) | `--font-sans`, `--_🔠-typography---font--body`, `--_🔠-typography---font--button` | Body copy, card descriptions, lead paragraphs, buttons, navigation items. |
| **`IBM Plex Mono`** | `100`, `200`, `300`, `400`, `500`, `600`, `700` | Normal & Italic | Self-hosted Next.js static asset (`/_next/static/media/IBMPlexMono_...ttf`) | `--font-mono`, `--_🔠-typography---font--label` | Section eyebrows, category tags, stat sub-labels, pricing tiers, diagram labels, and client badges. |
| **`Raveo Display`** | `500` (Medium) | Normal | Self-hosted Webflow asset (`/assets/fonts/..._Raveo-Display-Med...`) | `--font-raveo` | Brand identity accent marks. |

---

## B. Main Typography Table (by Text Role inside `<main>`)

| Section | Where Used | Element | Sample Text | Font Name | Fallback Stack | Size (px, Desktop 1440px) | Size Authored | Size Tablet (768px) | Size Mobile (390px) | Weight | Line Height (px & ratio) | Letter Spacing | Text Transform | Font Style | Color (Hex) | Element Width (px, Desktop) | Max-Width (Authored) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | Section Title | `h1` | "Product Partner for Founders" | `IBM Plex Serif` | `Georgia, serif` | 58.56px | `clamp(2.25rem, 2.4vw + 1.5rem, 4rem)` | 42.43px | 36.00px | 400 | 59.73px (1.02) | `-0.025em` | none | normal | `#141312` | 896px | none (`break-words`) |
| **Hero** | Italic Accent inside H1 | `span` | "From Idea to IPO" | `IBM Plex Serif` | `Georgia, serif` | 58.56px | `inherit` | 42.43px | 36.00px | 400 | 59.73px (1.02) | `-0.025em` | none | italic | `#141312` | auto | none |
| **Hero** | Lead Paragraph | `p` | "From contracting your first engineer to..." | `IBM Plex Sans Variable` | `Arial, sans-serif` | 20.00px | `1.25rem` (`.tq-body-lg`) | 20.00px | 18.00px | 400 | 29.00px (1.45) | `normal` | none | normal | `#141312d9` (ink/85) | 576px | `max-w-xl` (36rem / 576px) |
| **Hero** | Primary Button | `a` | "Schedule Discovery Call" | `IBM Plex Sans Variable` | `Arial, sans-serif` | 15.00px | `0.9375rem` | 15.00px | 14.00px | 500 | 22.00px (1.46) | `normal` | none | normal | `#ffffff` | 210px | none |
| **Hero** | Secondary Button | `a` | "Explore Capabilities" | `IBM Plex Sans Variable` | `Arial, sans-serif` | 15.00px | `0.9375rem` | 15.00px | 14.00px | 500 | 22.00px (1.46) | `normal` | none | normal | `#141312` | 180px | none |
| **Hero** | Social Proof Label | `div` | "Trusted by" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#ff5500` | 120px | none |
| **Stats** | Stat Large Metric | `p` | "100 +", "25 +", "1M +" | `IBM Plex Serif` | `Georgia, serif` | 88.00px | `clamp(3.5rem, 5vw + 1.5rem, 5.5rem)` | 62.40px | 56.00px | 400 | 88.00px (1.00) | `-0.03em` | none | normal | `#ffffff` | 280px | none |
| **Stats** | Stat Metric Label | `p` | "Active Clients", "Active Users" | `IBM Plex Sans Variable` | `Arial, sans-serif` | 18.00px | `1.125rem` (`text-lg`) | 18.00px | 16.00px | 500 | 28.00px (1.55) | `normal` | none | normal | `#fbfaf7e6` (cream/90) | 280px | none |
| **Stats** | Stat Metric Caption | `p` | "Currently building with Tequity" | `IBM Plex Sans Variable` | `Arial, sans-serif` | 14.00px | `0.875rem` (`text-sm`) | 14.00px | 13.00px | 400 | 20.00px (1.43) | `normal` | none | normal | `#fbfaf7a6` (cream/65) | 280px | none |
| **Why Tequity** | Section Eyebrow | `p` | "Why Tequity" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#ff5500` | auto | none |
| **Why Tequity** | Section Heading | `h2` | "Tequity is Not Another Dev Shop" | `IBM Plex Serif` | `Georgia, serif` | 43.04px | `clamp(1.875rem, 1.6vw + 1.25rem, 3rem)` | 32.29px | 30.00px | 400 | 45.19px (1.05) | `-0.02em` | none | normal | `#141312` | 768px | none |
| **Why Tequity** | Italic Accent in H2 | `span` | "Not" | `IBM Plex Serif` | `Georgia, serif` | 43.04px | `inherit` | 32.29px | 30.00px | 400 | 45.19px (1.05) | `-0.02em` | none | italic | `#141312` | auto | none |
| **Why Tequity** | Section Lead | `p` | "Founders shouldn't have to choose..." | `IBM Plex Sans Variable` | `Arial, sans-serif` | 20.00px | `1.25rem` (`.tq-body-lg`) | 20.00px | 16.00px | 400 | 29.00px (1.45) | `normal` | none | normal | `#141312d9` (ink/85) | 680px | `max-w-2xl` |
| **Why Tequity** | Bento Hero Card Title | `h3` | "We Build AI Systems, Not Just Integrations" | `IBM Plex Serif` | `Georgia, serif` | 36.00px | `text-3xl md:text-4xl` (`2.25rem`) | 32.00px | 30.00px | 400 | 38.88px (1.08) | `-0.015em` | none | normal | `#141312` | 540px | `max-w-lg` |
| **Why Tequity** | Bento Mini Card Eyebrow | `p` | "Full-Stack Teams", "Speed to Market" | `IBM Plex Mono` | `ui-monospace, monospace` | 10.00px | `0.625rem` (`.tq-eyebrow-sm`) | 10.00px | 10.00px | 400 | 10.00px (1.00) | `0.075em` | uppercase | normal | `#ff5500` | auto | none |
| **Why Tequity** | Bento Mini Card Title | `h3` | "Engineering Is Just One Part of Shipping" | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-xl md:text-2xl` (`1.5rem`) | 22.00px | 20.00px | 400 | 28.32px (1.18) | `-0.005em` | none | normal | `#141312` | 320px | none |
| **Why Tequity** | Bento Mini Card Description | `p` | "Product managers, designers, engineers..." | `IBM Plex Sans Variable` | `Arial, sans-serif` | 15.00px | `15px` (`text-[15px]`) | 15.00px | 14.00px | 400 | 23.25px (1.55) | `normal` | none | normal | `#141312cc` (ink/80) | 320px | none |
| **1 Partner Every Stage** | Section Heading | `h2` | "1 Partner, Every Stage" | `IBM Plex Serif` | `Georgia, serif` | 48.00px | `text-3xl md:text-5xl` (`3rem`) | 36.00px | 30.00px | 400 | 48.96px (1.02) | `-0.025em` | none | normal | `#141312` | 640px | none |
| **1 Partner Every Stage** | Stage Card Eyebrow | `p` | "Idea", "Seed", "PMF", "Scale" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#ff5500` | auto | none |
| **1 Partner Every Stage** | Stage Card Title | `h3` | "Build Your MVP", "Iterate to PMF" | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-2xl` (`1.5rem`) | 24.00px | 22.00px | 400 | 26.40px (1.10) | `normal` | none | normal | `#141312` | 240px | none |
| **1 Partner Every Stage** | Stage Pricing Line | `span` | "From $3K/month", "Talk to us" | `IBM Plex Mono` | `ui-monospace, monospace` | 14.00px | `0.875rem` (`text-sm`) | 14.00px | 13.00px | 500 | 18.00px (1.28) | `normal` | none | normal | `#141312b3` (ink/70) | auto | none |
| **Capabilities** | Section Heading | `h2` | "50+ Real AI Systems in Production" | `IBM Plex Serif` | `Georgia, serif` | 43.04px | `clamp(1.875rem, 1.6vw + 1.25rem, 3rem)` | 32.29px | 30.00px | 400 | 45.19px (1.05) | `-0.02em` | none | normal | `#141312` | 740px | none |
| **Capabilities** | Italic Accent in H2 | `span` | "in Production" | `IBM Plex Serif` | `Georgia, serif` | 43.04px | `inherit` | 32.29px | 30.00px | 400 | 45.19px (1.05) | `-0.02em` | none | italic | `#141312` | auto | none |
| **Capabilities** | Capability Card Title | `h3` | "Conversational AI", "Agentic AI & Workflows" | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-2xl` (`1.5rem`) | 24.00px | 20.00px | 400 | 27.60px (1.15) | `normal` | none | normal | `#141312` (hover `#ff5500`) | 340px | none |
| **Capabilities** | Capability Card Description | `p` | "1 conversation core - voice, email..." | `IBM Plex Sans Variable` | `Arial, sans-serif` | 14.00px | `14px` (`text-[14px]`) | 14.00px | 13.50px | 400 | 21.00px (1.50) | `normal` | none | normal | `#141312bf` (ink/75) | 340px | none |
| **Free for Founders** | Card Title | `h3` | "Free Design Audit", "Up to $10K in Grants" | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-2xl` (`1.5rem`) | 24.00px | 22.00px | 400 | 27.60px (1.15) | `normal` | none | normal | `#141312` | 360px | none |
| **Free for Founders** | Card Description | `p` | "We walk your product flows end to end..." | `IBM Plex Sans Variable` | `Arial, sans-serif` | 14.00px | `14px` (`text-[14px]`) | 14.00px | 13.50px | 400 | 21.00px (1.50) | `normal` | none | normal | `#141312bf` (ink/75) | 360px | none |
| **Testimonials** | Rating Big Number | `p` | "4.9/5" | `IBM Plex Serif` | `Georgia, serif` | 48.00px | `text-5xl` (`3rem`) | 40.00px | 36.00px | 400 | 48.00px (1.00) | `-0.02em` | none | normal | `#ffffff` | 160px | none |
| **Testimonials** | Quote Text | `p` | "We hired Tequity shortly after closing..." | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-lg md:text-xl lg:text-2xl` | 20.00px | 18.00px | 400 | 31.20px (1.30) | `normal` | none | normal | `#ffffff` | 820px | none |
| **Testimonials** | Founder Name | `p` | "Founder & CEO" | `IBM Plex Sans Variable` | `Arial, sans-serif` | 16.00px | `text-base` (`1rem`) | 16.00px | 14.00px | 600 | 24.00px (1.50) | `normal` | none | normal | `#ffffff` | 200px | none |
| **Testimonials** | Founder Stage / Role | `p` | "Pre-Seed to Series B" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 11.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#fdba74` (orange-300) | auto | none |
| **Case Studies** | Client Company Eyebrow | `p` | "Riverwalk Holdings", "Stitch" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#ff5500` | auto | none |
| **Case Studies** | Case Study Title | `h3` | "Powering AI-Driven Investment Intelligence..." | `IBM Plex Serif` | `Georgia, serif` | 20.00px | `text-lg md:text-xl` (`1.25rem`) | 18.00px | 17.00px | 400 | 24.00px (1.20) | `-0.01em` | none | normal | `#141312` | 380px | none |
| **Blog** | Article Category Eyebrow | `p` | "AI Engineering", "Design" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.0625em` | uppercase | normal | `#ff5500` | auto | none |
| **Blog** | Article Headline | `h3` | "What Is Agentic AI? A Builder's Guide" | `IBM Plex Serif` | `Georgia, serif` | 24.00px | `text-xl md:text-2xl` (`1.5rem`) | 22.00px | 20.00px | 400 | 27.60px (1.15) | `-0.01em` | none | normal | `#141312` | 380px | none |
| **CTA Banner** | Banner Eyebrow | `p` | "LET'S TALK" | `IBM Plex Mono` | `ui-monospace, monospace` | 12.00px | `0.75rem` (`.tq-eyebrow`) | 12.00px | 12.00px | 400 | 12.00px (1.00) | `0.2em` (wide) | uppercase | normal | `#ff5500` | auto | none |
| **CTA Banner** | Banner Headline | `h2` | "Ready to Start the Journey?" | `IBM Plex Serif` | `Georgia, serif` | 60.00px | `text-4xl md:text-6xl` (`3.75rem`) | 48.00px | 36.00px | 400 | 61.20px (1.02) | `-0.025em` | none | normal | `#ffffff` | 800px | none |

---

## C. Design Tokens & Typographic System

### 1. Font Variables
```css
:root {
  --font-serif: "ibmPlexSerif", "IBM Plex Serif", Georgia, serif;
  --font-sans: "ibmPlexSans", "IBM Plex Sans Variable", Arial, sans-serif;
  --font-mono: "ibmPlexMono", "IBM Plex Mono", ui-monospace, monospace;
}
```

### 2. Typographic Scale Rules (Authored Clamp Formulas)
```css
/* Display Heading (H0) */
.tq-h0 {
  font-family: var(--font-serif);
  font-size: clamp(2.125rem, 4vw + 1rem, 6rem);
  line-height: 0.96;
  letter-spacing: -0.03em;
  font-weight: 400;
}

/* Major Section Heading (H1) */
.tq-h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 2.4vw + 1.5rem, 4rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 400;
}

/* Subsection Heading (H2) */
.tq-h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.875rem, 1.6vw + 1.25rem, 3rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-weight: 400;
}

/* Card Title Large (H3) */
.tq-h3 {
  font-family: var(--font-serif);
  font-size: clamp(1.625rem, 1vw + 1.125rem, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.015em;
  font-weight: 400;
}

/* Card Title Small (H4) */
.tq-h4 {
  font-family: var(--font-serif);
  font-size: clamp(1.375rem, 0.5vw + 1.125rem, 2rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-weight: 400;
}

/* Minor Headline (H5) */
.tq-h5 {
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 0.3vw + 1.125rem, 1.75rem);
  line-height: 1.18;
  letter-spacing: -0.005em;
  font-weight: 400;
}

/* Standard Eyebrow */
.tq-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem; /* 12px */
  line-height: 1;
  letter-spacing: 0.0625em;
  text-transform: uppercase;
  color: #ff5500;
  font-weight: 400;
}

/* Compact Eyebrow */
.tq-eyebrow-sm {
  font-family: var(--font-mono);
  font-size: 0.625rem; /* 10px */
  line-height: 1;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  color: #ff5500;
  font-weight: 400;
}

/* Body Scales */
.tq-body-lg { font-size: 1.25rem; line-height: 1.45; }
.tq-body    { font-size: 1rem;    line-height: 1.55; }
.tq-body-sm { font-size: 0.875rem; line-height: 1.45; }
```

### 3. Core Text Color Palette
- **Ink Primary (Dark text)**: `#141312` (`--tq-ink`)
- **Ink Secondary**: `#141312d9` (85% opacity) & `#141312cc` (80% opacity)
- **Ink Muted / Captions**: `#14131299` (60% opacity)
- **Cream / White (Light text on dark sections)**: `#ffffff`, `#fbfaf7e6` (90% cream), `#fbfaf7a6` (65% cream)
- **Brand Accent Orange**: `#ff5500` / `#f97316` (`--tq-orange-500` - eyebrows, hover tags, buttons)
- **Warm Canvas Background**: `#fbfaf7` (Base light cream), `#0b0a09` (Dark surface sections)

---

## D. Architectural Notes & Observations

1. **The IBM Plex Triad Pairing**:
   - The site uses an authoritative IBM Plex pairing: **`IBM Plex Serif`** for high-dignity editorial headlines paired with **`IBM Plex Sans`** for readability and **`IBM Plex Mono`** for architectural, technical eyebrows and telemetry.
2. **Tight Serifs with Dramatic Negative Letter-Spacing**:
   - Every serif heading uses extremely tight line-heights ($0.96$ to $1.15$) and negative tracking ($-0.01\text{em}$ to $-0.03\text{em}$). This eliminates airy vertical gaps and gives the typography a commanding publication aesthetic.
3. **Italic Accents as Emotional Contrast**:
   - Key words inside display headlines are deliberately wrapped in `italic` spans (e.g. *"From Idea to IPO"*, *"Not Another Dev Shop"*, *"in Production"*). In `IBM Plex Serif`, the italics feature distinct calligraphic ball terminals that contrast against the structured regular glyphs.
4. **Monospace for Data & Proof**:
   - All numbers, pricing tiers (`From $3K/month`), telemetry points, and stage tags are set strictly in `IBM Plex Mono` with uppercase tracking (`0.0625em` to `0.2em`), creating a tactile terminal look.
