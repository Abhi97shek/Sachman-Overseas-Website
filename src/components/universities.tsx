"use client";

import { useState } from "react";
import {
  countryFlags,
  countryWash,
  partnerUniversities,
  universityCountries,
} from "@/lib/universities";

function initials(name: string) {
  const words = name
    .replace(/,/g, "")
    .split(" ")
    .filter((word) => word.length > 2 && word !== "for" && word !== "and" && word !== "of");
  return (words[0]?.[0] ?? name[0]).concat(words[1]?.[0] ?? "").toUpperCase();
}

export function Universities() {
  const [country, setCountry] = useState<string>("All");
  const visible =
    country === "All"
      ? partnerUniversities
      : partnerUniversities.filter((campus) => campus.country === country);

  return (
    <section id="universities" className="px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Partner campuses
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Universities we are tied with.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {partnerUniversities.length} campuses across six countries. We prepare the
            offer and the visa file for each of these.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {["All", ...universityCountries].map((name) => {
            const selected = name === country;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setCountry(name)}
                aria-pressed={selected}
                data-press
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selected ? "bg-ink text-white" : "bg-white text-ink hover:bg-white/80"
                }`}
              >
                {name !== "All" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={countryFlags[name]} alt="" className="size-4 rounded-full object-cover" />
                ) : null}
                {name}
              </button>
            );
          })}
        </div>

        <ul key={country} data-reveal className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((campus) => (
            <li
              key={campus.name}
              data-lift
              className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-4 py-4"
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${countryWash[campus.country]}`}
              >
                {initials(campus.name)}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold text-ink">{campus.name}</span>
                <span className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={countryFlags[campus.country]}
                    alt=""
                    className="size-3.5 rounded-full object-cover"
                  />
                  {campus.city}, {campus.country}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
