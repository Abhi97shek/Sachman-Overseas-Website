import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { LegalArticle } from "@/components/layout/legal-article";

export const metadata: Metadata = {
  title: "Privacy Policy | Sachman Overseas",
  description: "How Sachman Overseas handles personal details shared by students and visitors.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalArticle title="Privacy Policy">
        <section>
          <h2>What we collect</h2>
          <p>
            If you call, email, or visit the Pathankot centre, we may keep your name, phone number, email,
            the course you ask about, and the academic or passport details you choose to share so we can
            counsel you.
          </p>
        </section>
        <section>
          <h2>The form on this website</h2>
          <p>
            The counselling form sends your name, phone number, programme, destination, and any note you
            type to the centre so a counsellor can call you back. We do not use that number for marketing.
            Hidden checks stop most automated spam; if a request looks automated it is discarded. To reach
            us without the form, call{" "}
            <a href="tel:+919888454140">+91 98884 54140</a> or email{" "}
            <a href="mailto:sachmaninstitute08@gmail.com">sachmaninstitute08@gmail.com</a>.
          </p>
        </section>
        <section>
          <h2>How we use details</h2>
          <p>
            We use what you give us to reply, plan coaching, and prepare a study or visa file. We do not
            sell your personal information. Staff at the centre can see a file only so they can work on
            your case.
          </p>
        </section>
        <section>
          <h2>Other websites</h2>
          <p>
            Links to Instagram, Facebook, LinkedIn, and Google Maps leave this site. Those services have
            their own privacy rules. The map opens directions from your current location only after you
            choose to open Google Maps.
          </p>
        </section>
        <section>
          <h2>Asking us to update or delete</h2>
          <p>
            Email{" "}
            <a href="mailto:sachmaninstitute08@gmail.com">
              sachmaninstitute08@gmail.com
            </a>{" "}
            if you want a copy of the details we hold, a correction, or deletion when we no longer need
            them for your application. See also our{" "}
            <Link href="/terms">
              Terms & Conditions
            </Link>
            .
          </p>
        </section>
      </LegalArticle>
    </PageShell>
  );
}
