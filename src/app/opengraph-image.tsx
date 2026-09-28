import { ImageResponse } from "next/og";

export const alt = "Sachman Overseas, also known as Sachman Institute — IELTS, PTE and study visas from Pathankot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #0b2744 0%, #16324f 48%, #1e3a5f 100%)",
          color: "#f4f7fd",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8 }}>
          Pathankot · Punjab
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>Sachman Overseas</div>
          <div style={{ fontSize: 28, lineHeight: 1.3, opacity: 0.88 }}>Also known as Sachman Institute</div>
          <div style={{ fontSize: 32, lineHeight: 1.3, maxWidth: 860, opacity: 0.92 }}>
            IELTS, PTE, spoken English, and study-visa guidance
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, opacity: 0.8 }}>Dalhousie Road · Free first counselling</div>
      </div>
    ),
    size,
  );
}
