import type { Metadata, Viewport } from "next";
import {
  Outfit,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Playfair_Display,
  Press_Start_2P,
  Open_Sans,
  Caveat,
  Great_Vibes,
  Indie_Flower,
  Special_Elite,
  Handlee,
} from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const handlee = Handlee({
  variable: "--font-handlee",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const pressStart = Press_Start_2P({
  variable: "--font-arcade",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itprogrammersolution.com"),
  title: {
    default: "Rajveer Singh | Developer - Full Stack, Cloud Servers & AI Automation",
    template: "%s | Rajveer Singh | Developer",
  },
  description:
    "Architecting high-availability cloud servers, Next.js 16 web applications, autonomous AI agents, SEO dominance, and sub-300ms global latency systems with 99.999% SLA integrity.",
  applicationName: "Rajveer Singh | Developer",
  keywords: [
    "Rajveer Singh",
    "Rajveer Singh Developer",
    "Full Stack Developer",
    "Cloud Server Architecture",
    "Next.js 16 Web Engineering",
    "Autonomous AI Agent Swarms",
    "High-Availability Infrastructure",
    "Algorithmic SEO Optimization",
    "Power BI Dashboards",
    "Mobile App Development",
  ],
  authors: [{ name: "Rajveer Singh", url: "https://itprogrammersolution.com" }],
  creator: "Rajveer Singh",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itprogrammersolution.com",
    siteName: "Rajveer Singh | Developer",
    title: "Rajveer Singh | Developer - Full Stack, Cloud Servers & AI Automation",
    description:
      "Architecting high-availability cloud servers, Next.js 16 web applications, autonomous AI agents, and sub-300ms systems with 99.999% SLA integrity.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Rajveer Singh | Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajveer Singh | Developer - Full Stack, Cloud Servers & AI Automation",
    description:
      "Architecting high-availability cloud servers, Next.js 16 web applications, autonomous AI agents, and sub-300ms systems with 99.999% SLA integrity.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${caveat.variable} ${greatVibes.variable} ${indieFlower.variable} ${specialElite.variable} ${handlee.variable} ${outfit.variable} ${playfair.variable} ${jakarta.variable} ${jetbrainsMono.variable} ${pressStart.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Great+Vibes&family=Handlee&family=Indie+Flower&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pacifico&family=Permanent+Marker&family=Satisfy&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-cyan-500/30 selection:text-cyan-900">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
