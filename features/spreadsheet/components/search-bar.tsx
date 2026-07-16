import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <label htmlFor="spreadsheet-search" className="sr-only">
        Search verified finds
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-zinc-500"
        strokeWidth={1.8}
      />
      <input
        id="spreadsheet-search"
        type="search"
        placeholder="Search verified finds"
        className="h-14 w-full rounded-2xl border border-white/[0.09] bg-[#111016]/90 pl-14 pr-5 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_45px_rgba(0,0,0,0.16)] outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-zinc-600 hover:border-white/[0.14] focus:border-primary/45 focus:bg-[#15111d] focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-[1.4rem] sm:text-base"
      />
    </div>
  );
}
