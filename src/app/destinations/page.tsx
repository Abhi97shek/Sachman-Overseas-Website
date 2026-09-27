import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { DestinationDirectory } from "@/components/destinations/destination-directory";
import { Button } from "@/design-system/buttons/button";
import { destinationCards } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Countries | Sachman Overseas",
  description:
    "Study destinations Sachman Overseas prepares visas for, across North America, Europe, Asia, the Middle East, and Africa.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <PageIntro
        label="Countries"
        code={`${destinationCards.length} destinations`}
        title="Pick a destination. We plan the route."
        lead="Each country has its own tests, intakes, and visa papers. Open one to see how the route works from Pathankot."
        actions={
          <Button href="/eligibility" variant="outline" arrow>
            Check which countries fit
          </Button>
        }
      />
      <DestinationDirectory />
    </PageShell>
  );
}
