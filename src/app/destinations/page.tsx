import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Destinations } from "@/components/destinations";

export const metadata: Metadata = {
  title: "Countries | Sachman Overseas",
  description:
    "Study destinations we prepare visas for: Canada, UK, Australia, Germany, New Zealand, and the United States.",
};

const countries = [
  {
    name: "Canada",
    body: "Colleges and universities with a clear path after graduation. We look at tuition, living cost, and the study permit file together.",
  },
  {
    name: "United Kingdom",
    body: "Undergraduate and postgraduate options. Personal statements, offers, and the student visa checklist are part of the same plan.",
  },
  {
    name: "Australia",
    body: "Courses chosen for career outcomes. From the offer letter to the student visa, the paperwork stays in one place.",
  },
  {
    name: "Germany",
    body: "Public universities and English-taught programmes. Admissions, proof of funds, and the visa steps are mapped before you apply.",
  },
  {
    name: "New Zealand",
    body: "A smaller, safer study setting. A good fit when you want a manageable campus and a straightforward student visa.",
  },
  {
    name: "United States",
    body: "From community college to graduate school. We match the campus to your scores, budget, and the F-1 requirements.",
  },
];

export default function DestinationsPage() {
  return (
    <PageShell>
      <Destinations />
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {countries.map((country) => (
            <article
              key={country.name}
              className="rounded-[1.5rem] border border-ink/6 bg-white/80 p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {country.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {country.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-center">
          <Link href="/contact" className="text-sm font-semibold text-tide hover:text-tide-deep">
            Talk through a country
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
