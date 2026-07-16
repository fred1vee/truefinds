"use client";

import { useState, type FormEvent } from "react";
import { ArrowDownUp, BadgeDollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  convertCurrency,
  parsePositiveNumber,
  type CurrencyDirection,
} from "../utils/tool-calculations";
import { ToolCard } from "./tool-card";
import { ToolInput } from "./tool-input";

type CurrencyConverterProps = {
  cnyToAznRate: number;
};

export function CurrencyConverter({
  cnyToAznRate,
}: CurrencyConverterProps) {
  const [direction, setDirection] =
    useState<CurrencyDirection>("cny-to-azn");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const isCnyToAzn = direction === "cny-to-azn";
  const sourceCurrency = isCnyToAzn ? "CNY" : "AZN";
  const targetCurrency = isCnyToAzn ? "AZN" : "CNY";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = parsePositiveNumber(amount, "Amount");

    if (validation.error || validation.value === null) {
      setError(validation.error ?? "Enter a valid amount.");
      setConvertedAmount(null);
      return;
    }

    setError(null);
    setConvertedAmount(
      convertCurrency(validation.value, direction, cnyToAznRate),
    );
  }

  function handleSwap() {
    setDirection((currentDirection) =>
      currentDirection === "cny-to-azn" ? "azn-to-cny" : "cny-to-azn",
    );
    setConvertedAmount(null);
    setError(null);
  }

  return (
    <ToolCard
      icon={BadgeDollarSign}
      title="Currency converter"
      description="Convert between Chinese yuan and Azerbaijani manat."
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex items-end gap-3">
          <div className="min-w-0 flex-1">
            <ToolInput
              id="currency-amount"
              label={`Amount in ${sourceCurrency}`}
              error={error}
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              placeholder={`Enter ${sourceCurrency} amount`}
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value);
                setConvertedAmount(null);
                setError(null);
              }}
            />
          </div>
          <button
            type="button"
            aria-label={`Swap to ${targetCurrency} to ${sourceCurrency}`}
            onClick={handleSwap}
            className="mb-0 flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.1] text-primary outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 hover:border-primary/35 hover:bg-primary/[0.16] hover:shadow-[0_0_24px_rgba(139,92,246,0.14)] focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-95"
          >
            <ArrowDownUp aria-hidden="true" className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/15 px-4 py-3">
          <span className="text-xs text-zinc-600">Direction</span>
          <span className="text-xs font-medium text-zinc-300">
            {sourceCurrency} → {targetCurrency}
          </span>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-5 h-12 w-full rounded-xl bg-primary text-sm shadow-[0_12px_32px_rgba(139,92,246,0.22)] hover:bg-primary/90"
        >
          Convert currency
        </Button>

        {convertedAmount !== null ? (
          <div
            aria-live="polite"
            className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_0_28px_rgba(139,92,246,0.08)]"
          >
            <p className="text-xs font-medium text-primary">
              Converted value
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              {convertedAmount.toFixed(2)} {targetCurrency}
            </p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Placeholder rate: 1 CNY = {cnyToAznRate.toFixed(2)} AZN
            </p>
          </div>
        ) : null}
      </form>
    </ToolCard>
  );
}
