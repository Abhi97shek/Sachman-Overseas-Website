"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const destinations = [
  {
    name: "Canada",
    image: "/images/canada.jpg",
    focus: "Colleges and university pathways with room to stay and work after study.",
    facts: [
      { label: "Route", value: "Diploma & degree" },
      { label: "Test", value: "IELTS / PTE" },
      { label: "Visa", value: "Study permit" },
    ],
  },
  {
    name: "United Kingdom",
    image: "/images/uk.jpg",
    focus: "Undergraduate and postgraduate study at universities across the UK.",
    facts: [
      { label: "Route", value: "UG & PG" },
      { label: "Test", value: "IELTS / PTE" },
      { label: "Visa", value: "Student visa" },
    ],
  },
  {
    name: "Australia",
    image: "/images/australia.jpg",
    focus: "Courses built around strong career outcomes and post-study options.",
    facts: [
      { label: "Route", value: "VET & degrees" },
      { label: "Test", value: "IELTS / PTE" },
      { label: "Visa", value: "Subclass 500" },
    ],
  },
  {
    name: "Germany",
    image: "/images/germany.jpg",
    focus: "Public universities with low tuition and clear academic pathways.",
    facts: [
      { label: "Route", value: "Public unis" },
      { label: "Test", value: "IELTS / German" },
      { label: "Visa", value: "Student visa" },
    ],
  },
  {
    name: "New Zealand",
    image: "/images/nz.jpg",
    focus: "Quality education in a safe setting, with practical course options.",
    facts: [
      { label: "Route", value: "Diplomas & degrees" },
      { label: "Test", value: "IELTS / PTE" },
      { label: "Visa", value: "Fee-paying student" },
    ],
  },
  {
    name: "United States",
    image: "/images/usa.jpg",
    focus: "Universities across major cities, matched to your scores and budget.",
    facts: [
      { label: "Route", value: "UG & PG" },
      { label: "Test", value: "IELTS / PTE" },
      { label: "Visa", value: "F-1 student" },
    ],
  },
];

export function Destinations() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = () =>
      [...scroller.querySelectorAll<HTMLElement>("[data-country]")];

    const markSnapped = () => {
      const box = scroller.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const card of cards()) {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - mid);
        if (dist < bestDist) {
          best = card;
          bestDist = dist;
        }
      }
      for (const card of cards()) {
        card.classList.toggle("is-snapped", card === best);
      }
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(markSnapped);
    };

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.button !== 0) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add("is-dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 6) moved = true;
      scroller.scrollLeft = startScroll - delta;
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      scroller.classList.remove("is-dragging");
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("click", onClickCapture, true);
    markSnapped();

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section id="destinations" className="overflow-hidden bg-skywash py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
          Countries
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Snap through the places you can study.
          </h2>
          <p className="max-w-xs text-sm text-muted-foreground sm:text-right">
            Drag or swipe. The country in the centre opens.
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="country-scroller mt-10 flex gap-4 overflow-x-auto pb-2"
        aria-label="Study destinations"
      >
        {destinations.map((place, index) => (
          <article
            key={place.name}
            data-country={place.name}
            className={`country-snap ${index === 0 ? "is-snapped" : ""}`}
          >
            <div className="country-card relative overflow-hidden rounded-[1.6rem] bg-ink text-white shadow-[0_18px_50px_-28px_rgba(18,22,28,0.7)]">
              <Image
                src={place.image}
                alt={`${place.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 82vw, 36rem"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/55 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-3xl font-bold tracking-tight">
                  {place.name}
                </h3>
                <div className="country-meta">
                  <p className="max-w-md text-sm leading-relaxed text-white/80">
                    {place.focus}
                  </p>
                  <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
                    {place.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-[0.65rem] tracking-[0.14em] text-white/45 uppercase">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
