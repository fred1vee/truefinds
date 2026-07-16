"use client";

import { BookOpen, Sparkles } from "lucide-react";

import {
  getTutorialLessonKey,
  getTutorialLessonReferences,
  tutorialSections,
} from "../data/tutorial";
import { useTutorialProgress } from "../hooks/use-tutorial-progress";
import { TutorialProgress } from "./tutorial-progress";
import { TutorialSectionCard } from "./tutorial-section-card";

export function TutorialPage() {
  const { completedLessonKeys, isHydrated } = useTutorialProgress();
  const lessonReferences = getTutorialLessonReferences();
  const totalLessons = lessonReferences.length;
  const completedLessons = isHydrated
    ? lessonReferences.filter((reference) =>
        completedLessonKeys.includes(
          getTutorialLessonKey(reference.sectionId, reference.lessonId),
        ),
      ).length
    : 0;

  return (
    <div className="w-full py-8 sm:py-12 lg:py-14">
      <header className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 size-80 rounded-full bg-primary/[0.15] blur-3xl"
        />
        <div className="relative flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)] sm:size-14">
            <BookOpen aria-hidden="true" className="size-6" strokeWidth={1.7} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Guided learning
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Tutorial
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Learn the foundations of ordering from Pinduoduo and understand
              the basic resale process.
            </p>
          </div>
        </div>

        <div className="relative mt-7 rounded-2xl border border-white/[0.07] bg-black/15 p-4 sm:p-5">
          <TutorialProgress
            completed={completedLessons}
            total={totalLessons}
            label={isHydrated ? "Overall tutorial progress" : "Loading progress"}
          />
        </div>
      </header>

      {!isHydrated ? (
        <div
          aria-busy="true"
          aria-label="Loading tutorial progress"
          className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tutorialSections.map((section) => (
            <div
              key={section.id}
              className="min-h-80 animate-pulse rounded-[1.75rem] border border-white/[0.06] bg-white/[0.018]"
            />
          ))}
        </div>
      ) : (
        <section
          className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Tutorial sections"
        >
          {tutorialSections.map((section) => {
            const completedLessons = section.lessons.filter((lesson) =>
              completedLessonKeys.includes(
                getTutorialLessonKey(section.id, lesson.id),
              ),
            ).length;

            return (
              <TutorialSectionCard
                key={section.id}
                section={section}
                completedLessons={completedLessons}
              />
            );
          })}
        </section>
      )}
    </div>
  );
}
