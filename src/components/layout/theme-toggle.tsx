"use client";

import { Moon, Sun } from "lucide-react";
import { applyTheme } from "@/design-system/colors/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full text-text transition-colors speed-fast hover:bg-sunken",
        className,
      )}
      aria-label="Toggle light and dark mode"
      onClick={() => {
        const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        applyTheme(next);
      }}
    >
      <Sun className="hidden size-4 [[data-theme=dark]_&]:block" aria-hidden />
      <Moon className="hidden size-4 [[data-theme=light]_&]:block" aria-hidden />
    </button>
  );
}
