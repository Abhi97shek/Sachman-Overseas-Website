import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { ConsultSection } from "@/components/sections/consult-section";
import { Proximity } from "@/components/sections/proximity";
import { Button } from "@/design-system/buttons/button";
import { directionsUrl, instituteAddress, mapEmbedUrl, phone } from "@/lib/institute";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Sachman Overseas in Pathankot",
  description:
    "Visit Sachman Overseas on Dalhousie Road, Pathankot, call +91 98884 54140, or request a free IELTS, PTE, or study-visa counselling session.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        label="Contact"
        code="Dalhousie Road"
        title="Check in for a free counselling session."
        lead="Walk in to the centre, call, or send the form. A counsellor replies within one business day."
        actions={
          <Button href={phone.href} variant="dark">
            Call {phone.display}
          </Button>
        }
      />

      <div className="-mt-(--section-space)">
        <ConsultSection heading={false} />
      </div>

      <section className="page-container pb-(--section-space)">
        <div data-reveal className="grid overflow-hidden rounded-frame bg-signage text-on-signage lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
            <div>
              <p className="type-label text-on-signage-muted">Find the centre</p>
              <h2 className="mt-4 type-h3">2nd Floor, above Dashmesh Bajaj</h2>
              <p className="mt-3 max-w-sm type-body text-on-signage-muted">{instituteAddress}</p>
            </div>
            <Proximity tone="signage" flush />
            <Button href={directionsUrl} target="_blank" rel="noreferrer" variant="light" arrow className="w-fit">
              Get directions
            </Button>
          </div>
          <iframe
            title="Map to Sachman Overseas, Dalhousie Road, Pathankot"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 grayscale-[0.4] lg:h-full lg:min-h-[26rem]"
          />
        </div>
      </section>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </PageShell>
  );
}
