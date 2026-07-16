import { LoginPage } from "@/features/auth";
import { redirectAuthenticatedUser } from "@/lib/auth-guards";
import { getSafeCallbackURL } from "@/lib/auth-callback";

type LoginRouteProps = {
  searchParams: Promise<{
    callbackURL?: string | string[];
  }>;
};

export default async function LoginRoute({
  searchParams,
}: LoginRouteProps) {
  const params = await searchParams;
  const callbackURL = getSafeCallbackURL(params.callbackURL) ?? "/";

  await redirectAuthenticatedUser(callbackURL);

  return <LoginPage callbackURL={callbackURL} />;
}
