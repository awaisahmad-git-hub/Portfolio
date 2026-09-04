import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Pulls a static Geist weight from Google Fonts so the share card matches the
 * site. Satori cannot read woff2, hence the legacy user-agent — and if the
 * fetch fails the card simply falls back to the platform sans rather than
 * failing the build.
 */
async function geist(weight: 400 | 600): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" } },
    ).then((r) => r.text());

    const url = css.match(/src: url\((.+?)\) format\('(truetype|opentype)'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([geist(400), geist(600)]);

  const fonts = [
    regular && { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    semibold && { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" }[];

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
          padding: "76px 80px",
          color: "#ecebe8",
          fontFamily: fonts.length ? "Geist" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 8, height: 8, borderRadius: 8, background: "#e0a24d" }} />
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#6d6b66",
            }}
          >
            {`${profile.role} · ${profile.location}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#a3a19b",
              maxWidth: 800,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #2b3034",
            paddingTop: 26,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 1,
            color: "#6d6b66",
          }}
        >
          ASP.NET Core · .NET MAUI · Web API · Entity Framework Core · SQL Server
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
