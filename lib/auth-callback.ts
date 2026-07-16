const externalProtocolPattern = /[a-z][a-z\d+.-]*:\/\//i;
const controlCharacterPattern = /[\u0000-\u001f\u007f]/;

export function getSafeCallbackURL(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  if (
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\") ||
    externalProtocolPattern.test(value) ||
    controlCharacterPattern.test(value)
  ) {
    return null;
  }

  return value;
}

export function createLoginURL(callbackURL: string) {
  const safeCallbackURL = getSafeCallbackURL(callbackURL) ?? "/";
  const searchParams = new URLSearchParams({
    callbackURL: safeCallbackURL,
  });

  return `/login?${searchParams.toString()}`;
}

export function createAuthPageURL(
  pathname: "/login" | "/register",
  callbackURL: string,
) {
  const safeCallbackURL = getSafeCallbackURL(callbackURL);

  if (!safeCallbackURL || safeCallbackURL === "/") {
    return pathname;
  }

  const searchParams = new URLSearchParams({
    callbackURL: safeCallbackURL,
  });

  return `${pathname}?${searchParams.toString()}`;
}
