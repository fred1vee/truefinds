import { Heart } from "lucide-react";

import { PageHeading } from "@/components/layout/page-heading";

export default function FavoritesPage() {
  return (
    <PageHeading
      icon={Heart}
      title="Favorites"
      description="Temporary favorites content will appear here."
    />
  );
}
