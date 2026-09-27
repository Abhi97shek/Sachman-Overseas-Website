import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DestinationCard } from "@/lib/destinations";
import { cn } from "@/lib/utils";

export function DestinationTile({
  place,
  large,
  className,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: {
  place: DestinationCard;
  large?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/destinations/${place.slug}`}
      className={cn(
        "group relative isolate flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-panel bg-signage p-4 text-on-signage sm:p-5",
        large && "min-h-[24rem] lg:min-h-full",
        className,
      )}
    >
      <Image
        src={place.image}
        alt=""
        fill
        sizes={sizes}
        className="-z-20 object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.06]"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-signage/90 via-signage/15 to-signage/30" />

      <span className="flex items-start justify-between">
        <span className="inline-flex h-8 items-center rounded-[0.3rem] bg-signage px-2.5 type-code text-sm text-signal">
          {place.airport}
        </span>
        <span className="inline-flex size-9 items-center justify-center rounded-control bg-white/12 backdrop-blur-md transition-[background-color,color,transform] speed-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-signal group-hover:text-on-signal">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </span>

      <span>
        <span className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={place.flag} alt="" className="size-6 rounded-full object-cover ring-1 ring-white/40" />
          <span className={cn("font-semibold tracking-[-0.02em]", large ? "type-h3" : "text-lg")}>
            {place.name}
          </span>
        </span>
        {place.landmark ? (
          <span className="mt-1.5 block pl-[2.125rem] type-small text-on-signage-muted">{place.landmark}</span>
        ) : null}
      </span>
    </Link>
  );
}
