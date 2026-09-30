import { BandCalculator } from "@/components/ielts/band-calculator";
import { IeltsAccordion } from "@/components/ielts/ielts-accordion";
import { IeltsFigure } from "@/components/ielts/ielts-figures";
import { Button } from "@/design-system/buttons/button";
import type { GuideBlock } from "@/lib/ielts/types";

export function IeltsBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="max-w-4xl">
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}

function tableColumns(count: number) {
  if (count >= 4) return "grid grid-cols-[7.5rem_1fr_1fr_1fr]";
  if (count === 3) return "grid grid-cols-[7.5rem_1fr_1fr]";
  return "grid grid-cols-[minmax(9rem,14rem)_1fr]";
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "answer":
      return <p className="ielts-direct-answer mt-4 type-lead">{block.text}</p>;
    case "p":
      return <p className="mt-4 type-body text-muted">{block.text}</p>;
    case "h3":
      return <h3 className="mt-10 font-semibold tracking-[-0.01em]">{block.text}</h3>;
    case "h4":
      return <h4 className="mt-6 font-semibold tracking-[-0.01em]">{block.text}</h4>;
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 type-body text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 space-y-2">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-3 type-body text-muted">
              <span className="type-code text-subtle">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "table": {
      const columns = tableColumns(block.headers.length);
      return (
        <div className="mt-8 overflow-x-auto">
          {block.caption ? <p className="mb-3 type-small text-muted">{block.caption}</p> : null}
          <div className="min-w-[28rem] border-t border-l border-line">
            <div className={`${columns} type-label text-[0.625rem] text-subtle`}>
              {block.headers.map((header) => (
                <div key={header} className="border-r border-b border-line p-3">
                  {header}
                </div>
              ))}
            </div>
            {block.rows.map((row) => (
              <div key={row.join("-")} className={`${columns} type-small`}>
                {row.map((cell, cellIndex) => (
                  <p
                    key={`${cell}-${cellIndex}`}
                    className={`border-r border-b border-line p-3 ${cellIndex === 0 ? "font-semibold text-text" : "text-muted"}`}
                  >
                    {cell}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "accordion": {
      const questionTypes = block.label === "Question types";
      return (
        <div className={questionTypes ? "mt-12" : "mt-8"}>
          {questionTypes ? (
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-t-2 border-text pt-5">
              <div>
                <p className="type-label text-muted">In this section</p>
                <h4 className="mt-2 type-h3">{block.label}</h4>
              </div>
              <p className="type-code text-xs text-subtle tabular-nums">
                {String(block.items.length).padStart(2, "0")}
              </p>
            </div>
          ) : block.label ? (
            <h4 className="mb-4 font-semibold tracking-[-0.01em]">{block.label}</h4>
          ) : null}
          <div className="border-t border-line">
            {block.items.map((item) => (
              <IeltsAccordion key={item.title} title={item.title}>
                <p className="max-w-2xl type-body text-muted">{item.body}</p>
                {item.example ? (
                  <div className="mt-4 max-w-2xl border-l-2 border-signal bg-sunken px-4 py-3">
                    <p className="type-label text-subtle">Example</p>
                    <p className="mt-2 whitespace-pre-line type-small text-text">{item.example}</p>
                  </div>
                ) : null}
              </IeltsAccordion>
            ))}
          </div>
        </div>
      );
    }
    case "note":
      return <p className="mt-5 max-w-2xl border-l-2 border-signal pl-4 type-small text-muted">{block.text}</p>;
    case "example":
      return (
        <div className="mt-5 border border-line bg-sunken px-4 py-4">
          {block.label ? <p className="type-label text-subtle">{block.label}</p> : null}
          <p className={`type-body text-text ${block.label ? "mt-2" : ""}`}>{block.text}</p>
        </div>
      );
    case "steps":
      return (
        <ol className="mt-6 space-y-5">
          {block.items.map((item, index) => (
            <li key={item.title} className="flex gap-4">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-control bg-signal type-code text-sm text-on-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-semibold">{item.title}</span>
                <span className="mt-1 block type-small text-muted">{item.body}</span>
              </span>
            </li>
          ))}
        </ol>
      );
    case "pair":
      return (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[block.left, block.right].map((column) => (
            <div key={column.title} className="border-t-2 border-text pt-4">
              <p className="font-semibold">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.items.map((item) => (
                  <li key={item} className="type-small text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "flow":
      return (
        <ol className="mt-6">
          {block.items.map((item, index) => (
            <li key={item.title} className="relative border-l border-line pb-8 pl-6 last:pb-0">
              <span className="absolute top-0 -left-[5px] size-2.5 rounded-full bg-signal" />
              <p className="type-label text-subtle">{index === 0 ? "Start" : `Then`}</p>
              <p className="mt-1 font-semibold">{item.title}</p>
              <p className="mt-1 type-small text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      );
    case "figure":
      return <IeltsFigure id={block.id} />;
    case "calculator":
      return <BandCalculator />;
    case "cta":
      if (block.href.startsWith("/contact") || block.href.includes("ielts-test-fee")) {
        return (
          <div className="mt-6">
            <Button href={block.href} target={block.external ? "_blank" : undefined} rel={block.external ? "noreferrer" : undefined} arrow>
              {block.label}
            </Button>
          </div>
        );
      }
      return (
        <p className="mt-5 type-small text-muted">
          <a
            href={block.href}
            target={block.external ? "_blank" : undefined}
            rel={block.external ? "noreferrer" : undefined}
            className="font-medium text-text underline underline-offset-4"
          >
            {block.label}
          </a>
        </p>
      );
    default:
      return null;
  }
}
