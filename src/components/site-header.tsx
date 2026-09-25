"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Countries" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = variant === "solid" || scrolled;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        solid
          ? "border-b border-ink/8 bg-[#e8eef2]/92 backdrop-blur-md"
          : open
            ? "bg-ink/95 backdrop-blur-md"
            : "pt-3 sm:pt-4 md:pt-5"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
        <Link
          href="/"
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight md:text-lg",
            solid ? "text-ink" : "text-white drop-shadow-sm"
          )}
        >
          Sachman Overseas
        </Link>

        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center md:flex",
            solid ? "gap-8" : "gap-1 rounded-full bg-white/25 px-2 py-1.5 backdrop-blur-md"
          )}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.85rem] font-medium tracking-wide transition-colors",
                  solid
                    ? active
                      ? "text-ink"
                      : "text-ink/70 hover:text-ink"
                    : active
                      ? "rounded-full bg-white/70 px-3 py-1.5 text-ink"
                      : "rounded-full px-3 py-1.5 text-white/90 hover:bg-white/30 hover:text-white"
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
            className={cn(
              "text-[0.85rem] font-medium tracking-wide transition-colors",
              solid ? "text-ink/75 hover:text-ink" : "text-white/85 hover:text-white"
            )}
          >
            Call us
          </a>
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full px-5 text-[0.8rem] font-semibold transition-colors",
              solid
                ? "bg-ink text-white hover:bg-ink-soft"
                : "bg-ink text-white hover:bg-black"
            )}
          >
            Book a consult
          </Link>
        </div>

        <button
          type="button"
          data-testid="mobile-menu-toggle"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-full md:hidden",
            solid ? "text-ink" : "bg-white/25 text-white backdrop-blur-md"
          )}
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
