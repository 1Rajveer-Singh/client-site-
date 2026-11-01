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
  title: "IT PROGRAMMER SOLUTION | Enterprise Web, Cloud Servers & AI Automation",
  description:
    "IT PROGRAMMER SOLUTION: High-performance enterprise server architecture, Next.js web systems, autonomous AI agents, SEO dominance, and mobile engineering.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "IT PROGRAMMER SOLUTION | Enterprise Web, Cloud Servers & AI Automation",
    description:
      "Enterprise server architecture, Next.js web systems, autonomous AI agents, and custom software development.",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "IT PROGRAMMER SOLUTION" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT PROGRAMMER SOLUTION",
    description: "Enterprise Web Development, Cloud Infrastructure & AI Automation",
    images: ["/logo.png"],
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
      </body>
    </html>
  );
}
