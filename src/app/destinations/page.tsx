import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Destinations } from "@/components/destinations";
import { AllCountries } from "@/components/all-countries";

export const metadata: Metadata = {
  title: "Countries | Sachman Overseas",
  description:
    "Study destinations Sachman Overseas prepares visas for, across North America, Europe, Asia, the Middle East, and Africa.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <Destinations />
      <AllCountries />
    </PageShell>
  );
}
