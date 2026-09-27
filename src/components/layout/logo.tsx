import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-signage text-signal",
        className,
      )}
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-6">
        <path
          fill="currentColor"
          d="M16 2.8 27.8 9.4v13.2L16 29.2 4.2 22.6V9.4L16 2.8Zm0 3.6L7.4 11.1v9.8L16 25.6l8.6-4.7v-9.8L16 6.4Z"
        />
        <path fill="currentColor" d="m16 11.4 4.7 4.6-4.7 4.6-4.7-4.6 4.7-4.6Z" />
      </svg>
    </span>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 shrink-0 items-center gap-3",
        tone === "light" ? "text-on-signage" : "text-text",
      )}
    >
      <LogoMark
        className={cn(
          "transition-transform speed-base group-hover:-rotate-6",
          tone === "light" && "bg-signal text-on-signal",
        )}
      />
      <span className="flex flex-col leading-none">
        <span className="text-[1.0625rem] font-bold tracking-[-0.02em]">Sachman Overseas</span>
        <span
          className={cn(
            "mt-1 type-label text-[0.625rem]",
            tone === "light" ? "text-on-signage-muted" : "text-subtle",
          )}
        >
          WE RISE BY LIFTING OTHERS
        </span>
      </span>
    </Link>
  );
}
