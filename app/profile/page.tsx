import { ProfilePage } from "@/features/profile";
import { requireAuthSession } from "@/lib/auth-guards";

export default async function ProfileRoute() {
  const session = await requireAuthSession("/profile");

  return (
    <ProfilePage
      user={{
        createdAt: session.user.createdAt,
        email: session.user.email,
        firstName: session.user.firstName,
        lastName: session.user.lastName,
      }}
    />
  );
}
