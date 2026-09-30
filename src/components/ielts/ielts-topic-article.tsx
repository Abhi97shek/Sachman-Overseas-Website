import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IeltsBlocks } from "@/components/ielts/ielts-blocks";
import { IeltsFaqList } from "@/components/ielts/ielts-faq-list";
import type { IeltsTopic } from "@/lib/ielts/types";
import { ieltsPath, relatedIeltsTopics } from "@/lib/ielts";

export function IeltsTopicArticle({ topic }: { topic: IeltsTopic }) {
  const related = relatedIeltsTopics(topic.slug);

  return (
    <article>
      <div className="page-container pt-8 md:pt-10">
        <Link
          href={ieltsPath()}
          className="inline-flex items-center gap-2 type-label text-muted transition-colors speed-fast hover:text-text"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          IELTS
        </Link>
      </div>

      <header className="page-container pt-8 pb-6 md:pt-12 md:pb-8">
        <h1 className="max-w-4xl type-h1">{topic.title}</h1>
      </header>

      <div className="page-container pb-(--section-space)">
        <IeltsBlocks blocks={topic.blocks} />
        {topic.slug === "faqs" ? (
          <div className="mt-10">
            <IeltsFaqList />
          </div>
        ) : null}

        {related.length ? (
          <nav aria-label="Related IELTS topics" className="mt-16 border-t border-line pt-8">
            <p className="type-label text-muted">Also in this guide</p>
            <ul className="mt-4">
              {related.map((item) => (
                <li key={item.slug} className="border-b border-line">
                  <Link
                    href={ieltsPath(item.slug)}
                    className="flex items-center justify-between gap-4 py-4 text-[1.05rem] font-semibold tracking-[-0.01em] transition-colors speed-fast hover:text-muted"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
