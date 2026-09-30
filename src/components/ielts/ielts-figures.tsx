import type { ReactNode } from "react";
import type { IeltsFigureId } from "@/lib/ielts/types";

export function IeltsFigure({ id }: { id: IeltsFigureId }) {
  switch (id) {
    case "four-skills":
      return <FourSkills />;
    case "academic-gt":
      return <AcademicGt />;
    case "duration":
      return <ExamStructure />;
    case "sitting":
      return <SittingClock />;
    case "india-delivery":
      return <IndiaDelivery />;
    case "listening-parts":
      return <ListeningParts />;
    case "writing-split":
      return <WritingSplit />;
    case "writing-weight":
      return <WritingWeight />;
    case "speaking-parts":
      return <SpeakingParts />;
    case "band-scale":
      return <BandScale />;
    case "rounding":
      return <RoundingChart />;
    case "listening-convert":
      return <ConversionChart kind="listening" />;
    case "reading-convert":
      return <ConversionChart kind="reading" />;
    default:
      return null;
  }
}

function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="mt-8">
      {children}
      <figcaption className="mt-3 max-w-2xl type-small text-muted">{caption}</figcaption>
    </figure>
  );
}

function FourSkills() {
  const skills = [
    { code: "L", name: "Listening" },
    { code: "R", name: "Reading" },
    { code: "W", name: "Writing" },
    { code: "S", name: "Speaking" },
  ];
  return (
    <Figure caption="Each skill is a quarter of the overall band. A 7.5 in Listening does not cover a 5.5 in Writing.">
      <dl className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.code} className="border-r border-b border-line p-4 sm:p-5">
            <dt className="type-label text-[0.625rem] text-subtle">{skill.name}</dt>
            <dd className="mt-3 type-h2 type-code tracking-[-0.04em]">25%</dd>
          </div>
        ))}
      </dl>
    </Figure>
  );
}

function AcademicGt() {
  return (
    <Figure caption="Listening and Speaking do not change. Reading texts and Writing Task 1 do.">
      <div className="space-y-5 sm:hidden">
        <MobileSame paper="Listening" />
        <MobileSplit
          paper="Reading"
          leftLabel="Academic"
          left="Longer texts from books, journals, magazines, newspapers"
          rightLabel="General Training"
          right="Everyday, workplace and general-interest texts"
        />
        <MobileSplit
          paper="Writing"
          leftLabel="Academic"
          left="Task 1: describe a graph, chart, table, map or process"
          rightLabel="General Training"
          right="Task 1: a letter — formal, semi-formal or informal"
        />
        <MobileSame paper="Speaking" />
      </div>
      <div className="hidden overflow-x-auto sm:block">
        <div className="min-w-[28rem] border-t border-l border-line">
          <div className="grid grid-cols-[7.5rem_1fr_1fr] type-label text-[0.625rem] text-subtle">
            <div className="border-r border-b border-line p-3">Paper</div>
            <div className="border-r border-b border-line p-3">Academic</div>
            <div className="border-r border-b border-line p-3">General Training</div>
          </div>
          <SameRow paper="Listening" />
          <SplitRow paper="Reading" left="Longer texts from books, journals, magazines, newspapers" right="Everyday, workplace and general-interest texts" />
          <SplitRow paper="Writing" left="Task 1: describe a graph, chart, table, map or process" right="Task 1: a letter — formal, semi-formal or informal" />
          <SameRow paper="Speaking" />
        </div>
      </div>
    </Figure>
  );
}

function MobileSame({ paper }: { paper: string }) {
  return (
    <div className="border-t border-line pt-3">
      <p className="font-semibold">{paper}</p>
      <p className="mt-2 bg-sunken px-3 py-2 type-small text-muted">Same section in both tests</p>
    </div>
  );
}

function MobileSplit({
  paper,
  leftLabel,
  left,
  rightLabel,
  right,
}: {
  paper: string;
  leftLabel: string;
  left: string;
  rightLabel: string;
  right: string;
}) {
  return (
    <div className="border-t border-line pt-3">
      <p className="font-semibold">{paper}</p>
      <div className="mt-2 grid grid-cols-2 gap-px bg-line">
        <div className="bg-canvas p-3">
          <p className="type-label text-[0.625rem] text-subtle">{leftLabel}</p>
          <p className="mt-2 type-small text-muted">{left}</p>
        </div>
        <div className="bg-canvas p-3">
          <p className="type-label text-[0.625rem] text-subtle">{rightLabel}</p>
          <p className="mt-2 type-small text-muted">{right}</p>
        </div>
      </div>
    </div>
  );
}

