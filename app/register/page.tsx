import { RegisterPage } from "@/features/auth";
import { redirectAuthenticatedUser } from "@/lib/auth-guards";
import { getSafeCallbackURL } from "@/lib/auth-callback";

type RegisterRouteProps = {
  searchParams: Promise<{
    callbackURL?: string | string[];
  }>;
};

export default async function RegisterRoute({
  searchParams,
}: RegisterRouteProps) {
  const params = await searchParams;
  const callbackURL = getSafeCallbackURL(params.callbackURL) ?? "/";

  await redirectAuthenticatedUser(callbackURL);

  return <RegisterPage callbackURL={callbackURL} />;
}
