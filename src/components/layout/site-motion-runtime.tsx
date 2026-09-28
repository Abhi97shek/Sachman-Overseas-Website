"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { duration, ease, prefersReducedMotion, reveal } from "@/design-system/motion/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteMotionRuntime() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-intro]", { autoAlpha: 1 });
        return;
      }

      const intro = gsap.utils.toArray<HTMLElement>("[data-intro]");
      const tl = gsap.timeline({ defaults: { ease: ease.strong }, delay: 0.05 });
      intro.forEach((element, index) => {
        const at = Math.min(index * reveal.stagger, 0.8);
        if (element.dataset.intro === "line") {
          tl.fromTo(
            element,
            { yPercent: 110, autoAlpha: 1 },
            { yPercent: 0, duration: duration.intro },
            at,
          );
        } else {
          tl.fromTo(
            element,
            { y: reveal.distance * 0.75, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: duration.reveal },
            at,
          );
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: reveal.distance,
          autoAlpha: 0,
          duration: duration.reveal,
          ease: ease.out,
          scrollTrigger: { trigger: element, start: reveal.start, once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          y: reveal.distance * 0.75,
          autoAlpha: 0,
          duration: duration.reveal,
          stagger: reveal.stagger,
          ease: ease.out,
          scrollTrigger: { trigger: group, start: reveal.start, once: true },
        });
      });

      const counts = gsap.utils.toArray<HTMLElement>("[data-count]");
      const snapCount = (element: HTMLElement) => {
        const target = Number(element.dataset.count);
        if (!Number.isFinite(target)) return;
        element.textContent = `${target}${element.dataset.suffix ?? ""}`;
      };
      counts.forEach((element) => {
        const target = Number(element.dataset.count);
        if (!Number.isFinite(target)) return;
        const state = { value: 0 };
        const suffix = element.dataset.suffix ?? "";
        const write = (value: number) => {
          element.textContent = `${Math.round(value)}${suffix}`;
        };
        gsap.to(state, {
          value: target,
          duration: 1.6,
          ease: ease.out,
          scrollTrigger: { trigger: element, start: reveal.start, once: true },
          onUpdate: () => write(state.value),
          onComplete: () => write(target),
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const amount = Number(element.dataset.parallax) || 0.12;
        gsap.fromTo(
          element,
          { yPercent: -amount * 50 },
          {
            yPercent: amount * 50,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            force3D: true,
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          },
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => counts.forEach(snapCount);
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
