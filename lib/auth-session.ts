import "server-only";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";

export type AuthSession = typeof auth.$Infer.Session;

export async function getCurrentSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}
