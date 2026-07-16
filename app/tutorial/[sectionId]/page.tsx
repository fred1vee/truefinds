import { notFound } from "next/navigation";

import {
  getTutorialSection,
  TutorialSectionPage,
  tutorialSections,
} from "@/features/tutorial";

type TutorialSectionRouteProps = {
  params: Promise<{
    sectionId: string;
  }>;
};

export function generateStaticParams() {
  return tutorialSections.map((section) => ({
    sectionId: section.id,
  }));
}

export default async function TutorialSectionRoute({
  params,
}: TutorialSectionRouteProps) {
  const { sectionId } = await params;
  const section = getTutorialSection(sectionId);

  if (!section) {
    notFound();
  }

  return <TutorialSectionPage section={section} />;
}
