"use client";

import { Button } from "@/design-system/buttons/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="page-container flex flex-1 flex-col justify-center py-24">
      <p className="type-label text-muted">Something went wrong</p>
      <h1 className="mt-4 max-w-xl type-h2">The page could not load.</h1>
      <p className="mt-4 max-w-md type-body text-muted">Try again, or go back to the home page.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button href="/" variant="outline">
          Back to home
        </Button>
      </div>
    </section>
  );
}
