"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Button } from "@/design-system/buttons/button";
import { prefersReducedMotion } from "@/design-system/motion/motion";
import { destinationCards } from "@/lib/destinations";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const FAN = 5;
const BUBBLE_SLOTS = new Set([1, 3]);

type Band = "compact" | "mid" | "wide";

function currentBand(): Band {
  if (window.matchMedia("(max-width: 768px)").matches) return "compact";
  if (window.matchMedia("(min-width: 1100px)").matches) return "wide";
  return "mid";
}

function pose(index: number, count: number, band: Band) {
  const mid = (count - 1) / 2;
  const t = index - mid;
  const spread = band === "compact" ? 64 : band === "mid" ? 112 : 176;
  const drop = band === "compact" ? 12 : band === "mid" ? 16 : 22;
  const tilt = band === "compact" ? 8.2 : band === "mid" ? 9.6 : 11.2;
  return {
    x: t * spread,
    y: Math.abs(t) * drop,
    rotate: t * tilt,
    z: 12 - Math.abs(t),
  };
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [band, setBand] = useState<Band>("wide");
  const count = FAN;

  const slots = useMemo(
    () =>
      Array.from({ length: count }, (_, slot) => destinationCards[(offset + slot) % destinationCards.length]),
    [count, offset],
  );

  useEffect(() => {
    const apply = () => setBand(currentBand());
    apply();
    const compact = window.matchMedia("(max-width: 768px)");
    const wide = window.matchMedia("(min-width: 1100px)");
    compact.addEventListener("change", apply);
    wide.addEventListener("change", apply);
    return () => {
      compact.removeEventListener("change", apply);
      wide.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setOffset((value) => (value + 1) % destinationCards.length);
      }, 3400);
    }, 1800);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-fan]");
      const compactNow = currentBand();
      const reduced = prefersReducedMotion();

      cards.forEach((card, index) => {
        const next = pose(index, cards.length, compactNow);
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: reduced ? next.x : 0,
          y: reduced ? next.y : 40,
          rotate: reduced ? next.rotate : 0,
          scale: reduced ? 1 : 0.88,
          autoAlpha: reduced ? 1 : 0,
        });
      });

      if (reduced) {
        gsap.set("[data-copy], [data-cta], [data-bubble]", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set("[data-copy], [data-cta], [data-bubble]", { autoAlpha: 0, y: 18 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.to("[data-copy]", { autoAlpha: 1, y: 0, duration: 0.7 }, 0.04);
      cards.forEach((card, index) => {
        const next = pose(index, cards.length, compactNow);
        const fromCenter = Math.abs(index - (cards.length - 1) / 2);
        timeline.to(
          card,
          {
            x: next.x,
            y: next.y,
            rotate: next.rotate,
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            ease: "power4.out",
          },
          0.16 + fromCenter * 0.07,
        );
      });
      timeline.to("[data-cta]", { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.42");
      timeline.to("[data-bubble]", { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.1 }, "-=0.32");
    },
    { scope: root, dependencies: [band], revertOnUpdate: true },
  );

  const skipSwap = useRef(true);
  useGSAP(
    () => {
      if (skipSwap.current) {
        skipSwap.current = false;
        return;
      }
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-fan] img",
        { opacity: 0.5 },
        { opacity: 1, duration: 0.5, stagger: 0.035, ease: "power2.out" },
      );
    },
    { scope: root, dependencies: [offset] },
  );

  const lift = contextSafe((card: HTMLElement, hovering: boolean) => {
    const index = Number(card.dataset.fan);
    const next = pose(index, count, band);
    gsap.to(card, {
      y: hovering ? next.y - 16 : next.y,
      scale: hovering ? 1.05 : 1,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  return (
    <section ref={root} className="px-3 sm:px-5 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100svh-var(--header-height))] w-full max-w-[90rem] flex-col items-center justify-center py-4 text-center sm:py-5 md:py-6">
        <div data-copy>
          <p className="type-label text-text-muted">
            <mark className="rounded-[0.2em] bg-signal-tint px-[0.35em] py-[0.12em] text-text">
              Study visas
            </mark>{" "}
            from Pathankot
          </p>
          <h1 className="type-display mt-2 max-w-[12.5em] text-balance text-text sm:mt-2.5">
            One stop for{" "}
            <mark className="rounded-[0.12em] bg-signal-tint px-[0.18em] text-inherit [box-decoration-break:clone] [-webkit-box-decoration-break:clone] shadow-[inset_0_-0.22em_0_0_var(--signal)]">
              study visas
            </mark>{" "}
            to multiple destinations.
          </h1>
          <p className="mt-2 text-[15px] font-medium tracking-[-0.01em] text-text-muted sm:mt-2.5 sm:text-base">
            by Sachman Overseas
          </p>
        </div>

        <div
          className="relative mt-3 h-[14.75rem] w-full sm:mt-4 sm:h-[16.5rem] md:h-[17.25rem] lg:h-[18.25rem]"
          role="list"
          aria-label="Study destinations"
        >
          {slots.map((place, index) => {
            const next = pose(index, count, band);
            const leftTag = index < count / 2;
            return (
              <Link
                key={index}
                href={`/destinations/${place.slug}`}
                data-fan={index}
                role="listitem"
                aria-label={`${place.name}, learn more`}
                onMouseEnter={(event) => lift(event.currentTarget, true)}
                onMouseLeave={(event) => lift(event.currentTarget, false)}
                onFocus={(event) => lift(event.currentTarget, true)}
                onBlur={(event) => lift(event.currentTarget, false)}
                className="absolute top-[7.4rem] left-1/2 block size-[9.25rem] will-change-transform sm:top-[8.25rem] sm:size-[11.25rem] md:top-[8.65rem] md:size-[12.75rem] lg:top-[9.15rem] lg:size-[13.5rem]"
                style={
                  {
                    zIndex: next.z,
                    "--fan-x": `${next.x}px`,
                    "--fan-y": `${next.y}px`,
                    "--fan-r": `${next.rotate}deg`,
                  } as CSSProperties
                }
              >
                <span className="relative block size-full overflow-hidden rounded-[1.7rem] border-[3px] border-white bg-sunken shadow-[0_28px_52px_-18px_rgba(15,23,42,0.4)]">
                  <Image
                    src={place.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 152px, (max-width: 768px) 188px, 228px"
                    priority={index < 4}
                    className="object-cover"
                  />
                </span>
                {BUBBLE_SLOTS.has(index) ? (
                  <span
                    data-bubble
                    className={cn(
                      "absolute -top-4 z-20 whitespace-nowrap rounded-full border-2 border-white px-3.5 py-1.5 text-[13px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(15,23,42,0.45)] sm:text-sm",
                      leftTag ? "left-0" : "right-0",
                    )}
                    style={{ backgroundColor: leftTag ? "#4C90E2" : "#5FBEA4", color: "#fff" }}
                  >
                    {place.name}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-[calc(100%-1px)] h-0 w-0 border-x-[7px] border-t-[8px] border-x-transparent",
                        leftTag ? "left-5 border-t-[#4C90E2]" : "right-5 border-t-[#5FBEA4]",
                      )}
                    />
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>

        <p data-cta className="mt-4 max-w-md type-lead text-pretty text-text-muted sm:mt-5">
          IELTS, PTE, Spoken English, then the study-visa file — {destinationCards.length} countries,
          planned as one route from Pathankot.
        </p>

        <div data-cta className="mt-4 flex flex-col items-center gap-3 sm:mt-5 sm:flex-row">
          <Button
            href="/contact"
            className="border-signage bg-signage text-on-signage hover:bg-signage-raised hover:text-on-signage"
          >
            Book a free consult
          </Button>
          <Button href="/destinations" variant="outline">
            All {destinationCards.length} countries
          </Button>
        </div>
      </div>
    </section>
  );
}
