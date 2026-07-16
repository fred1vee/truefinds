import type { ReactNode } from "react";

import { AuthSessionProvider } from "@/components/auth/auth-session-provider";
import { AuthControls } from "@/components/layout/auth-controls";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { getCurrentSession } from "@/lib/auth-session";

type ApplicationShellProps = {
  children: ReactNode;
};

export async function ApplicationShell({ children }: ApplicationShellProps) {
  const session = await getCurrentSession();
  const initialUser = session
    ? {
        email: session.user.email,
        firstName: session.user.firstName,
        id: session.user.id,
        lastName: session.user.lastName,
      }
    : null;

  return (
    <AuthSessionProvider initialUser={initialUser}>
      <div className="relative min-h-svh">
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-[#050408]/75 backdrop-blur-2xl">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
            <span className="shrink-0 text-lg font-semibold tracking-[-0.04em] text-foreground">
              truefinds.
            </span>
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
              <LanguageSwitcher />
              <AuthControls />
            </div>
          </div>
        </header>

        <main className="mx-auto flex min-h-svh w-full max-w-6xl px-4 pb-32 pt-16 sm:px-6 sm:pt-[4.5rem] lg:px-8">
          {children}
        </main>

        <BottomNavigation />
      </div>
    </AuthSessionProvider>
  );
}
