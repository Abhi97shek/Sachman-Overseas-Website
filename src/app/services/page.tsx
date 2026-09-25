import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Services | Sachman Overseas",
  description:
    "IELTS, PTE, spoken English, and study-visa guidance from Sachman Overseas in Pathankot.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
