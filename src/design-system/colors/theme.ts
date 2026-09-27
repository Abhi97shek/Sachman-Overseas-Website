export type Theme = "dark" | "light";

export const THEME_KEY = "theme";

export function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f4f7fd" : "#171721");
  window.localStorage.setItem(THEME_KEY, theme);
  window.dispatchEvent(new Event("themechange"));
}

export function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY);
  return isTheme(stored) ? stored : "light";
}

export function subscribeTheme(onStoreChange: () => void) {
  window.addEventListener("themechange", onStoreChange);
  return () => window.removeEventListener("themechange", onStoreChange);
}
