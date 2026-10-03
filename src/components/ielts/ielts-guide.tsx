"use client";

import { useEffect, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "@/design-system/motion/motion";
import { ieltsChapters } from "@/lib/ielts/chapters";
import { chapterTone } from "@/lib/ielts/tones";
import "./ielts-study.css";

const chapters = ieltsChapters.map(({ id, num, title }) => ({ id, num, title }));

export function IeltsGuide({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");
  const [ticks, setTicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const measure = () => {
      const article = document.getElementById("ielts-guide");
      if (!article) return;
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const readable = Math.max(article.scrollHeight - window.innerHeight, 1);
      const raw = ((window.scrollY - articleTop) / readable) * 100;
      setProgress(Math.min(100, Math.max(0, raw)));

      const nextTicks: Record<string, number> = {};
      chapters.forEach((chapter) => {
        const node = document.getElementById(chapter.id);
        if (!node) return;
        const nodeTop = node.getBoundingClientRect().top + window.scrollY;
        nextTicks[chapter.id] = Math.min(100, Math.max(0, ((nodeTop - articleTop) / readable) * 100));
      });
      setTicks(nextTicks);

      const probe = window.innerHeight * 0.35;
      let current = chapters[0]?.id ?? "";
      chapters.forEach((chapter) => {
        const node = document.getElementById(chapter.id);
        if (!node) return;
        if (node.getBoundingClientRect().top <= probe) current = chapter.id;
      });
      setActiveId(current);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true, capture: true });
    window.addEventListener("resize", measure);
    const article = document.getElementById("ielts-guide");
    const observer = article ? new ResizeObserver(measure) : null;
    if (article) observer?.observe(article);
    return () => {
      window.removeEventListener("scroll", measure, { capture: true });
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, []);

  const percent = Math.round(progress);
  const active = chapters.find((chapter) => chapter.id === activeId) ?? chapters[0];
  const activeIndex = Math.max(
    0,
    chapters.findIndex((chapter) => chapter.id === activeId),
  );
  const remainingChapters = Math.max(0, chapters.length - activeIndex - 1);
  const showMobileBar = progress > 2;

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <>
      {showMobileBar ? (
        <div className="lg:hidden fixed top-(--header-height) inset-x-0 z-20 border-b border-line bg-canvas/90 backdrop-blur-xl">
          <div className="page-container py-3">
            <div className="flex items-center gap-3">
              <div className="h-1 flex-1 bg-sunken" aria-hidden>
                <div className="h-full bg-signal" style={{ width: `${percent}%` }} />
              </div>
              <p className="type-code text-sm tabular-nums">{percent}%</p>
            </div>
            <p className="mt-2 type-label text-[0.625rem] text-muted">
              {active?.num} / 04 · {active?.title}
            </p>
          </div>
        </div>
      ) : null}

      <div className="page-container grid gap-12 pt-10 pb-(--section-space) md:pt-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        <article id="ielts-guide" className="ielts-study">
          {children}
        </article>

        <aside className="ielts-study hidden lg:block" aria-label="Reading progress">
          <div className="sticky top-[calc(var(--header-height)+1.5rem)]">
            <p className="type-label text-muted">Through this guide</p>
            <p className="mt-3 type-h1 type-code tracking-[-0.04em] tabular-nums">{percent}%</p>
            <p className="mt-2 type-small text-muted">
              {percent >= 99
                ? "End of the guide."
                : remainingChapters === 0
                  ? "Last chapter."
                  : `${remainingChapters} chapter${remainingChapters === 1 ? "" : "s"} left.`}
            </p>

            <div
              className="relative mt-8 ml-1 h-52 w-px bg-sunken"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label="Percent of the IELTS guide read"
            >
              <div className="absolute top-0 left-0 w-px bg-signal" style={{ height: `${percent}%` }} />
              {chapters.map((chapter) => (
                <span
                  key={chapter.id}
                  className={`absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full ${chapter.id === activeId ? "bg-signal" : "bg-line-strong"}`}
                  style={{ top: `${ticks[chapter.id] ?? 0}%` }}
                />
              ))}
            </div>

            <ol className="mt-8 space-y-4">
              {chapters.map((chapter) => {
                const current = chapter.id === activeId;
                return (
                  <li key={chapter.id}>
                    <button
                      type="button"
                      onClick={() => jumpTo(chapter.id)}
                      className={`block w-full text-left transition-colors speed-fast ${current ? "text-text" : "text-muted hover:text-text"}`}
                    >
                      <span data-tone={chapterTone(chapter.id)} className="type-code text-xs ielts-ink">
                        {chapter.num}
                      </span>
                      <span className="mt-1 block font-medium">{chapter.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}
