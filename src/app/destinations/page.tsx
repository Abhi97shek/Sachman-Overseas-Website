import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { DestinationDirectory } from "@/components/destinations/destination-directory";
import { Button } from "@/design-system/buttons/button";
import { destinationCards } from "@/lib/destinations";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Study Visa Countries from Pathankot",
  description:
    "Study destinations Sachman Overseas advises from Pathankot, including Canada, the UK, Australia, Germany, the USA, and 25 more countries.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <PageShell>
      <PageIntro
        label="Countries"
        code={`${destinationCards.length} destinations`}
        title="Pick a destination. We plan the route."
        lead="Each country has its own tests, intakes, and visa papers. Open one to see how the route works from Pathankot."
        actions={
          <Button href="/contact" variant="outline" arrow>
            Book free counselling
          </Button>
        }
      />
      <DestinationDirectory />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Study countries", path: "/destinations" },
        ])}
      />
    </PageShell>
  );
}
