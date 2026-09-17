import { ImageResponse } from "next/og";

export const alt = "Naam Transfer — We don't transfer names. We activate homes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundImage: "linear-gradient(125deg, #112b58 0%, #30485e 55%, #ca510e 165%)",
          color: "#fbfbf4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#fbfbf4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#112b58",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>NAAM TRANSFER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 62, fontWeight: 800, lineHeight: 1.15 }}>
            <span>We Don&apos;t Transfer Names.</span>
            <span>We Activate Homes.</span>
          </div>
          <span style={{ fontSize: 26, opacity: 0.85 }}>
            Electricity, gas &amp; municipal name transfer — Ahmedabad
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
