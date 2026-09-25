import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Sachman Overseas",
  description:
    "Visit Sachman Overseas in Pathankot or request a free study-visa consultation.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
