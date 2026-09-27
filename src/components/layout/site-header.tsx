"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/design-system/buttons/button";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, openingHours, phone } from "@/lib/institute";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  /* The menu remembers the page it was opened on, so navigating closes it. */
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: (value: boolean) => boolean) => setOpenOn(next(open) ? pathname : null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const turnY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    /* Direction must hold for this many pixels before the header hides or shows,
       so trackpad momentum and overscroll bounce can't make it flicker. */
    const threshold = 24;
    let frame = 0;
    let wasGoingDown = true;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.min(Math.max(window.scrollY, 0), Math.max(max, 0));
      const last = lastY.current;
      if (y === last) return;
      const goingDown = y > last;

      if (goingDown !== wasGoingDown) {
        turnY.current = last;
        wasGoingDown = goingDown;
      }
      lastY.current = y;

      setScrolled(y > 12);
      if (y <= 320) setHidden(false);
      else if (goingDown && y - turnY.current > threshold) setHidden(true);
      else if (!goingDown && turnY.current - y > threshold) setHidden(false);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    lastY.current = turnY.current = window.scrollY;
    frame = requestAnimationFrame(() => {
      frame = 0;
      setScrolled(window.scrollY > 12);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[transform,background-color,border-color] speed-slow will-change-transform",
          scrolled ? "border-line bg-canvas/90" : "border-transparent bg-canvas",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="page-container flex h-(--header-height) items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative px-3.5 py-2 type-small font-medium transition-colors speed-fast",
                    active ? "text-text" : "text-muted hover:text-text",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-0.5 origin-left bg-signal transition-transform speed-base",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={phone.href}
              className="inline-flex items-center gap-2 type-code text-sm text-muted transition-colors speed-fast hover:text-text"
            >
              <Phone className="size-4" aria-hidden />
              {phone.display}
            </a>
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Book free counselling
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-control border border-line-strong text-text"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-(--header-height) bottom-0 z-40 flex flex-col bg-signage text-on-signage transition-[opacity,visibility] speed-base lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="page-container flex flex-1 flex-col pt-8">
          <p className="type-label text-on-signage-muted">Menu</p>
          <ul className="mt-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "border-b border-signage-line transition-[opacity,transform] speed-slow",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 type-h3"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  <span className="type-code text-sm text-on-signage-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pb-8">
            <p className="type-small text-on-signage-muted">{openingHours}</p>
            <Button href={phone.href} variant="ghost" icon={<Phone aria-hidden />}>
              {phone.display}
            </Button>
            <Button href="/contact" arrow>
              Book free counselling
            </Button>
          </div>
        </nav>
      </div>

      <div aria-hidden className="h-(--header-height)" />
    </>
  );
}
