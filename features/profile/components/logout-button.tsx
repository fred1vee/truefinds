"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function LogoutButton() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleLogout() {
    setError(null);
    setIsSigningOut(true);

    try {
      const { error: signOutError } = await authClient.signOut();

      if (signOutError) {
        setError(signOutError.message ?? "Unable to log out.");
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Unable to log out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <div>
      <Button
        type="button"
        size="lg"
        onClick={handleLogout}
        disabled={isSigningOut}
        className="h-11 rounded-xl bg-primary px-5 shadow-[0_12px_35px_rgba(139,92,246,0.25)] hover:bg-primary/90"
      >
        <LogOut aria-hidden="true" className="size-4" />
        {isSigningOut ? "Logging out..." : "Log out"}
      </Button>
      {error ? (
        <p className="mt-3 text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
