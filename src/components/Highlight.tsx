import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-[var(--accent-light)] text-[var(--accent)] font-medium rounded-sm px-1.5 py-0.5", className)}>
      {children}
    </span>
  );
};
