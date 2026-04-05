// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marcin Zalewski - Artysta",
  description: "Portfolio artysty malarza i rzeźbiarza Marcina Zalewskiego.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
