import React from "react";

export function getTechIcon(name: string): React.ReactNode {
  const normalized = name.toLowerCase().trim();

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 180 180" fill="currentColor">
        <circle cx="90" cy="90" r="90" fill="#0f172a" />
        <path
          d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z"
          fill="#ffffff"
        />
        <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
      </svg>
    );
  }

  // React / React Native
  if (normalized.includes("react")) {
    return (
      <svg className="w-full h-full" viewBox="-11.5 -10.232 23 20.463">
        <circle cx="0" cy="0" r="2.05" fill="#06B6D4" />
        <g stroke="#06B6D4" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.75 8.5H6.25v2h2v7h2.25v-7h1.25v-2zm7 3.5c0-1.8-1.2-2.5-3-2.5h-3.25v9h2.25v-2.75h1c1.8 0 3-.7 3-2.5v-1.25zm-2.25 1c0 .5-.4.75-1 .75h-1v-2h1c.6 0 1 .25 1 .75v.5z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // Prisma / Drizzle
  if (normalized.includes("prisma") || normalized.includes("drizzle")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0C344B" />
        <path
          d="M16.9 19.3L12.5 4.7a.8.8 0 00-1.5 0L6.6 19.3a.8.8 0 00.9 1l8.5-1z"
          fill="#16A394"
        />
        <path
          d="M12 4.7l4.9 14.6a.8.8 0 01-1 .9l-3.9-.9V4.7z"
          fill="#2AD0B8"
        />
      </svg>
    );
  }

  // Cloudflare
  if (normalized.includes("cloudflare")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#F38020">
        <path d="M18.42 10.38a5.55 5.55 0 00-5.2-3.6 5.6 5.6 0 00-5.34 3.9A4.18 4.18 0 004.5 18h13.72a3.78 3.78 0 00.2-7.62zm-.12 6.12H4.8a2.68 2.68 0 010-5.36c.16 0 .32.02.48.06a4.1 4.1 0 014-2.82 4.1 4.1 0 013.9 2.76 2.28 2.28 0 001.28-.38 2.28 2.28 0 013.84 1.74v.1a2.28 2.28 0 010 3.9z" />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes("vercel")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#000000">
        <path d="M12 2L24 22H0L12 2z" />
      </svg>
    );
  }

  // OpenAI / ChatGPT
  if (normalized.includes("openai") || normalized.includes("chatgpt")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.28 9.87a5.98 5.98 0 00-.51-4.9 6.07 6.07 0 00-6.49-2.87 6.05 6.05 0 00-4.63-2.1 6.13 6.13 0 00-5.83 4.25 6.06 6.06 0 00-4.05 2.94 6.08 6.08 0 00.7 7.07 5.98 5.98 0 00.51 4.9 6.06 6.06 0 006.49 2.87 6.03 6.03 0 004.63 2.1 6.13 6.13 0 005.83-4.25 6.06 6.06 0 004.05-2.94 6.08 6.08 0 00-.7-7.07zm-7.66 10.63a4.57 4.57 0 01-2.94.39l.66-2.27 4.27-2.47a.75.75 0 00.37-.65v-4.94l1.62.94a4.57 4.57 0 012.3 3.95 4.6 4.6 0 01-6.28 5.05zm-11.44-4.8a4.55 4.55 0 01.37-2.94l2.25.75v4.94a.75.75 0 00.38.65l4.28 2.47-1.63.94a4.58 4.58 0 01-5.65-6.81zm-.84-7.58a4.58 4.58 0 012.57-2.55l1.58 1.53v4.94a.75.75 0 00.38.65l4.28 2.47v1.88l-4.28-2.47a.75.75 0 00-.75 0l-3.78 2.19a4.6 4.6 0 01-.01-11.1zm12.38 3.73l-4.28-2.47 1.63-.94a4.58 4.58 0 015.65 6.81 4.55 4.55 0 01-.37 2.94l-2.25-.75v-4.94a.75.75 0 00-.38-.65zm3.4-1.18l-1.58-1.53v-4.94a.75.75 0 00-.38-.65l-4.28-2.47V2.9l4.28 2.47a.75.75 0 00.75 0l3.78-2.19a4.6 4.6 0 01-.01 11.1zm-8.23-7.23a4.57 4.57 0 012.94-.39l-.66 2.27-4.27 2.47a.75.75 0 00-.37.65v4.94l-1.62-.94a4.57 4.57 0 01-2.3-3.95 4.6 4.6 0 016.28-5.05zm.94 8.44l3.19-1.84v3.68l-3.19 1.84v-3.68z" />
      </svg>
    );
  }

  // Claude / Anthropic
  if (normalized.includes("claude") || normalized.includes("anthropic")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#D97706">
        <path d="M14.5 2L12 8.5 9.5 2 7 9.5 1 12l6 2.5 2.5 7.5 2.5-7.5 6-2.5-6-2.5z" />
      </svg>
    );
  }

  // Hugging Face / PyTorch
  if (normalized.includes("hugging") || normalized.includes("pytorch")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#EE4C2C">
        <path d="M13.5 2a9.5 9.5 0 00-7.8 14.8l-1.4 1.4a.75.75 0 00.5 1.3h3.2a9.5 9.5 0 105.5-17.5zm.5 16a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
        <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 1.5c-3.1 0-5.3 1.3-5.3 3.8v2.8h5.5v.8H3.8c-2.4 0-3.8 2-3.8 5.1s1.3 5.3 3.8 5.3h2.3v-3.2c0-2.3 2-4.2 4.3-4.2h5.5v-4.8c0-3.1-2.4-4.8-4-4.8zm-2 2.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"
          fill="#0284C7"
        />
        <path
          d="M12.1 22.5c3.1 0 5.3-1.3 5.3-3.8v-2.8h-5.5v-.8h8.3c2.4 0 3.8-2 3.8-5.1s-1.3-5.3-3.8-5.3h-2.3v3.2c0 2.3-2 4.2-4.3 4.2h-5.5v4.8c0 3.1 2.4 4.8 4 4.8zm2-2.3c-.7 0-1.2-.6-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"
          fill="#D97706"
        />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm7.6 15.8L12 22.2l-7.6-4.4V8.8L12 4.4l7.6 4.4v9z" />
        <path d="M12 7.5L6.5 10.7v5.6L12 19.5l5.5-3.2v-5.6L12 7.5z" />
      </svg>
    );
  }

  // Linux / Ubuntu
  if (normalized.includes("linux") || normalized.includes("ubuntu")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#E95420">
        <circle cx="12" cy="12" r="10" fill="#E95420" />
        <circle cx="12" cy="12" r="4.5" fill="#ffffff" />
        <circle cx="6" cy="12" r="1.5" fill="#ffffff" />
        <circle cx="15" cy="7" r="1.5" fill="#ffffff" />
        <circle cx="15" cy="17" r="1.5" fill="#ffffff" />
      </svg>
    );
  }

  // Nginx
  if (normalized.includes("nginx")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#009639">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.077 17.432H8.385V6.568h2.538l4.693 7.025V6.568h2.538v10.864h-2.538l-4.693-7.025v7.025z" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.575a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186z" />
        <path d="M23.75 11.5c-.38-.27-1.3-.41-2.22-.05-.18-.84-.71-1.58-1.55-2.02l-.56-.3-.36.52c-.67.97-.8 2.22-.38 3.29-.35.19-.8.49-1.25.96H1.5C.67 13.9 0 14.78 0 15.86c0 4.14 3.73 7.48 9.25 7.48 7.37 0 13.25-4.22 14.5-10.84.4-.1.74-.47.74-.75 0-.1-.08-.19-.74-.25z" />
      </svg>
    );
  }

  // PostgreSQL / SQL Server
  if (normalized.includes("postgres") || normalized.includes("sql")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#336791">
        <path d="M11.95 24c-.26 0-.53-.02-.79-.06-3.84-.57-6.84-3.56-7.46-7.44-.33-2.07.12-4.14 1.25-5.83.21-.31.62-.4 1.01-.22.4.18.57.65.37 1.05-.98 1.48-1.37 3.28-1.08 5.09.53 3.32 3.1 5.88 6.38 6.37 3.65.55 7.14-1.48 8.48-4.93.99-2.55.77-5.36-.61-7.71l-1.36-2.33c-.22-.38-.09-.86.28-1.08.38-.22.86-.09 1.08.28l1.36 2.33c1.62 2.76 1.88 6.06.72 9.06-1.57 4.05-5.67 6.43-9.95 6.43z" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.6 3.8-7.6 3.8L4.4 8 12 4.2zm-8 5.6l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
      </svg>
    );
  }

  // Certbot / Let's Encrypt / SSL
  if (normalized.includes("certbot") || normalized.includes("encrypt") || normalized.includes("ssl")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="3" fill="#10B981" fillOpacity="0.1" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="#10B981" />
      </svg>
    );
  }

  // Fail2ban / UFW / Firewall
  if (normalized.includes("fail2ban") || normalized.includes("ufw") || normalized.includes("firewall") || normalized.includes("security")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#EF4444" fillOpacity="0.1" />
        <path d="M9 12l2 2 4-4" stroke="#EF4444" />
      </svg>
    );
  }

  // Prometheus / Grafana / Telemetry
  if (normalized.includes("prometheus") || normalized.includes("grafana")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#F46800">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5a2.5 2.5 0 01-5 0c0-1.8 2.5-4.5 2.5-4.5s2.5 2.7 2.5 4.5zM12 5a3 3 0 012.8 4H9.2A3 3 0 0112 5z" />
      </svg>
    );
  }

  // Google Search Console / GSC
  if (normalized.includes("google search console") || normalized.includes("search console") || normalized.includes("gsc")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#4285F4" />
        <path d="M6 18h12M7 14l3-4 3 3 4-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="7" r="1.5" fill="#34A853" />
      </svg>
    );
  }

  // Google Lighthouse / PageSpeed
  if (normalized.includes("lighthouse") || normalized.includes("pagespeed")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 22h16L12 2z" fill="#0F9D58" />
        <path d="M12 6l5 12H7l5-12z" fill="#FFC107" />
        <circle cx="12" cy="11" r="2.5" fill="#ffffff" />
      </svg>
    );
  }

  // Ahrefs / SEMrush / SEO
  if (normalized.includes("ahrefs") || normalized.includes("semrush")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0066FF" />
        <path d="M6 16V8l5 8V8l7 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Screaming Frog / Crawler
  if (normalized.includes("screaming") || normalized.includes("frog") || normalized.includes("crawler")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2E7D32" />
        <circle cx="8" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="16" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="8" cy="10" r="1.2" fill="#000000" />
        <circle cx="16" cy="10" r="1.2" fill="#000000" />
        <path d="M8 15c2 1.5 6 1.5 8 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // IndexNow
  if (normalized.includes("indexnow") || normalized.includes("index")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#06B6D4" />
        <path d="M13 3l-6 11h5l-1 7 7-11h-5l1-7z" fill="#ffffff" />
      </svg>
    );
  }

  // Webhooks
  if (normalized.includes("webhook")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
        <polyline points="15 14 18 17 15 20" />
        <path d="M6 7.02h5.99c1.1 0 1.95-.94 2.48-1.9A4 4 0 0 1 22 7c-.01.7-.2 1.4-.57 2" />
        <polyline points="9 10 6 7 9 4" />
      </svg>
    );
  }

  // LangChain / LangGraph
  if (normalized.includes("lang")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1C3C3C" />
        <circle cx="8" cy="8" r="2.5" fill="#10B981" />
        <circle cx="16" cy="8" r="2.5" fill="#06B6D4" />
        <circle cx="12" cy="16" r="2.5" fill="#A855F7" />
        <path d="M8 8l8 0M8 8l4 8M16 8l-4 8" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#009688">
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M11 6l-4 7h4l-1 5 6-8h-4l2-4h-3z" fill="#ffffff" />
      </svg>
    );
  }

  // Milvus
  if (normalized.includes("milvus")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#00A1EA">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v11l10 5 10-5V6l-10 5z" />
      </svg>
    );
  }

  // JSON-LD / Semantic / Schema
  if (normalized.includes("json") || normalized.includes("schema")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#0284C7">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes("aws")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M18.74 13.92c-.28-.36-.78-.4-1.14-.14-2.14 1.58-4.82 2.45-7.58 2.45-3.32 0-6.38-1.27-8.62-3.41-.32-.3-.81-.29-1.12.02-.31.32-.3.81.02 1.13 2.54 2.43 6.02 3.86 9.72 3.86 3.12 0 6.13-.99 8.56-2.77.36-.27.42-.76.16-1.14zm1.48-1.57c-.15-.43-.62-.65-1.05-.5l-1.92.67c-.43.15-.66.62-.51 1.05.12.35.45.57.81.57.08 0 .16-.02.24-.05l1.93-.67c.43-.15.65-.63.5-1.07z" />
      </svg>
    );
  }

  // Power BI / DAX
  if (normalized.includes("power bi") || normalized.includes("power") || normalized.includes("dax")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#F2C811">
        <rect x="3" y="12" width="3.5" height="9" rx="1" fill="#E8B20B" />
        <rect x="8.5" y="8" width="3.5" height="13" rx="1" fill="#F2C811" />
        <rect x="14" y="4" width="3.5" height="17" rx="1" fill="#F8D336" />
        <rect x="19.5" y="1" width="3.5" height="20" rx="1" fill="#FFE270" />
      </svg>
    );
  }

  // DAX Studio
  if (normalized.includes("dax studio")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0D47A1" />
        <circle cx="12" cy="12" r="7" stroke="#ffffff" strokeWidth="1.5" />
        <path d="M12 12l3-4" stroke="#FFE270" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#FFE270" />
      </svg>
    );
  }

  // Microsoft Fabric / Azure
  if (normalized.includes("fabric") || normalized.includes("azure")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#0078D4">
        <path d="M13.05 4.24l-6.19 11.2 3.65 3.32h7.95L13.05 4.24zM5.54 16.5l4.63-8.38L2.4 14.5l3.14 2z" />
      </svg>
    );
  }

  // Pandas / Python Data
  if (normalized.includes("pandas")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#150458" />
        <rect x="5" y="6" width="3" height="12" rx="1" fill="#FFD43B" />
        <rect x="10.5" y="4" width="3" height="16" rx="1" fill="#ffffff" />
        <rect x="16" y="8" width="3" height="10" rx="1" fill="#306998" />
      </svg>
    );
  }

  // Power Automate / Power Query
  if (normalized.includes("power automate") || normalized.includes("power query")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0066FF" />
        <path d="M6 14l6-8 6 8-6 4-6-4z" fill="#ffffff" />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24">
        <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" />
        <path fill="#0175C2" d="M14.286 11.5L7.7 18.1 11.4 21.8 21.686 11.5h-7.4z" />
        <path fill="#0284C7" d="M7.7 18.1l3.7 3.7 3.7-3.7-3.7-3.7-3.7 3.7z" />
      </svg>
    );
  }

  // Swift / iOS
  if (normalized.includes("swift") || normalized.includes("ios") || normalized.includes("apple")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#FA7343">
        <path d="M21.5 17.5c-4.8 4.2-12.2 3.1-16.5-1.5C8 18 13.5 16 16.5 12c-2.5 1.5-6 1-8.5-.5 5-2.5 8-7 8-7s-3 3-6.5 4C8.5 7 7.5 5 7.5 5S6 9 2.5 11.5c4-2 7-6 7-6S6.5 8 4 9.5C6.5 6 10 3 10 3s-4 1.5-6.5 4.5C6 4.5 9.5 2 14 2c4 0 7.5 2 7.5 2s-2.5 1-4.5 3c4.5 1 7.5 5 7.5 5s-3-1-5.5.5c4 2 2.5 5 2.5 5z" />
      </svg>
    );
  }

  // Kotlin / Android
  if (normalized.includes("kotlin") || normalized.includes("android")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7F52FF" />
        <path d="M4 4h16L4 20V4z" fill="#C757BC" />
        <path d="M4 20l8-8 8 8H4z" fill="#0095D5" />
      </svg>
    );
  }

  // SQLite
  if (normalized.includes("sqlite")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#003B57">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 14c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.17c1.94 1.3 4.8 2.17 8 2.17s6.06-.87 8-2.17V18zm0-4c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.17c1.94 1.3 4.8 2.17 8 2.17s6.06-.87 8-2.17V14z" />
      </svg>
    );
  }

  // Firebase / FCM
  if (normalized.includes("firebase") || normalized.includes("fcm")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 17.5L6.8 3.2a.75.75 0 011.4-.2l3.4 6.4-7.1 8.1z" fill="#FFA000" />
        <path d="M19.5 17.5L16.2 6.5a.75.75 0 00-1.4-.1l-3.2 5.5 7.9 5.6z" fill="#F57C00" />
        <path d="M12 21.5l7.5-4-7.9-5.6-7.1 8.1 7.5 1.5z" fill="#FFCA28" />
      </svg>
    );
  }

  // Fastlane
  if (normalized.includes("fastlane")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#000000">
        <path d="M13 2.5l-8 10h6l-2 9 8-11h-6l2-8z" fill="#000000" />
      </svg>
    );
  }

  // Figma
  if (normalized.includes("figma")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    );
  }

  // WordPress
  if (normalized.includes("wordpress") || normalized.includes("word press")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-1.077 18.064L7.545 8.163c.478-.023.957-.058 1.436-.058.455 0 .864.035 1.319.058l2.25 6.75 2.114-6.75c.386-.023.773-.058 1.159-.058.387 0 .819.035 1.25.058l-3.327 9.901h-1.769zm-7.65-6.064c0-2.432.864-4.682 2.318-6.432l4.432 12.182C6.182 16.591 3.273 14.545 3.273 12zm8.727 8.727c-1.386 0-2.682-.364-3.818-1l3.523-10.227 3.59 9.818c-1.023.886-2.068 1.409-3.295 1.409zm5.682-3.841l2.455-7.114c.409 1.455.636 2.977.636 4.545 0 2.591-.932 4.977-2.477 6.841l-.614-4.272z" fill="#21759B"/>
      </svg>
    );
  }

  // GraphQL
  if (normalized.includes("graphql")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#E10098" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="2" r="1.5" fill="#E10098"/>
        <circle cx="20.66" cy="7" r="1.5" fill="#E10098"/>
        <circle cx="20.66" cy="17" r="1.5" fill="#E10098"/>
        <circle cx="12" cy="22" r="1.5" fill="#E10098"/>
        <circle cx="3.34" cy="17" r="1.5" fill="#E10098"/>
        <circle cx="3.34" cy="7" r="1.5" fill="#E10098"/>
        <path d="M4 7.5L20 16.5M4 16.5L20 7.5M12 2v20" stroke="#E10098" strokeWidth="1.2"/>
      </svg>
    );
  }

  // WebSockets
  if (normalized.includes("websocket")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#0284C7" fillOpacity="0.2"/>
      </svg>
    );
  }

  // REST API
  if (normalized.includes("rest") || normalized.includes("api")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="6" rx="2" fill="#2563EB" fillOpacity="0.15"/>
        <rect x="2" y="15" width="20" height="6" rx="2" fill="#2563EB" fillOpacity="0.15"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
        <path d="M14 9v6M18 9v6"/>
      </svg>
    );
  }

  // Postman
  if (normalized.includes("postman")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
        <path d="M6 13.5l11-5-4.5 10-2-3.5-4.5-1.5z" fill="#ffffff"/>
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.5 2 7 6 7 13c0 4.5 3 7.5 5 9 2-1.5 5-4.5 5-9 0-7-4.5-11-5-11z" fill="#47A248"/>
        <path d="M12 2v20c2-1.5 5-4.5 5-9 0-7-4.5-11-5-11z" fill="#499D4A"/>
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#00758F">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.2 19.8c-.2.2-.06.55.22.55h15.16c.28 0 .42-.35.22-.55l-.77-2.19C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#00758F"/>
        <circle cx="12" cy="12" r="3" fill="#F29111"/>
      </svg>
    );
  }

  // Supabase
  if (normalized.includes("supabase")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M13.2 2.5L3.5 14.2c-.4.5 0 1.2.6 1.2h7.7L10.6 22c-.3.6.5 1.1 1 .5l9.7-11.7c.4-.5 0-1.2-.6-1.2h-7.7l1.2-6.6c.3-.6-.5-1.1-1-.5z" fill="#3ECF8E"/>
      </svg>
    );
  }

  // Meta / Instagram / WhatsApp
  if (normalized.includes("meta") || normalized.includes("instagram") || normalized.includes("whatsapp")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#25D366">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 117 3.8zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1s-.6.8-.8 1c-.1.1-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6s0-.3.1-.4.2-.3.3-.4c.1-.1.2-.2.2-.4s0-.3 0-.4c-.1-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3s-.8.8-.8 2 .8 2.4.9 2.5c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" />
      </svg>
    );
  }

  // Default fallback code bracket icon
  return (
    <svg className="w-full h-full text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
