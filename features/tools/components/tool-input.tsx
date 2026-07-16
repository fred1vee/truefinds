import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ToolInputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string | null;
  hint?: string;
  label: string;
};

export function ToolInput({
  className,
  error,
  hint,
  id,
  label,
  ...props
}: ToolInputProps) {
  const descriptionId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium text-zinc-400"
      >
        {label}
      </label>
      <input
        id={id}
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-12 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 text-sm text-white outline-none transition-[background-color,border-color,box-shadow] duration-300 placeholder:text-zinc-700 hover:border-white/[0.14] focus:border-primary/45 focus:bg-black/30 focus:ring-4 focus:ring-primary/10",
          error && "border-destructive/50 focus:border-destructive/60 focus:ring-destructive/10",
          className,
        )}
        {...props}
      />
      {hint ? (
        <p id={descriptionId} className="mt-2 text-xs leading-5 text-zinc-600">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-xs leading-5 text-red-400"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
