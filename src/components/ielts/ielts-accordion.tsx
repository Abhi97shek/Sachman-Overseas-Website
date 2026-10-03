"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Minus, Plus } from "lucide-react";
import { useId, useRef, useState, type ReactNode } from "react";
import { duration, ease, prefersReducedMotion } from "@/design-system/motion/motion";

gsap.registerPlugin(useGSAP);

export function IeltsAccordion({
  title,
  eyebrow,
  children,
  defaultOpen = false,
  variant = "item",
  tone,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  variant?: "topic" | "item";
  tone?: "listen" | "read" | "write" | "speak" | "test" | "score" | "prepare";
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const panelId = useId();
  const topic = variant === "topic";
  const time = topic ? duration.base : duration.fast;

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      if (!mounted.current) {
        mounted.current = true;
        gsap.set(panel, {
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          overflow: open ? "visible" : "hidden",
        });
        return;
      }

      gsap.killTweensOf(panel);

      if (prefersReducedMotion()) {
        gsap.set(panel, {
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          overflow: open ? "visible" : "hidden",
        });
        return;
      }

      if (open) {
        gsap.set(panel, { overflow: "hidden", height: 0, opacity: 0 });
        gsap.to(panel, {
          height: "auto",
          opacity: 1,
          duration: time,
          ease: ease.out,
          onComplete: () => gsap.set(panel, { height: "auto", overflow: "visible" }),
        });
      } else {
        gsap.set(panel, { overflow: "hidden", height: panel.scrollHeight });
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: time,
          ease: ease.out,
        });
      }
    },
    { dependencies: [open] },
  );

  const trigger = (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((current) => !current)}
      className={`group flex w-full cursor-pointer items-center justify-between gap-6 text-left ${topic ? "py-5 md:py-6" : "py-5"}`}
    >
      <span className="min-w-0">
        {eyebrow ? <span className="block type-code text-xs text-subtle">{eyebrow}</span> : null}
        <span
          className={
            topic
              ? `block text-[1.2rem] font-semibold tracking-[-0.02em] ${eyebrow ? "mt-1.5" : ""}`
              : "block text-[1.05rem] font-semibold tracking-[-0.01em]"
          }
        >
          {title}
        </span>
      </span>
      <span
        className={`relative inline-flex size-9 shrink-0 items-center justify-center rounded-control border transition-[background-color,border-color,color] speed-base ${
          open
            ? "border-signal bg-signal text-on-signal"
            : "border-line bg-transparent text-text group-hover:border-signal group-hover:bg-signal group-hover:text-on-signal"
        }`}
        aria-hidden
      >
        <Plus
          className={`absolute size-4 transition-[opacity,transform] speed-base ${
            open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
          strokeWidth={1.8}
        />
        <Minus
          className={`absolute size-4 transition-[opacity,transform] speed-base ${
            open ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
          }`}
          strokeWidth={1.8}
        />
      </span>
    </button>
  );

  return (
    <div
      className={`border-b border-line transition-colors speed-fast hover:bg-sunken ${tone ? "border-l-[3px] ielts-rule pl-4" : ""}`}
      data-tone={tone}
    >
      {topic ? <h3 className="m-0">{trigger}</h3> : trigger}
      <div
        id={panelId}
        ref={panelRef}
        className="overflow-hidden"
        inert={!open ? true : undefined}
        aria-hidden={!open}
      >
        <div className={topic ? "pb-8 md:pb-10" : "pb-6"}>{children}</div>
      </div>
    </div>
  );
}
