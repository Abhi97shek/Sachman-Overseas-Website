import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { ServiceDetail } from "@/components/services/service-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { allServiceSlugs, getServicePage, otherProgrammes } from "@/lib/service-pages";
import { breadcrumbJsonLd, courseJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return allServiceSlugs()
    .filter((slug) => slug !== "ielts")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = getServicePage(slug);
  if (!found) return { title: "Programme" };

  return pageMetadata({
    title: found.page.seoTitle,
    description: found.page.seoDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = getServicePage(slug);
  if (!found) notFound();

  const { programme, page } = found;
  const path = `/services/${slug}`;
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: programme.title, path },
    ]),
    courseJsonLd({
      name: programme.title,
      description: programme.summary,
      path,
      kind: programme.slug === "study-visa" ? "service" : "course",
      about:
        programme.slug === "pte"
          ? "PTE Academic"
          : programme.slug === "spoken-english"
            ? "Spoken English"
            : programme.slug === "study-visa"
              ? "Study visas"
              : undefined,
    }),
    ...(page.faqs?.length ? [faqJsonLd(page.faqs)] : []),
  ];

  return (
    <PageShell>
      <ServiceDetail programme={programme} page={page} others={otherProgrammes(slug)} />
      <JsonLd data={schema} />
    </PageShell>
  );
}
