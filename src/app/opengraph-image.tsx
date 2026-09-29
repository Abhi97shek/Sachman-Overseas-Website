import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { destinationCards } from "@/lib/destinations";

export const alt =
  "Study visas from Pathankot — fanned destination photos for IELTS, PTE, Spoken English, and the study-visa file";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const FAN = 5;
const CARD = 198;
const BUBBLE_SLOTS = new Set([1, 3]);
const CANVAS = "#f4f7fd";
const TEXT = "#0a1a3a";
const MUTED = "#45567a";
const SIGNAL = "#f0b429";
const SIGNAL_TINT = "#fdf0cc";
const SIGNAGE = "#123a82";
const LINE = "#c3d2ec";

function pose(index: number) {
  const t = index - (FAN - 1) / 2;
  return {
    x: t * 152,
    y: Math.abs(t) * 18,
    rotate: t * 10.2,
  };
}

async function jpegSrc(publicPath: string) {
  const relative = publicPath.replace(/^\//, "");
  const data = await readFile(join(process.cwd(), "public", relative), "base64");
  return `data:image/jpeg;base64,${data}`;
}

const [regular, medium, bold] = await Promise.all([
  readFile(join(process.cwd(), "src/assets/fonts/outfit-400.ttf")),
  readFile(join(process.cwd(), "src/assets/fonts/outfit-500.ttf")),
  readFile(join(process.cwd(), "src/assets/fonts/outfit-700.ttf")),
]);

const fan = await Promise.all(
  destinationCards.slice(0, FAN).map(async (place, index) => ({
    name: place.name,
    src: await jpegSrc(place.image),
    index,
  })),
);

const fanBackToFront = [...fan].sort((a, b) => Math.abs(a.index - 2) - Math.abs(b.index - 2)).reverse();

export default function OpenGraphImage() {
  const countries = destinationCards.length;

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
          padding: "36px 48px 32px",
          background: CANVAS,
          color: TEXT,
          fontFamily: "Outfit",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: MUTED,
          }}
        >
          <span
            style={{
              display: "flex",
              background: SIGNAL_TINT,
              color: TEXT,
              borderRadius: 6,
              padding: "4px 12px",
              marginRight: 8,
            }}
          >
            Study visas
          </span>
          from Pathankot
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 920,
            marginTop: 10,
            fontSize: 46,
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          <span>One stop for </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              background: SIGNAL_TINT,
              borderRadius: 6,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 0,
              paddingBottom: 2,
            }}
          >
            <span>study visas</span>
            <span style={{ display: "flex", height: 8, background: SIGNAL, borderRadius: 2 }} />
          </span>
          <span> to multiple destinations.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 20,
            fontWeight: 500,
            color: MUTED,
          }}
        >
          by Sachman Overseas
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 1100,
            height: 268,
            marginTop: 8,
          }}
        >
          {fanBackToFront.map((place) => {
            const next = pose(place.index);
            const leftTag = place.index < FAN / 2;
            const bubble = BUBBLE_SLOTS.has(place.index);
            return (
              <div
                key={place.name}
                style={{
                  position: "absolute",
                  top: 134 + next.y - CARD / 2,
                  left: 550 + next.x - CARD / 2,
                  display: "flex",
                  width: CARD,
                  height: CARD,
                  transform: `rotate(${next.rotate}deg)`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: CARD,
                    height: CARD,
                    overflow: "hidden",
                    borderRadius: 27,
                    border: "6px solid #ffffff",
                    background: "#e8effb",
                    boxShadow: "0 28px 52px -18px rgba(15, 23, 42, 0.4)",
                  }}
                >
                  <img src={place.src} width={CARD} height={CARD} style={{ objectFit: "cover" }} />
                </div>
                {bubble ? (
                  <div
                    style={{
                      position: "absolute",
                      top: -18,
                      ...(leftTag ? { left: 0 } : { right: 0 }),
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 16,
                      borderRadius: 999,
                      border: "3px solid #ffffff",
                      background: leftTag ? "#4C90E2" : "#5FBEA4",
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    {place.name}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 760,
            marginTop: 8,
            fontSize: 20,
            lineHeight: 1.35,
            color: MUTED,
            textAlign: "center",
          }}
        >
          IELTS, PTE, Spoken English, then the study-visa file — {countries} countries, planned as one
          route from Pathankot.
        </div>

        <div style={{ display: "flex", marginTop: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 48,
              paddingLeft: 22,
              paddingRight: 22,
              borderRadius: 32,
              background: SIGNAGE,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 500,
              marginRight: 12,
            }}
          >
            Book a free consult
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 48,
              paddingLeft: 22,
              paddingRight: 22,
              borderRadius: 32,
              border: `1.5px solid ${LINE}`,
              color: TEXT,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            All {countries} countries
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: regular, weight: 400, style: "normal" },
        { name: "Outfit", data: medium, weight: 500, style: "normal" },
        { name: "Outfit", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
