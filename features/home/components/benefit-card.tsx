import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export function BenefitCard({
  description,
  icon: Icon,
  title,
}: BenefitCardProps) {
  return (
    <article className="group rounded-[1.6rem] border border-white/[0.08] bg-[#111016] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_55px_rgba(0,0,0,0.18)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_65px_rgba(76,29,149,0.14)] active:scale-[0.99] sm:p-6">
      <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.1] text-primary shadow-[0_0_24px_rgba(139,92,246,0.12)] transition-transform duration-300 group-hover:scale-105">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.035em] text-zinc-100">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </article>
  );
}
