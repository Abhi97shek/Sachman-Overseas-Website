import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/page-intro";
import { InstagramIcon } from "@/components/layout/social-icons";
import { Button } from "@/design-system/buttons/button";
import { socials } from "@/lib/institute";
import { resultPosts } from "@/lib/stories";

export function ResultPosts() {
  return (
    <section id="results" className="page-container section-y pt-0">
      <SectionHeading
        label="From the centre"
        title="IELTS cleared. Visas approved."
        lead="Posted by the Pathankot team after each result. There are more on the centre's Instagram."
        aside={
          <Button
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            icon={<InstagramIcon className="size-4" />}
            className="w-fit"
          >
            Follow on Instagram
          </Button>
        }
      />

      <ul
        data-stagger
        className="no-scrollbar -mx-(--gutter) mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-(--gutter) pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:mt-20 lg:grid-cols-4"
      >
        {resultPosts.map((post) => (
          <li key={post.name} className="w-[78%] shrink-0 snap-start sm:w-auto">
            <a href={post.href} target="_blank" rel="noreferrer" className="group block">
              <span className="relative block overflow-hidden rounded-panel bg-sunken">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={post.width}
                  height={post.height}
                  className="aspect-[4/5] h-auto w-full object-cover object-top transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 78vw"
                />
                <span className="absolute top-3 right-3 inline-flex size-9 translate-y-1 items-center justify-center rounded-control bg-surface text-text opacity-0 shadow-raised transition-[opacity,transform] speed-base group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </span>
              <span className="mt-4 block font-semibold tracking-[-0.01em]">{post.name}</span>
              <span className="mt-1 block type-code text-xs text-muted">{post.result}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
