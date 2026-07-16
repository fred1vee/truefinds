import { RefreshCw } from "lucide-react";

export function UpdatedBadge() {
  return (
    <div className="fixed bottom-28 right-4 z-30 flex items-center gap-2 rounded-full border border-primary/25 bg-[#17111f]/85 px-3.5 py-2.5 text-xs font-semibold text-primary shadow-[0_14px_40px_rgba(0,0,0,0.34),0_0_28px_rgba(139,92,246,0.15)] backdrop-blur-xl sm:bottom-32 sm:right-6 lg:right-8">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      <RefreshCw aria-hidden="true" className="size-3.5" strokeWidth={2} />
      Updated Today
    </div>
  );
}
