"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  getTutorialLessonKey,
  type TutorialLesson,
  type TutorialLessonReference,
  type TutorialSection,
} from "../data/tutorial";
import { useTutorialProgress } from "../hooks/use-tutorial-progress";

type TutorialLessonPageProps = {
  currentIndex: number;
  lesson: TutorialLesson;
  next: TutorialLessonReference | null;
  previous: TutorialLessonReference | null;
  section: TutorialSection;
  totalLessons: number;
};

export function TutorialLessonPage({
  currentIndex,
  lesson,
  next,
  previous,
  section,
  totalLessons,
}: TutorialLessonPageProps) {
  const { isHydrated, isLessonCompleted, markLessonCompleted } =
    useTutorialProgress();
  const lessonKey = getTutorialLessonKey(section.id, lesson.id);
  const isCompleted =
    isHydrated && isLessonCompleted(lessonKey);

  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <Link
        href={`/tutorial/${section.id}`}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-10 rounded-xl px-3 text-sm text-zinc-400 transition-[background-color,color,transform] duration-300 hover:-translate-x-0.5 hover:bg-white/[0.045] hover:text-white",
        )}
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to {section.title}
      </Link>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
        <article className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_28px_90px_rgba(0,0,0,0.24)]">
          <header className="relative overflow-hidden border-b border-white/[0.08] px-5 py-8 sm:px-8 sm:py-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-32 size-80 rounded-full bg-primary/[0.15] blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {section.title}
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                {lesson.summary}
              </p>
              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-zinc-400">
                    Reading progress
                  </span>
                  <span className="text-zinc-600">
                    Lesson {currentIndex + 1} of {totalLessons}
                  </span>
                </div>
                <progress
                  aria-label="Reading progress"
                  value={currentIndex + 1}
                  max={totalLessons}
                  className="block h-2 w-full overflow-hidden rounded-full bg-white/[0.06] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white/[0.06] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-primary"
                />
              </div>
            </div>
          </header>

          <div className="space-y-6 px-5 py-8 sm:px-8 sm:py-10">
            {lesson.content.map((block, index) => {
              const key = `${block.type}-${index}`;

              if (block.type === "heading") {
                return (
                  <h2
                    key={key}
                    className="text-xl font-semibold tracking-[-0.04em] text-zinc-100"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={key} className="space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-zinc-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "note") {
                return (
                  <aside
                    key={key}
                    className="rounded-2xl border border-primary/18 bg-primary/[0.07] p-4 text-sm leading-6 text-zinc-400"
                  >
                    {block.text}
                  </aside>
                );
              }

              return (
                <p key={key} className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {block.text}
                </p>
              );
            })}
          </div>

          <footer className="grid gap-3 border-t border-white/[0.08] p-5 sm:grid-cols-2 sm:p-8">
            {previous ? (
              <Link
                href={previous.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 justify-start rounded-xl border-white/[0.09] bg-white/[0.025] px-4 text-sm text-zinc-300 hover:border-primary/20 hover:bg-primary/[0.07]",
                )}
              >
                <ChevronLeft aria-hidden="true" className="size-4" />
                Previous lesson
              </Link>
            ) : (
              <span className="flex h-12 items-center justify-start rounded-xl border border-white/[0.05] px-4 text-sm text-zinc-700">
                <ChevronLeft aria-hidden="true" className="mr-1.5 size-4" />
                Previous lesson
              </span>
            )}

            {next ? (
              <Link
                href={next.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 justify-end rounded-xl bg-primary/[0.14] px-4 text-sm text-primary hover:bg-primary/[0.2]",
                )}
              >
                Next lesson
                <ChevronRight aria-hidden="true" className="size-4" />
              </Link>
            ) : (
              <span className="flex h-12 items-center justify-end rounded-xl border border-white/[0.05] px-4 text-sm text-zinc-700">
                Next lesson
                <ChevronRight aria-hidden="true" className="ml-1.5 size-4" />
              </span>
            )}
          </footer>
        </article>

        <aside className="rounded-[1.6rem] border border-white/[0.08] bg-[#111016] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_55px_rgba(0,0,0,0.17)] lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">
            Lesson status
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-xl border",
                isCompleted
                  ? "border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_22px_rgba(139,92,246,0.13)]"
                  : "border-white/[0.08] bg-white/[0.025] text-zinc-600",
              )}
            >
              <CheckCircle2 aria-hidden="true" className="size-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">
                {isCompleted ? "Completed" : "Not completed"}
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Saved on this device
              </p>
            </div>
          </div>

          <Button
            type="button"
            size="lg"
            disabled={!isHydrated || isCompleted}
            onClick={() => markLessonCompleted(lessonKey)}
            className="mt-5 h-12 w-full rounded-xl bg-primary text-sm shadow-[0_12px_32px_rgba(139,92,246,0.24)] hover:bg-primary/90"
          >
            {isCompleted ? (
              <>
                <CheckCircle2 aria-hidden="true" className="size-4" />
                Completed
              </>
            ) : (
              <>
                Mark as completed
                <ArrowRight aria-hidden="true" className="size-4" />
              </>
            )}
          </Button>
        </aside>
      </div>
    </div>
  );
}
