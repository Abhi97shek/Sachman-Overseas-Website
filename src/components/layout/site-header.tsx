"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { LogoMark } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, openingHours, phone } from "@/lib/institute";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  /* The menu remembers the page it was opened on, so navigating closes it. */
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: (value: boolean) => boolean) => setOpenOn(next(open) ? pathname : null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.scrollY > 16);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const markClass = cn("transition-[width,height] speed-base", compact ? "size-8" : "size-10");
  const roundCtl = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full border border-text/50 text-text transition-[width,height] speed-base hover:bg-sunken/50",
    compact ? "size-8" : "size-10",
  );
  const ghostClass = cn(
    "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-text/50 bg-transparent font-medium text-text transition-[height,width,padding,font-size,background-color] speed-base hover:bg-sunken/50",
    compact ? "h-8 px-3 text-[13px]" : "h-10 px-4 text-[15px]",
  );
  const glass = cn(
    "nav-glass pointer-events-auto rounded-full backdrop-saturate-150",
    compact ? "nav-glass-compact backdrop-blur-2xl" : "backdrop-blur-xl",
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="flex items-center gap-2 px-3 pt-3 sm:px-4">
          <div className="hidden size-10 shrink-0 md:block" aria-hidden />

          <div className="flex min-w-0 flex-1 items-center justify-between md:justify-center">
            <Link
              href="/"
              className={cn(glass, "flex items-center justify-center md:hidden", compact ? "size-11" : "size-[3.375rem]")}
              aria-label="Sachman Overseas home"
            >
              <LogoMark className={markClass} priority />
            </Link>

            <div
              className={cn(
                glass,
                "flex items-center",
                compact
                  ? "h-11 gap-1 p-1.5 md:h-auto md:pr-2 md:pl-2"
                  : "h-[3.375rem] gap-1.5 p-1.5 md:h-auto md:gap-2 md:py-2 md:pr-3 md:pl-2",
              )}
            >
              <Link
                href="/"
                className="hidden shrink-0 items-center justify-center self-center rounded-full md:flex"
                aria-label="Sachman Overseas home"
              >
                <LogoMark className={markClass} priority />
              </Link>

              <nav aria-label="Main" className="hidden min-w-0 items-center justify-center md:flex">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full font-medium text-text transition-[padding,font-size,background-color] speed-base",
                        compact ? "px-2.5 py-1 text-[13px]" : "px-3.5 py-1.5 text-[15px]",
                        active ? "bg-sunken/80" : "hover:bg-sunken/50",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className={cn("flex items-center", compact ? "gap-1 md:ml-1" : "gap-1.5 md:ml-2")}>
                <ThemeToggle className={cn(roundCtl, "md:hidden")} />
                <a href={phone.href} className={cn(ghostClass, "max-md:hidden")} aria-label={`Call ${phone.display}`}>
                  <Phone className={cn(compact ? "size-3.5" : "size-4")} strokeWidth={1.75} aria-hidden />
                  {phone.display}
                </a>
                <a href={phone.href} className={cn(roundCtl, "md:hidden")} aria-label={`Call ${phone.display}`}>
                  <Phone className={cn(compact ? "size-3.5" : "size-4")} strokeWidth={1.75} aria-hidden />
                </a>
                <button
                  type="button"
                  className={cn(roundCtl, "md:hidden")}
                  aria-expanded={open}
                  aria-controls="mobile-nav"
                  aria-label={open ? "Close menu" : "Open menu"}
                  onClick={() => setOpen((value) => !value)}
                >
                  {open ? <X className="size-4" /> : <Menu className="size-4" />}
                </button>
              </div>
            </div>
          </div>

          <ThemeToggle className={cn(glass, "hidden size-10 shrink-0 md:inline-flex")} />
        </div>

        <div
          id="mobile-nav"
          inert={!open}
          className={cn(
            "nav-glass absolute inset-x-3 top-[calc(100%+0.5rem)] max-h-[min(32rem,calc(100svh-6rem))] overflow-y-auto rounded-[28px] p-4 backdrop-blur-xl backdrop-saturate-150 sm:inset-x-4 md:hidden",
            compact && "nav-glass-compact",
            open
              ? "pointer-events-auto visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-1 opacity-0",
          )}
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center rounded-full px-3 py-2.5 text-[15px] font-medium text-text",
                        active && "bg-sunken/80",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-3">
              <p className="px-3 type-small text-muted">{openingHours}</p>
              <a href={phone.href} className={cn(ghostClass, "w-full justify-center")}>
                <Phone className="size-4" strokeWidth={1.75} aria-hidden />
                {phone.display}
              </a>
              <Link href="/contact" className={cn(ghostClass, "w-full justify-center")}>
                <Phone className="size-4" strokeWidth={1.75} aria-hidden />
                Book a consult
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div aria-hidden className="h-(--header-height)" />
    </>
  );
}
