import { SectionHeading } from "@/components/layout/page-intro";
import { CountryCarousel } from "@/components/home/country-carousel";
import { Button } from "@/design-system/buttons/button";
import { destinationCards } from "@/lib/destinations";

export function PopularRoutes() {
  return (
    <section id="destinations" className="page-container section-y overflow-x-clip pt-0">
      <SectionHeading
        label="Popular routes"
        title="Where Pathankot students are heading."
        lead="Each route comes with its own tests, intakes, and visa papers. We plan the course and the file together."
        aside={
          <div className="flex flex-wrap gap-3">
            {/* <Button href="/eligibility" arrow className="w-fit">
              Check your eligibility
            </Button> */}
            <Button href="/contact" arrow className="w-fit">
              Book free counselling
            </Button>
            <Button href="/destinations" variant="outline" arrow className="w-fit">
              All {destinationCards.length} countries
            </Button>
          </div>
        }
      />

      <div data-reveal className="mt-14 md:mt-20">
        <CountryCarousel />
      </div>
    </section>
  );
}
