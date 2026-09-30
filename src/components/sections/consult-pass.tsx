"use client";

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { sendConsultRequest, type ConsultState } from "@/app/actions/consult";
import { FlapText } from "@/components/motion/flap-text";
import { Button } from "@/design-system/buttons/button";
import { programmes } from "@/lib/programmes";
import { studyDestinations } from "@/lib/study-destinations";
import { cn } from "@/lib/utils";

const interests = [
  ...programmes.map((item) => ({ value: item.id, label: item.title })),
  { value: "counselling", label: "Not sure yet" },
];

function Select({
  id,
  value,
  onChange,
  placeholder,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn("field", !value && "text-subtle")}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
        aria-hidden
      />
    </div>
  );
}

function StubRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="type-label text-[0.625rem] text-on-signage-muted">{label}</p>
      <div className="mt-1.5 min-h-6 truncate type-code text-sm text-on-signage">{children}</div>
    </div>
  );
}

const initialState: ConsultState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 type-small text-danger">
      {message}
    </p>
  );
}

export function ConsultPass({ presetInterest: interestFromPage }: { presetInterest?: string } = {}) {
  const params = useSearchParams();
  const preset = params.get("country") ?? "";
  const queryInterest = params.get("interest") ?? interestFromPage ?? "";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(params.get("phone") ?? "");
  const [interest, setInterest] = useState(
    interests.some((item) => item.value === queryInterest) ? queryInterest : "",
  );
  const [country, setCountry] = useState(
    studyDestinations.some((item) => item.slug === preset) ? preset : "",
  );
  const [message, setMessage] = useState("");
  const [state, formAction, pending] = useActionState(sendConsultRequest, initialState);
  const [dismissed, setDismissed] = useState<ConsultState | null>(null);
  const startedAt = useRef(0);

  const submitted = state.status === "sent" && state !== dismissed;
  const error = state.status === "error" && state !== dismissed ? state : null;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const destination = studyDestinations.find((item) => item.slug === country);
  const programme = interests.find((item) => item.value === interest);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.set("started_at", String(startedAt.current));
    startTransition(() => formAction(data));
  }

  function startOver() {
    startedAt.current = Date.now();
    setDismissed(state);
    setName("");
    setPhone("");
    setMessage("");
    setInterest("");
    setCountry("");
  }

  return (
    <div className="grid overflow-hidden rounded-frame bg-surface shadow-raised lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="p-6 sm:p-10">
        {submitted ? (
          <div role="status" aria-live="polite" className="flex h-full flex-col justify-center py-8">
            <CheckCircle2 className="size-10 text-success" strokeWidth={1.5} />
            <h3 className="mt-6 type-h3">
              Your seat is held{state.status === "sent" && state.firstName ? `, ${state.firstName}` : ""}.
            </h3>
            <p className="mt-3 max-w-md type-body text-muted">
              A counsellor will call you within one business day to fix a time for your free consultation.
            </p>
            <Button variant="outline" className="mt-8 w-fit" onClick={startOver}>
              Send another request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <p className="type-label text-muted">Free counselling request</p>
              <h3 className="mt-3 type-h3">Tell us where you want to go.</h3>
            </div>
            <div aria-hidden inert className="absolute -left-[9999px] size-px overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <div>
              <label htmlFor="name" className="field-label">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={error?.fields?.name ? true : undefined}
                aria-describedby={error?.fields?.name ? "name-error" : undefined}
                className={cn("field", error?.fields?.name && "border-danger")}
              />
              <FieldError id="name-error" message={error?.fields?.name} />
            </div>
            <div>
              <label htmlFor="phone" className="field-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={24}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                aria-invalid={error?.fields?.phone ? true : undefined}
                aria-describedby={error?.fields?.phone ? "phone-error" : undefined}
                className={cn("field", error?.fields?.phone && "border-danger")}
              />
              <FieldError id="phone-error" message={error?.fields?.phone} />
            </div>
            <div>
              <label htmlFor="interest" className="field-label">
                Programme
              </label>
              <Select
                id="interest"
                value={interest}
                onChange={setInterest}
                placeholder="Choose a programme"
                options={interests}
              />
            </div>
            <div>
              <label htmlFor="country" className="field-label">
                Destination
              </label>
              <Select
                id="country"
                value={country}
                onChange={setCountry}
                placeholder="Choose a country"
                options={studyDestinations.map((item) => ({ value: item.slug, label: item.name }))}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="field-label">
                Anything else <span className="normal-case tracking-normal text-subtle">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Your marks, target intake, or test date"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="field"
              />
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p
                role={error ? "alert" : undefined}
                className={cn("max-w-xs type-small", error ? "text-danger" : "text-subtle")}
              >
                {error?.message ?? "A counsellor reads every request. We only use your number to call you back."}
              </p>
              <Button type="submit" size="lg" arrow={!pending} disabled={pending} aria-busy={pending}>
                {pending ? "Sending…" : "Request free counselling"}
              </Button>
            </div>
          </form>
        )}
      </div>

      <aside
        aria-label="Your boarding pass"
        className="relative flex flex-col gap-6 bg-signage p-6 text-on-signage sm:p-8"
      >
        <span
          aria-hidden
          className="absolute inset-x-6 top-0 border-t-2 border-dashed border-line lg:inset-x-auto lg:inset-y-6 lg:left-0 lg:border-t-0 lg:border-l-2"
        />
        <span aria-hidden className="absolute -top-3 -left-3 size-6 rounded-full bg-canvas lg:-top-3 lg:-left-3" />
        <span aria-hidden className="absolute -top-3 -right-3 size-6 rounded-full bg-canvas lg:top-auto lg:-bottom-3 lg:-left-3 lg:right-auto" />

        <div className="flex items-center justify-between">
          <p className="type-label text-signal">Boarding pass</p>
          <p className="type-label text-on-signage-muted">Free consult</p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="type-label text-[0.625rem] text-on-signage-muted">From</p>
            <p className="mt-2 type-code text-4xl">IXP</p>
            <p className="mt-1 type-small text-on-signage-muted">Pathankot</p>
          </div>
          <span aria-hidden className="mb-9 h-px flex-1 bg-signage-line" />
          <div className="text-right">
            <p className="type-label text-[0.625rem] text-on-signage-muted">To</p>
            <p className="mt-2 text-4xl">
              <FlapText
                text={destination?.airport ?? "---"}
                length={3}
                className="type-code text-[0.9em]"
                cellClassName="text-signal"
              />
            </p>
            <p className="mt-1 truncate type-small text-on-signage-muted">{destination?.name ?? "Your country"}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 border-t border-signage-line pt-6">
          <StubRow label="Passenger">{name ? name.toUpperCase() : "—"}</StubRow>
          <StubRow label="Class">{programme ? programme.label.toUpperCase() : "—"}</StubRow>
          <StubRow label="Gate">DALHOUSIE RD</StubRow>
          <StubRow label="Fare">FREE</StubRow>
        </div>

        <div
          aria-hidden
          className="mt-auto h-14 rounded-[0.25rem] opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--on-signage) 0 2px, transparent 2px 4px, var(--on-signage) 4px 5px, transparent 5px 9px, var(--on-signage) 9px 12px, transparent 12px 14px)",
          }}
        />
      </aside>
    </div>
  );
}
