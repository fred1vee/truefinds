"use client";

import { Heart } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

type FavoriteButtonVariant = "card" | "details";

type FavoriteButtonProps = {
  productId: string;
  title: string;
  variant?: FavoriteButtonVariant;
};

const variantStyles: Record<FavoriteButtonVariant, string> = {
  card: "absolute right-3 top-3 size-9 bg-black/40 backdrop-blur-md",
  details: "size-10 bg-white/[0.035]",
};

export function FavoriteButton({
  productId,
  title,
  variant = "card",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isActive = isFavorite(productId);

  return (
    <button
      type="button"
      aria-label={`${isActive ? "Remove" : "Add"} ${title} ${
        isActive ? "from" : "to"
      } favorites`}
      aria-pressed={isActive}
      onClick={() => toggleFavorite(productId)}
      className={cn(
        "flex items-center justify-center rounded-full border outline-none transition-[background-color,border-color,box-shadow,color,transform] duration-300 focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-90",
        variantStyles[variant],
        isActive
          ? "border-primary/45 bg-primary/20 text-primary shadow-[0_0_24px_rgba(168,85,247,0.42)]"
          : "border-white/10 text-zinc-500 hover:border-primary/30 hover:bg-primary/[0.12] hover:text-primary",
      )}
    >
      <Heart
        aria-hidden="true"
        className={cn("size-4", isActive && "fill-current")}
        strokeWidth={1.8}
      />
    </button>
  );
}
