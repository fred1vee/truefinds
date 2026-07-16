import { BookOpen } from "lucide-react";

import { PageHeading } from "@/components/layout/page-heading";

export default function TutorialPage() {
  return (
    <PageHeading
      icon={BookOpen}
      title="Tutorial"
      description="Temporary tutorial content will appear here."
    />
  );
}
