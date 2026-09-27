"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { flap, prefersReducedMotion } from "@/design-system/motion/motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

function randomChar() {
  return flap.alphabet[Math.floor(Math.random() * flap.alphabet.length)];
}

/*
  Split-flap text, like an airport departures board. Renders the final text on
  the server; on the client each cell shuffles through letters before settling.
*/
export function FlapText({
  text,
  length,
  delay = 0,
  className,
  cellClassName,
  label,
}: {
  text: string;
  length?: number;
  delay?: number;
  className?: string;
  cellClassName?: string;
  label?: string;
}) {
  const root = useRef<HTMLSpanElement>(null);
  const value = (length ? text.toUpperCase().padEnd(length, " ").slice(0, length) : text.toUpperCase()).split("");

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cells = gsap.utils.toArray<HTMLElement>("[data-cell]", root.current);
      cells.forEach((cell, index) => {
        const final = value[index] ?? " ";
        const steps = flap.steps + Math.floor(Math.random() * 5);
        const state = { step: 0 };
        let last = -1;
        gsap.to(state, {
          step: steps,
          duration: steps * flap.interval,
          delay: delay + index * flap.cellStagger,
          ease: "none",
          onUpdate: () => {
            const current = Math.floor(state.step);
            if (current === last) return;
            last = current;
            cell.textContent = current >= steps ? final : randomChar();
          },
          onComplete: () => {
            cell.textContent = final;
          },
        });
      });
    },
    { scope: root, dependencies: [text], revertOnUpdate: true },
  );

  return (
    <span ref={root} className={cn("inline-flex gap-[0.12em]", className)} aria-label={label ?? text}>
      {value.map((char, index) => (
        <span
          key={index}
          data-cell
          aria-hidden
          className={cn(
            "relative inline-flex h-[1.55em] w-[1.05em] items-center justify-center overflow-hidden rounded-[0.18em] bg-signage-raised leading-none",
            "after:pointer-events-none after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-black/55",
            cellClassName,
          )}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}
