"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-4 fill-[#f0b429] text-[#f0b429]" aria-hidden />
      ))}
    </span>
  );
}

const reviews = [
  {
    name: "Harleen Kaur",
    country: "Canada",
    flag: "/images/flags/ca.svg",
    image: "/images/students/student-canada.jpg",
    quote:
      "I kept missing the writing band. Weekly mocks at Sachman got me to 7, and the Toronto study permit followed.",
  },
  {
    name: "Kabir Singh",
    country: "United Kingdom",
    flag: "/images/flags/gb.svg",
    image: "/images/students/student-uk.jpg",
    quote:
      "They lined the university up with my marks. The CAS and the visa file went out together, and London was next.",
  },
  {
    name: "Ananya Joshi",
    country: "Australia",
    flag: "/images/flags/au.svg",
    image: "/images/students/student-australia.jpg",
    quote:
      "The Genuine Student questions were the part I feared. We answered them from my own plan, and the visa was granted.",
  },
  {
    name: "Rehan Kapoor",
    country: "Germany",
    flag: "/images/flags/de.svg",
    image: "/images/students/student-germany.jpg",
    quote:
      "I wanted a public university. They timed the blocked account and the visa appointment so I made the semester.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = reviews[active];

  return (
    <section id="stories" className="px-3 py-8 sm:px-4 md:px-5 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-3 text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-tide uppercase">
            Visa stories
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Approved, then they flew.
          </h2>
        </div>

        <div className="relative mt-10 min-h-[44rem] overflow-hidden rounded-[1.75rem] sm:min-h-[40rem] sm:rounded-[2rem] md:min-h-[42rem]">
          {reviews.map((review, index) => (
            <Image
              key={review.country}
              src={review.image}
              alt=""
              fill
              className={`object-cover object-[72%_center] transition-opacity duration-700 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12161c]/85 via-[#12161c]/25 to-[#12161c]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12161c]/55 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[44rem] flex-col justify-end p-5 sm:min-h-[40rem] sm:p-8 md:min-h-[42rem] md:p-10">
            <Stars />
            <p className="mt-3 text-[0.72rem] font-semibold tracking-[0.16em] text-white/80 uppercase">
              {current.country} study visa approved
            </p>
            <blockquote className="mt-3 max-w-3xl font-display text-[1.65rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              “{current.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-white">{current.name}</p>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
              {reviews.map((review, index) => {
                const selected = index === active;
                return (
                  <button
                    key={review.country}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`w-[16.5rem] shrink-0 rounded-2xl p-4 text-left transition-all lg:w-auto ${
                      selected
                        ? "bg-white text-ink shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                        : "bg-white/18 text-white backdrop-blur-md hover:bg-white/28"
                    }`}
                  >
                    <Stars />
                    <p className={`mt-3 line-clamp-3 text-sm leading-relaxed ${selected ? "text-ink" : "text-white/90"}`}>
                      “{review.quote}”
                    </p>
                    <span className="mt-4 flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={review.flag} alt="" className="size-5 rounded-full object-cover" />
                      <span>
                        <span className="block text-sm font-semibold">{review.name}</span>
                        <span className={`block text-xs ${selected ? "text-muted-foreground" : "text-white/70"}`}>
                          {review.country}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
