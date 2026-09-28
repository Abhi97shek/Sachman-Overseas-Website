"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SiteMotionRuntime = dynamic(
  () => import("./site-motion-runtime").then((module) => module.SiteMotionRuntime),
  { ssr: false },
);

/* GSAP is large. Wait until the page is idle so it does not sit on the critical path. */
export function SiteMotion() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const idle = window.requestIdleCallback(start, { timeout: 400 });
      return () => window.cancelIdleCallback(idle);
    }
    const timer = window.setTimeout(start, 200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <SiteMotionRuntime />;
}
