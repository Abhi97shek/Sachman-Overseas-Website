import { partnerUniversities } from "@/lib/universities";
import { programmes } from "@/lib/programmes";
import { studyDestinations } from "@/lib/study-destinations";

const stats = [
  { value: 100, suffix: "+", label: "Visas approved" },
  { value: studyDestinations.length, label: "Study countries we advise on" },
  { value: 700, suffix: "+", label: "Partner universities and colleges" },
  { value: programmes.length, label: "Programmes under one roof" },
];

export function StatsStrip() {
  return (
    <section aria-label="Sachman Overseas in numbers" className="page-container section-y-tight">
      <dl data-stagger className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-3 pr-6 ${index > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${
              index % 2 === 1 ? "border-l border-line pl-6 lg:pl-8" : ""
            }`}
          >
            <dt className="order-2 max-w-[14rem] type-small text-muted">{stat.label}</dt>
            <dd
              className="order-1 type-h1 type-code tracking-[-0.04em]"
              data-count={stat.value}
              data-suffix={stat.suffix ?? ""}
            >
              {stat.value}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
