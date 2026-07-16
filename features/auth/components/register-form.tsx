"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getSafeCallbackURL } from "@/lib/auth-callback";
import { authClient } from "@/lib/auth-client";

import { registerSchema } from "../schemas/auth";
import { AuthField } from "./auth-field";

type RegisterField =
  | "confirmPassword"
  | "email"
  | "firstName"
  | "lastName"
  | "password";

type RegisterFieldErrors = Partial<Record<RegisterField, string>>;

type RegisterFormProps = {
  callbackURL: string;
};

export function RegisterForm({ callbackURL }: RegisterFormProps) {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] =
    useState<RegisterFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const validation = registerSchema.safeParse({
      confirmPassword: formData.get("confirmPassword"),
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      password: formData.get("password"),
    });

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;

      setFieldErrors({
        confirmPassword: errors.confirmPassword?.[0],
        email: errors.email?.[0],
        firstName: errors.firstName?.[0],
        lastName: errors.lastName?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const registration = validation.data;
      const { error } = await authClient.signUp.email({
        email: registration.email.toLowerCase(),
        firstName: registration.firstName,
        lastName: registration.lastName,
        name: `${registration.firstName} ${registration.lastName}`,
        password: registration.password,
      });

      if (error) {
        setFormError(error.message ?? "Unable to create your account.");
        return;
      }

      router.replace(getSafeCallbackURL(callbackURL) ?? "/");
      router.refresh();
    } catch {
      setFormError("Unable to create your account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <AuthField
          id="register-first-name"
          name="firstName"
          type="text"
          label="First Name"
          autoComplete="given-name"
          placeholder="First name"
          error={fieldErrors.firstName}
          maxLength={64}
          required
        />
        <AuthField
          id="register-last-name"
          name="lastName"
          type="text"
          label="Last Name"
          autoComplete="family-name"
          placeholder="Last name"
          error={fieldErrors.lastName}
          maxLength={64}
          required
        />
      </div>
      <AuthField
        id="register-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        placeholder="you@example.com"
        error={fieldErrors.email}
        required
      />
      <AuthField
        id="register-password"
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        placeholder="At least 8 characters"
        error={fieldErrors.password}
        minLength={8}
        maxLength={128}
        required
      />
      <AuthField
        id="register-confirm-password"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        autoComplete="new-password"
        placeholder="Repeat your password"
        error={fieldErrors.confirmPassword}
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
        <UserPlus aria-hidden="true" className="size-4" />
        {isSubmitting ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
