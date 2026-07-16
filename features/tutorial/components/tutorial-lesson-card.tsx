import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { TutorialLesson } from "../data/tutorial";

type TutorialLessonCardProps = {
  index: number;
  isCompleted: boolean;
  lesson: TutorialLesson;
  sectionId: string;
};

export function TutorialLessonCard({
  index,
  isCompleted,
  lesson,
  sectionId,
}: TutorialLessonCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/[0.08] bg-[#111016] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_55px_rgba(0,0,0,0.17)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_22px_65px_rgba(76,29,149,0.12)] sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold",
            isCompleted
              ? "border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_22px_rgba(139,92,246,0.12)]"
              : "border-white/[0.08] bg-white/[0.025] text-zinc-600",
          )}
        >
          {isCompleted ? (
            <CheckCircle2 aria-hidden="true" className="size-4" />
          ) : (
            String(index + 1).padStart(2, "0")
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.13em] text-zinc-600">
            {isCompleted ? (
              <CheckCircle2 aria-hidden="true" className="size-3 text-primary" />
            ) : (
              <Circle aria-hidden="true" className="size-3" />
            )}
            {isCompleted ? "Completed" : "Lesson"}
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-[-0.035em] text-zinc-100">
            {lesson.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {lesson.summary}
          </p>
          <Link
            href={`/tutorial/${sectionId}/${lesson.id}`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "mt-5 h-10 rounded-xl px-3 text-xs text-primary hover:bg-primary/[0.1]",
            )}
          >
            Open lesson
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
