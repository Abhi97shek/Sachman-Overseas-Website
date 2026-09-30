"use client";

import { useMemo, useState } from "react";
import { BAND_OPTIONS, formatBand, overallFromSections } from "@/lib/ielts/round";

const fields = [
  { id: "listening", label: "Listening" },
  { id: "reading", label: "Reading" },
  { id: "writing", label: "Writing" },
  { id: "speaking", label: "Speaking" },
] as const;

export function BandCalculator() {
  const [scores, setScores] = useState({ listening: 7, reading: 6.5, writing: 6, speaking: 6.5 });
  const result = useMemo(
    () => overallFromSections(scores.listening, scores.reading, scores.writing, scores.speaking),
    [scores],
  );

  return (
    <div className="mt-8 border border-line bg-surface p-5 sm:p-6">
      <p className="type-label text-muted">Overall band calculator</p>
      <p className="mt-2 max-w-xl type-small text-muted">Change a skill to see the overall move.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className="block">
            <span className="field-label">{field.label}</span>
            <select
              className="field"
              value={scores[field.id]}
              onChange={(event) =>
                setScores((current) => ({ ...current, [field.id]: Number(event.target.value) }))
              }
            >
              {BAND_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {formatBand(option)}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
        <div>
          <dt className="type-label text-[0.625rem] text-subtle">Average</dt>
          <dd className="mt-1 type-code text-2xl">{result.average.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}</dd>
        </div>
        <div>
          <dt className="type-label text-[0.625rem] text-subtle">Overall band</dt>
          <dd className="mt-1 type-code text-2xl text-signage">{formatBand(result.overall)}</dd>
        </div>
      </dl>
    </div>
  );
}
