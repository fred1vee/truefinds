import { CalendarDays, Mail, UserRound } from "lucide-react";

import { LogoutButton } from "./logout-button";

type ProfilePageProps = {
  user: {
    createdAt: Date;
    email: string;
    firstName: string;
    lastName: string;
  };
};

const accountDateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
});

export function ProfilePage({ user }: ProfilePageProps) {
  const fullName = `${user.firstName} ${user.lastName}`.trim();

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f0c15] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_28px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-32 size-96 rounded-full bg-primary/[0.14] blur-3xl"
        />
        <div className="relative">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_30px_rgba(139,92,246,0.16)]">
            <UserRound aria-hidden="true" className="size-6" strokeWidth={1.7} />
          </div>
          <p className="mt-6 text-sm font-medium text-primary">Account</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Your profile
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Review the basic information connected to your TrueFinds account.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-white/[0.07] bg-white/[0.025] p-5">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
                <UserRound aria-hidden="true" className="size-3.5" />
                Name
              </dt>
              <dd className="mt-3 text-base font-medium text-zinc-100">
                {fullName}
              </dd>
            </div>
            <div className="rounded-[1.35rem] border border-white/[0.07] bg-white/[0.025] p-5">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
                <Mail aria-hidden="true" className="size-3.5" />
                Email
              </dt>
              <dd className="mt-3 break-all text-base font-medium text-zinc-100">
                {user.email}
              </dd>
            </div>
            <div className="rounded-[1.35rem] border border-white/[0.07] bg-white/[0.025] p-5 sm:col-span-2">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
                <CalendarDays aria-hidden="true" className="size-3.5" />
                Account created
              </dt>
              <dd className="mt-3 text-base font-medium text-zinc-100">
                {accountDateFormatter.format(user.createdAt)}
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-white/[0.07] pt-6">
            <LogoutButton />
          </div>
        </div>
      </section>
    </div>
  );
}
