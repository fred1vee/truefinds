import { Wrench } from "lucide-react";

import { PageHeading } from "@/components/layout/page-heading";

export default function ToolsPage() {
  return (
    <PageHeading
      icon={Wrench}
      title="Tools"
      description="Temporary tools content will appear here."
    />
  );
}
