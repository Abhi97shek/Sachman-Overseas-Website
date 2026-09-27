"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { consultEmailHtml, consultEmailSubject, consultEmailText } from "@/lib/consult-email";
import { email as instituteEmail } from "@/lib/institute";
import { programmes } from "@/lib/programmes";
import { studyDestinations } from "@/lib/study-destinations";

export type ConsultState =
  | { status: "idle" }
  | { status: "sent"; firstName: string }
  | { status: "error"; message: string; fields?: Partial<Record<"name" | "phone", string>> };

/* Humans take a few seconds to fill four fields; scripts post instantly. */
const MIN_FILL_MS = 3_000;
/* A form left open longer than this is re-rendered before sending. */
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 6;
const RATE_WINDOW_MS = 1000 * 60 * 10;
const RATE_MAX = 3;

/* Per-server-instance memory: stops repeat bursts, but resets on redeploy and is
   not shared across serverless instances. */
const recent = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) {
    recent.set(key, hits);
    return true;
  }
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5_000) recent.clear();
  return false;
}

function text(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/* Silent success: bots get no signal that they were filtered. */
const fakeSent: ConsultState = { status: "sent", firstName: "" };

export async function sendConsultRequest(_prev: ConsultState, formData: FormData): Promise<ConsultState> {
  if (text(formData, "company", 200)) return fakeSent;

  const startedAt = Number(text(formData, "started_at", 20));
  const age = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || startedAt <= 0 || age < MIN_FILL_MS) return fakeSent;
  if (age > MAX_FORM_AGE_MS) {
    return { status: "error", message: "This form was open for a long time. Refresh the page and send it again." };
  }

  const name = text(formData, "name", 80);
  const phone = text(formData, "phone", 24);
  const interestId = text(formData, "interest", 40);
  const countrySlug = text(formData, "country", 60);
  const message = text(formData, "message", 1_000);

  const fields: Partial<Record<"name" | "phone", string>> = {};
  if (name.length < 2 || !/\p{L}/u.test(name)) fields.name = "Enter your full name.";
  const digits = phone.replace(/\D/g, "");
  if (!/^[+\d\s()-]+$/.test(phone) || digits.length < 10 || digits.length > 13) {
    fields.phone = "Enter a 10-digit mobile number, with or without +91.";
  }
  if (fields.name || fields.phone) {
    return { status: "error", message: "Check the highlighted fields.", fields };
  }

  if ((message.match(/https?:\/\/|www\./gi) ?? []).length > 1) return fakeSent;

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
  if (rateLimited(ip) || rateLimited(`phone:${digits.slice(-10)}`)) {
    return {
      status: "error",
      message: "We already have a few requests from you. A counsellor will call — or ring the centre directly.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[consult] RESEND_API_KEY is not set");
    return { status: "error", message: "The form is not connected yet. Please call the centre to book." };
  }

  const programme =
    programmes.find((item) => item.id === interestId)?.title ?? (interestId === "counselling" ? "Not sure yet" : "—");
  const destination = studyDestinations.find((item) => item.slug === countrySlug);
  const payload = {
    name,
    phone,
    programme,
    country: destination?.name ?? "—",
    airport: destination?.airport,
    message,
  };

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONSULT_FROM_EMAIL ?? "Sachman Overseas <onboarding@resend.dev>",
    to: (process.env.CONSULT_TO_EMAIL ?? instituteEmail.display).split(",").map((item) => item.trim()),
    subject: consultEmailSubject(payload),
    html: consultEmailHtml(payload),
    text: consultEmailText(payload),
  });

  if (error) {
    console.error("[consult] Resend error", error);
    return { status: "error", message: "The request could not be sent. Please try again, or call the centre." };
  }

  return { status: "sent", firstName: name.split(/\s+/)[0] ?? "" };
}
