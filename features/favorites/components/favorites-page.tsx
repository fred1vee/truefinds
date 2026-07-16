"use client";

import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";

import { ProductCard } from "@/components/shared/product-card";
import { buttonVariants } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { spreadsheetProducts } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function FavoritesPage() {
  const { favoriteIds, isHydrated } = useFavorites();
  const favoriteProducts = spreadsheetProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <header className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 size-80 rounded-full bg-primary/[0.15] blur-3xl"
        />
        <div className="relative flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)] sm:size-14">
            <Heart
              aria-hidden="true"
              className="size-6 fill-current"
              strokeWidth={1.7}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Saved finds
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Favorites
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Keep verified finds together and return to them whenever you need.
            </p>
          </div>
        </div>
      </header>

      {!isHydrated ? (
        <div
          aria-busy="true"
          aria-label="Loading favorites"
          className="flex min-h-72 items-center justify-center"
        >
          <Heart
            aria-hidden="true"
            className="size-7 animate-pulse text-primary/50"
            strokeWidth={1.6}
          />
        </div>
      ) : favoriteProducts.length > 0 ? (
        <section className="mt-7 sm:mt-9" aria-label="Favorite products">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                productId={product.id}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-7 flex min-h-96 items-center justify-center rounded-[2rem] border border-white/[0.08] bg-white/[0.02] px-5 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:mt-9">
          <div className="max-w-md">
            <div className="mx-auto flex size-16 items-center justify-center rounded-[1.4rem] border border-primary/20 bg-primary/[0.09] text-primary shadow-[0_0_32px_rgba(139,92,246,0.14)]">
              <Heart aria-hidden="true" className="size-7" strokeWidth={1.6} />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">
              No favorites yet
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base">
              Save products from Spreadsheet and they will appear here.
            </p>
            <Link
              href="/spreadsheet"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-7 h-12 rounded-xl bg-primary px-5 text-sm shadow-[0_12px_35px_rgba(139,92,246,0.25)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_16px_42px_rgba(139,92,246,0.34)] active:translate-y-0",
              )}
            >
              Explore Spreadsheet
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
