import type { ReactNode } from "react";

import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

type ApplicationShellProps = {
  children: ReactNode;
};

export function ApplicationShell({ children }: ApplicationShellProps) {
  return (
    <div className="relative min-h-svh">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-[#050408]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <span className="text-lg font-semibold tracking-[-0.04em] text-foreground">
            truefinds.
          </span>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="mx-auto flex min-h-svh w-full max-w-6xl px-4 pb-32 pt-16 sm:px-6 sm:pt-[4.5rem] lg:px-8">
        {children}
      </main>

      <BottomNavigation />
    </div>
  );
}
