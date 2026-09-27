import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/design-system/typography/fonts";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteMotion } from "@/components/layout/site-motion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachman Overseas | IELTS, PTE & Study Visa — Pathankot",
  description:
    "Sachman Overseas helps students in Pathankot prepare for IELTS & PTE and secure study visas for Canada, UK, Australia, Germany, and more.",
};

export const viewport: Viewport = {
  themeColor: "#f4f7fd",
};

const themeScript = `(function(){var d=document.documentElement;var t="light";try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")t=s}catch(e){}d.dataset.theme=t;d.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==="light"?"#f4f7fd":"#171721";if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("motion-ok");setTimeout(function(){d.classList.add("motion-fallback")},2500);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables} data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-svh flex-col bg-canvas text-text">
        {children}
        <SiteMotion />
        <ScrollToTop />
      </body>
    </html>
  );
}
