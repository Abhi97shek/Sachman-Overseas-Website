"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

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
  {
    name: "Sana Gill",
    country: "New Zealand",
    flag: "/images/flags/nz.svg",
    image: "/images/students/student-nz.jpg",
    quote:
      "A smaller campus was the brief. The offer, the fees, and the visa form stayed in one order, and Christchurch followed.",
  },
  {
    name: "Dev Arora",
    country: "United States",
    flag: "/images/flags/us.svg",
    image: "/images/students/student-usa.jpg",
    quote:
      "We cut the campus list before paying application fees. The I-20 matched the interview, and the F-1 was granted.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const cards = useRef<Array<HTMLButtonElement | null>>([]);
  const quoteRef = useRef<HTMLDivElement>(null);
  const current = reviews[active];

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      quoteRef.current,
      { y: 16, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
    );
  }, [active]);
  const overflows = reviews.length > 4;

  function reveal(index: number) {
    const row = scroller.current;
    const card = cards.current[index];
    if (!row || !card) return;
    const rowBox = row.getBoundingClientRect();
    const cardBox = card.getBoundingClientRect();
    if (cardBox.left >= rowBox.left && cardBox.right <= rowBox.right) return;
    row.scrollTo({
      left: card.offsetLeft - row.offsetLeft - 4,
      behavior: "smooth",
    });
  }

  function select(index: number) {
    setActive(index);
    reveal(index);
  }

  function scrollRow(direction: -1 | 1) {
    const row = scroller.current;
    const card = cards.current[0];
    if (!row || !card) return;
    row.scrollBy({ left: direction * (card.offsetWidth + 12), behavior: "smooth" });
  }

  return (
    <section id="stories" className="section-shell">
      <div className="w-full">
        <div data-reveal className="relative min-h-[46rem] overflow-hidden rounded-[1.75rem] sm:min-h-[42rem] sm:rounded-[2rem] md:min-h-[44rem]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#12161c]/85 via-[#12161c]/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#12161c]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12161c]/45 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[46rem] flex-col p-5 sm:min-h-[42rem] sm:p-8 md:min-h-[44rem] md:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/80 uppercase">
                Visa stories
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Approved, then they flew.
              </h2>
            </div>
            <div ref={quoteRef} className="mt-auto">
            <Stars />
            <p className="mt-3 text-[0.72rem] font-semibold tracking-[0.16em] text-white/80 uppercase">
              {current.country} study visa approved
            </p>
            <blockquote className="mt-3 max-w-3xl font-display text-[1.65rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              “{current.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-white">{current.name}</p>

            <div className="relative mt-8">
              {overflows ? (
                <div className="mb-3 flex justify-end gap-2">
                  <button
                    type="button"
                    aria-label="Previous reviews"
                    onClick={() => scrollRow(-1)}
                    className="inline-flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next reviews"
                    onClick={() => scrollRow(1)}
                    className="inline-flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              ) : null}
              <div
                ref={scroller}
                className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
              {reviews.map((review, index) => {
                const selected = index === active;
                return (
                  <button
                    key={review.name}
                    ref={(node) => {
                      cards.current[index] = node;
                    }}
                    type="button"
                    onClick={() => select(index)}
                    aria-pressed={selected}
                    className={`shrink-0 rounded-2xl p-4 text-left transition-all ${
                      overflows
                        ? "w-[16.5rem] lg:w-[calc((100%-2.25rem)/4)]"
                        : "w-[16.5rem] lg:w-auto lg:flex-1"
                    } ${
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
        </div>
      </div>
    </section>
  );
}
