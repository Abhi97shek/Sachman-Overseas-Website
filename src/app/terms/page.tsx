import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { LegalArticle } from "@/components/legal-article";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sachman Overseas",
  description: "Terms for using the Sachman Overseas website and counselling services in Pathankot.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalArticle title="Terms & Conditions">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
          <p className="mt-2">
            Sachman Overseas is a coaching and study-visa consultancy at 2nd Floor, above Dashmesh Bajaj,
            Dalhousie Road, near Simbal Chowk, Pathankot, Punjab 145001. These terms cover this website and
            the counselling, IELTS, PTE, spoken English, and visa-file support we provide from that centre.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Using the website</h2>
          <p className="mt-2">
            The pages are here to explain our services and help you reach us. Country notes, processing
            times, and university names are general guidance. Always confirm the latest rule with the
            embassy, university, or test provider before you apply.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Counselling and visas</h2>
          <p className="mt-2">
            We help you shortlist courses, prepare documents, and understand the application. A visa,
            admission, or test score is decided by the university, the test body, or the government. We do
            not guarantee an offer, a band score, or a visa grant.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Fees and your documents</h2>
          <p className="mt-2">
            Fees for coaching or a visa file are explained before you enrol. You are responsible for the
            accuracy of the mark sheets, passport, funds, and other papers you give us. Please do not submit
            documents you know are incomplete or untrue.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p className="mt-2">
            Questions about these terms:{" "}
            <a className="font-medium text-tide" href="mailto:sachmaninstitute08@gmail.com">
              sachmaninstitute08@gmail.com
            </a>{" "}
            or{" "}
            <a className="font-medium text-tide" href="tel:+919888454140">
              +91 98884 54140
            </a>
            . Read how we handle personal details on the{" "}
            <Link className="font-medium text-tide" href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </LegalArticle>
    </PageShell>
  );
}
