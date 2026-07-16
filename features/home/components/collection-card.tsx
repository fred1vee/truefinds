import { Layers3, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type CollectionCardTone = "violet" | "indigo" | "plum";

type CollectionCardProps = {
  eyebrow: string;
  itemCount: string;
  title: string;
  tone?: CollectionCardTone;
};

const toneStyles: Record<CollectionCardTone, string> = {
  violet:
    "from-violet-500/30 via-purple-500/10 to-transparent group-hover:from-violet-500/40",
  indigo:
    "from-indigo-500/30 via-violet-500/10 to-transparent group-hover:from-indigo-500/40",
  plum: "from-fuchsia-500/25 via-purple-500/10 to-transparent group-hover:from-fuchsia-500/35",
};

export function CollectionCard({
  eyebrow,
  itemCount,
  title,
  tone = "violet",
}: CollectionCardProps) {
  return (
    <article className="group relative min-h-64 w-[82vw] max-w-sm shrink-0 overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#121018] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_80px_rgba(76,29,149,0.2)] active:scale-[0.985] sm:min-h-72 sm:w-[23rem] sm:p-7">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-90 transition-colors duration-500",
          toneStyles[tone],
        )}
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-10 size-44 rounded-full border border-white/10 bg-white/[0.035] shadow-[inset_0_0_40px_rgba(255,255,255,0.04)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-6"
      />
      <div
        aria-hidden="true"
        className="absolute right-12 top-20 size-20 rotate-12 rounded-[1.4rem] border border-primary/20 bg-primary/10 backdrop-blur-md transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[18deg]"
      />

      <div className="relative flex h-full min-h-52 flex-col justify-between sm:min-h-56">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-300 backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3 text-primary" />
            {eyebrow}
          </span>
          <Layers3
            aria-hidden="true"
            className="size-5 text-white/35 transition-colors duration-300 group-hover:text-primary"
            strokeWidth={1.5}
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            {itemCount}
          </p>
          <h3 className="max-w-64 text-2xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}
