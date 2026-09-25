import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Destinations } from "@/components/destinations";

export const metadata: Metadata = {
  title: "Countries | Sachman Overseas",
  description:
    "Study destinations we prepare visas for: Canada, UK, Australia, Germany, New Zealand, and the United States.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <Destinations />
    </PageShell>
  );
}
