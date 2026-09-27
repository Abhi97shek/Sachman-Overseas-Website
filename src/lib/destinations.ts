import { getCountry } from "@/lib/countries";
import { studyDestinations, type StudyDestination } from "@/lib/study-destinations";

export type DestinationCard = StudyDestination & {
  flag: string;
  image: string;
  landmark?: string;
  blurb: string;
};

export const destinationCards: DestinationCard[] = studyDestinations.map((destination) => {
  const rich = getCountry(destination.slug);
  return {
    ...destination,
    flag: rich?.flag ?? `/images/flags/${destination.code}.svg`,
    image: rich?.image ?? `/images/landmarks/${destination.slug}.jpg`,
    landmark: rich?.landmark,
    blurb:
      rich?.blurb ??
      `Courses in ${destination.name}, matched to your marks, budget, and English score, then the visa file in one sequence.`,
  };
});
