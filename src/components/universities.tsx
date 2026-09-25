import { partnerUniversities } from "@/lib/universities";

export function Universities() {
  const rows = [partnerUniversities, partnerUniversities];

  return (
    <section aria-label="Partner universities" className="bg-white py-5 sm:py-6">
      <div className="overflow-hidden">
        <div className="logo-marquee flex w-max items-center">
          {rows.map((row, copy) => (
            <ul
              key={copy}
              data-marquee-copy={copy === 1 ? "" : undefined}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex items-center"
            >
              {row.map((campus) => (
                <li key={`${copy}-${campus.name}`} className="flex h-14 shrink-0 items-center pr-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={campus.logo}
                    alt={copy === 0 ? campus.name : ""}
                    className="h-9 w-auto sm:h-10"
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
