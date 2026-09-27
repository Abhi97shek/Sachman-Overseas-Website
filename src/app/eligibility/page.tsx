import { notFound } from "next/navigation";

/*
  Eligibility is hidden for now. Restore this page by putting back
  EligibilityChecker from @/components/eligibility/eligibility-checker
  and uncommenting the /eligibility links in institute.ts and the footer.
*/

export default function EligibilityPage() {
  notFound();
}
