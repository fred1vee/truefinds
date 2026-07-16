import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type PlatformSectionCardProps = {
  description: string;
  href: string;
  icon: LucideIcon;
  title: string;
};

export function PlatformSectionCard({
  description,
  href,
  icon: Icon,
  title,
}: PlatformSectionCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#111016] p-5 outline-none transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(76,29,149,0.16)] focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10 active:scale-[0.99] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 size-48 rounded-full bg-primary/[0.08] blur-2xl transition-colors duration-300 group-hover:bg-primary/[0.14]"
      />
      <div className="relative flex items-start justify-between gap-5">
        <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.1] text-primary">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 text-zinc-600 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          strokeWidth={1.75}
        />
      </div>
      <div className="relative mt-8">
        <h3 className="text-xl font-semibold tracking-[-0.04em] text-zinc-100">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </Link>
  );
}
