import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

type AuthPageShellProps = {
  children: ReactNode;
  description: string;
  footerAction: string;
  footerHref: string;
  footerText: string;
  title: string;
};

export function AuthPageShell({
  children,
  description,
  footerAction,
  footerHref,
  footerText,
  title,
}: AuthPageShellProps) {
  return (
    <div className="flex w-full items-center justify-center py-8 sm:py-12 lg:py-16">
      <section className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_28px_90px_rgba(0,0,0,0.28)] sm:p-8">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 size-80 rounded-full bg-primary/[0.15] blur-3xl"
        />
        <div className="relative">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_28px_rgba(139,92,246,0.15)]">
            <ShieldCheck
              aria-hidden="true"
              className="size-5"
              strokeWidth={1.75}
            />
          </div>
          <p className="mt-6 text-sm font-semibold tracking-[-0.035em] text-primary">
            truefinds.
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {description}
          </p>

          <div className="mt-7">{children}</div>

          <p className="mt-7 border-t border-white/[0.07] pt-5 text-center text-sm text-zinc-600">
            {footerText}{" "}
            <Link
              href={footerHref}
              className="font-medium text-primary outline-none transition-colors hover:text-primary/80 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {footerAction}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
