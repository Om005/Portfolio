"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-[var(--text-tertiary)] border-t border-[var(--card-border)] bg-[var(--background)]">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Om Chavda
    </div>
  );
};
