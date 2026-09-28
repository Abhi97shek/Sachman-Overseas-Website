import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/design-system/buttons/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-container pt-12 pb-24 md:pt-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-signal" aria-hidden />
          <p className="type-label text-muted">404</p>
        </div>
        <h1 className="mt-6 max-w-3xl type-h1">This page is not on the map.</h1>
        <p className="mt-5 max-w-md type-lead text-muted">
          The address may have changed. These are the pages students use most.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/services" variant="outline">
            IELTS and PTE coaching
          </Button>
          <Button href="/contact" variant="outline">
            Book free counselling
          </Button>
        </div>
        <ul className="mt-12 max-w-md space-y-3 type-body">
          <li>
            <Link href="/destinations" className="font-medium underline underline-offset-4">
              Study visa countries from Pathankot
            </Link>
          </li>
          <li>
            <Link href="/process" className="font-medium underline underline-offset-4">
              From counselling to the visa file
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
