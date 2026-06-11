"use client";

import { useTheme } from "@/context/ThemeContext";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  let theme = "light";
  let toggleTheme = () => {};

  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (e) {
    // useTheme not available, render a placeholder
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <IconMoon className="h-5 w-5 text-[var(--accent)]" />
      ) : (
        <IconSun className="h-5 w-5 text-[var(--accent)]" />
      )}
    </motion.button>
  );
};
