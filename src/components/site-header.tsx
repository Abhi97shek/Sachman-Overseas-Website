"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const solid = variant === "solid";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "z-50",
        solid
          ? "sticky top-0 border-b border-ink/8 bg-[#e8eef2]/90 backdrop-blur-md"
          : "absolute inset-x-0 top-0",
        !solid && open && "bg-ink/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
        <Link
          href="/"
          className="font-display text-[1.05rem] font-bold tracking-tight text-ink md:text-lg"
        >
          Sachman Overseas
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.85rem] font-medium tracking-wide transition-colors",
                  active ? "text-ink" : "text-ink/70 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+919888454140"
            className="text-[0.85rem] font-medium tracking-wide text-ink/75 transition-colors hover:text-ink"
          >
            Call us
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-[0.8rem] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Book a consult
          </Link>
        </div>

        <button
          type="button"
          data-testid="mobile-menu-toggle"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          data-testid="mobile-nav"
          className="border-t border-white/10 bg-ink px-6 py-8 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-2xl font-semibold text-white"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919888454140" className="mt-2 text-base font-medium text-white/70">
              Call us · +91 98884 54140
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-ink"
            >
              Book a consult
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
