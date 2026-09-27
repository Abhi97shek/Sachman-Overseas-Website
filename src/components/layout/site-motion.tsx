"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { duration, ease, prefersReducedMotion, reveal } from "@/design-system/motion/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
  Page-wide motion, driven by data attributes so server components can opt in:

    data-intro            fades up on page load, in document order
    data-intro="line"     slides up from behind a mask (wrap it in overflow-hidden)
    data-reveal           fades up when scrolled into view
    data-stagger          its children fade up one after another
    data-count="41"       counts up from 0 when scrolled into view
    data-parallax="0.15"  image drifts while its section scrolls past
    data-draw             scales in from the left as the section scrolls
*/
export function SiteMotion() {
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

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count);
        if (!Number.isFinite(target)) return;
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.6,
          ease: ease.out,
          scrollTrigger: { trigger: element, start: reveal.start, once: true },
          onUpdate: () => {
            const suffix = element.dataset.suffix ?? "";
            element.textContent = `${Math.round(state.value)}${suffix}`;
          },
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
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
