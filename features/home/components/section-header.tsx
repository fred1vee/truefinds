import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  description?: string;
  title: string;
};

export function SectionHeader({ description, title }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-1.5 text-sm leading-6 text-zinc-500">
            {description}
          </p>
        ) : null}
      </div>
      <ArrowRight
        aria-hidden="true"
        className="mb-1 hidden size-4 text-zinc-600 sm:block"
        strokeWidth={1.75}
      />
    </div>
  );
}
