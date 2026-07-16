import { ShieldCheck, Table2 } from "lucide-react";

import { CategoryFilter } from "./category-filter";
import { ProductCard } from "./product-card";
import { SearchBar } from "./search-bar";
import { UpdatedBadge } from "./updated-badge";
import { spreadsheetProducts } from "../data/products";

export function SpreadsheetPage() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <header className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 size-80 rounded-full bg-primary/[0.15] blur-3xl"
        />
        <div className="relative flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)] sm:size-14">
            <Table2 aria-hidden="true" className="size-6" strokeWidth={1.7} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <ShieldCheck
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Verified finds workspace
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Spreadsheet
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Browse verified product finds prepared to support focused sourcing
              research.
            </p>
          </div>
        </div>
      </header>

      <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
        <SearchBar />
        <CategoryFilter />
      </div>

      <section className="mt-7 sm:mt-9" aria-label="Verified product finds">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
          {spreadsheetProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              productId={product.id}
            />
          ))}
        </div>
      </section>

      <UpdatedBadge />
    </div>
  );
}
