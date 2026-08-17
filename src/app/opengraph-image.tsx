import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

export const alt = "BusinessX — free inventory and sales tracker for small business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "Know your profit, every day.";
const SUBLINE = "Android & iOS · Works offline · 170,000+ shops";

export default async function Image() {
  const bold = await loadGoogleFont("Poppins:wght@800", `BusinessX${HEADLINE}${SUBLINE}`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0C2027 0%, #0081B3 100%)",
          padding: "80px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#00A9E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: "#0C2027",
            }}
          >
            X
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: "white" }}>BusinessX</div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          {HEADLINE}
        </div>
        <div style={{ fontSize: 28, color: "#B7C7D0", marginTop: 26, textAlign: "center" }}>
          {SUBLINE}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Poppins", data: bold, weight: 800, style: "normal" }],
    }
  );
}
