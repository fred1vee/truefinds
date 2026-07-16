"use client";

import { useState, type FormEvent } from "react";
import { Calculator, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import type {
  ShippingCarrierId,
  ShippingTariff,
} from "@/lib/config/tools";
import { cn } from "@/lib/utils";

import {
  calculateShippingEstimate,
  parsePositiveNumber,
} from "../utils/tool-calculations";
import { ToolCard } from "./tool-card";
import { ToolInput } from "./tool-input";

type ShippingCalculatorProps = {
  tariffs: readonly ShippingTariff[];
};

export function ShippingCalculator({ tariffs }: ShippingCalculatorProps) {
  const [carrierId, setCarrierId] = useState<ShippingCarrierId>(
    tariffs[0]?.id ?? "starex",
  );
  const [weight, setWeight] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<number | null>(null);

  const selectedTariff =
    tariffs.find((tariff) => tariff.id === carrierId) ?? tariffs[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = parsePositiveNumber(weight, "Weight");

    if (
      validation.error ||
      validation.value === null ||
      !selectedTariff
    ) {
      setError(validation.error ?? "Select a shipping carrier.");
      setEstimate(null);
      return;
    }

    setError(null);
    setEstimate(
      calculateShippingEstimate(
        validation.value,
        selectedTariff.aznPerKilogram,
      ),
    );
  }

  function handleCarrierChange(nextCarrierId: ShippingCarrierId) {
    setCarrierId(nextCarrierId);
    setEstimate(null);
    setError(null);
  }

  return (
    <ToolCard
      icon={Scale}
      title="Shipping calculator"
      description="Estimate delivery cost by carrier and product weight."
    >
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="mb-2 text-xs font-medium text-zinc-400">
            Shipping carrier
          </legend>
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/[0.07] bg-black/15 p-1.5">
            {tariffs.map((tariff) => {
              const isSelected = tariff.id === carrierId;

              return (
                <button
                  key={tariff.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCarrierChange(tariff.id)}
                  className={cn(
                    "h-10 rounded-xl text-sm font-medium outline-none transition-[background-color,box-shadow,color,transform] duration-300 focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]",
                    isSelected
                      ? "bg-primary/[0.16] text-primary shadow-[inset_0_0_0_1px_rgba(168,85,247,0.24),0_0_20px_rgba(139,92,246,0.12)]"
                      : "text-zinc-600 hover:bg-white/[0.035] hover:text-zinc-300",
                  )}
                >
                  {tariff.name}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-5">
          <ToolInput
            id="shipping-weight"
            label="Product weight"
            hint={
              selectedTariff
                ? `Placeholder tariff: ${selectedTariff.aznPerKilogram.toFixed(2)} AZN/kg`
                : undefined
            }
            error={error}
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder="Enter weight in kilograms"
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
              setEstimate(null);
              setError(null);
            }}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-5 h-12 w-full rounded-xl bg-primary text-sm shadow-[0_12px_32px_rgba(139,92,246,0.22)] hover:bg-primary/90"
        >
          <Calculator aria-hidden="true" className="size-4" />
          Calculate estimate
        </Button>

        {estimate !== null && selectedTariff ? (
          <div
            aria-live="polite"
            className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_0_28px_rgba(139,92,246,0.08)]"
          >
            <p className="text-xs font-medium text-primary">
              Estimated delivery price
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              {estimate.toFixed(2)} AZN
            </p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Estimate only. Final delivery pricing may differ.
            </p>
          </div>
        ) : null}
      </form>
    </ToolCard>
  );
}
