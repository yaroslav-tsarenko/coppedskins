"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

/** Gallery ⇄ After Hours. A square switch, sized to sit in the black strip. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "After Hours (dark)" : "Gallery (light)"} mode`}
      className="focus-amber inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] border border-current/30 text-current/80 transition-colors hover:border-current hover:text-current"
    >
      {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
    </button>
  );
}
