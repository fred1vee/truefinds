import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

import { FavoriteButton } from "@/components/shared/favorite-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { SpreadsheetProduct } from "../data/products";

type ProductDetailsPageProps = {
  product: SpreadsheetProduct;
};

export function ProductDetailsPage({ product }: ProductDetailsPageProps) {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <Link
        href="/spreadsheet"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-10 rounded-xl px-3 text-sm text-zinc-400 transition-[background-color,color,transform] duration-300 hover:-translate-x-0.5 hover:bg-white/[0.045] hover:text-white",
        )}
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to Spreadsheet
      </Link>

      <article className="mt-5 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_28px_90px_rgba(0,0,0,0.25)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.07] via-primary/[0.09] to-[#09080d] sm:min-h-[30rem] lg:min-h-[34rem]">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-80 rounded-full bg-primary/[0.16] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 size-72 rounded-full bg-violet-800/[0.1] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute size-48 rotate-6 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-primary/[0.09] shadow-[0_32px_70px_rgba(0,0,0,0.3)] sm:size-60"
          />
          <ImageIcon
            aria-hidden="true"
            className="relative size-12 text-white/30 sm:size-14"
            strokeWidth={1.25}
          />
          <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-300 backdrop-blur-md">
            {product.marketplace}
          </span>
        </div>

        <div className="relative flex flex-col justify-center p-5 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 top-1/3 size-64 rounded-full bg-primary/[0.08] blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.09] px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary">
                {product.category}
              </span>
              <FavoriteButton
                productId={product.id}
                title={product.title}
                variant="details"
              />
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-medium text-primary">
              <ShieldCheck
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Verified find
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Placeholder product details for the current Spreadsheet workspace.
            </p>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-zinc-600">
                Price
              </p>
              <div className="mt-2 flex items-baseline gap-3 whitespace-nowrap">
                <span className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {product.price}
                </span>
                <span className="text-sm font-medium text-zinc-400/60">
                  {product.priceCny}
                </span>
              </div>
            </div>

            <a
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-gradient-to-r from-violet-600 to-purple-500 px-5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(139,92,246,0.3)] outline-none transition-[border-color,box-shadow,filter,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:brightness-110 hover:shadow-[0_16px_45px_rgba(139,92,246,0.4)] focus-visible:ring-4 focus-visible:ring-primary/25 active:translate-y-0"
            >
              Məhsula keç
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
