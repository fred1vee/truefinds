"use client";

import { useCallback, useSyncExternalStore } from "react";

import {
  getFavoriteIdsServerSnapshot,
  getFavoriteIdsSnapshot,
  getFavoritesHydrationServerSnapshot,
  getFavoritesHydrationSnapshot,
  subscribeToFavorites,
  toggleFavorite,
} from "@/lib/favorites-store";

export function useFavorites() {
  const favoriteIds = useSyncExternalStore(
    subscribeToFavorites,
    getFavoriteIdsSnapshot,
    getFavoriteIdsServerSnapshot,
  );
  const isHydrated = useSyncExternalStore(
    subscribeToFavorites,
    getFavoritesHydrationSnapshot,
    getFavoritesHydrationServerSnapshot,
  );
  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  return {
    favoriteIds,
    isFavorite,
    isHydrated,
    toggleFavorite,
  };
}
