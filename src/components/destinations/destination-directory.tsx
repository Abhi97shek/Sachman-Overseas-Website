"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search } from "lucide-react";
import { DestinationTile } from "@/components/destinations/destination-tile";
import { duration, ease, prefersReducedMotion } from "@/design-system/motion/motion";
import { destinationCards } from "@/lib/destinations";
import { studyRegions } from "@/lib/study-destinations";
import { cn } from "@/lib/utils";

const filters = ["All", ...studyRegions] as const;
type Filter = (typeof filters)[number];

export function DestinationDirectory() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const grid = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinationCards.filter(
      (place) =>
        (filter === "All" || place.region === filter) &&
        (!q || place.name.toLowerCase().includes(q) || place.airport.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !grid.current) return;
      gsap.fromTo(
        grid.current.children,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: duration.base, stagger: 0.03, ease: ease.out },
      );
    },
    { scope: grid, dependencies: [filter, query] },
  );

  return (
    <section className="page-container pb-(--section-space)">
      <div
        data-intro
        className="sticky top-(--header-height) z-20 -mx-(--gutter) flex flex-col gap-3 border-b border-line bg-canvas/90 px-(--gutter) py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
      >
        <div role="group" aria-label="Region" className="no-scrollbar flex gap-1.5 overflow-x-auto">
          {filters.map((item) => {
            const count =
              item === "All"
                ? destinationCards.length
                : destinationCards.filter((place) => place.region === item).length;
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center gap-2 rounded-control border px-4 type-small font-semibold transition-colors speed-fast",
                  selected
                    ? "border-signage bg-signage text-on-signage"
                    : "border-line bg-surface text-muted hover:border-text hover:text-text",
                )}
              >
                {item}
                <span className={cn("type-code text-xs", selected ? "text-signal" : "text-subtle")}>{count}</span>
              </button>
            );
          })}
        </div>
        <label className="relative block sm:w-72">
          <span className="sr-only">Search countries</span>
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Country or airport code"
            className="field h-10 pl-10"
          />
        </label>
      </div>

      {results.length ? (
        <ul ref={grid} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((place) => (
            <li key={place.slug}>
              <DestinationTile place={place} className="h-full min-h-[20rem]" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-16 text-center type-lead text-muted">
          No country matches “{query}”. Try another name, or ask us at the centre.
        </p>
      )}
    </section>
  );
}
