import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ToolCardProps = {
  children: ReactNode;
  className?: string;
  description: string;
  icon: LucideIcon;
  title: string;
};

export function ToolCard({
  children,
  className,
  description,
  icon: Icon,
  title,
}: ToolCardProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#100d16] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_75px_rgba(0,0,0,0.22)] sm:p-7",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-28 size-72 rounded-full bg-primary/[0.1] blur-3xl"
      />
      <div className="relative">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.14)]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-white">
          {title}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
          {description}
        </p>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}
