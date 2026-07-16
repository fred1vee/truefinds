import { notFound } from "next/navigation";

import {
  getTutorialLesson,
  getTutorialLessonNavigation,
  getTutorialSection,
  TutorialLessonPage,
  tutorialSections,
} from "@/features/tutorial";

type TutorialLessonRouteProps = {
  params: Promise<{
    lessonId: string;
    sectionId: string;
  }>;
};

export function generateStaticParams() {
  return tutorialSections.flatMap((section) =>
    section.lessons.map((lesson) => ({
      lessonId: lesson.id,
      sectionId: section.id,
    })),
  );
}

export default async function TutorialLessonRoute({
  params,
}: TutorialLessonRouteProps) {
  const { lessonId, sectionId } = await params;
  const section = getTutorialSection(sectionId);
  const lesson = getTutorialLesson(sectionId, lessonId);
  const navigation = getTutorialLessonNavigation(sectionId, lessonId);

  if (!section || !lesson || !navigation) {
    notFound();
  }

  return (
    <TutorialLessonPage
      section={section}
      lesson={lesson}
      {...navigation}
    />
  );
}
