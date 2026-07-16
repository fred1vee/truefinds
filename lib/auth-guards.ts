import "server-only";

import { redirect } from "next/navigation";

import {
  createLoginURL,
  getSafeCallbackURL,
} from "@/lib/auth-callback";
import { getCurrentSession } from "@/lib/auth-session";

export async function requireAuthSession(callbackURL: string) {
  const session = await getCurrentSession();

  if (!session) {
    redirect(createLoginURL(callbackURL));
  }

  return session;
}

export async function redirectAuthenticatedUser(callbackURL: unknown) {
  const session = await getCurrentSession();

  if (session) {
    redirect(getSafeCallbackURL(callbackURL) ?? "/");
  }
}
