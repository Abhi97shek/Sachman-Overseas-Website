import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/design-system/typography/fonts";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteMotion } from "@/components/layout/site-motion";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Sachman Overseas (Sachman Institute) | IELTS, PTE & Study Visa Pathankot",
    template: "%s | Sachman Overseas",
  },
  description:
    "Sachman Overseas, also known as Sachman Institute, offers IELTS, PTE, spoken English, and study-visa guidance on Dalhousie Road, Pathankot. Free first counselling.",
  applicationName: "Sachman Overseas",
  authors: [{ name: "Sachman Overseas" }],
  creator: "Sachman Overseas",
  publisher: "Sachman Overseas",
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sachman Overseas",
    title: "Sachman Overseas (Sachman Institute) | IELTS, PTE & Study Visa Pathankot",
    description:
      "Sachman Overseas, also known as Sachman Institute, in Pathankot: IELTS, PTE, spoken English, and study-visa guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachman Overseas (Sachman Institute) | IELTS, PTE & Study Visa Pathankot",
    description:
      "Sachman Overseas, also known as Sachman Institute, in Pathankot: IELTS, PTE, spoken English, and study-visa guidance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f7fd",
};

const themeScript = `(function(){var d=document.documentElement;var t="light";try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")t=s}catch(e){}d.dataset.theme=t;d.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==="light"?"#f4f7fd":"#171721";if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("motion-ok");setTimeout(function(){d.classList.add("motion-fallback")},2500);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={fontVariables} data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-svh flex-col bg-canvas text-text">
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        {children}
        <SiteMotion />
        <ScrollToTop />
      </body>
    </html>
  );
}
