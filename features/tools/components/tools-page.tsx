import { Sparkles, Wrench } from "lucide-react";

import {
  PLACEHOLDER_CNY_TO_AZN_RATE,
  PLACEHOLDER_SHIPPING_TARIFFS,
} from "@/lib/config/tools";

import { CurrencyConverter } from "./currency-converter";
import { ParcelTracking } from "./parcel-tracking";
import { ShippingCalculator } from "./shipping-calculator";

export function ToolsPage() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <header className="pb-8 sm:pb-10">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)] sm:size-14">
            <Wrench aria-hidden="true" className="size-6" strokeWidth={1.7} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Practical reseller utilities
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Tools
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Estimate shipping, convert currencies, and prepare parcel
              tracking from one focused workspace.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        <ShippingCalculator tariffs={PLACEHOLDER_SHIPPING_TARIFFS} />
        <CurrencyConverter cnyToAznRate={PLACEHOLDER_CNY_TO_AZN_RATE} />
        <ParcelTracking />
      </div>
    </div>
  );
}
