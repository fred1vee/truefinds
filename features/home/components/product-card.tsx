import { Heart, Package } from "lucide-react";

import { cn } from "@/lib/utils";

type ProductCardProps = {
  category: string;
  compact?: boolean;
  label: string;
};

export function ProductCard({
  category,
  compact = false,
  label,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#111016] shadow-[0_18px_55px_rgba(0,0,0,0.2)] transition-[border-color,box-shadow,transform] duration-400 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_65px_rgba(76,29,149,0.16)] active:scale-[0.985]",
        compact && "flex w-[78vw] max-w-sm shrink-0",
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.08] via-primary/[0.08] to-[#09080d]",
          compact && "aspect-auto w-32 shrink-0 sm:w-36",
        )}
      >
        <div
          aria-hidden="true"
          className="absolute size-24 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-primary/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3"
        />
        <Package
          aria-hidden="true"
          className="relative size-8 text-white/35 transition-colors duration-300 group-hover:text-primary/80"
          strokeWidth={1.4}
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-zinc-300 backdrop-blur-md">
          Preview
        </span>
      </div>

      <div
        className={cn(
          "flex items-start justify-between gap-3 p-4 sm:p-5",
          compact && "min-w-0 flex-1 flex-col justify-center",
        )}
      >
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary/80">
            {category}
          </p>
          <h3 className="mt-2 truncate text-base font-medium tracking-[-0.025em] text-zinc-100">
            {label}
          </h3>
        </div>
        <Heart
          aria-hidden="true"
          className={cn(
            "mt-0.5 size-[1.125rem] shrink-0 text-zinc-600 transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-primary",
            compact && "hidden",
          )}
          strokeWidth={1.7}
        />
      </div>
    </article>
  );
}
