import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { Button } from "@/design-system/buttons/button";
import { googleReviewsUrl } from "@/lib/institute";
import { googleRating, reviews } from "@/lib/stories";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Stars({ tone }: { tone: "dark" | "paper" }) {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-3.5 fill-[#f0b429] ${tone === "dark" ? "text-[#f0b429]" : "text-[#dc9f14]"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

function QuoteCard({
  name,
  topic,
  quote,
  tone,
}: {
  name: string;
  topic: string;
  quote: string;
  tone: "dark" | "paper";
}) {
  const dark = tone === "dark";
  return (
    <article
      className={`flex min-h-[16rem] flex-1 flex-col justify-between rounded-[1.25rem] p-6 sm:p-7 ${
        dark ? "bg-signage text-on-signage" : "bg-white text-[#0a1a3a]"
      }`}
    >
      <div>
        <Stars tone={tone} />
        <blockquote className={`mt-5 line-clamp-5 type-body leading-relaxed ${dark ? "text-on-signage" : "text-[#0a1a3a]"}`}>
          “{quote}”
        </blockquote>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <span
          className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full type-small font-semibold ${
            dark ? "bg-white/10 text-on-signage" : "bg-[#0a1a3a]/8 text-[#0a1a3a]"
          }`}
          aria-hidden
        >
          {initials(name)}
        </span>
        <p>
          <span className="block text-sm font-semibold">{name}</span>
          <span className={`block type-small ${dark ? "text-on-signage-muted" : "text-[#45567a]"}`}>{topic}</span>
        </p>
      </div>
    </article>
  );
}

export function StudentStories() {
  const featured = reviews[0];
  const [leftDark, leftPaper, rightPaper, rightDark] = [reviews[1], reviews[4], reviews[5], reviews[9]];

  return (
    <section id="stories" className="page-container section-y">
      <div className="flex items-center gap-3" data-reveal>
        <Plus className="size-3 text-signal" strokeWidth={2.25} aria-hidden />
        <p className="type-label text-muted">Google</p>
      </div>

      <div data-reveal className="mt-5">
        <h2 className="type-display tracking-[-0.04em]">Reviews</h2>
        <p className="mt-4 type-small text-subtle">Pathankot · 2026</p>
      </div>

      <div data-reveal className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="min-w-0 type-body text-muted lg:whitespace-nowrap">
          {googleRating.score} from {googleRating.count} Google reviews. These are their words, not ours.
        </p>
        <Button href={googleReviewsUrl} target="_blank" rel="noreferrer" variant="outline" arrow className="w-fit shrink-0">
          Read all {googleRating.count}
        </Button>
      </div>

      <div className="mt-10 flex flex-col gap-3 lg:mt-14 lg:grid lg:grid-cols-3">
        <div className="order-2 flex flex-col gap-3 lg:order-1">
          <QuoteCard tone="dark" {...leftDark} />
          <QuoteCard tone="paper" {...leftPaper} />
        </div>

        <article
          data-reveal
          className="relative order-1 flex min-h-[32rem] flex-col justify-end overflow-hidden rounded-[1.25rem] bg-signage text-on-signage lg:order-2 lg:min-h-full"
        >
          <Image
            src="/images/students/student-canada.jpg"
            alt=""
            fill
            className="object-cover object-[72%_center]"
            sizes="(min-width: 1024px) 32vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12161c] via-[#12161c]/55 to-[#12161c]/10" />
          <div className="relative z-10 flex flex-col gap-8 p-6 sm:p-8">
            <div>
              <Stars tone="dark" />
              <blockquote className="mt-5 type-body leading-relaxed text-white">“{featured.quote}”</blockquote>
            </div>
            <dl className="grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
              <div>
                <dt className="type-small text-white/65">Google rating</dt>
                <dd className="mt-1 type-h2 type-code tracking-[-0.04em] text-white">{googleRating.score}</dd>
              </div>
              <div>
                <dt className="type-small text-white/65">Reviews on Google</dt>
                <dd className="mt-1 type-h2 type-code tracking-[-0.04em] text-white">{googleRating.count}</dd>
              </div>
            </dl>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/12 type-small font-semibold"
                aria-hidden
              >
                {initials(featured.name)}
              </span>
              <p>
                <span className="block text-sm font-semibold text-white">{featured.name}</span>
                <span className="block type-small text-white/65">{featured.topic}</span>
              </p>
            </div>
          </div>
        </article>

        <div className="order-3 flex flex-col gap-3">
          <QuoteCard tone="paper" {...rightPaper} />
          <QuoteCard tone="dark" {...rightDark} />
        </div>
      </div>
    </section>
  );
}
