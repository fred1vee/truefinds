import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Hoodies",
  "T-Shirts",
  "Pants",
  "Shoes",
  "Accessories",
  "Jackets",
] as const;

export function CategoryFilter() {
  return (
    <div
      role="group"
      aria-label="Product categories"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((category) => {
        const isSelected = category === "All";

        return (
          <button
            key={category}
            type="button"
            aria-pressed={isSelected}
            className={cn(
              "h-10 shrink-0 rounded-full border px-4 text-xs font-medium outline-none transition-[background-color,border-color,color,box-shadow,transform] duration-300 focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-95 sm:text-sm",
              isSelected
                ? "border-primary/30 bg-primary/[0.14] text-primary shadow-[0_0_24px_rgba(139,92,246,0.13)]"
                : "border-white/[0.08] bg-white/[0.025] text-zinc-500 hover:border-white/[0.14] hover:bg-white/[0.045] hover:text-zinc-300",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
