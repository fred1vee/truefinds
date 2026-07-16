"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  getTutorialLessonKey,
  type TutorialSection,
} from "../data/tutorial";
import { useTutorialProgress } from "../hooks/use-tutorial-progress";
import { TutorialIcon } from "./tutorial-icons";
import { TutorialLessonCard } from "./tutorial-lesson-card";
import { TutorialProgress } from "./tutorial-progress";

type TutorialSectionPageProps = {
  section: TutorialSection;
};

export function TutorialSectionPage({
  section,
}: TutorialSectionPageProps) {
  const { completedLessonKeys, isHydrated } = useTutorialProgress();
  const completedLessons = isHydrated
    ? section.lessons.filter((lesson) =>
        completedLessonKeys.includes(
          getTutorialLessonKey(section.id, lesson.id),
        ),
      ).length
    : 0;

  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <Link
        href="/tutorial"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-10 rounded-xl px-3 text-sm text-zinc-400 transition-[background-color,color,transform] duration-300 hover:-translate-x-0.5 hover:bg-white/[0.045] hover:text-white",
        )}
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to Tutorial
      </Link>

      <header className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 size-80 rounded-full bg-primary/[0.15] blur-3xl"
        />
        <div className="relative flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)] sm:size-14">
            <TutorialIcon
              iconKey={section.icon}
              className="size-6"
              strokeWidth={1.7}
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Tutorial section
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              {section.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              {section.description}
            </p>
          </div>
        </div>

        <div className="relative mt-7 rounded-2xl border border-white/[0.07] bg-black/15 p-4 sm:p-5">
          <TutorialProgress
            completed={completedLessons}
            total={section.lessons.length}
            label={isHydrated ? "Section progress" : "Loading progress"}
          />
        </div>
      </header>

      <section className="mt-7 grid gap-4" aria-label={`${section.title} lessons`}>
        {section.lessons.map((lesson, index) => (
          <TutorialLessonCard
            key={lesson.id}
            index={index}
            lesson={lesson}
            sectionId={section.id}
            isCompleted={
              isHydrated &&
              completedLessonKeys.includes(
                getTutorialLessonKey(section.id, lesson.id),
              )
            }
          />
        ))}
      </section>
    </div>
  );
}
