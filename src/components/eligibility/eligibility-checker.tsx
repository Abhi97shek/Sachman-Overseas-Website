"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/design-system/buttons/button";
import {
  countByStatus,
  gapOptions,
  matchDestinations,
  studyLevels,
  type EnglishTest,
  type FitStatus,
  type StudyLevel,
} from "@/lib/eligibility";
import { cn } from "@/lib/utils";

const statusCopy: Record<FitStatus, string> = {
  fit: "Fit",
  possible: "Possible",
  "not-yet": "Not yet",
};

const filters = ["all", "fit", "possible", "not-yet"] as const;
type Filter = (typeof filters)[number];

function Select({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} className="field">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" aria-hidden />
    </div>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  placeholder,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
  step: number;
  placeholder: string;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field"
      />
      {hint ? <p className="mt-2 type-small text-subtle">{hint}</p> : null}
    </div>
  );
}

function parsePercent(value: string) {
  if (value.trim() === "") return null;
  const next = Number(value);
  if (!Number.isFinite(next) || next < 0 || next > 100) return null;
  return next;
}

function parseScore(value: string, test: EnglishTest) {
  if (value.trim() === "") return null;
  const next = Number(value);
  if (!Number.isFinite(next)) return null;
  if (test === "ielts" && next >= 0 && next <= 9) return next;
  if (test === "pte" && next >= 10 && next <= 90) return next;
  return null;
}

