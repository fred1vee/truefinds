"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { authClient } from "@/lib/auth-client";

export type AuthUserSummary = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

type AuthSessionContextValue = {
  isAuthenticated: boolean;
  isPending: boolean;
  user: AuthUserSummary | null;
};

const AuthSessionContext =
  createContext<AuthSessionContextValue | null>(null);

type AuthSessionProviderProps = {
  children: ReactNode;
  initialUser: AuthUserSummary | null;
};

export function AuthSessionProvider({
  children,
  initialUser,
}: AuthSessionProviderProps) {
  const { data, isPending } = authClient.useSession();
  const liveUser = data?.user
    ? {
        email: data.user.email,
        firstName: data.user.firstName,
        id: data.user.id,
        lastName: data.user.lastName,
      }
    : null;
  const user = isPending ? initialUser : liveUser;
  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(user),
      isPending,
      user,
    }),
    [isPending, user],
  );

  return (
    <AuthSessionContext.Provider value={value}>
      {children}
    </AuthSessionContext.Provider>
  );
}

export function useAuthSessionState() {
  const context = useContext(AuthSessionContext);

  if (!context) {
    throw new Error(
      "useAuthSessionState must be used inside AuthSessionProvider.",
    );
  }

  return context;
}
