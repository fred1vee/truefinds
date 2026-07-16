import {
  BookOpen,
  CircleHelp,
  Search,
  ShieldCheck,
  Store,
  Truck,
  UserPlus,
  Users,
} from "lucide-react";

import type { TutorialIconKey } from "../data/tutorial";

type TutorialIconProps = {
  className?: string;
  iconKey: TutorialIconKey;
  strokeWidth?: number;
};

export function TutorialIcon({
  className,
  iconKey,
  strokeWidth,
}: TutorialIconProps) {
  const iconProps = {
    "aria-hidden": true,
    className,
    strokeWidth,
  } as const;

  switch (iconKey) {
    case "checking-product":
      return <ShieldCheck {...iconProps} />;
    case "finding-products":
      return <Search {...iconProps} />;
    case "getting-started":
      return <BookOpen {...iconProps} />;
    case "faq":
      return <CircleHelp {...iconProps} />;
    case "intermediaries":
      return <Users {...iconProps} />;
    case "registration":
      return <UserPlus {...iconProps} />;
    case "resale":
      return <Store {...iconProps} />;
    case "shipping":
      return <Truck {...iconProps} />;
  }
}
