"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Canada",
    flag: "/images/flags/ca.svg",
    image: "/images/canada.jpg",
    blurb:
      "Colleges and university pathways, with room to build a career after graduation. We match the intake to your scores, budget, and goals.",
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/gb.svg",
    image: "/images/uk.jpg",
    blurb:
      "Undergraduate and postgraduate study across the UK. Shortlists, personal statements, and the student visa file — handled with you.",
  },
  {
    name: "Australia",
    flag: "/images/flags/au.svg",
    image: "/images/australia.jpg",
    blurb:
      "Courses with strong career outcomes and a clear study pathway. From the offer letter to the visa, the plan stays practical.",
  },
  {
    name: "Germany",
    flag: "/images/flags/de.svg",
    image: "/images/germany.jpg",
    blurb:
      "Affordable public universities and English-taught programmes. We map admissions, proof of funds, and each visa step.",
  },
  {
    name: "New Zealand",
    flag: "/images/flags/nz.svg",
    image: "/images/nz.jpg",
    blurb:
      "Quality education in a safe, welcoming setting. A strong fit if you want a smaller campus and a manageable student life.",
  },
  {
    name: "United States",
    flag: "/images/flags/us.svg",
    image: "/images/usa.jpg",
    blurb:
      "Universities across every major city, from community college to graduate school. We align the campus to your profile.",
  },
];

const START_INDEX = 2;

function sample(value: number, stops: Array<[number, number]>) {
  if (value <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    const [x0, y0] = stops[i - 1];
    const [x1, y1] = stops[i];
    if (value <= x1) return y0 + ((y1 - y0) * (value - x0)) / (x1 - x0);
  }
  return stops[stops.length - 1][1];
}

function cover(distance: number, mobile: boolean) {
  const ad = Math.abs(distance);
  const scale = sample(ad, [
    [0, 1],
    [1, 0.8],
    [1.65, 0.64],
    [2.6, 0.56],
  ]);
  const wash = sample(ad, [
    [0, 0],
    [0.35, 0],
    [1, 0.18],
    [1.75, 0.62],
    [2.55, 0.82],
  ]);
  const opacity = mobile
    ? sample(ad, [
        [0, 1],
        [1, 1],
        [1.85, 0.45],
        [2.4, 0],
      ])
    : sample(ad, [
        [0, 1],
        [1.35, 1],
        [2.15, 0.28],
        [2.7, 0],
      ]);
  return {
    scale,
    wash,
    opacity,
    z: Math.round(90 - ad * 28),
  };
}

