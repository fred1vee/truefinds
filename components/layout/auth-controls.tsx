"use client";

import Link from "next/link";
import { LogIn, UserPlus, UserRound } from "lucide-react";

import { useAuthSessionState } from "@/components/auth/auth-session-provider";

export function AuthControls() {
  const { isAuthenticated, isPending } = useAuthSessionState();

  if (isAuthenticated) {
    return (
      <Link
        href="/profile"
        aria-label="Open profile"
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.12] text-primary shadow-[0_0_22px_rgba(139,92,246,0.13)] outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.18] hover:shadow-[0_0_28px_rgba(139,92,246,0.2)] focus-visible:ring-2 focus-visible:ring-primary/70 active:translate-y-0 sm:size-10"
      >
        <UserRound aria-hidden="true" className="size-4" strokeWidth={1.8} />
      </Link>
    );
  }

  if (isPending) {
    return (
      <div
        aria-hidden="true"
        className="h-8 w-[5.5rem] animate-pulse rounded-full bg-white/[0.04] sm:h-9 sm:w-36"
      />
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      <Link
        href="/login"
        className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] px-2 text-[0.625rem] font-medium text-zinc-400 outline-none transition-[background-color,border-color,color] duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] hover:text-white focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-9 sm:px-3 sm:text-xs max-[380px]:size-8 max-[380px]:px-0"
      >
        <LogIn aria-hidden="true" className="size-3.5" />
        <span className="max-[380px]:sr-only">Log in</span>
      </Link>
      <Link
        href="/register"
        className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-primary/25 bg-primary/[0.13] px-2 text-[0.625rem] font-semibold text-primary shadow-[0_0_18px_rgba(139,92,246,0.1)] outline-none transition-[background-color,border-color,box-shadow] duration-300 hover:border-primary/40 hover:bg-primary/[0.19] hover:shadow-[0_0_24px_rgba(139,92,246,0.16)] focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-9 sm:px-3 sm:text-xs max-[380px]:size-8 max-[380px]:px-0"
      >
        <UserPlus aria-hidden="true" className="size-3.5" />
        <span className="max-[380px]:sr-only">Sign up</span>
      </Link>
    </div>
  );
}
