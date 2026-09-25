"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SiteMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const heroPhoto = document.querySelector("[data-hero-photo]");
      const heroTitle = document.querySelector("[data-hero-title]");
      if (heroPhoto && heroTitle) {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(heroPhoto, { scale: 1.08, duration: 1.6, ease: "power2.out" }, 0)
          .fromTo("[data-hero-title]", { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0.12)
          .fromTo("[data-hero-copy]", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.32)
          .fromTo("[data-hero-cta]", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, 0.48);
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from([...group.children], {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 90%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let pressed: Element | null = null;

    const onOver = (event: MouseEvent) => {
      const card = (event.target as HTMLElement | null)?.closest("[data-lift]");
      if (!card || (event.relatedTarget instanceof Node && card.contains(event.relatedTarget))) return;
      gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    };

    const onOut = (event: MouseEvent) => {
      const card = (event.target as HTMLElement | null)?.closest("[data-lift]");
      if (!card || (event.relatedTarget instanceof Node && card.contains(event.relatedTarget))) return;
      gsap.to(card, { y: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
    };

    const onDown = (event: PointerEvent) => {
      const button = (event.target as HTMLElement | null)?.closest("[data-press]");
      pressed = button;
      if (!button) return;
      gsap.to(button, { scale: 0.97, duration: 0.12, ease: "power2.out", overwrite: "auto" });
    };

    const onUp = () => {
      if (!pressed) return;
      gsap.to(pressed, { scale: 1, duration: 0.22, ease: "power2.out", overwrite: "auto" });
      pressed = null;
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return null;
}
