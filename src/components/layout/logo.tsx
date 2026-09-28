import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("relative block size-11 shrink-0 overflow-hidden rounded-full", className)}>
      <Image
        src="/images/logo.png"
        alt=""
        fill
        sizes="40px"
        className="object-contain object-center"
        priority={priority}
      />
    </span>
  );
}

export function Logo({ tone = "dark", priority = false }: { tone?: "dark" | "light"; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 shrink-0 items-center gap-3",
        tone === "light" ? "text-on-signage" : "text-text",
      )}
    >
      <LogoMark className="transition-transform speed-base group-hover:-rotate-6" priority={priority} />
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
