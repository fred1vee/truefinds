import Link from "next/link";
import { ArrowUpRight, Heart, ImageIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  category: string;
  marketplace: string;
  price: string;
  priceCny: string;
  productId: string;
  title: string;
};

export function ProductCard({
  category,
  marketplace,
  price,
  priceCny,
  productId,
  title,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#111016] shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_55px_rgba(0,0,0,0.18)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_25px_70px_rgba(76,29,149,0.16)]">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.07] via-primary/[0.08] to-[#09080d]">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-10 size-36 rounded-full bg-primary/[0.12] blur-2xl transition-colors duration-500 group-hover:bg-primary/[0.2]"
        />
        <div
          aria-hidden="true"
          className="absolute size-28 rotate-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-primary/[0.08] shadow-[0_22px_45px_rgba(0,0,0,0.24)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3"
        />
        <ImageIcon
          aria-hidden="true"
          className="relative size-8 text-white/30 transition-colors duration-300 group-hover:text-primary/75"
          strokeWidth={1.4}
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-zinc-300 backdrop-blur-md">
          {marketplace}
        </span>
        <button
          type="button"
          aria-label={`Add ${title} to favorites`}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-400 outline-none backdrop-blur-md transition-[background-color,border-color,color,transform] duration-300 hover:border-primary/30 hover:bg-primary/[0.14] hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-90"
        >
          <Heart aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <span className="inline-flex rounded-full border border-primary/15 bg-primary/[0.08] px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-primary/90">
          {category}
        </span>
        <h2 className="mt-3 truncate text-base font-semibold tracking-[-0.03em] text-zinc-100">
          {title}
        </h2>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
          <div>
            <p className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-zinc-600">
              Price
            </p>
            <div className="mt-1 flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-base font-semibold tracking-[-0.03em] text-white">
                {price}
              </span>
              <span className="text-xs font-medium text-zinc-400/60">
                {priceCny}
              </span>
            </div>
          </div>
          <Link
            href={`/spreadsheet/${productId}`}
            aria-label={`Open ${title}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-9 rounded-xl bg-primary/[0.13] px-3 text-xs text-primary transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/20 hover:shadow-[0_8px_24px_rgba(139,92,246,0.14)] active:translate-y-0",
            )}
          >
            Open
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
