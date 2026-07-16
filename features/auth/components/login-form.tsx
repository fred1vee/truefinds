"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getSafeCallbackURL } from "@/lib/auth-callback";
import { authClient } from "@/lib/auth-client";

import { loginSchema } from "../schemas/auth";
import { AuthField } from "./auth-field";

type LoginFieldErrors = Partial<Record<"email" | "password", string>>;

type LoginFormProps = {
  callbackURL: string;
};

export function LoginForm({ callbackURL }: LoginFormProps) {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<LoginFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const validation = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;

      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await authClient.signIn.email({
        email: validation.data.email.toLowerCase(),
        password: validation.data.password,
      });

      if (error) {
        setFormError(error.message ?? "Unable to sign in.");
        return;
      }

      router.replace(getSafeCallbackURL(callbackURL) ?? "/");
      router.refresh();
    } catch {
      setFormError("Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <AuthField
        id="login-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        placeholder="you@example.com"
        error={fieldErrors.email}
        required
      />
      <AuthField
        id="login-password"
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        placeholder="Enter your password"
        error={fieldErrors.password}
        minLength={8}
        maxLength={128}
        required
      />

      {formError ? (
        <p
          role="alert"
          className="rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-3 text-sm text-red-300"
        >
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-primary text-sm shadow-[0_12px_35px_rgba(139,92,246,0.28)] hover:bg-primary/90"
      >
        <LogIn aria-hidden="true" className="size-4" />
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
