import type { LucideIcon } from "lucide-react";

type PageHeadingProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export function PageHeading({
  description,
  icon: Icon,
  title,
}: PageHeadingProps) {
  return (
    <section className="flex flex-1 items-center justify-center py-16">
      <div className="flex max-w-lg flex-col items-center text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-[1.35rem] border border-primary/25 bg-primary/[0.13] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_34px_rgba(139,92,246,0.2)] backdrop-blur-xl sm:size-[4.5rem] sm:rounded-3xl">
          <Icon
            aria-hidden="true"
            className="size-7 drop-shadow-[0_0_10px_rgba(168,85,247,0.65)] sm:size-8"
            strokeWidth={1.8}
          />
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
