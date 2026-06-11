"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconMoon, IconSun } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const [mounted, setMounted] = useState(false);
  let theme = "light";
  let toggleTheme = () => {};

  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (e) {
    // Theme context not available yet
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6  z-[100] py-10 bg-[var(--background)] max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between border-r border-[var(--card-border)]"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>

            {mounted && (
              <div className="flex items-center gap-2">
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
              </div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-[var(--card-bg)] shadow-lg text-[var(--accent)]"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-[var(--accent)]"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          target="_blank"
          href={link.href}
          className={twMerge(
            "text-[var(--text-secondary)] hover:text-[var(--accent)] transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-[var(--accent)]"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2 items-center">
      <Image
        src="/images/me.jpg"
        alt="Avatar"
        height="50"
        width="50"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Om Chavda</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
