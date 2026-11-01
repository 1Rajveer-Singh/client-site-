import { ImageResponse } from "next/og";

export const alt = "IT PROGRAMMER SOLUTION | Enterprise Web, Cloud Servers & AI Automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070b16",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Spectrum Beam */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #06b6d4, #facc15, #f43f5e)",
          }}
        />

        {/* Top Header / Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              backgroundColor: "#0f172a",
              border: "2px solid #06b6d4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            ⚡
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              IT PROGRAMMER SOLUTION
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#38bdf8",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              ENTERPRISE CLOUD ARCHITECTURE & AI SYSTEMS
            </span>
          </div>
        </div>

        {/* Center Headline & Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Level Up Your Digital Empire.
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              lineHeight: 1.45,
              maxWidth: "960px",
              margin: 0,
            }}
          >
            High-availability cloud servers, Next.js 16 architectures, autonomous AI agent swarms, and mission-critical engineering with 99.999% SLA integrity.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #06b6d4",
              borderRadius: "9999px",
              padding: "10px 22px",
              fontSize: "16px",
              fontWeight: 800,
              color: "#38bdf8",
            }}
          >
            ⚡ Sub-300ms Global FCP
          </div>
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #10b981",
              borderRadius: "9999px",
              padding: "10px 22px",
              fontSize: "16px",
              fontWeight: 800,
              color: "#34d399",
            }}
          >
            🛡️ 99.999% SLA Uptime
          </div>
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #facc15",
              borderRadius: "9999px",
              padding: "10px 22px",
              fontSize: "16px",
              fontWeight: 800,
              color: "#fde047",
            }}
          >
            🚀 Next.js 16 & AI Swarms
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

