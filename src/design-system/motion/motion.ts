/*
  MOTION (GSAP side)

  Page-load, scroll-reveal, and split-flap animations read these values.
  Durations are in seconds. Keep them close to motion.css so hover and
  scroll motion feel like the same system.
*/

export const ease = {
  out: "power3.out",
  strong: "power4.out",
  inOut: "power2.inOut",
} as const;

export const duration = {
  fast: 0.25,
  base: 0.6,
  reveal: 0.9,
  intro: 1.2,
} as const;

export const reveal = {
  distance: 32,
  stagger: 0.08,
  start: "top 86%",
} as const;

export const flap = {
  /* how many random letters show before a split-flap cell settles */
  steps: 9,
  /* seconds per letter change */
  interval: 0.045,
  /* delay between neighbouring cells */
  cellStagger: 0.028,
  /* seconds between board updates after the first load */
  cycle: 4.5,
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
