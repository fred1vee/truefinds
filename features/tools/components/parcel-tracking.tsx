"use client";

import { useState, type FormEvent } from "react";
import { PackageSearch, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";

import { validateTrackingNumber } from "../utils/tool-calculations";
import { ToolCard } from "./tool-card";
import { ToolInput } from "./tool-input";

export function ParcelTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submittedNumber, setSubmittedNumber] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateTrackingNumber(trackingNumber);

    if (validation.error) {
      setError(validation.error);
      setSubmittedNumber(null);
      return;
    }

    setError(null);
    setSubmittedNumber(validation.value);
  }

  return (
    <ToolCard
      icon={PackageSearch}
      title="Parcel tracking"
      description="Prepare a tracking number for the upcoming live carrier integration."
      className="lg:col-span-2"
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
      >
        <ToolInput
          id="tracking-number"
          label="Tracking number"
          hint="Use 6–40 letters, numbers, or hyphens."
          error={error}
          type="text"
          autoComplete="off"
          placeholder="Enter parcel tracking number"
          value={trackingNumber}
          onChange={(event) => {
            setTrackingNumber(event.target.value);
            setSubmittedNumber(null);
            setError(null);
          }}
        />
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-xl bg-primary px-6 text-sm shadow-[0_12px_32px_rgba(139,92,246,0.22)] hover:bg-primary/90 lg:w-auto"
        >
          <Radio aria-hidden="true" className="size-4" />
          Track
        </Button>
      </form>

      {submittedNumber ? (
        <div
          aria-live="polite"
          className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_0_28px_rgba(139,92,246,0.08)]"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.14] text-primary">
              <PackageSearch
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.8}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-100">
                Live tracking integration is coming
              </p>
              <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                {submittedNumber} is ready. Real carrier updates will appear
                here after the live tracking service is connected.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </ToolCard>
  );
}