function SameRow({ paper }: { paper: string }) {
  return (
    <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] type-small">
      <p className="border-r border-b border-line p-3 font-semibold">{paper}</p>
      <p className="border-r border-b border-line bg-sunken p-3 text-muted">Same section in both tests</p>
    </div>
  );
}

function SplitRow({ paper, left, right }: { paper: string; left: string; right: string }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr_1fr] type-small">
      <p className="border-r border-b border-line p-3 font-semibold">{paper}</p>
      <p className="border-r border-b border-line p-3 text-muted">{left}</p>
      <p className="border-r border-b border-line p-3 text-muted">{right}</p>
    </div>
  );
}

function ExamStructure() {
  const papers = [
    { name: "Listening", height: 50, time: "~30", detail: "4 parts · 40 questions", skill: "Comprehension" },
    { name: "Reading", height: 100, time: "60", detail: "40 questions", skill: "Comprehension" },
    { name: "Writing", height: 100, time: "60", detail: "2 tasks", skill: "Production" },
    { name: "Speaking", height: 23, time: "11–14", detail: "3-part interview", skill: "Production" },
  ];
  const sitting = [
    { when: "One sitting", what: "Listening → Reading → Writing on computer" },
    { when: "Speaking slot", what: "Same day or a separate appointment, with an examiner" },
  ];

  return (
    <Figure caption="Reading and Writing are twice as long as Listening.">
      <div
        className="grid grid-cols-2 items-end gap-3 sm:grid-cols-4 sm:gap-5"
        role="img"
        aria-label="IELTS exam structure: Listening about 30 minutes with four parts and 40 questions, Reading 60 minutes with 40 questions, Writing 60 minutes with two tasks, Speaking 11 to 14 minutes as a three-part interview"
      >
        {papers.map((paper) => (
          <div key={paper.name} className="flex min-w-0 flex-col items-stretch">
            <div className="flex h-32 items-end bg-sunken sm:h-44">
              <div className="w-full bg-text" style={{ height: `${paper.height}%` }} />
            </div>
            <p className="mt-3 font-semibold">{paper.name}</p>
            <p className="mt-1 type-h2 type-code tracking-[-0.04em]">{paper.time}</p>
            <p className="type-label text-[0.625rem] text-subtle">min</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3 sm:hidden">
        {papers.map((paper) => (
          <div key={`${paper.name}-fact`} className="border-t border-line pt-3">
            <p className="font-semibold">{paper.name}</p>
            <p className="mt-1 type-small text-muted">{paper.detail}</p>
            <p className="mt-1 type-label text-[0.625rem] text-subtle">{paper.skill}</p>
          </div>
        ))}
        {sitting.map((row) => (
          <div key={row.when} className="border-t border-line pt-3">
            <p className="font-semibold">{row.when}</p>
            <p className="mt-1 type-small text-muted">{row.what}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 hidden overflow-x-auto sm:block">
        <div className="min-w-[30rem] border-t border-l border-line">
          <div className="grid grid-cols-[7.5rem_1fr_8.5rem] type-label text-[0.625rem] text-subtle">
            <div className="border-r border-b border-line p-3">Paper</div>
            <div className="border-r border-b border-line p-3">What's in it</div>
            <div className="border-r border-b border-line p-3">Tests</div>
          </div>
          {papers.map((paper) => (
            <div key={paper.name} className="grid grid-cols-[7.5rem_1fr_8.5rem] type-small">
              <p className="border-r border-b border-line p-3 font-semibold">{paper.name}</p>
              <p className="border-r border-b border-line p-3 text-muted">{paper.detail}</p>
              <p className="border-r border-b border-line p-3 text-muted">{paper.skill}</p>
            </div>
          ))}
          {sitting.map((row) => (
            <div key={row.when} className="grid grid-cols-[7.5rem_1fr_8.5rem] type-small">
              <p className="border-r border-b border-line p-3 font-semibold">{row.when}</p>
              <p className="col-span-2 border-r border-b border-line p-3 text-muted">{row.what}</p>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  );
}

function BarRow({
  label,
  value,
  max,
  display,
  fill = "text",
}: {
  label: string;
  value: number;
  max: number;
  display: string;
  fill?: "text" | "signal";
}) {
  const width = Math.max(6, (value / max) * 100);
  return (
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)_auto] items-center gap-2 sm:grid-cols-[8rem_minmax(0,1fr)_7rem] sm:gap-3">
      <p className="type-small font-medium">{label}</p>
      <div className="h-2.5 bg-sunken" aria-hidden>
        <div
          className={`h-full origin-left ${fill === "signal" ? "bg-signal" : "bg-text"}`}
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="type-code text-right text-sm text-muted">{display}</p>
    </div>
  );
}

function SittingClock() {
  const blocks = [
    { name: "Listening", min: 30, tone: "bg-text" },
    { name: "Reading", min: 60, tone: "bg-text/70" },
    { name: "Writing", min: 60, tone: "bg-text/45" },
  ];
  const total = 150;
  return (
    <Figure caption="On computer you sit Listening, Reading and Writing in one block — about two and a half hours. Speaking is booked separately if the centre needs a second slot.">
      <div>
        <p className="type-label text-[0.625rem] text-subtle">Computer sitting · ~2 h 30 m</p>
        <div
          className="mt-3 flex h-10 overflow-hidden bg-sunken"
          role="img"
          aria-label="Listening 30 minutes, Reading 60 minutes, Writing 60 minutes in one sitting"
        >
          {blocks.map((block) => (
            <div
              key={block.name}
              className={block.tone}
              style={{ width: `${(block.min / total) * 100}%` }}
            />
          ))}
        </div>
        <ul className="mt-3 grid grid-cols-3 gap-3 type-small">
          {blocks.map((block) => (
            <li key={block.name}>
              <span className="font-medium text-text">{block.name}</span>
              <span className="mt-0.5 block type-code text-xs text-muted">{block.min} min</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-dashed border-line pt-4">
          <p className="type-label text-[0.625rem] text-subtle">Speaking · often a separate appointment</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2.5 w-[18%] border border-dashed border-line-strong bg-transparent" aria-hidden />
            <p className="type-code text-sm text-muted">11–14 min</p>
          </div>
        </div>
      </div>
    </Figure>
  );
}

function IndiaDelivery() {
  const rows = [
    { paper: "Listening", computer: "Computer", paperMode: "Computer", same: true },
    { paper: "Reading", computer: "Computer", paperMode: "Computer", same: true },
    { paper: "Writing", computer: "Typed on screen", paperMode: "Handwritten on the answer sheet", same: false },
    { paper: "Speaking", computer: "Examiner, face to face", paperMode: "Examiner, face to face", same: true },
  ];
  return (
    <Figure caption="Typed or handwritten, Writing is still 60 minutes for both tasks.">
      <div className="space-y-3 sm:hidden">
        {rows.map((row) => (
          <div key={row.paper} className={`border-t border-line pt-3 ${row.same ? "" : "bg-signal-tint px-3 pb-3"}`}>
            <p className="font-semibold">{row.paper}</p>
            {row.same ? (
              <p className="mt-2 type-small text-muted">{row.computer}</p>
            ) : (
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div>
                  <p className="type-label text-[0.625rem] text-subtle">Computer</p>
                  <p className="mt-1 type-small">{row.computer}</p>
                </div>
                <div>
                  <p className="type-label text-[0.625rem] text-subtle">Writing on Paper</p>
                  <p className="mt-1 type-small">{row.paperMode}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto sm:block">
        <div className="min-w-[30rem] border-t border-l border-line">
          <div className="grid grid-cols-[7rem_1fr_1fr] type-label text-[0.625rem] text-subtle">
            <div className="border-r border-b border-line p-3">Paper</div>
            <div className="border-r border-b border-line p-3">Computer</div>
            <div className="border-r border-b border-line p-3">Writing on Paper</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.paper}
              className={`grid grid-cols-[7rem_1fr_1fr] type-small ${row.same ? "" : "bg-signal-tint"}`}
            >
              <p className="border-r border-b border-line p-3 font-semibold">{row.paper}</p>
              <p className="border-r border-b border-line p-3 text-muted">{row.computer}</p>
              <p className="border-r border-b border-line p-3 text-muted">{row.paperMode}</p>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  );
}

function ListeningParts() {
  const parts = [
    { n: "01", title: "Part 1", height: 38, hint: "Everyday conversation" },
    { n: "02", title: "Part 2", height: 55, hint: "Everyday monologue" },
    { n: "03", title: "Part 3", height: 78, hint: "Training discussion" },
    { n: "04", title: "Part 4", height: 100, hint: "Academic lecture" },
  ];
  return (
    <Figure caption="A teaching picture of density, not official scores. Practice should follow this order — Part 4 is not Part 1 with harder words.">
      <div
        className="grid grid-cols-2 items-end gap-3 sm:grid-cols-4 sm:gap-5"
        role="img"
        aria-label="Listening parts get denser from Part 1 conversation to Part 4 lecture"
      >
        {parts.map((part) => (
          <div key={part.n} className="flex flex-col items-stretch">
            <div className="flex h-32 items-end bg-sunken sm:h-48">
              <div className="w-full bg-text" style={{ height: `${part.height}%` }} />
            </div>
            <p className="mt-3 type-code text-xs text-subtle">{part.n}</p>
            <p className="mt-1 font-semibold">{part.title}</p>
            <p className="mt-1 type-small text-muted">{part.hint}</p>
          </div>
        ))}
      </div>
    </Figure>
  );
}

function WritingSplit() {
  return (
    <Figure caption="A common split, not a rule printed on the paper. Task 2 is weighted more, so most of the hour belongs there.">
      <div className="space-y-4" role="img" aria-label="About 20 minutes on Task 1 and 40 minutes on Task 2">
        <BarRow label="Task 1" value={20} max={60} display="~20 min" />
        <BarRow label="Task 2" value={40} max={60} display="~40 min" fill="signal" />
      </div>
    </Figure>
  );
}

function WritingWeight() {
  return (
    <Figure caption="Task 2 carries more of the Writing band than Task 1. A strong graph description cannot fully rescue an off-topic essay.">
      <div className="space-y-4" role="img" aria-label="Task 2 is weighted more heavily than Task 1">
        <BarRow label="Task 1" value={1} max={3} display="Less weight" />
        <BarRow label="Task 2" value={2} max={3} display="More weight" fill="signal" />
      </div>
    </Figure>
  );
}

function SpeakingParts() {
  const parts = [
    { name: "Part 1", min: 4.5, display: "4–5 min", hint: "Familiar interview" },
    { name: "Part 2", min: 3.5, display: "3–4 min", hint: "Cue card + long turn" },
    { name: "Part 3", min: 4.5, display: "4–5 min", hint: "Broader discussion" },
  ];
  const total = 12.5;
  return (
    <Figure caption="The whole interview is usually 11–14 minutes. Part 2 includes one minute to prepare, then up to two minutes of speaking.">
      <div>
        <div
          className="flex h-10 overflow-hidden bg-sunken"
          role="img"
          aria-label="Speaking Part 1 about 4 to 5 minutes, Part 2 about 3 to 4 minutes, Part 3 about 4 to 5 minutes"
        >
          {parts.map((part, index) => (
            <div
              key={part.name}
              className={index === 1 ? "bg-signal" : index === 0 ? "bg-text" : "bg-text/70"}
              style={{ width: `${(part.min / total) * 100}%` }}
            />
          ))}
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {parts.map((part) => (
            <li key={part.name} className="border-t border-line pt-3">
              <p className="font-semibold">{part.name}</p>
              <p className="mt-1 type-code text-xs text-muted">{part.display}</p>
              <p className="mt-1 type-small text-muted">{part.hint}</p>
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  );
}

function BandScale() {
  const ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Figure caption="The mark at 6.5 is a frequent Pathankot overall. Your letter may be higher, lower, or name a minimum in each skill.">
      <div role="img" aria-label="IELTS band scale from 0 to 9. A marker sits at 6.5, a frequent overall ask." className="px-1 sm:px-2">
        <div className="relative h-3 bg-sunken">
          <div className="absolute inset-y-0 bg-signal-tint" style={{ left: `${(6 / 9) * 100}%`, width: `${(1.5 / 9) * 100}%` }} />
          <div className="absolute inset-y-0 w-0.5 bg-signal" style={{ left: `${(6.5 / 9) * 100}%` }} />
        </div>
        <div className="relative mt-2 h-5">
          {ticks.map((tick) => (
            <span
              key={tick}
              className="absolute -translate-x-1/2 type-code text-xs text-muted"
              style={{ left: `${(tick / 9) * 100}%` }}
            >
              {tick}
            </span>
          ))}
        </div>
      </div>
    </Figure>
  );
}

function RoundingChart() {
  const examples = [
    { average: 6.125, overall: 6.0, note: "Below .25 — stays" },
    { average: 6.25, overall: 6.5, note: ".25 rounds up to the half" },
    { average: 6.75, overall: 7.0, note: ".75 rounds up to the whole" },
  ];
  const start = 6;
  const span = 1;
  return (
    <Figure caption="How the average becomes the reported overall.">
      <div className="space-y-6">
        {examples.map((example) => {
          const avgLeft = ((example.average - start) / span) * 100;
          const outLeft = ((example.overall - start) / span) * 100;
          return (
            <div key={example.average}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="type-small">
                  Average <span className="type-code text-text">{example.average}</span>
                </p>
                <p className="type-small text-muted">
                  Overall <span className="type-code text-text">{example.overall.toFixed(1)}</span>
                  <span className="ml-2 hidden sm:inline">· {example.note}</span>
                </p>
              </div>
              <div className="relative mt-2 h-2.5 bg-sunken" aria-hidden>
                <div
                  className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-text"
                  style={{ left: `${avgLeft}%` }}
                />
                <div
                  className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 bg-signal"
                  style={{ left: `${outLeft}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between type-code text-[0.65rem] text-subtle">
                <span>6.0</span>
                <span>6.5</span>
                <span>7.0</span>
              </div>
            </div>
          );
        })}
        <p className="type-small text-muted">
          <span className="mr-4 inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-text" aria-hidden /> Average
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 bg-signal" aria-hidden /> Reported overall
          </span>
        </p>
      </div>
    </Figure>
  );
}

const LISTENING_CONVERT = [
  { band: "9.0", range: "39–40", min: 39 },
  { band: "8.5", range: "37–38", min: 37 },
  { band: "8.0", range: "35–36", min: 35 },
  { band: "7.5", range: "32–34", min: 32 },
  { band: "7.0", range: "30–31", min: 30 },
  { band: "6.5", range: "26–29", min: 26 },
  { band: "6.0", range: "23–25", min: 23 },
  { band: "5.5", range: "18–22", min: 18 },
  { band: "5.0", range: "16–17", min: 16 },
];

function ConversionChart({ kind }: { kind: "listening" | "reading" }) {
  const title = kind === "listening" ? "Listening" : "Academic Reading";
  const caption =
    kind === "listening"
      ? "Listening · out of 40. Academic Reading is close. General Training usually needs more correct answers for the same band. Official conversion varies by version."
      : "Academic Reading · out of 40. General Training usually needs more correct answers for the same band.";
  return (
    <Figure caption={caption}>
      <div
        className="space-y-2.5"
        role="img"
        aria-label={`Approximate ${title} conversion from raw score out of 40 to band`}
      >
        {LISTENING_CONVERT.map((row) => (
          <div key={row.band} className="grid grid-cols-[2.75rem_minmax(0,1fr)_4.75rem] items-center gap-2 sm:grid-cols-[3.25rem_minmax(0,1fr)_5.5rem] sm:gap-3">
            <p className="type-code text-sm">{row.band}</p>
            <div className="h-2 bg-sunken" aria-hidden>
              <div
                className={`h-full ${row.band === "6.5" || row.band === "7.0" ? "bg-signal" : "bg-text"}`}
                style={{ width: `${(row.min / 40) * 100}%` }}
              />
            </div>
            <p className="type-code text-right text-xs text-muted">{row.range} / 40</p>
          </div>
        ))}
      </div>
    </Figure>
  );
}
