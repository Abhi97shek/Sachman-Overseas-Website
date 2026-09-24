"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#process", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="group flex items-baseline gap-1.5">
          <span className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            Sachman
          </span>
          <span className="font-display text-xl font-light tracking-wide text-ember md:text-2xl">
            Overseas
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="tel:+919888454140" />}
            className="h-10 gap-2 rounded-md bg-ember px-4 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            <Phone className="size-4" />
            Call us
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-ink/95 px-5 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919888454140"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <Phone className="size-4" />
              +91 98884 54140
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
