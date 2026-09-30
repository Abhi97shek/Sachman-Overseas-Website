import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IeltsSachmanHelp } from "@/components/ielts/ielts-sachman-help";
import { IeltsTopicArticle } from "@/components/ielts/ielts-topic-article";
import { PageShell } from "@/components/layout/page-shell";
import { ConsultSection } from "@/components/sections/consult-section";
import { JsonLd } from "@/components/seo/json-ld";
import { getIeltsTopic, ieltsFaqs, ieltsPath, ieltsTopics } from "@/lib/ielts";
import { breadcrumbJsonLd, faqJsonLd, learningResourceJsonLd, pageMetadata } from "@/lib/seo";

type Params = { topic: string };

export function generateStaticParams() {
  return ieltsTopics.map((item) => ({ topic: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getIeltsTopic(slug);
  if (!topic) return { title: "IELTS" };
  return pageMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    path: ieltsPath(slug),
  });
}

export default async function IeltsTopicPage({ params }: { params: Promise<Params> }) {
  const { topic: slug } = await params;
  const topic = getIeltsTopic(slug);
  if (!topic) notFound();

  const schema = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "IELTS", path: "/services/ielts" },
      { name: topic.title, path: ieltsPath(slug) },
    ]),
    learningResourceJsonLd({
      title: topic.title,
      seoTitle: topic.seoTitle,
      description: topic.seoDescription,
      answer: topic.answer,
      path: ieltsPath(slug),
    }),
    ...(slug === "faqs" ? [faqJsonLd(ieltsFaqs)] : []),
  ];

  return (
    <PageShell>
      <IeltsTopicArticle topic={topic} />
      <div className="page-container pb-(--section-space)">
        <IeltsSachmanHelp />
      </div>
      <ConsultSection interest="ielts-coaching" />
      <JsonLd data={schema} />
    </PageShell>
  );
}
