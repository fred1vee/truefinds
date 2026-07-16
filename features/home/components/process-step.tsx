import type { LucideIcon } from "lucide-react";

type ProcessStepProps = {
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
  stepNumber: number;
  title: string;
};

export function ProcessStep({
  description,
  icon: Icon,
  isLast = false,
  stepNumber,
  title,
}: ProcessStepProps) {
  return (
    <li className="group relative flex gap-4 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.025] p-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.04] sm:flex-col sm:p-5">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[2.05rem] top-full hidden h-3 w-px bg-gradient-to-b from-primary/30 to-transparent sm:hidden lg:left-full lg:top-[2.15rem] lg:block lg:h-px lg:w-4 lg:bg-gradient-to-r"
        />
      ) : null}
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#17131f] text-primary transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.1]">
        <Icon aria-hidden="true" className="size-[1.125rem]" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-zinc-600">
          Step {stepNumber}
        </p>
        <h3 className="mt-1.5 text-sm font-semibold tracking-[-0.02em] text-zinc-100">
          {title}
        </h3>
        <p className="mt-1.5 text-xs leading-5 text-zinc-500">{description}</p>
      </div>
    </li>
  );
}
