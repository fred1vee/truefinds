export const FAVORITES_STORAGE_KEY = "truefinds:favorites";

const emptyFavoriteIds: readonly string[] = [];
const listeners = new Set<() => void>();

let favoriteIds: readonly string[] = emptyFavoriteIds;
let isHydrated = false;

function emitChange() {
  listeners.forEach((listener) => listener());
}

function parseFavoriteIds(value: string | null): readonly string[] {
  if (!value) {
    return emptyFavoriteIds;
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return emptyFavoriteIds;
    }

    return [...new Set(parsedValue.filter((item): item is string => typeof item === "string"))];
  } catch {
    return emptyFavoriteIds;
  }
}

function readFavoriteIds() {
  if (typeof window === "undefined") {
    return emptyFavoriteIds;
  }

  try {
    return parseFavoriteIds(window.localStorage.getItem(FAVORITES_STORAGE_KEY));
  } catch {
    return emptyFavoriteIds;
  }
}

function writeFavoriteIds(nextFavoriteIds: readonly string[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(nextFavoriteIds),
    );
  } catch {
    // Keep the in-memory state usable when storage is unavailable or full.
  }
}

function handleStorageChange(event: StorageEvent) {
  if (event.key !== FAVORITES_STORAGE_KEY) {
    return;
  }

  favoriteIds = parseFavoriteIds(event.newValue);
  emitChange();
}

function initializeFavorites() {
  if (isHydrated || typeof window === "undefined") {
    return;
  }

  favoriteIds = readFavoriteIds();
  isHydrated = true;
  window.addEventListener("storage", handleStorageChange);
  emitChange();
}

export function subscribeToFavorites(listener: () => void) {
  listeners.add(listener);
  initializeFavorites();

  return () => {
    listeners.delete(listener);
  };
}

export function getFavoriteIdsSnapshot() {
  return favoriteIds;
}

export function getFavoriteIdsServerSnapshot() {
  return emptyFavoriteIds;
}

export function getFavoritesHydrationSnapshot() {
  return isHydrated;
}

export function getFavoritesHydrationServerSnapshot() {
  return false;
}

export function toggleFavorite(productId: string) {
  if (typeof window === "undefined") {
    return;
  }

  initializeFavorites();

  favoriteIds = favoriteIds.includes(productId)
    ? favoriteIds.filter((favoriteId) => favoriteId !== productId)
    : [...favoriteIds, productId];

  writeFavoriteIds(favoriteIds);
  emitChange();
}
