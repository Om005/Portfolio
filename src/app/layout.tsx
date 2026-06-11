import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Om Chavda's Portfolio",
  description:
    "Om Chavda is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-[var(--background)] dark:bg-[var(--background)]"
        )}
      >
        <ThemeProvider>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-[var(--background)] flex-1 overflow-y-auto transition-colors duration-300">
            <div className="flex-1 bg-[var(--background)] min-h-screen lg:rounded-tl-xl border border-transparent lg:border-[var(--card-border)] overflow-y-auto">
              {children}
              <Footer />
              <Toaster position="top-center" />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
