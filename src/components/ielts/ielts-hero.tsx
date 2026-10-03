import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/design-system/buttons/button";
import { phone } from "@/lib/institute";
import "./ielts-study.css";

export function IeltsHero() {
  return (
    <div className="px-3 sm:px-4">
      <div className="ielts-hero relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-frame text-white md:min-h-[36rem]">
        <div className="absolute inset-0 -z-10 animate-settle">
          <Image
            src="/images/ielts/hero.jpg"
            alt="Students practising Listening, Reading, Writing and Speaking in an IELTS classroom at Sachman Overseas, Pathankot"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-t from-[var(--ielts-red-deep)] via-[color-mix(in_srgb,var(--ielts-red)_55%,transparent)] to-[color-mix(in_srgb,var(--ielts-red)_14%,transparent)]"
        />

        <div className="page-container pt-24 pb-10 md:pb-14">
          <Link
            data-intro
            href="/services"
            className="inline-flex items-center gap-2 type-label text-white/80 transition-colors speed-fast hover:text-white"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            All programmes
          </Link>
          <div data-intro className="mt-6 flex flex-wrap items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/flags/in.svg"
              alt=""
              className="size-8 rounded-full object-cover ring-2 ring-white/30"
            />
            <span className="inline-flex h-8 items-center rounded-[0.3rem] bg-[var(--ielts-red-deep)] px-2.5 type-code text-sm text-signal">
              Academic · GT
            </span>
            <span className="type-label text-white/80">Pathankot</span>
          </div>
          <h1 className="mt-5 overflow-hidden type-h1 text-white">
            <span data-intro="line" className="block">
              IELTS coaching in Pathankot.
            </span>
          </h1>
          <p data-intro className="mt-3 max-w-xl type-lead text-white/80">
            Four sections, weekly mocks, and the score you need for the offer.
          </p>
          <div data-intro className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact?interest=ielts-coaching" variant="light" arrow>
              Book free counselling
            </Button>
            <Button href={phone.href} variant="ghost">
              {phone.display}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
