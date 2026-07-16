"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Heart,
  Home as HomeIcon,
  Table2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type NavigationItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const navigationItems: NavigationItem[] = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/spreadsheet", icon: Table2, label: "Spreadsheet" },
  { href: "/tools", icon: Wrench, label: "Tools" },
  { href: "/favorites", icon: Heart, label: "Favorites" },
  { href: "/tutorial", icon: BookOpen, label: "Tutorial" },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-2xl rounded-[1.75rem] border border-white/[0.09] bg-[#100d17]/80 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-2"
    >
      <ul className="grid grid-cols-5 gap-1">
        {navigationItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-[1.25rem] border border-transparent px-1 text-[0.625rem] font-medium outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-primary/70 sm:min-h-16 sm:text-xs",
                  isActive
                    ? "border-primary/20 bg-primary/[0.13] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_28px_rgba(139,92,246,0.14)]"
                    : "text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-300",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "size-4 transition-[filter,transform] duration-300 sm:size-[1.125rem]",
                    isActive && "drop-shadow-[0_0_7px_rgba(168,85,247,0.7)]",
                  )}
                  strokeWidth={isActive ? 2.25 : 1.8}
                />
                <span className="max-w-full truncate">{label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-1 h-0.5 w-5 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.9)] transition-all duration-300 sm:bottom-1.5",
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
