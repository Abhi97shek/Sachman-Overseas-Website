"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FlapText } from "@/components/motion/flap-text";
import { flap, prefersReducedMotion } from "@/design-system/motion/motion";
import { departures } from "@/lib/journey";

const VISIBLE = 5;

const clockFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Kolkata",
});

function subscribeClock(onTick: () => void) {
  const id = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(id);
}

/* Pathankot time; null during server render so the markup matches. */
function useClock() {
  return useSyncExternalStore(
    subscribeClock,
    () => clockFormat.format(new Date()),
    () => null,
  );
}

export function DepartureBoard({ compact = false }: { compact?: boolean }) {
  const visible = compact ? 4 : VISIBLE;
  const time = useClock();
  const [rows, setRows] = useState(() => departures.slice(0, visible));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let next = visible;
    let slot = 0;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      const incoming = departures[next % departures.length];
      const at = slot % visible;
      setRows((current) => current.map((row, index) => (index === at ? incoming : row)));
      next += 1;
      slot += 1;
    }, flap.cycle * 1000);
    return () => window.clearInterval(id);
  }, [visible]);

  return (
    <div
      data-intro
      className="w-full overflow-hidden rounded-panel border border-white/10 bg-signage/92 text-on-signage shadow-floating backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-4 border-b border-signage-line px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-signal animate-status" aria-hidden />
          <p className="type-label text-on-signage">Departures · IXP Pathankot</p>
        </div>
        <p className="type-code text-sm text-signal" suppressHydrationWarning>
          {time ?? "--:--"}
        </p>
      </div>

      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Study destinations we advise on, with their main intakes</caption>
        <thead>
          <tr className="type-label text-[0.625rem] text-on-signage-muted">
            <th scope="col" className="px-4 pt-3 pb-2 font-medium sm:px-5">
              Destination
            </th>
            <th scope="col" className="px-2 pt-3 pb-2 font-medium">
              Code
            </th>
            <th scope="col" className="hidden px-2 pt-3 pb-2 font-medium sm:table-cell">
              Intakes
            </th>
            <th scope="col" className="w-10 px-4 pt-3 pb-2 sm:px-5">
              <span className="sr-only">Open</span>
            </th>
          </tr>
        </thead>
        <tbody className="type-code text-[0.8125rem] sm:text-sm">
          {rows.map((row, index) => (
            <tr key={index} className="group border-t border-signage-line/70">
              <td className="px-4 py-2 sm:px-5">
                <FlapText text={row.city} length={9} delay={0.35 + index * 0.12} label={row.country} />
              </td>
              <td className="px-2 py-2">
                <FlapText
                  text={row.code}
                  length={3}
                  delay={0.5 + index * 0.12}
                  cellClassName="text-signal"
                />
              </td>
              <td className="hidden px-2 py-2 sm:table-cell">
                <FlapText
                  text={row.intake}
                  length={11}
                  delay={0.6 + index * 0.12}
                  cellClassName="text-on-signage-muted"
                />
              </td>
              <td className="px-4 py-2 text-right sm:px-5">
                <Link
                  href={`/destinations/${row.slug}`}
                  aria-label={`Study in ${row.country}`}
                  className="inline-flex size-7 items-center justify-center rounded-[0.3rem] text-on-signage-muted transition-colors speed-fast hover:bg-signal hover:text-on-signal"
                >
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-signage-line px-4 py-2.5 type-small text-[0.75rem] text-on-signage-muted sm:px-5">
        Main intakes shown. Exact dates depend on the university.
      </p>
    </div>
  );
}
