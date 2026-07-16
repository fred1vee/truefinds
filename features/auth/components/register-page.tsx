import { AuthPageShell } from "./auth-page-shell";
import { RegisterForm } from "./register-form";
import { createAuthPageURL } from "@/lib/auth-callback";

type RegisterPageProps = {
  callbackURL: string;
};

export function RegisterPage({ callbackURL }: RegisterPageProps) {
  return (
    <AuthPageShell
      title="Create your account"
      description="Register for a secure TrueFinds account. Platform access rules will be added later."
      footerText="Already have an account?"
      footerAction="Sign in"
      footerHref={createAuthPageURL("/login", callbackURL)}
    >
      <RegisterForm callbackURL={callbackURL} />
    </AuthPageShell>
  );
}
