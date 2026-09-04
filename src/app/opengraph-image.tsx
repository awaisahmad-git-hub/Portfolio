import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          padding: "72px 80px",
          color: "#eceae5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#e0a24d",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a5a29b",
            }}
          >
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, lineHeight: 1, letterSpacing: -4 }}>
            {profile.firstName}
          </div>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1.05,
              letterSpacing: -4,
              color: "rgba(236,234,229,0.5)",
            }}
          >
            {profile.lastName}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2f33",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 26, color: "#a5a29b" }}>
            ASP.NET Core · .NET MAUI · Web APIs · EF Core
          </div>
          <div style={{ fontSize: 24, color: "#e0a24d" }}>{profile.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
