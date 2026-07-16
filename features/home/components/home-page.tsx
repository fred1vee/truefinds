import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  GraduationCap,
  Heart,
  PackageCheck,
  ReceiptText,
  SearchCheck,
  Store,
  Table2,
  UserRoundPlus,
  WalletCards,
  Wrench,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BenefitCard } from "./benefit-card";
import { PlatformSectionCard } from "./platform-section-card";
import { ProcessStep } from "./process-step";
import { SectionHeader } from "./section-header";

const benefits = [
  {
    description:
      "Access carefully selected finds prepared for practical product research.",
    icon: SearchCheck,
    title: "Verified product finds",
  },
  {
    description:
      "Follow a clear learning path from ordering basics to receiving products.",
    icon: GraduationCap,
    title: "Step-by-step learning",
  },
  {
    description:
      "Use focused calculators for delivery estimates and currency conversion.",
    icon: Calculator,
    title: "Delivery and currency tools",
  },
  {
    description:
      "Learn the essential first steps for turning sourced products into resale.",
    icon: Store,
    title: "Help with starting resale",
  },
];

const processSteps = [
  {
    description: "Create your TrueFinds account.",
    icon: UserRoundPlus,
    title: "Register",
  },
  {
    description: "Complete the 4.99 AZN access payment.",
    icon: WalletCards,
    title: "Pay 4.99 AZN",
  },
  {
    description: "Submit your payment receipt for review.",
    icon: ReceiptText,
    title: "Upload receipt",
  },
  {
    description: "Get access after confirmation.",
    icon: CheckCircle2,
    title: "Receive access",
  },
  {
    description: "Learn, research, and use the available tools.",
    icon: PackageCheck,
    title: "Use the platform",
  },
];

const platformSections = [
  {
    description:
      "Explore verified finds and organize product research in one place.",
    href: "/spreadsheet",
    icon: Table2,
    title: "Spreadsheet",
  },
  {
    description:
      "Estimate delivery costs and convert currencies with practical tools.",
    href: "/tools",
    icon: Wrench,
    title: "Tools",
  },
  {
    description: "Keep useful finds together so they are easy to revisit.",
    href: "/favorites",
    icon: Heart,
    title: "Favorites",
  },
  {
    description:
      "Learn the ordering and resale process through a clear guided path.",
    href: "/tutorial",
    icon: BookOpen,
    title: "Tutorial",
  },
];

export function HomePage() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0e0b14] px-5 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_30px_100px_rgba(0,0,0,0.28)] sm:px-8 sm:py-14 lg:min-h-[36rem] lg:px-12 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-32 -z-10 size-[28rem] rounded-full bg-primary/[0.16] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-48 left-1/4 -z-10 size-96 rounded-full bg-violet-800/[0.12] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-1/2 -z-10 hidden size-72 -translate-y-1/2 rotate-12 rounded-[4rem] border border-primary/15 bg-gradient-to-br from-primary/[0.12] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_80px_rgba(124,58,237,0.12)] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute right-[16%] top-[28%] -z-10 hidden size-28 -rotate-12 rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl lg:block"
        />

        <div className="flex min-h-full max-w-3xl flex-col justify-center">
          <p className="text-sm font-semibold tracking-[-0.035em] text-primary sm:text-base">
            truefinds.
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Learn to order from Pinduoduo and start reselling with confidence.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            TrueFinds brings verified finds, practical tools, and guided learning
            into one focused platform for aspiring resellers in Azerbaijan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/spreadsheet"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-xl bg-primary px-5 text-sm shadow-[0_12px_35px_rgba(139,92,246,0.28)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_16px_45px_rgba(139,92,246,0.36)] active:translate-y-0",
              )}
            >
              Explore Spreadsheet
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/tutorial"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-xl border-white/10 bg-white/[0.035] px-5 text-sm text-zinc-200 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.08] active:translate-y-0",
              )}
            >
              View Tutorial
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 sm:mt-20" aria-label="Platform value">
        <SectionHeader
          title="What access includes"
          description="Everything you need to learn the process and take the first practical steps."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-20" aria-label="How it works">
        <SectionHeader
          title="How it works"
          description="A simple path from registration to platform access."
        />
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.title}
              {...step}
              stepNumber={index + 1}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </ol>
      </section>

      <section className="mt-14 sm:mt-20" aria-label="Platform sections">
        <SectionHeader
          title="Explore the platform"
          description="Each section is designed around one clear part of the sourcing journey."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {platformSections.map((section) => (
            <PlatformSectionCard key={section.href} {...section} />
          ))}
        </div>
      </section>

      <section className="relative mt-14 overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/[0.14] via-[#110d19] to-[#0b0910] px-5 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_80px_rgba(76,29,149,0.14)] sm:mt-20 sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Start exploring
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Build your sourcing knowledge in one place.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Explore the platform now or begin with the step-by-step tutorial.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/spreadsheet"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-xl bg-primary px-5 text-sm shadow-[0_12px_35px_rgba(139,92,246,0.25)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0",
              )}
            >
              Explore the platform
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/tutorial"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-xl border-white/10 bg-black/15 px-5 text-sm text-zinc-200 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.08] active:translate-y-0",
              )}
            >
              Start with Tutorial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
