import Link from "next/link";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";

const pages = [
  {
    href: "/services",
    title: "Services",
    detail: "IELTS, PTE, spoken English, and study-visa guidance.",
  },
  {
    href: "/destinations",
    title: "Countries",
    detail: "Canada, UK, Australia, Germany, New Zealand, and the US.",
  },
  {
    href: "/process",
    title: "Process",
    detail: "Counselling, exam preparation, then apply and fly.",
  },
  {
    href: "/contact",
    title: "Contact",
    detail: "Visit the Pathankot centre or book a free consult.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <section className="px-3 py-8 sm:px-4 md:px-5 md:py-10">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-[1.5rem] border border-ink/6 bg-white/70 p-7 transition-transform hover:-translate-y-0.5 md:p-8"
              >
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {page.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {page.detail}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
