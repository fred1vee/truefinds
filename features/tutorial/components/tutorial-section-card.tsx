import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { TutorialSection } from "../data/tutorial";
import { TutorialIcon } from "./tutorial-icons";
import { TutorialProgress } from "./tutorial-progress";

type TutorialSectionCardProps = {
  completedLessons: number;
  section: TutorialSection;
};

export function TutorialSectionCard({
  completedLessons,
  section,
}: TutorialSectionCardProps) {
  const totalLessons = section.lessons.length;
  const isCompleted =
    totalLessons > 0 && completedLessons === totalLessons;
  const progressState =
    completedLessons === 0
      ? "Not started"
      : isCompleted
        ? "Completed"
        : "In progress";

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#111016] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_60px_rgba(0,0,0,0.2)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_26px_75px_rgba(76,29,149,0.16)] sm:p-6">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 size-56 rounded-full bg-primary/[0.09] blur-3xl transition-colors duration-300 group-hover:bg-primary/[0.14]"
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.1] text-primary shadow-[0_0_24px_rgba(139,92,246,0.12)]">
            <TutorialIcon
              iconKey={section.icon}
              className="size-5"
              strokeWidth={1.75}
            />
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.11em]",
              isCompleted
                ? "border-primary/25 bg-primary/[0.11] text-primary"
                : "border-white/[0.08] bg-white/[0.025] text-zinc-600",
            )}
          >
            {isCompleted ? (
              <CheckCircle2 aria-hidden="true" className="size-3" />
            ) : null}
            {progressState}
          </span>
        </div>

        <h2 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-white">
          {section.title}
        </h2>
        <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">
          {section.description}
        </p>
        <p className="mt-4 text-xs font-medium text-zinc-600">
          {totalLessons} lessons
        </p>

        <div className="mt-5">
          <TutorialProgress
            completed={completedLessons}
            total={totalLessons}
            label={`${section.title} progress`}
          />
        </div>

        <Link
          href={`/tutorial/${section.id}`}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 h-11 w-full rounded-xl bg-primary/[0.12] text-sm text-primary transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/[0.19] hover:shadow-[0_10px_30px_rgba(139,92,246,0.14)] active:translate-y-0",
          )}
        >
          Open section
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}
