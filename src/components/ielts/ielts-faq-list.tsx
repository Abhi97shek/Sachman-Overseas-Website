import { IeltsAccordion } from "@/components/ielts/ielts-accordion";
import { ieltsFaqs } from "@/lib/ielts/faqs";

export function IeltsFaqList({ items = ieltsFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <IeltsAccordion key={item.q} title={item.q}>
          <p className="max-w-2xl type-body text-muted">{item.a}</p>
        </IeltsAccordion>
      ))}
    </div>
  );
}
