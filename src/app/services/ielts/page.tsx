import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IeltsAccordion } from "@/components/ielts/ielts-accordion";
import { IeltsBlocks } from "@/components/ielts/ielts-blocks";
import { IeltsFaqList } from "@/components/ielts/ielts-faq-list";
import { IeltsGuide } from "@/components/ielts/ielts-guide";
import { IeltsSachmanHelp } from "@/components/ielts/ielts-sachman-help";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { ConsultSection } from "@/components/sections/consult-section";
import { ResultPosts } from "@/components/sections/result-posts";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";
import { getIeltsTopic, ieltsChapters, ieltsFaqs } from "@/lib/ielts";
import { otherProgrammes } from "@/lib/service-pages";
import { programmePath } from "@/lib/programmes";
import { breadcrumbJsonLd, courseJsonLd, faqJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IELTS Coaching Institute in Pathankot",
  description:
    "Sachman Institute (Sachman Overseas) is an IELTS coaching centre on Dalhousie Road, Pathankot. Academic and General Training, weekly mocks, and a free first counselling session.",
  path: "/services/ielts",
});

export default function IeltsGuidePage() {
  const others = otherProgrammes("ielts");

  return (
    <PageShell>
      <div className="page-container pt-8 md:pt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 type-label text-muted transition-colors speed-fast hover:text-text"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All programmes
        </Link>
      </div>

      <PageIntro
        label="IELTS"
        code="01 / 04"
        title="IELTS coaching in Pathankot."
        lead="Four sections, weekly mocks, and the score you need for the offer. Read the guide in this order — then book when mocks sit on the number on your letter."
        actions={
          <>
            <Button href="/contact?interest=ielts-coaching" arrow>
              Book free counselling
            </Button>
            <Button href={phone.href} variant="outline">
              {phone.display}
            </Button>
          </>
        }
      />

      <IeltsGuide>
        <ol className="mb-16 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {ieltsChapters.map((chapter) => (
            <li key={chapter.id} className="border-r border-b border-line p-4 sm:p-5">
              <p className="type-code text-xs text-subtle">{chapter.num} / 04</p>
              <p className="mt-3 font-semibold">{chapter.title}</p>
              <p className="mt-2 type-small text-muted">{chapter.lead}</p>
            </li>
          ))}
        </ol>

        {ieltsChapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="scroll-mt-28 py-16 md:py-24">
            <header className="border-t-2 border-text pt-8 md:pt-10">
              <p className="type-label text-muted">Chapter {chapter.num} / 04</p>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <p className="type-h1 type-code tracking-[-0.04em] tabular-nums text-subtle">{chapter.num}</p>
                <h2 className="type-h2">{chapter.title}</h2>
              </div>
              <p className="mt-4 max-w-2xl type-lead">{chapter.lead}</p>
            </header>

            <div className="mt-8 border-t border-line">
              {chapter.topics.map((entry, index) => {
                const topic = getIeltsTopic(entry.slug);
                if (!topic) return null;
                const num = String(index + 1).padStart(2, "0");
                const total = String(chapter.topics.length).padStart(2, "0");
                return (
                  <IeltsAccordion
                    key={entry.slug}
                    variant="topic"
                    eyebrow={`${num} / ${total}`}
                    title={entry.label}
                  >
                    <IeltsBlocks blocks={topic.blocks} />
                    {entry.slug === "faqs" ? (
                      <div className="mt-10">
                        <IeltsFaqList />
                      </div>
                    ) : null}
                  </IeltsAccordion>
                );
              })}
            </div>

            {chapter.id === "prepare" ? <IeltsSachmanHelp as="h3" /> : null}
          </section>
        ))}
      </IeltsGuide>

      <div className="section-y-tight" />
      <ResultPosts />

      <section className="page-container section-y-tight border-t border-line">
        <p className="type-label text-muted">Other programmes</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  href={programmePath(item)}
                  className="group flex h-full flex-col border-t border-line pt-5 transition-colors speed-fast hover:border-text"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-control bg-sunken">
                      <Icon className="size-4" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="type-code text-xs text-subtle">{item.num}</span>
                  </span>
                  <span className="mt-4 font-semibold">{item.title}</span>
                  <span className="mt-2 type-small text-muted">{item.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ConsultSection interest="ielts-coaching" />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "IELTS", path: "/services/ielts" },
          ]),
          courseJsonLd({
            name: "IELTS Coaching",
            description:
              "Academic and General Training IELTS coaching at Sachman Overseas, Pathankot, covering Listening, Reading, Writing and Speaking.",
            path: "/services/ielts",
            about: "IELTS",
          }),
          itemListJsonLd({
            name: "IELTS guide",
            path: "/services/ielts",
            items: ieltsChapters.map((chapter) => ({
              name: `Chapter ${chapter.num}: ${chapter.title}`,
              path: `/services/ielts#${chapter.id}`,
            })),
          }),
          faqJsonLd(ieltsFaqs),
        ]}
      />
    </PageShell>
  );
}
