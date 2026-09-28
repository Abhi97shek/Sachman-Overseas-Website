import { partnerUniversities } from "@/lib/universities";

export function UniversitiesMarquee() {
  return (
    <section aria-labelledby="partners-title" className="section-y-tight">
      <div className="page-container flex items-center gap-3">
        <span className="h-px w-8 bg-signal" aria-hidden />
        <h2 id="partners-title" className="type-label text-muted">
          Partner universities and colleges
        </h2>
      </div>
      <div className="group mt-8 overflow-hidden mask-x-from-85% mask-x-to-100%">
        <div className="flex w-max animate-marquee items-center will-change-transform group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex items-center">
              {partnerUniversities.map((campus) => (
                <li key={`${copy}-${campus.name}`} className="flex h-16 shrink-0 items-center pr-14 sm:pr-20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={campus.logo}
                    alt={copy === 0 ? campus.name : ""}
                    width={160}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-auto opacity-100 sm:h-10"
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
