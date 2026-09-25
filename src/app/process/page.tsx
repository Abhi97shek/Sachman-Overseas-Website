import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";

export const metadata: Metadata = {
  title: "Process | Sachman Overseas",
  description:
    "How Sachman Overseas takes you from counselling to exam preparation and your study visa.",
};

export default function ProcessPage() {
  return (
    <PageShell>
      <Process />
    </PageShell>
  );
}
