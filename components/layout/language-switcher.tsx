"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const languages = ["AZ", "RU", "EN"] as const;

type Language = (typeof languages)[number];

export function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("AZ");

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-white/[0.09] bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
    >
      {languages.map((language) => {
        const isActive = activeLanguage === language;

        return (
          <button
            key={language}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveLanguage(language)}
            className={cn(
              "min-w-9 rounded-full px-2 py-1.5 text-[0.6875rem] font-semibold outline-none transition-[color,background-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary/70 sm:min-w-10 sm:text-xs",
              isActive
                ? "bg-primary/20 text-primary shadow-[inset_0_0_0_1px_rgba(168,85,247,0.25),0_0_16px_rgba(139,92,246,0.24)]"
                : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300",
            )}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
}
