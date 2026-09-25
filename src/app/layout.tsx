import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachman Overseas | IELTS, PTE & Study Visa — Pathankot",
  description:
    "Sachman Overseas helps students in Pathankot prepare for IELTS & PTE and secure study visas for Canada, UK, Australia, Germany, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
