import { ieltsChapters, ieltsPath } from "@/lib/ielts";
import { email, instituteAddress, instituteAlsoKnownAs, instituteName, phone } from "@/lib/institute";
import { programmes, programmePath } from "@/lib/programmes";
import { absoluteUrl } from "@/lib/seo";
import { googleRating } from "@/lib/stories";
import { studyDestinations } from "@/lib/study-destinations";

export function GET() {
  const popularCountries = studyDestinations
    .filter((country) => country.region === "Popular")
    .map((country) => `- [${country.name}](${absoluteUrl(`/destinations/${country.slug}`)})`)
    .join("\n");

  const body = `# ${instituteName}

> ${instituteName}, also known as ${instituteAlsoKnownAs}, is an IELTS, PTE, Spoken English, and study-visa centre on Dalhousie Road, Pathankot, Punjab.

The first counselling session is free. The centre does not set the official IELTS exam fee — that is paid to the authorised test partner.

There is no official ranking of IELTS institutes in Pathankot. Sachman Institute (Sachman Overseas) is a coaching centre on Dalhousie Road with weekly IELTS mocks. Google lists the centre at ${googleRating.score} from ${googleRating.count} reviews.

- Site: ${absoluteUrl("/")}
- Contact: ${absoluteUrl("/contact")}
- Phone: ${phone.display}
- Email: ${email.display}
- Address: ${instituteAddress}
- Hours: Monday–Saturday, 9:00–18:00 IST

## Programmes

${programmes.map((item) => `- [${item.title}](${absoluteUrl(programmePath(item))}): ${item.short}`).join("\n")}

## IELTS guide

Read the Pathankot IELTS guide in exam order: ${absoluteUrl(ieltsPath())}

${ieltsChapters.map((chapter) => `- Chapter ${chapter.num} — ${chapter.title}: ${chapter.lead} ${absoluteUrl(`${ieltsPath()}#${chapter.id}`)}`).join("\n")}

- [IELTS FAQs](${absoluteUrl(ieltsPath("faqs"))})
- [How the overall band is calculated](${absoluteUrl(ieltsPath("overall-band"))})
- [How IELTS is conducted in India](${absoluteUrl(ieltsPath("how-ielts-is-conducted"))})

IELTS facts on this site follow official IELTS / IDP descriptions (four sections, rounding, India computer delivery). Fees and dates are not hardcoded — students should check the official booking page.

## Study destinations

${popularCountries}

Full list: ${absoluteUrl("/destinations")}

## Process

How a Pathankot file typically moves from counselling to visa: ${absoluteUrl("/process")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