export function EligibilityChecker() {
  const [level, setLevel] = useState<StudyLevel>("bachelor");
  const [tenth, setTenth] = useState("");
  const [twelfth, setTwelfth] = useState("");
  const [ug, setUg] = useState("");
  const [english, setEnglish] = useState<EnglishTest>("ielts");
  const [score, setScore] = useState("");
  const [gap, setGap] = useState("0");
  const [filter, setFilter] = useState<Filter>("all");

  const profile = useMemo(() => {
    const tenthMarks = parsePercent(tenth);
    const twelfthMarks = parsePercent(twelfth);
    const ugMarks = parsePercent(ug);
    if (tenthMarks == null || twelfthMarks == null) return null;
    if (level === "master" && ugMarks == null) return null;
    const englishScore = english === "none" ? undefined : parseScore(score, english);
    if (english !== "none" && englishScore == null) return null;
    return {
      level,
      tenth: tenthMarks,
      twelfth: twelfthMarks,
      ug: ugMarks ?? undefined,
      english,
      englishScore: englishScore ?? undefined,
      gapYears: Number(gap),
    };
  }, [english, gap, level, score, tenth, twelfth, ug]);

  const matches = useMemo(() => (profile ? matchDestinations(profile) : []), [profile]);
  const counts = countByStatus(matches);
  const visible = filter === "all" ? matches : matches.filter((item) => item.status === filter);

  return (
    <section className="page-container pb-(--section-space)">
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.95fr)]">
        <form
          className="rounded-frame bg-surface p-6 shadow-raised sm:p-10"
          onSubmit={(event) => {
            event.preventDefault();
            document.getElementById("eligibility-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <p className="type-label text-muted">Your file</p>
          <h2 className="mt-3 type-h3">Marks, test, and any gap.</h2>
          <p className="mt-3 max-w-md type-body text-muted">
            Use the percentages on your mark sheets. If you have not sat IELTS or PTE yet, say so — we still rank the academics.
          </p>

          <fieldset className="mt-8">
            <legend className="field-label">What do you want to study?</legend>
            <div role="radiogroup" className="grid gap-2 sm:grid-cols-3">
              {studyLevels.map((item) => {
                const selected = level === item.value;
                return (
                  <label
                    key={item.value}
                    className={cn(
                      "flex cursor-pointer flex-col rounded-control border px-4 py-3 transition-colors speed-fast",
                      selected
                        ? "border-signage bg-signage text-on-signage"
                        : "border-line bg-canvas text-muted hover:border-text hover:text-text",
                    )}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={item.value}
                      checked={selected}
                      onChange={() => setLevel(item.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className={cn("mt-1 type-small", selected ? "text-on-signage-muted" : "text-subtle")}>
                      {item.hint}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <NumberField
              id="tenth"
              label="10th percentage"
              value={tenth}
              onChange={setTenth}
              min={0}
              max={100}
              step={0.1}
              placeholder="e.g. 72"
            />
            <NumberField
              id="twelfth"
              label="12th percentage"
              value={twelfth}
              onChange={setTwelfth}
              min={0}
              max={100}
              step={0.1}
              placeholder="e.g. 68"
            />
            {level === "master" ? (
              <NumberField
                id="ug"
                label="Graduation percentage"
                value={ug}
                onChange={setUg}
                min={0}
                max={100}
                step={0.1}
                placeholder="e.g. 64"
                hint="CGPA: convert to percent as your university prints it."
              />
            ) : null}
            <div>
              <label htmlFor="english" className="field-label">
                English test
              </label>
              <Select
                id="english"
                value={english}
                onChange={(value) => {
                  setEnglish(value as EnglishTest);
                  setScore("");
                }}
                options={[
                  { value: "ielts", label: "IELTS Academic" },
                  { value: "pte", label: "PTE Academic" },
                  { value: "none", label: "Not taken yet" },
                ]}
              />
            </div>
            {english !== "none" ? (
              <NumberField
                id="score"
                label={english === "pte" ? "PTE overall" : "IELTS overall"}
                value={score}
                onChange={setScore}
                min={english === "pte" ? 10 : 0}
                max={english === "pte" ? 90 : 9}
                step={english === "pte" ? 1 : 0.5}
                placeholder={english === "pte" ? "e.g. 58" : "e.g. 6.5"}
              />
            ) : null}
            <div>
              <label htmlFor="gap" className="field-label">
                Gap after last exam
              </label>
              <Select id="gap" value={gap} onChange={setGap} options={gapOptions} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs type-small text-subtle">
              This is a first-pass from typical entry rules. The course, intake, and visa still need a counsellor.
            </p>
            <Button type="submit" size="lg" arrow className="w-fit">
              See matching countries
            </Button>
          </div>
        </form>

        <aside id="eligibility-results" className="rounded-frame bg-signage text-on-signage lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
          <div className="border-b border-signage-line p-6 sm:p-8">
            <p className="type-label text-on-signage-muted">Board</p>
            {profile ? (
              <p className="mt-3 type-code text-xl text-signal" aria-live="polite">
                {String(counts.fit).padStart(2, "0")} FIT · {String(counts.possible).padStart(2, "0")} POSSIBLE
              </p>
            ) : (
              <p className="mt-3 type-h3">Add your marks.</p>
            )}
            <p className="mt-3 type-small text-on-signage-muted">
              {profile
                ? "Fit means the usual academics and English line up. Possible still needs a college match or a stronger score."
                : "Matching countries appear here as soon as 10th, 12th, and the test fields are in."}
            </p>
          </div>

          {profile ? (
            <>
              <div role="tablist" aria-label="Result status" className="flex gap-1 overflow-x-auto px-6 pt-5 sm:px-8">
                {filters.map((item) => {
                  const count = item === "all" ? matches.length : counts[item];
                  const selected = filter === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setFilter(item)}
                      className={cn(
                        "inline-flex h-9 shrink-0 items-center gap-2 rounded-control border px-3 type-small font-semibold transition-colors speed-fast",
                        selected
                          ? "border-on-signage bg-on-signage text-signage"
                          : "border-signage-line text-on-signage-muted hover:border-on-signage-muted hover:text-on-signage",
                      )}
                    >
                      {item === "all" ? "All" : statusCopy[item]}
                      <span className="type-code text-xs">{String(count).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>

              <ol className="max-h-[36rem] divide-y divide-signage-line overflow-y-auto px-6 sm:px-8">
                {visible.map((item) => (
                  <li key={item.place.slug} className="py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.place.flag} alt="" className="size-7 rounded-full object-cover ring-1 ring-white/30" />
                        <div className="min-w-0">
                          <p className="truncate font-semibold tracking-[-0.02em]">{item.place.name}</p>
                          <p className="type-code text-xs text-signal">{item.place.airport}</p>
                        </div>
                      </div>
                      <p
                        className={cn(
                          "shrink-0 type-label",
                          item.status === "fit" && "text-success",
                          item.status === "possible" && "text-signal",
                          item.status === "not-yet" && "text-on-signage-muted",
                        )}
                      >
                        {statusCopy[item.status]}
                      </p>
                    </div>
                    <p className="mt-3 type-small text-on-signage-muted">{item.reasons[0]}</p>
                    {item.reasons[1] ? <p className="mt-1 type-small text-on-signage-muted">{item.reasons[1]}</p> : null}
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      <Link
                        href={`/destinations/${item.place.slug}`}
                        className="type-small font-semibold text-on-signage underline-offset-4 hover:underline"
                      >
                        Open route
                      </Link>
                      <Link
                        href={`/contact?country=${item.place.slug}`}
                        className="type-small font-semibold text-signal underline-offset-4 hover:underline"
                      >
                        Book this country
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <p className="px-6 py-10 type-body text-on-signage-muted sm:px-8">
              {level === "master"
                ? "Add 10th, 12th, graduation, and your English score — or choose “Not taken yet”."
                : "Add 10th, 12th, and your English score — or choose “Not taken yet”."}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
