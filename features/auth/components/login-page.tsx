import { AuthPageShell } from "./auth-page-shell";
import { LoginForm } from "./login-form";
import { createAuthPageURL } from "@/lib/auth-callback";

type LoginPageProps = {
  callbackURL: string;
};

export function LoginPage({ callbackURL }: LoginPageProps) {
  return (
    <AuthPageShell
      title="Welcome back"
      description="Sign in to continue to your TrueFinds workspace."
      footerText="New to TrueFinds?"
      footerAction="Create an account"
      footerHref={createAuthPageURL("/register", callbackURL)}
    >
      <LoginForm callbackURL={callbackURL} />
    </AuthPageShell>
  );
}
