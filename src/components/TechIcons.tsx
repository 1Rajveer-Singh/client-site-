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

  // React
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
      </svg>
    );
  }

  // PostgreSQL
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

  // Meta / Instagram / WhatsApp
  if (normalized.includes("meta") || normalized.includes("instagram")) {
    return (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="#0081FB">
        <path d="M12 5.5c-4.4 0-8 3.6-8 8 0 1.5.4 3 1.2 4.2L4 21l3.5-1.1c1.2.7 2.7 1.1 4.5 1.1 4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 14c-1.3 0-2.5-.3-3.5-.9l-.3-.2-2.3.7.7-2.2-.2-.3c-.7-1.1-1.1-2.3-1.1-3.6 0-3.6 2.9-6.5 6.7-6.5s6.7 2.9 6.7 6.5-3.1 6.5-6.7 6.5z" />
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
      <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
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

  // JSON-LD / Semantic
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

  // Default fallback code bracket icon
  return (
    <svg className="w-full h-full text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