export function Destinations() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const veilRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeRef = useRef(START_INDEX);
  const dragged = useRef(false);
  const scrollAtPointerDown = useRef(0);
  const [active, setActive] = useState(START_INDEX);

  function paint() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    // Slot width is var(--pitch); read pixels — parseFloat("15.5rem") is 15.5, not 248.
    const pitch = slotRefs.current.find(Boolean)?.offsetWidth || 148;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    const mobile = scroller.clientWidth < 768;
    let nearest = 0;
    let nearestDist = Number.POSITIVE_INFINITY;

    slotRefs.current.forEach((slot, index) => {
      if (!slot) return;
      const slotCenter = slot.offsetLeft + slot.offsetWidth / 2;
      const distance = (slotCenter - center) / pitch;
      const { scale, wash, opacity, z } = cover(distance, mobile);
      slot.style.zIndex = String(z);
      const card = cardRefs.current[index];
      if (card) {
        card.style.transform = `translate(-50%, -50%) scale(${scale})`;
        card.style.opacity = String(opacity);
        card.style.pointerEvents = opacity < 0.2 ? "none" : "auto";
      }
      const veil = veilRefs.current[index];
      if (veil) veil.style.opacity = String(wash);
      const dist = Math.abs(slotCenter - center);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = index;
      }
    });

    if (nearest !== activeRef.current) {
      activeRef.current = nearest;
      setActive(nearest);
    }
  }

  function scrollToIndex(index: number, behavior?: ScrollBehavior) {
    const scroller = scrollerRef.current;
    const slot = slotRefs.current[index];
    if (!scroller || !slot) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const left = slot.offsetLeft - scroller.clientWidth / 2 + slot.offsetWidth / 2;
    scroller.scrollTo({
      left,
      behavior: behavior ?? (reduce ? "auto" : "smooth"),
    });
  }

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slot = slotRefs.current[START_INDEX];
    if (slot) {
      scroller.scrollLeft =
        slot.offsetLeft - scroller.clientWidth / 2 + slot.offsetWidth / 2;
    }
    paint();

    let frame = 0;
    const onScroll = () => {
      if (Math.abs(scroller.scrollLeft - scrollAtPointerDown.current) > 6) {
        dragged.current = true;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(onScroll);
    observer.observe(scroller);
    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="destinations" className="px-3 py-6 sm:px-4 md:px-5 md:py-8">
      <div className="mx-auto overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#f5f6f8] shadow-[0_24px_70px_rgba(18,22,28,0.05)] sm:rounded-[2rem] md:rounded-[2.5rem]">
        <div className="px-5 pt-12 pb-2 text-center sm:px-8 sm:pt-16 md:pt-20">
          <h2 className="mx-auto max-w-3xl font-display text-[1.7rem] leading-[1.15] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.6rem]">
            Popular study <span className="text-tide">Countries</span> for 2026
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse the destinations we prepare student, tourist, and visitor visas for.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous country"
            disabled={active === 0}
            onClick={() => scrollToIndex(active - 1)}
            className="absolute top-1/2 left-3 z-40 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-[0_8px_24px_rgba(18,22,28,0.08)] transition hover:bg-fog disabled:opacity-35 md:inline-flex lg:left-5"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next country"
            disabled={active === destinations.length - 1}
            onClick={() => scrollToIndex(active + 1)}
            className="absolute top-1/2 right-3 z-40 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-[0_8px_24px_rgba(18,22,28,0.08)] transition hover:bg-fog disabled:opacity-35 md:inline-flex lg:right-5"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Study countries"
            onPointerDown={() => {
              const scroller = scrollerRef.current;
              dragged.current = false;
              scrollAtPointerDown.current = scroller?.scrollLeft ?? 0;
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollToIndex(Math.min(destinations.length - 1, activeRef.current + 1));
              } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollToIndex(Math.max(0, activeRef.current - 1));
              }
            }}
            className="isolate flex h-[22rem] cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain pl-[calc(50%-var(--pitch)/2)] pr-[calc(50%-var(--pitch)/2)] [--pitch:9.25rem] [--card-w:13.75rem] [--card-h:17.5rem] [scrollbar-width:none] active:cursor-grabbing sm:h-[24rem] md:h-[26.5rem] md:[--pitch:14rem] md:[--card-w:16.25rem] md:[--card-h:20.5rem] [&::-webkit-scrollbar]:hidden"
          >
            {destinations.map((place, index) => {
              const { scale, wash, opacity, z } = cover(index - START_INDEX, false);
              return (
                <div
                  key={place.name}
                  ref={(node) => {
                    slotRefs.current[index] = node;
                  }}
                  data-index={index}
                  className="relative h-full shrink-0 snap-center"
                  style={{ width: "var(--pitch)", zIndex: z }}
                >
                  <div
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className="absolute top-1/2 left-1/2 h-[var(--card-h)] w-[var(--card-w)] will-change-transform"
                    style={{
                      transform: `translate(-50%, -50%) scale(${scale})`,
                      opacity,
                    }}
                  >
                    <a
                      href="#contact"
                      draggable={false}
                      aria-label={
                        index === active
                          ? `${place.name} — learn more`
                          : `Show ${place.name}`
                      }
                      aria-current={index === active ? "true" : undefined}
                      onClick={(event) => {
                        if (dragged.current) {
                          event.preventDefault();
                          dragged.current = false;
                          return;
                        }
                        if (index !== activeRef.current) {
                          event.preventDefault();
                          scrollToIndex(index);
                        }
                      }}
                      className="relative block h-full w-full overflow-hidden rounded-[1.25rem] bg-ink text-left shadow-[0_16px_40px_rgba(18,22,28,0.16)] outline-none focus-visible:ring-2 focus-visible:ring-tide focus-visible:ring-offset-2"
                    >
                      <Image
                        src={place.image}
                        alt=""
                        fill
                        draggable={false}
                        sizes="280px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/80" />
                      <div
                        ref={(node) => {
                          veilRefs.current[index] = node;
                        }}
                        className="pointer-events-none absolute inset-0 z-10 bg-white"
                        style={{ opacity: wash }}
                      />
                      <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.25rem] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.22)]" />
                      <div className="absolute inset-x-0 bottom-0 z-20 px-3.5 pb-3.5 md:px-4 md:pb-4">
                        <div className="flex items-center gap-2">
                          <span className="relative block size-5 shrink-0 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] md:size-6">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={place.flag}
                              alt=""
                              className="h-full w-full object-cover"
                              draggable={false}
                            />
                          </span>
                          <p className="truncate text-[0.95rem] font-semibold tracking-tight whitespace-nowrap text-white md:text-base">
                            {place.name}
                          </p>
                        </div>
                        <p className="mt-0.5 pl-7 text-[0.72rem] text-white/80 md:pl-8 md:text-[0.78rem]">
                          Click to learn more
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var s=document.currentScript&&document.currentScript.previousElementSibling;if(!s||!s.querySelector)return;var item=s.querySelector('[data-index="${START_INDEX}"]');if(!item)return;s.scrollLeft=item.offsetLeft-s.clientWidth/2+item.offsetWidth/2;})();`,
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-4 px-6 pt-2 pb-10 md:pb-12">
          <p
            key={destinations[active].name}
            aria-live="polite"
            className="animate-in fade-in slide-in-from-bottom-1 mx-auto min-h-[4.5rem] max-w-md text-center text-sm leading-relaxed text-muted-foreground duration-300 md:text-[0.95rem]"
          >
            {destinations[active].blurb}
          </p>
          <div className="inline-flex items-center gap-1 rounded-full bg-ink/[0.05] px-2 py-1.5">
            {destinations.map((place, index) => (
              <button
                key={place.name}
                type="button"
                aria-label={`Go to ${place.name}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "grid h-4 place-items-center",
                  index === active ? "w-6" : "w-3.5"
                )}
              >
                <span
                  className={cn(
                    "rounded-full transition-all duration-200",
                    index === active ? "h-1.5 w-4 bg-tide" : "size-1.5 bg-ink/25"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
