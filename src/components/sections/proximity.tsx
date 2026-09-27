"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { distanceKm, formatDistance, type Coordinates } from "@/lib/distance";
import { directionsUrl, instituteLocation, phone } from "@/lib/institute";
import { cn } from "@/lib/utils";

type Status = "idle" | "asking" | "ready" | "denied" | "unavailable";

function readPosition(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("unavailable"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      (error) => reject(error),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 5 * 60 * 1000 },
    );
  });
}

export function Proximity({
  tone = "page",
  flush = false,
}: {
  tone?: "page" | "signage";
  flush?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [km, setKm] = useState<number | null>(null);

  const locate = async () => {
    setStatus("asking");
    try {
      const here = await readPosition();
      setKm(distanceKm(here, instituteLocation));
      setStatus("ready");
    } catch (error) {
      const code = typeof error === "object" && error && "code" in error ? Number(error.code) : 0;
      setStatus(code === 1 ? "denied" : "unavailable");
    }
  };

  useEffect(() => {
    let cancelled = false;
    const start = async () => {
      const permission = await queryLocationPermission();
      if (cancelled) return;
      if (permission === "granted") void locate();
    };
    void start();
    return () => {
      cancelled = true;
    };
  }, []);

  const dark = tone === "signage";
  const muted = dark ? "text-on-signage-muted" : "text-muted";
  const text = dark ? "text-on-signage" : "text-text";
  const link = dark ? "text-signal hover:text-white" : "text-signal hover:text-text";

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        flush ? "" : dark ? "px-6 py-6 sm:px-10 lg:px-14" : "border-y border-line py-6",
      )}
    >
      <p className="flex gap-3">
        <MapPin className={cn("mt-0.5 size-4 shrink-0", muted)} aria-hidden />
        <span>
          <span className={cn("type-label", muted)}>From you</span>
          <span className={cn("mt-1 block type-small font-medium", text)}>{distanceCopy(status, km)}</span>
          {status === "ready" ? (
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={cn("mt-1 inline-block type-small underline-offset-4 hover:underline", link)}
            >
              Get directions
            </a>
          ) : status === "idle" || status === "denied" || status === "unavailable" ? (
            <button
              type="button"
              onClick={() => void locate()}
              className={cn("mt-1 type-small underline-offset-4 hover:underline", link)}
            >
              {status === "idle" ? "Show distance from your location" : "Try again"}
            </button>
          ) : null}
        </span>
      </p>

      <p className="flex gap-3">
        <Phone className={cn("mt-0.5 size-4 shrink-0", muted)} aria-hidden />
        <span>
          <span className={cn("type-label", muted)}>By phone</span>
          <span className={cn("mt-1 block type-small font-medium", text)}>
            A call is 5 seconds from anywhere.
          </span>
          <a href={phone.href} className={cn("mt-1 inline-block type-small underline-offset-4 hover:underline", link)}>
            Call {phone.display}
          </a>
        </span>
      </p>
    </div>
  );
}

function distanceCopy(status: Status, km: number | null) {
  if (status === "asking") return "Finding how far the centre is…";
  if (status === "ready" && km !== null) {
    return `${formatDistance(km)} from the centre on Dalhousie Road.`;
  }
  if (status === "denied") return "Location is off. The centre is on Dalhousie Road, Pathankot.";
  if (status === "unavailable") return "We could not read your location. The centre is in Pathankot.";
  return "See how far the Pathankot centre is from you.";
}

async function queryLocationPermission() {
  try {
    const result = await navigator.permissions.query({ name: "geolocation" });
    return result.state;
  } catch {
    return "prompt";
  }
}
